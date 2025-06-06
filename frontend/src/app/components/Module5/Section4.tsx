import Image from "next/image";
import { useState } from "react";

import styles from "./Section4.module.css";

export default function SimpleWay() {
  // Track which circles have been clicked (revealed)
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);
  const [hovered, setHovered] = useState<number | null>(null);

  const circles = [
    { left: 310, top: 100, text: "Yield to pedestrians in crosswalks." },
    { left: 670, top: 225, text: "Be aware of cars turning right and left." },
    { left: 310, top: 350, text: "Give pedestrians plenty of space." },
  ];

  const handleCircleClick = (idx: number) => {
    setRevealed((prev) => {
      const next = [...prev];
      next[idx] = !next[idx]; // Toggle visibility on click
      return next;
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2 className={styles.headerText}>RIGHT OF WAY</h2>
        <p className={styles.headerSubtext}>Click on each point to see what’s happening! </p>
      </div>
      <div
        style={{
          position: "relative",
          width: 900,
          height: 564,
          margin: "0 auto",
        }}
      >
        {circles.map((circle, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: typeof circle.left === "number" ? `${circle.left}px` : circle.left,
              top: typeof circle.top === "number" ? `${circle.top}px` : circle.top,
              zIndex: 2,
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                width: hovered === idx ? 45 : 40,
                height: hovered === idx ? 45 : 40,
                borderRadius: "50%",
                background: hovered === idx ? "#77AC1B" : "#BBD567",
                border: "5px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow:
                  hovered === idx ? "0 4px 16px rgba(0,0,0,0.25)" : "0 2px 8px rgba(0,0,0,0.15)",
                transition: "box-shadow 0.2s, background 0.2s, width 0.2s, height 0.2s",
                zIndex: 2,
                position: "relative",
              }}
              onMouseEnter={() => {
                setHovered(idx);
              }}
              onMouseLeave={() => {
                setHovered(null);
              }}
              onClick={(e) => {
                // Prevent click on text from toggling
                if (
                  (e.target as HTMLElement).closest("." + styles.cardLeft) ??
                  (e.target as HTMLElement).closest("." + styles.cardRight)
                ) {
                  return;
                }
                handleCircleClick(idx);
              }}
            >
              {/* empty, just the circle */}
            </div>
            {revealed[idx] && (
              <div
                className={idx === 1 ? styles.cardLeft : styles.cardRight}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {circle.text}
              </div>
            )}
          </div>
        ))}
        <Image
          src="/module5/right_of_way.svg"
          className={styles.svg}
          alt="Right of Way Illustration"
          width={900}
          height={564}
        />
      </div>
    </section>
  );
}
