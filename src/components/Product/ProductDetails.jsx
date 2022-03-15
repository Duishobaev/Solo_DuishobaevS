import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div
      className="details-wrap"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div>
        <img id="details-img" src={productDetails.picture} alt="" />
      </div>

      <div className="details-list">
        <h2 className="title">{productDetails.name}</h2>
        <h3 className="type">{productDetails.type}</h3>
        <h4 className="price">{productDetails.price}</h4>
        <h5 className="descr">{productDetails.description}</h5>
      </div>
    </div>
  );
};

export default ProductDetails;
