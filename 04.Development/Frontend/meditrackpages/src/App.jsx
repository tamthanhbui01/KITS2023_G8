/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./routes";
// import withTracker from "./withTracker";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
