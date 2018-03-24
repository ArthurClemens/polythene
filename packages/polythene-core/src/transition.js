/*
Generic show/hide transition module
*/

import { isClient } from "./iso";

// defaults
const DEFAULT_DURATION = .240;
const DEFAULT_DELAY =    0;
// const TRANSITION =    "both";

// See: transition
export const show = opts =>
  transition(opts, "show");

export const hide = opts =>
  transition(opts, "hide");

const computedStyleDurationToMs = durationStr => {
  const parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed)
    ? 0
    : parsed;
};

/*
opts:
- el
- duration
- delay
- showClass
- before
- show
- hide
- after
- timingFunction

- state (show, hide)
*/
const transition = (opts, state) => {
  const el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(resolve => {
      const style = el.style;
      const computedStyle = isClient
        ? window.getComputedStyle(el)
        : {};
      const duration = opts.hasDuration
        ? opts.duration * 1000.0
        : computedStyleDurationToMs(computedStyle.transitionDuration);
      const delay = opts.hasDelay
        ? opts.delay * 1000.0
        : computedStyleDurationToMs(computedStyle.transitionDelay);
      const timingFunction = opts.timingFunction || computedStyle.transitionTimingFunction;

      const before = (opts.before && state === "show")
        ? () => {
          style.transitionDuration = "0ms";
          style.transitionDelay = "0ms";
          opts.before();
        }
        : (opts.before && state === "hide")
          ? () => {
            style.transitionDuration = "0ms";
            style.transitionDelay = "0ms";
            opts.before();
          }
          : null;

      const after = opts.after
        ? () => opts.after()
        : null;

      const applyTransition = () => {
        style.transitionDuration = duration + "ms";
        style.transitionDelay = delay + "ms";

        if (timingFunction) {
          style.transitionTimingFunction = timingFunction;
        }
        if (opts.showClass) {
          el.classList[(state === "show") ? "add" : "remove"](opts.showClass);
        }
        if (opts.transition) {
          opts.transition();
        }
      };

      const doTransition = () => {
        applyTransition();
        setTimeout(() => {
          if (after) {
            after();
          }
          resolve();
        }, duration + delay);
      };

      const maybeDelayTransition = () => {
        if (duration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (before) {
        before();
        el.offsetHeight; // force reflow
        setTimeout(() => {
          maybeDelayTransition();
        }, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};

export const transitionComponent = ({ isShow, state, attrs, domElements, beforeTransition, afterTransition, showClass }) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  state.visible(isShow ? true : false);
  if (beforeTransition) {
    beforeTransition();
  }
  const duration = attrs[isShow ? "showDuration" : "hideDuration"];
  const delay = attrs[isShow ? "showDelay" : "hideDelay"];
  const timingFunction = attrs[isShow ? "showTimingFunction" : "hideTimingFunction"];
  const transitions = attrs.transitions;
  const fn = isShow ? show : hide;
  const opts1 = Object.assign({},
    attrs,
    domElements,
    {
      showClass,
      duration,
      delay,
      timingFunction
    }
  );
  const opts2 = Object.assign({},
    opts1,
    transitions && transitions[isShow ? "show" : "hide"](opts1)
  );
  const opts3 = Object.assign({},
    opts2,
    {
      duration: opts2.duration !== undefined
        ? opts2.duration
        : DEFAULT_DURATION,
      hasDuration: opts2.duration !== undefined,
      delay: opts2.delay !== undefined
        ? opts2.delay
        : DEFAULT_DELAY,
      hasDelay: opts2.delay !== undefined,
    }
  );
  return fn(opts3).then(() => {
    const id = state.instanceId;
    if (attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"]) {
      attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"](id); // when used with Multiple; this will call attrs.didShow / attrs.didHide
    } else if (attrs[isShow ? "didShow" : "didHide"]) {
      attrs[isShow ? "didShow" : "didHide"](id); // when used directly
    }
    if (afterTransition) {
      afterTransition();
    }
    state.transitioning(false);
  });
};
