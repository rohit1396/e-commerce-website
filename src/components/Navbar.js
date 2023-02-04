import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_logo">
        E-<span>Shop</span>
      </div>
      <div className="nav_links">
        <span className="nav_link">Home</span>
        <span className="nav_link">About</span>
        <span className="nav_link">Products</span>
      </div>
      <div className="nav_links">
        <span className="nav_link">Add to cart</span>
        <span className="nav_link">Login</span>
      </div>
    </div>
  );
};

export default Navbar;
