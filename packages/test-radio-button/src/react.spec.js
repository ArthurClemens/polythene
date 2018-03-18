import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, keys, RadioButton, RadioGroup } from "polythene-react";
import specTestsRadioButton from "./spec-tests-radio-button.js";
import specTestsRadioGroup from "./spec-tests-radio-group.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTestsRadioButton({ RadioButton, renderer, keys }).concat(specTestsRadioGroup({ RadioGroup, renderer, keys })).concat(reactTests),
  renderer
});
