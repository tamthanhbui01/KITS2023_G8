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
import logo from "../assets/img/doctoravartar.png";
import { Link } from "react-router-dom";

const Home = () => {
  const featureData = [
    {
      icon: <MedicineBoxOutlined />,
      title: "Medicine Management",
      link: "/medicine",
    },
    {
      icon: <CalendarOutlined />,
      title: "Appointment Management",
      link: "/appointments",
    },
    {
      icon: <FileOutlined />,
      title: "Health Record Management",
      link: "/health",
    },
    {
      icon: <TeamOutlined />,
      title: "Healthcare Providers",
      link: "/providers",
    },
    {
      icon: <UserAddOutlined />,
      title: "Profile",
      link: "/profile",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Reminder",
      link: "/reminders",
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
          <Col key={index} xs={24} sm={24} md={12} lg={8} align="middle">
            <Link to={feature.link}>
              <Card style={{ width: "100%" }} hoverable>
                <Avatar
                  icon={feature.icon}
                  size={64}
                  style={{ marginBottom: "16px" }}
                />
                <Card.Meta
                  title={feature.title}
                  style={{ textAlign: "center" }}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;