import { StateComponent, renderer } from "polythene-mithril-base";
import { Multi } from "polythene-core";
import { coreSnackbarInstance as core, transitions, classes } from "polythene-core-snackbar";

export const SnackbarInstance = StateComponent(core);

SnackbarInstance.displayName = "SnackbarInstance";

const options = {
  name:           "snackbar",
  className:      classes.component,
  bodyShowClass:  classes.open,
  defaultId:      "default_snackbar",
  holderSelector: `.${classes.holder}`,
  instance:       SnackbarInstance,
  placeholder:    `span.${classes.placeholder}`,
  queue:          true,
  transitions
};

const Multiple = Multi({ options, renderer });
export const Snackbar = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Snackbar[p] = Multiple[p]);

Snackbar.displayName = "Snackbar";
