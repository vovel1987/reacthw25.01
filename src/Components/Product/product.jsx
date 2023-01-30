import React from "react";
import prod from "./prod.module.css";

export default function Product(props) {
  return (
    <div>

    <div className={prod.product}>
      <p className={ props.count === 0 ? prod.null:' '}>
        Title : <span>{props.title}</span>
      </p>
      <p>
        Price : <span>{props.price}</span>
      </p>
      <p>
        Count : <span>{props.count}</span>
      </p>
      <div className={prod.buttons}>
        <button onClick={() => props.addProduct(props.id, -1)}>DELETE</button>
        <button onClick={() => props.addProduct(props.id, 1)}>ADD</button>
      </div>
    </div>
      {/* <p className={prod.count}>Summe all Products : { props.a}</p> */}

    </div>
  );
}
