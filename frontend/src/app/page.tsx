"use client";

import { useEffect, useState } from "react";

import ModuleMap from "./components/HomePage/ModuleMap/ModuleMap";
import ModuleGate from "./components/ModuleGate/ModuleGate";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ucsd-health-gamified-website.onrender.com/ping")
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          console.error("Backend ping failed:", err);
        }
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <p>Loading... This may take a minute.</p>
      </div>
    );
  }

  return (
    <ModuleGate module={0}>
      <main className={styles.main}>
        <Sidebar isHomePage={true} />
        <ModuleMap />
      </main>
    </ModuleGate>
  );
}
