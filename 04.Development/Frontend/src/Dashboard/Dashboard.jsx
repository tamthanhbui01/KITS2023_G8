import "./Dashboard.css";
import React, { useState } from "react";
import { Col, Row } from "antd";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
function Dashboard() {
  return (
    <>
      {/* <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row> */}
    <Row gutter={[16,24]}>
        <Col className="gutter-row" span={12}>
            <Row>
                <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
                </Col>
            </Row>
            <Row>
                <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
                </Col>
            </Row>
        </Col>
        <Col className="gutter-row" span={12}>
            <div style={style}>col-12</div>
        </Col>
        
    </Row>
    </>
  );
}
export default Dashboard;
