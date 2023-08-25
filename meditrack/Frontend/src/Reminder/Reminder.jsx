/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllReminders } from "../redux/reminder/reminderApiRequest";

const Reminder = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const upID = localStorage.getItem("upID")
  const allReminers = useSelector(state => state.reminder.reminders?.reminders);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
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

  
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   filters: [
    //     {
    //       text: "Prescription",
    //       value: "Prescription",
    //     },
    //     {
    //       text: "Appointment",
    //       value: "Appointment",
    //     },
    //     {
    //       text: "Others",
    //       value: "Others",
    //     },
    //   ],
    //   filterMode: "tree",
    //   filterSearch: true,
    //   onFilter: (value, record) => record.name.includes(value),
    //   width: "30%",
    // },
    useEffect(() => {
      const fetchData = async () => {
        await getAllReminders(token, dispatch, upID, 1, 100, "")
        setIsDataLoaded(true);
      };
  
      fetchData();
    }, [isDataLoaded]);
  
    if (!isDataLoaded) {
      return <div>Loading...</div>;
    }
    console.log(allReminers)
    const columns = [
      {
        title: "Category",
        dataIndex: "remType",
        key: "remType",
        filters: [
              {
                text: "TAKE_MEDICINES",
                value: "TAKE_MEDICINES",
              },
              {
                text: "REMIND_APPOINTMENTS",
                value: "REMIND_APPOINTMENTS",
              },
              {
                text: "OTHERS",
                value: "OTHERS",
              },
            ],
            filterMode: "tree",
            filterSearch: true,
            onFilter: (value, record) => record.remType.includes(value),
            width: "30%",
      },
      {
        title: "Time",
        dataIndex: "remDatetime",
        key: "remDatetime",
      },
  
      {
        title: "Message",
        dataIndex: "remMessage",
        key: "remMessage",
      },
      
    ];
      

  
  return (
    <div style={{display:"flex",  justifyContent:"center",}}>
      <Row gutter={[16,16]} > 
        <Col span={12}><h1>Reminders</h1></Col>
        <Col span={24}>
        <MyTable data={allReminers.data} columns={columns} />
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
export const MyTable = ({ data, columns }) => {
  const dataSource = data.map((item) => ({
    ...item,
    key: item.userID, // Use 'ID' field as the key
  }));

  return <Table dataSource={dataSource} columns={columns} />;
};