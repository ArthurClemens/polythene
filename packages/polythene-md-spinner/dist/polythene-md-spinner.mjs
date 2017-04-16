import m from 'mithril';
import transition, { filterSupportedAttributes } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-shadow",
  topShadow: "pe-shadow__top",
  bottomShadow: "pe-shadow__bottom",
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var vars$1 = {
  transition: "box-shadow " + vars.animation_duration + " ease-out",

  "shadow-top-z-1": "initial",
  "shadow-bottom-z-1": "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  "shadow-top-z-2": "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  "shadow-bottom-z-2": "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-3": "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  "shadow-bottom-z-3": "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-4": "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  "shadow-bottom-z-4": "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-5": "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  "shadow-bottom-z-5": "0 27px 55px 0 rgba(0, 0, 0, 0.3)",

  "shadow-down-z-1": "inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)",
  "shadow-down-z-2": "inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var shadowDirective = function shadowDirective(dir) {
  return {
    boxShadow: dir
  };
};

var layout = function layout(selector, componentVars) {
  return [_defineProperty({}, selector, [mixin.fit(), {
    borderRadius: "inherit",
    pointerEvents: "none",

    " .pe-shadow__bottom, .pe-shadow__top": [mixin.fit(), {
      borderRadius: "inherit"
    }],

    ".pe-shadow--animated": {
      " .pe-shadow__bottom, .pe-shadow__top": {
        transition: componentVars.transition
      }
    }
  }, [1, 2, 3, 4, 5].map(function (index) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, " .pe-shadow__top.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-top-z-" + index])), _defineProperty(_ref, " .pe-shadow__bottom.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-bottom-z-" + index])), _ref;
  })])];
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var fns = [layout];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends$1$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var view$1 = function view(vnode) {
  var attrs = vnode.attrs;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  var element = attrs.element || "div";
  var props = _extends$1$1({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.animated && classes.animated, attrs.class].join(" ")
  });
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var shadowContent = [content, m("div", {
    class: [classes.bottomShadow, depthClass].join(" ")
  }), m("div", {
    class: [classes.topShadow, depthClass].join(" ")
  })];
  return m(element, props, [attrs.before, shadowContent, attrs.after]);
};

var shadow = {
  theme: customTheme, // accepts (selector, vars)
  view: view$1
};

var classes$1 = {
  component: "pe-spinner",
  placeholder: "pe-spinner__placeholder",
  animation: "pe-spinner__animation",
  visible: "pe-spinner--visible",
  small: "pe-spinner--small",
  regular: "pe-spinner--regular",
  medium: "pe-spinner--medium",
  large: "pe-spinner--large",
  fab: "pe-spinner--fab",
  raised: "pe-spinner--raised",
  permanent: "pe-spinner--permanent",
  singleColor: "pe-spinner--single-color",
  animated: "pe-spinner--animated"
};

var rgba = vars.rgba;

var vars$1$1 = {
  size_small: 3 * vars.grid_unit_component,
  size_regular: 4 * vars.grid_unit_component,
  size_medium: 5 * vars.grid_unit_component,
  size_large: 6 * vars.grid_unit_component,
  size_fab: 7 * vars.grid_unit_component,

  color_light_raised_background: rgba(vars.color_light_background),
  // also use light background with dark theme
  color_dark_raised_background: rgba(vars.color_light_background)
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sizes = function sizes(size) {
  return {
    width: size + "px",
    height: size + "px"
  };
};

var sizesRaised = function sizesRaised(size) {
  var padding = size / 4;
  var paddedSize = size + padding * 2;
  return {
    width: paddedSize + "px",
    height: paddedSize + "px",
    padding: padding + "px"
  };
};

var layout$1 = (function (selector, componentVars) {
  return [_defineProperty$1({}, selector, {
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    opacity: 0,

    ".pe-spinner--visible, &.pe-spinner--permanent": {
      opacity: 1
    },

    ".pe-spinner--small": sizes(componentVars.size_small),
    ".pe-spinner--regular": sizes(componentVars.size_regular),
    ".pe-spinner--medium": sizes(componentVars.size_medium),
    ".pe-spinner--large": sizes(componentVars.size_large),
    ".pe-spinner--fab": sizes(componentVars.size_fab),

    ".pe-spinner--raised": {
      position: "relative",
      borderRadius: "50%",

      ".pe-spinner--small": sizesRaised(componentVars.size_small),
      ".pe-spinner--regular": sizesRaised(componentVars.size_regular),
      ".pe-spinner--medium": sizesRaised(componentVars.size_medium),
      ".pe-spinner--large": sizesRaised(componentVars.size_large),
      ".pe-spinner--fab": sizesRaised(componentVars.size_fab)
    }
  })];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    ".pe-spinner--raised": {
      backgroundColor: componentVars["color_" + tint + "_raised_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns$1 = [layout$1, color];
var selector$1 = "." + classes$1.component;

var customTheme$1 = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector$1], _extends$2({}, vars$1$1, customVars), fns$1);
};

styler.generateStyles([selector$1], vars$1$1, fns$1);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var typeClasses = {
  small: classes$1.small,
  regular: classes$1.regular,
  medium: classes$1.medium,
  large: classes$1.large,
  fab: classes$1.fab
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var show = function show(state, attrs) {
  if (state.isTransitioning) {
    return;
  }
  state.isTransitioning = true;
  return transition.show(_extends({}, attrs, {
    el: state.el,
    showClass: classes$1.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = true;
  });
};

var hide = function hide(state, attrs) {
  if (state.isTransitioning) {
    return;
  }
  state.isTransitioning = true;
  return transition.hide(_extends({}, attrs, {
    el: state.el,
    afterHide: function afterHide() {
      return state.el.style.display = "none";
    },
    showClass: classes$1.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = false;
    state.hide = false;
    m.redraw(); // removes remainder of drawn component
  });
};

var delay = function delay(attrs, mode) {
  var value = attrs[mode];
  return value !== true && !isNaN(value) ? parseFloat(value, 10) * 1000 : false;
};

var notifyState = function notifyState(state, attrs) {
  if (attrs.percentage && attrs.getPercentage) {
    var percentage = typeof attrs.percentage === "function" ? attrs.percentage() : attrs.percentage;
    attrs.getPercentage(percentage, state, attrs);
  }
};

var createView = function createView(state, attrs) {
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes$1.component, classForType(attrs.type), attrs.singleColor ? classes$1.singleColor : null, attrs.raised ? classes$1.raised : null, attrs.animated ? classes$1.animated : null, attrs.permanent ? classes$1.permanent : null, attrs.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      notifyState(state, attrs);
      if (!attrs.permanent) {
        setTimeout(function () {
          return show(state, attrs);
        }, 0);
      }
    }
  }, attrs.events ? attrs.events : null);

  notifyState(state, attrs);

  if (state.hide) {
    setTimeout(function () {
      hide(state, attrs);
    }, 0);
  }

  var content = [attrs.raised && attrs.content ? m.component(shadow, { z: attrs.z }) : null, attrs.content || m("div", { class: classes$1.animation }, "Specific spinner missing")];

  return m(element, props, [attrs.before, content, attrs.after]);
};

var view = function view(state, attrs) {
  if (!state.visible) {
    if (attrs.hide !== undefined && !attrs.hide || attrs.show) {
      var showDelay = delay(attrs, "show");
      if (showDelay) {
        setTimeout(function () {
          state.visible = true;
          m.redraw();
        }, showDelay);
      } else {
        state.visible = true;
      }
    }
  } else {
    if (attrs.show !== undefined && !attrs.show || attrs.hide) {
      var hideDelay = delay(attrs, "hide");
      if (hideDelay) {
        setTimeout(function () {
          state.hide = true;
          m.redraw();
        }, hideDelay);
      } else {
        state.hide = true;
      }
    }
  }
  return state.visible ? createView(state, attrs) : m("span", { class: classes$1.placeholder });
};

var spinner = {
  theme: customTheme$1, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    vnode.state = _extends(vnode.state, {
      el: null,
      isTransitioning: false,
      visible: vnode.attrs.permanent || false,
      hide: false,
      percentage: 0
    });
  },
  view: view
};

export { classes$1 as classes, vars$1$1 as vars };export default spinner;
