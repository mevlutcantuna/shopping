import { useSelector } from "react-redux";
import styled from "styled-components";

const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  return (
    <TotalPriceWrapper>
      <TotalPriceContainer>
        ₺ {parseFloat(totalPrice).toFixed(2)}
      </TotalPriceContainer>
    </TotalPriceWrapper>
  );
};

export default TotalPrice;

const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TotalPriceContainer = styled.span`
  border: 2px solid ${(p) => p.theme.colors.primaryBlue};
  padding: 16px 24px;
  color: ${(p) => p.theme.colors.primaryBlue};
  text-align: center;
  border-radius: 2px;
`;
