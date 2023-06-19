import React from "react";
import styles from "./card.module.css";

export default function NameTag(props) {
  return (
    <div className={styles.nametag}>
      <span>{props.title || "제목"}</span>
      {/* 이형태로 컴포넌트 만들자 */}
      <div className={styles.iconsContainer}>
        <span
          className={`material-symbols-outlined ${styles.blue}`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </span>
        <p>{props.count || "0"}</p>

        <span className="material-symbols-outlined">visibility</span>
        <p>{props.view || "0"}</p>
      </div>
    </div>
  );
}
