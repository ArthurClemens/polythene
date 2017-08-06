import { runSnapshots } from "../../tests/scripts/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, keys, Button, DialogPane } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ renderer, keys, Button, DialogPane }).concat(reactTests),
  renderer
});
