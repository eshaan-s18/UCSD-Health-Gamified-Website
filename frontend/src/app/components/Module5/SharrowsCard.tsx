import Image from "next/image";
import React from "react";

import styles from "./SharrowsCard.module.css";

type InfoCardProps5 = {
  active: boolean;
};

const SharrowsCard: React.FC<InfoCardProps5> = ({ active }) => {
  return (
    <div className={`${styles.infoCard} ${active ? styles.active : ""}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        <div className={styles.content}>
          <h1>Sharrows</h1>
          <p className={styles.p1}>
            Use sharrows (shared lane markings) when available and do your best to ride at the{" "}
            <b>speed of the roadway.</b>
          </p>
          <p className={styles.p2}>
            <b>When it’s busy</b>, if cars (3 or more) are packing up behind you, look for a safe
            opportunity to signal, pull off where there is room and allow to pass before re-entering
            the roadway.
          </p>
        </div>
        <div className={styles.content2}>
          <Image
            className={styles.image}
            src={"/module5/sharrows.svg"}
            width={664}
            height={468}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SharrowsCard;
