import React, { useState } from "react";

import Header from "./components/Header";

import "./App.css";

import backgroundImage from "./assets/car.jpeg";

function App() {
  const [projects, setProjects] = useState([
    "Development app",
    "Front-end Web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `New Project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} alt="" />

      <ul>
        {projects.map((project) => {
          return <li key={project}>{project}</li>;
        })}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
}

export default App;
