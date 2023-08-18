/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const { Item } = Menu;

const SidebarNavItem = ({ item }) => (
  <Item key={item.to}>
    <NavLink to={item.to}>
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {item.title && <span>{item.title}</span>}
      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </NavLink>
  </Item>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object,
};

export default SidebarNavItem;
