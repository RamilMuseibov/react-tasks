import React, { useState } from "react";
import styles from "../styles/tooltip.module.css";

export default function Tooltip() {
  const squares = [
    { id: 1, color: "#809423" },
    { id: 2, color: "#987123" },
    { id: 3, color: "#345098" },
    { id: 4, color: "#681234" },
    { id: 5, color: "#0ccbdcff" },
  ];
  

  return (
    <div className={styles["tooltip"]}>
      <h1>Tooltip</h1>
      <div className={styles["main"]}>
        <div className={styles["squares-container"]}>
          {squares.map((square) => (
            <div
              key={square.id}
              style={{ backgroundColor: square.color }}
              className={styles["square"]}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
