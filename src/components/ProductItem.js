import React from "react";
import products from "../products";

export const ProductItem = () => {
  return (
    <div>
      <img src={products[0].image} className="image-style" />
      <p>{products[0].name}</p>
      <p>{products[0].Price}</p>
    </div>
  );
};
