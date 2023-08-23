/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Modal, Form, Input, Button, List, Checkbox, message } from "antd";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: [],
      showModal: false,
      newReminder: "",
    };
  }

  handleModalOpen = () => {
    this.setState({
      showModal: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      showModal: false,
      newReminder: "",
    });
  };

  handleInputChange = (e) => {
    this.setState({
      newReminder: e.target.value,
    });
  };

  handleFormSubmit = () => {
    const { reminders, newReminder } = this.state;

    if (newReminder.trim() === "") {
      message.error("Please enter a reminder.");
      return;
    }

    const newReminderObj = {
      id: reminders.length + 1,
      text: newReminder,
      completed: false,
    };

    this.setState((prevState) => ({
      reminders: [...prevState.reminders, newReminderObj],
      showModal: false,
      newReminder: "",
    }));

    message.success("Reminder added successfully.");
  };

  render() {
    const { reminders, showModal, newReminder } = this.state;
    const { appointments } = this.props;

    return (
      <div>
        <h1>Reminder</h1>
        <Button type="primary" onClick={this.handleModalOpen}>
          Add Reminder
        </Button>
        <Modal
          title="Add Reminder"
          visible={showModal}
          onCancel={this.handleModalClose}
          footer={[
            <Button key="cancel" onClick={this.handleModalClose}>
              Cancel
            </Button>,
            <Button key="add" type="primary" onClick={this.handleFormSubmit}>
              Add
            </Button>,
          ]}
        >
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Item label="Reminder">
              <Input value={newReminder} onChange={this.handleInputChange} />
            </Form.Item>

            <Form.Item label="Appointments">
              <List
                dataSource={appointments}
                renderItem={(appointment) => (
                  <List.Item>
                    <Checkbox>{appointment.name}</Checkbox>
                  </List.Item>
                )}
              />
            </Form.Item>
          </Form>
        </Modal>
        <h2>Reminders:</h2>
        <List
          dataSource={reminders}
          renderItem={(reminder) => (
            <List.Item key={reminder.id}>
              <Checkbox checked={reminder.completed}>{reminder.text}</Checkbox>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Reminder;
