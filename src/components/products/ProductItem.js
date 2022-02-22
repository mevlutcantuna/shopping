import styled from "styled-components";
<<<<<<< HEAD
import ProductButton from "./ProductButton";

const ProductItem = ({ item, index }) => {
  return (
    <ProductItemContainer>
      <ProductItemImage
        alt="product-image"
        src={`https://picsum.photos/300/300?random=${index}`}
      />
      <ProductItemPrice>₺ {item?.price}</ProductItemPrice>
      <ProductItemTitle>{item?.name}</ProductItemTitle>
      <ProductButton />
    </ProductItemContainer>
  );
};
export default ProductItem;

const ProductItemContainer = styled.div`
  margin: 0.5rem;
  max-width: 120px;
  display: flex;
  flex-direction: column;
`;

const ProductItemImage = styled.img`
  width: 120px;
  height: 120px;
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
=======

const ProductItem = () => {
  return <ProductItemContainer>ds</ProductItemContainer>;
};
export default ProductItem;

const ProductItemContainer = styled.div``;
>>>>>>> efa1fb195ca6e98c19dfbb1afdc054fbf29950e5
