/* eslint-disable no-unused-vars */
import React from "react";
import { Switch } from "antd";

const ToggleButtons = () => (
  <div className="mb-3">
    <strong className="text-muted d-block mb-2">Toggle Switches</strong>
    <div>
      <Switch size="small" />
      <Switch size="small" defaultChecked />
      <Switch size="small" disabled />
      <Switch size="small" defaultChecked disabled />
    </div>
  </div>
);

export default ToggleButtons;
