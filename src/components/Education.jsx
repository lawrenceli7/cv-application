import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const InfoDisplay = styled.div`
  p {
    margin: 5px 0;
  }
`;

const Education = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
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
    <Container>
      <Title>Education</Title>
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="school">School Name:</Label>
            <Input
              type="text"
              name="school"
              value={education.school}
              onChange={handleChange}
              placeholder="University of Life"
            />
          </FormField>
          <FormField>
            <Label htmlFor="title">Title of Study:</Label>
            <Input
              type="text"
              name="title"
              value={education.title}
              onChange={handleChange}
              placeholder="Bachelor of Science"
            />
          </FormField>
          <FormField>
            <Label htmlFor="date">Date of Study:</Label>
            <Input
              type="text"
              name="date"
              value={education.date}
              onChange={handleChange}
              placeholder="2010-2014"
            />
          </FormField>
          <Button type="submit">Submit</Button>
        </Form>
      ) : (
        <InfoDisplay>
          <p>School Name: {education.school}</p>
          <p>Title of Study: {education.title}</p>
          <p>Date of Study: {education.date}</p>
          <Button onClick={handleEdit}>Edit</Button>
        </InfoDisplay>
      )}
    </Container>
  );
};

export default Education;
