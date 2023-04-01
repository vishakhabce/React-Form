import React from "react";
import "./form.css";
import { useState,useEffect } from "react";

function Form({ setTop }) {
  const [formdata, setformdata] = useState({
    Name: "",
    Email: "",
    Password: ""
  });

  const handleChange = (event) => {
    setformdata({ ...formdata, [event.target.name]: event.target.value });
  };

  const [skills, setskills] = useState([]);


  const [status, setStatus] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormSubmit()) {
      return;
    }
    setTop("You have successfully subscribed to our plan");
    setformdata({ Name: "", Email: "", Password: "" });
    setskills([]);
    setStatus(false);
  };

  const isFormSubmit = () => {
    if (
      formdata.Name &&
      formdata.Email &&
      formdata.Password &&
      skills.length > 0
    ) {
      return true;
    } else {
      if (skills.length == 0) {
        document
          .getElementById("formSelect")
          .setCustomValidity("Please select an item in the list");
        document.getElementById("formSelect").reportValidity();
      }
      return false;
    }
  };

  const handleSkillsChange = (event) => {
    const selectedSkill = event.target.value;
    event.target.value = "";
    event.target.setCustomValidity("");
    if (selectedSkill && !skills.includes(selectedSkill)) {
      setskills((prevSkills) => [...prevSkills, selectedSkill]);
    }
  };
  const handleRemoveSkill = (skillToRemove) => {
    setskills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  useEffect(() => {
    setStatus(skills.length > 0 && isFormSubmit());
  }, [skills, formdata]);



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        placeholder="Name"
        value={formdata.Name || ""}
        onChange={handleChange}
        className="username"
      />
      <input
        type="email"
        name="Email"
        placeholder="Email-Address"
        value={formdata.Email || ""}
        onChange={handleChange}
        className="Email"
      />
      <input
        type="password"
        name="Password"
        placeholder="Password"
        value={formdata.Password || ""}
        onChange={handleChange}
        className="Password"
      />
      <select className="Skills" id="formSelect" value={skills.Skills} onChange={handleSkillsChange}>
        <option value="" disabled hidden selected> Choose your skill</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
        <option value="Javascript">Javascript</option>
      </select>
      {skills && (
        <div className="skillist">
          {skills.map((skill) => {
            return (
              <div key={skill} className="skillTag">
                {skill} &nbsp;
                <span onClick={() => handleRemoveSkill(skill)}>X</span>
              </div>
            );
          })}
        </div>
      )}
      <button type="submit"
        className={status ? "formButtonActive" : "formButton"} >CLAIM YOUR FREE TRIAL</button>
      <b className="termcondition">By clicking the button you are agreeing to our {" "}
        <span className="highlight">Terms and Services</span
        ></b>
    </form>
  );
}

export default Form;
