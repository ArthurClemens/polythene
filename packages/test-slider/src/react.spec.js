import { runSnapshots } from "../../tests/scripts/react-snapshots";
import { renderer, Slider } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Slider, renderer }).concat(reactTests),
  renderer
});
