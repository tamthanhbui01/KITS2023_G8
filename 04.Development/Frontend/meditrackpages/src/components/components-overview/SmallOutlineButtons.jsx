/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "antd";

const SmallOutlineButtons = () => (
  <div>
    <Button size="small" type="primary" className="mb-2 mr-1" ghost>
      Primary
    </Button>
    <Button size="small" type="secondary" className="mb-2 mr-1" ghost>
      Secondary
    </Button>
    <Button size="small" type="success" className="mb-2 mr-1" ghost>
      Success
    </Button>
    <Button size="small" type="danger" className="mb-2 mr-1" ghost>
      Danger
    </Button>
    <Button size="small" type="warning" className="mb-2 mr-1" ghost>
      Warning
    </Button>
    <Button size="small" type="info" className="mb-2 mr-1" ghost>
      Info
    </Button>
    <Button size="small" type="dark" className="mb-2 mr-1" ghost>
      Dark
    </Button>
    <Button size="small" type="default" className="mb-2 mr-1" ghost>
      Light
    </Button>
  </div>
);

export default SmallOutlineButtons;
