import styled from "styled-components";
import QuantityButton from "./QuantityButton";

const BasketCard = ({ item }) => {
  return (
    <BasketCardWrapper>
      <BasketCardInfo>
        <BasketCardName>{item?.name}</BasketCardName>
        <BasketCardPrice>₺{item?.price}</BasketCardPrice>
      </BasketCardInfo>
      <QuantityButton item={item} quantity={item?.quantity} />
    </BasketCardWrapper>
  );
};

export default BasketCard;

const BasketCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.gray200};
`;

const BasketCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BasketCardName = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${(p) => p.theme.colors.gray700};
  margin-bottom: 4px;
`;

const BasketCardPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.primaryBlue};
`;
