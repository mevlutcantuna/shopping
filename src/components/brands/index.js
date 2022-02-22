import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchBrands } from "../../api/fetchBrands";
import SearchInput from "../search-input";
import FilterTitle from "../filter-title";
import FilterLoader from "../loaders/FilterLoader";
import FilterCheckboxItem from "../filter-checkbox-item";

const Brands = () => {
  const [brands, setBrands] = useState();
  const [searchedBrands, setSearchedBrands] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChangeInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  // get all brands
  const getBrands = async () => {
    const brands = await fetchBrands();

    if (searchValue.trim() === "") {
      const brandsData = ["All", ...brands?.data];
      setBrands(brandsData);
      setLoading(false);
    } else {
      const filteredBrands = brands.data.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );
      setBrands(filteredBrands);
      setLoading(false);
    }
  };

  // add or remove brands according to some conditions
  const handleChangeSearchedBrands = (value) => {
    if (searchedBrands.includes(value)) {
      const removedSearchedBrands = searchedBrands.filter(
        (item) => item !== value
      );
      if (removedSearchedBrands.length === 0) {
        return setSearchedBrands(["All"]);
      }
      return setSearchedBrands(removedSearchedBrands);
    } else {
      if (value === "All") {
        return setSearchedBrands(["All"]);
      }
      const addedSearchedBrands = [...searchedBrands, value];
      const removeFromAllAddedSearchedBrands = addedSearchedBrands.filter(
        (item) => item !== "All"
      );
      return setSearchedBrands(removeFromAllAddedSearchedBrands);
    }
  };

  useEffect(() => {
    getBrands();
  }, [searchValue]);

  useEffect(() => {
    // when page upload,choose all brands
    handleChangeSearchedBrands("All");
  }, []);

  return (
    <BrandsWrapper>
      <FilterTitle title="Brands" />
      <BrandsContainer>
        <SearchInput
          value={searchValue}
          onChange={handleChangeInputValue}
          placeholder={"Search brands"}
        />
        {!loading ? (
          <BrandsSearchItems>
            {brands?.map((item, index) => (
              <FilterCheckboxItem
                key={index}
                item={item}
                handleChange={handleChangeSearchedBrands}
                searchItems={searchedBrands}
              />
            ))}
          </BrandsSearchItems>
        ) : (
          <FilterLoader />
        )}
      </BrandsContainer>
    </BrandsWrapper>
  );
};

export default Brands;

const BrandsWrapper = styled.div`
  margin: 1rem 0;
`;

const BrandsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
`;

const BrandsSearchItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  height: 200px;
  overflow: scroll;
`;
