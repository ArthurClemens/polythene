import { getAnimationEndEvent, isTouch, isServer, filterSupportedAttributes, pointerEndEvent } from 'polythene-core';
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
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
      attrs = _ref.attrs,
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
    var mx = attrs.center ? rect.left + rect.width / 2 : x;
    var my = attrs.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var startOpacity = attrs.startOpacity !== undefined ? attrs.startOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
    var startScale = attrs.startScale || DEFAULT_START_SCALE;
    var endScale = attrs.endScale || DEFAULT_END_SCALE;
    var duration = attrs.duration ? attrs.duration : 1 / opacityDecayVelocity * 0.2;
    var color = window.getComputedStyle(el).color;
    var style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = attrs.animationTimingFunction || vars.animation_curve_default;
    var rippleStyleSheet = "@keyframes ".concat(id, " {\n      0% {\n        transform:scale(").concat(startScale, ");\n        opacity: ").concat(startOpacity, "\n      }\n      100% {\n        transform:scale(").concat(endScale, ");\n        opacity: ").concat(endOpacity, ";\n      }\n    }");
    addStyleToHead(id, rippleStyleSheet);

    var animationDone = function animationDone(evt) {
      removeStyleFromHead(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);

      if (attrs.persistent) {
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

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};
var getInitialState = function getInitialState() {
  return {
    animations: {},
    animating: false,
    cleanUp: undefined
  };
};
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;
  var attrs = vnode.attrs;
  return _objectSpread({}, filterSupportedAttributes(attrs), attrs.testId && {
    "data-test-id": attrs.testId
  }, {
    className: [classes.component, attrs.unconstrained ? classes.unconstrained : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var updateAnimationState = function updateAnimationState(state) {
  return state.animating = Object.keys(state.animations).length > 0;
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }

  if (isServer) {
    return;
  }

  var state = vnode.state;
  var attrs = vnode.attrs;

  var tap = function tap(e) {
    if (attrs.disabled || !attrs.multi && state.animating) {
      return;
    }

    if (attrs.start) {
      attrs.start(e);
    }

    var id = "ripple_animation_".concat(new Date().getTime());
    state.animations[id] = animation({
      e: e,
      id: id,
      el: vnode.dom,
      attrs: attrs,
      classes: classes
    }).then(function (evt) {
      if (attrs.end) {
        attrs.end(evt);
      }

      delete state.animations[id];
      updateAnimationState(state);
    });
    updateAnimationState(state);
  };

  var triggerEl = attrs.target ? attrs.target : vnode.dom && vnode.dom.parentElement;

  if (triggerEl) {
    pointerEndEvent.forEach(function (evt) {
      return triggerEl.addEventListener(evt, tap, false);
    });
  }

  state.cleanUp = function () {
    if (triggerEl) {
      pointerEndEvent.forEach(function (evt) {
        return triggerEl.removeEventListener(evt, tap, false);
      });
    }
  };
};
var onUnMount = function onUnMount(_ref2) {
  var state = _ref2.state;
  return state.cleanUp && state.cleanUp();
};

var ripple = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  createProps: createProps,
  onMount: onMount,
  onUnMount: onUnMount
});

export { ripple as coreRipple };
