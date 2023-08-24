/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  message,
  Row,
  Col,
} from "antd";

const Reminder = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  const handleReminder = (record) => {
    setCurrentRecord(record);
    setModalVisible(true);
  };

  const handleModalOk = () => {
    // Kiểm tra các trường thông tin
    if (!currentRecord || !currentRecord.name) {
      message.error("Vui lòng nhập đủ các trường trong reminder!");
      return;
    }
    setModalVisible(false);
    message.success("Đặt lời nhắc thành công!");
  };

  const handleModalCancel = () => {
    setCurrentRecord(null);
    setModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Prescription",
          value: "Prescription",
        },
        {
          text: "Appointment",
          value: "Appointment",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Type",
      dataIndex: "type",
      filters: [
        {
          text: "Prescription",
          value: "Prescription",
        },
        {
          text: "Appointment",
          value: "Appointment",
        },
        {
          text: "Others",
          value: "Others",
        },
      ],
      onFilter: (value, record) => record.type.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Button onClick={() => handleReminder(record)}>Set Reminder</Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Prescription 1",
      type: "Prescription",
    },
    {
      key: "2",
      name: "Prescription 2",
      type: "Prescription",
    },
    {
      key: "3",
      name: "Appointment 1",
      type: "Appointment",
    },
    {
      key: "4",
      name: "Appointment 2",
      type: "Appointment",
    },
  ];

  return (
    <div>
      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={data} scroll={{ x: 500 }} />
        </Col>
      </Row>

      <Modal
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Appointment">
            <Input value={currentRecord?.name} disabled />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Time">
            <TimePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Reminder;
