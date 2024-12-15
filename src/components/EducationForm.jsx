import React, { useState } from "react";
import Button from "./Button";
import "../styles/EducationForm.css";

export default function EducationForm({ educationValues, educationChange }) {
  const [formData, setFormData] = useState(educationValues);

  // Handle changes to form input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    addEducation(formData); // Add the new education entry
    setFormData({
      degreeTitle: "",
      institutionName: "",
      dateStart: "",
      dateEnd: "",
    }); // Reset the form
  };
  return (
    <>
      <h3>Education</h3>
      <form onSubmit={handleSubmit}>
        {educationForms.map((form, index) => (
          <div key={index} className="education-form">
            <div className="field">
              <label htmlFor={`degreeTitle-${index}`}>Title of Study: </label>
              <input
                type="text"
                id={`degreeTitle-${index}`}
                placeholder={educationValues.degreeTitle}
                onChange={(event) =>
                  handleChange(index, "degreeTitle", event.target.value)
                }
              />
            </div>
            <div className="field">
              <label htmlFor={`institutionName-${index}`}>
                Institution Name:{" "}
              </label>
              <input
                type="text"
                id={`institutionName-${index}`}
                placeholder="Harvard University"
                onChange={(event) =>
                  handleChange(index, "institutionName", event.target.value)
                }
              />
            </div>
            <div className="field">
              <label htmlFor={`dateStart-${index}`}>Date Start: </label>
              <input
                type="date"
                id={`institutionName-${index}`}
                onChange={(event) =>
                  handleEducationChange(index, "dateStart", event.target.value)
                }
              />
            </div>
            <div className="field">
              <label htmlFor={`dateEnd-${index}`}>Date Graduated: </label>
              <input
                type="date"
                id={`dateEnd-${index}`}
                onChange={(event) =>
                  handleEducationChange(event, "dateEnd", event.target.value)
                }
              />
            </div>
          </div>
        ))}
        {/* <div className="field">
          <label htmlFor="dateStart">Date Start: </label>
          <input
            type="date"
            id="dateStart"
            onChange={(event) =>
              educationChange(event, { dateStart: event.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="dateEnd">Date Graduated: </label>
          <input
            type="date"
            id="dateEnd"
            onChange={(event) =>
              educationChange(event, { dateEnd: event.target.value })
            }
          />
        </div> */}
        <Button onClick={handleAddEducation} text="add education exp" />
      </form>
    </>
    // <Button text="add educational experience" onClick={handleAddEducation} />
    // <Button text="save" />
  );
}
