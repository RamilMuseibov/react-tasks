import React, { useRef, useState } from "react";
import styles from "../../styles/use-ref-tasks/saving-taimer.module.css";

export default function SavingTaimer() {
  console.log("render");

  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const idInterval = useRef();

  function startTime() {
    if (idInterval.current) {
      return;
    }

    idInterval.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  function stopTime() {
    if (idInterval.current) {
      clearInterval(idInterval.current);
      idInterval.current = null;
    }
  }

  return (
    <div className={styles["saving-taimer"]}>
      <h1>SavingTaimer</h1>

      <div className={styles["counter-container"]}>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div>{counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>

      <div className={styles["time-container"]}>
        <div className={styles["btn_timer-controls-container"]}>
          <button onClick={() => stopTime()} className={styles["bnt-stop-time"]}>
            Stop
          </button>
          <button onClick={() => startTime()} className={styles["bnt-play-time"]}>
            Play
          </button>
        </div>
        <div className={styles["current-time"]}>{time}</div>
      </div>
    </div>
  );
}
