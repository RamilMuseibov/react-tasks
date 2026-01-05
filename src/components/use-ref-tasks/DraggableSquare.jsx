import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/use-ref-tasks/draggable-square.module.css";

export default function DraggableSquare() {
  console.log("render");

  const [isDragging, setIsDragging] = useState(false);

  const displaySquareRef = useRef();
  const offsetRef = useRef({ x: 0, y: 0 });
  const newCoordinatesRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = displaySquareRef.current.getBoundingClientRect();

    offsetRef.current.x = e.clientX - rect.x;
    offsetRef.current.y = e.clientY - rect.y;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      newCoordinatesRef.current = {
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y,
      };

      if (displaySquareRef.current) {
        displaySquareRef.current.style.top = `${
          newCoordinatesRef.current.y < 0
            ? 0
            : newCoordinatesRef.current.y > window.innerHeight - 100
            ? window.innerHeight - 100
            : newCoordinatesRef.current.y
        }px`;
        displaySquareRef.current.style.left = `${
          newCoordinatesRef.current.x < 0
            ? 0
            : newCoordinatesRef.current.x > window.innerWidth - 100
            ? window.innerWidth - 100
            : newCoordinatesRef.current.x
        }px`;
      }
    };

    console.log(window.innerWidth);

    const handleMouseUp = (e) => {
      setIsDragging(false);
    };
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);

  return (
    <div className={styles["draggable-square"]}>
      <h1>DraggableSquare</h1>

      <div
        ref={displaySquareRef}
        onMouseDown={handleMouseDown}
        className={styles["square"]}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          position: "absolute",
          top: "100px",
          left: "20px",
        }}
      ></div>
    </div>
  );
}
