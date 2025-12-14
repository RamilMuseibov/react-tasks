import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/current-time.module.css";

export default function CurrentTime() {
  const [times, setTimes] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTimes(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  // setTimeout(() => {
  //   setTimes(new Date().toLocaleTimeString());
  // }, 1000);

  return (
    <div className={styles["current-time"]}>
      <h1>CurrentTime</h1>
      <div>{times}</div>
    </div>
  );
}
