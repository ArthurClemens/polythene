import { classes as coreMenuClasses } from "polythene-core-menu";

export default {
  component:         "pe-dialog",

  // elements
  placeholder:       "pe-dialog__placeholder",
  holder:            "pe-dialog__holder",
  content:           "pe-dialog__content",

  // states
  fullScreen:        "pe-dialog--full-screen",
  backdrop:          "pe-dialog--backdrop",
  open:              "pe-dialog--open",

  // lookup
  menuContent:       coreMenuClasses.content,
};
