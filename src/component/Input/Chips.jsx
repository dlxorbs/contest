import React, { useState } from "react";
import style from "./Input.module.css";
export default function Chips(props) {
  return (
    <label className={style.Chips}>
      <input
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
        onClick={props.onClick}
        value={props.value}
      />
      <span className={style.chipbtn}> {props.text}</span>
    </label>
  );
}
