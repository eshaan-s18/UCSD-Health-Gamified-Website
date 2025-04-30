"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import styles from "./Certificate.module.css";

export type CertificateNameProps = {
  name: string;
};

export default function Certificate({ name }: CertificateNameProps) {
  const nameRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");

  const adjustFontSize = () => {
    if (!nameRef.current) return;

    let fontSize = 36;
    const baseTop = 235;

    const maxHeight = 47;
    const nameHeight = nameRef.current.scrollHeight;

    if (nameHeight > maxHeight) {
      const scaleFactor = Math.pow(maxHeight / nameHeight, 1);
      fontSize = Math.max(fontSize * scaleFactor, 20);
    }

    console.log(fontSize);
    nameRef.current.style.fontSize = `${fontSize}px`;

    const newTop = baseTop + (36 - fontSize) + 5;
    nameRef.current.style.top = `${newTop}px`;
  };

  function capitalizeWords(str: string): string {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  useEffect(() => {
    adjustFontSize();

    window.addEventListener("resize", adjustFontSize);
    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, [name, nameRef]);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.leftGraphic}>
          <Image
            src="/certificate/left-frame.svg"
            alt="Timmy"
            width={291}
            height={564}
            className={styles.leftFrame}
            aria-hidden
          />
          <Image
            src="/certificate/right-dot.svg"
            alt="Timmy's right arm"
            width={38}
            height={38}
            className={styles.rightArm}
            aria-hidden
          />
        </div>
        <div className={styles.rightGraphic}>
          <Image
            src="/certificate/certif-complete-text.svg"
            alt="Certificate of Completion"
            width={365}
            height={122}
            style={{ objectFit: "contain" }}
            className={styles.certifComplete}
            aria-hidden
          />

          <Image
            src="/certificate/award-to.svg"
            alt="Certificate is awarded to"
            width={317}
            height={21}
            className={styles.awardTo}
            aria-hidden
          />

          <p ref={nameRef} className={styles.name}>
            {capitalizeWords(name)}
          </p>

          <Image
            src="/certificate/line.svg"
            alt="Line"
            width={370}
            height={1}
            className={styles.line}
            aria-hidden
          />

          <Image
            src="/certificate/recognition.svg"
            alt="In recognition of..."
            width={327}
            height={14}
            className={styles.recognition}
            aria-hidden
          />

          <Image
            src="/certificate/success.svg"
            alt="Successful completion"
            width={390}
            height={28}
            className={styles.success}
            aria-hidden
          />

          <div className={styles.row}>
            <p className={styles.dateText}>{formattedDate}</p>

            <Image
              src="/certificate/JustinSignature.png"
              alt="Date"
              width={115}
              height={60}
              className={styles.signaturePic}
              aria-hidden
            />
          </div>

          <div className={styles.row}>
            <Image
              src="/certificate/date.svg"
              alt="Date"
              width={100}
              height={26}
              className={styles.date}
              aria-hidden
            />

            <Image
              src="/certificate/signature.svg"
              alt="Signature"
              width={100}
              height={26}
              className={styles.signature}
              aria-hidden
            />
          </div>

          <div className={styles.logos}>
            <Image
              src="/certificate/UCSDHealth.svg"
              alt="Logos"
              width={180}
              height={29}
              aria-hidden
            />
            <Image src="/certificate/SKlogo.png" alt="Logos" width={49} height={46} aria-hidden />
            <Image
              src="/certificate/Rady'sChildrenHealth.svg"
              alt="Logos"
              width={100}
              height={51}
              aria-hidden
            />
            <Image
              src="/certificate/Primary-Logo-TealGreen.png"
              alt="Logos"
              width={74}
              height={54}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </main>
  );
}
