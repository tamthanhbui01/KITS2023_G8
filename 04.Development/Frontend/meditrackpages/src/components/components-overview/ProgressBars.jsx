/* eslint-disable no-unused-vars */
import React from "react";
import { Progress } from "antd";

const ProgressBars = () => (
  <div className="px-3">
    <div className="mb-2">
      <strong className="text-muted d-block mb-3">Progress Bars</strong>
      <Progress style={{ height: "5px" }} percent={50} className="mb-3" />
      <Progress
        type="success"
        style={{ height: "5px" }}
        className="mb-3"
        percent={40}
      />
      <Progress
        type="info"
        style={{ height: "5px" }}
        className="mb-3"
        percent={60}
      />
      <Progress
        type="danger"
        style={{ height: "5px" }}
        className="mb-3"
        percent={80}
      />
    </div>
  </div>
);

export default ProgressBars;
