import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://fakestoreapi.com/products";
const ProductContext = createContext();

const initialState = {
  loading: false,
  ProductCart: [],
  cart: [],
  totalPrice: 0,
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getProducts = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_PRODUCTS", payload: cart });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.ProductCart]);

  return (
    <ProductContext.Provider
      value={{ ...state, addToCart, removeFromCart, clearCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductValue = () => useContext(ProductContext);
