import React, { useEffect, useRef } from "react";
import styles from "../../styles/use-ref-tasks/counter-without-render.module.css";

export default function CounterWithoutRender() {
  console.log("render");

  const counterRef = useRef(0);
  const displayCounterRef = useRef(null);

  function update() {
    if (displayCounterRef.current) {
      displayCounterRef.current.innerHTML = counterRef.current;
    }
  }

  return (
    <div className={styles["counter-without-render"]}>
      <h1>CounterWithoutRender</h1>

      <div className={styles["counter-container"]}>
        <button
          onClick={() => {
            counterRef.current--;
            update();
          }}
        >
          -
        </button>
        <div ref={displayCounterRef}>{counterRef.current}</div>
        <button
          onClick={() => {
            counterRef.current++;
            update();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
