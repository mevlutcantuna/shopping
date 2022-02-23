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

export const removeFromBasket = (slug) => {
  return {
    type: REMOVE_FROM_BASKET,
    payload: slug,
  };
};

export const changeProductAddedQuantity = (slug, quantity) => {
  return {
    type: CHANGE_PRODUCT_ADDED_QUANTITY,
    payload: { slug, quantity },
  };
};
