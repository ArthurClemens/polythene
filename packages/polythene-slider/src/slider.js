import m from "mithril";
import { isTouch, moveEvent, endEvent } from "polythene-core";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import themeVars from "./theme/vars";

export const classes = {
  component:      "pe-slider",
  thumb:          "pe-slider__thumb",
  label:          "pe-slider__label",
  track:          "pe-slider__track",
  trackPart:      "pe-slider__track-part",
  trackPartValue: "pe-slider__track-value",
  trackPartRest:  "pe-slider__track-rest",
  trackBar:       "pe-slider__track-bar",
  trackBarValue:  "pe-slider__track-bar-value",

  control:        "pe-slider__control",
  ticks:          "pe-slider__ticks",
  tick:           "pe-slider__ticks-tick",
  pin:            "pe-slider__pin",

  isDisabled:     "pe-slider--disabled",
  isActive:       "pe-slider--active",
  hasTrack:       "pe-slider--track",
  hasPin:         "pe-slider--pin",
  hasFocus:       "pe-slider--focus",
  isAtMin:        "pe-slider--min",
  hasTicks:       "pe-slider--ticks"
};

let focusElement;

const deFocus = state => {
  if (focusElement) {
    focusElement.blur();
  }
  focusElement = undefined;
  state.hasFocus = false;
};

const focus = (state, el) => {
  deFocus(state);
  focusElement = el;
  state.hasFocus = true;
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

const generateTickMarks = (min, max, stepSize) => {
  const steps = Math.round((max - min) / stepSize);
  const items = [];
  let s = steps + 1;
  while (s > 0) {
    items.push(m("div", { class: classes.tick }));
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
  m.redraw();
};

const startDrag = (state, attrs, e) => {
  if (state.isDragging) return;
  e.preventDefault();
  state.isDragging = true;
  state.isActive = true;
  deFocus(state);

  const drag = e => {
    if (!state.isDragging) return;
    handlePosEvent(state, e);
  };

  const endDrag = () => {
    if (!state.isDragging) return;
    state.isDragging = false;
    state.isActive = false;
    deFocus(state);
    window.removeEventListener(moveEvent, drag);
    window.removeEventListener(endEvent, endDrag);
    m.redraw();
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
  if (state.isDragging) {
    return;
  }
  readRangeData(state);
  initTrackEvent(state);
  handlePosEvent(state, e);
  startDrag(state, attrs, e);
};

const createSlider = (state, attrs, hasTicks, interactiveTrack) => {
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

  return [
    m("div", Object.assign(
      {},
      {
        class: classes.track,
        oncreate: ({ dom }) => {
          state.trackEl = dom;
          if (attrs.pin) {
            setTimeout(() => {
              updatePinPosition(state);
            }, 0);
          }
        }
      },
      interactiveTrack && !attrs.disabled && !isTouch
        ? { onmousedown: onStartTrack }
        : null,
      interactiveTrack && !attrs.disabled && isTouch
        ? { ontouchstart: onStartTrack }
        : null
    ), [
      m("div",
        {
          class: classes.trackPart + " " + classes.trackPartValue,
          style: {
            flex: flexValueCss,
            "-ms-flex": flexValueCss,
            webkitFlex: flexValueCss
          }
        },
        m("div", { class: classes.trackBar },
          m("div", { class: classes.trackBarValue })
        )
      ),
      m("div", Object.assign(
        {},
        {
          class: classes.control,
          oncreate: ({ dom }) => {
            state.controlEl = dom;
          }
        },
        attrs.disabled
          ? { disabled: true }
          : {
            tabindex: attrs.tabindex || 0,
            onfocus: () => focus(state, state.controlEl),
            onblur: () => deFocus(state),
            onkeydown: e => {
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
          ? { onmousedown: onInitDrag }
          : null,
        !attrs.disabled && isTouch
          ? { ontouchstart: onInitDrag }
          : null,
        attrs.events
          ? attrs.events
          : null,
        hasTicks
          ? { step: stepCount }
          : null
      ),
      attrs.icon
        ? m("div", { class: classes.thumb }, attrs.icon)
        : null
      ),
      m("div",
        {
          class: classes.trackPart + " " + classes.trackPartRest,
          style: {
            flex: flexRestCss,
            "-ms-flex": flexRestCss,
            webkitFlex: flexRestCss,
            maxWidth: (flexRestValue * 100) + "%" // for IE Edge
          }
        },
        m("div", { class: classes.trackBar },
          m("div", { class: classes.trackBarValue })
        )
      ),
      hasTicks && !attrs.disabled
        ? m("div", { class: classes.ticks },
            generateTickMarks(state.min, state.max, stepCount)
          )
        : null,
      hasTicks && attrs.pin && !attrs.disabled
        ? m("div",
          {
            class: classes.pin,
            value: Math.round(state.value()),
            oncreate: ({ dom }) => state.pinEl = dom
          }
        )
        : null
    ])
  ];
};

const view = ({ attrs, state }) => {
  if (typeof attrs.value === "function") {
    state.setValue(attrs.value());
  }
  const element = attrs.element || "div";
  const hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  const interactiveTrack = (attrs.interactiveTrack !== undefined) ? attrs.interactiveTrack : true;
  const props = Object.assign({},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.disabled ? classes.isDisabled : null,
        attrs.pin ? classes.hasPin : null,
        interactiveTrack ? classes.hasTrack : null,
        state.isActive ? classes.isActive : null,
        state.hasFocus ? classes.hasFocus : null,
        state.fraction() === 0 ? classes.isAtMin : null,
        hasTicks ? classes.hasTicks : null,
        attrs.class
      ].join(" ")
    }
  );
  const content = createSlider(state, attrs, hasTicks, interactiveTrack);
  return m(element, props, [attrs.before, content, attrs.after]);
};

const oninit = vnode => {
  const attrs = vnode.attrs;
  const min = attrs.min !== undefined ? attrs.min : 0;
  const max = attrs.max !== undefined ? attrs.max : 100;
  const step = attrs.step !== undefined ? attrs.step : 1;
  const defaultValue = 0;
  let fraction = min;
  let value = defaultValue;

  if (typeof attrs.value === "function") {
    const v = attrs.value();
    value = (v !== undefined) ? v : defaultValue;
  } else {
    value = (attrs.value !== undefined) ? attrs.value : defaultValue;
  }

  const setValue = v => {
    if (v < min) v = min;
    if (v > max) v = max;
    value = step ? (Math.round(v / step) * step) : v;
    fraction = (value - min) / (max - min);
    if (attrs.getValue) {
      attrs.getValue(value);
    }
  };

  setValue(value);

  vnode.state = Object.assign(vnode.state, {
    min,
    max,
    trackEl: null,
    controlEl: null,
    pinEl: null,
    setValue,
    value: () => value,
    fraction: () => fraction,
    increase: multiply => setValue(value + (multiply ? 10 : 1) * (step || 1)),
    decrease: multiply => setValue(value - (multiply ? 10 : 1) * (step || 1)),
    isActive: false,
    hasFocus: false,
    isDragging: false,
    // coordinates
    controlWidth: 0,
    rangeWidth: 0,
    rangeOffset: 0,
    clickOffset: 0
  });
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit,
  view
};

