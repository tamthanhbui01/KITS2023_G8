const { Sider, Header, Footer, Content } = Layout;
const { Text } = Typography;
import Users from "./Users/Users"
import Dashboard from "./Dashboard/Dashboard"
import Appointments from "./Appointments/Appointments"
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
  
} from "antd";
const { Search } = Input;
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { GiHealthCapsule } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { GiMagicBroom } from "react-icons/gi";
import { IoNotificationsSharp } from "react-icons/io5";
// import adminURL from "../public/icon/adminAvatar.svg?url"
function App() {
  const [collapsed, handleCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <FloatButton.Group shape="circle">
        <FloatButton
          style={{backgroudColor:"#005298"}}
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
      >
      </Drawer>
      <Sider
        style={{ backgroundColor: "#005298" }}
        width={240}
        collapsed={collapsed}
      >
        <div className="logo-wrap" style={{ height: 64 }}>
          <GiHealthCapsule fontSize={32} />
          {!collapsed ? (
            <span style={{ fontSize: 24, color: "white" }}>MediTrack</span>
          ) : (
            <></>
          )}
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          items={[
            {
              label: <div>MediTrack</div>,
              key: "100",
              disabled: true,
              // icon:<GiHealthCapsule/>
            },
            {
              label: <Link to="/">Dashboard</Link>,
              icon: <RxDashboard />,
              key: "1",
            },
            {
              label: <Link to="/users">Users</Link>,
              key: "5",
              icon: <BsPeopleFill />,
            },
            {
              label: <Link to="/appointments">Appointments</Link>,
              key: "2",
              icon: <GrSchedules />,
            },
            {
              label: <Link to="">Doctors</Link>,
              key: "3",
              icon: <FaUserDoctor />,
            },
            {
              label: <Link to="">Departments</Link>,
              key: "4",
              icon: <FaHouseUser />,
            },

            {
              label: <Link to="">Payments</Link>,
              key: "6",
              icon: <BsPeopleFill />,
            },
          ]}
        ></Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "white"}}>
          <div
            style={{
              display: "flex",
              maxHeight:64,
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flex: 1, gap: 8 }}>
              <Button
                icon={<HiMenu />}
                size=""
                onClick={() => {
                  handleCollapsed(!collapsed);
                }}
              ></Button>
              <Search
                placeholder="Search"
                size="large"
                style={{ width: 360 }}
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
            <Space direction="horizontal">
            <Badge count={10} overflowCount={9}>
              <Avatar style={{backgroundColor:"#005298"}} icon={<IoNotificationsSharp />} />
            </Badge>
            
            </Space>
           

          </div>
        </Header>
        <Content style={{height:3000}}>
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/appointments" element={<Appointments/>}></Route>
          </Routes>

        </Content>
        <Footer style={{ backgroundColor: "" }}>
          <div>2023@ G8</div>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
