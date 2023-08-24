/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Card, Button, Modal, Form, Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

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
    infoModalVisible: false,
  };

  handleOpenInfoModal = (user) => {
    this.setState({ selectedUser: user, infoModalVisible: true });
  };

  handleCloseInfoModal = () => {
    this.setState({ selectedUser: null, infoModalVisible: false });
  };

  render() {
    const { users, selectedUser, infoModalVisible } = this.state;

    return (
      <div>
        <h1>Family Care</h1>
        <div className="card-list">
          {users.map((user) => (
            <Card
              key={user.id}
              hoverable
              style={{ width: 300, marginBottom: 16 }}
              cover={<UserOutlined style={{ fontSize: 64, margin: 16 }} />}
              actions={[
                <Button
                  type="primary"
                  onClick={() => this.handleOpenInfoModal(user)}
                >
                  View Details
                </Button>,
              ]}
            >
              <Meta title={user.name} description={user.email} />
            </Card>
          ))}
        </div>
        <Modal
          title={`User Information - ${selectedUser ? selectedUser.name : ""}`}
          visible={infoModalVisible}
          onCancel={this.handleCloseInfoModal}
          footer={[
            <Button key="close" onClick={this.handleCloseInfoModal}>
              Close
            </Button>,
          ]}
        >
          {selectedUser && (
            <div>
              <p>Name: {selectedUser.name}</p>
              <p>Email: {selectedUser.email}</p>
              <p>Address: {selectedUser.address}</p>
              <p>Phone: {selectedUser.phone}</p>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

export default FamilyCare;
