/* eslint-disable no-unused-vars */
import classNames from "classnames/bind";
import styles from "./profile.module.css";

import {
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Layout,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";

import { useEffect, useState } from "react";
import {
  FaCalendarDays,
  FaCamera,
  FaClipboardUser,
  FaEnvelope,
  FaPhoneFlip,
  FaRotate,
  FaUser,
  FaUserPen
} from "react-icons/fa6";
import fallbackAvatar from "../assets/img/doctoravartar.png";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUserProfile, updateUserProfile } from "../redux/userProfile/userProfileApiRequest";

const cx = classNames.bind(styles);
const { Option } = Select;
//main 
const ProfilePage = () => {
  const userProfile = useSelector(state => state.userProfile.singleUserProfile?.userProfile)
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const dispatch = useDispatch()


  const [isModalChangePasswordOpen, setIsModalChangePasswordOpen] =
    useState(false);
  const [isModalDeleteAccountOpen, setIsModalDeleteAccountOpen] =
    useState(false);
  const [isModalEditProfileOpen, setIsModalEditProfileOpen] = useState(false);
  const [formChangepassword] = Form.useForm();
  const [formDeleteAccount] = Form.useForm();
  const [formEditProfile] = Form.useForm();

  const upID = localStorage.getItem("upID")
  const token = localStorage.getItem("token")

  const name = localStorage.getItem("userAccount")

  const handleChangePasswordOpen = () => {
    setIsModalChangePasswordOpen(true);
  };

  const handleChangePasswordOk = () => {
    setIsModalChangePasswordOpen(false);
  };

  const handleChangePasswordCancel = () => {
    formChangepassword.setFieldsValue({
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setIsModalChangePasswordOpen(false);
  };

  const handleEditProfileOpen = () => {
    setIsModalEditProfileOpen(true);
  };



  const handleEditProfileOk = () => {
    setIsModalEditProfileOpen(false);
  };

  const handleEditProfileCancel = () => {
    formEditProfile.setFieldsValue({
      deleteAcc: "",
    });
    setIsModalEditProfileOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getSingleUserProfile(token, dispatch, upID)
      setIsDataLoaded(true);
    };
  
    fetchData();
  }, [isDataLoaded, upID]);


  if (!isDataLoaded) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
       
      <div className={cx("profilepage")}>
        <Layout>
          <Layout>
            <section className={cx("profilepage__wrapper")}>
              <div className={cx("profilepage__content")}>
                <h4 className={cx("profilepage__title")}>Profile</h4>
                <Row className={cx("profile__row")}>
                  <Col md={12} lg={10} xl={10}>
                    <div className={cx("profile__avatar")}>
                      <Upload
                        className={cx("profile__avatar--upload")}
                        name="avatar"
                        maxCount={1}
                        accept="image/*"
                        showUploadList={false}
                      >
                        <img
                          className={cx("profile__img")}
                          src={fallbackAvatar}
                        />
                      </Upload>
                      <FaCamera className={cx("profile__upload--icon")} />
                    </div>

                    <div className={cx("profile__username")}>{userProfile.upName}</div>

                    <Row className={cx("profile__groupbtn")}>
                      <Col xl={16} lg={22} md={16} sm={13} xs={18}>
                        <button
                          className={cx("profile__button")}
                          onClick={handleEditProfileOpen}
                        >
                          <Row className={cx("profile__button--row")}>
                            <Col
                              className={cx("profile__button--col")}
                              span={4}
                            >
                              <FaUserPen
                                className={cx("profile__button--icon")}
                              />
                            </Col>
                            <Col span={20}>Edit profile</Col>
                          </Row>
                        </button>
                      </Col>

                      <Col xl={16} lg={22} md={16} sm={13} xs={18}>
                        <button
                          className={cx("profile__button")}
                          onClick={handleChangePasswordOpen}
                        >
                          <Row className={cx("profile__button--row")}>
                            <Col
                              className={cx("profile__button--col")}
                              span={4}
                            >
                              <FaRotate
                                className={cx("profile__button--icon")}
                              />
                            </Col>
                            <Col span={20}>Change password</Col>
                          </Row>
                        </button>
                      </Col>
                    </Row>
                    <div className={cx("line")}></div>
                  </Col>

                  <Col md={12} lg={14} xl={14}>
                    <Row className={cx("profile__info--row")}>
                      <Col xl={18} lg={18} md={20} sm={22} xs={22}>
                        <div className={cx("profile__info")}>
                          <div className={cx("profile__info--iconwrap")}>
                            <FaClipboardUser
                              className={cx("profile__info--icon")}
                            />
                          </div>
                          <div className={cx("profile__info--text")}>
                            <div className={cx("profile__info--key")}>
                              Username
                            </div>
                            <div className={cx("profile__info--value")}>
                              {name}
                            </div>
                          </div>
                        </div>
                      </Col>

                      {/* <Col xl={18} lg={18} md={20} sm={22} xs={22}>
                        <div className={cx("profile__info")}>
                          <div className={cx("profile__info--iconwrap")}>
                            <FaEnvelope className={cx("profile__info--icon")} />
                          </div>
                          <div className={cx("profile__info--text")}>
                            <div className={cx("profile__info--key")}>
                              Email
                            </div>
                            <div className={cx("profile__info--value")}>
                              {userProfile.upEmail}
                            </div>
                          </div>
                        </div>
                      </Col> */}

                      <Col xl={18} lg={18} md={20} sm={22} xs={22}>
                        <div className={cx("profile__info")}>
                          <div className={cx("profile__info--iconwrap")}>
                            <FaUser className={cx("profile__info--icon")} />
                          </div>
                          <div className={cx("profile__info--text")}>
                            <div className={cx("profile__info--key")}>Name</div>
                            <div className={cx("profile__info--value")}>
                              {userProfile.upName}
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col xl={18} lg={18} md={20} sm={22} xs={22}>
                        <div className={cx("profile__info")}>
                          <div className={cx("profile__info--iconwrap")}>
                            <FaCalendarDays
                              className={cx("profile__info--icon")}
                            />
                          </div>
                          <div className={cx("profile__info--text")}>
                            <div className={cx("profile__info--key")}>
                              Birthday
                            </div>
                            <div className={cx("profile__info--value")}>
                              {userProfile.upDoB}
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col xl={18} lg={18} md={20} sm={22} xs={22}>
                        <div className={cx("profile__info")}>
                          <div className={cx("profile__info--iconwrap")}>
                            <FaPhoneFlip
                              className={cx("profile__info--icon")}
                            />
                          </div>
                          <div className={cx("profile__info--text")}>
                            <div className={cx("profile__info--key")}>
                              Phone
                            </div>
                            <div className={cx("profile__info--value")}>
                              {userProfile.upPhone}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </section>
          </Layout>
        </Layout>

        <Modal
          title="Change password"
          open={isModalChangePasswordOpen}
          onOk={handleChangePasswordOk}
          onCancel={handleChangePasswordCancel}
        >
          <Form
            form={formChangepassword}
            name="changePassword"
            layout="vertical"
          >
            <Form.Item name="password" label={"Current password"}>
              <Input
                type="password"
                placeholder="Current password"
                style={{ padding: "1.2rem" }}
              />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label={"New password"}
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please enter your new password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") !== value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password must be different from the current password!"
                      )
                    );
                  },
                }),
                {
                  min: 8,
                  pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$*])/,
                  message:
                    "Password must have at least 8 characters, must contain at least one special character, one uppercase letter, one lowercase letter and one number.",
                },
              ]}
            >
              <Input
                type="password"
                placeholder="New password"
                style={{ padding: "1.2rem" }}
              />
            </Form.Item>
            <Form.Item
              name="confirmNewPassword"
              label={"Confirm new password"}
              dependencies={["newPassword"]}
              rules={[
                {
                  required: true,
                  message: "Please enter this field!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Password does not match!")
                    );
                  },
                }),
              ]}
            >
              <Input
                type="password"
                placeholder="Confirm password"
                style={{ padding: "1.2rem" }}
              />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Edit profile"
          open={isModalEditProfileOpen}
          onOk={handleEditProfileOk}
          onCancel={handleEditProfileCancel}
        >
          <Form form={formEditProfile} name="editProfile" layout="vertical">
            <Form.Item name="name" label={"Name"} initialValue={userProfile.upName}>
              <Input type="text" style={{ padding: "1.2rem" }}/>
            </Form.Item>

            <Form.Item
              name="phoneNumber"
              label="Phone number"
              rules={[
                {
                  message: "The phone number format is incorrect",
                },
                {
                  required: true,
                  message: "Please enter this field!",
                },
              ]}
              initialValue={userProfile.upPhone}
            >
              <Input style={{ padding: "1.2rem" }}/>
            </Form.Item>

            <Form.Item
              name="gender"
              label={"Gender"}
              rules={[
                {
                  required: true,
                  message: "Please select a gender",
                },
              ]}
            >
              <Select defaultValue={userProfile.upGender}>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item>

            {/* <Form.Item
              name="birth"
              label={"Birth"}
              rules={[
                {
                  required: true,
                  message: "Please select birth date",
                },
              ]}
              // initialValue={userProfile.upDoB}
            >
              <DatePicker
                suffixIcon={<FaCalendarDays />}
                placeholder=""
                format={"YYYY/MM/DD"}
                allowClear={false}
                showToday={false}
                className={cx("register__datepicker")}
                defaultValue={userProfile.upDoB}
                defaultPickerValue={userProfile.upDoB}
              />
            </Form.Item> */}
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default ProfilePage;
