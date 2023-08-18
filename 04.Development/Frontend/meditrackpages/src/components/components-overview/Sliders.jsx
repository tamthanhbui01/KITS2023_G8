// eslint-disable-next-line no-unused-vars
import React from "react";
import { Slider } from "antd";

const Sliders = () => (
  <div className="px-3">
    <div className="mb-2 pb-1">
      <strong className="text-muted d-block">Custom Sliders</strong>
      <Slider
        className="my-4"
        defaultValue={85}
        tooltipVisible
        range={{ draggableTrack: true }}
      />
      <Slider
        className="my-4"
        defaultValue={15}
        tooltipVisible
        range={{ draggableTrack: true }}
      />
      <Slider
        className="my-4"
        range={{ draggableTrack: true }}
        defaultValue={[35, 65]}
        marks={{ 0: 0, 25: 25, 50: 50, 75: 75, 100: 100 }}
        step={null}
      />
    </div>
  </div>
);

export default Sliders;
