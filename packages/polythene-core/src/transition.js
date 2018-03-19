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
const getDelay = (opts, state) =>
  getValue({ opts, state, showAttr: "showDelay", hideAttr: "hideDelay", defaultShowValue: SHOW_DELAY, defaultHideValue: HIDE_DELAY, nullValue: 0 });

const getTimingFunction = (opts, state) =>
  getValue({ opts, state, showAttr: "showTimingFunction", hideAttr: "hideTimingFunction" });


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
      const transitionDuration = getDuration(opts, state) * 1000;
      const timingFunction = getTimingFunction(opts, state);
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

export const transitionComponent = ({ isShow, state, attrs, domElements, beforeShow, showClass, defaultAnimationDuration=SHOW_DURATION }) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  state.visible(isShow ? true : false);
  if (beforeShow) {
    beforeShow();
  }
  const duration = attrs[isShow ? "showDuration" : "hideDuration"] || defaultAnimationDuration;
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
    state.transitioning(false);
  });
};

export const showComponent = args =>
  transitionComponent(Object.assign({}, args, { isShow: true }));

export const hideComponent = args =>
  transitionComponent(Object.assign({}, args, { isShow: false }));
