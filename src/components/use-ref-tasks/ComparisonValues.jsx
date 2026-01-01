import React, { useRef, useState } from "react";
import styles from "../../styles/use-ref-tasks/comparison-values.module.css";

export default function ComparisonValues() {
  const [message, setMessage] = useState("");

  const inputPrevValue = useRef();
  const inputCurrentValue = useRef();

  console.log(inputCurrentValue.current);
  console.log(inputPrevValue.current);

  const displayMessage = useRef(null);

  function updateValues(value) {
    inputCurrentValue.current = value;

    if (inputCurrentValue.current === inputPrevValue.current) {
      setMessage(
        "Новое значение совпадает с предыдущим, пожалуйста придумайте что-то другое"
      );
      return message;
    } else {
      inputPrevValue.current = inputCurrentValue.current;
    }
  }

  return (
    <div className={styles["comparison-values"]}>
      <h1>ComparisonValues</h1>

      <input
        onChange={(e) => updateValues(e.target.value)}
        type="text"
        placeholder="Enter something..."
      />
      <div ref={displayMessage} className={styles["display-massage"]}>
        {message}
      </div>
    </div>
  );
}
