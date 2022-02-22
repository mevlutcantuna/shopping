import axios from "axios";

<<<<<<< HEAD
export const fetchProducts = async (brands, type, sort, tags, page) => {
=======
export const fetchProducts = async (brands, type, sort, tags) => {
>>>>>>> efa1fb195ca6e98c19dfbb1afdc054fbf29950e5
  const queryStr = new URLSearchParams();

  for (let i = 0; i < brands?.length; i++) {
    brands[i] !== "All" && queryStr.append("manufacturer", brands[i]);
  }

  for (let i = 0; i < tags?.length; i++) {
    tags[i] !== "All" && queryStr.append("tags_like", tags[i]);
  }

<<<<<<< HEAD
  queryStr.append("itemType", type);
  queryStr.append("_page", page);
  queryStr.append("_sort", sort?.type);
  queryStr.append("_order", sort?.order);

  return await axios.get(
    `${process.env.REACT_APP_API_URL}/products?_limit=16&` + queryStr.toString()
  );
=======
  console.log(queryStr.toString());

  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/products?` + queryStr.toString()
  );

  console.log(response);
>>>>>>> efa1fb195ca6e98c19dfbb1afdc054fbf29950e5
};
