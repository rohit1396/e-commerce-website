import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedProduct.css";

const FeaturedProduct = ({ data }) => {
  return (
    <div className="featured_product">
      <h1>Featured Products</h1>
      <div className="featured_img">
        {data.slice(0, 3).map((item) => (
          <Link to="/products">
            <img src={item.image} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
