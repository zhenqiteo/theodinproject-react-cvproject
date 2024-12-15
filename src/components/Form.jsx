import React from "react";
import { useState } from "react";
import "../styles/Form.css";
import Button from "./Button";
import EducationForm from "./EducationForm";

function Form({ aboutValues, aboutChange }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    console.log("general section submitted");
  };

  const handleEdit = () => {
    setIsEditing(true);
    console.log("currently editing");
  };

  const [education, setEducation] = useState({
    isOpen: false,
    degreeTitle: "Bachelor of Arts, Philosophy",
    institutionName: "Harvard University",
    dateStart: "",
    dateEnd: "",
  });

  function educationHandler(event, obj) {
    event.preventDefault();
    setEducation({ ...education, ...obj });
  }

  return (
    <div className="form-container-inside">
      <h3>General Information</h3>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="full-name">Full Name: </label>
            <input
              type="text"
              id="full-name"
              place
              holder={aboutValues.fullName}
              onChange={(event) =>
                aboutChange(event, { fullName: event.target.value })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="profession">Profession: </label>
            <input
              type="text"
              id="profession"
              placeholder={aboutValues.profession}
              onChange={(event) =>
                aboutChange(event, { profession: event.target.value })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description: </label>
            <textarea
              type="text"
              id="description"
              placeholder={aboutValues.description}
              rows="5"
              cols="33"
              onChange={(event) =>
                aboutChange(event, { description: event.target.value })
              }
            />
          </div>
          <Button text="save" onClick={handleSubmit} />
        </form>
      ) : (
        <Button text="click to edit" onClick={handleEdit} />
      )}
    </div>
  );
}

export default Form;
