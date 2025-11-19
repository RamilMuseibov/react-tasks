import React from "react";

import React, { useState } from "react";

export default function Tabs() {
  console.log("renderTasks");

  const [activeTab, setActiveTab] = useState("Description");

  const content = {
    Description: <p>Вкладка с Description</p>,
    Reviews: <p>Чето с Reviews</p>,
    Specifications: <p>Какие-то Specifications</p>,
  };

  return (
    <div className="tasks">
      <h2>{activeTab}</h2>
      {content[activeTab]}
      <div className="btn-container">
        <button
          className={activeTab === "Description" ? "active-btn" : "btn"}
          onClick={() => setActiveTab("Description")}
        >
          Description
        </button> 
        <button
          className={activeTab === "Reviews" ? "active-btn" : "btn"}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews
        </button>
        <button
          className={activeTab === "Specifications" ? "active-btn" : "btn"}
          onClick={() => setActiveTab("Specifications")}
        >
          Specifications
        </button>
      </div>
    </div>
  );
}
