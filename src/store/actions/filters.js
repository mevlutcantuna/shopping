import {
  CHANGE_FILTER_BRANDS,
  CHANGE_FILTER_SORTING,
  CHANGE_FILTER_TAGS,
  CHANGE_FILTER_TYPES,
} from "../constants/filters";

export const changeSorting = (value) => {
  return {
    type: CHANGE_FILTER_SORTING,
    payload: value,
  };
};

export const changeBrands = (value) => {
  return {
    type: CHANGE_FILTER_BRANDS,
    payload: value,
  };
};

export const changeTags = (value) => {
  return {
    type: CHANGE_FILTER_TAGS,
    payload: value,
  };
};

export const changeTypes = (value) => {
  return {
    type: CHANGE_FILTER_TYPES,
    payload: value,
  };
};
