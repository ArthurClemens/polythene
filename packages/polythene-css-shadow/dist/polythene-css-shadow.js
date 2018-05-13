(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-shadow']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreShadow) { 'use strict';

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

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var shadowDirective = function shadowDirective(which, num) {
    return function (selector, vars) {
      return sel(selector, _defineProperty({}, " .pe-shadow__" + which + ".pe-shadow--z-" + num, {
        boxShadow: vars["shadow_" + which + "_z_" + num]
      }));
    };
  };

  var varFns = _extends({}, {
    general_styles: function general_styles(selector) {
      return [sel(selector, [polytheneCoreCss.mixin.fit(), {
        borderRadius: "inherit",
        pointerEvents: "none",

        " .pe-shadow__bottom, .pe-shadow__top": [polytheneCoreCss.mixin.fit(), {
          borderRadius: "inherit"
        }]
      }])];
    },
    transition: function transition(selector, vars) {
      return [sel(selector, {
        ".pe-shadow--animated": {
          " .pe-shadow__bottom, .pe-shadow__top": {
            transition: vars.transition
          }
        }
      })];
    }
    // shadow_top_z_1: (selector, vars) =>
    //   sel(selector, {
    //     " .pe-shadow__top.pe-shadow--z-1": {
    //       boxShadow: vars.shadow_top_z_1
    //     }
    //   }),
    // shadow_bottom_z_1: (selector, vars) =>
    //   sel(selector, {
    //     " .pe-shadow__bottom.pe-shadow--z-1": {
    //       boxShadow: vars.shadow_bottom_z_1
    //     }
    //   })
  }, [1, 2, 3, 4, 5].reduce(function (acc, num) {
    return acc["shadow_top_z_" + num] = shadowDirective("top", num), acc["shadow_bottom_z_" + num] = shadowDirective("bottom", num), acc;
  }, {}));

  var layout = (function (selector, componentVars, customVars) {
    var allVars = _extends({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  });

  var fns = [layout];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreShadow.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreShadow.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreShadow.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreShadow.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-shadow.js.map
