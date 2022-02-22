import { useEffect } from "react";

export const useSearchedItem = (value, searchedItems, setValue) => {
  useEffect(() => {
    if (searchedItems.includes(value)) {
      const removedSearchedBrands = searchedItems.filter(
        (item) => item !== value
      );
      if (removedSearchedBrands.length === 0) {
        return setValue(["All"]);
      }
      return setValue(removedSearchedBrands);
    } else {
      if (value === "All") {
        return setValue(["All"]);
      }
      const addedSearchedBrands = [...searchedItems, value];
      const removeFromAllAddedSearchedBrands = addedSearchedBrands.filter(
        (item) => item !== "All"
      );
      return setValue(removeFromAllAddedSearchedBrands);
    }
  }, []);
};
