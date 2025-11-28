import React, { useState } from "react";
import styles from "../styles/squares.module.css";

function generatedRandomColor() {
  return `#${Math.random().toString(16).substring(2, 8)}`;
}

export default function Squares() {
  const [squares, setSquares] = useState([
    { id: 1, color: generatedRandomColor() },
    { id: 2, color: generatedRandomColor() },
  ]);

  function addSquare() {
    const newSquare = {
      id: Date.now(),
      color: generatedRandomColor(),
    };

    setSquares([...squares, newSquare]);
  }

  function setRandomColor(id) {
    setSquares(
      squares.map((square) =>
        square.id === id ? { ...square, color: generatedRandomColor() } : square
      )
    );
  }

  return (
    <div className={styles["squares"]}>
      <h1>Squares</h1>
      <div className={styles["main"]}>
        <button onClick={addSquare} className={styles["btn_add-square"]}>
          Add square
        </button>
        <div className={styles["squares-container"]}>
          {squares.map((square) => (
            <div
              key={square.id}
              onClick={() => setRandomColor(square.id)}
              style={{ backgroundColor: square.color }}
              className={styles["square"]}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
