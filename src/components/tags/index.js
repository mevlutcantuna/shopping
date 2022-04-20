import styled from "styled-components";
import SearchInput from "../search-input";
import FilterTitle from "../filter-title";
import { useEffect, useState } from "react";
import { fetchTags } from "../../api/fetchTags";

import FilterCheckboxItem from "../filter-checkbox-item";
import FilterLoader from "../loaders/FilterLoader";
import { useDispatch, useSelector } from "react-redux";
import { changeTags } from "../../store/actions/filters";

const Tags = () => {
  const [tags, setTags] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const searchedTags = useSelector((state) => state.filters.tags);
  const dispatch = useDispatch();

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  // get all tags
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

  // add or remove brands according to some conditions
  const handleChangeSearchedTags = (value) => {
    if (searchedTags.includes(value)) {
      const removedSearchedTags = searchedTags.filter((item) => item !== value);
      if (removedSearchedTags.length === 0) {
        return dispatch(changeTags(["All"]));
      }
      return dispatch(changeTags(removedSearchedTags));
    } else {
      if (value === "All") {
        return dispatch(changeTags(["All"]));
      }
      const addedSearchedBrands = [...searchedTags, value];
      const removeFromAllAddedSearchedBrands = addedSearchedBrands.filter(
        (item) => item !== "All"
      );
      return dispatch(changeTags(removeFromAllAddedSearchedBrands));
    }
  };

  useEffect(() => {
    getTags();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    handleChangeSearchedTags("All");
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
