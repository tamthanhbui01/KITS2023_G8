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
import logo from "../img/doctoravatar.png";
const Home = () => {
  const featureData = [
    {
      icon: <MedicineBoxOutlined />,
      title: "Quản lý đơn thuốc",
      description: "Mô tả cho tính năng quản lý đơn thuốc",
    },
    {
      icon: <CalendarOutlined />,
      title: "Theo dõi cuộc hẹn y tế",
      description: "Mô tả cho tính năng theo dõi cuộc hẹn y tế",
    },
    {
      icon: <FileOutlined />,
      title: "Nhật ký & hồ sơ sức khỏe",
      description: "Mô tả cho tính năng nhật ký & hồ sơ sức khỏe",
    },
    {
      icon: <TeamOutlined />,
      title: "Hợp tác với nhà cung cấp",
      description: "Mô tả cho tính năng hợp tác với nhà cung cấp",
    },
    {
      icon: <UserAddOutlined />,
      title: "Người chăm sóc",
      description: "Mô tả cho tính năng người chăm sóc",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Nhắc nhở",
      description: "Mô tả cho tính năng nhắc nhở",
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
