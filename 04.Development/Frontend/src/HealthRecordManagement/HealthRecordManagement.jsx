import { useState } from "react";
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

const HealthRecordManagement = () => {
const [fileList, setFileList] = useState([]);
const [chartData, setChartData] = useState([]);

const handleFormSubmit = (values) => {
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
setFileList([]);
setChartData(newChartData);

message.success("Đã lưu thông tin sức khỏe");
};

const handleFileUpload = (file) => {
const newFileList = [file];
setFileList(newFileList);
return false;
};

return (
<div>
<h1>Health Record</h1>
<Form onFinish={handleFormSubmit}>
<Form.Item name="weight" label="Weight">
<Input placeholder="Ex: 80Kg,..." />
</Form.Item>
<Form.Item name="bloodPressure" label="Blood pressure">
<Input placeholder="Ex: 80 mmHg,..." />
</Form.Item>
<Form.Item name="glucoseLevel" label="Glucose concentration">
<Input placeholder="Ex: 70mg/dL,..." />
</Form.Item>
<Form.Item name="medicalRecords" label="Health Record">
<Upload
fileList={fileList}
beforeUpload={handleFileUpload}
onRemove={() => setFileList([])}
>
<Button icon={<UploadOutlined />}>Upload</Button>
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
<Line type="monotone" dataKey="weight" stroke="#8884d8" name="Cân nặng" />
<Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" name="Huyết áp" />
<Line type="monotone" dataKey="glucoseLevel" stroke="#ffc658" name="Nồng độ glucose" />
</LineChart>
</ResponsiveContainer>
</div>
</div>
);
};

export default HealthRecordManagement;