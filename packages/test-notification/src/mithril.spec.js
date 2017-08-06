import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, keys, Notification, NotificationInstance } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ renderer, keys, Notification, NotificationInstance }).concat(mithrilTests),
  renderer
});
