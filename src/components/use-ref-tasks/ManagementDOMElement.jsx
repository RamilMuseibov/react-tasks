import React, { useRef } from "react";
import styles from "../../styles/use-ref-tasks/management-dom-element.module.css";

export default function ManagementDOMElement() {
  console.log("render");

  // const colorRef = useRef("#687193");
  // const sizeRef = useRef(100);
  const displayUpdateColor = useRef(null);

  function generatedRandomColor() {
    // colorRef.current = `#${Math.random().toString(16).substring(2, 8)}`;

    if (displayUpdateColor.current) {
      displayUpdateColor.current.style.background = `#${Math.random()
        .toString(16)
        .substring(2, 8)}`;
    }
    return `#${Math.random().toString(16).substring(2, 8)}`;
  }

  function generatedRandomSize() {
    // sizeRef.current = `${Math.floor(Math.random() * (400 - 100 + 1) + 100)}px`;

    if (displayUpdateColor.current) {
      displayUpdateColor.current.style.width = `${Math.floor(
        Math.random() * (400 - 100 + 1) + 100
      )}px`;
      displayUpdateColor.current.style.height = `${Math.floor(
        Math.random() * (400 - 100 + 1) + 100
      )}px`;
    }

    return `${Math.floor(Math.random() * (400 - 100 + 1) + 100)}px`;
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
            background: generatedRandomColor(),
            width: generatedRandomSize(),
            height: generatedRandomSize(),
          }}
        ></div>
      </div>
    </div>
  );
}
