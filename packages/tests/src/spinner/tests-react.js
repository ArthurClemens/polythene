import React from "react";
import { Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import ProgressSlider from "./components/progress-slider-react-hyperscript";

const reactTests = () => {
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
    {
      name: "Option: permanent (JSX) -- iOS Spinner",
      component: () =>
        <IOSSpinner permanent />
    },
  ];
};

export default []
  .concat(genericTests({ Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, h, a }))
  .concat(reactTests({ Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, h, a }));
