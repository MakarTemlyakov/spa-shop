import React from "react";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cartItems, removeFromCart, addToCart, minusItem }) => {
  const totalPriceCart = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.count * cartItem.PRICE,
    0
  );
  return (
    <section className="cart">
      <div className="container">
        {cartItems.length > 0 ? (
          <>
            <h2 className="title">Корзина</h2>
            <div className="cart-wrapper">
              <table className="cart-table">
                <thead>
                  <tr className="head-row">
                    <th className="head-col">Наименование</th>
                    <th className="head-col">Кол-во</th>
                    <th className="head-col">Цена/шт</th>
                    <th className="head-col" colSpan={2}>
                      Сумма
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cartItem, index) => (
                    <CartItem
                      key={index}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                      minusItem={minusItem}
                      cartItem={cartItem}
                    />
                  ))}
                  <tr>
                    <td colSpan={3}>Итого:</td>
                    <td colSpan={2}>${totalPriceCart.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <span className="cart-empty">Корзина пустая</span>
        )}
      </div>
    </section>
  );
};

export default Cart;
