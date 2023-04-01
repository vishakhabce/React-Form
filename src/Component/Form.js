import React from "react";
import "./form.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Form() {
  const [formdata, setformdata] = useState({});

  const handleChange = (event) => {
    const Name = event.target.Name;
    const Email = event.target.Email;
    const Password = event.target.Password;
    setformdata((values) => ({ ...values, [name]: values }));
  };

  const [skills, setskills] = useState({});
  const handleskill = (event) => {
    setskills(event.target.skills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" 
        name="name"
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
      <select className="Skills" value={skills.Skills} onChange={handleChange}>
        <option value="" disabled hidden selected> Choose your skill</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
        <option value="Javascript">Javascript</option>
      </select>
      <div className="chips"> space for chips</div>
      <div className="claimtrial">CLAIM YOUR FREE TRIAL</div>
      <b className="termcondition">By clicking the button you are agreeing to our <span className="highlight">Terms and Services</span></b>
    </form>
  );
}

export default Form;
