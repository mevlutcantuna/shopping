import axios from "axios";

export const fetchTags = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/tags`);
};
