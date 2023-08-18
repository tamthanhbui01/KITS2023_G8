/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Avatar, Collapse } from "antd";
import {
  UserOutlined,
  EditOutlined,
  FileOutlined,
  TransactionOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { useStateValue } from "../../../../StateProvider";

const { Item: MenuItem, Divider } = Menu;
const { Panel } = Collapse;

const UserActions = (props) => {
  const [visible, setVisible] = useState(false);
  const [{ user }] = useStateValue();

  const toggleUserActions = () => {
    setVisible(!visible);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Menu mode="horizontal" selectable={false}>
      <Dropdown
        overlay={
          <Collapse activeKey={visible ? "1" : ""}>
            <Panel
              key="1"
              className="dropdown-menu dropdown-menu-small"
              header={user?.displayName}
            >
              <MenuItem icon={<EditOutlined />}>
                <Link to="user-profile">Edit Profile</Link>
              </MenuItem>
              <MenuItem icon={<FileOutlined />}>
                <Link to="file-manager-list">My Patients</Link>
              </MenuItem>
              <MenuItem icon={<TransactionOutlined />}>
                <Link to="transaction-history">Transactions</Link>
              </MenuItem>
              <Divider />
              <MenuItem
                icon={<LogoutOutlined />}
                onClick={refreshPage}
                className="text-danger"
              >
                Logout
              </MenuItem>
            </Panel>
          </Collapse>
        }
        trigger={["click"]}
        placement="bottomRight"
        onVisibleChange={toggleUserActions}
      >
        <Menu.Item tag="div" className="text-nowrap px-3">
          <Avatar
            className="user-avatar rounded-circle mr-2"
            src={user?.photoURL}
            alt="User Avatar"
            icon={<UserOutlined />}
          />
          <span className="d-none d-md-inline-block">{user?.displayName}</span>
        </Menu.Item>
      </Dropdown>
    </Menu>
  );
};

export default UserActions;
