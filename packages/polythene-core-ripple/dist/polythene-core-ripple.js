(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

  const ANIMATION_END_EVENT = polytheneCore.getAnimationEndEvent();
  const DEFAULT_START_OPACITY = 0.2;
  const DEFAULT_END_OPACITY = 0.0;
  const DEFAULT_START_SCALE = 0.1;
  const DEFAULT_END_SCALE = 2.0;
  const OPACITY_DECAY_VELOCITY = 0.35;

  const addStyleToHead = (id, stylesheet) => {
    if (polytheneCore.isServer) return;
    const documentRef = window.document;
    const styleEl = documentRef.createElement("style");
    styleEl.setAttribute("id", id);
    styleEl.appendChild(documentRef.createTextNode(stylesheet));
    documentRef.head.appendChild(styleEl);
  };

  const removeStyleFromHead = id => {
    if (polytheneCore.isServer) return;
    const el = document.getElementById(id);

    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  };

  var animation = (({
    e,
    id,
    el,
    attrs,
    classes
  }) => {
    return new Promise(resolve => {
      const container = document.createElement("div");
      container.setAttribute("class", classes.mask);
      el.appendChild(container);
      const waves = document.createElement("div");
      waves.setAttribute("class", classes.waves);
      container.appendChild(waves);
      const rect = el.getBoundingClientRect();
      const x = polytheneCore.isTouch && e.touches ? e.touches[0].pageX : e.clientX;
      const y = polytheneCore.isTouch && e.touches ? e.touches[0].pageY : e.clientY;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const waveRadius = Math.sqrt(w * w + h * h);
      const mx = attrs.center ? rect.left + rect.width / 2 : x;
      const my = attrs.center ? rect.top + rect.height / 2 : y;
      const rx = mx - rect.left - waveRadius / 2;
      const ry = my - rect.top - waveRadius / 2;
      const startOpacity = attrs.startOpacity !== undefined ? attrs.startOpacity : DEFAULT_START_OPACITY;
      const opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
      const endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
      const startScale = attrs.startScale || DEFAULT_START_SCALE;
      const endScale = attrs.endScale || DEFAULT_END_SCALE;
      const duration = attrs.duration ? attrs.duration : 1 / opacityDecayVelocity * 0.2;
      const color = window.getComputedStyle(el).color;
      const style = waves.style;
      style.width = style.height = waveRadius + "px";
      style.top = ry + "px";
      style.left = rx + "px";
      style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
      style.backgroundColor = color;
      style.opacity = startOpacity;
      style.animationName = id;
      style.animationTimingFunction = attrs.animationTimingFunction || polytheneTheme.vars.animation_curve_default;
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

  const getElement = vnode => vnode.attrs.element || "div";
  const getInitialState = () => {
    return {
      animations: {},
      animating: false,
      cleanUp: undefined
    };
  };
  const createProps = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.unconstrained ? classes.unconstrained : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    });
  };

  const updateAnimationState = state => state.animating = Object.keys(state.animations).length > 0;

  const onMount = vnode => {
    if (!vnode.dom) {
      return;
    }

    if (polytheneCore.isServer) {
      return;
    }

    const state = vnode.state;
    const attrs = vnode.attrs;

    const tap = e => {
      if (attrs.disabled || !attrs.multi && state.animating) {
        return;
      }

      if (attrs.start) {
        attrs.start(e);
      }

      const id = `ripple_animation_${new Date().getTime()}`;
      state.animations[id] = animation({
        e,
        id,
        el: vnode.dom,
        attrs,
        classes
      }).then(evt => {
        if (attrs.end) {
          attrs.end(evt);
        }

        delete state.animations[id];
        updateAnimationState(state);
      });
      updateAnimationState(state);
    };

    const triggerEl = attrs.target ? attrs.target : vnode.dom && vnode.dom.parentElement;

    if (triggerEl) {
      polytheneCore.pointerEndEvent.forEach(evt => triggerEl.addEventListener(evt, tap, false));
    }

    state.cleanUp = () => {
      if (triggerEl) {
        polytheneCore.pointerEndEvent.forEach(evt => triggerEl.removeEventListener(evt, tap, false));
      }
    };
  };
  const onUnMount = ({
    state
  }) => state.cleanUp && state.cleanUp();

  var ripple = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    getInitialState: getInitialState,
    createProps: createProps,
    onMount: onMount,
    onUnMount: onUnMount
  });

  exports.coreRipple = ripple;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-ripple.js.map
