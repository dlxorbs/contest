import React from "react";
import styles from "./ContentButton.module.css";

function contentButton(props) {
  return (
    <button className={styles.contentButton} onClick={props.onClick}>
      <img src="https://i.postimg.cc/YSV7tTmQ/text.png" />
      {props.title || "Title"}
    </button>
  );
}

export default contentButton;
