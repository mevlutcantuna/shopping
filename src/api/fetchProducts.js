import axios from "axios";

export const fetchProducts = async (brands, type, sort, tags, page) => {
  const queryStr = new URLSearchParams();

  for (let i = 0; i < brands?.length; i++) {
    brands[i] !== "All" && queryStr.append("manufacturer", brands[i]);
  }

  for (let i = 0; i < tags?.length; i++) {
    tags[i] !== "All" && queryStr.append("tags_like", tags[i]);
  }

  queryStr.append("itemType", type);
  queryStr.append("_page", page);
  queryStr.append("_sort", sort?.type);
  queryStr.append("_order", sort?.order);

  return await axios.get(
    `${process.env.REACT_APP_API_URL}/products?_limit=16&` + queryStr.toString()
  );
};
