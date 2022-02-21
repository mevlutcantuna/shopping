import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchBrands } from "../../api/fetchBrands";
import SearchInput from "../search-input";
import FilterTitle from "../filter-title";
import CheckIcon from "../../icons/CheckIcon";

const Brands = () => {
  const [brands, setBrands] = useState();
  const [searchedBrands, setSearchedBrands] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getBrands = async () => {
    const brands = await fetchBrands();
    if (searchValue.trim() === "") {
      const brandsData = ["All", ...brands?.data];
      return setBrands(brandsData);
    } else {
      const filteredBrands = brands.data.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );
      return setBrands(filteredBrands);
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

  const handleChangeInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    getBrands();
  }, [searchValue]);

  useEffect(() => {
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
        <BrandsSearchItems>
          {brands?.map((item, index) => (
            <BrandsSearchLabel key={index}>
              <BrandsSearchCheckBox
                onChange={() => handleChangeSearchedBrands(item)}
                type="checkbox"
                checked={!searchedBrands?.includes(item) ? false : true}
              />
              <BrandsSearchText>{item}</BrandsSearchText>
              <BrandsSearchCheckIcon
                item={item}
                searchedBrands={searchedBrands}
              >
                <CheckIcon color="#fff" />
              </BrandsSearchCheckIcon>
            </BrandsSearchLabel>
          ))}
        </BrandsSearchItems>
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

const BrandsSearchLabel = styled.label`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.gray700};
  position: relative;
`;

const BrandsSearchCheckBox = styled.input`
  appearance: none;
  width: 22px;
  min-width: 22px;
  height: 22px;
  min-height: 22px;
  box-shadow: rgb(93 56 192 / 40%) 0 1px 7px 0;

  &:checked {
    background-color: ${(p) => p.theme.colors.primaryBlue};
  }
`;

const BrandsSearchCheckIcon = styled.div`
  position: absolute;
  left: 3px;
  display: ${({ item, searchedBrands }) =>
    searchedBrands.includes(item) ? "" : "none"};
`;

const BrandsSearchText = styled.div`
  margin: 0 1rem;
`;
