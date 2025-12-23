import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/timer.module.css";

export default function Timer() {
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const idInteval = setInterval(() => {
      setTimer((prev) => {
        const { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { hours, minutes, seconds: seconds - 1 };
          // return { ...prev, seconds: seconds - 1 };
        }

        if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        }

        if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }

        setIsRunning(false);

        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => {
      clearInterval(idInteval);
    };
  }, [isRunning]);

  function clearTimer() {
    setTimer({ hours: 0, minutes: 0, seconds: 0 });
    setIsRunning(false);
  }

  function updateSeconds(inputValue) {
    setTimer({ ...timer, seconds: inputValue > 59 ? 59 : inputValue });
  }

  function updateMinutes(inputValue) {
    setTimer({ ...timer, minutes: inputValue > 59 ? 59 : inputValue });
  }

  function updateHours(inputValue) {
    setTimer({ ...timer, hours: inputValue > 23 ? 23 : inputValue });
  }

  return (
    <div className={styles["timer"]}>
      <h1>Timer</h1>
      <div className={styles["btn-container"]}>
        <button onClick={() => setIsRunning(!isRunning)} className={styles["btn-launch"]}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={clearTimer} className={styles["btn-clear"]}>
          Clear
        </button>
      </div>
      <div className={styles["timer_input-container"]}>
        <input
          className={styles["input-hours"]}
          onChange={(e) => updateHours(+e.target.value)}
          value={timer.hours < 10 ? `0${timer.hours}` : timer.hours.toString()}
          type="number"
        />
        :
        <input
          className={styles["input-minutes"]}
          onChange={(e) => updateMinutes(+e.target.value)}
          value={timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes.toString()}
          type="number"
        />
        :
        <input
          className={styles["input-seconds"]}
          onChange={(e) => updateSeconds(+e.target.value)}
          value={timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds.toString()}
          type="number"
        />
      </div>
    </div>
  );
}
