import React, { useState } from "react";
import styles from "../styles/accordion.module.css";

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

export default function Accordion() {
  const [activeSection, setActiveSection] = useState(null);

  console.log(activeSection);

  return (
    <div className={styles["accordion"]}>
      <h1>Accordion</h1>

      <div className={styles["main"]}>
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() =>
                setActiveSection(activeSection === section.id ? null : section.id)
              }
              className={styles["btn"]}
            >
              <h2>{section.title}</h2>
            </button>
            <p
              className={
                activeSection === section.id
                  ? styles[["section-subtitle"]]
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
