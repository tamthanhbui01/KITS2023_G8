/* eslint-disable no-unused-vars */
import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const CustomSelect = () => (
  <div>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>Options</InputGroupText>
      </InputGroupAddon>
      <Select>
        <Option value="choose">Choose</Option>
        <Option value="...">...</Option>
      </Select>
    </InputGroup>

    <InputGroup className="mb-3">
      <Select>
        <Option value="choose">Choose</Option>
        <Option value="...">...</Option>
      </Select>
      <InputGroupAddon addonType="append">
        <InputGroupText>Options</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default CustomSelect;
