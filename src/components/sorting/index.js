import FilterTitle from "../filter-title";
import styled from "styled-components";

import CheckIcon from "../../icons/CheckIcon";
import { useDispatch, useSelector } from "react-redux";
import { changeSorting } from "../../store/actions/filters";

const Sorting = () => {
  const sortValue = useSelector((state) => state.filters.sort);
  const dispatch = useDispatch();
<<<<<<< HEAD

  const handleChangeRadio = (value) => {
    dispatch(changeSorting(value));
  };

  const sortFilterItems = [
    {
      title: "Price high to low",
      type: "price",
      order: "desc",
    },
    {
      title: "Price low to high",
      type: "price",
      order: "asc",
    },
    {
      title: "New to old",
      type: "added",
      order: "desc",
    },
    {
      title: "Old to low",
      type: "added",
      order: "asc",
    },
  ];

=======

  const handleChangeRadio = (value) => {
    dispatch(changeSorting(value));
  };

  const sortFilterItems = [
    "Price high to low",
    "Price low to high",
    "New to old",
    "Old to low",
  ];

>>>>>>> efa1fb195ca6e98c19dfbb1afdc054fbf29950e5
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
            {item.title}
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
  display: ${({ item, sortValue }) =>
    item.title === sortValue.title ? "" : "none"};
  position: absolute;
  left: 3px;
  top: 3px;
`;
