import React, { useRef } from "react";
import styles from "../../styles/use-ref-tasks/management-dom-element.module.css";

export default function ManagementDOMElement() {
  console.log("render");

  const displayUpdateColor = useRef(null);

  function generatedRandomSize() {
    const randomSize = `${Math.floor(Math.random() * (400 - 100 + 1) + 100)}px`;

    if (displayUpdateColor.current) {
      displayUpdateColor.current.style.width = randomSize;
      displayUpdateColor.current.style.height = randomSize;
    }
  }

  function generatedRandomColor() {
    if (displayUpdateColor.current) {
      displayUpdateColor.current.style.background = `#${Math.random()
        .toString(16)
        .substring(2, 8)}`;
    }
  }

  return (
    <div className={styles["management-dom-element"]}>
      <h1>ManagementDOMElement</h1>
      <div className={styles["square-container"]}>
        <button
          className={styles["btn_change-color"]}
          onClick={() => generatedRandomColor()}
        >
          Change color
        </button>

        <button
          className={styles["btn_change-size"]}
          onClick={() => generatedRandomSize()}
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
