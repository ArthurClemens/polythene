import m from 'mithril';
import { filterSupportedAttributes } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

var vars$1 = {
  transition: "box-shadow 0.18s ease-out",

  "shadow-top-z-1": "none",
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

var shadowDirective = function shadowDirective(dir) {
  return mixin.vendorize({
    "box-shadow": dir
  }, vars.prefixes_box_shadow);
};

var createStyles = function createStyles(componentVars) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  var selector = className + ".pe-shadow";
  return [defineProperty({}, selector, [mixin.fit(), {
    "border-radius": "inherit",
    "pointer-events": "none",

    " .pe-shadow__bottom, .pe-shadow__top": [mixin.fit(), {
      "border-radius": "inherit"
    }],

    "&.pe-shadow--animated": {
      " .pe-shadow__bottom, .pe-shadow__top": mixin.vendorize({
        "transition": componentVars.transition
      }, vars.prefixes_transition)
    }
  }, [1, 2, 3, 4, 5].map(function (index) {
    var _ref;

    return _ref = {}, defineProperty(_ref, " .pe-shadow__top.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-top-z-" + index])), defineProperty(_ref, " .pe-shadow__bottom.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-bottom-z-" + index])), _ref;
  })])];
};

var layout = (function (componentVars) {
  return styler.createStyles(componentVars, createStyles);
});

// Does not contain any color styles

var key = "shadow";
var className = "pe-shadow";

var styleComponent = function styleComponent(className, styles$$1) {
  return styler.styleComponent(className, styles$$1, key, vars$1, layout);
};

var customTheme = function customTheme(className, vars$$1) {
  return (
    // Inject additional styles as use the className as key
    styleComponent(className, styler.addComponentStyle(className, styles, key, vars$$1))
  );
};

styleComponent(className, styles);

var classes = {
  component: "pe-shadow",
  topShadow: "pe-shadow__top",
  bottomShadow: "pe-shadow__bottom",
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.animated && classes.animated, attrs.class].join(" ")
  });
  var children = vnode.children.length && vnode.children || attrs.children;
  var content = attrs.content ? attrs.content : children && children[0] ? children : null;
  var shadowContent = [content, m("div", {
    class: [classes.bottomShadow, depthClass].join(" ")
  }), m("div", {
    class: [classes.topShadow, depthClass].join(" ")
  })];
  return m(element, props, [attrs.before, shadowContent, attrs.after]);
};

var shadow = {
  theme: customTheme, // accepts (className, vars)
  view: view
};

export { shadow, vars$1 as shadowVars };
