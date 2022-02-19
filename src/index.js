import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./context/CartContext";
import { Provider } from "react-redux";
import { store } from "./app/store";

import MyRouter from "./Router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CartProvider>
        <MyRouter />
      </CartProvider>
    </Provider>
  </StrictMode>,
  rootElement
);
