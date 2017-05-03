import { multiple } from "polythene-core-essentials";
import instance from "./instance";
import classes from "./classes";
import transitions from "./theme/transitions";

export default multiple({
  instance,
  transitions,
  queue:         true,
  defaultId:     "default_snackbar",
  class:         classes.component,
  element:       `.${classes.holder.replace(/ /g, ".")}`,
  placeholder:   `span.${classes.placeholder.replace(/ /g, ".")}`,
  bodyShowClass: classes.open
});
