import React from "react";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="Home">
        <ul>
          <li>Starter</li>
          <li>GoStack</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Backend</li>
          <li>Users</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
