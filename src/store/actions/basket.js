import {
  ADD_TO_BASKET,
  CHANGE_PRODUCT_ADDED_QUANTITY,
  REMOVE_FROM_BASKET,
} from "../constants/basket";

export const addToBasket = (item) => {
  return {
    type: ADD_TO_BASKET,
    payload: item,
  };
};

export const removeFromBasket = (item) => {
  return {
    type: REMOVE_FROM_BASKET,
    payload: item,
  };
};

export const changeProductAddedQuantity = (product, value) => {
  return {
    type: CHANGE_PRODUCT_ADDED_QUANTITY,
    payload: { product, value },
  };
};
