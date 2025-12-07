import React, { useState } from "react";
import styles from "../../styles/password.module.css";

const openEye = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const closedEye = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
    <path d="m2 2 20 20" />
  </svg>
);

export default function Password() {
  const [changeTypeInputPassword, setChangeTypeInputPassword] = useState(false);
  const [changeTypeInputConfPassword, setChangeTypeInputConfPassword] = useState(false);

  return (
    <div className={styles["password"]}>
      <h1>Registrarion form</h1>
      <div className={styles["main"]}>
        <form className={styles["registration-form"]} action="">
          <div className={styles["fullname-container"]}>
            <input
              placeholder="Enter the first name..."
              className={styles["input_first-name"]}
              type="text"
            />
            <input
              placeholder="Enter the last name..."
              className={styles["input_last-name"]}
              type="text"
            />
          </div>

          <div className={styles["password-container"]}>
            <div className={styles["password-input-wrapper"]}>
              <input
                placeholder="Enter the password..."
                className={styles["input_password-conf"]}
                type={changeTypeInputPassword ? "text" : "password"}
              />
              <button
                onClick={() => setChangeTypeInputPassword(!changeTypeInputPassword)}
                className={styles["btn_switching-type-input"]}
                type="button"
              >
                {changeTypeInputPassword ? closedEye : openEye}
              </button>
            </div>

            <div className={styles["password-input-wrapper"]}>
              <input
                placeholder="Confirm the password..."
                className={styles["input_password-conf"]}
                type={changeTypeInputConfPassword ? "text" : "password"}
              />
              <button
                onClick={() =>
                  setChangeTypeInputConfPassword(!changeTypeInputConfPassword)
                }
                className={styles["btn_switching-type-input"]}
                type="button"
              >
                {changeTypeInputConfPassword ? closedEye : openEye}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
