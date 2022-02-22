import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeTypes } from "../../store/actions/filters";

const ProductTypes = () => {
  const type = useSelector((state) => state.filters.type);
  const dispatch = useDispatch();

  const handleChangeType = (value) => {
    dispatch(changeTypes(value));
  };

  return (
    <ProductTypesWrapper>
      <ProductTypesButton
        type={type}
<<<<<<< HEAD
        value={"mug"}
        onClick={() => handleChangeType("mug")}
=======
        value={"Mug"}
        onClick={() => handleChangeType("Mug")}
>>>>>>> efa1fb195ca6e98c19dfbb1afdc054fbf29950e5
      >
        mug
      </ProductTypesButton>
      <ProductTypesButton
        type={type}
<<<<<<< HEAD
        value={"shirt"}
        onClick={() => handleChangeType("shirt")}
=======
        value={"Shirt"}
        onClick={() => handleChangeType("Shirt")}
>>>>>>> efa1fb195ca6e98c19dfbb1afdc054fbf29950e5
      >
        shirt
      </ProductTypesButton>
    </ProductTypesWrapper>
  );
};

export default ProductTypes;

const ProductTypesWrapper = styled.div`
  margin-bottom: 1rem;
`;

const ProductTypesButton = styled.button`
  padding: 8px 20px;
  margin-right: 0.5rem;
  border-radius: 2px;
  color: ${({ type, value }) =>
    type === value ? "rgb(255, 255, 255)" : "rgb(30, 164, 206)"};
  background-color: ${({ type, value }) =>
    type !== value ? "rgb(255, 255, 255)" : "rgb(30, 164, 206)"};
  cursor: pointer;
`;
