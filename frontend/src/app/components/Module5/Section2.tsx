"use client";

import styles from "../Mod2Components/SimpleWay/SimpleWay.module.css";

import Checkbox from "./Checkbox";

export default function SimpleWay() {
  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2 className={styles.headerText}>OBEY TRAFFIC LAWS</h2>
        <p className={styles.headerSubtext}>
          Check the boxes below to see laws even E-Bike riders must follow:
        </p>
      </div>
      <Checkbox />
    </section>
  );
}
