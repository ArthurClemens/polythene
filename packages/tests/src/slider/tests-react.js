import React from "react";
import { Slider, Icon, TextField } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import RGBSlider from "./components/rgb-slider-react";

const reactTests = ({ Slider, h, a }) => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Option: ticks with pin (JSX)",
      interactive: true,
      component: () =>
        <Slider 
          min={0}
          max={100}
          stepSize={10}
          defaultValue={50}
          pin
          ticks
        />
    },
    {
      name: "With an editable numeric value (JSX)",
      interactive: true,
      component: () => <RGBSlider />
    }
  ];
};

export default []
  .concat(genericTests({ Slider, Icon, TextField, h, a }))
  .concat(reactTests({ Slider, Icon, TextField, h, a }));
