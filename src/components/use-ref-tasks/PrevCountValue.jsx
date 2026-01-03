import React, { useRef, useState } from "react";
import styles from "../../styles/use-ref-tasks/prev-count-value.module.css";

export default function PrevCountValue() {
  console.log("render");

  const [counter, setCounter] = useState(0);

  const prevValue = useRef(0);

  return (
    <div className={styles["prev-count-value"]}>
      <h1>PrevCountValue</h1>

      <div className={styles["counter-container"]}>
        <button
          onClick={() => {
            prevValue.current = counter;
            setCounter(counter - 5);
          }}
        >
          -
        </button>

        <div className={styles["prev-value-container"]}>
          <div>{prevValue.current}</div>
          <div>PrevValue</div>
        </div>

        <div className={styles["current-value-container"]}>
          <div>{counter}</div>
          <div>CurrentValue</div>
        </div>

        <button
          onClick={() => {
            prevValue.current = counter;
            setCounter(counter + 5);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
