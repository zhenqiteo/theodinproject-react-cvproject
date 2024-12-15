import { useState } from "react";
import React from "react";

export default function EducationRender({ entries }) {
  const inlineStyle = {
    backgroundColor: "lightblue",
  };
  return (
    <div className="edu-container" style={inlineStyle}>
      <h2>Education</h2>
      {entries.map((entry, index) => (
        <div key={index}>
          {/* <h3>{entry.degreeTitle}</h3>
          <h3>{entry.institutionName}</h3>
          <p>
            {entry.dateStart} to {entry.dateEnd}
          </p> */}
          <h3>{entry.degree}</h3>
          <h3>{entry.school}</h3>
          <h3>Graduated: {entry.graduationYear}</h3>
        </div>
      ))}
    </div>
  );
}
