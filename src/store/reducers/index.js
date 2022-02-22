import { combineReducers } from "redux";
import FiltersReducer from "./filters";

export const reducers = combineReducers({
  filters: FiltersReducer,
});
