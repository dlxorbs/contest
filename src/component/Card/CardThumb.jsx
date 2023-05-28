import React from "react";
import styles from "./card.module.css";

export default function CardThumb(props) {
  return (
    <div className={styles.thumbnailContainer}>
      <div
        className={styles.thumbnail}
        style={{
          "--back": "url(" + props.thumbnail + ")",
        }}
      ></div>
      <div className={styles.bottomOverlay}>
        <span>{props.title}</span>
      </div>
    </div>
  );
}