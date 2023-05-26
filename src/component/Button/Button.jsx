import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={`button ${props.className}`} onClick={props.onClick}>
      {props.title || "Button"}
    </button>
  );
}

export default Button;
