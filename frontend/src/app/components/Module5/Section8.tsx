"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import styles from "./Section8.module.css";

export default function Section8() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    return () => {
      setClicked(false); // reset on unmount
    };
  }, []);

  return (
    <section className={styles.container} style={{ height: "80vh" }}>
      <h2 className={styles.title}>PASSENGERS</h2>
      <p className={styles.description}>
        You can only carry passengers on bicycles that are specifically designed and equipped to
        carry passengers.
      </p>
      <div className={styles.middleBox}>
        <div className={styles.text} style={{ opacity: clicked ? 0 : 1 }}>
          <p className={styles.text1}>So what do I need for my passenger?</p>
          <p className={styles.text2}>Click on Timmy to find out!</p>
        </div>
        <div className={styles.helmet} style={{ opacity: clicked ? 1 : 0 }}>
          <p>Helmet</p>
        </div>
        <div className={styles.seat} style={{ opacity: clicked ? 1 : 0 }}>
          <p>Dedicated Seat</p>
        </div>
        <div className={styles.foot} style={{ opacity: clicked ? 1 : 0 }}>
          <p>Dedicated Foot Pegs</p>
        </div>
        <Image
          src={"./timmy-passengers.svg"}
          alt="Timmy with passengers"
          width={603}
          height={342}
          onClick={() => {
            setClicked(true);
          }}
        />
      </div>
      <div className={styles.bottomBox}>
        <Image src={"./timmy-ticket.svg"} alt="Timmy getting ticketed" width={118} height={107} />
        <p>
          You can and will get a ticket for having a passenger on a bike that doesn’t have a
          dedicated seat and foot pegs designed for a passenger! If under 18 years old, riding
          without a helmet is also against the law.
        </p>
      </div>
    </section>
  );
}
