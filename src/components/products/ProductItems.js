import styled from "styled-components";
import { useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { useSelector } from "react-redux";

const ProductItems = () => {
  const { brands, sort, type, tags } = useSelector((state) => state.filters);

  useEffect(() => {
    fetchProducts(brands, type, sort, tags);
  }, [brands, tags]);

  return <ProductsWrapper></ProductsWrapper>;
};

export default ProductItems;

const ProductsWrapper = styled.div`
  width: 100%;
  height: 2rem;
  background-color: white;
`;
