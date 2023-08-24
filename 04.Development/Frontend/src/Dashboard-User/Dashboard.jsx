import {
  BellOutlined,
  CalendarOutlined,
  FileOutlined,
  HomeOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Layout,
  Menu,
  Row
} from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GiHealthCapsule } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/users/userApiRequest";
import { Header } from "antd/es/layout/layout";
import { getUserProfiles } from "../redux/userProfile/userProfileApiRequest";
const { Content, Sider } = Layout;

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")
  const allUserProfiles = useSelector(state => state.userProfile.userProfiles?.userProfiles)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignout = ()=>{
    logoutUser(token, dispatch, navigate)
  }
  const handleMenuSelect = ({ key }) => {
    if (key === "profile") {
      setSelectedMenu(key);
    } else if (key === "familycare") {
      setSelectedMenu(key);
    } else {
      setSelectedMenu(key);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserProfiles(token, dispatch, id)
      setIsDataLoaded(true);
    };
  
    fetchData();
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return <div>Loading...</div>;
  }
  
  let profiles = []
  for(let i = 0; i < allUserProfiles.length; i++) {
    profiles.push({
      id: allUserProfiles[i].upID,
      name: allUserProfiles[i].upName
    })
  }
  
  const user = {
    profiles: profiles
  };

  localStorage.setItem("upID", profiles[0].id)
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible width={200} style={{background:"#005298"}} >
      <div
        className="logo-wrap"
        style={{
          height: 64,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#005298 ",
        }}
      >
        <GiHealthCapsule fontSize={32} color="white" />
        </div>
         
        <Menu
          mode="vertical"
          selectedKeys={[selectedMenu]}
          onSelect={handleMenuSelect}
          style={{ background: "#f0f2f5" }}
        >
          <Menu.Item
            key="home"
            icon={<HomeOutlined />}
            style={{ fontSize: "16px" }}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="medicine"
            icon={<MedicineBoxOutlined />}
            style={{ fontSize: "16px" }}
          >
            <Link to="medicine">MedicineManagement</Link>
          </Menu.Item>
          <Menu.Item
            key="appointments"
            icon={<CalendarOutlined />}
            style={{ fontSize: "16px" }}
          >
           <Link to="appointments">AppointmentManagement</Link>
          </Menu.Item>
          <Menu.Item
            key="health"
            icon={<FileOutlined />}
            style={{ fontSize: "16px" }}
          >
           <Link to="health">HealthRecordManagement</Link>
          </Menu.Item>
          <Menu.Item
            key="providers"
            icon={<TeamOutlined />}
            style={{ fontSize: "16px" }}
          >
           <Link to="providers">HealthCareProviders</Link>
          </Menu.Item>
          
          <Menu.Item
            key="reminders"
            icon={<BellOutlined />}
            style={{ fontSize: "16px" }}
          >
          <Link to="reminders">Reminder</Link>
          </Menu.Item>
          <Menu.Item
            key="profile"
            icon={<UserOutlined />}
            style={{ fontSize: "16px" }}
          >
           <Link to="profile">Profile</Link>
          </Menu.Item>
          <Menu.Item
            key="signout"
            icon={<UserOutlined />}
            style={{ fontSize: "16px" }}
            onClick={handleSignout}
          >
           Sign out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{background:"white"}}>
        <Row gutter={[8, 8]} style={{paddingLeft:"1%", paddingRight:"2%"}} >
        {user.profiles.map(profile => (
          <Col span={4} key={profile.id} >
            <div>
              <Card hoverable onClick={() => {localStorage.setItem("upID", profile.id)}} style={{}}> <h3>{profile.name}</h3></Card>
              {/* Other profile details */}
            </div>
          </Col>
        ))}
      </Row>
        </Header>
        <Content

          style={{
            padding: 8,
            minHeight: "100vh",
          }}
        >

          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;