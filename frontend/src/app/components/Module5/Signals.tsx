import Image from "next/image";
import { useState } from "react";

import styles from "./Signals.module.css";

const signals = [
  {
    icon: "/module5/left_turn.svg",
    activeIcon: "/module5/active_left_turn.svg",
    label: "Left Turn",
    text: "To signal a left turn, extend your left arm straight out to your side. Signal your turn roughly 100 feet before the turn to give time to alert others and return your hands to the bike.",
    width: 140,
    height: 236,
  },
  {
    icon: "/module5/right_turn.svg",
    activeIcon: "/module5/active_right_turn.svg",
    label: "Right Turn",
    text: "There are two ways to signal a right turn, this one is to extend your right arm straight out to your side. Signal your turn roughly 100 feet before the turn to give time to alert others and return your hands to the bike.",
    width: 140,
    height: 235,
  },
  {
    icon: "/module5/alternative_turn.svg",
    activeIcon: "/module5/active_alternative_turn.svg",
    label: "Alternative Right Turn",
    text: "There are two ways to signal a right turn, this one is to extend your left arm out to the side and turn your arm up at a 90-degree angle. Signal your turn roughly 100 feet before the turn to give time to alert others and return your hands to the bike.",
    width: 143,
    height: 236,
  },
  {
    icon: "/module5/stop_signal.svg",
    activeIcon: "/module5/active_stop_sign.svg",
    label: "Stop",
    text: "To signal that you are slowing or stopping, extend your left arm out, and bend your arm down at a 90-degree angle, with your hand open. Signal your turn roughly 100 feet before the turn to give time to alert others and return your hands to the bike.",
    width: 128,
    height: 236,
  },
];

export default function Signals() {
  const [selected, setSelected] = useState<number | null>(null);
  const [clicked, setClicked] = useState<boolean[]>([false, false, false, false]);

  const handleClick = (idx: number) => {
    setSelected(idx);
    setClicked((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  return (
    <div className={styles.center}>
      <div className={styles.signalRow}>
        {signals.map((signal, idx) => {
          const isClicked = clicked[idx];
          const isSelected = selected === idx;
          return (
            <button
              key={signal.label}
              onClick={() => {
                handleClick(idx);
              }}
              className={styles.signalButton}
              aria-label={signal.label}
              type="button"
              style={{
                minHeight: signal.height,
                minWidth: signal.width,
                padding: 0,
                background: "none",
                border: "none",
                outline: "none",
              }}
            >
              <span className={styles.signalIconWrapper}>
                <Image
                  width={signal.width}
                  height={signal.height}
                  src={isClicked ? signal.activeIcon : signal.icon}
                  alt={signal.label}
                  className={styles.signalIcon}
                  style={{
                    filter: isSelected
                      ? "none"
                      : isClicked
                        ? "grayscale(0.2) opacity(0.6)"
                        : "grayscale(1)",
                    width: `${signal.width}px`,
                    height: `${signal.height}px`,
                  }}
                />
              </span>
            </button>
          );
        })}
      </div>
      <div className={selected !== null ? styles.signalTextBox : styles.signalTextBoxHidden}>
        {selected !== null && (
          <>
            <strong className={styles.label}>{signals[selected].label}</strong>
            <div style={{ marginTop: 8 }}>{signals[selected].text}</div>
          </>
        )}
      </div>
    </div>
  );
}
