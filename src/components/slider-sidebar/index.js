import styled from "styled-components";
import Sorting from "../sorting";
import Brands from "../brands";
import Tags from "../tags";
import CloseIcon from "../../icons/CloseIcon";

const SliderSidebar = ({ changeIsOpen }) => {
  return (
    <StyledSliderSidebar className="slider-sidebar">
      <StyledCloseIcon>
        <CloseIcon
          cursor="pointer"
          fill="#1CA4CE"
          onClick={() => changeIsOpen(false)}
        />
      </StyledCloseIcon>
      <Sorting />
      <Brands />
      <Tags />
    </StyledSliderSidebar>
  );
};

export default SliderSidebar;

const StyledSliderSidebar = styled.div`
  background-color: white;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;

  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    position: inherit;
  }
`;

const StyledCloseIcon = styled.div`
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2rem;
  position: fixed;
  left: 320px;

  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    left: 90%;
  }
`;
