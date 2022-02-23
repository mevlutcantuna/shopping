import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  changeProductAddedQuantity,
  removeFromBasket,
} from "../../store/actions/basket";

const QuantityButton = ({ quantity, item }) => {
  const dispatch = useDispatch();

  const changeAddedQuantity = (value) => {
    if (item?.quantity + value <= 0) {
      return dispatch(removeFromBasket(item));
    }
    return dispatch(changeProductAddedQuantity(item, value));
  };

  return (
    <QuantityButtonWrapper>
      <MinusIcon
        onClick={() => changeAddedQuantity(-1)}
        color="#1CA4CE"
        cursor="pointer"
      />
      <QuantityButtonShower>{quantity}</QuantityButtonShower>
      <PlusIcon
        onClick={() => changeAddedQuantity(1)}
        color="#1CA4CE"
        cursor="pointer"
      />
    </QuantityButtonWrapper>
  );
};

export default QuantityButton;

const QuantityButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityButtonShower = styled.span`
  margin: 0 8px;
  padding: 8px 12px;
  color: white;
  background-color: ${(p) => p.theme.colors.primaryBlue};
`;
