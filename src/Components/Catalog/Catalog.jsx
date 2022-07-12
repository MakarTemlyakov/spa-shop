import React, { useState } from "react";
import ListSku from "../ListSku/ListSku";
import Product from "../Product/Product";
import "./Catalog.css";

const Catalog = ({ products, addToCart }) => {
  if (!products) {
    return <div>Каталог пустой</div>;
  }
  return (
    <section className="products">
      <div className="container">
        <div className="products-wrapper">
          {products.map((product) => (
            <Product product={product} key={product.ID} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
