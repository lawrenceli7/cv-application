import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </>
  );
}

export default App;
