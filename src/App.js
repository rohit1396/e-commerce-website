import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

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
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
