const express = require("express");
const { response } = require("express");

const app = express();

app.get("/projects", (request, response) => {
  return response.json(["Project 1", "Project 2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Project 1", "Project 2", "Project 3"]);
});

app.put("/projcts/:id", (request, response) => {
  return response.json(["Project 4", "Project 2", "Project 3"]);
});

app.delete("/projects", (request, resposne) => {
  return response.json(["Project 2", "Project 3"]);
});

app.listen(3333, () => {
  console.log("Backend started!!!");
});
