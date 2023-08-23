import React from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class HealthRecordManagement extends React.Component {
  state = {
    fileList: [],
    chartData: [],
  };

  handleFormSubmit = (values) => {
    // eslint-disable-next-line no-unused-vars
    const { fileList, chartData } = this.state;
    const { weight, bloodPressure, glucoseLevel } = values;

    const newChartData = [
      ...chartData,
      {
        weight,
        bloodPressure,
        glucoseLevel,
        time: new Date().toLocaleTimeString(),
      },
    ];
    this.setState({ fileList: [], chartData: newChartData });

    message.success("Đã lưu thông tin sức khỏe");
  };

  handleFileUpload = (file) => {
    const newFileList = [file];
    this.setState({ fileList: newFileList });
    return false; // Ngăn chặn việc tự động tải lên
  };

  render() {
    const { fileList, chartData } = this.state;

    return (
      <div>
        <h1>Nhật ký & hồ sơ sức khỏe</h1>
        <Form onFinish={this.handleFormSubmit}>
          <Form.Item name="weight" label="Cân nặng">
            <Input />
          </Form.Item>
          <Form.Item name="bloodPressure" label="Huyết áp">
            <Input />
          </Form.Item>
          <Form.Item name="glucoseLevel" label="Nồng độ glucose">
            <Input />
          </Form.Item>
          <Form.Item name="medicalRecords" label="Tải lên hồ sơ">
            <Upload
              fileList={fileList}
              beforeUpload={this.handleFileUpload}
              onRemove={() => this.setState({ fileList: [] })}
            >
              <Button icon={<UploadOutlined />}>Tải lên</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#8884d8"
                name="Cân nặng"
              />
              <Line
                type="monotone"
                dataKey="bloodPressure"
                stroke="#82ca9d"
                name="Huyết áp"
              />
              <Line
                type="monotone"
                dataKey="glucoseLevel"
                stroke="#ffc658"
                name="Nồng độ glucose"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default HealthRecordManagement;
