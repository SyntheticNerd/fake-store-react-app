import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
// import { fieldBox } from "../styles/CheckoutStyle";
import {
  InputBox,
  CardNumber,
  FlexField,
  StandardField,
  Selector,
  Th,
  Tr,
  ProdOverview,
  TitleCol,
  CheckoutPage,
  GuestCheckoutForm,
  InputCont
} from "../../styles/CheckoutStyle";

export default function Checkout() {
  const { cartArr, total } = useContext(CartContext);
  let navigate = useNavigate();

  function onSubmit(e) {
    // e.target.preventDefault();
  }

  return (
    <CheckoutPage>
      {/* <h1> Checkout</h1> */}
      <ProdOverview>
        <Tr>
          <Th>Title</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th>Total</Th>
        </Tr>
        {cartArr.map((item, key) => {
          return (
            <Tr key={key}>
              <TitleCol>{item.product.title}</TitleCol>
              <td>{item.quantity}</td>
              <td style={{ fontSize: "12px", paddingRight: "12px" }}>
                {item.product.price.toFixed(2)}
              </td>
              <td>{(item.product.price * item.quantity).toFixed(2)}</td>
            </Tr>
          );
        })}
      </ProdOverview>
      <ProdOverview>
        <Tr>
          <th>Subtotal</th>
          <th>Tax</th>
          <th>Total</th>
        </Tr>
        <Tr>
          <td>{total.toFixed(2)}</td>
          <td>{(total * 0.0725).toFixed(2)}</td>
          <td>{(total + total * 0.0725).toFixed(2)}</td>
        </Tr>
      </ProdOverview>

      <GuestCheckoutForm autocomplete="off" novalidate>
        <FlexField>
          <InputCont>
            <label style={{ display: "block" }} for="first-name">
              First Name
            </label>
            <InputBox type="text" id="first-name" />
          </InputCont>
          <InputCont>
            <label style={{ display: "block" }} for="last-name">
              Last Name
            </label>
            <InputBox type="text" id="last-name" />
          </InputCont>
        </FlexField>
        <InputCont style={{ width: "100%", marginTop: "16px" }}>
          <label style={{ display: "block" }} for="billing-address">
            Billing Address
          </label>
          <InputBox
            type="text"
            id="billing-address"
            style={{ maxWidth: "80%" }}
          />
        </InputCont>
        <div style={{ marginTop: "8px" }}>
          <FlexField>
            <label
              style={{ display: "block", margin: "8px" }}
              for="billing-state"
            >
              State
            </label>
            <CardNumber type="text" id="billing-state" />
            <label
              style={{ display: "block", margin: "8px" }}
              for="billing-zip-code"
            >
              Zip Code
            </label>
            <CardNumber type="text" id="billing-zip-code" />
          </FlexField>
        </div>
        <InputCont style={{ width: "100%", marginTop: "16px" }}>
          <label style={{ display: "block" }} for="billing-address">
            Shipping Address
          </label>
          <InputBox
            type="text"
            id="billing-address"
            style={{ maxWidth: "80%" }}
          />
        </InputCont>
        <div style={{ marginTop: "8px" }}>
          <FlexField>
            <label
              style={{ display: "block", margin: "8px" }}
              for="billing-state"
            >
              State
            </label>
            <CardNumber type="text" id="billing-state" />
            <label
              style={{ display: "block", margin: "8px" }}
              for="billing-zip-code"
            >
              Zip Code
            </label>
            <CardNumber type="text" id="billing-zip-code" />
          </FlexField>
        </div>
      </GuestCheckoutForm>

      <GuestCheckoutForm
        autocomplete="off"
        style={{ marginTop: "16px" }}
        onSubmit={onSubmit()}
        novalidate
      >
        <StandardField>
          <div>
            <label style={{ display: "block" }} for="first-name">
              Name on the Card
            </label>
            <InputBox
              type="text"
              id="first-name"
              style={{ width: "80%", maxWidth: "20rem" }}
            />
          </div>
        </StandardField>
        <StandardField>
          <label for="card-number">Card Number</label>
          <div>
            <CardNumber type="num" id="card-number" maxlength="4" />
            <CardNumber type="num" id="card-number-1" maxlength="4" />
            <CardNumber type="num" id="card-number-2" maxlength="4" />
            <CardNumber type="num" id="card-number-3" maxlength="4" />
          </div>
        </StandardField>
        <div>
          <label for="card-expiration-month">Expiration date</label>
          <FlexField>
            <div class="select">
              <Selector id="card-expiration-month">
                <option></option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </Selector>
            </div>
            <div class="select">
              <Selector id="card-expiration-year">
                <option></option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
              </Selector>
            </div>
            <label style={{ display: "block", margin: "8px" }} for="card-ccv">
              CCV
            </label>
            <CardNumber type="text" id="card-ccv" maxlength="3" />
          </FlexField>
        </div>
        <button
          // type="submit"
          onClick={() => navigate("/")}
          class="btn"
          style={{ marginTop: "16px", padding: "4px 8px" }}
        >
          <i class="fa fa-lock"></i> Submit
        </button>
      </GuestCheckoutForm>
    </CheckoutPage>
  );
}
