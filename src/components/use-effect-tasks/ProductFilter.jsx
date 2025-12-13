import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/product-filter.module.css";

export default function ProductFilter() {
  console.log("render");

  const products = ["Strawberry", "Cake", "Kiwi", "Mango", "Apple"];

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  console.log(filteredProducts);

  return (
    <div className={styles["product-filter"]}>
      <h1>ProductFilter</h1>

      <input
        onChange={(e) =>
          setFilteredProducts(
            products.filter((product) =>
              product.toLowerCase().includes(e.target.value.toLowerCase())
            )
          )
        }
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
