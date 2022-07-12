import React, { useState } from "react";
import { productAPI } from "../api/ProductApi";
import Cart from "../Components/Cart/Cart";
import Catalog from "../Components/Catalog/Catalog";
import Header from "../Components/Header/Header";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState([]);
  const [option, setFilterOption] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const setOption = (name) => {
    setFilterOption(name);
  };

  const addToCart = (product, qty = 1) => {
    const cartItem = cartItems.find((x) => x.ID === product.ID);
    if (cartItem) {
      cartItem.count++;
      setCartItem([
        ...cartItems.map((item) => (item.ID === cartItem.id ? cartItem : item)),
      ]);
    } else {
      let productItem = { ...product, count: qty };
      setCartItem([...cartItems, productItem]);
    }
  };

  const minusItem = (id) => {
    const cartItem = cartItems.find((x) => x.ID === id);
    if (cartItem) cartItem.count--;
    if (cartItem.count < 1) {
      cartItem.count = 1;
    }
    setCartItem([
      ...cartItems.map((item) => (item.ID === id ? cartItem : item)),
    ]);
  };

  const removeFromCart = (productId) => {
    setCartItem(cartItems.filter((x) => x.ID !== productId));
  };

  React.useEffect(() => {
    productAPI.getProducts().then((data) => {
      setIsLoading(true);
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const filtredProducts =
    option === "all"
      ? products
      : products.filter((product) => product.TYPE === option);

  if (isLoading) return <div>Загрузка</div>;
  return (
    <div className="app">
      <Header setOption={setOption} />
      <Catalog products={filtredProducts} addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        minusItem={minusItem}
      />
    </div>
  );
};

export default App;
