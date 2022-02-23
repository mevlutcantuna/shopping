import { useEffect, useState } from "react";
import ProductLoader from "./ProductLoader";
import styled from "styled-components";

const AllProductsLoaders = () => {
  const [loaders, setLoaders] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 16; i++) {
      setLoaders((prevState) => [...prevState, i]);
    }
  }, []);

  return (
    <AllProductsLoadersWrapper>
      {loaders.map((item, index) => (
        <ProductLoader key={index} />
      ))}
    </AllProductsLoadersWrapper>
  );
};

export default AllProductsLoaders;

const AllProductsLoadersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
