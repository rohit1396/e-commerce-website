import React from "react";
import "./Checkout.css";
import { ProductValue } from "../ProductContext";

const Checkout = () => {
  const [{ ProductCart }] = ProductValue();
  console.log(ProductCart);
  return (
    <div className="checkout">
      {ProductCart?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart Is Empty</h2>
          <p>There is no items available in your shopping cart. </p>
          <p>
            Please Add one or more items in your cart to proceed to shopping.
          </p>
        </div>
      ) : (
        <div>
          {ProductCart.map((product) => (
            <div>
              <h3>{product.id}</h3>
              <h3>{product.title}</h3>
              <h3>{product.description}</h3>
              <h3>{product.category}</h3>
              <h3>{product.price}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
