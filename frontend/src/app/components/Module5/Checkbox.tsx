"use client";
import Image from "next/image";
import { useState } from "react";

import styles from "./Checkbox.module.css";

const optionTexts: Record<string, { header: string; text: string; icon: string }> = {
  A: {
    header: "Traffic Light",
    text: "Red means stop, green means go! Always check traffic lanes before go.",
    icon: "/module5/traffic_signal.svg",
  },
  B: {
    header: "Speed Limit",
    text: "Observe posted speed limits. That includes E-bikers too!",
    icon: "/module5/speedometer.svg",
  },
  C: {
    header: "Stop Sign",
    text: "Remember to always come to a complete stop at stop signs.",
    icon: "/module5/stop_sign.svg",
  },
};

const SelectedRectangle = ({
  header,
  text,
  isVisible,
}: {
  header: string;
  text: string;
  isVisible: boolean;
}) => (
  <div className={`${styles.selectedRectangle} ${isVisible ? styles.visible : ""}`}>
    <div className={styles.popupHeader}>{header}</div>
    <div className={styles.popupText}>{text}</div>
  </div>
);

const Checkbox = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option],
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.mainContainer}>
          <div className={styles.outerRectangle}>
            <div className={styles.innerRectangle}>
              <div className={styles.textRectangle}>Traffic Law Tips</div>
              <div className={styles.checkboxGroup}>
                {["A", "B", "C"].map((option) => (
                  <label className={styles.checkboxLabel} key={option}>
                    <input
                      type="checkbox"
                      className={styles.checkboxInput}
                      checked={selectedOptions.includes(option)}
                      onChange={() => {
                        handleCheckboxChange(option);
                      }}
                    />
                    <Image
                      width={50}
                      height={50}
                      src={optionTexts[option].icon}
                      alt={optionTexts[option].header}
                      className={styles.checkboxIcon}
                      style={{
                        filter: selectedOptions.includes(option) ? "none" : "grayscale(1)",
                      }}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          {["A", "B", "C"].map((option) => (
            <SelectedRectangle
              key={option}
              header={optionTexts[option].header}
              text={optionTexts[option].text}
              isVisible={selectedOptions.includes(option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
