import { runSnapshots } from "../../tests/scripts/react-snapshots";
import { renderer, MaterialDesignSpinner, iOSSpinner } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ MaterialDesignSpinner, iOSSpinner, renderer }).concat(reactTests),
  renderer
});
