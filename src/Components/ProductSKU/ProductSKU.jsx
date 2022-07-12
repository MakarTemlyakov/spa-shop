import React from "react";
import "./ProductSKU.css";

const ProductSKU = ({ product, setSelectedProduct, selectedProduct }) => {
  const selectProduct = () => {
    setSelectedProduct(product);
  };

  React.useEffect(() => {
    setSelectedProduct(selectedProduct);
  }, []);

  const styleProduct =
    product.ID === selectedProduct.ID ? "product-sku-active" : "product-sku";
  return (
    <div
      className={styleProduct}
      onClick={() => {
        selectProduct();
      }}
    >
      <h2 className="product-sku__name">{product.NAME}</h2>
      <p>
        <b>Ширина:</b>
        {product.DEEP}
      </p>
      <p>
        <b>Длина:</b>
        {product.LENGTH}
      </p>
    </div>
  );
};

export default ProductSKU;
