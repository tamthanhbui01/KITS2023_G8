import { MedicineBoxOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import { BiUser } from "react-icons/bi";
import { CgPill } from "react-icons/cg";
import { PiBellRingingBold } from "react-icons/pi";
import Appointments from "../DBChart/Appointments";
import NewUsers from "../DBChart/NewUsers";
import "./Dashboard.css";
import UsersAge from "../DBChart/UsersAge";
import UsersGender from "../DBChart/UsersGender";
import Reminders from "../DBChart/Reminders";
import { Link } from "react-router-dom";
const { Text } = Typography;
const baseUrl = "http://localhost:8080";

function AdminDashboard() {
  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{ marginTop: 12, marginLeft: 6, marginRight: 6 }}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Link to="user">
            <Card hoverable>
              <Space>
                <div style={{ paddingRight: 40 }}>
                  <BiUser className="card-icon" fontSize={40} />
                </div>
                <Space direction="vertical">
                  <Text className="card-title">Users</Text>
                  <Text className="card-data">288</Text>
                </Space>
              </Space>
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Space>
              <div style={{ paddingRight: 40 }}>
                <MedicineBoxOutlined
                  className="card-icon"
                  style={{ fontSize: 40 }}
                />
              </div>
              <Space direction="vertical">
                <Text className="card-title">Appointments</Text>
                <Text className="card-data">288</Text>
              </Space>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Space>
              <div style={{ paddingRight: 40 }}>
                <CgPill className="card-icon" fontSize={40} />
              </div>
              <Space direction="vertical">
                <Text className="card-title">Presciptions</Text>
                <Text className="card-data">288</Text>
              </Space>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Space>
              <div style={{ paddingRight: 40 }}>
                <PiBellRingingBold className="card-icon" fontSize={40} />
              </div>
              <Space direction="vertical">
                <Text className="card-title">Reminders</Text>
                <Text className="card-data">200</Text>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        style={{ marginTop: 12, marginLeft: 6, marginRight: 6 }}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Card
            style={{ paddingTop: 8 }}
            title={
              <>
                <div style={{ fontSize: 24 }}>New users</div>
                <div style={{ color: "grey", fontWeight: 400 }}>since 2022</div>
              </>
            }
          >
            <NewUsers />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Card
            style={{ paddingTop: 8 }}
            title={
              <>
                <div style={{ fontSize: 24 }}>Appointments</div>
                <div style={{ color: "grey", fontWeight: 400 }}>this year</div>
              </>
            }
          >
            <Appointments />
          </Card>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        style={{
          marginTop: 12,
          marginLeft: 6,
          marginRight: 6,
          marginBottom: 12,
        }}
      >
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Card
            title={
              <>
                <div style={{ fontSize: 24 }}>Users age</div>
              </>
            }
          >
            <UsersAge />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Card
            title={
              <>
                <div style={{ fontSize: 24 }}>Users gender</div>
              </>
            }
          >
            <UsersGender />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Card
            title={
              <>
                <div style={{ fontSize: 24 }}>Reminders</div>
              </>
            }
          >
            <Reminders />
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default AdminDashboard;
