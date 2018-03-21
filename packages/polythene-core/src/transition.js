/*
Generic show/hide transition module
*/

import { isClient } from "./iso";

// defaults
const SHOW_DURATION = .240;
const HIDE_DURATION = .240;
const SHOW_DELAY =    0;
const HIDE_DELAY =    0;
const TRANSITION =    "both";

// See: transition
export const show = opts =>
  transition(opts, "show");

export const hide = opts =>
  transition(opts, "hide");

const getValue = ({ opts, state, showAttr, hideAttr, defaultShowValue, defaultHideValue, nullValue }) => {
  const transition = opts.transition || TRANSITION;
  if (transition === "none") {
    return nullValue;
  } else if (transition === "show" && state === "hide") {
    return nullValue;
  } else if (transition === "hide" && state === "show") {
    return nullValue;
  } else {
    // both
    return state === "show"
      ? opts[showAttr] !== undefined
        ? opts[showAttr]
        : defaultShowValue
      : opts[hideAttr] !== undefined
        ? opts[hideAttr]
        : defaultHideValue;
  }
};

const hasDuration = (opts, state) => 
  state === "show"
    ? opts.showDuration !== undefined
    : opts.hideDuration !== undefined;

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
const getDuration = (opts, state) => 
  getValue({ opts, state, showAttr: "showDuration", hideAttr: "hideDuration", defaultShowValue: SHOW_DURATION, defaultHideValue: HIDE_DURATION, nullValue: 0 });

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/

const hasDelay = (opts, state) => 
  state === "show"
    ? opts.showDelay !== undefined
    : opts.hideDelay !== undefined;


const getDelay = (opts, state) =>
  getValue({ opts, state, showAttr: "showDelay", hideAttr: "hideDelay", defaultShowValue: SHOW_DELAY, defaultHideValue: HIDE_DELAY, nullValue: 0 });

const getTimingFunction = (opts, state) =>
  getValue({ opts, state, showAttr: "showTimingFunction", hideAttr: "hideTimingFunction" });

const computedStyleDurationToMs = durationStr =>
  parseFloat(durationStr) * durationStr.indexOf("ms") === -1 ? 1000 : 1;

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay
- timingFunction

- state (show, hide)
*/
const transition = (opts, state) => {
  const el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(resolve => {
      const computedStyle = isClient
        ? window.getComputedStyle(el)
        : {};
      const duration = hasDuration(opts, state)
        ? getDuration(opts, state) * 1000
        : computedStyleDurationToMs(computedStyle.transitionDuration);
      const delay = hasDelay(opts, state)
        ? getDelay(opts, state) * 1000
        : computedStyleDurationToMs(computedStyle.transitionDelay);
      const timingFunction = getTimingFunction(opts, state) || computedStyle.transitionTimingFunction;

      const style = el.style;
      
      const beforeTransition = (opts.beforeShow && state === "show")
        ? () => {
          style.transitionDuration = "0ms";
          style.transitionDelay = "0ms";
          opts.beforeShow();
        }
        : (opts.beforeHide && state === "hide")
          ? () => {
            style.transitionDuration = "0ms";
            style.transitionDelay = "0ms";
            opts.beforeHide();
          }
          : null;

      const afterTransition = opts.afterHide && state === "hide"
        ? () => opts.afterHide()
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
        if (opts.show && typeof opts.show === "function" && state === "show") {
          opts.show();
        }
        if (opts.hide && typeof opts.hide === "function" && state === "hide") {
          opts.hide();
        }
      };

      const doTransition = () => {
        applyTransition();
        setTimeout(() => {
          if (afterTransition) {
            afterTransition();
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

      if (beforeTransition) {
        beforeTransition();
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

export const transitionComponent = ({ isShow, state, attrs, domElements, beforeTransition, afterTransition, showClass, defaultDuration }) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  state.visible(isShow ? true : false);
  if (beforeTransition) {
    beforeTransition();
  }
  const duration = attrs[isShow ? "showDuration" : "hideDuration"] || defaultDuration || (isShow ? SHOW_DURATION : HIDE_DURATION);
  const delay = attrs.showDelay;
  const transitions = attrs.transitions;
  const fn = isShow ? show : hide;
  const transAttrs = Object.assign({},
    domElements,
    {
      [isShow ? "showDuration" : "hideDuration"]: duration,
      [isShow ? "showDelay" : "hideDelay"]: delay,
    }
  );
  return fn(Object.assign({},
    attrs,
    { showClass },
    transitions 
      ? transitions[isShow ? "show" : "hide"](transAttrs)
      : transAttrs
  )).then(() => {
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
