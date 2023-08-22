/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../img/banner.png";
import admin from "../img/admin.jpg";
import "./DRegister.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
import DLogin from "./DLogin"; // Import DLogin component

const notify = (text) => toast(text);

const DRegister = () => {
  const [open, setOpen] = useState(false);
  const [registered, setRegistered] = useState(false); // State for tracking registration status
  const [showLogin, setShowLogin] = useState(false); // State for tracking whether to show login component

  const showDrawer = () => {
    setShowLogin(true);
  };

  const onClose = () => {
    setShowLogin(false);
  };

  const [Loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    ID: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration verification here
    // If registration information is valid, call setRegistered(true)
    // Example:
    if (
      formValue.ID !== "" &&
      formValue.password !== "" &&
      formValue.password === formValue.confirmPassword &&
      formValue.email !== ""
    ) {
      setRegistered(true);
    } else {
      notify("Please fill in all the fields correctly.");
    }
  };

  if (registered) {
    return <DLogin />;
  }

  if (showLogin) {
    return <DLogin />;
  }

  return (
    <>
      <ToastContainer />
      <div className="mainRegisterPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Register</h1>
          <div>
            <Radio.Button value="Patient" className={"radiobutton"}>
              Patient
            </Radio.Button>
            <Radio.Button value="Admin" className={"radiobutton"}>
              Admin
            </Radio.Button>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <h3>User</h3>
              <input type="text" name="ID" onChange={handleChange} required />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                required
              />
              <h3>Confirm Password</h3>
              <input
                type="password"
                name="confirmPassword"
                value={formValue.confirmPassword}
                onChange={handleChange}
                required
              />
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                required
              />
              <button type="submit">
                {Loading ? "Loading..." : "Register"}
              </button>
              <p style={{ marginTop: "10px" }}>
                Already have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showDrawer}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DRegister;
