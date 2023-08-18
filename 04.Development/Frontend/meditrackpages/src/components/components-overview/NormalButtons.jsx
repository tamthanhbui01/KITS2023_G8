/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, Button } from "antd";

const NormalButtons = () => (
  <Row>
    <Col>
      <Button type="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button className="mb-2 mr-1">Secondary</Button>
      <Button type="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button type="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button type="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button type="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button className="mb-2 mr-1">Dark</Button>
      <Button className="mb-2 mr-1">Light</Button>
    </Col>
  </Row>
);

export default NormalButtons;
