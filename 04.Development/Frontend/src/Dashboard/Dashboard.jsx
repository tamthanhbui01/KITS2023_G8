
import "./Dashboard.css";
import { Area, Column } from '@ant-design/plots';
import { useState,useEffect } from "react";

import { Col, Row, Card, Space, Typography } from "antd";
import {MedicineBoxOutlined } from '@ant-design/icons';
import {CgPill} from "react-icons/cg"
import {BiUser} from "react-icons/bi"
import {PiBellRingingBold} from "react-icons/pi"

const {Text}=Typography

const baseUrl = "http://localhost:8080"

function Dashboard() {
  const [data, setData] = useState([]);
  const [columnData, setColumnData]=useState([])
  useEffect(()=>{asyncFetch()},[])
  const asyncFetch=()=>{ Promise.all([
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json').then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => {
      console.log('fetch data failed', error);
    })
      ,
      fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json').then((response) => response.json())
      .then((json) => setColumnData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      })])
  }

  const config = {
    data:data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };
  const columnConfig = {
    data: columnData,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle', // 'top', 'bottom', 'middle'
    },
    interactions: [
      {
        type: 'active-region',
        enable: false,
      },
    ],
    connectedArea: {
      style: (oldStyle, element) => {
        return {
          fill: 'rgba(0,0,0,0.25)',
          stroke: oldStyle.fill,
          lineWidth: 0.5,
        };
      },
    },
  };
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
      <Row gutter={[16,16]} style={{marginTop:12, marginLeft:6, marginRight:6}}>
        <Col xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          xxl={24}>
          <Card style={{paddingTop:8}}
                title={
                <>
                  <div style={{fontSize:24}}>New users</div>
                  <div style={{color:"grey", fontWeight:400}}>since 2022</div>
                </>} 
                 >
            <Area {...config}/>
         </Card>
        </Col>
        <Col
          
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}

        >

          <Card >
            
              
            </Card>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <Card >
          <Column {...columnConfig} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Dashboard;
