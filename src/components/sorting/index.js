import FilterTitle from "../filter-title";
import styled from "styled-components";

import CheckIcon from "../../icons/CheckIcon";
import { useDispatch, useSelector } from "react-redux";
import { changeSorting } from "../../store/actions/filters";

const Sorting = () => {
  const sortValue = useSelector((state) => state.filters.sort);
  const dispatch = useDispatch();

  const handleChangeRadio = (value) => {
    dispatch(changeSorting(value));
  };

  const sortFilterItems = [
    "Price high to low",
    "Price low to high",
    "New to old",
    "Old to low",
  ];

  return (
    <SortingWrapper>
      <FilterTitle title="Sorting" />
      <SortingBox>
        {sortFilterItems.map((item, index) => (
          <SortingLabel key={index}>
            <SortingInput
              onChange={() => handleChangeRadio(item)}
              type="radio"
              checked={item === sortValue}
            />
            {item}
            <SortingCheckIcon item={item} sortValue={sortValue}>
              <CheckIcon color="#1CA4CE" />
            </SortingCheckIcon>
          </SortingLabel>
        ))}
      </SortingBox>
    </SortingWrapper>
  );
};

export default Sorting;

const SortingWrapper = styled.div``;

const SortingBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
`;

const SortingLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin: 0.5rem 0;
  color: ${(p) => p.theme.colors.gray700};
`;
const SortingInput = styled.input`
  appearance: none;
  width: 22px;
  height: 22px;
  border: 1.5px solid ${(p) => p.theme.colors.primaryBlue};
  border-radius: 100%;
  margin-right: 1rem;
  cursor: pointer;
`;

const SortingCheckIcon = styled.span`
  display: ${({ item, sortValue }) => (item === sortValue ? "" : "none")};
  position: absolute;
  left: 3px;
  top: 3px;
`;
