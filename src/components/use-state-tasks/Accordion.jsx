import React, { useState } from "react";
import styles from "../../styles/accordion.module.css";



export default function Accordion({ sections }) {
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

// function useState(inialState) {
//   let state = inialState;

//   function setState(newValue) {
//     state = newValue;
//   }

//   return [state, setState];
// }

// const arr = [1, 2, 3, 4, 5];

// const [arr1, arr2, ...arr3] = arr;

// const firstValue = arr[0];
// const secondValue = arr[1];

// const user = { name: "Vasya", age: 15, city: "Moscow", index: 666000 };

// const { name: userName, age, ...data } = user;
