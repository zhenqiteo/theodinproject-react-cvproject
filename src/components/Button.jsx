import React from "react";
import "../styles/Button.css";

export default function Button({ text, onClick, type = "button", style }) {
  return (
    <button type={type} onClick={onClick} className="round-button">
      {text}
    </button>
  );
}
