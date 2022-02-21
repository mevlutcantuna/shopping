import Header from "./components/header";
import styled from "styled-components";
import Sorting from "./components/sorting";
import Brands from "./components/brands";
import Tags from "./components/tags";
import Products from "./components/products";
import Basket from "./components/basket";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <AppContainer>
        <AppFilters>
          <Sorting />
          <Brands />
          <Tags />
        </AppFilters>
        <Products />
        <Basket />
      </AppContainer>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.gray100};
`;

const AppContainer = styled.div`
  max-width: 1156px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  gap: 16px;
`;

const AppFilters = styled.div`
  max-width: 300px;
  min-width: 250px;
`;
