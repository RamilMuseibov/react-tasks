import React, { useState } from "react";
import styles from "../styles/tabs.module.css";

export default function Tabs() {
  console.log("renderTasks");

  const [activeTab, setActiveTab] = useState("Description");

  const content = {
    Description: <p>Вкладка с Description</p>,
    Reviews: <p>Чето с Reviews</p>,
    Specifications: <p>Какие-то Specifications</p>,
  };

  return (
    <div className={styles["tabs"]}>
      <h2>{activeTab}</h2>
      {content[activeTab]}
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
    </div>
  );
} 
