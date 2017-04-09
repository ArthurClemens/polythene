import { multiple } from "polythene-core";
import instance from "./instance";
import transitions from "./theme/transitions";

export default multiple({
  instance,
  transitions,
  class:         "pe-notification",
  defaultId:     "default_notification",
  element:       ".pe-notification__holder",
  placeholder:   "span.pe-notification__placeholder",
  bodyShowClass: "pe-notification--open",
  queue:         true
});
