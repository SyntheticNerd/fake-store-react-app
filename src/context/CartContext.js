import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/utils";

const CartContext = React.createContext([]);
CartContext.displayName = "CartValues";

const CartProvider = ({ children }) => {
  const [cartArr, setCartArr] = useState([]);
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [cartQtty, setCartQtty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // debugger;
    function saveToSession() {
      // not for production use
      sessionStorage.setItem(user ? user : "guest", JSON.stringify(cartArr));
    }
    let _arr = JSON.parse(sessionStorage.getItem("guest"))
      ? JSON.parse(sessionStorage.getItem("guest"))
      : [];
    !cartArr.length && _arr.length && setCartArr(_arr);
    let _qtty = 0;
    cartArr.map((data) => {
      _qtty += data.quantity;
      saveToSession();
    });
    setCartQtty(_qtty);
    setTotal(getTotal());
  }, [cartArr, user, cartQtty, getTotal]);
  //handleing a lot of sesion starrage stuff here

  // async function loadArr(url) {
  //   let _cart = await getProducts(url);
  //   setCartArr(_cart.products);
  //   setUser(_cart.userId);
  //   setDate(_cart.date);
  // }

  function addItem(product, quantity) {
    // debugger;
    let index = cartArr.findIndex((obj) => {
      return obj.product.id === product.id;
    });
    if (index + 1) {
      let _arr = cartArr;
      _arr[index].quantity += quantity;
      setCartQtty(cartQtty + quantity);
      setTotal(getTotal());
    } else {
      setCartQtty(cartQtty + quantity);
      setCartArr([
        ...cartArr,
        {
          product: product,
          quantity: quantity
        }
      ]);
      setTotal(getTotal());
    }
  }
  function removeItem(productId) {
    let index = cartArr.findIndex((obj) => {
      return obj.product.id === productId;
    });
    setCartQtty(cartQtty - cartArr[index].quantity);

    setCartArr(
      cartArr.filter((item) => {
        return item !== cartArr[index];
      })
    );
  }
  function updateQtty(productId, quantity) {
    let index = cartArr.findIndex((obj) => {
      return obj.product.id === productId;
    });
    let _arr = cartArr;
    let _qtty = cartQtty;
    _qtty -= _arr[index].quantity;
    _arr[index].quantity = quantity;
    _qtty += quantity;
    setCartArr(_arr);
    setCartQtty(_qtty);
    setTotal(getTotal());
  }

  function getTotal() {
    let total = 0;
    for (let index in cartArr) {
      total += cartArr[index].product.price * cartArr[index].quantity;
    }
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        setCartArr,
        cartArr,
        // loadArr,
        addItem,
        cartQtty,
        removeItem,
        updateQtty,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
