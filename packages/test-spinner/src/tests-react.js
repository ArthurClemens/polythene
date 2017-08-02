import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, RaisedButton, iOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider } from "polythene-react";
import genericTests from "./tests-generic";
import ProgressSlider from "./components/progress-slider-react-hyperscript";

const reactTests = ({ Shadow, renderer: h, keys: k }) => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Interactive (animated, updateDuration) -- Material Design Progress Spinner (hyperscript)",
      component: () =>
        <ProgressSlider updateDuration={0.3} />
    },
    {
      section: "React JSX tests",
    },
    {
      name: "Option: permanent (JSX) -- Material Design Spinner",
      component: () =>
        <MaterialDesignSpinner permanent />
    },
  ];
};

export default []
  .concat(genericTests({ RaisedButton, iOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, renderer, keys }))
  .concat(reactTests({ RaisedButton, iOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, renderer, keys }));
