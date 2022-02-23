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
        <AppProduct>
          <Products />
        </AppProduct>
        <AppBasket>
          <Basket />
        </AppBasket>
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
  max-width: 1232px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 16px;
`;

const AppFilters = styled.div`
  min-width: 250px;
  grid-column-start: 1;
  grid-column-end: 4;
`;

const AppProduct = styled.div`
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 1;
`;

const AppBasket = styled.div`
  grid-column-start: 10;
  grid-column-end: 13;
  grid-row-start: 1;
`;
