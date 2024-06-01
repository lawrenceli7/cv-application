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

const GeneralInfo = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
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
      <Title>General Information</Title>
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </FormField>
          <FormField>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
            />
          </FormField>
          <FormField>
            <Label>Phone:</Label>
            <Input
              type="tel"
              name="phone"
              value={info.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
            />
          </FormField>
          <Button type="submit">Submit</Button>
        </Form>
      ) : (
        <InfoDisplay>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <Button onClick={handleEdit}>Edit</Button>
        </InfoDisplay>
      )}
    </Container>
  );
};

export default GeneralInfo;
