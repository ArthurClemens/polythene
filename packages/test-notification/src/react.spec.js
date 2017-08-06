import { runSnapshots } from "../../tests/scripts/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, keys, Notification, NotificationInstance } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ renderer, keys, Notification, NotificationInstance }).concat(reactTests),
  renderer
});
