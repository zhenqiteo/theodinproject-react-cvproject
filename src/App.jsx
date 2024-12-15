import { useState, useRef } from "react";
import Form from "./components/Form";
import About from "./components/About";
import EducationRender from "./components/EducationRender";
import Contact from "./components/Contact";
import "./App.css";
import EducationForm from "./components/EducationForm";

function App() {
  // State for "About" section
  const [about, setAbout] = useState({
    isOpen: false,
    fullName: "Alejandro Martinez",
    profession: "Aspiring Toy Designer",
    description:
      "blabla opopo elkko dek koko currently on craigslist but also working for a crazy red-haired lazy called Elizabeth",
  });

  // State to STORE education entries
  // const [educationEntries, setEducationEntries] = useState([
  //   {
  //     degreeTitle: "Bachelor of Arts, Philosophy",
  //     institutionName: "Harvard University",
  //     dateStart: "2015-08-01",
  //     dateEnd: "2019-05-15",
  //   },
  // ]);

  const [educationEntries, setEducationEntries] = useState([]);

  // function to add new education entry
  const addEducationEntry = (newEntry) => {
    // create an array with existing entries and the new entry
    setEducationEntries([...educationEntries, newEntry]);
  };

  // State for new educationform input?
  const [education, setEducation] = useState({
    degreeTitle: "",
    institutionName: "",
    dateStart: "",
    dateEnd: "",
  });

  // Form handler for "About" section
  function aboutHandler(event, obj) {
    event.preventDefault();
    setAbout({ ...about, ...obj });
  }

  // Form handler for "Education" section
  function educationHandler(event, obj) {
    event.preventDefault();
    setEducation({ ...education, ...obj });
  }

  return (
    <>
      <div className="app-container">
        <div className="form-container">
          <Form aboutValues={about} aboutChange={aboutHandler} />
          <EducationForm
            educationValues={education}
            educationChange={educationHandler}
            onAddEducation={addEducationEntry}
          />
        </div>
        <div className="resume-container">
          <img
            src="https://cdn.theatlantic.com/thumbor/p_SGWks7C0V4FD0AnwWYiR_xHEI=/0x0:4800x2700/1952x1098/media/img/mt/2024/03/HR_Problemista_UJTP_01919_R2/original.jpg"
            alt="Julio Torres as Alejandro Martinez in the movie"
            width="300px"
          />
          <About values={about} />
          {/* {educationEntries.map((entry, index) => (
            <EducationRender key={index} values={entry} />
          ))} */}
          <EducationRender entries={educationEntries} />
        </div>
        {/* <Contact title="this" type="primary" /> */}
      </div>
    </>
  );
}

export default App;
