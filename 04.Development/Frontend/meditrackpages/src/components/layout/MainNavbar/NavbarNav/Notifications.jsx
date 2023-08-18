/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Badge, Collapse, Dropdown, Menu } from "antd";
import { BellOutlined } from "@ant-design/icons";

const { Item: MenuItem } = Menu;
const { Panel } = Collapse;

const Notifications = () => {
  const [visible, setVisible] = useState(false);

  const toggleNotifications = () => {
    setVisible(!visible);
  };

  return (
    <Menu mode="horizontal" selectable={false}>
      <Dropdown
        overlay={
          <Collapse activeKey={visible ? "1" : ""}>
            <Panel
              key="1"
              className="dropdown-menu dropdown-menu-small"
              header="Notifications"
            >
              <MenuItem>
                <div className="notification__icon-wrapper">
                  <div className="notification__icon">
                    <i className="material-icons">&#xE6E1;</i>
                  </div>
                </div>
                <div className="notification__content">
                  <span className="notification__category">Analytics</span>
                  <p>
                    Your website’s active patients count increased by{" "}
                    <span className="text-success text-semibold">28%</span> in
                    the last week. Great job!
                  </p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="notification__icon-wrapper">
                  <div className="notification__icon">
                    <i className="material-icons">&#xE8D1;</i>
                  </div>
                </div>
                <div className="notification__content">
                  <span className="notification__category">Critical</span>
                  <p>
                    Last week your response time decreased by{" "}
                    <span className="text-danger text-semibold">5.52%</span>. It
                    could have been worse!
                  </p>
                </div>
              </MenuItem>
              <MenuItem className="notification__all text-center">
                View all Notifications
              </MenuItem>
            </Panel>
          </Collapse>
        }
        trigger={["click"]}
        placement="bottomRight"
        onVisibleChange={toggleNotifications}
      >
        <Menu.Item className="border-right">
          <div className="nav-link-icon text-center">
            <div className="nav-link-icon__wrapper">
              <BellOutlined />
              <Badge count={2} style={{ backgroundColor: "#f5222d" }} />
            </div>
          </div>
        </Menu.Item>
      </Dropdown>
    </Menu>
  );
};

export default Notifications;
