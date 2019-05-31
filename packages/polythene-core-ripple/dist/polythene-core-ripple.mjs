import { isTouch, getAnimationEndEvent, isServer, pointerEndEvent, filterSupportedAttributes } from 'polythene-core';
import { vars } from 'polythene-theme';

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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ANIMATION_END_EVENT = getAnimationEndEvent();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var addStyleToHead = function addStyleToHead(id, stylesheet) {
  if (isServer) return;
  var documentRef = window.document;
  var styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

var removeStyleFromHead = function removeStyleFromHead(id) {
  if (isServer) return;
  var el = document.getElementById(id);

  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

var animation = (function (_ref) {
  var e = _ref.e,
      id = _ref.id,
      el = _ref.el,
      props = _ref.props,
      classes = _ref.classes;
  return new Promise(function (resolve) {
    var container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    var waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
    var rect = el.getBoundingClientRect();
    var x = isTouch && e.touches ? e.touches[0].pageX : e.clientX;
    var y = isTouch && e.touches ? e.touches[0].pageY : e.clientY;
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var mx = props.center ? rect.left + rect.width / 2 : x;
    var my = props.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var startOpacity = props.startOpacity !== undefined ? props.startOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = props.opacityDecayVelocity !== undefined ? props.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var endOpacity = props.endOpacity || DEFAULT_END_OPACITY;
    var startScale = props.startScale || DEFAULT_START_SCALE;
    var endScale = props.endScale || DEFAULT_END_SCALE;
    var duration = props.duration ? props.duration : 1 / opacityDecayVelocity * 0.2;
    var color = window.getComputedStyle(el).color;
    var style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = props.animationTimingFunction || vars.animation_curve_default;
    var rippleStyleSheet = "@keyframes ".concat(id, " {\n      0% {\n        transform:scale(").concat(startScale, ");\n        opacity: ").concat(startOpacity, "\n      }\n      100% {\n        transform:scale(").concat(endScale, ");\n        opacity: ").concat(endOpacity, ";\n      }\n    }");
    addStyleToHead(id, rippleStyleSheet);

    var animationDone = function animationDone(evt) {
      removeStyleFromHead(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);

      if (props.persistent) {
        style.opacity = endOpacity;
        style.transform = "scale(" + endScale + ")";
      } else {
        waves.classList.remove(classes.wavesAnimating);
        container.removeChild(waves);
        el.removeChild(container);
      }

      resolve(evt);
    };

    waves.addEventListener(ANIMATION_END_EVENT, animationDone, false);
    waves.classList.add(classes.wavesAnimating);
  });
});

var classes = {
  component: "pe-ripple",
  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",
  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var useAnimationsState = function useAnimationsState(_ref) {
  var useState = _ref.useState;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      animations = _useState2[0],
      setAnimations = _useState2[1];

  return [animations, function (addId, animation) {
    return setAnimations(_extends({}, animations, _defineProperty({}, addId, animation)));
  }, function (removeId) {
    var updated = _extends({}, animations);

    delete updated[removeId];
    setAnimations(updated);
  }];
};

var _Ripple = function _Ripple(_ref2) {
  var h = _ref2.h,
      a = _ref2.a,
      getRef = _ref2.getRef,
      useState = _ref2.useState,
      useEffect = _ref2.useEffect,
      props = _objectWithoutProperties(_ref2, ["h", "a", "getRef", "useState", "useEffect"]);

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      domElement = _useState4[0],
      setDomElement = _useState4[1];

  var _useAnimationsState = useAnimationsState({
    useState: useState
  }),
      _useAnimationsState2 = _slicedToArray(_useAnimationsState, 3),
      animations = _useAnimationsState2[0],
      addAnimation = _useAnimationsState2[1],
      removeAnimation = _useAnimationsState2[2];

  var isAnimating = animations ? Object.keys(animations).length > 0 : false;
  var triggerEl = props.target || (domElement ? domElement.parentElement : undefined);

  var tap = function tap(e) {
    if (props.disabled || !domElement || !props.multi && isAnimating) {
      return;
    }

    if (props.start) {
      props.start(e);
    }

    var id = "ripple_animation_".concat(new Date().getTime());
    var rippleAnimation = animation({
      e: e,
      id: id,
      el: domElement,
      props: props,
      classes: classes
    }).then(function (evt) {
      if (props.end) {
        props.end(evt);
      }

      removeAnimation(id);
    });
    addAnimation(id, rippleAnimation);
  };

  useEffect(function () {
    if (triggerEl && triggerEl.addEventListener) {
      pointerEndEvent.forEach(function (evt) {
        return triggerEl.addEventListener(evt, tap, false);
      });
      return function () {
        pointerEndEvent.forEach(function (evt) {
          return triggerEl.removeEventListener(evt, tap, false);
        });
      };
    }
  }, [triggerEl]);

  var componentProps = _extends({}, filterSupportedAttributes(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.unconstrained ? classes.unconstrained : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before, props.after];
  return h(props.element || "div", componentProps, content);
};

export { _Ripple };
