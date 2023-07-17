import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import FilterButton from "./FilterButton";

function App() {
  const [MenuItems, setMenuItems] = useState([]);

  // const allCategories = [
  //   "all",
  //   ...new Set(MenuItems.map((item) => item.category)),
  // ];

  // const [categories, setCategories] = useState(allCategories);
  // console.log(categories);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const request = await axios.get("https://fakestoreapi.com/products");
  //     console.log(request);
  //     setMenuItems(request.data);
  //     console.log(MenuItems);
  //   };
  //   getProducts();
  // }, []);

  // const filterItems = (category) => {
  //   if (category === "all") {
  //     setMenuItems(MenuItems);
  //     console.log(category);
  //     return;
  //   }

  //   const newItems = MenuItems.filter((item) => item.category === category);
  //   setMenuItems(newItems);
  // };

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
              {/* <FilterButton categories={categories} filterItems={filterItems} /> */}
              <Products data={MenuItems} />
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
