import React, { useState } from "react";
import styles from "../../styles/use-state-tasks/multilingualism.module.css";

const languges = {
  ru: { value: "Русский", greeting: "Привет дружище!", title: "Мультиязычность" },
  en: { value: "English", greeting: "Hello buddy!", title: "Multilingualism" },
  es: { value: "Español", greeting: "Hola amigo!", title: "Multilenguaje" },
  ja: { value: "日本語", greeting: "こんにちは相棒!", title: "多言語主義" },
};

const keys = Object.keys(languges);
console.log(languges);
console.log(keys);

export default function Multilingualism() {
  const [activeLanguage, setActiveLanguage] = useState("en");

  console.log(activeLanguage);

  return (
    <div className={styles["multilingualism"]}>
      <div className={styles["main"]}>
        <div className={styles["container"]}>
          <h1>{languges[activeLanguage].title}</h1>

          <select
            value={activeLanguage}
            onChange={(e) => setActiveLanguage(e.target.value)}
            className={styles["select"]}
          >
            {keys.map((languge) => (
              <option key={languge} value={languge}>
                {languges[languge].value}
              </option>
            ))}
          </select>
        </div>
        <h2>{languges[activeLanguage].greeting}</h2>
      </div>
    </div>
  );
}
