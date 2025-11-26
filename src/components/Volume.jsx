import React, { useState } from "react";
import styles from "../styles/volume.module.css";

export default function Volume() {
  const [volume, setVolume] = useState(50);

  return (
    <div className={styles["volume"]}>
      <h1>Volume</h1>
      <div className={styles["main"]}>
        <div>0</div>
        <div className={styles["container"]}>
          <input
            className={styles["slider"]}
            type="range"
            value={volume}
            onChange={(e) => setVolume(+e.target.value)}
          />
          <div
            className={
              volume !== 0 && volume !== 100
                ? styles["div_display-volume"]
                : styles["hidden"]
            }
          >
            {volume}
          </div>
        </div>
        <div>100</div>
      </div>
    </div>
  );
}
