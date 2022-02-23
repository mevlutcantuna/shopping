import {
  ADD_TO_BASKET,
  CHANGE_PRODUCT_ADDED_QUANTITY,
  REMOVE_FROM_BASKET,
} from "../constants/basket";
import totalPrice from "../../components/basket/TotalPrice";

const initialState = {
  totalPrice: 0,
  basket: [],
};

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      console.log(state.totalPrice + action.payload.price);
      return {
        ...state,
        basket: [...state.basket, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case REMOVE_FROM_BASKET:
      const removedProductBasket = state.basket.filter(
        (item) => item.slug !== action.payload.slug
      );

      let itemQuantity;
      state.basket.forEach((item) => {
        if (item.slug === action.payload.slug) {
          itemQuantity = item.quantity;
        }
      });

      let minusValue = action.payload.price * itemQuantity;
      return {
        ...state,
        basket: removedProductBasket,
        totalPrice: state.totalPrice - minusValue,
      };
    case CHANGE_PRODUCT_ADDED_QUANTITY:
      const changedBasket = state?.basket.map((item) => {
        if (item?.slug === action.payload.product?.slug) {
          return {
            ...item,
            quantity: item?.quantity + action.payload.value,
          };
        } else {
          return { ...item };
        }
      });

      let addedProductPrice;

      state.basket?.forEach((item) => {
        if (item.slug === action.payload.product.slug) {
          return (addedProductPrice =
            action.payload.product.price * action.payload.value);
        }
      });

      return {
        ...state,
        basket: changedBasket,
        totalPrice: state.totalPrice + addedProductPrice,
      };
    default:
      return state;
  }
};

export default BasketReducer;
