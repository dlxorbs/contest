import React from "react";
import styles from "./Notice.module.css";

export default function Tag(props) {
  return (
    <div className={`${styles.tag}  ${props.className}`}>
      {props.text || "text"}
    </div>
  );
}
