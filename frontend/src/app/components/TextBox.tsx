"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

import styles from "./TextBox.module.css";

export type TextBoxProps = {
  label: string;
  type: string;
  linkLabel?: string;
  link?: string;
  caption?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
};

export function TextBox({
  label,
  type,
  link,
  linkLabel,
  caption,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: TextBoxProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentInputType, setCurrentInputType] = useState(type);

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
    setCurrentInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.textBox}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          <p>{label}</p>
        </label>
        <div
          className={`${styles.inputContainer} ${error && type === "password" ? styles.errorBox : ""}`}
        >
          <input
            onChange={handleInputChange}
            value={value}
            onBlur={onBlur}
            type={currentInputType}
            placeholder={placeholder}
            className={styles.input}
          />
          {type === "password" && value.length > 0 && (
            <button
              onClick={togglePasswordVisibility}
              className={styles.visibilityIcon}
              type="button"
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              aria-pressed={showPassword}
            >
              {showPassword ? (
                <Image src="/open_eye.svg" alt="Hide Password" width={22} height={23} />
              ) : (
                <Image src="/close_eye.svg" alt="Show Password" width={22} height={23} />
              )}
            </button>
          )}
        </div>
      </form>
      <div className={styles.link}>{linkLabel && <a href={link}>{linkLabel}</a>}</div>
      <div className={styles.caption}>
        {caption && !error && value.length === 0 && <p>{caption}</p>}
      </div>
      <div>
        {error && (
          <div className={styles.error}>
            <Image src="/red_exclamation.svg" alt="Warning!" width={20} height={20} />
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
