import { createLayout, sel, mixin, styler } from 'polythene-core-css';
import { vars as vars$1 } from 'polythene-theme';

var classes = {
  component: "pe-shadow",
  // elements      
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-",
  with_active_shadow: "pe-with-active-shadow"
};

function _defineProperty(obj, key, value) {
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
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var _createShadowForSelector = function _createShadowForSelector(which, depth) {
  return function (selector, vars) {
    return [_createRegularShadowForSelector(which, depth, selector, vars), _createActiveShadowForSelector(which, depth, selector, vars)];
  };
};

var _createRegularShadowForSelector = function _createRegularShadowForSelector(which, depth, selector, vars) {
  return sel(selector, _defineProperty({}, ".pe-shadow--depth-".concat(depth, " .pe-shadow__").concat(which), {
    boxShadow: vars["shadow_".concat(which, "_depth_").concat(depth)]
  }));
};

var _createActiveShadowForSelector = function _createActiveShadowForSelector(which, depth, selector, vars) {
  if (depth === 5) {
    return [];
  }

  var hoverDepth = depth + 1;
  var hoverSelector = ".pe-with-active-shadow.pe-shadow--depth-".concat(hoverDepth);
  return [sel("".concat(hoverSelector, ":focus ").concat(selector, ", ").concat(hoverSelector, ":active ").concat(selector), _defineProperty({}, " .pe-shadow__".concat(which), {
    boxShadow: vars["shadow_".concat(which, "_depth_").concat(hoverDepth)]
  }))];
};

var _createActiveShadowTransition = function _createActiveShadowTransition(selector, vars) {
  return sel(".pe-with-active-shadow ".concat(selector), {
    " .pe-shadow__bottom, .pe-shadow__top": {
      transition: vars.transition
    }
  });
};
/**
 * @param {string} selector 
 * @param {object} vars 
 * @param {number} depth 
 * @param {"top"|"bottom"} which 
 */


var _createShadow = function _createShadow(selector, vars, depth, which) {
  return sel(selector, _defineProperty({}, " .pe-shadow__".concat(which), {
    boxShadow: vars["shadow_".concat(which, "_depth_").concat(depth)]
  }));
};
/**
 * @param {string} selector 
 * @param {object} vars 
 * @param {number} depth
 * @returns {object}
 */


var shadow = function shadow(selector, vars, depth) {
  return [_createShadow(selector, vars, depth, "top"), _createShadow(selector, vars, depth, "bottom")];
};
/**
 * @param {string} selector 
 * @param {object} vars 
 * @returns {object}
 */


var shadow_depth = function shadow_depth(selector, vars) {
  return vars.shadow_depth !== undefined ? shadow(selector, vars, vars.shadow_depth) : null;
};

var transition = function transition(selector, vars) {
  return [sel(selector, {
    ".pe-shadow--animated": {
      " .pe-shadow__bottom, .pe-shadow__top": {
        transition: vars.transition
      }
    }
  }), _createActiveShadowTransition(selector, vars)];
};

var sharedVarFns = {
  shadow_depth: shadow_depth
};

var varFns = _extends({}, {
  general_styles: function general_styles(selector, vars) {
    return [sel(selector, [mixin.fit(), shadow(selector, vars, 1), {
      borderRadius: "inherit",
      pointerEvents: "none",
      " .pe-shadow__bottom, .pe-shadow__top": [mixin.fit(), {
        borderRadius: "inherit"
      }]
    }])];
  },
  transition: transition,
  shadow_depth: shadow_depth
}, [0, 1, 2, 3, 4, 5].reduce(function (acc, depth) {
  return acc["shadow_top_depth_".concat(depth)] = _createShadowForSelector("top", depth), acc["shadow_bottom_depth_".concat(depth)] = _createShadowForSelector("bottom", depth), acc;
}, {}));

var layout = createLayout({
  varFns: varFns
});

var sharedVars = {
  shadow_top_depth_0: "none",
  shadow_bottom_depth_0: "none",
  shadow_top_depth_1: "none",
  shadow_bottom_depth_1: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
  shadow_top_depth_2: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  shadow_bottom_depth_2: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_3: "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  shadow_bottom_depth_3: "0 13px 25px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_4: "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  shadow_bottom_depth_4: "0 20px 40px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_5: "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  shadow_bottom_depth_5: "0 27px 55px 0 rgba(0, 0, 0, 0.3)",
  // theme vars
  shadow_depth: undefined
};
var vars = _objectSpread2({
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  transition: "box-shadow ".concat(vars$1.animation_duration, " ease-out")
}, sharedVars);

// @ts-check
var fns = [layout];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, vars);
var getStyle = styler.createGetStyle(selector, fns, vars);

var addGeneralStyleToHead = function addGeneralStyleToHead() {
  return styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });
};

export { addGeneralStyleToHead, addStyle, getStyle, layout, sharedVarFns, sharedVars, vars };
