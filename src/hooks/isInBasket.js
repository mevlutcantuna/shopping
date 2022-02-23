import { useSelector } from "react-redux";

export const useIsInBasket = (item) => {
  const basket = useSelector((state) => state.basket.basket);
  return basket?.some((k) => k.slug === item.slug);
};
