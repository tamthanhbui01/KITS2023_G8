/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

const Colors = () => (
  <Row className="mb-2">
    <Col lg={24}>
      <span style={{ fontSize: "16px" }} className="d-block mb-2 text-muted">
        <strong>Colors</strong>
      </span>
    </Col>

    <Col className="mb-4" span={6}>
      <div
        className="bg-primary text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}
      >
        Primary
      </div>
    </Col>
    <Col className="mb-4" span={6}>
      <div
        className="bg-secondary text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}
      >
        Secondary
      </div>
    </Col>
    <Col className="mb-4" span={6}>
      <div
        className="bg-success text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}
      >
        Success
      </div>
    </Col>
    <Col className="mb-4" span={6}>
      <div
        className="bg-info text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}
      >
        Info
      </div>
    </Col>
    <Col className="mb-4" span={6}>
      <div
        className="bg-warning text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}
      >
        Warning
      </div>
    </Col>
    <Col className="mb-4" span={6}>
      <div
        className="bg-danger text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}
      >
        Danger
      </div>
    </Col>
    <Col className="mb-4" span={6}>
      <div
        className="bg-dark text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}
      >
        Dark
      </div>
    </Col>
  </Row>
);

export default Colors;
