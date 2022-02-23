import styled from "styled-components";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import TotalPrice from "./TotalPrice";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basket);

  return (
    <BasketWrapper>
      {basket?.length <= 0 ? (
        <BasketEmpty>Your basket is empty.</BasketEmpty>
      ) : (
        <>
          {basket?.map((item) => (
            <BasketCard item={item} key={item?.slug} />
          ))}
          <TotalPrice />
        </>
      )}
    </BasketWrapper>
  );
};

export default Basket;

const BasketWrapper = styled.div`
  background-color: white;
  border: 8px solid ${(p) => p.theme.colors.primaryBlue};
  padding: 16px;
`;

const BasketEmpty = styled.div`
  text-align: center;
  font-size: 1rem;
  color: ${(p) => p.theme.colors.gray700};
  font-weight: 300;
`;
