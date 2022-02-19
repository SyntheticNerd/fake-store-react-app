import { useEffect } from "react";
import CartProductCard from "./CartProductCard";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  CartCheckout,
  CartPage,
  CartList,
  CheckoutDet,
  CheckoutBtn
} from "../../styles/CartStyle";

export default function Cart({ url }) {
  const { cartArr, cartQtty, total } = useContext(CartContext);
  let navigate = useNavigate();
  useEffect(() => {
    cartQtty <= 0 && navigate("/");
  });
  return (
    <>
      <CartPage>
        <CartCheckout>
          <CheckoutDet>
            <h2 style={{ marginRight: "16px" }}>Subtotal</h2>
            <p>{cartQtty <= 1 ? `${cartQtty} Item` : `${cartQtty} Items`}</p>
            <h3 style={{ marginLeft: "auto", marginRight: "16px" }}>
              {total.toFixed(2)}
            </h3>
            <CheckoutBtn onClick={() => navigate("/checkout")}>
              <b>Checkout</b>
            </CheckoutBtn>
          </CheckoutDet>
        </CartCheckout>
        <CartList>
          {cartArr.length ? (
            cartArr.map((item) => (
              <CartProductCard
                key={`${item.product.id}${item.product.price}`}
                productId={item.product.id}
                quantity={item.quantity}
              />
            ))
          ) : (
            <></>
          )}
        </CartList>
      </CartPage>
    </>
  );
}
//This was a challenge i started my solution with nested promises and came
//to the conclusion that each components should handle its own content loading
