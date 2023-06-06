import React from "react";
import styles from "./Notice.module.css";

export default function NoticeThumb(props) {
  return (
    <div
      className={styles.noticeImage}
      style={{
        "--back": "url(" + props.src + ")",
      }}
    ></div>
  );
}
