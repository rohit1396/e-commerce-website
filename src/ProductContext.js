import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://fakestoreapi.com/products";
const ProductContext = createContext();

const initialState = {
  loading: false,
  ProductCart: [],
  cart: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
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

  return (
    <ProductContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductValue = () => useContext(ProductContext);
