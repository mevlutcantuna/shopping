import {
  CHANGE_FILTER_BRANDS,
  CHANGE_FILTER_SORTING,
  CHANGE_FILTER_TAGS,
  CHANGE_FILTER_TYPES,
} from "../constants/filters";

const initialState = {
  sort: "Price high to low",
  brands: ["All"],
  tags: ["All"],
  type: "Mug",
};

const FiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_SORTING:
      return { ...state, sort: action.payload };
    case CHANGE_FILTER_BRANDS:
      return { ...state, brands: action.payload };
    case CHANGE_FILTER_TAGS:
      return { ...state, tags: action.payload };
    case CHANGE_FILTER_TYPES:
      return { ...state, type: action.payload };
    default:
      return state;
  }
};

export default FiltersReducer;
