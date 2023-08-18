/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Progress } from "antd";
import { useStateValue } from "../../StateProvider";

const UserDetails = ({ userDetails }) => {
  const [{ user }] = useStateValue();

  return (
    <Card className="mb-4 pt-3">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={user?.photoURL}
          alt=""
          width="110"
        />
      </div>
      <Card.Title>Dr. {user?.displayName}</Card.Title>
      <Card.Text className="text-muted">{userDetails.jobTitle}</Card.Text>
      <Button type="primary" shape="round" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button>
      <Card.Body>
        <div>
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            percent={userDetails.performanceReportValue}
          />
          <span className="progress-value">
            {userDetails.performanceReportValue}%
          </span>
        </div>
        <div>
          <strong className="text-muted d-block mb-2">
            {userDetails.metaTitle}
          </strong>
          <span>{userDetails.metaValue}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

UserDetails.propTypes = {
  userDetails: PropTypes.shape({
    jobTitle: PropTypes.string,
    performanceReportTitle: PropTypes.string,
    performanceReportValue: PropTypes.number,
    metaTitle: PropTypes.string,
    metaValue: PropTypes.string,
  }),
};

UserDetails.defaultProps = {
  userDetails: {
    jobTitle: "Physician",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Ph.D | MBBS | Delhi University",
    metaValue:
      "Demonstrated work in the field of Physiology and more than 1k+ successful cases of patients!",
  },
};

export default UserDetails;
