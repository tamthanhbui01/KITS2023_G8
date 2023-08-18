/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Row, Menu } from "antd";
import { Link } from "react-router-dom";

const { Item } = Menu;

const MainFooter = ({ contained, menuItems, copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Row>
      <Menu mode="horizontal">
        {menuItems.map((item, idx) => (
          <Item key={idx}>
            <Link to={item.to}>{item.title}</Link>
          </Item>
        ))}
      </Menu>
      <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
    </Row>
  </footer>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string,
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Made With ♡ By Team Chikitsak",
  menuItems: [
    {
      title: "Home",
      to: "#",
    },
    {
      title: "About Us",
      to: "#",
    },
    {
      title: "Microsoft Azure",
      to: "#",
    },
    {
      title: "Serverless",
      to: "#",
    },
    {
      title: "Hire Us?",
      to: "#",
    },
  ],
};

export default MainFooter;
