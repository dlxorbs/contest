import React from "react";
import styles from "./Input.module.css";

export default function Tab(props) {
  return (
    <label className={styles.tabs}>
      <input
        className={styles.tab}
        type="radio"
        name={props.name}
        checked={props.checked}
        value={props.value}
      />
      <span className={styles.tabbtn}> {props.text}</span>
    </label>
  );
}
