/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Card, Form, Input, Row, Col, Select, Button } from "antd";
import { useStateValue } from "../../StateProvider";

const { Option } = Select;

const UserAccountDetails = ({ title }) => {
  const [{ user }] = useStateValue();

  const onFinish = (values) => {
    console.log(values);
    // Perform update account logic here
  };

  return (
    <Card className="mb-4">
      <Card.Title>{title}</Card.Title>
      <Form onFinish={onFinish} initialValues={user}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="firstName" label="First Name">
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName" label="Last Name">
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input placeholder="Email Address" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="password" label="Password">
              <Input.Password placeholder="Password" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="address" label="Address">
          <Input placeholder="Address" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="city" label="City">
              <Input placeholder="City" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="state" label="State">
              <Select placeholder="Select State">
                <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                <Option value="Jharkhand">Jharkhand</Option>
                <Option value="Karnataka">Karnataka</Option>
                <Option value="Maharashtra">Maharashtra</Option>
                <Option value="Tamil Nadu">Tamil Nadu</Option>
                <Option value="West Bengal">West Bengal</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="zipCode" label="Zip Code">
              <Input placeholder="Zip Code" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={5} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Account
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

UserAccountDetails.propTypes = {
  title: PropTypes.string,
};

UserAccountDetails.defaultProps = {
  title: "Account Details",
};

export default UserAccountDetails;
