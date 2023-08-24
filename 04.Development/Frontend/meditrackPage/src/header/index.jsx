/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { Avatar, Button, Col, Dropdown, Modal, Row, Select } from "antd";

import { useState } from "react";

import {
  FaBars,
  FaBarsStaggered,
  FaChevronDown,
  FaCircleExclamation,
  FaCircleQuestion,
  FaGear,
  FaRegIdCard,
  FaRightFromBracket,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import fallbackAvatar from "../assets/img/fallback-avt.jpg";

const Header = () => {
  const [isModalSettingsOpen, setIsModalSettingsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [activeColorOption, setActiveColorOption] = useState("color1");

  // eslint-disable-next-line no-unused-vars
  const handleImageOptionClick = (imageValue) => {
    setActiveImageOption(imageValue);
  };

  // eslint-disable-next-line no-unused-vars
  const handleColorOptionClick = (value) => {
    setActiveColorOption(value);
  };

  const handleToggleCollapsed = () => {
    dispatch(toggleCollapsed());
  };

  const handleOpenSettings = () => {
    setIsModalSettingsOpen(true);
  };

  const handleSettingsOk = () => {
    setIsModalSettingsOpen(false);
  };

  const onChangeLang = (value) => {
    i18n.changeLanguage(value);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setColorValue(e.target.value);
  };

  const MENU_DROPDOWN_ITEMS = [
    {
      label: <Link to={"/profile"}>Profile</Link>,
      key: "0",
      icon: <FaRegIdCard />,
      style: {
        fontSize: "1.4rem",
        padding: "0.8rem",
      },
    },
    {
      label: "Settings",
      key: "1",
      icon: <FaGear />,
      style: {
        fontSize: "1.4rem",
        padding: "0.8rem",
      },
      onClick: handleOpenSettings,
    },
    {
      label: "Help & support",
      key: "2",
      icon: <FaCircleQuestion />,
      style: {
        fontSize: "1.4rem",
        padding: "0.8rem",
      },
    },
    {
      label: "Give feedback",
      key: "3",
      icon: <FaCircleExclamation />,
      style: {
        fontSize: "1.4rem",
        padding: "0.8rem",
      },
    },
    {
      label: "Logout",
      key: "4",
      icon: <FaRightFromBracket />,
      style: {
        fontSize: "1.4rem",
        padding: "0.8rem",
      },
    },
  ];

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Button
            type="text"
            icon=<FaBars />
            onClick={handleToggleCollapsed}
            className="header__collapsed--btn"
          />

          <div className="header__auth">
            <Dropdown
              menu={{ items: MENU_DROPDOWN_ITEMS }}
              trigger={["click"]}
              placement={"bottomRight"}
            >
              <button className="header__avatar--btn">
                <Avatar
                  className="header__avatar"
                  size={40}
                  src={fallbackAvatar}
                />
                <span className={"header__avatar--name"}>Name</span>
                <FaChevronDown className={"profile__avatar--icon"} />
              </button>
            </Dropdown>
          </div>
        </div>
      </header>

      <Modal
        title="Settings"
        open={isModalSettingsOpen}
        onCancel={handleSettingsOk}
        footer={null}
      >
        <Row>
          <Col span={24} className={"modal__settings--col"}>
            <span className={"modal__settings--label"}>Language: </span>

            <Select
              className={"modal__settings--select"}
              defaultValue={"ENG"}
              onSelect={onChangeLang}
              size="large"
            ></Select>
          </Col>
          <Col span={24} className={"modal__settings--col"}>
            <span className={"modal__settings--label"}>Color filters:</span>

            <div className={"modal__settings--radio"}>
              <span className={("radio__option", {})}></span>
            </div>
          </Col>

          <Col
            span={24}
            className={"modal__settings--col"}
            style={{ alignItems: "flex-start" }}
          >
            <span className={"modal__settings--label"}>Images:</span>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default Header;
