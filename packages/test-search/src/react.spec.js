import { runSnapshots } from "../../tests/scripts/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, Search } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ renderer, Search }).concat(reactTests),
  renderer
});
