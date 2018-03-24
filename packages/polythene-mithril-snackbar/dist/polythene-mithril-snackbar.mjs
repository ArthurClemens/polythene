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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = _extends({}, notificationClasses, {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var SnackbarInstance = StateComponent(coreSnackbarInstance);

SnackbarInstance.displayName = "SnackbarInstance";

var options = {
  name: "snackbar",
  className: classes.component,
  htmlShowClass: classes.open,
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
