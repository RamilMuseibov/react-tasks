import React, { useState } from "react";
import styles from "../../styles/use-state-tasks/downloader.module.css";

export default function Downloader() {
  const [isLoading, setIsLoading] = useState(false);

  function showDownload() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <div className={styles["downloader"]}>
      <h1>Downloader</h1>
      <div className={styles["main"]}>
        <button onClick={showDownload} className={styles["btn"]} disabled={isLoading}>
          {isLoading === true ? "Downloading..." : "Download"}
        </button>
      </div>
    </div>
  );
}
