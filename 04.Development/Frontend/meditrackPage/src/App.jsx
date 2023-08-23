/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import DLogin from "./Dashboard-Login/DLogin";
import DRegister from "./Dashboard-Login/DRegister"; // Import DRegister component
import Dashboard from "./Dashboard-User/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);

  const onLoginSuccess = () => {
    setLoggedIn(true);
  };

  const onRegisterSuccess = () => {
    setRegistered(true);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard />
      ) : registered ? (
        <DLogin onLoginSuccess={onLoginSuccess} />
      ) : (
        <DRegister onRegisterSuccess={onRegisterSuccess} />
      )}
    </div>
  );
}

export default App;
