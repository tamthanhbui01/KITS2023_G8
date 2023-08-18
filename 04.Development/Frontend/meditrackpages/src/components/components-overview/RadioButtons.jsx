/* eslint-disable no-unused-vars */
import React from "react";
import { Radio } from "antd";

const RadioButtons = () => (
  <div className="mb-3">
    <strong className="text-muted d-block mb-2">Radio Buttons</strong>
    <Radio>Default</Radio>
    <Radio defaultChecked>Checked</Radio>
    <Radio disabled>Disabled</Radio>
    <Radio disabled defaultChecked>
      Disabled Checked
    </Radio>
  </div>
);

export default RadioButtons;
