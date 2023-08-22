// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { List, Avatar } from "antd";
import { CalendarOutlined, MedicineBoxOutlined } from "@ant-design/icons";
class Notifications extends Component {
  render() {
    // Giả định có một danh sách thông báo và nhắc nhở
    const notifications = [
      {
        title: "Cuộc hẹn",
        description: "Bạn có cuộc hẹn y tế vào ngày 22/08/2023.",
        icon: <CalendarOutlined />,
      },
      {
        title: "Lời nhắc",
        description: "Hãy uống thuốc vào lúc 8 giờ sáng hàng ngày.",
        icon: <MedicineBoxOutlined />,
      },
    ];

    return (
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={item.icon} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default Notifications;
