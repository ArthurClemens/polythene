import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Slider, Icon, TextField } from "polythene-react";
import genericTests from "./tests-generic";
import RGBSlider from "./components/rgb-slider-react";

const reactTests = ({ Slider, renderer: h, keys: k }) => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React JSX tests",
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
  .concat(genericTests({ Slider, Icon, TextField, renderer, keys }))
  .concat(reactTests({ Slider, Icon, TextField, renderer, keys }));
