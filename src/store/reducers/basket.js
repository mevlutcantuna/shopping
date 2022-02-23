import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../constants/basket";

const initialState = {
  totalPrice: 0,
  basket: [],
};

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.payload] };
    case REMOVE_FROM_BASKET:
      const removedProductBasket = state.basket.filter(
        (item) => item.slug !== action.payload
      );
      return { ...state, basket: removedProductBasket };
    default:
      return state;
  }
};

export default BasketReducer;
