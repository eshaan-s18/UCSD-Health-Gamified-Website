import React from "react";

import styles from "./ButtonSlide5.module.css";

type ButtonSlideProps = {
  titles: string[];
  onClick: (index: number) => void;
  activeIndex: number;
};

const ButtonSlide5: React.FC<ButtonSlideProps> = ({ titles, onClick, activeIndex }) => {
  const hasSelection = activeIndex !== -1; // Check if the user has selected a button

  return (
    <div className={styles.buttonSlide}>
      {/* Conditionally Render the Green Blob */}
      {hasSelection && (
        <div
          className={styles.movingBlob}
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        ></div>
      )}

      {titles.map((title, index) => (
        <button
          className={`${styles.button} ${index === activeIndex ? styles.active : ""}`}
          key={index}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onClick(index);
          }}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default ButtonSlide5;
