import React, { useState } from "react";
import styles from "../../styles/tabs.module.css";

const content = {
  Description: <p>Вкладка с Description</p>,
  Reviews: <p>Чето с Reviews</p>,
  Specifications: <p>Какие-то Specifications</p>,
};

export default function Tabs() {
  console.log("renderTasks");

  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className={styles["tabs"]}>
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

      <div>{content[activeTab]}</div>
    </div>
  );
}
