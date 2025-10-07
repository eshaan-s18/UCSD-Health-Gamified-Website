"use client";

import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";

import styles from "./Certificate.module.css";

export type CertificateNameProps = {
  name: string;
  certificateRef: RefObject<HTMLDivElement>;
};

export default function Certificate({ name, certificateRef }: CertificateNameProps) {
  const nameRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");

  const adjustFontSize = () => {
    if (!nameRef.current) return;

    let fontSize = 31;
    const baseTop = (certificateRef.current?.getBoundingClientRect().height ?? 0) * 0.41;

    const maxHeight = 47;
    const nameHeight = nameRef.current.scrollHeight;

    if (nameHeight > maxHeight) {
      const scaleFactor = Math.pow(maxHeight / nameHeight, 1);
      fontSize = Math.max(fontSize * scaleFactor, 20);
    }

    nameRef.current.style.fontSize = `${fontSize}px`;

    const newTop = baseTop + (31 - fontSize) + 5;
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
      <div ref={certificateRef} className={styles.container}>
        <Image src="/certificate/UpdatedCertificateSVG.svg" alt="Certificate" fill />
        <Image
          src="/certificate/JustinSignature.png"
          alt="Date"
          width={92}
          height={48}
          className={styles.signaturePic}
          aria-hidden
        />
        <p ref={nameRef} className={styles.name}>
          {capitalizeWords(name)}
        </p>
        <p className={styles.date}>{formattedDate}</p>
      </div>
    </main>
  );
}
