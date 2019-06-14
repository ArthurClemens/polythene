import { isTouch, getAnimationEndEvent, isServer } from "polythene-core";
import { vars } from "polythene-theme";

const ANIMATION_END_EVENT =    getAnimationEndEvent();
const DEFAULT_START_OPACITY =  0.2;
const DEFAULT_END_OPACITY =    0.0;
const DEFAULT_START_SCALE =    0.1;
const DEFAULT_END_SCALE =      2.0;
const OPACITY_DECAY_VELOCITY = 0.35;

const addStyleToHead = (id, stylesheet) => {
  if (isServer) return;
  const documentRef = window.document;
  const styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

const removeStyleFromHead = id => {
  if (isServer) return;
  const el = document.getElementById(id);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

export const rippleAnimation = ({ e, id, el, props, classes }) => {
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
    const mx = (props.center) ? (rect.left + rect.width / 2) : x;
    const my = (props.center) ? (rect.top + rect.height / 2) : y;
    const rx = mx - rect.left - waveRadius / 2;
    const ry = my - rect.top - waveRadius / 2;
    const startOpacity = props.startOpacity !== undefined
      ? props.startOpacity
      : DEFAULT_START_OPACITY;
    const opacityDecayVelocity = props.opacityDecayVelocity !== undefined
      ? props.opacityDecayVelocity
      : OPACITY_DECAY_VELOCITY;
    const endOpacity = props.endOpacity || DEFAULT_END_OPACITY;
    const startScale = props.startScale || DEFAULT_START_SCALE;
    const endScale = props.endScale || DEFAULT_END_SCALE;
    const duration = props.duration
      ? props.duration
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
    style.animationTimingFunction = props.animationTimingFunction || vars.animation_curve_default;

    const rippleStyleSheet = `@keyframes ${id} {
      0% {
        transform:scale(${startScale});
        opacity: ${startOpacity}
      }
      100% {
        transform:scale(${endScale});
        opacity: ${endOpacity};
      }
    }`;
    addStyleToHead(id, rippleStyleSheet);

    const animationDone = evt => {
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
};
