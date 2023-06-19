import React from "react";
import styles from "./card.module.css";

export default function CardThumb(props) {
  return (
    <div className={styles.thumbnailContainer} onClick={props.onClick}>
      <div
        className={styles.thumbnail}
        style={{ "--thumbnail": "url(" + props.thumbnail + ")" }}
      ></div>
      <div className={styles.bottomOverlay}>
        {props.type == "Vote" && <span>{props.title}</span>}
        <span>{props.major}</span>
        <span
          className={styles.studentinfo}
          style={{
            "--display": `${props.display}`,
          }}
        >
          {props.studentinfo || "학생정보"}
        </span>
        {props.children}
      </div>
    </div>
  );
}
