import { ReactComponent as CartIcon } from "../../img/cart.svg";

export default function CartBtn({ color }) {
  return (
    <div style={{ height: "20px", zIndex: "3" }}>
      <CartIcon height="20px" fill={color} />
    </div>
  );
}
