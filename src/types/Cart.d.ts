import Product from "./Product";

export type CartItem = {
  quantity: number;
  product: Product;
};

type Cart = CartItem[];

export default Cart;
