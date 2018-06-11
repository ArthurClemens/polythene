(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-notification')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-notification'], factory) :
  (factory((global.polythene = {}),global['polythene-core-notification']));
}(this, (function (exports,polytheneCoreNotification) { 'use strict';

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

  exports.coreSnackbarInstance = polytheneCoreNotification.coreNotificationInstance;
  exports.transitions = transitions;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-snackbar.js.map
