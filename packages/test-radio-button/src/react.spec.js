import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, keys, RadioButton } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ RadioButton, renderer, keys }).concat(reactTests),
  renderer
});
