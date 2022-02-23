import BasketIcon from "../../icons/BasketIcon";
import styled from "styled-components";
import { useSelector } from "react-redux";

const BasketButton = () => {
  const totalPrice = useSelector((state) => state.basket.totalPrice);

  return (
    <BasketButtonWrapper>
      <BasketIcon />
      <BasketPrice>₺ {parseFloat(totalPrice).toFixed(2)}</BasketPrice>
    </BasketButtonWrapper>
  );
};

export default BasketButton;

const BasketButtonWrapper = styled.button`
  height: 100%;
  width: 140px;
  background-color: ${(p) => p.theme.colors.primaryDarkBlue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BasketPrice = styled.span`
  color: white;
  font-weight: 600;
  font-size: 14px;
`;
