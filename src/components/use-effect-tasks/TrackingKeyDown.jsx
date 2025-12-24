import React, { useEffect, useState } from "react";

export default function TrackingKeyDown() {
  const [keydown, setKeydown] = useState([]);
  console.log(keydown);

  useEffect(() => {
    const keydownF = (e) => {
      setKeydown((prev) => {
        return [...prev.slice(-9), e.key];

        // prev.length > 9 ? [...prev.slice(1), e.key] : [...prev, e.key];

        // if (prev.length > 9) {
        //   return [...prev.slice(1), e.key];
        // } else {
        //   return [...prev, e.key];
        // }
      });
    };

    document.addEventListener("keydown", keydownF);

    return () => {
      document.removeEventListener("keydown", keydownF);
    };
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <h1>TrackingKeyDown</h1>
      {keydown.map((key, index) => {
        return <div key={index}>{`Вы нажали клавишу: ${key}`}</div>;
      })}
    </div>
  );
}
