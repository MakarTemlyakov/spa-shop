import React, { useState } from "react";
import { getMinPrice } from "../../utils/getMinPrice";
import ListSku from "../ListSku/ListSku";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const addProductToCart = () => {
    const productItem = selectedProduct !== null ? selectedProduct : product;
    addToCart(productItem);
  };
  // Для выпадающего списка
  const minPrice = product.SKU && getMinPrice(product.SKU);

  return (
    <div className="product">
      <div className="product__descr">
        <h3 className="product__name">{product.NAME}</h3>
        <div className="product__img">{product.PICTURE}</div>
      </div>
      {product.SKU && (
        <>
          <h3 className="product-sku__subTitle">Характеристики:</h3>
          <div className="product-sku__wrapper">
            <ListSku
              listSku={product.SKU}
              setSelectedProduct={setSelectedProduct}
              selectedProduct={selectedProduct}
            />
          </div>
        </>
      )}
      <span className="product__price">
        Цена: ${selectedProduct ? selectedProduct.PRICE : product.PRICE}
        {/* {minPrice ? `Цена от $${minPrice}` : `Цена $${product.PRICE}`} */}
      </span>
      <button
        className="btn"
        type="button"
        onClick={() => {
          addProductToCart();
        }}
      >
        Добавить
      </button>
    </div>
  );
};

export default Product;
