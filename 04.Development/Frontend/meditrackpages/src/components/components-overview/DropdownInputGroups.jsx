/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { InputGroup, Input, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropdownInputGroups = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1(!dropdown1);
  };

  const toggleDropdown2 = () => {
    setDropdown2(!dropdown2);
  };

  const dropdownMenu = (
    <Menu>
      <Menu.Item>Action</Menu.Item>
      <Menu.Item>Another action</Menu.Item>
      <Menu.Item>Something else here</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <InputGroup className="mb-3">
        <Input />
        <Dropdown
          visible={dropdown1}
          onVisibleChange={toggleDropdown1}
          overlay={dropdownMenu}
          trigger={["click"]}
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Dropdown <DownOutlined />
          </a>
        </Dropdown>
      </InputGroup>

      <InputGroup className="mb-3">
        <Dropdown
          visible={dropdown2}
          onVisibleChange={toggleDropdown2}
          overlay={dropdownMenu}
          trigger={["click"]}
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Dropdown <DownOutlined />
          </a>
        </Dropdown>
        <Input />
      </InputGroup>
    </div>
  );
};

export default DropdownInputGroups;
