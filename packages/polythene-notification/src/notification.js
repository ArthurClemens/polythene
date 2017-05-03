import { multiple } from "polythene-core-essentials";
import instance from "./instance";
import classes from "./classes";
import transitions from "./theme/transitions";

export default multiple({
  instance,
  transitions,
  queue:         true,
  defaultId:     "default_notification",
  class:         classes.component,
  element:       `.${classes.holder}`,
  placeholder:   `span.${classes.placeholder}`,
  bodyShowClass: classes.open
});
