import React, { useState } from "react";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end Web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `New project - ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
    </>
  );
}

export default App;
