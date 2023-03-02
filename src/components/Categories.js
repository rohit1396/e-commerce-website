import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = ({ data }) => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="categories_details">
        {data.map((item) => (
          <div className="categories_img">
            <Link to="/products">
              <img src={item.image} alt="" />
            </Link>
            <h3>{item.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
