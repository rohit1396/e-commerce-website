import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const request = await axios.get("https://fakestoreapi.com/products");
      console.log(request);
      setProductData(request.data);
      console.log(productData);
    };
    getProducts();
  }, []);

  return (
    <div className="products">
      <p>{productData.length} products found</p>
      {productData.map((item) => (
        <div className="product_item">
          <img className="product_img" src={item.image} alt={item.title} />
          <div className="product_details">
            <p className="product_title">{item.title}</p>
            <p className="product_price">{item.price}</p>
            <p className="product_description">{item.description}</p>
            <p className="product_category">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
