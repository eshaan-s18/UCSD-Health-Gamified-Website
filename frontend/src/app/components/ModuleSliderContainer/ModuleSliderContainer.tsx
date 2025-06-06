"use client";

import { Children, ReactNode, cloneElement, isValidElement, useState } from "react";

import ModuleButtons from "../ModuleButtons/ModuleButtons";
import ProgressBar from "../ModuleProgressBar/ModuleProgressBar";

import styles from "./ModuleSliderContainer.module.css";

type ModuleSliderContainerProps = {
  children: ReactNode;
  moduleText: string;
};

export default function ModuleSliderContainer({
  children,
  moduleText,
}: ModuleSliderContainerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const childrenCount = Children.count(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevButton = () => {
    if (currentSection === 0) return;
    setCurrentSection((prev) => prev - 1);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handleNextButton = () => {
    if (currentSection === childrenCount - 1) return;
    setCurrentSection((prev) => prev + 1);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const childrenWithModuleButtons = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return (
        <div style={{ minWidth: "100%", position: "relative", height: "100%" }}>
          <div
            className={styles.hide_scrollbar}
            style={{ opacity: currentSection === index && !isTransitioning ? 0 : 1 }}
          ></div>
          <div className={styles.section_wrapper}>
            {/* {cloneElement(child)} */}
            {cloneElement(child, { key: currentSection })}
            <ModuleButtons
              currentSection={index}
              childrenCount={childrenCount}
              handlePrevButton={handlePrevButton}
              handleNextButton={handleNextButton}
            />
          </div>
          {/* <ModuleButtons
            currentSection={index}
            childrenCount={childrenCount}
            handlePrevButton={handlePrevButton}
            handleNextButton={handleNextButton} 
          />*/}
        </div>
      );
    }
    return child;
  });

  return (
    <div className={styles.scroll_snap_container}>
      <ProgressBar
        currentSection={currentSection}
        sectionCount={childrenCount}
        moduleText={moduleText}
      />
      <div
        style={{ transform: `translateX(${-100 * currentSection}%)` }}
        className={styles.slider_container}
      >
        {childrenWithModuleButtons}
      </div>
    </div>
  );
}
