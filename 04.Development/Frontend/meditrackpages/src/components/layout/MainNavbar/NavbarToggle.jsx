/* eslint-disable no-unused-vars */
import React from "react";
import { MenuFoldOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";

const NavbarToggle = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch();
  };

  return (
    <nav className="nav">
      <a
        href="#"
        onClick={handleClick}
        className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"
      >
        <MenuFoldOutlined />
      </a>
    </nav>
  );
};

export default NavbarToggle;
