import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav_logo">
          E-<span>Shop</span>
        </div>
      </Link>
      <div className="nav_links">
        <div>
          <Link to="/">
            <span className="nav_link">Home</span>
          </Link>
          <span className="nav_link">About</span>
          <Link to="/products">
            <span className="nav_link">Products</span>
          </Link>
        </div>
        <div>
          <span className="nav_link">Add to cart</span>
          <span className="nav_link">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
