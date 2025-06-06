"use client";

import styles from "../Mod2Components/SimpleWay/SimpleWay.module.css";

import Signals from "./Signals";

export default function SimpleWay() {
  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2 className={styles.headerText}>RIDE PREDICTABILITY</h2>
        <p className={styles.headerSubtext}>Click the signals to see in detail! </p>
      </div>
      <Signals />
    </section>
  );
}
