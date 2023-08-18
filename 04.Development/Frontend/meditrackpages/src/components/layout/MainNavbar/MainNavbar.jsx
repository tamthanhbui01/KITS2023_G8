/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Layout } from "antd";

import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";

const { Header } = Layout;

const MainNavbar = ({ Layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <Header className={classes}>
      <Layout className="align-items-stretch flex-md-nowrap p-0">
        <NavbarSearch />
        <NavbarNav />
        <NavbarToggle />
      </Layout>
    </Header>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool,
};

MainNavbar.defaultProps = {
  stickyTop: true,
};

export default MainNavbar;
