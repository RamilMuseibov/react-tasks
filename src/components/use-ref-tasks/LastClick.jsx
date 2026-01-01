import React, { useRef } from "react";
import styles from "../../styles/use-ref-tasks/last-click.module.css";

export default function LastClick() {
  const coordinates = useRef();
  const displayCoordinates = useRef(null);

  document.addEventListener("click", (e) => {
    coordinates.current = `Mouse coordinates X: ${e.clientX}, Y: ${e.clientY}`;
    if (displayCoordinates) {
      displayCoordinates.current.innerHTML = coordinates.current;
    }
  });

  return (
    <div className={styles["last-click"]}>
      <h1>LastClick</h1>

      <div ref={displayCoordinates}>{coordinates.current}</div>
    </div>
  );
}
