import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import Pagination from "../pagination";

// changed

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
};

export default ProductItems;

const ProductsWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
