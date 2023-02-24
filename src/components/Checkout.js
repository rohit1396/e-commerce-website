import React from "react";
import "./Checkout.css";
import { ProductValue } from "../ProductContext";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [{ ProductCart }, dispatch] = ProductValue();
  console.log(ProductCart);

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };
  return (
    <div className="checkout">
      {ProductCart?.length === 0 ? (
        <div className="empty_cart">
          <h2>Your Shopping Cart Is Empty</h2>
          <p>There is no items available in your shopping cart. </p>
          <p>
            Please Add one or more items in your cart to proceed to shopping.
          </p>
          <Link to="/products">
            <button className="checkout_addItem">Add Items</button>
          </Link>
        </div>
      ) : (
        <div>
          {ProductCart.map((product) => (
            <CheckoutProduct key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
