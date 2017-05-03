import { isTouch, animationEndEvent } from "polythene-core-essentials";
import { styler } from "polythene-core-css";
import { vars } from "polythene-theme";

const ANIMATION_END_EVENT =    animationEndEvent();
const DEFAULT_START_OPACITY =  0.2;
const DEFAULT_END_OPACITY =    0.0;
const DEFAULT_START_SCALE =    0.1;
const DEFAULT_END_SCALE =      2.0;
const OPACITY_DECAY_VELOCITY = 0.35;

export default (e, el, wavesEl, attrs, classes, onEndCallback) => {
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
  const startOpacity = attrs.startOpacity !== undefined
    ? attrs.startOpacity
    : DEFAULT_START_OPACITY;
  const opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined
    ? attrs.opacityDecayVelocity
    : OPACITY_DECAY_VELOCITY;
  const endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
  const startScale = attrs.startScale || DEFAULT_START_SCALE;
  const endScale = attrs.endScale || DEFAULT_END_SCALE;
  const duration = attrs.duration
    ? attrs.duration
    : 1 / opacityDecayVelocity * 0.2;
  const color = window.getComputedStyle(el).color;
  const animationId = `ripple_animation_${new Date().getTime()}`;
  const style = wavesEl.style;
  style.width = style.height = waveRadius + "px";
  style.top = ry + "px";
  style.left = rx + "px";
  style["animation-duration"] =
    style["-webkit-animation-duration"] =
    style["-moz-animation-duration"] =
    style["-o-animation-duration"] = duration + "s";
  style.backgroundColor = color;
  style.opacity = startOpacity;
  style.animationName = animationId;
  style.animationTimingFunction = attrs.animationTimingFunction || vars.animation_curve_default;

  const keyframeStyle = [{
    [`@keyframes ${animationId}`]: {
      " 0%": {
        transform: "scale(" + startScale + ")",
        "opacity": startOpacity
      },
      " 100%": {
        transform: "scale(" + endScale + ")",
        "opacity": endOpacity
      }
    }
  }];
  styler.add(animationId, keyframeStyle);

  const onEnd = evt => {
    if (attrs.persistent) {
      style.opacity = endOpacity;
      style.transform = "scale(" + endScale + ")";
    } else {
      onEndCallback();
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
};
