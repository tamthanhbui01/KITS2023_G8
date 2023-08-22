/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import { Layout, Menu, Row, Col, Avatar, Switch, Drawer } from "antd";
import {
  MedicineBoxOutlined,
  CalendarOutlined,
  FileOutlined,
  TeamOutlined,
  SettingOutlined,
  BellOutlined,
  UserOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import MedicineManagement from "./MedicineManagement";
import AppointmentManagement from "./AppointmentManagement";
import HealthRecordManagement from "./HealthRecordManagement";
import HealthCareProviders from "./HealthcareProviders";
import FamilyMembers from "./FamilyCare";
import Reminders from "./Reminder";

const { Content, Sider } = Layout;

class Dashboard extends Component {
  state = {
    selectedMenu: "medicine",
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
          <Menu
            mode="vertical"
            selectedKeys={[selectedMenu]}
            onSelect={this.handleMenuSelect}
            style={{ background: darkMode ? "#001529" : "#f0f2f5" }}
          >
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
              background: darkMode ? "#001529" : "#fff",
              padding: "0 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Row align="middle">
              <Col>
                {/* Thêm logo website tại đây */}
                <Avatar
                  src="path/to/logo.png"
                  alt="Logo"
                  style={{ marginRight: "16px" }}
                />
              </Col>
              <Col>
                <BellOutlined
                  style={{
                    fontSize: "20px",
                    marginRight: "16px",
                    color: darkMode ? "#fff" : "rgba(0, 0, 0, 0.65)",
                  }}
                />
                <Switch
                  checked={darkMode}
                  onChange={this.handleToggleDarkMode}
                  checkedChildren="DarkMode"
                  unCheckedChildren="Light Mode"
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
