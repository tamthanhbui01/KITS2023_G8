/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Form, Input, Select } from "antd";

const { Option } = Select;
const { Item } = Form;

const FormValidation = () => (
  <Col sm={12} md={6}>
    <strong className="text-muted d-block mb-2">Form Validation</strong>
    <Form>
      <Form.Item validateStatus="success" help="The first name looks good!">
        <Input defaultValue="Vasile" placeholder="First name" />
      </Form.Item>
      <Form.Item validateStatus="success" help="The last name looks good!">
        <Input defaultValue="Catalin" placeholder="Last name" />
      </Form.Item>
      <Form.Item validateStatus="error" help="The username is taken.">
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item validateStatus="error" help="Please select your state">
        <Select defaultValue="Choose">
          <Option value="Choose">Choose</Option>
          <Option value="...">...</Option>
        </Select>
      </Form.Item>
    </Form>
  </Col>
);

export default FormValidation;
