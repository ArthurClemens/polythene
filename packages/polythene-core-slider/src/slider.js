import { isTouch, pointerStartMoveEvent, pointerMoveEvent, pointerEndMoveEvent, isClient, filterSupportedAttributes } from "polythene-core";
import themeVars from "./vars";
import classes from "polythene-css-classes/slider";

const MAX_TICKS = 100;
let focusElement;

const deFocus = state => {
  if (focusElement) {
    focusElement.blur();
  }
  focusElement = undefined;
  state.hasFocus(false);
};

const focus = (state, el) => {
  deFocus(state);
  focusElement = el;
  state.hasFocus(true);
};

const positionFromEvent = (e, isVertical) => (
  // isVertical not yet implemented
  isTouch && e.touches
    ? isVertical ? e.touches[0].pageY : e.touches[0].pageX
    : isVertical ? e.pageY : e.pageX);

const updatePinPosition = state => {
  if (state.controlEl && state.pinEl) {
    const left = state.fraction() * state.rangeWidth;
    state.pinEl.style.left = left + "px";
  }
};

const updateValue = (state, value) => {
  state.setValue(value, true);
  updatePinPosition(state);
};

const generateTickMarks = (h, stepCount) => {
  const items = [];
  let s = stepCount + 1;
  while (s > 0) {
    items.push(h("div", {
      className: classes.tick,
      key: `tick-${s}`
    }));
    s--;
  }
  return items;
};

const readRangeData = state => {
  if (state.controlEl && isClient) {
    // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
    state.controlWidth = themeVars.thumb_size;
    state.rangeWidth = state.trackEl.getBoundingClientRect().width - state.controlWidth;
    const styles = window.getComputedStyle(state.trackEl);
    state.rangeOffset = parseFloat(styles.marginLeft);
  }
};

const calculateClickOffset = (state, controlOffset = 0) => {
  state.clickOffset = state.trackEl.getBoundingClientRect().left - (state.rangeOffset - state.controlWidth / 2) + controlOffset;
};

const initControlEvent = (state, e) => {
  const controlPos = state.controlEl.getBoundingClientRect().left;
  const eventPos = positionFromEvent(e);
  const controlOffset = eventPos - controlPos - state.controlWidth / 2;
  calculateClickOffset(state, controlOffset);
};

const initTrackEvent = (state) =>
  calculateClickOffset(state, 0);

const handlePosEvent = (state, e) => {
  const pos = positionFromEvent(e) - state.clickOffset;
  const value = state.min + ((pos - state.rangeOffset) / state.rangeWidth) * (state.max - state.min);
  updateValue(state, value);
};

const startDrag = (state, attrs, e) => {
  if (state.isDragging()) return;
  e.preventDefault();
  state.isDragging(true);
  state.isActive(true);
  deFocus(state);

  const drag = e => {
    if (!state.isDragging()) return;
    handlePosEvent(state, e);
  };

  const endDrag = () => {
    if (!state.isDragging()) return;
    deFocus(state);
    if (isClient) {
      window.removeEventListener(pointerMoveEvent, drag);
      window.removeEventListener(pointerEndMoveEvent, endDrag);
    }
    state.isDragging(false);
    state.isActive(false);
  };

  if (isClient) {
    window.addEventListener(pointerMoveEvent, drag);
    window.addEventListener(pointerEndMoveEvent, endDrag);
  }
  readRangeData(state);

  if (attrs.pin) {
    updatePinPosition(state);
  }
};

const startTrack = (state, attrs, e) => {
  e.preventDefault();
  if (state.isDragging()) {
    return;
  }
  readRangeData(state);
  initTrackEvent(state);
  handlePosEvent(state, e);
  startDrag(state, attrs, e);
};

const createSlider = (vnode, { h, k, hasTicks, interactiveTrack }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const fraction = state.fraction();
  const range = state.max - state.min;
  const stepCount = Math.min(MAX_TICKS, parseInt(range / state.stepSize, 10));

  const onStartTrack = e => (
    startTrack(state, attrs, e)
  );

  const onInitDrag = e => {
    readRangeData(state);
    initControlEvent(state, e);
    startDrag(state, attrs, e);
  };

  const flexValueCss =  fraction + " 1 0%";
  const flexRestValue = 1 - fraction;
  const flexRestCss =   flexRestValue + " 1 0%";

  return h("div",
    Object.assign(
      {},
      { className: classes.track },
      interactiveTrack && !attrs.disabled && {
        [k[`on${pointerStartMoveEvent}`]]: onStartTrack
      }
    ),
    [
      h("div",
        {
          className: classes.trackPart + " " + classes.trackPartValue,
          key: "trackPartValue",
          style: {
            flex: flexValueCss,
            msFlex: flexValueCss,
            WebkitFlex: flexValueCss
          }
        },
        h("div", { className: classes.trackBar },
          h("div", { className: classes.trackBarValue })
        )
      ),
      h("div", Object.assign(
        {},
        {
          className: classes.control,
          key: "control"
        },
        attrs.disabled
          ? { disabled: true }
          : {
            [k.tabindex]: attrs[k.tabindex] || 0,
            [k.onfocus]: () => focus(state, state.controlEl),
            [k.onblur]: () => deFocus(state),
            [k.onkeydown]: e => {
              if (e.key !== "Tab") {
                e.preventDefault();
              }
              if (e.key === "Escape" || e.key === "Esc") {
                state.controlEl.blur(e);
              } else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "Left" || e.key === "Down") {
                state.decrement(state, e.shiftKey);
              } else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "Right" || e.key === "Up") {
                state.increment(state, e.shiftKey);
              } else if (e.key === "Home") {
                updateValue(state, state.min);
              } else if (e.key === "End") {
                updateValue(state, state.max);
              } else if (e.key === "PageDown") {
                state.decrement(state, true);
              } else if (e.key === "PageUp") {
                state.increment(state, true);
              }
              readRangeData(state);
              updatePinPosition(state);
            }
          },
        !attrs.disabled && {
          [k[`on${pointerStartMoveEvent}`]]: onInitDrag
        },
        attrs.events
          ? attrs.events
          : null,
        hasTicks
          ? { step: stepCount }
          : null
      ),
      attrs.icon
        ? h("div",
          {
            className: classes.thumb,
            key: "icon"
          },
          attrs.icon
        )
        : null
      ),
      h("div",
        {
          className: classes.trackPart + " " + classes.trackPartRest,
          key: "trackPartRest",
          style: {
            flex: flexRestCss,
            msFlex: flexRestCss,
            WebkitFlex: flexRestCss,
            maxWidth: (flexRestValue * 100) + "%" // for IE Edge
          }
        },
        h("div", { className: classes.trackBar },
          h("div", { className: classes.trackBarValue })
        )
      ),
      hasTicks && !attrs.disabled
        ? h("div",
          {
            className: classes.ticks,
            key: "ticks"
          },
          generateTickMarks(h, stepCount)
        )
        : null,
      hasTicks && attrs.pin && !attrs.disabled
        ? h("div",
          {
            className: classes.pin,
            key: "pin",
            value: state.value()
          }
        )
        : null
    ]
  );
};

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;

  const min = attrs.min !== undefined ? attrs.min : 0;
  const max = attrs.max !== undefined ? attrs.max : 100;
  const range = max - min;
  const stepSize = attrs.stepSize !== undefined
    ? attrs.stepSize
    : 1;
  const defaultValue = attrs.defaultValue !== undefined
    ? attrs.defaultValue
    : attrs.value !== undefined
      ? attrs.value
      : 0;
  const previousValue = createStream(undefined);
  const isActive = createStream(false);
  const hasFocus = createStream(false);
  const isDragging = createStream(false);
  const fraction = createStream(min);
  const value = createStream(0);
  const normalizeFactor = 1 / stepSize;

  const setValue = (v, shouldNotify = false) => {
    if (v < min) v = min;
    if (v > max) v = max;
    value(stepSize
      ? Math.round(v * normalizeFactor) / normalizeFactor
      : v
    );
    fraction((value() - min) / range);
    if (shouldNotify && attrs.onChange) {
      attrs.onChange({
        value: value()
      });
    }
    previousValue(v);
  };

  const increment = (state, useLargeStep) =>
    updateValue(state, value() + (useLargeStep ? 10 : 1) * (stepSize || 1));

  const decrement = (state, useLargeStep) =>
    updateValue(state, value() - (useLargeStep ? 10 : 1) * (stepSize || 1));
  
  setValue(defaultValue);
  
  return {
    min,
    max,
    stepSize,
    fraction,
    // DOM elements
    trackEl: null,
    controlEl: null,
    pinEl: null,
    // functions
    setValue,
    increment,
    decrement, 
    // streams
    isDragging,
    isActive,
    value,
    previousValue,
    hasFocus,
    // coordinates
    controlWidth: 0,
    rangeWidth: 0,
    rangeOffset: 0,
    clickOffset: 0,
    redrawOnUpdate: createStream.merge([isActive, value])
  };
};

export const onMount = vnode => {
  const dom = vnode.dom;
  const state = vnode.state;
  const attrs = vnode.attrs;

  state.trackEl = dom.querySelector(`.${classes.track}`);
  state.controlEl = dom.querySelector(`.${classes.control}`);
  state.pinEl = dom.querySelector(`.${classes.pin}`);

  readRangeData(state);

  if (attrs.pin) {
    setTimeout(() => {
      updateValue(state, state.value());
    }, 0);
  }
};

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.value !== undefined) {
    if (state.previousValue() !== attrs.value) {
      state.previousValue(attrs.value);
      setTimeout(() => state.setValue(state.previousValue()), 0); // perform in next tick to play nice with React
    }
  }
  const hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  const interactiveTrack = (attrs.interactiveTrack !== undefined) ? attrs.interactiveTrack : true;
  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.disabled ? classes.isDisabled : null,
        attrs.pin ? classes.hasPin : null,
        interactiveTrack ? classes.hasTrack : null,
        state.isActive() ? classes.isActive : null,
        state.hasFocus() ? classes.hasFocus : null,
        state.fraction() === 0 ? classes.isAtMin : null,
        hasTicks ? classes.hasTicks : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h, keys: k }) => {
  const attrs = vnode.attrs;
  const hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  const interactiveTrack = (attrs.interactiveTrack !== undefined) ? attrs.interactiveTrack : true;
  return createSlider(vnode, { h, k, hasTicks, interactiveTrack });
};


