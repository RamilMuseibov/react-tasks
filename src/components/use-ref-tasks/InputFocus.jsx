import React, { useEffect, useRef } from "react";
import styles from "../../styles/use-ref-tasks/input-focus.module.css";

export default function InputFocus() {
  useEffect(() => {
    focus.current.focus();
  }, []);

  const focus = useRef();

  return (
    <div className={styles["input-focus"]}>
      <h1>InputFocus</h1>
      <input ref={focus} placeholder="Enter something..." type="text" />
    </div>
  );
}
