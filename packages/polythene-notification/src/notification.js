import { multiple } from "polythene-core";
import instance from "./instance";
import classes from "./classes";
import transitions from "./theme/transitions";

export default multiple({
  instance,
  transitions,
  queue:         true,
  defaultId:     "default_notification",
  className:         classes.component,
  element:       `.${classes.holder}`,
  placeholder:   `span.${classes.placeholder}`,
  bodyShowClass: classes.open
});
