import axios from "axios";

export const fetchProducts = async (brands, type, sort, tags) => {
  const queryStr = new URLSearchParams();

  for (let i = 0; i < brands?.length; i++) {
    brands[i] !== "All" && queryStr.append("manufacturer", brands[i]);
  }

  for (let i = 0; i < tags?.length; i++) {
    tags[i] !== "All" && queryStr.append("tags_like", tags[i]);
  }

  console.log(queryStr.toString());

  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/products?` + queryStr.toString()
  );

  console.log(response);
};
