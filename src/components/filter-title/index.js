import styled from "styled-components";

const Index = ({ title }) => {
  return <FilterTitleText>{title}</FilterTitleText>;
};

export default Index;

const FilterTitleText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.gray700};
`;
