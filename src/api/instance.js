import axios from "axios";

export const instance = axios.create({
  baseURL: "https://getir-locals-api.herokuapp.com",
});
