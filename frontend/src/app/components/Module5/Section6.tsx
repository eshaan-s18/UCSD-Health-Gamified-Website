import React from "react";

import ButtonCardSlider from "./ButtonCardSlider";
import styles from "./Section6.module.css";

export default function Section6() {
  const titles = ["Bike Lanes", "Sharrows", "Wide Roads", "Sidewalks"];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>WHERE TO RIDE</h2>
      <ButtonCardSlider titles={titles} />
    </section>
  );
}
