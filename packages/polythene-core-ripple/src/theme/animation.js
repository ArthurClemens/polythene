import { isTouch, getAnimationEndEvent } from "polythene-core";
import { styler } from "polythene-core-css";
import { vars } from "polythene-theme";

const ANIMATION_END_EVENT =    getAnimationEndEvent();
const DEFAULT_START_OPACITY =  0.2;
const DEFAULT_END_OPACITY =    0.0;
const DEFAULT_START_SCALE =    0.1;
const DEFAULT_END_SCALE =      2.0;
const OPACITY_DECAY_VELOCITY = 0.35;

export default ({ e, id, el, attrs, classes }) => {
  return new Promise(resolve => {
    const container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    const waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
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
    
    const style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] =
      style["-webkit-animation-duration"] =
      style["-moz-animation-duration"] =
      style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = attrs.animationTimingFunction || vars.animation_curve_default;

    const keyframeStyle = [{
      [`@keyframes ${id}`]: {
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
    styler.add(id, keyframeStyle);

    const animationDone = evt => {
      styler.remove(id);
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
};
