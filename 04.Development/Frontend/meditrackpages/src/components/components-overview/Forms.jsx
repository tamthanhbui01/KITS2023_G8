/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Form, Input } from "antd";

const { Item } = Form;

const Forms = () => (
  <Col sm={12} md={6}>
    <strong className="text-muted d-block mb-2">Forms</strong>
    <Form>
      <Item>
        <Input.Group compact>
          <Input style={{ width: "30%" }} defaultValue="@"></Input>
          <Input style={{ width: "70%" }} placeholder="Username" />
        </Input.Group>
      </Item>
      <Item>
        <Input.Password
          placeholder="Password"
          defaultValue="myCoolPassword"
          onChange={() => {}}
        />
      </Item>
      <Item>
        <Input
          placeholder="1234 Main St"
          defaultValue="7898 Kensington Junction, New York, USA"
          onChange={() => {}}
        />
      </Item>
      <Item>
        <Input.Group compact>
          <Input
            style={{ width: "70%" }}
            defaultValue="New York"
            onChange={() => {}}
          />
          <Input style={{ width: "30%" }} placeholder="Choose ..." />
        </Input.Group>
      </Item>
    </Form>
  </Col>
);

export default Forms;
