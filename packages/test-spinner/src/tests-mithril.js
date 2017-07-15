import { renderer, keys, RaisedButton, iOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ RaisedButton, iOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, renderer, keys }))
  .concat(mithrilTests({ RaisedButton, iOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner, Slider, renderer, keys }));
