import React from "react";
import { Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";

const reactTests = () => {
  return [
    {
      section: "React specific tests",
    },
    {
      name: "Option: permanent -- Material Design Spinner (JSX)",
      component: () =>
        <MaterialDesignSpinner permanent />
    },
    {
      name: "Option: permanent -- iOS Spinner (JSX)",
      component: () =>
        <IOSSpinner permanent />
    },
  ];
};

export default []
  .concat(genericTests({ Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, h, a }))
  .concat(reactTests({ Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, h, a }));
