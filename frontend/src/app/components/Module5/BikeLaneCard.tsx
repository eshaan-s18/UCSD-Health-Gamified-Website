import Image from "next/image";
import React from "react";

import styles from "./BikeLaneCard.module.css";

type InfoCardProps5 = {
  active: boolean;
};

const BikeLaneCard: React.FC<InfoCardProps5> = ({ active }) => {
  return (
    <div className={`${styles.infoCard} ${active ? styles.active : ""}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        <div className={styles.content}>
          <h1>Bike Lanes</h1>
          <p>Use bike lanes whenever possible, keeping to the middle of the lane.</p>
        </div>
        <div className={styles.content2}>
          <Image
            className={styles.image}
            src={"/module5/bike-lane.svg"}
            width={664}
            height={468}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BikeLaneCard;
