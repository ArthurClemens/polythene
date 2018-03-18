import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, keys, RadioButton, RadioGroup } from "polythene-mithril";
import specTestsRadioButton from "./spec-tests-radio-button.js";
import specTestsRadioGroup from "./spec-tests-radio-group.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTestsRadioButton({ RadioButton, renderer, keys }).concat(specTestsRadioGroup({ RadioGroup, renderer, keys })).concat(mithrilTests),
  renderer
});
