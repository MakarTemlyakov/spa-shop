import React from "react";
import ProductSKU from "../ProductSKU/ProductSKU";
import "./ListSku.css";

const getDefaultSkuProduct = (skuProduct) => {
  return Object.values(skuProduct)[0];
};

const ListSku = ({ listSku, setSelectedProduct, selectedProduct }) => {
  const defaultSelected = getDefaultSkuProduct(listSku);
  return (
    <>
      {Object.values(listSku).map((sku) => (
        <ProductSKU
          key={sku.ID}
          product={sku}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct || defaultSelected}
        />
      ))}
    </>
  );
};

export default ListSku;
