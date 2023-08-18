/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../actions";

const { Header } = Layout;

const SidebarMainNavbar = ({ hideLogoText }) => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Header className="main-navbar align-items-stretch bg-white flex-md-nowrap border-bottom p-0">
      <div className="w-100 mr-0">
        <div className="d-table m-auto">
          <img
            id="main-logo"
            className="d-inline-block align-top mr-1"
            style={{ maxWidth: "25px" }}
            src={require("../../../images/logos/stethoscope.svg")}
            alt="Chikitsak Dashboard"
          />
          {!hideLogoText && (
            <span className="d-none d-md-inline ml-1">Chikitsak</span>
          )}
        </div>
      </div>
      <MenuUnfoldOutlined
        className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
        onClick={handleToggleSidebar}
      />
    </Header>
  );
};

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool,
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false,
};

export default SidebarMainNavbar;
