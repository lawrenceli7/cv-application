import styled from "styled-components";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

const StyledHeader = styled.h1`
  text-align: center;
  margin-top: 5px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

function App() {
  return (
    <>
      <StyledHeader>CV Application</StyledHeader>
      <GeneralInfo />
      <Education />
      <Experience />
    </>
  );
}

export default App;
