import { isRTL } from 'polythene-core';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-drawer",

  // states
  push: "pe-drawer--push",
  permanent: "pe-drawer--permanent",
  bordered: "pe-drawer--bordered"
};

var SHADOW_WIDTH = 10;

var show = function show(_ref) {
  var contentEl = _ref.contentEl,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;

  var rtl = isRTL({ element: contentEl });
  var side = rtl ? "right" : "left";

  return {
    el: contentEl,
    showDuration: showDuration,
    showDelay: showDelay || 0,
    showTimingFunction: "ease-out",
    beforeShow: function beforeShow() {
      var rect = contentEl.getBoundingClientRect();
      var width = rect.width + SHADOW_WIDTH;
      contentEl.style.top = 0;
      contentEl.style[side] = "-" + width + "px";
    },
    show: function show() {
      contentEl.style[side] = 0;
    }
  };
};

var hide = function hide(_ref2) {
  var contentEl = _ref2.contentEl,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;

  var rtl = isRTL({ element: contentEl });
  var side = rtl ? "right" : "left";

  return {
    el: contentEl,
    hideDuration: hideDuration,
    hideDelay: hideDelay || 0,
    hideTimingFunction: "ease-out",
    hide: function hide() {
      var rect = contentEl.getBoundingClientRect();
      var width = rect.width + SHADOW_WIDTH;
      contentEl.style[side] = "-" + width + "px";
    }
  };
};

var defaultCoverTransitions = {
  show: show,
  hide: hide,
  name: "over-from-left"
};

var show$1 = function show(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;

  var rtl = isRTL({ element: el });
  var side = rtl ? "marginRight" : "marginLeft";

  return {
    el: el,
    showDuration: showDuration,
    showDelay: showDelay || 0,
    showTimingFunction: "ease-out",
    beforeShow: function beforeShow() {
      var rect = el.getBoundingClientRect();
      var width = rect.width;
      el.style[side] = "-" + width + "px";
    },
    show: function show() {
      el.style[side] = 0;
    }
  };
};

var hide$1 = function hide(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;

  var rtl = isRTL({ element: el });
  var side = rtl ? "marginRight" : "marginLeft";

  return {
    el: el,
    hideDuration: hideDuration,
    hideDelay: hideDelay || 0,
    hideTimingFunction: "ease-out",
    hide: function hide() {
      var rect = el.getBoundingClientRect();
      var width = rect.width;
      el.style[side] = "-" + width + "px";
    }
  };
};

var defaultPushTransitions = {
  show: show$1,
  hide: hide$1,
  name: "push-from-left"
};

var SHOW_DELAY = .050; // add a little time so to start after the sliding
var ANIMATION_DURATION = .320; // longer than slide transition

var show$2 = function show(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration || ANIMATION_DURATION,
    showDelay: showDelay || SHOW_DELAY,
    showTimingFunction: "ease-out",
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show() {
      return el.style.opacity = 1;
    }
  };
};

var hide$2 = function hide(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration || ANIMATION_DURATION,
    hideDelay: hideDelay || 0,
    hideTimingFunction: "ease-out",
    hide: function hide() {
      return el.style.opacity = 0;
    }
  };
};

var defaultBackdropTransitions = {
  show: show$2,
  hide: hide$2
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Props to be passed to a dialog
var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    anchored: true,
    fullBleed: true,
    className: [attrs.className, classes.component, attrs.push ? classes.push : null, attrs.permanent ? classes.permanent : null, attrs.bordered ? classes.bordered : null].join(" "),
    transitions: attrs.transitions ? attrs.transitions : attrs.push ? defaultPushTransitions : defaultCoverTransitions,
    backdropTransitions: attrs.backdropTransitions || defaultBackdropTransitions
  });
};

var createContent = function createContent() {
  return null;
};

var drawer = Object.freeze({
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var content_side_offset = vars.grid_unit_component * 7; // 56
var content_side_offset_large = vars.grid_unit_component * 8; // 64
var content_max_width = 5 * vars.increment;
var content_max_width_large = 5 * vars.increment_large;

var vars$1 = {
  content_side_offset: content_side_offset,
  content_side_offset_large: content_side_offset_large,
  content_max_width: content_max_width,
  content_max_width_large: content_max_width_large,

  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
};

export { drawer as coreDrawer, vars$1 as vars };
