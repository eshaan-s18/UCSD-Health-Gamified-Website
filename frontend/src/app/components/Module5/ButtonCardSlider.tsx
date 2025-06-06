"use client";

import React, { useState } from "react";

import BikeLaneCard from "./BikeLaneCard";
import ButtonSlide5 from "./ButtonSlide5";
import SharrowsCard from "./SharrowsCard";
import SidewalksCard from "./SidewalksCard";
import WideRoadsCard from "./WideRoadsCard";

type ButtonCardSliderProps = {
  titles: string[];
};

const ButtonCardSlider: React.FC<ButtonCardSliderProps> = ({ titles }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <div
      style={{ position: "relative", height: "548px", display: "flex", justifyContent: "center" }}
    >
      {/* Ensure the container is relatively positioned */}
      <ButtonSlide5 titles={titles} onClick={handleButtonClick} activeIndex={selectedCardIndex} />
      <BikeLaneCard active={0 === selectedCardIndex} />
      <SharrowsCard active={1 === selectedCardIndex} />
      <WideRoadsCard active={2 === selectedCardIndex} />
      <SidewalksCard active={3 === selectedCardIndex} />
    </div>
  );
};

export default ButtonCardSlider;
