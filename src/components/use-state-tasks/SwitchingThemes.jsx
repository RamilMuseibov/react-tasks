import React, { useState } from "react";
import styles from "../../styles/switching-themes.module.css";

const son = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const moon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
);

const content = {
  Description: <p>Вкладка с Description</p>,
  Reviews: <p>Чето с Reviews</p>,
  Specifications: <p>Какие-то Specifications</p>,
};

export default function SwitchingThemes() {
  console.log("renderTasks");

  const [activeTab, setActiveTab] = useState("Description");

  const [switchTheme, setSwitchTheme] = useState("dark-theme");

  return (
    <div className={`${styles["switching-themes"]} ${styles[switchTheme]}`}>
      <h2
        className={`${
          switchTheme === "light-theme"
            ? styles["dark_title-text"]
            : styles["light_title-text"]
        }`}
      >
        {activeTab}
      </h2>
      <h3
        className={`${
          switchTheme === "light-theme"
            ? styles["dark_subtitle-text"]
            : styles["light_subtitle-text"]
        }`}
      >
        {content[activeTab]}
      </h3>
      <div className={styles["btn-container"]}>
        <button
          className={activeTab === "Description" ? styles["active-btn"] : styles["btn"]}
          onClick={() => setActiveTab("Description")}
        >
          Description
        </button>
        <button
          className={activeTab === "Reviews" ? styles["active-btn"] : styles["btn"]}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews
        </button>
        <button
          className={
            activeTab === "Specifications" ? styles["active-btn"] : styles["btn"]
          }
          onClick={() => setActiveTab("Specifications")}
        >
          Specifications
        </button>
      </div>
      <button
        onClick={() =>
          setSwitchTheme(switchTheme === "light-theme" ? "dark-theme" : "light-theme")
        }
        className={`${
          switchTheme === "light-theme"
            ? styles["dark-theme_btn-switching-themes"]
            : styles["light-theme_btn-switching-themes"]
        }`}
      >
        {switchTheme === "light-theme" ? moon : son}
      </button>
    </div>
  );
}
