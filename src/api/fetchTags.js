import { instance } from "./instance";

export const fetchTags = async () => {
  return await instance.get("/tags");
};
