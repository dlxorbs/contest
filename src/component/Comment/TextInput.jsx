import React, { useState, useRef } from "react";
import styles from "./TextInput.module.css";

export default function TextInput(props) {

  return (
    <div className={styles.TextContainer}>
      <textarea
        className={styles.TextInput}
        placeholder={props.placeholder}
        style={{
          "--height": props.height + "px",
          "--minheight": props.minheight + "px",
          "--fontsize": props.fontsize + "px",
          "--fontweight": props.fontweight,
          "--lineheight": props.lineheight + "%",
          "--margin": props.margin,
        }}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}
