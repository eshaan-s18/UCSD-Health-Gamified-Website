import Image from "next/image";
import React from "react";

import styles from "./WideRoads.module.css";

type InfoCardProps5 = {
  active: boolean;
};

const WideRoadsCard: React.FC<InfoCardProps5> = ({ active }) => {
  return (
    <div className={`${styles.infoCard} ${active ? styles.active : ""}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        <div className={styles.content}>
          <h1>Wide Roadways</h1>
          <p className={styles.p1}>
            For wide roadways with no bike lane or sharrow markings, ride as close to the{" "}
            <b>right edge</b> of the road as practicable, but check that the vehicle lane is clear,
            signal, then “take the lane” when necessary for safety, such as:{" "}
          </p>
          <ul>
            <li>When passing parked cars</li>
            <li>When avoiding hazards</li>
            <li>If the road becomes too narrow to share safely</li>
          </ul>
        </div>
        <div className={styles.content2}>
          <Image
            className={styles.image}
            src={"/module5/wide-roads.svg"}
            width={664}
            height={468}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WideRoadsCard;
