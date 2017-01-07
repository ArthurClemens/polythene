import m from "mithril";
import { isTouch, touchEndEvent, animationEndEvent, filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

const ANIMATION_END_EVENT = animationEndEvent();
const DEFAULT_START_OPACITY = 0.2;
const OPACITY_DECAY_VELOCITY = 0.35;
const classes = {
  component: "pe-ripple",
  waves: "pe-ripple__waves",
  mask: "pe-ripple__mask",
  constrained: "pe-ripple--constrained",
  wavesAnimating: "pe-ripple__waves--animating"
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
  const onEnd = evt => {
    state.animating = false;
    wavesEl.classList.remove(classes.wavesAnimating);
    wavesEl.removeEventListener(ANIMATION_END_EVENT, onEnd, false);
    if (attrs.end) {
      attrs.end(evt);
    }
  };
  wavesEl.addEventListener(ANIMATION_END_EVENT, onEnd, false);
  if (attrs.start) {
    attrs.start(e);
  }
  wavesEl.classList.add(classes.wavesAnimating);
};

const initRipple = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (!vnode.dom) {
    return;
  }
  state.ripple = vnode.dom;
  state.waves = vnode.dom.querySelector(`.${classes.waves}`);
  
  const tap = e => makeRipple(e, state, attrs);
  const triggerEl = vnode.dom.parentElement;
  triggerEl.addEventListener(touchEndEvent, tap, false);
  destroyRipple = () => {
    triggerEl.removeEventListener(touchEndEvent, tap, false);
  };
};

const view = vnode => {
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
        classes.component,
        (attrs.constrained !== false ? classes.constrained : null),
        attrs.class
      ].join(" ")
    }
  );
  const content = m("div", {
    class: classes.mask
  }, m("div", {
    class: classes.waves
  }));
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const ripple = {
  theme: customTheme, // accepts (className, vars)
  oninit: vnode => {
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
