/* eslint-disable no-unused-vars */
import React from "react";
import { Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Item } = Form;

const SearchForm = () => (
  <Form
    className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none"
    style={{ display: "flex", minHeight: "45px" }}
  >
    <Item className="ml-3" style={{ flex: 1 }}>
      <Input
        prefix={<SearchOutlined />}
        className="navbar-search"
        placeholder="Search for something..."
        aria-label="Search"
      />
    </Item>
  </Form>
);

export default SearchForm;
