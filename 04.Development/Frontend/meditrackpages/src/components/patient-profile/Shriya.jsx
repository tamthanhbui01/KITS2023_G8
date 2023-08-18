/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Card, Button, List } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Shriya = ({ patientDetails }) => (
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
      to="messages/gm1MdKf4H6q38W00g8M6"
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

Shriya.propTypes = {
  patientDetails: PropTypes.object,
};

Shriya.defaultProps = {
  patientDetails: {
    name: "Helen",

    email: "helen@gmail.com",
    metaTitle: "Notes",
    metaValue: "This patient has been diagnosed as Covid +ve",
  },
};

export default Shriya;
