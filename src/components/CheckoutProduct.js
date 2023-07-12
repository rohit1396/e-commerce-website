import React, { useState } from "react";
import { ProductValue } from "../ProductContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ product }) => {
  const [readMore, setReadMore] = useState(false);
  const { removeFromCart } = ProductValue();

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct_img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="checkoutProduct_content">
        <p className="checkoutProduct_title">Title: {product.title}</p>
        <p className="checkoutProduct_description">
          Description:{" "}
          {readMore
            ? product.description
            : `${product.description.substring(0, 200)}...`}
          <span className="readMore" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </span>
        </p>
        <p className="checkoutProduct_category">Category: {product.category}</p>
        <p className="checkoutProduct_price">Price : ${product.price}</p>
        <button onClick={() => removeFromCart(product.id)}>Remove Item</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
