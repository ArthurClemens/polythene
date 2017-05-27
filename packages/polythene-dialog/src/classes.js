import { classes as coreMenuClasses } from "polythene-core-menu";

export default {
  component:         "pe-dialog",

  // elements
  actions:           "pe-dialog__actions",
  body:              "pe-dialog__body",
  content:           "pe-dialog__content",
  footer:            "pe-dialog__footer",
  header:            "pe-dialog__header",
  title:             "pe-dialog__title",

  // states
  footerHigh:        "pe-dialog__footer--high",
  fullscreen:        "pe-dialog--fullscreen",
  hasBackdrop:       "pe-dialog--backdrop",
  hasBottomOverflow: "pe-dialog--overflow-bottom",
  hasTopOverflow:    "pe-dialog--overflow-top",
  visible:           "pe-dialog--visible",

  // lookup
  menuContent:       coreMenuClasses.content,
};
