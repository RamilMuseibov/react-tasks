import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/timer.module.css";

export default function Timer() {
  // const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const idInteval = setInterval(() => {
      if (isActive) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              setIsActive(false);
            }
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(idInteval);
    };
  }, [isActive, seconds]);

  function clearTimer() {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  }

  return (
    <div className={styles["timer"]}>
      <h1>Timer</h1>
      <div className={styles["btn-container"]}>
        <button onClick={() => setIsActive(true)} className={styles["btn-launch"]}>
          Start
        </button>
        <button onClick={clearTimer} className={styles["btn-clear"]}>
          Clear
        </button>
      </div>
      <div className={styles["timer_input-container"]}>
        <input
          className={styles["input-hours"]}
          onChange={(e) => setHours(+e.target.value > 23 ? 23 : +e.target.value)}
          value={hours < 10 ? `0${hours}` : hours.toString()}
          type="number"
        />
        :
        <input
          className={styles["input-minutes"]}
          onChange={(e) => setMinutes(+e.target.value > 59 ? 59 : +e.target.value)}
          value={minutes < 10 ? `0${minutes}` : minutes.toString()}
          type="number"
        />
        :
        <input
          className={styles["input-seconds"]}
          onChange={(e) => setSeconds(+e.target.value > 59 ? 59 : +e.target.value)}
          value={seconds < 10 ? `0${seconds}` : seconds.toString()}
          type="number"
        />
      </div>
    </div>
  );
}
