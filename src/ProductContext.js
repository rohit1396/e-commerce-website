import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

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
  return (
    <ProductContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductValue = () => useContext(ProductContext);
