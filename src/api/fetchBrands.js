import { instance } from "./instance";

export const fetchBrands = async () => {
  return await instance.get("/brands");
};
