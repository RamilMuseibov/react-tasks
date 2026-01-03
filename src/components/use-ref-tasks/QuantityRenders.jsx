import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/use-ref-tasks/quantity-renders.module.css";

export default function QuantityRenders() {
  const quantityRenders = useRef(0);
  quantityRenders.current++;

  console.log("render");

  const [times, setTimes] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTimes(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={styles["quantity-renders"]}>
      <h1>QuantityRenders</h1>
      <div>{times}</div>

      <div className={styles["quantity-renders-container"]}>
        QuantityRenders:
        <div>{quantityRenders.current}</div>
      </div>
    </div>
  );
}
