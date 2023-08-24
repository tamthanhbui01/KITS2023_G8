/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, Avatar, Card } from "antd";
import {
  MedicineBoxOutlined,
  CalendarOutlined,
  FileOutlined,
  TeamOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import logo from "../assets/img/doctoravatar.png";
const Home = () => {

  const featureData = [
    {
      icon: <MedicineBoxOutlined />,
      title: "Medicine Management",
    },
    {
      icon: <CalendarOutlined />,
      title: "Appointment Management",
    },
    {
      icon: <FileOutlined />,
      title: "Health Record Management",
    },
    {
      icon: <TeamOutlined />,
      title: "Healthcare Providers",
    },
    {
      icon: <UserAddOutlined />,
      title: "Family Care",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Reminder",
    },
  ];

  return (
    <div>
      <Row justify="center" style={{ marginTop: "16px" }}>
        <Col>
          <Avatar src={logo} alt="Logo" size={120} />
        </Col>
      </Row>

      <Row justify="center" gutter={[16, 16]} style={{ marginTop: "16px" }}>
        {featureData.map((feature, index) => (
          <Col key={index} span={8} align="middle">
            <Card style={{ width: "100%" }} hoverable>
              <Avatar
                icon={feature.icon}
                size={64}
                style={{ marginBottom: "16px" }}
              />
              <Card.Meta
                title={feature.title}
                description={feature.description}
                style={{ textAlign: "center" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
