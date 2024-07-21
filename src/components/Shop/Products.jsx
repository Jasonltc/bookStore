import React from "react";
import ProductItem from "./ProductItem";
import { DUMMY_PRODUCTS } from "../../store/data";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul className={classes.cardWrapper}>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            cover={product.cover}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
