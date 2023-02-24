import React from "react";
import { ProductValue } from "../ProductContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ product }) => {
  const [{}, dispatch] = ProductValue();

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct_img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="checkoutProduct_content">
        <p className="checkoutProduct_title">Title: {product.title}</p>
        <p className="checkoutProduct_description">
          Description: {product.description}
        </p>
        <p className="checkoutProduct_category">Category: {product.category}</p>
        <p className="checkoutProduct_price">Price : ${product.price}</p>
        <button onClick={() => removeItem(product.id)}>Remove Item</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
