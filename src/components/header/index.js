import styled from "styled-components";
import Logo from "../../icons/Logo";
import BasketButton from "./BasketButton";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
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
  max-width: 1156px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;
`;

const HeaderLogo = styled.div`
  width: 100%;
  max-width: 1156px;
  display: flex;
  justify-content: center;
`;
