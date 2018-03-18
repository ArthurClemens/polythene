import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, Toolbar, ToolbarTitle } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Toolbar, ToolbarTitle, renderer }).concat(reactTests),
  renderer
});
