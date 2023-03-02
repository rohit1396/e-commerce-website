import React from "react";
import "./Home.css";
import data from "../data";
import FeaturedProduct from "./FeaturedProduct";
import Categories from "./Categories";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_about">
          <h1>
            E-<span>Shop</span>
          </h1>
          <p>
            E-shop is an e-Commerce website build for users to shop online With
            just one simple Click.
          </p>
          <p>Fetch Products Of different category </p>
          <Link to="/products">
            <button className="home_shopButton">Shop Now</button>
          </Link>
        </div>
        <img
          className="home_img"
          src="/Images/online-shopping-and-e-commerce-banner-vector.jpg"
          alt=""
        />
      </div>
      <FeaturedProduct data={data} />
      <Categories data={data} />
    </div>
  );
};

export default Home;
