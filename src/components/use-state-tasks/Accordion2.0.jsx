import React, { useState } from "react";
import styles from "../../styles/use-state-tasks/accordion2.0.module.css";

const arrowDown = (
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
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const sections = [
  {
    id: 1,
    title: "First item",
    subtitle: "Click the accordion button to see a different style when expanded.",
  },
  {
    id: 2,
    title: "Second item",
    subtitle: "The trigger background changes to teal with white text when expanded.",
  },
  {
    id: 3,
    title: "Third item",
    subtitle: "You can use any style props with the _open pseudo selector.",
  },
];

export default function Accordion2() {
  const [activeSection, setActiveSection] = useState([]);

  console.log(activeSection);

  function toggleSection(id) {
    setActiveSection(
      activeSection.includes(id)
        ? activeSection.filter((item) => item !== id)
        : [...activeSection, id]
    );
  }

  return (
    <div className={styles["accordion"]}>
      <h1>Accordion2</h1>

      <div className={styles["main"]}>
        {sections.map((section) => (
          <div key={section.id}>
            <button onClick={() => toggleSection(section.id)} className={styles["btn"]}>
              <div
                className={`${styles["title-arrow-container"]} ${
                  activeSection.includes(section.id) ? styles["open"] : ""
                }`}
              >
                <h2>{section.title}</h2>
                <div
                  className={`${styles["arrow"]} ${
                    activeSection.includes(section.id) ? styles["arrow-rotated"] : ""
                  }`}
                >
                  {arrowDown}
                </div>
              </div>
            </button>
            <p
              className={
                activeSection.includes(section.id)
                  ? styles["section-subtitle"]
                  : styles["hidden"]
              }
            >
              {section.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
