import { useState } from "react";
import React from "react";

export default function EducationRender({ values }) {
  const inlineStyle = {
    backgroundColor: "lightblue",
  };
  return (
    <div className="edu-container" style={inlineStyle}>
      <h3>{values.degreeTitle}</h3>
      <h3>{values.institutionName}</h3>
      <p>
        {values.dateStart} to {values.dateEnd}
      </p>
    </div>
  );
}
