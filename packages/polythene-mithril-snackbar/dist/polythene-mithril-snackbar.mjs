import { ComponentCreator, renderer } from 'polythene-mithril-base';
import { Multi } from 'polythene-core';
import { coreSnackbar, transitions } from 'polythene-core-snackbar';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

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

var classes = _objectSpread({}, notificationClasses, {
  component: "pe-notification pe-snackbar",
  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",
  // states
  open: "pe-snackbar--open"
});

// @ts-check
var SnackbarInstance = ComponentCreator(coreSnackbar);
SnackbarInstance["displayName"] = "SnackbarInstance";
var options = {
  name: "snackbar",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_snackbar",
  holderSelector: ".".concat(classes.holder),
  instance: SnackbarInstance,
  placeholder: "span.".concat(classes.placeholder),
  queue: true,
  transitions: transitions
};
var Multiple = Multi({
  options: options,
  renderer: renderer
});
var Snackbar = ComponentCreator(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Snackbar[p] = Multiple[p];
});
Snackbar["displayName"] = "Snackbar";

export { SnackbarInstance, Snackbar };
