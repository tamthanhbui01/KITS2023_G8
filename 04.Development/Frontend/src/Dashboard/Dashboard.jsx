import "./Dashboard.css";
import { Area, Column, Pie, measureTextWidth } from "@ant-design/plots";
import { useState, useEffect } from "react";
import { Col, Row, Card, Space, Typography } from "antd";
import { MedicineBoxOutlined } from "@ant-design/icons";
import { CgPill } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { PiBellRingingBold } from "react-icons/pi";
const { Text } = Typography;
const baseUrl = "http://localhost:8080";


function Dashboard() {
  const [data, setData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const genderData = [
    {
      Gender: "Male",
      Proportion: 0.45,
    },
    {
      Gender: "Female",
      Proportion: 0.55,
    },
  ];

  const ageData = [
    {
      type: "40+",
      value: 25,
    },
    {
      type: "31-40",
      value: 18,
    },
    {
      type: "0-10",
      value: 15,
    },
    {
      type: "11-20",
      value: 10,
    },
    {
      type: "21-30",
      value: 5,
    },
  ];
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    Promise.all([
      fetch(
        "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log("fetch data failed", error);
        }),
      fetch(
        "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json"
      )
        .then((response) => response.json())
        .then((json) => setColumnData(json))
        .catch((error) => {
          console.log("fetch data failed", error);
        }),
    ]);
  };
  function renderStatistic(containerWidth, text, style) {
    const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
  }

  const remData = [

    {
      type: 'Take Medicine',
      value: 15,
    },
    {
      type: 'Appointment',
      value: 10,
    },
    {
      type: 'Others',
      value: 5,
    },
  ];
  const remConfig = {
    legend:{position:"top"},
    appendPadding: 10,
    data:remData,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        textAlign: 'center',
      },
      autoRotate: false,
      content: '{value}',
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : 'Reminder';
          return renderStatistic(d, text, {
            fontSize: 28,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: '24px',
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum ? `${datum.value}` : `${data.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 24,
          });
        },
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
      {
        type: 'pie-statistic-active',
      },
    ],
  };
  const config = {
    data: data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    }, 
    color:"blue",
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#336cfb',
      };
    },
  };
  const columnConfig = {
    data: columnData,
    isStack: true,
    xField: "year",
    yField: "value",
    seriesField: "type",
    legend: { layout: "horizontal", position: "top" },
    label: {
      position: "middle", // 'top', 'bottom', 'middle'
    },
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
    connectedArea: {
      style: (oldStyle, element) => {
        return {
          fill: "rgba(0,0,0,0.25)",
          stroke: oldStyle.fill,
          lineWidth: 0.5,
        };
      },
    },
  };
  const genderConfig = {
    appendPadding: 10,
    data: genderData,
    angleField: "Proportion",
    colorField: "Gender",
    radius: 0.8,
    legend:{ layout: "horizontal", position: "top",},
    label: {
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      type: "inner",
      offset: "-50%",
      style: {
        fill: "#ffffff",
        fontSize: 18,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-single-selected",
      },
    ],
  };
  const ageConfig = {
    appendPadding: 10,
    data: ageData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    legend: { layout: "horizontal", position: "top" },
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: "inner",
      offset: "-8%",
      content: "{name}",
      style: {
        fontSize: 12,
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
    pieStyle: {
      lineWidth: 0,
    },
  };
  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{ marginTop: 12, marginLeft: 6, marginRight: 6 }}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card>
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
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card>
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
          <Card>
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
          <Card>
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
            <Area {...config} />
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
            <Column {...columnConfig} />
          </Card>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        style={{ marginTop: 12, marginLeft: 6, marginRight: 6, marginBottom:12 }}
      >
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Card
            title={
              <>
                <div style={{ fontSize: 24 }}>Users age</div>
              </>
            }
          >
            <Pie {...ageConfig} />
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
            <Pie {...genderConfig} />
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
            <Pie {...remConfig} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Dashboard;
