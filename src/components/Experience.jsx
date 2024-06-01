import { useState } from "react";
import styled from "styled-components";

const Experience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Company Name: </label>
            <input
              type="text"
              name="companyName"
              value={experience.companyName}
              onChange={handleChange}
              placeholder="Company Name"
            />
          </div>
          <div>
            <label>Position Title: </label>
            <input
              type="text"
              name="positionTitle"
              value={experience.positionTitle}
              onChange={handleChange}
              placeholder="Position Title"
            />
          </div>
          <div>
            <label>Main Responsibilities: </label>
            <input
              type="text"
              name="mainResponsibilities"
              value={experience.mainResponsibilities}
              onChange={handleChange}
              placeholder="Main Responsibilities"
            />
          </div>
          <div>
            <label>Date From: </label>
            <input
              type="date"
              name="dateFrom"
              value={experience.dateFrom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Date Until: </label>
            <input
              type="date"
              name="dateUntil"
              value={experience.dateUntil}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {experience.companyName}</p>
          <p>Position Title: {experience.positionTitle}</p>
          <p>Main Responsibilities: {experience.mainResponsibilities}</p>
          <p>Date From: {experience.dateFrom}</p>
          <p>Date Until: {experience.dateUntil}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Experience;
