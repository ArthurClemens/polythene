import { coreNotificationInstance, vars } from 'polythene-core-notification';
import { vars as vars$1 } from 'polythene-theme';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var coreSnackbarInstance = _extends({}, coreNotificationInstance);

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$2 = _extends$1({}, vars, {
  border_radius: 0,
  tablet_min_width: 288,
  tablet_max_width: 568,
  min_height: 0,

  color_dark_background: rgba(vars$1.color_dark_background)
});

var show = function show(_ref) {
  var containerEl = _ref.containerEl,
      el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;

  var height = el.getBoundingClientRect().height;
  return {
    el: containerEl,
    showDuration: showDuration || .4,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.visibility = "initial", containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    show: function show() {
      return containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var hide = function hide(_ref2) {
  var containerEl = _ref2.containerEl,
      el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;

  var height = el.getBoundingClientRect().height;
  return {
    el: containerEl,
    hideDuration: hideDuration || .4,
    hideDelay: hideDelay || 0,
    hide: function hide() {
      return containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    // reset to original position to counter the removal of the snackbar instance
    afterHide: function afterHide() {
      return (
        // prevent a "bounce back"
        containerEl.style.transitionDuration = "0ms",
        // prevent flickering when snackbar instance is not yet removed (in case a next snackbars is shown)
        el.style.visibility = "hidden", containerEl.style.transform = "translate3d(0, 0px, 0)"
      );
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};

export { coreSnackbarInstance, vars$2 as vars, transitions };
