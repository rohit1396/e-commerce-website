import React, { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ initialState, reducer, children }) => (
  <ProductContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ProductContext.Provider>
);

export const ProductValue = () => useContext(ProductContext);
