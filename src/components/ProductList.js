import React from "react";
import { ProductItem } from "./ProductItem";
import products from "../products";

const ProductList = () => {
  const displayProducts = products.map((product) => {
    return <ProductItem />;
  });
  return <div className="containor2">{displayProducts} </div>;
};

export default ProductList;
