import styled from "styled-components";
import SearchInput from "../search-input";
import FilterTitle from "../filter-title";
import { useEffect, useState } from "react";
import { fetchTags } from "../../api/fetchTags";

import FilterCheckboxItem from "../filter-checkbox-item";
import FilterLoader from "../loaders/FilterLoader";

const Tags = () => {
  const [tags, setTags] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [searchedTags, setSearchedTags] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const getTags = async () => {
    const tags = await fetchTags();
    if (searchValue.trim() === "") {
      const brandsData = ["All", ...tags?.data];
      setTags(brandsData);
      setLoading(false);
    } else {
      const filteredBrands = tags.data.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );
      setTags(filteredBrands);
      setLoading(false);
    }
  };

  const handleChangeSearchedTags = (value) => {
    if (searchedTags.includes(value)) {
      const removedSearchedTags = searchedTags.filter((item) => item !== value);
      if (removedSearchedTags.length === 0) {
        return setSearchedTags(["All"]);
      }
      return setSearchedTags(removedSearchedTags);
    } else {
      if (value === "All") {
        return setSearchedTags(["All"]);
      }
      const addedSearchedBrands = [...searchedTags, value];
      const removeFromAllAddedSearchedBrands = addedSearchedBrands.filter(
        (item) => item !== "All"
      );
      return setSearchedTags(removeFromAllAddedSearchedBrands);
    }
  };

  useEffect(() => {
    getTags();
  }, [searchValue]);

  useEffect(() => {
    handleChangeSearchedTags("All");
  }, []);

  return (
    <TagsWrapper>
      <FilterTitle title={"Tags"} />
      <TagsContainer>
        <SearchInput
          onChange={handleChangeSearchValue}
          value={searchValue}
          placeholder={"Search Tags"}
        />
        {!loading ? (
          <TagsSearchItems>
            {tags?.map((item, index) => (
              <FilterCheckboxItem
                item={item}
                handleChange={handleChangeSearchedTags}
                searchItems={searchedTags}
                key={index}
              />
            ))}
          </TagsSearchItems>
        ) : (
          <FilterLoader />
        )}
      </TagsContainer>
    </TagsWrapper>
  );
};

export default Tags;

const TagsWrapper = styled.div`
  height: 220px;
`;

const TagsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const TagsSearchItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  height: 200px;
  overflow: scroll;
`;
