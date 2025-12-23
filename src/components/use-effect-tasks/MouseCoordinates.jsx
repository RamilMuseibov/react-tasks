import React, { useEffect, useState } from "react";

export default function MouseCoordinates() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h1>MouseCoordinates</h1>
      <div
        style={{
          position: "fixed",
          left: coordinates.x + 11,
          top: coordinates.y + 11,
          padding: "4px 10px",
          pointerEvents: "none",
        }}
      >
        X: {coordinates.x}, Y: {coordinates.y}
      </div>
    </div>
  );
}
