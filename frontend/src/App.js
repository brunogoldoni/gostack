import React, { useState } from "react";

import Header from "./components/Header";

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
