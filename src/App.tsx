import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "common/router/routes";

function App() {
  const element = useRoutes(routes);

  return <div className="App">{element}</div>;
}

export default App;
