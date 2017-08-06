import { runSnapshots } from "../../tests/scripts/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, Icon, List, ListTile } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ renderer, Icon, List, ListTile }).concat(reactTests),
  renderer
});
