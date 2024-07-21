import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

export default function CartButton() {
  const totalProduct = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function toggleCartHandler() {
    dispatch(uiAction.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalProduct}</span>
    </button>
  );
}
