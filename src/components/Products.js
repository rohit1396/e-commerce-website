import React, { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import FilterButton from "./FilterButton";
import { ProductValue } from "../ProductContext";

const Products = () => {
  const { cart } = ProductValue();

  const [productData, setProductData] = useState(cart);

  const allCategories = ["all", ...new Set(cart.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === "all") {
      setProductData(cart);
      return;
    }
    const newItems = cart.filter((item) => item.category === category);
    setProductData(newItems);
  };

  return (
    <div className="products">
      <FilterButton categories={allCategories} filterItems={filterItems} />
      <p>{productData.length} products found</p>
      <div className="product_items">
        {productData.map((item) => (
          <Link to={`productdetails/${item.id}`}>
            <div className="product_item" key={item.id}>
              <img className="product_img" src={item.image} alt={item.title} />
              <div className="product_details">
                <p className="product_price">${item.price}</p>
                <div>
                  <svg
                    width={25}
                    height={25}
                    fill="#e1ff00"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.859 3.512c.36-1.105 1.923-1.105 2.282 0l1.284 3.95a1.2 1.2 0 0 0 1.14.829h4.155c1.162 0 1.645 1.488.705 2.172l-3.36 2.44a1.2 1.2 0 0 0-.437 1.342l1.284 3.95c.36 1.106-.906 2.026-1.848 1.342l-3.36-2.44a1.2 1.2 0 0 0-1.41 0l-3.36 2.44c-.94.684-2.205-.236-1.846-1.341l1.284-3.95a1.2 1.2 0 0 0-.437-1.342l-3.359-2.44c-.94-.684-.456-2.172.706-2.172h4.153a1.2 1.2 0 0 0 1.141-.828l1.284-3.95-.001-.002Z" />
                  </svg>
                  <p className="product_category">{item.rating.rate}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
