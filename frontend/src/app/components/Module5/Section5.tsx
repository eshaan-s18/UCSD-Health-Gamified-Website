"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./Section5.module.css";

export default function SimpleWay() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("/module5/default_timmy.svg");
  const [prevSrc, setPrevSrc] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  // Compute which SVG should be shown
  let computedSvgSrc = "/module5/default_timmy.svg";
  if (checked1 && !checked2) computedSvgSrc = "/module5/glasses_timmy.svg";
  else if (!checked1 && checked2) computedSvgSrc = "/module5/studious_timmy.svg";
  else if (checked1 && checked2) computedSvgSrc = "/module5/nerd_timmy.svg";

  // When checkboxes change, start crossfade if needed
  useEffect(() => {
    if (computedSvgSrc !== currentSrc) {
      setPrevSrc(currentSrc);
      setCurrentSrc(computedSvgSrc);
      setIsFading(true);
    }
  }, [checked1, checked2]);

  // After fade, remove prevSrc
  const handleTransitionEnd = () => {
    setPrevSrc(null);
    setIsFading(false);
  };

  const containerClass = `${styles.text_container} ${checked1 && checked2 ? styles.bothChecked : ""}`;

  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2 className={styles.headerText}>SAFETY EQUIPMENT</h2>
        <p className={styles.headerSubtext}>Remember to check your understanding: </p>
      </div>
      <div className={styles.topSvgBox}>
        <Image
          src="/module5/safety_equipment.svg"
          alt="Safety Equipment"
          width={889}
          height={299}
          className={styles.image}
        />
      </div>
      <div className={containerClass}>
        <div className={styles.svgBox} style={{ position: "relative" }}>
          {/* Previous image (fade out) */}
          {prevSrc && (
            <Image
              src={prevSrc}
              alt="Timmy the Tire"
              width={232}
              height={232}
              className={`${styles.image} ${styles.fadeImage} ${isFading ? styles.hidden : ""}`}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                transition: "opacity 0.4s",
                zIndex: 1,
              }}
              priority
              onTransitionEnd={handleTransitionEnd}
            />
          )}
          {/* Current image (fade in) */}
          <Image
            src={currentSrc}
            alt="Timmy the Tire"
            width={232}
            height={232}
            className={`${styles.image} ${styles.fadeImage} ${isFading ? "" : ""}`}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              opacity: isFading ? 1 : 1, // always visible
              transition: "opacity 0.4s",
              zIndex: 2,
            }}
            priority
          />
        </div>
        <div className={styles.checkboxGroup}>
          <h3 className={styles.checkboxTitle}>Click the checkbox to confirm.</h3>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={checked1}
              onChange={() => {
                setChecked1((v) => !v);
              }}
            />
            <span className={styles.customCheckbox} aria-hidden="true"></span>
            Even if I ride slowly, I should still wear a helmet
          </label>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={checked2}
              onChange={() => {
                setChecked2((v) => !v);
              }}
            />
            <span className={styles.customCheckbox} aria-hidden="true"></span>
            It is illegal to ride without lights and reflectors.
          </label>
        </div>
      </div>
    </section>
  );
}
