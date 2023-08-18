/* eslint-disable no-unused-vars */
import React from "react";
import { Input } from "antd";

const { Group, Addon } = Input;

const InputGroups = () => (
  <div>
    <Group compact className="mb-3">
      <Addon addonBefore="@">
        <Input placeholder="Username" />
      </Addon>
    </Group>

    <Group compact className="mb-3">
      <Input defaultValue="catalin" onChange={() => {}} />
      <Addon addonAfter="@designrevision.com">
        <Input />
      </Addon>
    </Group>

    <Group compact className="mb-3">
      <Addon addonBefore="$">
        <Input defaultValue="1000" onChange={() => {}} />
      </Addon>
      <Addon addonAfter=".00">
        <Input />
      </Addon>
    </Group>
  </div>
);

export default InputGroups;
