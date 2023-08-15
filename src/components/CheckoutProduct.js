import React from "react";
import { ProductValue } from "../ProductContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ product }) => {
  const { removeFromCart } = ProductValue();

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct_img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="checkoutProduct_content">
        <p className="checkoutProduct_title"> {product.title}</p>
        <p className="checkoutProduct_price"> ${product.price}</p>
        <button onClick={() => removeFromCart(product.id)}>Remove Item</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
