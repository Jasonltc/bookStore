import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

export default function CartItem(props) {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartAction.addItemToCart({ id, title, price }));
  };

  const removeItemHandle = () => {
    dispatch(cartAction.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandle}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
}
