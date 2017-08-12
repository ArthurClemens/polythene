import { renderer, keys, RaisedButton, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ RaisedButton, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, renderer, keys }))
  .concat(mithrilTests({ RaisedButton, IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, renderer, keys }));
