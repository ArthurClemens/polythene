import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, Slider } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Slider, renderer }).concat(reactTests),
  renderer
});
