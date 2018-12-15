(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core'), require('polythene-core-snackbar')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core', 'polythene-core-snackbar'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core'],global['polythene-core-snackbar']));
}(this, (function (exports,polytheneMithrilBase,polytheneCore,polytheneCoreSnackbar) { 'use strict';

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

  const SnackbarInstance = polytheneMithrilBase.StateComponent(polytheneCoreSnackbar.coreSnackbarInstance);
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
    transitions: polytheneCoreSnackbar.transitions
  };
  const Multiple = polytheneCore.Multi({
    options,
    renderer: polytheneMithrilBase.renderer
  });
  const Snackbar = polytheneMithrilBase.StateComponent(Multiple);
  Object.getOwnPropertyNames(Multiple).forEach(p => Snackbar[p] = Multiple[p]);
  Snackbar.displayName = "Snackbar";

  exports.SnackbarInstance = SnackbarInstance;
  exports.Snackbar = Snackbar;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-snackbar.js.map
