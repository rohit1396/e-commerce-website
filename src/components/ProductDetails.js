import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductValue } from "../ProductContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  // console.log(productId);

  const [productData, setProductData] = useState([]);
  const [{}, dispatch] = ProductValue();

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
  }, []);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: productData.id,
        image: productData.image,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        category: productData.category,
      },
    });
  };
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
              Description : {productData.description}
            </p>
            <p className="productDetails_price">Price : ${productData.price}</p>
            <p className="productDetails_category">
              Category : {productData.category}
            </p>
            {/* <p>{productData.rating.rate}</p> */}
            {/* <p>{productData.rating.count}</p> */}
            <Link to="/checkout">
              <button className="addButton" onClick={addToCart}>
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
