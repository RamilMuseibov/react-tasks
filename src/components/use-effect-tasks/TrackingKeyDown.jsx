import React, { useEffect, useState } from "react";

export default function TrackingKeyDown() {
  const [keydown, setKeydown] = useState("");

  useEffect(() => {
    const keydown = (e) => setKeydown(e.key);

    document.addEventListener("keydown", keydown);

    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <h1>TrackingKeyDown</h1>
      <div>{`Вы нажали клавишу: ${keydown}`}</div>
    </div>
  );
}
