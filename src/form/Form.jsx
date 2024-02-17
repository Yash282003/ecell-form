import { useState } from "react";
import "./form.css";
import Ecelllogo from "../assets/Ecelllogo.png";

const Form = () => {
  const branch = [
    "Chemical",
    "Civil",
    "CSE",
    "Electrical",
    "Electrical and Electronics",
    "Electronics and Telecommunication",
    "IT",
    "Mechanical",
    "Metallurgy and Materials",
    "Production",
    "Int. MSc"
  ];
  const domains = [
    "Media and Sponsership",
    "Technical",
    "Graphic Designing",
    "Social Media",
    "Public Relations",
    "Video Editing",
    "Event Management",
    "SATT"
  ]
  const [selectedbranch, setSelectedbranch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");

  const handleSelectChange = (event) => {
    setSelectedbranch(event.target.value);
  };
  const handleSelectChangeDomains = (event) => {
    setSelectedDomain(event.target.value);
  };
  return (
    <div className="container">
      <div className="logo">
        <img src={Ecelllogo} alt="logo" />
      </div>

      <form className="action">
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="username">Registration No.</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Registration number"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="number">Year [1st or 2nd]</label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Enter Year"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="phoneNumber">Whatsapp No.</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter whatsapp number"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="fullName">Branch</label>
            <select
              className="dropdown-select"
              value={selectedbranch}
              onChange={handleSelectChange}
            >
              <option value="">Select Branch</option>
              {branch.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="user-input-box">
          <label htmlFor="fullName">Preferred Domain</label>
            <select
              className="dropdown-select"
              value={selectedDomain}
              onChange={handleSelectChangeDomains}
            >
              <option value="">Select Domain</option>
              {domains.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-submit-btn">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
