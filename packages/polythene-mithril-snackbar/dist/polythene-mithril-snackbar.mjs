import { StateComponent, renderer } from 'polythene-mithril-base';
import { Multi } from 'polythene-core';
import { classes, coreSnackbarInstance, transitions } from 'polythene-core-snackbar';

var SnackbarInstance = StateComponent(coreSnackbarInstance);

SnackbarInstance.displayName = "SnackbarInstance";

var options = {
  name: "snackbar",
  className: classes.component,
  bodyShowClass: classes.open,
  defaultId: "default_snackbar",
  holderSelector: "." + classes.holder,
  instance: SnackbarInstance,
  placeholder: "span." + classes.placeholder,
  queue: true,
  transitions: transitions
};

var Multiple = Multi({ options: options, renderer: renderer });
var Snackbar = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Snackbar[p] = Multiple[p];
});

Snackbar.displayName = "Snackbar";

export { SnackbarInstance, Snackbar };
