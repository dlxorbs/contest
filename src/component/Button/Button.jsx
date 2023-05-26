import React from "react";
import styles from "./Button.module.css";

function button(props) {
  return (
    <button
      className={[styles.button, props.className].join(" ")}
      onClick={props.onClick}
    >
      {props.title || "Button"}
    </button>
  );
}

export default button;
