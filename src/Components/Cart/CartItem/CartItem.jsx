import React, { useState } from "react";
import "./CartItem.css";

const CartItem = ({ cartItem, removeFromCart, addToCart, minusItem }) => {
  const itemTotalPrice = cartItem.PRICE * cartItem.count;
  return (
    <tr className="body-row">
      <td className="body-col-name">{cartItem.NAME}</td>
      <td className="body-col-count">
        <button
          type="button"
          className="btn-plus"
          onClick={() => addToCart(cartItem)}
        >
          +
        </button>
        <b className="item-count">{cartItem.count}</b>
        <button
          type="button"
          className="btn-minus"
          onClick={() => minusItem(cartItem.ID)}
        >
          -
        </button>
      </td>
      <td className="body-col-price">${cartItem.PRICE}</td>
      <td className="body-col-total">${itemTotalPrice.toFixed(2)}</td>
      <td
        className="body-col-remove"
        onClick={(e) => {
          removeFromCart(cartItem.ID);
        }}
      >
        Удалить
      </td>
    </tr>
  );
};

export default CartItem;
