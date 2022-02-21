import styled from "styled-components";

const SearchInput = ({ placeholder, onChange, value }) => {
  return (
    <>
      <StyledSearchInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default SearchInput;

const StyledSearchInput = styled.input`
  border: 1.5px solid ${(p) => p.theme.colors.gray200};
  padding: 12px 16px;
  border-radius: 2px;
  width: calc(100% - 2rem);
  color: ${(p) => p.theme.colors.gray500};
  font-size: 14px;
`;
