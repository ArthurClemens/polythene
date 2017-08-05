/*
Generic show/hide transition module
*/

// defaults
const SHOW_DURATION = .220; // default dialog timing
const HIDE_DURATION = .200; // default dialog timing
const SHOW_DELAY =    0;
const HIDE_DELAY =    0;
const TRANSITION =    "both";

// See: transition
export const show = opts =>
  transition(opts, "show");

export const hide = opts =>
  transition(opts, "hide");

const getTiming = (opts, state, showAttr, hideAttr, defaultShowTiming, defaultHideTiming) => {
  const transition = opts.transition || TRANSITION;
  if (transition === "none") {
    return 0;
  } else if (transition === "show" && state === "hide") {
    return 0;
  } else if (transition === "hide" && state === "show") {
    return 0;
  } else {
    // both
    return state === "show"
      ? opts[showAttr] !== undefined
        ? opts[showAttr]
        : defaultShowTiming
      : opts[hideAttr] !== undefined
        ? opts[hideAttr]
        : defaultHideTiming;
  }
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
const getDuration = (opts, state) => 
  getTiming(opts, state, "showDuration", "hideDuration", SHOW_DURATION, HIDE_DURATION);

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
const getDelay = (opts, state) =>
  getTiming(opts, state, "showDelay", "hideDelay", SHOW_DELAY, HIDE_DELAY);

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

- state (show, hide)
*/
const transition = (opts, state) => {
  const el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(resolve => {
      const transitionDuration = getDuration(opts, state) * 1000;
      const delay = getDelay(opts, state) * 1000;
      const style = el.style;
      const beforeTransition = (opts.beforeShow && state === "show")
        ? () => {
          style.transitionDuration = "0ms";
          style.transitionDelay = "0ms";
          opts.beforeShow();
        }
        : null;

      const afterTransition = opts.afterHide && state === "hide"
        ? () => opts.afterHide()
        : null;

      const applyTransition = () => {
        style.transitionDuration = transitionDuration + "ms";
        style.transitionDelay = delay + "ms";
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
        }, transitionDuration + delay);
      };

      const maybeDelayTransition = () => {
        if (transitionDuration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (beforeTransition) {
        beforeTransition();
        setTimeout(() => {
          maybeDelayTransition();
        }, 100);
      } else {
        maybeDelayTransition();
      }
    });
  }
};

