import React, { useState } from "react";
import styles from "../../styles/slider.module.css";
import image_1 from "../../images/174746-godzho_satoru-satoru_godzyo-dzhiu_dzhitsu_kajsen-anime-rukav-3840x2160.jpg";
import image_2 from "../../images/milky-way-3840x2160-colorful-stars-astrophotography-27104.jpg";
import image_3 from "../../images/pngtree-city-__neon-background-picture-image_2264819.jpg";
import image_4 from "../../images/165919_amegakure_from_naruto_shippuden_in_a_cyberpunk_world_1920x1080.jpg";
import image_5 from "../../images/Screenshot_20231123_143453_VK.jpg";
import image_6 from "../../images/Screenshot_20231123_143502_VK.jpg";

const images = [
  { id: 1, src: image_1 },
  { id: 2, src: image_2 },
  { id: 3, src: image_3 },
  { id: 4, src: image_4 },
  { id: 5, src: image_5 },
  { id: 6, src: image_6 },
];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  function slideImageForward() {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
      return;
    }

    setCurrentImage(currentImage + 1);
  }

  function slideImageBack() {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
      return;
    }

    setCurrentImage(currentImage - 1);
  }

  return (
    <div className={styles["slider"]}>
      <h1>Slider</h1>
      <div className={styles["main"]}>
        <button onClick={slideImageBack} className={styles["btn"]}>
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
            <path d="m11 17-5-5 5-5" />
            <path d="m18 17-5-5 5-5" />
          </svg>
        </button>
        <img className={styles["img"]} src={images[currentImage].src} alt="" />
        <button onClick={slideImageForward} className={styles["btn"]}>
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
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
        </button>
        <input type="range" />
      </div>
    </div>
  );
}
