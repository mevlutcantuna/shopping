import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import Pagination from "../pagination";

import ProductLoader from "../loaders/ProductLoader";
import AllProductsLoaders from "../loaders/AllProductsLoaders";

const ProductItems = () => {
  const { brands, sort, type, tags } = useSelector((state) => state.filters);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);

  const handlePageClick = (value) => {
    setPage(value.selected + 1);
  };

  const getProducts = async () => {
    const productsData = await fetchProducts(brands, type, sort, tags, page);
    setProducts(productsData);

    // get total product count
    let totalProductCount = Number(productsData.headers["x-total-count"]);
    setPageCount(Math.ceil(totalProductCount / 16));

    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [brands, tags, sort, type, page]);

  return (
    <ProductsWrapper>
      {loading ? (
        <>
          <AllProductsLoaders />
        </>
      ) : (
        <>
          {products?.data?.map((item) => (
            <ProductItem item={item} key={item?.name} index={item?.slug} />
          ))}
        </>
      )}

      <ProductPagination pageCount={pageCount}>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </ProductPagination>
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
`;

const ProductPagination = styled.div`
  width: 100%;
  display: ${({ pageCount }) => (pageCount > 1 ? "flex" : "none")};
  justify-content: center;
`;
