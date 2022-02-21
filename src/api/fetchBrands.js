import axios from "axios";

export const fetchBrands = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/brands`);
};
