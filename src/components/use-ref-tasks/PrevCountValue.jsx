import React, { useRef } from "react";
import styles from "../../styles/use-ref-tasks/prev-count-value.module.css";

export default function PrevCountValue() {
  const currentValue = useRef(0);
  const prevValue = useRef(-1);

  const displayCurrentValue = useRef(null);
  const displayPrevValue = useRef(null);

  function updateCurrentValue() {
    if (displayCurrentValue.current) {
      displayCurrentValue.current.innerHTML = currentValue.current;
    }
  }

  function updatePrevValue() {
    if (displayPrevValue.current) {
      displayPrevValue.current.innerHTML = currentValue.current - 1;
    }
  }

  return (
    <div className={styles["prev-count-value"]}>
      <h1>PrevCountValue</h1>

      <div className={styles["counter-container"]}>
        <button
          onClick={() => {
            currentValue.current--;
            updateCurrentValue();
            updatePrevValue();
          }}
        >
          -
        </button>

        <div className={styles["prev-value-container"]}>
          <div ref={displayPrevValue}>{prevValue.current}</div>
          <div>PrevValue</div>
        </div>

        <div className={styles["current-value-container"]}>
          <div ref={displayCurrentValue}>{currentValue.current}</div>
          <div>CurrentValue</div>
        </div>

        <button
          onClick={() => {
            currentValue.current++;
            updateCurrentValue();
            updatePrevValue();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
