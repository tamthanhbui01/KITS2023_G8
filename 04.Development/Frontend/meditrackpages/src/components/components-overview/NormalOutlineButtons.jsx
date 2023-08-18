/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, Button } from "antd";

const NormalOutlineButtons = () => (
  <Row>
    <Col>
      <Button type="primary" className="mb-2 mr-1" ghost>
        Primary
      </Button>
      <Button className="mb-2 mr-1" ghost>
        Secondary
      </Button>
      <Button type="success" className="mb-2 mr-1" ghost>
        Success
      </Button>
      <Button type="danger" className="mb-2 mr-1" ghost>
        Danger
      </Button>
      <Button type="warning" className="mb-2 mr-1" ghost>
        Warning
      </Button>
      <Button type="info" className="mb-2 mr-1" ghost>
        Info
      </Button>
      <Button className="mb-2 mr-1" ghost>
        Dark
      </Button>
      <Button className="mb-2 mr-1" ghost>
        Light
      </Button>
    </Col>
  </Row>
);

export default NormalOutlineButtons;
