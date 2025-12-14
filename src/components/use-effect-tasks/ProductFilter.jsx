import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/product-filter.module.css";

export default function ProductFilter() {
  console.log("render");

  const products = ["Strawberry", "Cake", "Kiwi", "Mango", "Apple"];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log(products[1].includes(""));

  useEffect(() => {
    setFilteredProducts(
      filter(products, (product) =>
        product.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue]);

  console.log(filteredProducts);

  return (
    <div className={styles["product-filter"]}>
      <h1>ProductFilter</h1>

      <input
        onChange={(e) => setInputValue(e.target.value)}
        className={styles["search-input"]}
        type="text"
        placeholder="Enter the product name"
      />
      <div className={styles["products-container"]}>
        {filteredProducts.map((product) => {
          return (
            <div key={product} className={styles["products"]}>
              {product}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function filter(arr, cb) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }

  return res;
}
