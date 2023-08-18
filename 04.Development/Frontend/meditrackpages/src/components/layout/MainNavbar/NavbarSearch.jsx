/* eslint-disable no-unused-vars */
import React from "react";
import { Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const MainNavbarSearch = () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <Form.Item className="ml-3" noStyle>
      <Input
        className="navbar-search"
        placeholder="Search for something..."
        prefix={<SearchOutlined />}
      />
    </Form.Item>
  </Form>
);

export default MainNavbarSearch;
