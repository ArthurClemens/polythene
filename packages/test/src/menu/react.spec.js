import { runSnapshots } from "../../scripts/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, Menu, List, ListTile } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ renderer, Menu, List, ListTile }).concat(reactTests),
  renderer
});
