/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Menu } from "antd";

import SidebarNavItem from "./SidebarNavItem";
import { useSelector, useDispatch } from "react-redux";
import {
  getSidebarItems,
  addChangeListener,
  removeChangeListener,
} from "../../../redux/store";

const { ItemGroup } = Menu;

const SidebarNavItems = () => {
  const [navItems, setNavItems] = useState(useSelector(getSidebarItems));
  const dispatch = useDispatch();

  useEffect(() => {
    const onChange = () => {
      setNavItems(useSelector(getSidebarItems));
    };

    dispatch(addChangeListener(onChange));

    return () => {
      dispatch(removeChangeListener(onChange));
    };
  }, [dispatch]);

  return (
    <div className="nav-wrapper">
      <Menu className="nav--no-borders flex-column">
        <ItemGroup>
          {navItems.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </ItemGroup>
      </Menu>
    </div>
  );
};

export default SidebarNavItems;
