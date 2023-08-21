
import "./Dashboard.css";
import { Col, Row, Card, Space, Typography } from "antd";
import {MedicineBoxOutlined } from '@ant-design/icons';
import {CgPill} from "react-icons/cg"
import {BiUser} from "react-icons/bi"
import {PiBellRingingBold} from "react-icons/pi"
const {Text}=Typography

const baseUrl = "http://localhost:8080"

function Dashboard() {
  


  return (
    <>
      
     
      <Row gutter={[16,16]} style={{marginTop:12, marginLeft:6, marginRight:6}}>
        
        <Col
          
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          xxl={6}

        >

          <Card >
            <Space>
              <div style={{paddingRight:40}}><BiUser className="card-icon" fontSize={40}/></div>
              <Space direction="vertical">
                <Text className="card-title">Users</Text>
                <Text className="card-data">288</Text>
              </Space>
            </Space>
            </Card>
          

        </Col>
        <Col
         
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          xxl={6}

        >

          <Card >
            <Space>
              <div style={{paddingRight:40}}><MedicineBoxOutlined className="card-icon" style={{fontSize:40}}/></div>
              <Space direction="vertical">
                <Text className="card-title">Appointments</Text>
                <Text className="card-data">288</Text>
              </Space>
            </Space>
            </Card>
          

        </Col>
        <Col
          
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          xxl={6}

        >

          <Card >
            <Space>
              <div style={{paddingRight:40}}><CgPill className="card-icon" fontSize={40}/></div>
              <Space direction="vertical">
                <Text className="card-title">Presciptions</Text>
                <Text className="card-data">288</Text>
              </Space>
            </Space>
            </Card>
          

        </Col>
        <Col
          
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          xxl={6}

        >

          <Card >
            <Space>
              <div style={{paddingRight:40}}><PiBellRingingBold className="card-icon" fontSize={40}/></div>
              <Space direction="vertical">
                <Text className="card-title">Reminders</Text>
                <Text className="card-data">200</Text>
              </Space>
            </Space>
            </Card>
          

        </Col>
        
      </Row>
      
    </>
  );
}
export default Dashboard;
