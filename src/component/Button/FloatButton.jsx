import React from "react";
import styles from "./FloatButton.module.css";

function floatButton(props) {
  return (
    <button className={styles.floatButton} onClick={props.onClick}>
      <span class="material-symbols-outlined">{props.icon}</span>
    </button>
  );
}

export default floatButton;
