import { Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, h, a }))
  .concat(mithrilTests({ Button, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, h, a }));
