import React, { useRef } from "react";
import styles from "../../styles/use-ref-tasks/management-dom-element.module.css";

export default function ManagementDOMElement() {
  console.log("render");

  const colorRef = useRef("#687193");
  const sizeRef = useRef(100);
  const displayUpdateColor = useRef(null);

  function generatedRandomColor() {
    colorRef.current = `#${Math.random().toString(16).substring(2, 8)}`;

    if (displayUpdateColor.current) {
      displayUpdateColor.current.style.background = colorRef.current;
    }
  }

  function generatedRandomSize() {
    sizeRef.current = `${Math.floor(Math.random() * (400 - 100 + 1) + 100)}px`;

    if (displayUpdateColor.current) {
      displayUpdateColor.current.style.width = sizeRef.current;
      displayUpdateColor.current.style.height = sizeRef.current;
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
          style={{ background: colorRef.current }}
        ></div>
      </div>
    </div>
  );
}
