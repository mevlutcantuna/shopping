import styled from "styled-components";

const ProductButton = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default ProductButton;

const StyledButton = styled.button`
  width: 100%;
  font-size: 12px;
  border-radius: 2px;
  margin-top: 8px;
  padding: 1px 0;
  font-weight: 500;
  background-color: ${(p) => p.theme.colors.primaryBlue};
  text-align: center;
  line-height: 20px;
  color: white;
  cursor: pointer;
`;
