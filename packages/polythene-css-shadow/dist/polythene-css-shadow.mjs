import { mixin, sel, createLayout, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-shadow",

  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",

  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shadowDirective = function shadowDirective(which, num) {
  return function (selector, vars$$1) {
    return sel(selector, _defineProperty({}, " .pe-shadow__" + which + ".pe-shadow--z-" + num, {
      boxShadow: vars$$1["shadow_" + which + "_z_" + num]
    }));
  };
};

var varFns = _extends({}, {
  general_styles: function general_styles(selector) {
    return [sel(selector, [mixin.fit(), {
      borderRadius: "inherit",
      pointerEvents: "none",

      " .pe-shadow__bottom, .pe-shadow__top": [mixin.fit(), {
        borderRadius: "inherit"
      }]
    }])];
  },
  transition: function transition(selector, vars$$1) {
    return [sel(selector, {
      ".pe-shadow--animated": {
        " .pe-shadow__bottom, .pe-shadow__top": {
          transition: vars$$1.transition
        }
      }
    })];
  }
}, [1, 2, 3, 4, 5].reduce(function (acc, num) {
  return acc["shadow_top_z_" + num] = shadowDirective("top", num), acc["shadow_bottom_z_" + num] = shadowDirective("bottom", num), acc;
}, {}));

var layout = createLayout({
  varFns: varFns
});

var vars$1 = {
  general_styles: true,

  transition: "box-shadow " + vars.animation_duration + " ease-out",

  shadow_top_z_1: "initial",
  shadow_bottom_z_1: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  shadow_top_z_2: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  shadow_bottom_z_2: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_3: "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  shadow_bottom_z_3: "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_4: "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  shadow_bottom_z_4: "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_5: "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  shadow_bottom_z_5: "0 27px 55px 0 rgba(0, 0, 0, 0.3)"
};

var fns = [layout];
var selector = "." + classes.component;

var addStyle = styler.createAddStyle(selector, fns, vars$1);

var getStyle = styler.createGetStyle(selector, fns, vars$1);

styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, getStyle, layout, vars$1 as vars };
