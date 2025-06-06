import Image from "next/image";
import React from "react";

import styles from "./SidewalksCard.module.css";

type InfoCardProps5 = {
  active: boolean;
};

const SidewalksCard: React.FC<InfoCardProps5> = ({ active }) => {
  return (
    <div className={`${styles.infoCard} ${active ? styles.active : ""}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        <div className={styles.content}>
          <h1>Sidewalks</h1>
          <p className={styles.p1}>
            Depending on where you are, riding on sidewalks <b>may be prohibited</b>. Take the time
            to learn what’s allowed where you live, around your school and always{" "}
            <b>obey posted signs</b>.
          </p>
          <p className={styles.p2}>
            Riding on sidewalks is often or generally not allowed in <b>business districts</b>, like
            busy <b>shopping areas</b>, <b>downtown areas</b> or other places where there are many
            pedestrians present.
          </p>
        </div>
        <div className={styles.content2}>
          <Image
            className={styles.image}
            src={"/module5/sidewalks.svg"}
            width={664}
            height={468}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SidewalksCard;
