import { multiple } from "polythene-core";
import instance from "./dialog-instance";

export default multiple({
  instance,
  defaultId:     "default_dialog",
  element:       ".pe-dialog__holder",
  placeholder:   "span.pe-dialog__placeholder",
  bodyShowClass: "pe-dialog--open"
});
