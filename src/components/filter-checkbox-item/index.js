import CheckIcon from "../../icons/CheckIcon";
import styled from "styled-components";

const FilterCheckboxItem = ({ item, handleChange, searchItems }) => {
  return (
    <>
      <FilterCheckboxItemLabel>
        <FilterCheckboxItemCheckBox
          onChange={() => handleChange(item)}
          type="checkbox"
          checked={searchItems?.includes(item)}
        />
        <FilterCheckboxItemText>{item}</FilterCheckboxItemText>
        <FilterCheckboxItemCheckIcon item={item} searchItems={searchItems}>
          <CheckIcon color="#fff" />
        </FilterCheckboxItemCheckIcon>
      </FilterCheckboxItemLabel>
    </>
  );
};

export default FilterCheckboxItem;

const FilterCheckboxItemLabel = styled.label`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.gray700};
  position: relative;
`;

const FilterCheckboxItemCheckBox = styled.input`
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

const FilterCheckboxItemText = styled.span`
  margin: 0 1rem;
`;

const FilterCheckboxItemCheckIcon = styled.div`
  position: absolute;
  left: 3px;
  display: ${({ item, searchItems }) =>
    searchItems?.includes(item) ? "" : "none"};
`;
