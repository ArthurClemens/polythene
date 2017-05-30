import m from 'mithril';
import { filterSupportedAttributes, hide, show } from 'polythene-core';
import { Shadow } from 'polythene-mithril';
import { styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-spinner",

  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",

  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var rgba = vars.rgba;

var vars$1 = {
  size_small: 3 * vars.grid_unit_component,
  size_regular: 4 * vars.grid_unit_component,
  size_medium: 5 * vars.grid_unit_component,
  size_large: 6 * vars.grid_unit_component,
  size_fab: 7 * vars.grid_unit_component,

  raisedSize: function raisedSize(size) {
    var padding = size * 0.25;
    var paddedSize = size + padding * 2;
    return { padding: padding, paddedSize: paddedSize };
  },

  color_light_raised_background: rgba(vars.color_light_background),
  // also use light background with dark tone
  color_dark_raised_background: rgba(vars.color_light_background)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sizes = function sizes(size) {
  return {
    width: size + "px",
    height: size + "px"
  };
};

var raisedSize = function raisedSize(size, componentVars) {
  var _componentVars$raised = componentVars.raisedSize(size),
      padding = _componentVars$raised.padding,
      paddedSize = _componentVars$raised.paddedSize;

  return {
    width: paddedSize + "px",
    height: paddedSize + "px",
    padding: padding + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
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

      ".pe-spinner--small": raisedSize(componentVars.size_small, componentVars),
      ".pe-spinner--regular": raisedSize(componentVars.size_regular, componentVars),
      ".pe-spinner--medium": raisedSize(componentVars.size_medium, componentVars),
      ".pe-spinner--large": raisedSize(componentVars.size_large, componentVars),
      ".pe-spinner--fab": raisedSize(componentVars.size_fab, componentVars)
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    ".pe-spinner--raised": {
      backgroundColor: componentVars["color_" + tint + "_raised_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large,
  fab: classes.fab
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var showSpinner = function showSpinner(state, attrs) {
  if (state.isTransitioning) {
    return;
  }
  state.isTransitioning = true;
  return show(_extends({}, attrs, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = true;
  });
};

var hideSpinner = function hideSpinner(state, attrs) {
  if (state.isTransitioning) {
    return;
  }
  state.isTransitioning = true;
  return hide(_extends({}, attrs, {
    el: state.el,
    afterHide: function afterHide() {
      return state.el.style.display = "none";
    },
    showClass: classes.visible
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
    className: [classes.component, attrs.instanceClass, classForType(attrs.type), attrs.singleColor ? classes.singleColor : null, attrs.raised ? classes.raised : null, attrs.animated ? classes.animated : null, attrs.permanent ? classes.permanent : null, attrs.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      notifyState(state, attrs);
      if (!attrs.permanent) {
        setTimeout(function () {
          return showSpinner(state, attrs);
        }, 0);
      }
    }
  }, attrs.events);

  notifyState(state, attrs);

  if (state.hide) {
    setTimeout(function () {
      hideSpinner(state, attrs);
    }, 0);
  }

  var content = [attrs.raised && attrs.content ? m(Shadow, { z: attrs.z }) : null, attrs.content || m("div", { className: classes.animation }, "Specific spinner missing")];

  return m(element, props, [attrs.before, content, attrs.after]);
};

var view = function view(_ref2) {
  var state = _ref2.state,
      attrs = _ref2.attrs;

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
  return state.visible ? createView(state, attrs) : m("span", { className: classes.placeholder });
};

var spinner = {
  theme: customTheme, // accepts (selector, vars)
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

export { classes, vars$1 as vars };export default spinner;
