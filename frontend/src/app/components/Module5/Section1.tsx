import Image from "next/image";

import Mod2Title from "../Mod2Title";

import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <section id={styles.section1_container}>
      {/* content */}
      {/* title and intro */}
      <Mod2Title module_num={5} module_name="Rules of the Road" />
      <div id={styles.container}>
        <div className={styles.content_wrapper}>
          <div className={styles.content_container}>
            <div className={styles.text_container}>
              <h2 className={styles.title}>Let’s Hit the Road Safely!</h2>
              <p
                className={styles.description}
              >{`Before cruising San Diego on your E Bike, know the rules! This chapter covers traffic laws, right-of-way, and safe riding practices. You'll also learn  E Bike-specific regulations, including where to ride and how to share the road responsibly. Let's get started!`}</p>
            </div>
            <Image
              src="/TimmyOk.svg"
              alt="Timmy, the tire mascot"
              width={305}
              height={295.58}
              className={styles.mascot}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
