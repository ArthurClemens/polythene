import m from 'mithril';
import { filterSupportedAttributes } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { appConfig, componentsConfig } from 'polythene-config';

var componentConfig = {
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
  }, appConfig.prefixes_box_shadow);
};

var createStyles = function createStyles(config) {
  return [{
    ".pe-shadow": [mixin.fit(), {
      "border-radius": "inherit",
      "pointer-events": "none",

      " .pe-shadow__bottom, .pe-shadow__top": [mixin.fit(), {
        "border-radius": "inherit"
      }],

      "&.pe-shadow--animated": {
        " .pe-shadow__bottom, .pe-shadow__top": mixin.vendorize({
          "transition": config.transition
        }, appConfig.prefixes_transition)
      }
    }, [1, 2, 3, 4, 5].map(function (index) {
      var _ref;

      return _ref = {}, defineProperty(_ref, " .pe-shadow__top.pe-shadow--z-" + index, shadowDirective(config["shadow-top-z-" + index])), defineProperty(_ref, " .pe-shadow__bottom.pe-shadow--z-" + index, shadowDirective(config["shadow-bottom-z-" + index])), _ref;
    })]
  }];
};

var layout = (function (config) {
  return mixin.createStyles(config, createStyles);
});

// Does not contain any color styles

styler.styleComponent("pe-shadow", "shadow", componentsConfig, componentConfig, layout);

var CSS_CLASSES = {
  component: "pe-shadow",
  topShadow: "pe-shadow__top",
  bottomShadow: "pe-shadow__bottom",
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var depthClass = "" + CSS_CLASSES.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [CSS_CLASSES.component, attrs.animated && CSS_CLASSES.animated, attrs.class].join(" ")
  });
  var content = [attrs.content && attrs.content, m("div", {
    class: [CSS_CLASSES.bottomShadow, depthClass].join(" ")
  }), m("div", {
    class: [CSS_CLASSES.topShadow, depthClass].join(" ")
  })];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var shadow = {
  view: view
};

export { shadow, componentConfig as shadowConfig };
