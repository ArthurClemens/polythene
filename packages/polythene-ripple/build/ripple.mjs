import m from 'mithril';
import { animationEndEvent, filterSupportedAttributes, isTouch, touchEndEvent } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { appConfig, componentsConfig } from 'polythene-config';

var componentConfig = {
  start_scale: 0.1,
  end_scale: 2,
  start_opacity: 0.2,
  end_opacity: 0
};

var kfRipple = function kfRipple(config) {
  return {
    " 100%": {
      transform: "scale(" + config.end_scale + ")",
      "opacity": config.end_opacity
    }
  };
};

var createStyles = function createStyles(config) {
  return [{
    ".pe-ripple": [mixin.fit(), {
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
      }, appConfig.prefixes_transform)],

      " .pe-ripple__waves": [mixin.vendorize({
        "transform": "scale(" + config.start_scale + ")"
      }, appConfig.prefixes_transform), mixin.vendorize({
        "animation": "ripple " + appConfig.animation_curve_default
      }, appConfig.prefixes_animation),
      // default durations; finally set in js
      mixin.vendorize({
        "animation-duration": appConfig.animation_duration
      }, appConfig.prefixes_animation), {
        outline: "1px solid transparent", // for IE10
        position: "absolute",
        "border-radius": "50%",
        opacity: config.start_opacity,
        "pointer-events": "none",
        display: "none"
      }],
      " .pe-ripple__waves--animated": {
        display: "block"
      }
    }],

    "@keyframes ripple": kfRipple(config)
  }];
};

var layout = (function (config) {
  return mixin.createStyles(config, createStyles);
});

styler.styleComponent("pe-ripple", "ripple", componentsConfig, componentConfig, layout);

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

var ANIMATION_END_EVENT = animationEndEvent();
var DEFAULT_START_OPACITY = 0.2;
var OPACITY_DECAY_VELOCITY = 0.35;
var CSS_CLASSES = {
  component: "pe-ripple",
  waves: "pe-ripple__waves",
  mask: "pe-ripple__mask",
  constrained: "pe-ripple--constrained",
  animated: "pe-ripple__waves--animated"
};

var destroyRipple = void 0;

var makeRipple = function makeRipple(e, state, attrs) {
  if (state.animating) {
    return;
  }
  var el = state.ripple;
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
  var initialOpacity = attrs.initialOpacity !== undefined ? attrs.initialOpacity : DEFAULT_START_OPACITY;
  var opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
  var duration = 1 / opacityDecayVelocity * initialOpacity;
  var color = window.getComputedStyle(el).color;

  var wavesEl = state.waves;
  var style = wavesEl.style;
  style.width = style.height = waveRadius + "px";
  style.top = ry + "px";
  style.left = rx + "px";
  style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
  style.backgroundColor = color;
  style.opacity = initialOpacity;

  state.animating = true;
  var onEnd = function onEnd(evt) {
    state.animating = false;
    wavesEl.classList.remove(CSS_CLASSES.animated);
    wavesEl.removeEventListener(ANIMATION_END_EVENT, onEnd, false);
    if (attrs.end) {
      attrs.end(evt);
    }
  };
  wavesEl.addEventListener(ANIMATION_END_EVENT, onEnd, false);
  if (attrs.start) {
    attrs.start(e);
  }
  wavesEl.classList.add(CSS_CLASSES.animated);
};

var initRipple = function initRipple(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (!vnode.dom) {
    return;
  }
  state.ripple = vnode.dom;
  state.waves = vnode.dom.querySelector("." + CSS_CLASSES.waves);

  var tap = function tap(e) {
    return makeRipple(e, state, attrs);
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
    class: [CSS_CLASSES.component, attrs.constrained !== false ? CSS_CLASSES.constrained : null, attrs.class].join(" ")
  });
  var content = m("div", {
    class: CSS_CLASSES.mask
  }, m("div", {
    class: CSS_CLASSES.waves
  }));
  return m(element, props, [attrs.before, content, attrs.after]);
};

var ripple = {
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

export { ripple };
