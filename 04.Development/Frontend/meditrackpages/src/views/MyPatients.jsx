// eslint-disable-next-line no-unused-vars
import React from "react";
import { Row, Col } from "antd";

import PageTitle from "../components/common/PageTitle";
import Akshith from "../components/patient-profile/Akshith";
import Shiva from "../components/patient-profile/Shiva";
import Harshita from "../components/patient-profile/Harshita";
import Shriya from "../components/patient-profile/Shriya";

const MyPatients = () => (
  <div className="main-content-container px-4">
    <Row gutter={[16, 16]} justify="center">
      <Col span={24}>
        <PageTitle title="Patient List" subtitle="My Patients" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Harshita />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Shriya />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Shiva />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Akshith />
      </Col>
    </Row>
  </div>
);

export default MyPatients;
