import React, { useRef } from "react";
import styles from "../../styles/use-ref-tasks/management-dom-element.module.css";

function generatedRandomSize(displayUpdateColor) {
  const randomColor = `${Math.floor(Math.random() * (400 - 100 + 1) + 100)}px`;

  if (displayUpdateColor.current) {
    displayUpdateColor.current.style.width = randomColor;
    displayUpdateColor.current.style.height = randomColor;
  }
}

function generatedRandomColor(displayUpdateColor) {
  if (displayUpdateColor.current) {
    displayUpdateColor.current.style.background = `#${Math.random()
      .toString(16)
      .substring(2, 8)}`;
  }
}

export default function ManagementDOMElement() {
  console.log("render");

  const displayUpdateColor = useRef(null);

  return (
    <div className={styles["management-dom-element"]}>
      <h1>ManagementDOMElement</h1>
      <div className={styles["square-container"]}>
        <button
          className={styles["btn_change-color"]}
          onClick={() => generatedRandomColor(displayUpdateColor)}
        >
          Change color
        </button>

        <button
          className={styles["btn_change-size"]}
          onClick={() => generatedRandomSize(displayUpdateColor)}
        >
          Change size
        </button>

        <div
          ref={displayUpdateColor}
          className={styles["square"]}
          style={{
            background: "#687193",
            width: "100px",
            height: "100px",
          }}
        ></div>
      </div>
    </div>
  );
}
