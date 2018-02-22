import menuClasses from "./menu";

export default {
  component:         "pe-dialog",

  // elements
  placeholder:       "pe-dialog__placeholder",
  holder:            "pe-dialog__holder",
  content:           "pe-dialog__content",
  backdrop:          "pe-dialog__backdrop",

  // states
  fullScreen:        "pe-dialog--full-screen",
  open:              "pe-dialog--open",

  // lookup
  menuContent:       menuClasses.content,
};
