import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/title-updater.module.css";

export default function TitleUpdater() {
  const [text, setText] = useState("TitleUpdater");

  useEffect(() => {
    document.title = text;
  }, [text]);

  return (
    <div className={styles["title-updater"]}>
      <h1>TitleUpdater</h1>

      <input
        onChange={(e) => setText(e.target.value)}
        className={styles["input"]}
        type="text"
        placeholder="Ente title..."
      />
    </div>
  );
}
