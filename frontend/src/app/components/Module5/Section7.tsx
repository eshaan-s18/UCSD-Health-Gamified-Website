import React from "react";

import DistractionSVG from "./DistractionSVG";
import styles from "./Section7.module.css";

export default function Section7() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>AVOID DISTRACTIONS</h2>
      <p className={styles.description}>
        Hover over the green circles to see which distractions there are.
      </p>
      <DistractionSVG />
    </section>
  );
}
