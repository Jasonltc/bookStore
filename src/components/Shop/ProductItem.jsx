import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

export default function ProductItem({ title, price, description, id, cover }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartAction.addItemToCart({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <img src={cover} alt="cover book" className={classes.book} />

        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>

        <p>{description}</p>

        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}
