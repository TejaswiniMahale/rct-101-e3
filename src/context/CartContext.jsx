import axios from "axios";
import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  
  const getCartItemCountByProductId = (productId) => {
    let item = cartItems.find((item) => item.productId === productId) || {};
    return item.count || 0;
  };

  useEffect(() => {
    if (isAuth) {
      axios.get("http://localhost:8080/cartItems").then(({ data }) => {
        setCartItems(data);
      });
    }
  }, [isAuth]);
  return (
    <CartContext.Provider
      value={{
        cartItemsCount: cartItems.length,
        cartItems,
        getCartItemCountByProductId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
