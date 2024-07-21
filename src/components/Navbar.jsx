import React from "react";
import CartButton from "./Cart/CartButton";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={classes.header}>
      <h1>BookStore</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
