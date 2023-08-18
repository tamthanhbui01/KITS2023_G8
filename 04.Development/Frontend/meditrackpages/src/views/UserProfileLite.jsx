/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col } from "antd";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const UserProfileLite = () => (
  <div className="main-content-container px-4">
    <Row gutter={[16, 16]} justify="center">
      <Col span={24}>
        <PageTitle title="Doctor's Profile" subtitle="Overview" />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <UserDetails />
      </Col>
      <Col xs={24} sm={24} md={12} lg={16}>
        <UserAccountDetails />
      </Col>
    </Row>
  </div>
);

export default UserProfileLite;