/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Layout, Row, Col } from "antd";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";

import MainFooter from "../components/layout/MainFooter";

const { Content } = Layout;

const DefaultLayout = ({ children, noNavbar, noFooter }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Layout>
      {!noNavbar && <MainNavbar />}
      <Content style={{ padding: "20px" }}>
        <Row justify="center">
          <Col span={20}>{children}</Col>
        </Row>
      </Content>
      {!noFooter && <MainFooter />}
    </Layout>
  </Layout>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false,
};

export default DefaultLayout;
