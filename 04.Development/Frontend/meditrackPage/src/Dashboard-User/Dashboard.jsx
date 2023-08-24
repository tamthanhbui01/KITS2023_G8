/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  Layout,
  Menu,
  Row,
  Col,
  Avatar,
  Switch,
  Drawer,
  Dropdown,
  Space,
} from "antd";
import {
  MedicineBoxOutlined,
  CalendarOutlined,
  FileOutlined,
  TeamOutlined,
  UserAddOutlined,
  BellOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Home from "../Home/Home";
import MedicineManagement from "../Prescription/MedicineManagement";
import AppointmentManagement from "../Appointment/AppointmentManagement";
import HealthRecordManagement from "../HealthRecordManagement/HealthRecordManagement";
import HealthCareProviders from "../HealthCareProviders/HealthcareProviders";
import FamilyMembers from "../FamilyCare/FamilyCare";
import Reminders from "../Reminder/Reminder";
import Profile from "../profile/index"; // Import the Profile component
import logo from "../assets/img/logo.svg";
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
      case "profile": // Add the "profile" case to display the Profile component
        return <Profile />;
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
              Home
            </Menu.Item>
            <Menu.Item
              key="medicine"
              icon={<MedicineBoxOutlined />}
              style={{ fontSize: "16px" }}
            >
              MedicineManagement
            </Menu.Item>
            <Menu.Item
              key="appointments"
              icon={<CalendarOutlined />}
              style={{ fontSize: "16px" }}
            >
              AppointmentManagement
            </Menu.Item>
            <Menu.Item
              key="health"
              icon={<FileOutlined />}
              style={{ fontSize: "16px" }}
            >
              HealthRecordManagement
            </Menu.Item>
            <Menu.Item
              key="providers"
              icon={<TeamOutlined />}
              style={{ fontSize: "16px" }}
            >
              HealthCareProviders
            </Menu.Item>
            <Menu.Item
              key="familycare"
              icon={<UserAddOutlined />}
              style={{ fontSize: "16px" }}
            >
              FamilyCare
            </Menu.Item>
            <Menu.Item
              key="reminders"
              icon={<BellOutlined />}
              style={{ fontSize: "16px" }}
            >
              Reminder
            </Menu.Item>
            <Menu.Item
              key="profile" // Add the "profile" key for the Profile menu item
              icon={<UserOutlined />}
              style={{ fontSize: "16px" }}
            >
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            {this.renderContent()}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
