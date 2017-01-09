import m from 'mithril';
import { animationEndEvent, filterSupportedAttributes, isTouch, touchEndEvent } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

var vars$1 = {
  color: "inherit" // only specify this variable to get both states
  // color_light:   "inherit",
  // color_dark:    "inherit"
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

var createStyles = function createStyles(componentVars) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  var selector = className + ".pe-ripple";
  return [defineProperty({}, selector, [mixin.fit(), {
    color: "inherit",
    "border-radius": "inherit",

    "&.pe-ripple--constrained": {
      "border-radius": "inherit",

      " .pe-ripple__mask": {
        overflow: "hidden",
        "border-radius": "inherit"
      }
    },
    " .pe-ripple__mask": [mixin.fit(), mixin.vendorize({
      "transform": "translate3d(0,0,0)"
    }, vars.prefixes_transform)],

    " .pe-ripple__waves": {
      outline: "1px solid transparent", // for IE10
      position: "absolute",
      "border-radius": "50%",
      "pointer-events": "none",
      display: "none"
    },
    " .pe-ripple__waves--animating": {
      display: "block"
    }
  }])];
};

var layout = (function (componentVars) {
  return styler.createStyles(componentVars, createStyles);
});

var style = function style(componentVars, scope, selector, tint) {
  var color = componentVars["color_" + tint] || componentVars["color"] || "inherit";
  return [defineProperty({}, scope + selector, {
    color: color
  })];
};

var createStyles$1 = function createStyles(componentVars) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  var selector = className + ".pe-ripple";
  return [style(componentVars, "", selector, "light"), style(componentVars, ".pe-dark-theme ", selector, "dark") // inside dark theme
  ];
};

var color = (function (componentVars) {
  return styler.createStyles(componentVars, createStyles$1);
});

var key = "ripple";
var className = "pe-ripple";

var styleComponent = function styleComponent(className, styles$$1) {
  return styler.styleComponent(className, styles$$1, key, vars$1, layout, color);
};

var customTheme = function customTheme(className, vars$$1) {
  return (
    // Inject additional styles as use the className as key
    styleComponent(className, styler.addComponentStyle(className, styles, key, vars$$1))
  );
};

styleComponent(className, styles);

var ANIMATION_END_EVENT = animationEndEvent();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var animation = (function (e, el, wavesEl, attrs, classes, endCallback) {
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
  var animationId = "ripple_animation_" + new Date().getTime();
  var style = wavesEl.style;
  style.width = style.height = waveRadius + "px";
  style.top = ry + "px";
  style.left = rx + "px";
  style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
  style.backgroundColor = color;
  style.opacity = startOpacity;
  style.animationName = animationId;
  style.animationTimingFunction = attrs.animationTimingFunction || vars.animation_curve_default;

  var keyframeStyle = [defineProperty({}, "@keyframes " + animationId, {
    " 0%": {
      transform: "scale(" + startScale + ")",
      "opacity": startOpacity
    },
    " 100%": {
      transform: "scale(" + endScale + ")",
      "opacity": endOpacity
    }
  })];
  styler.add(animationId, keyframeStyle);

  var onEnd = function onEnd(evt) {
    if (attrs.persistent) {
      style.opacity = endOpacity;
      style.transform = "scale(" + endScale + ")";
    } else {
      endCallback();
      wavesEl.classList.remove(classes.wavesAnimating);
    }
    wavesEl.removeEventListener(ANIMATION_END_EVENT, onEnd, false);
    styler.remove(animationId);
    if (attrs.end) {
      attrs.end(evt);
    }
  };
  wavesEl.addEventListener(ANIMATION_END_EVENT, onEnd, false);
  if (attrs.start) {
    attrs.start(e);
  }
  wavesEl.classList.add(classes.wavesAnimating);
});

var classes = {
  component: "pe-ripple",
  waves: "pe-ripple__waves",
  mask: "pe-ripple__mask",
  constrained: "pe-ripple--constrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var destroyRipple = void 0;

var initRipple = function initRipple(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (!vnode.dom) {
    return;
  }
  state.ripple = vnode.dom;
  state.waves = vnode.dom.querySelector("." + classes.waves);

  var tap = function tap(e) {
    if (state.animating) {
      return;
    }
    animation(e, state.ripple, state.waves, attrs, classes, function () {
      return state.animating = false;
    });
    state.animating = true;
  };
  var triggerEl = vnode.dom.parentElement;
  triggerEl.addEventListener(touchEndEvent, tap, false);
  destroyRipple = function destroyRipple() {
    triggerEl.removeEventListener(touchEndEvent, tap, false);
  };
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  if (attrs.disabled) {
    return null;
  }
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.constrained !== false ? classes.constrained : null, attrs.class].join(" ")
  });
  var content = m("div", {
    class: classes.mask
  }, m("div", {
    class: classes.waves
  }));
  return m(element, props, [attrs.before, content, attrs.after]);
};

var ripple = {
  theme: customTheme, // accepts (className, vars)
  oninit: function oninit(vnode) {
    vnode.state = {
      animating: false,
      ripple: undefined,
      waves: undefined
    };
  },
  oncreate: initRipple,
  onremove: destroyRipple,
  view: view
};

export { ripple, vars$1 as rippleVars };
