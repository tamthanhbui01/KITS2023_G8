import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, DatePicker } from "antd";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    name: "",
    date: null,
    description: "",
    provider: "",
    location: "",
    purpose: "",
    note: "",
  });
  const [editingAppointment, setEditingAppointment] = useState(null);

  const columns = [
    {
      title: "Tên cuộc hẹn",
      dataIndex: "name",
    },
    {
      title: "Ngày hẹn",
      dataIndex: "date",
    },
    {
      title: "Nhà cung cấp dịch vụ",
      dataIndex: "provider",
    },
    {
      title: "Địa điểm",
      dataIndex: "location",
    },
    {
      title: "Mục đích",
      dataIndex: "purpose",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      render: (_, record) => (
        <div>
          <Button type="primary" onClick={() => editAppointment(record)}>
            Update
          </Button>
          <Button type="danger" onClick={() => cancelAppointment(record)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (newAppointment.name && newAppointment.date) {
      const appointment = {
        ...newAppointment,
        date: newAppointment.date.format("YYYY-MM-DD"),
      };

      if (editingAppointment) {
        // Edit existing appointment
        const updatedAppointments = appointments.map((item) => {
          if (item === editingAppointment) {
            return appointment;
          }
          return item;
        });

        setAppointments(updatedAppointments);
        setEditingAppointment(null);
        toast.success("Lịch hẹn đã được cập nhật.");
      } else {
        // Add new appointment
        setAppointments([...appointments, appointment]);
        toast.success("Lịch hẹn đã được thêm mới.");
      }

      setIsModalVisible(false);
      setNewAppointment({
        name: "",
        date: null,
        description: "",
        provider: "",
        location: "",
        purpose: "",
        note: "",
      });
    } else {
      toast.error("Vui lòng nhập tên cuộc hẹn và ngày hẹn.");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewAppointment({
      name: "",
      date: null,
      description: "",
      provider: "",
      location: "",
      purpose: "",
      note: "",
    });
    setEditingAppointment(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setNewAppointment((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  const editAppointment = (appointment) => {
    setIsModalVisible(true);
    setNewAppointment({
      name: appointment.name,
      date: moment(appointment.date),
      description: appointment.description,
      provider: appointment.provider,
      location: appointment.location,
      purpose: appointment.purpose,
      note: appointment.note,
    });
    setEditingAppointment(appointment);
  };

  const cancelAppointment = (appointment) => {
    setAppointments((prevState) => prevState.filter((item) => item !== appointment));
  };

  return (
    <div>
      <h2>Appointment Management</h2>
      <Button type="primary" onClick={showModal}>
        Thêm cuộc hẹn
      </Button>
      <Table dataSource={appointments} columns={columns} />

      <Modal
        title="Thêm cuộc hẹn"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Tên cuộc hẹn">
            <Input
              name="name"
              onChange={handleInputChange}
              value={newAppointment.name}
            />
          </Form.Item>
          <Form.Item label="Ngày hẹn">
            <DatePicker
              onChange={handleDateChange}
              value={newAppointment.date}
              format="DD/MM/YYYY"
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input
              name="description"
              value={newAppointment.description}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Nhà cung cấp dịch vụ">
            <Input
              name="provider"
              value={newAppointment.provider}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Địa điểm">
            <Input
              name="location"
              value={newAppointment.location}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Mục đích">
            <Input
              name="purpose"
              value={newAppointment.purpose}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Ghi chú">
            <Input
              name="note"
              value={newAppointment.note}
              onChange={handleInputChange}
            />
          </Form.Item>
        </Form>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default AppointmentManagement;