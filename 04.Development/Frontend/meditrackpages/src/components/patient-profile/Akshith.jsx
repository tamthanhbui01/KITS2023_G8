/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Card, Button, List } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Akshith = ({ patientDetails }) => (
  <Card className="mb-4" style={{ paddingTop: "3rem" }}>
    <div className="text-center">
      <img
        className="rounded-circle"
        src={patientDetails.avatar}
        alt={patientDetails.name}
        width={110}
      />
    </div>
    <Meta
      title={<h4>{patientDetails.name}</h4>}
      description={
        <span className="text-muted d-block mb-2">{patientDetails.email}</span>
      }
    />
    <Button
      tag={Link}
      to="messages/zI8Pb1QtL7yELimxFDxo"
      shape="round"
      size="small"
      style={{ marginBottom: "2px" }}
    >
      <i className="material-icons mr-1">chat</i> Send Message
    </Button>
    <List>
      <List.Item>
        <strong className="text-muted d-block mb-2">
          {patientDetails.metaTitle}
        </strong>
        <span>{patientDetails.metaValue}</span>
      </List.Item>
    </List>
  </Card>
);

Akshith.propTypes = {
  patientDetails: PropTypes.object,
};

Akshith.defaultProps = {
  patientDetails: {
    name: "Alex",
    email: "alex@gmail.com",
    metaTitle: "Notes",
    metaValue: "This patient has had a case of wrist fracture last reported",
  },
};

export default Akshith;
