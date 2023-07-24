import { cartProduct } from "./cartProduct";

export type cartDetails = {
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
  products: cartProduct[];
};
