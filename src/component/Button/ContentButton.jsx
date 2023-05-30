import React from "react";
import styles from "./ContentButton.module.css";

export default function ContentButton(props) {
  return (
    <button className={styles.contentButton} onClick={props.onClick}>
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: `'wght' ${300}` }}
      >
        {props.icon}
      </span>

      {props.title || "title"}
    </button>
  );
}
