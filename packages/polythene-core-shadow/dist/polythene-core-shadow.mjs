import { filterSupportedAttributes } from 'polythene-core';

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-shadow",
  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-"
};

var getDepthClass = function getDepthClass(shadowDepth) {
  return shadowDepth !== undefined ? "".concat(classes.depth_n).concat(Math.min(5, shadowDepth)) : null;
};
var _Shadow = function _Shadow(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var depthClass = getDepthClass(props.shadowDepth);

  var componentProps = _extends({}, filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, depthClass, props.animated && classes.animated, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before, props.content ? props.content : props.children, props.after];
  return h(props.element || "div", componentProps, [content, h("div", {
    key: "bottom",
    className: [classes.bottomShadow].join(" ")
  }), h("div", {
    key: "top",
    className: [classes.topShadow].join(" ")
  })]);
};

export { _Shadow, getDepthClass };
