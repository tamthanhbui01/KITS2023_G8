/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Layout, Menu, Row, Col, Avatar, Switch, Drawer } from "antd";
import {
  MedicineBoxOutlined,
  CalendarOutlined,
  FileOutlined,
  TeamOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
  BellOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Home from "../Home/Home";
import MedicineManagement from "../Prescription/MedicineManagement";
import AppointmentManagement from "../Appointment/AppointmentManagement";
import HealthRecordManagement from "../HealthRecordManagement/HealthRecordManagement";
import HealthCareProviders from "../HealthCareProviders/HealthcareProviders";
import FamilyMembers from "../FamilyCare";
import Reminders from "../Reminder/Reminder";
import logo from "../img/logo.svg";

const { Content, Sider } = Layout;

class Dashboard extends Component {
  state = {
    selectedMenu: "home",
    showUserProfile: false,
    darkMode: false,
  };

  handleMenuSelect = ({ key }) => {
    if (key === "profile") {
      this.setState({ selectedMenu: key });
    } else if (key === "familycare") {
      this.setState({ selectedMenu: key });
    } else {
      this.setState({ selectedMenu: key });
    }
  };

  handleShowUserProfile = () => {
    this.setState((prevState) => ({
      showUserProfile: !prevState.showUserProfile,
    }));
  };

  handleToggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  renderContent = () => {
    const { selectedMenu } = this.state;

    switch (selectedMenu) {
      case "home":
        return <Home />;
      case "medicine":
        return <MedicineManagement />;
      case "appointments":
        return <AppointmentManagement />;
      case "health":
        return <HealthRecordManagement />;
      case "providers":
        return <HealthCareProviders />;
      case "familycare":
        return <FamilyMembers />;
      case "reminders":
        return <Reminders />;
      default:
        return null;
    }
  };

  render() {
    const { selectedMenu, showUserProfile, darkMode } = this.state;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} theme={darkMode ? "dark" : "light"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "64px",
              background: "#f0f2f5",
            }}
          >
            <img src={logo} alt="Logo" style={{ height: "32px" }} />
          </div>
          <Menu
            mode="vertical"
            selectedKeys={[selectedMenu]}
            onSelect={this.handleMenuSelect}
            style={{ background: "#f0f2f5" }}
          >
            <Menu.Item
              key="home"
              icon={<HomeOutlined />}
              style={{ fontSize: "16px" }}
            >
              Trang chủ
            </Menu.Item>
            <Menu.Item
              key="medicine"
              icon={<MedicineBoxOutlined />}
              style={{ fontSize: "16px" }}
            >
              Quản lý đơn thuốc
            </Menu.Item>
            <Menu.Item
              key="appointments"
              icon={<CalendarOutlined />}
              style={{ fontSize: "16px" }}
            >
              Theo dõi cuộc hẹn y tế
            </Menu.Item>
            <Menu.Item
              key="health"
              icon={<FileOutlined />}
              style={{ fontSize: "16px" }}
            >
              Nhật ký & hồ sơ sức khỏe
            </Menu.Item>
            <Menu.Item
              key="providers"
              icon={<TeamOutlined />}
              style={{ fontSize: "16px" }}
            >
              Hợp tác với nhà cung cấp
            </Menu.Item>
            <Menu.Item
              key="familycare"
              icon={<UserAddOutlined />}
              style={{ fontSize: "16px" }}
            >
              Người chăm sóc
            </Menu.Item>
            <Menu.Item
              key="reminders"
              icon={<ClockCircleOutlined />}
              style={{ fontSize: "16px" }}
            >
              Nhắc nhở
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Layout.Header
            style={{
              background: "#fff",
              padding: "0 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Row align="middle">
              <Col>
                <BellOutlined
                  style={{
                    fontSize: "20px",
                    marginRight: "16px",
                  }}
                />
                <Avatar
                  icon={<UserOutlined />}
                  style={{ marginLeft: "16px" }}
                  onClick={this.handleShowUserProfile}
                />
              </Col>
            </Row>
          </Layout.Header>
          <Content style={{ margin: "16px" }}>{this.renderContent()}</Content>
        </Layout>
        <Drawer
          title="User Profile"
          placement="right"
          closable={false}
          onClose={this.handleShowUserProfile}
          visible={showUserProfile}
          width={400}
        >
          <p>Tên người dùng</p>
          <p>Email: example@example.com</p>
          <p>Địa chỉ: 123 ABC Street, XYZ City</p>
          <p>Số điện thoại: 123-456-7890</p>
        </Drawer>
      </Layout>
    );
  }
}

export default Dashboard;
