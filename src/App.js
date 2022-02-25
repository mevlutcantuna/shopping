import Header from "./components/header";
import styled from "styled-components";
import Sorting from "./components/sorting";
import Brands from "./components/brands";
import Tags from "./components/tags";
import Products from "./components/products";
import Basket from "./components/basket";
import SliderSidebar from "./components/slider-sidebar";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { useOnClickOutside } from "use-hooks";
import BackShadow from "./components/slider-sidebar/BackShadow";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const changeIsOpen = (value) => setIsOpen(value);

  useOnClickOutside(ref, () => changeIsOpen(false));

  const animationVariants = {
    display: {
      opacity: 1,
      display: "block",
      x: 0,
    },
    hide: {
      x: -400,
      opacity: 0,
      display: "none",
    },
  };

  return (
    <AppWrapper>
      <BackShadow isOpen={isOpen} />
      <StyledMotion
        variants={animationVariants}
        initial="hide"
        animate={isOpen ? "display" : "hide"}
      >
        <AppSliderSidebar ref={ref}>
          <SliderSidebar changeIsOpen={changeIsOpen} />
        </AppSliderSidebar>
      </StyledMotion>
      <Header changeIsOpen={changeIsOpen} />
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
  position: relative;
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
  @media (max-width: ${(p) => p.theme.breakpoints.lg}) {
    display: none;
  }
`;

const AppProduct = styled.div`
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 1;

  @media (max-width: ${(p) => p.theme.breakpoints.lg}) {
    grid-column-start: 2;
    grid-column-end: 12;
    grid-row-start: 1;
  }
`;

const AppBasket = styled.div`
  grid-column-start: 10;
  grid-column-end: 13;
  grid-row-start: 1;

  @media (max-width: ${(p) => p.theme.breakpoints.lg}) {
    display: none;
  }
`;

const AppSliderSidebar = styled.div`
  display: none;
  overflow: scroll;

  @media (max-width: ${(p) => p.theme.breakpoints.lg}) {
    display: flex;
    max-height: 100vh;
    position: fixed;
  }
`;

const StyledMotion = styled(motion.div)`
  background-color: red;
`;
