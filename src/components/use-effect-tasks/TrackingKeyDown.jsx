import React, { useEffect, useState } from "react";

export default function TrackingKeyDown() {
  const [keydown, setKeydown] = useState([]);
  console.log(keydown);

  useEffect(() => {
    const keydownF = (e) => setKeydown((prev) => [...prev, e.key]);

    document.addEventListener("keydown", keydownF);

    return () => {
      document.removeEventListener("keydown", keydownF);
    };
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <h1>TrackingKeyDown</h1>
      {keydown.slice(-10).map((key, index) => {
        return <div key={index}>{`Вы нажали клавишу: ${key}`}</div>;
      })}
    </div>
  );
}
