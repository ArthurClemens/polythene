import { StateComponent, renderer } from 'polythene-mithril-base';
import { Multi } from 'polythene-core';
import { coreSnackbarInstance, transitions } from 'polythene-core-snackbar';

var notificationClasses = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

var classes = Object.assign({}, notificationClasses, {
  component: "pe-notification pe-snackbar",
  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",
  // states
  open: "pe-snackbar--open"
});

const SnackbarInstance = StateComponent(coreSnackbarInstance);
SnackbarInstance.displayName = "SnackbarInstance";
const options = {
  name: "snackbar",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_snackbar",
  holderSelector: `.${classes.holder}`,
  instance: SnackbarInstance,
  placeholder: `span.${classes.placeholder}`,
  queue: true,
  transitions
};
const Multiple = Multi({
  options,
  renderer
});
const Snackbar = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Snackbar[p] = Multiple[p]);
Snackbar.displayName = "Snackbar";

export { SnackbarInstance, Snackbar };
