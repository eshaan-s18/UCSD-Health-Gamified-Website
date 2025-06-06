import Image from "next/image";
import React from "react";

import styles from "./Section9.module.css";

export default function Section9() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>IMPORTANT NOTES</h2>
      <p className={styles.description}>Keep these notes in mind - they might come in handy!</p>
      <div className={styles.content}>
        <div className={styles.box1}>
          <p>
            <b>Local Regulations:</b> Always check for any local ordinances or regulations that may
            apply in your specific area
          </p>
        </div>
        <div className={styles.column2}>
          <Image
            className={styles.image}
            src="./timmy_peek.svg"
            alt="Timmy Peeking"
            width={241}
            height={141}
          />
          <div className={styles.box2}>
            <p>
              <b>Respect Other Road Users:</b> Share the road responsibly with cars, pedestrians,
              and other cyclists.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <h1>REMEMBER:</h1>
          <div className={styles.box3}>
            <p>
              Riding an e-bike is a{" "}
              <i>
                <b>privilege</b>
              </i>
              . Ride <b>safely and responsibly</b> to ensure a positive experience for{" "}
              <b>yourself and others</b> on the road.
            </p>
          </div>
        </div>
      </div>
      {/* <Image src="./important-notes.svg" alt="Important Notes" width={900} height={537} /> */}
    </section>
  );
}
