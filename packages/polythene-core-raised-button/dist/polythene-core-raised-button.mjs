import { isTouch, subscribe, touchEndEvent, touchStartEvent } from 'polythene-core';
import { styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

var rgba = vars.rgba;

var vars$1 = {
  color_light_background: "#e0e0e0", // grey-300
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_hover_background: "transparent",
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover), // same as hover
  color_light_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  color_dark_background: rgba(vars.color_primary),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_hover_background: vars.color_primary_active,
  color_dark_focus_background: vars.color_primary_active,
  color_dark_active_background: vars.color_primary_dark,
  color_dark_disabled_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      borderColor: normalBorder
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_disabled_background"],
        borderColor: disabledBorder
      }
    },

    ".pe-button--selected": {
      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_active_background"],
        borderColor: activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"];
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [color];
var selector = "." + classes.component.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

var theme = customTheme;

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

subscribe(touchEndEvent, function () {
  return tapEndAll();
});

var animateZ = function animateZ(which, vnode) {
  var zBase = vnode.state.zBase;
  var increase = vnode.attrs.increase || 1;
  var z = vnode.state.z();
  var newZ = which === "down" && zBase < MAX_Z ? Math.min(zBase + increase, MAX_Z) : which === "up" ? Math.max(z - increase, zBase) : z;
  if (newZ !== z) {
    vnode.state.updateZ(newZ);
  }
};

var tapHandler = function tapHandler(which, vnode) {
  if (which === "down") {
    downButtons.push(_extends({}, vnode));
  }
  // no z animation on touch
  var animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;
  if (animateOnTap && !isTouch) {
    animateZ(which, vnode);
  }
};

var initTapEvents = function initTapEvents(vnode) {
  tapStart = function tapStart() {
    return tapHandler("down", vnode);
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (buttonVnode) {
      return tapHandler("up", buttonVnode);
    });
    downButtons = [];
  };
  vnode.dom.addEventListener(touchStartEvent, tapStart);
};

var clearTapEvents = function clearTapEvents(vnode) {
  return vnode.dom.removeEventListener(touchStartEvent, tapStart);
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var zValue = attrs.z !== undefined ? attrs.z : 1;
  var z = createStream(zValue);
  var redraw = createStream();
  var updateZ = function updateZ(newZ) {
    return z(newZ), redraw(newZ);
  };
  var tapEventsInited = createStream(false);
  return {
    zBase: zValue,
    z: z,
    updateZ: updateZ,
    tapEventsInited: tapEventsInited,
    redrawOnUpdate: createStream.merge([redraw])
  };
};

var onMount = function onMount(vnode) {
  if (vnode.dom && !vnode.attrs.disabled && !vnode.attrs.inactive && !vnode.state.tapEventsInited()) {
    initTapEvents(vnode);
    vnode.state.tapEventsInited(true);
  }
};

var onUnMount = function onUnMount(vnode) {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      Shadow = _ref.Shadow;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = attrs.children || vnode.children || [];
  return _extends({}, {
    parentClassName: [attrs.parentClassName || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: h(Shadow, { z: state.z, animated: true }),
    children: children
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

var raisedButton = Object.freeze({
	theme: theme,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

export { raisedButton as coreRaisedButton, classes, vars$1 as vars };
