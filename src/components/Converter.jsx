import React, { useState } from "react";
import styles from "../styles/converter.module.css";

export default function Converter() {
  const [rubls, setRubles] = useState("");
  const [dollars, setDollars] = useState("");
  const [pounds, setPounds] = useState("");
  const [yens, setYens] = useState("");

  const courseDollar = 80.55;
  const coursePounds = 105.18;
  const courseYen = 0.51;

  console.log(+(100 / courseDollar).toFixed(2));

  function handleRublsChange(value) {
    setRubles(value);
    if (value === "") {
      setDollars("");
      setPounds("");
      setYens("");
      return;
    }

    setRubles(value);
    setDollars(+(value / courseDollar).toFixed(2));
    setPounds(+(value / coursePounds).toFixed(2));
    setYens(+(value / courseYen).toFixed(2));
  }

  function handleDollarsChange(value) {
    setDollars(value);
    if (value === "") {
      setRubles("");
      setPounds("");
      setYens("");
      return;
    }

    setDollars(value);
    setRubles(+(value * courseDollar).toFixed(2));
    setPounds(+((value * courseDollar) / coursePounds).toFixed(2));
    setYens(+((value * courseDollar) / courseYen).toFixed(2));
  }

  function handlePoundsChange(value) {
    setPounds(value);
    if (value === "") {
      setRubles("");
      setDollars("");
      setYens("");
      return;
    }

    setPounds(value);
    setRubles(+(value * coursePounds).toFixed(2));
    setDollars(+((value * coursePounds) / courseDollar).toFixed(2));
    setYens(+((value * coursePounds) / courseYen).toFixed(2));
  }

  function handleYensChange(value) {
    setYens(value);
    if (value === "") {
      setRubles("");
      setDollars("");
      setPounds("");
      return;
    }

    setYens(value);
    setRubles(+(value * courseYen).toFixed(2));
    setDollars(+((value * courseYen) / courseDollar).toFixed(2));
    setPounds(+((value * courseYen) / coursePounds).toFixed(2));
  }

  return (
    <div className={styles["converter"]}>
      <h1>Converter</h1>
      <div className={styles["main"]}>
        <div>
          <h3>Course rubls</h3>
          <input
            type="number"
            value={rubls}
            placeholder="Enter the sum in rubls..."
            onChange={(e) => handleRublsChange(e.target.value)}
          />
        </div>
        <div>
          <h3>Course dollar</h3>
          <input
            type="number"
            value={dollars}
            placeholder="Enter the sum in dollars..."
            onChange={(e) => {
              handleDollarsChange(e.target.value);
            }}
          />
        </div>
        <div>
          <h3>Course pound</h3>
          <input
            type="number"
            value={pounds}
            placeholder="Enter the sum in pounds..."
            onChange={(e) => {
              handlePoundsChange(e.target.value);
            }}
          />
        </div>
        <div>
          <h3>Course yen</h3>
          <input
            type="number"
            value={yens}
            placeholder="Enter the sum in pounds..."
            onChange={(e) => {
              handleYensChange(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
