import { getStyle, unpackAttrs, styleDurationToMs } from 'polythene-core';
import { easing } from 'polythene-utilities';

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var classes = {
  component: "pe-md-progress-spinner",
  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var percentageValue = function percentageValue(min, max) {
  var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(domElement, min, max, percentage) {
  var style = domElement.style;
  style["transform"] = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

var animate = function animate(stateEl, size, percentage) {
  var animationEl = stateEl.querySelector("." + classes.animation);
  var animationElStyle = animationEl.style;

  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }

  var leftCircle = stateEl.querySelector("." + classes.circleLeft);
  var rightCircle = stateEl.querySelector("." + classes.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

var updateWithPercentage = function updateWithPercentage(_ref) {
  var domElement = _ref.domElement,
      isAnimating = _ref.isAnimating,
      setIsAnimating = _ref.setIsAnimating,
      percentage = _ref.percentage,
      setPercentage = _ref.setPercentage,
      size = _ref.size,
      props = _ref.props;

  if (!domElement || isAnimating || size === undefined || props.percentage === undefined) {
    return;
  }

  var currentPercentage = unpackAttrs(props.percentage);
  var previousPercentage = percentage;

  if (previousPercentage !== currentPercentage) {
    var easingFn = props.animated ? easing.easeInOutQuad : function (v) {
      return v;
    };

    if (props.animated) {
      var animationDuration = props.updateDuration !== undefined ? props.updateDuration * 1000 : styleDurationToMs(getStyle({
        element: domElement.querySelector(".".concat(classes.animation)),
        prop: "animation-duration"
      }));
      var start = null;

      var step = function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var stepPercentage = 1.0 / animationDuration * progress;
        var newPercentage = previousPercentage + stepPercentage * (currentPercentage - previousPercentage);
        animate(domElement, size, easingFn(newPercentage));

        if (start && progress < animationDuration) {
          window.requestAnimationFrame(step);
        } else {
          start = null;
          setPercentage(currentPercentage);
          setIsAnimating(false);
        }
      };

      setIsAnimating(true);
      window.requestAnimationFrame(step);
    } else {
      animate(domElement, size, easingFn(currentPercentage));
      setPercentage(currentPercentage);
    }
  }
};

var getSize = function getSize(element) {
  return Math.round(element ? parseFloat(getStyle({
    element: element,
    prop: "height"
  })) - 2 * parseFloat(getStyle({
    element: element,
    prop: "padding"
  })) : 0);
};

var _Spinner = function _Spinner(_ref2) {
  var h = _ref2.h,
      useState = _ref2.useState,
      useEffect = _ref2.useEffect,
      BaseSpinner = _ref2.BaseSpinner,
      props = _objectWithoutProperties(_ref2, ["h", "useState", "useEffect", "BaseSpinner"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      percentage = _useState2[0],
      setPercentage = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAnimating = _useState4[0],
      setIsAnimating = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      domElement = _useState6[0],
      setDomElement = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      size = _useState8[0],
      setSize = _useState8[1];

  useEffect(function () {
    if (!domElement) {
      return;
    }

    setSize(getSize(domElement));
  }, [domElement]);
  updateWithPercentage({
    domElement: domElement,
    isAnimating: isAnimating,
    percentage: percentage,
    setPercentage: setPercentage,
    setIsAnimating: setIsAnimating,
    size: size,
    props: props
  });
  var content = props.content || h("div", {
    className: classes.animation,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, [h("div", {
    className: [classes.circle, classes.circleLeft].join(" ")
  }), h("div", {
    className: [classes.circle, classes.circleRight].join(" ")
  })]);

  var componentProps = _extends({}, props, {
    ref: function ref(dom) {
      return dom && !domElement && setDomElement(dom);
    },
    className: [classes.component, props.className].join(" "),
    content: content
  });

  return h(BaseSpinner, componentProps);
};

export { _Spinner };
