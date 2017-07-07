import { isTouch, moveEvent, endEvent } from "polythene-core";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import themeVars from "./theme/vars";
import classes from "./classes";

export const theme = customTheme;

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

const positionFromEvent = (e, isVertical) =>
  isTouch
    ? isVertical ? e.touches[0].pageY : e.touches[0].pageX
    : isVertical ? e.pageY : e.pageX;

const updatePinPosition = state => {
  if (state.controlEl && state.pinEl) {
    const left = state.fraction() * state.rangeWidth;
    state.pinEl.style.left = left + "px";
  }
};

const updateValue = (state, value) => {
  state.setValue(value);
  updatePinPosition(state);
};

const generateTickMarks = (h, min, max, stepSize) => {
  const steps = Math.round((max - min) / stepSize);
  const items = [];
  let s = steps + 1;
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
  if (state.controlEl) {
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
    window.removeEventListener(moveEvent, drag);
    window.removeEventListener(endEvent, endDrag);
    state.isDragging(false);
    state.isActive(false);
  };

  window.addEventListener(moveEvent, drag);
  window.addEventListener(endEvent, endDrag);

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
  const stepCount = Math.max(10, parseInt(attrs.step, 10) || 1); // not more than 100 steps on the screen

  const onStartTrack = e =>
    startTrack(state, attrs, e);

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
      interactiveTrack && !attrs.disabled && !isTouch
        ? { [k.onmousedown]: onStartTrack }
        : null,
      interactiveTrack && !attrs.disabled && isTouch
        ? { [k.ontouchstart]: onStartTrack }
        : null
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
              if (e.which === 27) {
                // ESCAPE
                state.controlEl.blur(e);
              } else if (e.which === 37) {
                // LEFT
                state.decrease(e.shiftKey);
              } else if (e.which === 38) {
                // UP
                state.increase(e.shiftKey);
              } else if (e.which === 39) {
                // RIGHT
                state.increase(e.shiftKey);
              } else if (e.which === 40) {
                // DOWN
                state.decrease(e.shiftKey);
              }
              readRangeData(state);
              updatePinPosition(state);
            }
          },
        !attrs.disabled && !isTouch
          ? { [k.onmousedown]: onInitDrag }
          : null,
        !attrs.disabled && isTouch
          ? { [k.ontouchstart]: onInitDrag }
          : null,
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
          generateTickMarks(h, state.min, state.max, stepCount)
        )
        : null,
      hasTicks && attrs.pin && !attrs.disabled
        ? h("div",
          {
            className: classes.pin,
            key: "pin",
            value: Math.round(state.value())
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
  const step = attrs.step !== undefined ? attrs.step : 1;
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

  const setValue = v => {
    if (v < min) v = min;
    if (v > max) v = max;
    value(step ? (Math.round(v / step) * step) : v);
    fraction((value() - min) / (max - min));
    if (attrs.onChange) {
      attrs.onChange({
        value: value()
      });
    }
    previousValue(v);
  };

  const increase = multiply =>
    setValue(value() + (multiply ? 10 : 1) * (step || 1));

  const decrease = multiply =>
    setValue(value() - (multiply ? 10 : 1) * (step || 1));
  
  setValue(defaultValue);
  
  return {
    min,
    max,
    fraction,
    // DOM elements
    trackEl: null,
    controlEl: null,
    pinEl: null,
    // functions
    setValue,
    increase,
    decrease, 
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
    redrawOnUpdate: createStream.merge([state.isActive, state.value])
  };
};

export const onMount = vnode => {
  const dom = vnode.dom;
  const state = vnode.state;
  const attrs = vnode.attrs;

  state.trackEl = dom.querySelector(`.${classes.track}`);
  state.controlEl = dom.querySelector(`.${classes.control}`);
  state.pinEl = dom.querySelector(`.${classes.pin}`);
  if (attrs.pin) {
    setTimeout(() => {
      updatePinPosition(state);
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


