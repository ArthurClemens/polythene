import { runSnapshots } from "../../tests/scripts/react-snapshots";
import { renderer, MaterialDesignSpinner, IOSSpinner } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ MaterialDesignSpinner, IOSSpinner, renderer }).concat(reactTests),
  renderer
});
