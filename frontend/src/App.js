import React, { useState, useEffect } from "react";

import Header from "./components/Header";

import "./App.css";

import api from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `Ǹovo projeto ${Date.now()}`,
      owner: "Bruno Goldoni",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => {
          return <li key={project.id}>{project.title}</li>;
        })}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
}

export default App;
