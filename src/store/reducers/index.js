import { combineReducers } from "redux";
import FiltersReducer from "./filters";
import BasketReducer from "./basket";

export const reducers = combineReducers({
  filters: FiltersReducer,
  basket: BasketReducer,
});
