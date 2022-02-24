import styled from "styled-components";
import Logo from "../../icons/Logo";
import BasketButton from "./BasketButton";
import MenuIcon from "../../icons/MenuIcon";

const Header = ({ changeIsOpen }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderMenuIcon onClick={() => changeIsOpen(true)}>
          <MenuIcon cursor="pointer" fill="#ffffff" />
        </HeaderMenuIcon>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <BasketButton />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 76px;
  background-color: ${(p) => p.theme.colors.primaryBlue};
  display: flex;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1232px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;

  @media (max-width: ${(p) => p.theme.breakpoints.lg}) {
    margin: 0 0 0 10%;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.m}) {
    margin: 0 0 0 5%;
  }
`;

const HeaderLogo = styled.div`
  width: 100%;
  max-width: 1156px;
  display: flex;
  justify-content: center;
`;

const HeaderMenuIcon = styled.button`
  display: none;
  background-color: transparent;
  @media (max-width: ${(p) => p.theme.breakpoints.lg}) {
    display: flex;
  }
`;
