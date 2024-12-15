import React, { useState } from "react";

function EducationForm({ onAddEducation }) {
  // Local state for form fields
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an education entry object
    const newEntry = {
      school,
      degree,
      graduationYear,
    };

    // Call the function passed from App.js to add the entry
    onAddEducation(newEntry);

    // Clear form fields after submission
    setSchool("");
    setDegree("");
    setGraduationYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        placeholder="School Name"
        required
      />
      <input
        type="text"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        placeholder="Degree"
        required
      />
      <input
        type="text"
        value={graduationYear}
        onChange={(e) => setGraduationYear(e.target.value)}
        placeholder="Graduation Year"
        required
      />
      <button type="submit">Add Education</button>
    </form>
  );
}

export default EducationForm;
