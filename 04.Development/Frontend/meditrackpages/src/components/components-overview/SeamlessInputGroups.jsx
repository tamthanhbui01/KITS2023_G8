// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Button,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const SeamlessInputGroups = () => (
  <div>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <UserOutlined />
        </InputGroupText>
      </InputGroupAddon>
      <Input value="design.revision" onChange={() => {}} />
    </InputGroup>

    <InputGroup className="mb-3">
      <Input.Password value="mySuperSecretPassword" onChange={() => {}} />
      <InputGroupAddon addonType="append">
        <InputGroupText>
          <LockOutlined />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup className="mb-3">
      <Input placeholder="Recipient's username" />
      <InputGroupAddon addonType="append">
        <Button type="default">Button</Button>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default SeamlessInputGroups;
