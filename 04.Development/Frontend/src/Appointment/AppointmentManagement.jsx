import { useState } from "react";
import { Table, Button, Modal, Form, Input, DatePicker, Space } from "antd";
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
      title: "Title",
      dataIndex: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Provider",
      dataIndex: "provider",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Purpose",
      dataIndex: "purpose",
    },
    {
      title: "Note",
      dataIndex: "note",
    },
    {
      title: "Action",
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
        toast.success("Your appointment has been updated!");
      } else {
        // Add new appointment
        setAppointments([...appointments, appointment]);
        toast.success("A new appointment has been added successfully!");
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
      toast.error("Please entry title and date of appointment");
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
    <div style={{}}>
      <h1 style={{paddingBottom:8}}>Appointment</h1>
      <Button type="primary" onClick={showModal} >
      Add
      </Button>
      <Table dataSource={appointments} columns={columns} scroll={{x:768}} style={{paddingTop:8}}/>

      <Modal
        title="Add an appointment"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Title">
            <Input
              name="name"
              onChange={handleInputChange}
              value={newAppointment.name}
            />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker
              onChange={handleDateChange}
              value={newAppointment.date}
              format="DD/MM/YYYY"
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              name="description"
              value={newAppointment.description}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Healthcare Provider">
            <Input
              name="provider"
              value={newAppointment.provider}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Place">
            <Input
              name="location"
              value={newAppointment.location}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Purpose">
            <Input
              name="purpose"
              value={newAppointment.purpose}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Note">
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