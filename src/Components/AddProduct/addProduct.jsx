import React from "react";
import Product from "../Product/product";
import pr from "./pr.module.css";
export default function AddProduct(props) {
  const onSubmit = (event) => {
    event.preventDefault();
    const { title, price, count } = event.target;
    console.log(title.value, price.value, count.value);
    const string = title.value;
    const newstring = string[0].toUpperCase() + string.slice(1);
    props.createProduct(newstring, price.value, count.value);
    title.value = "";
    price.value = "";
    count.value = "";
  };

  return (
    <div className={pr.form}>
      <form onSubmit={onSubmit} className={pr.form}>
        <input type="text" name="title" placeholder="Title Product" required />
        <input type="number" name="price" placeholder="Price Product" required/>
        <input type="number" name="count" placeholder="Pieces" required/>
        <button className={pr.button}>Add</button>
      </form>
    </div>
  );
}
