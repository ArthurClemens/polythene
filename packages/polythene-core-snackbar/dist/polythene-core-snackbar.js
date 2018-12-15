(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-notification')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-notification'], factory) :
  (factory((global.polythene = {}),global['polythene-core-notification']));
}(this, (function (exports,polytheneCoreNotification) { 'use strict';

  const DEFAULT_DURATION = 0.4;

  const show = ({
    containerEl,
    el,
    duration,
    delay
  }) => {
    return {
      el: containerEl,
      duration: duration || DEFAULT_DURATION,
      delay: delay || 0,
      before: () => {
        el.style.display = "block";
        const height = el.getBoundingClientRect().height;
        containerEl.style.transform = `translate3d(0, ${height}px, 0)`;
      },
      transition: () => containerEl.style.transform = "translate3d(0, 0px, 0)"
    };
  };

  const hide = ({
    containerEl,
    el,
    duration,
    delay
  }) => {
    return {
      el: containerEl,
      duration: duration || DEFAULT_DURATION,
      delay: delay || 0,
      transition: () => {
        const height = el.getBoundingClientRect().height;
        containerEl.style.transform = `translate3d(0, ${height}px, 0)`;
      },
      // reset to original position to counter the removal of the snackbar instance
      after: () => {
        // prevent a "bounce back"
        el.style.display = "none";
        containerEl.style.transitionDuration = "0ms";
        containerEl.style.transform = "translate3d(0, 0px, 0)";
      }
    };
  };

  var transitions = {
    show,
    hide
  };

  exports.coreSnackbarInstance = polytheneCoreNotification.coreNotificationInstance;
  exports.transitions = transitions;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-snackbar.js.map
