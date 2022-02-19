import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import App from "./App";
import ProductArray from "./components/products/ProductArray";
import ProductPage from "./components/products/ProductPage";
import Checkout from "./components/cart/Checkout";
import Account from "./components/Account";

export default function MyRouter() {
  const [url, setUrl] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App url={url} setUrl={setUrl} />}>
            {/* Use a slash to denote the home page */}
            <Route index element={<ProductArray />} />
            <Route path="cart" element={<Cart />} />
            <Route path="catagory/:catagoryId" element={<ProductArray />} />
            <Route path="products/:productId" element={<ProductPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="account" element={<Account />} />
            <Route path="search/:query" element={<ProductArray />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            {/* the '*' will match all strings that dont match route need 404 page */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}
