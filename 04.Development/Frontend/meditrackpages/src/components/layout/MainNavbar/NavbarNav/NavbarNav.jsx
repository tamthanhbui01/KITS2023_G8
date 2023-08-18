// eslint-disable-next-line no-unused-vars
import React from "react";
import { Menu } from "antd";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

const MainNavbar = () => (
  <Menu
    mode="horizontal"
    theme="dark"
    className="border-left"
    selectable={false}
  >
    <Menu.Item>
      <Notifications />
    </Menu.Item>
    <Menu.Item>
      <UserActions />
    </Menu.Item>
  </Menu>
);

export default MainNavbar;
