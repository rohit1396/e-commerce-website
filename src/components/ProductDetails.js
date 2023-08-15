import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductValue } from "../ProductContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const { addToCart } = ProductValue();

  useEffect(() => {
    const getProducts = async () => {
      let request;
      try {
        request = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
      } catch (err) {
        console.log("Err ", err);
      }
      console.log(productId);
      console.log(request.data);
      setProductData(request.data);
    };
    getProducts();
  }, [productId]);

  return (
    <div className="productDetails">
      <h1>Product Details</h1>
      {productData.length !== 0 && (
        <Link to="/products">
          <button className="backButton">Back To Products</button>
        </Link>
      )}

      {productData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="productDetails_content">
          <div className="productDetails_img">
            <img src={productData.image} alt={productData.title} />
          </div>
          <div className="productDetails_info">
            <p className="productDetails_title">Title : {productData.title}</p>
            <p className="productDetails_description">
              Description :{" "}
              {readMore
                ? productData.description
                : `${productData.description.substring(0, 200)} ...`}
              <span className="readmore" onClick={() => setReadMore(!readMore)}>
                {readMore ? "show Less" : "Read more"}
              </span>
            </p>
            <p className="productDetails_price">Price : ${productData.price}</p>
            <p className="productDetails_category">
              Category : {productData.category}
            </p>
            <Link to="/checkout">
              <button
                className="addButton"
                onClick={() => addToCart(productData)}>
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
