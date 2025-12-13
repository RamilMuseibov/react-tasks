import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/tracking-counter.module.css";

export default function TrackingCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Счётчик изменился, тперь равен:${count}`);
  }, [count]);

  return (
    <div className={styles["tracking-counter"]}>
      <h1>TrackingCounter</h1>

      <div>{count}</div>
      <button className={styles["btn"]} onClick={() => setCount(count + 1)}>
        icn
      </button>
    </div>
  );
}
