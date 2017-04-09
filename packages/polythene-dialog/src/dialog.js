import { multiple } from "polythene-core";
import instance from "./instance";
import transitions from "./theme/transitions";

export default multiple({
  instance,
  transitions,
  defaultId:     "default_dialog",
  element:       ".pe-dialog__holder",
  placeholder:   "span.pe-dialog__placeholder",
  bodyShowClass: "pe-dialog--open"
});
