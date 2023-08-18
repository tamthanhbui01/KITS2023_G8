/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "antd";

const SmallButtons = () => (
  <div className="mb-3 mt-2">
    <Button size="small" type="primary" className="mb-2 mr-1">
      Primary
    </Button>
    <Button size="small" type="secondary" className="mb-2 mr-1">
      Secondary
    </Button>
    <Button size="small" type="success" className="mb-2 mr-1">
      Success
    </Button>
    <Button size="small" type="danger" className="mb-2 mr-1">
      Danger
    </Button>
    <Button size="small" type="warning" className="mb-2 mr-1">
      Warning
    </Button>
    <Button size="small" type="info" className="mb-2 mr-1">
      Info
    </Button>
    <Button size="small" type="dark" className="mb-2 mr-1">
      Dark
    </Button>
    <Button size="small" type="default" className="mb-2 mr-1">
      White
    </Button>
  </div>
);

export default SmallButtons;
