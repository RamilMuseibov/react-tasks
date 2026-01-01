import React, { useRef, useState } from "react";
import styles from "../../styles/use-ref-tasks/saving-taimer.module.css";

export default function SavingTaimer() {
  console.log("render");

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const counter = useRef(0);
  const displayCounter = useRef(null);

  function updateCounter() {
    if (displayCounter.current) {
      displayCounter.current.innerHTML = counter.current;
    }
  }

  const idInterval = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className={styles["saving-taimer"]}>
      <h1>SavingTaimer</h1>

      <div className={styles["counter-container"]}>
        <button
          onClick={() => {
            counter.current--;
            updateCounter();
          }}
        >
          -
        </button>
        <div ref={displayCounter}>{counter.current}</div>
        <button
          onClick={() => {
            counter.current++;
            updateCounter();
          }}
        >
          +
        </button>
      </div>

      <div className={styles["current-time"]}>{time}</div>
    </div>
  );
}
