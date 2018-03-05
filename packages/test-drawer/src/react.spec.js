import { runSnapshots } from "../../tests/scripts/react-snapshots";
import { renderer, keys, Drawer } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Drawer, renderer, keys }).concat(reactTests),
  renderer
});
