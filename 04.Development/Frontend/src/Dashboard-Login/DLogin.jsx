/* eslint-disable no-unused-vars */
import { Drawer, Radio } from "antd";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import admin from "../img/admin.jpg";
import banner from "../img/banner.png";
import "./DLogin.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/users/userApiRequest";

const notify = (text) => toast(text);

const DLogin = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State for tracking login status


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [Loading, setLoading] = useState(false);

  const [formvalue, setFormvalue] = useState({
    userEmail: "",
    userPassword: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formvalue, dispatch, navigate)
  };

  const [ForgetPassword, setForgetPassword] = useState({
    type: "",
    email: "",
  });

  const HandleForgetPassword = (e) => {
    setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
  };

  const [forgetLoading, setforgetLoading] = useState(false);

  return (
    <>
      <ToastContainer />
      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Login</h1>
          <div>
            <Radio.Button value="Patient" className={"radiobutton"}>
              User
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
              <input type="text" name="userEmail" onChange={Handlechange} required />
              <h3>Password</h3>
              <input
                type="password"
                name="userPassword"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit">{Loading ? "Loading..." : "Submit"}</button>
              <p style={{ marginTop: "10px" }}>
                Forget Password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showDrawer}
                >
                  Get it on Email !
                </span>
              </p>
              <p style={{ marginTop: "10px" }}>
                Haven't got an account yet?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => {navigate("/register")}}
                >
                  Register.
                </span>
              </p>
              <Drawer
                title="Forget Password"
                placement="left"
                onClose={onClose}
                open={open}
              >
                <div>
                  <label style={{ fontSize: "18px" }}>Choose Type</label>

                  <select
                    name="type"
                    value={ForgetPassword.type}
                    onChange={HandleForgetPassword}
                    required
                  >
                    <option value="">User Type</option>
                    <option value="nurse">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "18px" }}>
                    Enter Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    name="email"
                    value={ForgetPassword.email}
                    onChange={HandleForgetPassword}
                    required
                    style={{
                      width: "100%",
                      height: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#bce0fb",
                      fontSize: "18px",
                      marginTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                </div>

                <button
                  style={{
                    width: "50%",
                    height: "40px",
                    marginTop: "10px",
                    backgroundColor: "#1890ff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    handleSubmit()
                  }}
                >
                   {forgetLoading ? "Loading..." : "Submit"}
                </button>
              </Drawer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;
