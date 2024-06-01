import { useState } from "react";
import styled from "styled-components";

const Education = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    schoolNmae: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
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
      {" "}
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="school">School Name:</label>
            <input
              type="text"
              name="school"
              value={education.school}
              onChange={handleChange}
              placeholder="University of Life"
            />
          </div>
          <div>
            <label htmlFor="title">Title of Study:</label>
            <input
              type="text"
              name="title"
              value={education.title}
              onChange={handleChange}
              placeholder="Bachelor of Science"
            />
          </div>
          <div>
            <label htmlFor="date">Date of Study:</label>
            <input
              type="text"
              name="date"
              value={education.date}
              onChange={handleChange}
              placeholder="2010-2014"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School Name:</p> {education.school}
          <p>Title of Study:</p> {education.title}
          <p>Date of Study:</p> {education.date}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
