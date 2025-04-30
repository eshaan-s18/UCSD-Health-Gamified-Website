"use client";

import React, { useEffect } from "react";

import styles from "./Video.module.css";

export default function IntroVideo() {
  const [videoTimed, setVideoTimed] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVideoTimed(true);
    }, 10000);
  });

  const handleSubmit = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();
    // Redirect to the video page
    if (videoTimed) {
      window.location.href = "/";
    } else {
      console.log("Text not loaded yet");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Getting Started</p>
          </div>
          <div className={styles.ytContainer}>
            <iframe
              id="ytplayer"
              width="854"
              height="480"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            ></iframe>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={videoTimed ? styles.buttonFinal : styles.buttonInitial}
              onClick={handleSubmit}
            >
              <p className={styles.buttonText}>Ready to hit the road?</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929L13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289C11.9024 6.68342 11.9024 7.31658 12.2929 7.70711L15.5858 11L6 11C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13L15.5858 13L12.2929 16.2929C11.9024 16.6834 11.9024 17.3166 12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071L18.7071 12.7071Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
