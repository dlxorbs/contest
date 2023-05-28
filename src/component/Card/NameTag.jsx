import React from "react";
import styles from "./card.module.css";

export default function NameTag() {
  return (
    <div className={styles.nametag}>
      <span>{props.major}</span>
      <span
        style={{
          "--display": `${props.display}`,
        }}
      >
        {props.studentinfo}
      </span>
      {/* 이형태로 컴포넌트 만들자 */}
      <div className={styles.iconsContainer}></div>
    </div>
  );
}
