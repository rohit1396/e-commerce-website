import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/products/productdetails/:productId"
          element={
            <>
              <Navbar />
              <ProductDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
              <Footer />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Navbar />
              <SignIn />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <SignUp />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
