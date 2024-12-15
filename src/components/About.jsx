import { useState } from "react";
import "../styles/About.css";

export default function About({ values }) {
  return (
    <div className="about-container">
      <h1>{values.fullName}</h1>
      <h2>{values.profession}</h2>
      <p>{values.description}</p>
    </div>
  );
}
