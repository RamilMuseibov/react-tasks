import React, { useState } from "react";
import styles from "../styles/counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const [stepSize, setStepSize] = useState("");

  return (
    <div className={styles["counter"]}>
      <h1>Counter</h1>
      <div className={styles["main"]}>
        <input
          placeholder="Enter the step size..."
          className={styles["input-steps"]}
          type="number"
          value={stepSize}
          onChange={(e) => setStepSize(e.target.value)}
        />
        <div className={styles["btn-container"]}>
          <button
            onClick={() => setCount(count + +stepSize)}
            className={styles["btn-decrement"]}
          >
            Decrement
          </button>

          <div>{count}</div>

          <button
            onClick={() => setCount(count - +stepSize)}
            className={styles["btn-increment"]}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
