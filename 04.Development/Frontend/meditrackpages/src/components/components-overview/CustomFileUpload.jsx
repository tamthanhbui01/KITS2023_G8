/* eslint-disable no-unused-vars */
import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CustomFileUpload = () => (
  <div className="custom-file mb-3">
    <Upload>
      <Button icon={<UploadOutlined />}>Choose file...</Button>
    </Upload>
  </div>
);

export default CustomFileUpload;
