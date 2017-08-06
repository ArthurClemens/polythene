import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, keys, Button, RaisedButton, Dialog, DialogInstance } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ renderer, keys, Button, RaisedButton, Dialog, DialogInstance }).concat(mithrilTests),
  renderer
});
