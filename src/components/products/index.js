import styled from "styled-components";
import ProductTypes from "./ProductTypes";
import ProductItems from "./ProductItems";

const Products = () => {
  return (
    <ProductsWrapper>
      <ProductTitle>Products</ProductTitle>
      <ProductTypes />
      <ProductItems />
    </ProductsWrapper>
  );
};

export default Products;

const ProductsWrapper = styled.div``;

const ProductTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 1rem;
`;
