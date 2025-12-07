import React, { useState } from "react";
import styles from "../../styles/tooltip.module.css";

const squares = [
  { id: 1, color: "lightgreen" },
  { id: 2, color: "brown" },
  { id: 3, color: "blue" },
  { id: 4, color: "purple" },
  { id: 5, color: "burlywood" },
];

export default function Tooltip() {
  const [activeSquare, setActiveSquare] = useState();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  console.log(mousePosition);
  console.log(activeSquare);

  return (
    <div className={styles["tooltip"]}>
      <h1>Tooltip</h1>
      <div className={styles["main"]}>
        <div className={styles["squares-container"]}>
          {squares.map((square) => (
            <div
              onMouseEnter={() => setActiveSquare({ id: square.id, color: square.color })}
              onMouseLeave={() => setActiveSquare(null)}
              onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
              key={square.id}
              style={{ backgroundColor: square.color }}
              className={styles["square"]}
            ></div>
          ))}
        </div>

        {activeSquare ? (
          <div
            style={{
              position: "fixed",
              left: mousePosition.x + 10,
              top: mousePosition.y + 10,
              padding: "4px 10px",
              pointerEvents: "none",
            }}
          >
            {activeSquare.color}
          </div>
        ) : null}
      </div>
    </div>
  );
}
