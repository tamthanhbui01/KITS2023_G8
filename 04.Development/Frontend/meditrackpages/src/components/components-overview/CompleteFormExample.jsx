/* eslint-disable no-unused-vars */
import React from "react";
import { List, Input, Row, Col, Form, Checkbox, Select, Button } from "antd";
import "antd/dist/antd.css";

const { Item } = List;
const { Option } = Select;

const CompleteFormExample = () => (
  <List bordered>
    <Item className="p-3">
      <Row>
        <Col>
          <Form>
            <Row>
              <Col md={12}>
                <Form.Item label="Email" name="email">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item label="Password" name="password">
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Address" name="address">
              <Input placeholder="1234 Main St" />
            </Form.Item>

            <Form.Item label="Address 2" name="address2">
              <Input placeholder="Apartment, Studio or Floor" />
            </Form.Item>

            <Row>
              <Col md={8}>
                <Form.Item label="City" name="city">
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item label="State" name="state">
                  <Select placeholder="Choose...">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item label="Zip" name="zip">
                  <Input />
                </Form.Item>
              </Col>
              <Col md={24}>
                <Form.Item name="agreement" valuePropName="checked">
                  <Checkbox>
                    {/* eslint-disable-next-line */}I agree with your{" "}
                    <a href="#">Privacy Policy</a>.
                  </Checkbox>
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Create New Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Item>
  </List>
);

export default CompleteFormExample;
