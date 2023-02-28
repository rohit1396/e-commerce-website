import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductValue } from "../ProductContext";
import { UserAuth } from "../UserContext";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(toggle);
  return (
    <div className="navbar">
      <Link to="/">
        <div onClick={() => setToggle(false)} className="nav_logo">
          E-<span>Shop</span>
        </div>
      </Link>
      <div className={toggle ? "nav_links_hidden" : "nav_links"}>
        <div>
          <Link to="/products">
            <span onClick={() => setToggle(!toggle)} className="nav_link">
              Products
            </span>
          </Link>
        </div>
        <Link to="/checkout">
          <span className="nav_link">
            {/* Add to cart */}
            <svg
              width={35}
              height={35}
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path d="M18.75 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path d="M2.25 3.75h3L7.5 16.5h12" />
              <path d="M7.5 13.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75a.376.376 0 0 0-.37-.449H6" />
            </svg>
          </span>
        </Link>
        {user ? (
          <>
            <p>{user.email}</p>
            <p onClick={handleLogout}>Sign Out</p>
          </>
        ) : (
          <Link to="/signin">
            <span className="nav_link">
              {/* Login */}
              <svg
                width={35}
                height={35}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.592 3.027C14.68 2.042 13.406 1.5 12 1.5c-1.414 0-2.692.54-3.6 1.518-.918.99-1.365 2.334-1.26 3.786C7.348 9.67 9.528 12 12 12c2.472 0 4.648-2.33 4.86-5.195.106-1.439-.344-2.78-1.268-3.778Z" />
                <path d="M20.25 22.5H3.75a1.454 1.454 0 0 1-1.134-.522 1.655 1.655 0 0 1-.337-1.364c.396-2.195 1.63-4.038 3.571-5.333C7.574 14.132 9.758 13.5 12 13.5c2.242 0 4.426.633 6.15 1.781 1.94 1.294 3.176 3.138 3.571 5.332.091.503-.032 1-.336 1.365a1.453 1.453 0 0 1-1.135.522Z" />
              </svg>
            </span>
          </Link>
        )}
      </div>
      <div className="navbar_menu">
        <svg
          onClick={() => setToggle(!toggle)}
          width={40}
          height={40}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 18Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
