import m from 'mithril';
import { button } from 'polythene-button';
import { shadow } from 'polythene-shadow';
import { isTouch, subscribe, touchEndEvent, touchStartEvent } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

var rgba = vars.rgba;

var vars$1 = {
  color_light_background: "#E0E0E0",
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

var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var style = function style(componentVars, tint) {
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [defineProperty({}, scope + ".pe-button", {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      "background-color": componentVars["color_" + tint + "_background"],
      "border-color": normalBorder
    },

    "&.pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        "background-color": componentVars["color_" + tint + "_disabled_background"],
        "border-color": disabledBorder
      }
    },

    "&.pe-button--selected": {
      " .pe-button__content": {
        "background-color": componentVars["color_" + tint + "_active_background"],
        "border-color": activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        "background-color": componentVars["color_" + tint + "_focus_background"]
      }
    },

    "&.pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        "background-color": componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouch = function noTouch(componentVars, tint, type) {
  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  var normalBorder = componentVars["color_" + tint + "_border"];
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [defineProperty({}, scope + ".pe-button:hover", {
    "&:not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      "background-color": componentVars["color_" + tint + "_hover_background"],
      "border-color": hoverBorder
    }
  })];
};

var createStyles = function createStyles(componentVars) {
  return [style(componentVars, "light", ".pe-button--raised"), {
    "html.pe-no-touch": [noTouch(componentVars, "light", " .pe-button--raised")]
  }, {
    ".pe-dark-theme": [style(componentVars, "dark", " .pe-button--raised")]
  }, {
    "html.pe-no-touch .pe-dark-theme": [noTouch(componentVars, "dark", " .pe-button--raised")]
  }];
};

var color = (function (componentVars) {
  return mixin.createStyles(componentVars, createStyles);
});

// No layout
var key = "raised-button";
var className = "pe-button--raised";

var styleComponent = function styleComponent(className, styles$$1) {
  return styler.styleComponent(className, styles$$1, key, vars$1, color);
};

var customTheme = function customTheme(className, vars$$1) {
  return (
    // Inject additional styles as use className as key
    styleComponent(className, styler.addComponentStyle(className, styles, key, vars$$1))
  );
};

styleComponent(className, styles);

var classes = {
  component: "pe-button pe-button--text pe-button--raised"
};

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

subscribe(touchEndEvent, function () {
  return tapEndAll();
});

var animateZ = function animateZ(state, attrs, name) {
  var zBase = state.zBase;
  var increase = attrs.increase || 1;
  var z = state.z;
  if (name === "down" && zBase !== 5) {
    z = Math.min(z + increase, MAX_Z);
  } else if (name === "up") {
    z = Math.max(z - increase, zBase);
  }
  if (z !== state.z) {
    state.z = z;
    m.redraw(); // show shadow animation
  }
};

var inactivate = function inactivate(state, attrs) {
  state.inactive = true;
  m.redraw();
  setTimeout(function () {
    state.inactive = false;
    m.redraw();
  }, attrs.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, state, attrs) {
  var tapHandler = function tapHandler(state, attrs, name) {
    if (name === "down") {
      downButtons.push({
        state: state,
        attrs: attrs
      });
    } else if (name === "up") {
      if (attrs.inactivate && !state.inactive) {
        inactivate(state, attrs);
      }
    }
    // no z animation on touch
    var animateOnTap = attrs.animateOnTap !== false ? true : false;
    if (animateOnTap && !isTouch) {
      animateZ(state, attrs, name);
    }
  };
  tapStart = function tapStart() {
    return tapHandler(state, attrs, "down");
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (btn) {
      tapHandler(btn.state, btn.attrs, "up");
    });
    downButtons = [];
  };
  el.addEventListener(touchStartEvent, tapStart);
};

var clearTapEvents = function clearTapEvents(el) {
  el.removeEventListener(touchStartEvent, tapStart);
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = vnode.children.length && vnode.children || attrs.children;
  return m(button, _extends({}, {
    parentClass: [attrs.parentClass || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: m(shadow, { z: state.z, animated: true }),
    children: children
  }, attrs));
};

var raisedButton = {
  theme: customTheme, // accepts (className, vars)
  oninit: function oninit(vnode) {
    var z = vnode.attrs.z !== undefined ? vnode.attrs.z : 1;
    vnode.state = {
      el: undefined,
      zBase: z,
      z: z,
      tapEventsInited: false
    };
  },
  oncreate: function oncreate(vnode) {
    if (!vnode.attrs.disabled && !vnode.state.inactive && !vnode.state.tapEventsInited) {
      vnode.state.el = vnode.dom;
      initTapEvents(vnode.dom, vnode.state, vnode.attrs);
      vnode.state.tapEventsInited = true;
    }
  },
  onremove: function onremove(vnode) {
    if (vnode.state.tapEventsInited) {
      clearTapEvents(vnode.dom);
    }
  },
  view: view
};

export { raisedButton, vars$1 as raisedButtonVars };
