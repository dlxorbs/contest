import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title || "Button"}
    </button>
  );
}

export default Button;
