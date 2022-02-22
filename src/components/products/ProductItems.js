import styled from "styled-components";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import Pagination from "../pagination";

const ProductItems = () => {
  const { brands, sort, type, tags } = useSelector((state) => state.filters);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(2);

  const handlePageClick = (value) => {
    setPage(value.selected + 1);
  };

  const getProducts = async () => {
    const productsData = await fetchProducts(brands, type, sort, tags, page);
    setProducts(productsData);

    // get total product count
    let totalProductCount = Number(productsData.headers["x-total-count"]);
    setPageCount(Math.ceil(totalProductCount / 16));
  };

  useEffect(() => {
    getProducts();
  }, [brands, tags, sort, type, page]);

  return (
    <ProductsWrapper>
      {products?.data?.map((item, index) => (
        <ProductItem item={item} key={index} index={index} />
      ))}
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </ProductsWrapper>
  );
=======
import { useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { useSelector } from "react-redux";

const ProductItems = () => {
  const { brands, sort, type, tags } = useSelector((state) => state.filters);

  useEffect(() => {
    fetchProducts(brands, type, sort, tags);
  }, [brands, tags]);

  return <ProductsWrapper></ProductsWrapper>;
>>>>>>> efa1fb195ca6e98c19dfbb1afdc054fbf29950e5
};

export default ProductItems;

const ProductsWrapper = styled.div`
  width: 100%;
<<<<<<< HEAD
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
=======
  height: 2rem;
  background-color: white;
>>>>>>> efa1fb195ca6e98c19dfbb1afdc054fbf29950e5
`;
