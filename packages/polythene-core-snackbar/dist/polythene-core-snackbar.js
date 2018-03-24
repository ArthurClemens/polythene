(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-notification'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-notification', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-notification'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreNotification,polytheneTheme) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var coreSnackbarInstance = _extends({}, polytheneCoreNotification.coreNotificationInstance);

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = _extends$1({}, polytheneCoreNotification.vars, {
    border_radius: 0,
    min_width: 288,
    max_width: 568,
    min_height: 0,

    color_dark_background: rgba(polytheneTheme.vars.color_dark_background)
  });

  var DEFAULT_DURATION = 0.4;

  var show = function show(_ref) {
    var containerEl = _ref.containerEl,
        el = _ref.el,
        duration = _ref.duration,
        delay = _ref.delay;

    return {
      el: containerEl,
      duration: duration || DEFAULT_DURATION,
      delay: delay || 0,
      before: function before() {
        el.style.display = "block";
        var height = el.getBoundingClientRect().height;
        containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
      },
      transition: function transition() {
        return containerEl.style.transform = "translate3d(0, 0px, 0)";
      }
    };
  };

  var hide = function hide(_ref2) {
    var containerEl = _ref2.containerEl,
        el = _ref2.el,
        duration = _ref2.duration,
        delay = _ref2.delay;

    return {
      el: containerEl,
      duration: duration || DEFAULT_DURATION,
      delay: delay || 0,
      transition: function transition() {
        var height = el.getBoundingClientRect().height;
        containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
      },
      // reset to original position to counter the removal of the snackbar instance
      after: function after() {
        // prevent a "bounce back"
        el.style.display = "none";
        containerEl.style.transitionDuration = "0ms";
        containerEl.style.transform = "translate3d(0, 0px, 0)";
      }
    };
  };

  var transitions = {
    show: show,
    hide: hide
  };

  exports.coreSnackbarInstance = coreSnackbarInstance;
  exports.vars = vars;
  exports.transitions = transitions;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-snackbar.js.map
