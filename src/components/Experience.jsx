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

const TextArea = styled.textarea`
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
    <Container>
      <Title>Experience</Title>
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label>Company Name:</Label>
            <Input
              type="text"
              name="companyName"
              value={experience.companyName}
              onChange={handleChange}
              placeholder="Company Name"
            />
          </FormField>
          <FormField>
            <Label>Position Title:</Label>
            <Input
              type="text"
              name="positionTitle"
              value={experience.positionTitle}
              onChange={handleChange}
              placeholder="Position Title"
            />
          </FormField>
          <FormField>
            <Label>Main Responsibilities:</Label>
            <TextArea
              name="mainResponsibilities"
              value={experience.mainResponsibilities}
              onChange={handleChange}
              placeholder="Main Responsibilities"
            />
          </FormField>
          <FormField>
            <Label>Date From:</Label>
            <Input
              type="date"
              name="dateFrom"
              value={experience.dateFrom}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label>Date Until:</Label>
            <Input
              type="date"
              name="dateUntil"
              value={experience.dateUntil}
              onChange={handleChange}
            />
          </FormField>
          <Button type="submit">Submit</Button>
        </Form>
      ) : (
        <InfoDisplay>
          <p>Company Name: {experience.companyName}</p>
          <p>Position Title: {experience.positionTitle}</p>
          <p>Main Responsibilities: {experience.mainResponsibilities}</p>
          <p>Date From: {experience.dateFrom}</p>
          <p>Date Until: {experience.dateUntil}</p>
          <Button onClick={handleEdit}>Edit</Button>
        </InfoDisplay>
      )}
    </Container>
  );
};

export default Experience;
