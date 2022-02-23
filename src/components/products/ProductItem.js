import styled from "styled-components";
import ProductButton from "./ProductButton";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../store/actions/basket";
import { useIsInBasket } from "../../hooks/isInBasket";

const ProductItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const addProduct = () => {
    const itemWithQuantity = { ...item, quantity: 1 };
    dispatch(addToBasket(itemWithQuantity));
  };

  const removeProduct = (slug) => {
    dispatch(removeFromBasket(slug));
  };

  return (
    <ProductItemContainer>
      <ProductItemImage
        alt="product-image"
        src={`https://picsum.photos/300/300?random=${index}`}
      />
      <ProductItemPrice>₺ {item?.price}</ProductItemPrice>
      <ProductItemTitle>{item?.name}</ProductItemTitle>
      {useIsInBasket(item) ? (
        <ProductButton
          title={"Remove"}
          onClick={() => removeProduct(item?.slug)}
        />
      ) : (
        <ProductButton title={"Add"} onClick={addProduct} />
      )}
    </ProductItemContainer>
  );
};
export default ProductItem;

const ProductItemContainer = styled.div`
  margin: 0.5rem;
  max-width: 120px;
  max-height: 220px;
  display: flex;
  flex-direction: column;
`;

const ProductItemImage = styled.img`
  width: 120px;
  padding: 0.75rem;
  border: 1px solid ${(p) => p.theme.colors.gray200};
  border-radius: 4px;
  margin-bottom: 8px;
`;

const ProductItemPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primaryBlue};
  margin-bottom: 8px;
`;

const ProductItemTitle = styled.h4`
  color: ${(p) => p.theme.colors.gray700};
  font-weight: 500;
  font-size: 14px;
  height: 32px;
`;
