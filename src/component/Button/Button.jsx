import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <div className="floatani"></div>
      <span>{props.title || "Button"}</span>
    </button>
  );
}

export default Button;
