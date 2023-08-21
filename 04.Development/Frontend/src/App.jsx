

import SiderContent from "./SiderContent";
import Users from "./Users/Users";
import Dashboard from "./Dashboard/Dashboard";
import Appointments from "./Appointments/Appointments";
import {
  Layout,
  Menu,
  Input,
  Button,
  Space,
  Drawer,
  Typography,
  FloatButton,
  Avatar,
  Badge,
  Dropdown,
} from "antd";
const { Sider, Header, Footer, Content } = Layout;
const { Text } = Typography;
const { Search } = Input;
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";


import { HiMenu } from "react-icons/hi";
import { useState, useEffect } from "react";

import { GiMagicBroom } from "react-icons/gi";
import { IoNotificationsSharp } from "react-icons/io5";
import { DownOutlined } from "@ant-design/icons";
// import adminURL from "../public/icon/adminAvatar.svg?url"
const items = [
  {
    key: "1",
    label: (
      <a
        rel="noopener noreferrer"
        // href=""
      >
        Profile
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        rel="noopener noreferrer"
        // href="https://www.aliyun.com"
      >
        Settings
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        rel="noopener noreferrer"
        // href="https://www.luohanacademy.com"
      >
        Privacy
      </a>
    ),
  },
  {
    key: "4",
    label: "Sign out",
  },
];
function App() {
  useEffect(() => {
    const handleResize = () => {
      setShowToggle(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [collapsed, handleCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [showToggle, setShowToggle] = useState(window.innerWidth < 992);

  
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    
    <Layout style={{ minHeight: "100vh" }}>
      <FloatButton.Group shape="circle">
          <FloatButton
            style={{ backgroudColor: "#005298" }}
            tooltip={<div>Customize</div>}
            onClick={() => setOpen(!open)}
            icon={<GiMagicBroom />}
          />

          <FloatButton.BackTop
            tooltip={<div>BackTop</div>}
            visibilityHeight={0}
          />
        </FloatButton.Group>
      <Drawer
        headerStyle={{ background: "#005298" }}
        open={open}
        onClose={() => setOpen(!open)}
        title="Customization"
        width={376}
      >
        helo ae
      </Drawer>

      <Drawer
        placement="left"
        width={200}
        open={isDrawerVisible}
        onClose={closeDrawer}
        closable={false}
      >
        <SiderContent collapsed={collapsed} />
      </Drawer>
      <Sider
        theme="light"
        width={240}
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth={showToggle ? 0 : 80}
        trigger={null}
        // onBreakpoint={(broken) => handleCollapsed(broken)}
        // onCollapse={(collapsed) => handleCollapsed(collapsed)}
        onBreakpoint={(broken) => {
          if (broken) {
            setIsDrawerVisible(false);
            handleCollapsed(broken);
          }
        }}
        onCollapse={(collapsed) => {
          setIsDrawerVisible(false);
          handleCollapsed(collapsed);
        }}
      >
        <SiderContent collapsed={collapsed} />
        
      </Sider>

      <Layout>
        <Header style={{ background: "white" }}>
          <div
            style={{
              display: "flex",
              maxHeight: 64,
              alignItems: "center",
              marginLeft: "1.5%",
              marginRight: "1.5%",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", flex: 1, gap: 8 }}
            >
              {showToggle ? 
                <Button icon={<HiMenu />} onClick={showDrawer} />
              : 
                <Button
                  icon={<HiMenu />}
                  onClick={() => {
                    handleCollapsed(!collapsed);
                  }}
                />
              }

              <Search
                className="responsive-search"
                placeholder="Search"
                size="large"
                style={{ width: 200 }}
              />
            </div>

            <Menu
              style={{ width: "100%" }}
              mode="horizontal"
              items={[
                {
                  label: (
                    <Link to="">
                      <Text>Profile</Text>
                    </Link>
                  ),
                  key: "1",
                },
                {
                  label: (
                    <Link to="">
                      <Text>Pages</Text>
                    </Link>
                  ),
                  key: "2",
                },
                {
                  label: (
                    <Link to="">
                      <Text>Help</Text>
                    </Link>
                  ),
                  key: "3",
                },
              ]}
            ></Menu>
            <Space>
              <Badge count={10} overflowCount={9}>
                <Avatar
                  style={{ backgroundColor: "#005298" }}
                  icon={<IoNotificationsSharp />}
                />
              </Badge>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    admin
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Space>
          </div>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/appointments" element={<Appointments />}></Route>
          </Routes>
        </Content>
        <Footer style={{ backgroundColor: "green" }}>
          <div>2023@ G8</div>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
