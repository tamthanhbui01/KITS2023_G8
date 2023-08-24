/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { List, Avatar, Button, Modal, Form, Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Item } = List;

class FamilyCare extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "User 1",
        email: "user1@example.com",
        address: "123 ABC Street, XYZ City",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "User 2",
        email: "user2@example.com",
        address: "456 DEF Street, XYZ City",
        phone: "987-654-3210",
      },
      // Add more users as needed
    ],
    selectedUser: null,
    requestModalVisible: false,
  };

  handleOpenRequestModal = (user) => {
    this.setState({ selectedUser: user, requestModalVisible: true });
  };

  handleCloseRequestModal = () => {
    this.setState({ selectedUser: null, requestModalVisible: false });
  };

  handleSendRequest = () => {
    // Perform the request sending logic here
    // For demonstration purposes, we'll just display a success message
    message.success("Request sent successfully");
    this.handleCloseRequestModal();
  };

  render() {
    const { users, selectedUser, requestModalVisible } = this.state;

    return (
      <div>
        <h1>Family Care</h1>
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(user) => (
            <Item
              actions={[
                <Button
                  type="primary"
                  onClick={() => this.handleOpenRequestModal(user)}
                >
                  Send Request
                </Button>,
              ]}
            >
              <Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={user.name}
                description={user.email}
              />
            </Item>
          )}
        />
        <Modal
          title={`Send Request to ${selectedUser ? selectedUser.name : ""}`}
          visible={requestModalVisible}
          onCancel={this.handleCloseRequestModal}
          footer={[
            <Button key="cancel" onClick={this.handleCloseRequestModal}>
              Cancel
            </Button>,
            <Button
              key="send"
              type="primary"
              onClick={this.handleSendRequest}
            >
              Send Request
            </Button>,
          ]}
        >
          <Form layout="vertical">
            <Form.Item label="Message">
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default FamilyCare;