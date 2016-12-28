import m from "mithril";
import { isTouch, touchEndEvent, animationEndEvent, filterSupportedAttributes } from "polythene-core";
import "./theme/index";

const ANIMATION_END_EVENT = animationEndEvent();
const DEFAULT_START_OPACITY = 0.2;
const OPACITY_DECAY_VELOCITY = 0.35;
const CSS_CLASSES = {
  component: "pe-ripple",
  waves: "pe-ripple__waves",
  mask: "pe-ripple__mask",
  constrained: "pe-ripple--constrained",
  animated: "pe-ripple__waves--animated"
};

let destroyRipple;

const makeRipple = (e, state, attrs) => {
  if (state.animating) {
    return;
  }
  const el = state.ripple;
  const rect = el.getBoundingClientRect();
  const x = (isTouch && e.touches) ? e.touches[0].pageX : e.clientX;
  const y = (isTouch && e.touches) ? e.touches[0].pageY : e.clientY;  
  const w = el.offsetWidth;
  const h = el.offsetHeight;
  const waveRadius = Math.sqrt(w * w + h * h);
  
  const mx = (attrs.center) ? (rect.left + rect.width / 2) : x;
  const my = (attrs.center) ? (rect.top + rect.height / 2) : y;
  const rx = mx - rect.left - waveRadius / 2;
  const ry = my - rect.top - waveRadius / 2;
  const initialOpacity = (attrs.initialOpacity !== undefined) ? attrs.initialOpacity : DEFAULT_START_OPACITY;
  const opacityDecayVelocity = (attrs.opacityDecayVelocity !== undefined) ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
  const duration = 1 / opacityDecayVelocity * initialOpacity;
  const color = window.getComputedStyle(el).color;

  const wavesEl = state.waves;
  const style = wavesEl.style;
  style.width = style.height = waveRadius + "px";
  style.top = ry + "px";
  style.left = rx + "px";
  style["animation-duration"] =
    style["-webkit-animation-duration"] =
    style["-moz-animation-duration"] =
    style["-o-animation-duration"] = duration + "s";
  style.backgroundColor = color;
  style.opacity = initialOpacity;

  state.animating = true;
  const onEnd = (evt) => {
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

const initRipple = (vnode) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (!vnode.dom) {
    return;
  }
  state.ripple = vnode.dom;
  state.waves = vnode.dom.querySelector(`.${CSS_CLASSES.waves}`);
  
  const tap = e => makeRipple(e, state, attrs);
  const triggerEl = vnode.dom.parentElement;
  triggerEl.addEventListener(touchEndEvent, tap, false);
  destroyRipple = () => {
    triggerEl.removeEventListener(touchEndEvent, tap, false);
  };
};

const view = (vnode) => {
  const attrs = vnode.attrs;
  if (attrs.disabled) {
    return null;
  }
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        CSS_CLASSES.component,
        (attrs.constrained !== false ? CSS_CLASSES.constrained : null),
        attrs.class
      ].join(" ")
    }
  );
  const content = m("div", {
    class: CSS_CLASSES.mask
  }, m("div", {
    class: CSS_CLASSES.waves
  }));
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const ripple = {
  oninit: (vnode) => {
    vnode.state = {
      animating: false,
      ripple: undefined,
      waves: undefined
    };
  },
  oncreate: initRipple,
  onremove: destroyRipple,
  view
};
