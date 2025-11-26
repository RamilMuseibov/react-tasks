import React from "react";
import styles from "../styles/counter.module.css";

export default function Counter() {
  return (
    <div className={styles["counter"]}>
      <h1>Counter</h1>
      <div className={styles["main"]}>
        <input className={styles["input-steps"]} type="text" />
        <div className={styles["btn-container"]}>
          <button className={styles["btn-increment"]}>Increment</button>
          <button className={styles["btn-decrement"]}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
