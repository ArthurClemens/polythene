(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core']));
}(this, (function (exports,polytheneTheme,polytheneCore) { 'use strict';

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var lightForeground = polytheneTheme.vars.color_light_foreground;
  var darkForeground = polytheneTheme.vars.color_dark_foreground;
  var activeColor = polytheneTheme.vars.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'
  var thumb_size = 12;
  var thumb_touch_size = Math.max(40, thumb_size);
  var thumb_border_width = 2;
  var active_thumb_scale = 3 / 2;
  var disabled_thumb_scale = 1 / 2;
  var active_pin_thumb_scale = 2 / 6;
  var largestThumbSize = active_thumb_scale * thumb_size;
  var largestElement = Math.max(thumb_touch_size, largestThumbSize);
  var height = Math.max(52, largestThumbSize);
  var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
  var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

  var themeVars = {
    general_styles: true,

    active_pin_thumb_scale: active_pin_thumb_scale,
    active_thumb_scale: active_thumb_scale,
    animation_duration: polytheneTheme.vars.animation_duration,
    bar_height: 2,
    disabled_thumb_scale: disabled_thumb_scale,
    height: height,
    horizontal_layout_side_spacing: horizontal_layout_side_spacing,
    pin_font_size: 10,
    pin_height: 32,
    pin_width: 26,
    side_spacing: side_spacing,
    step_width: 2,
    thumb_border_width: thumb_border_width,
    thumb_size: thumb_size,
    thumb_touch_size: thumb_touch_size,
    track_height: height,

    color_light_track_active: rgba(lightForeground, .38),
    color_light_track_inactive: rgba(lightForeground, .26),
    color_light_track_value: "currentColor",
    // background color may be set in theme; disabled by default
    // color_light_thumb_background:        undefined,
    color_light_thumb_off: rgba(lightForeground, .26),
    color_light_thumb_off_focus: rgba(lightForeground),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on: rgba(activeColor),
    color_light_thumb_on_focus_opacity: .11,
    color_light_thumb_inactive: rgba(lightForeground, .26),
    color_light_tick: rgba(lightForeground, 1),
    color_light_tick_value: rgba(lightForeground, 1),
    color_light_icon: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled_icon: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_label: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled_label: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_pin_label: "#fff",
    color_light_pin_background: "currentColor",

    color_dark_track_active: rgba(darkForeground, .3),
    color_dark_track_inactive: rgba(darkForeground, .2),
    color_dark_track_value: "currentColor",
    // background color may be set in theme; disabled by default
    // color_dark_thumb_background:         undefined,
    color_dark_thumb_off: rgba(darkForeground, .2),
    color_dark_thumb_off_focus: rgba(darkForeground),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on: rgba(activeColor),
    color_dark_thumb_on_focus_opacity: .11,
    color_dark_thumb_inactive: rgba(darkForeground, .2),
    color_dark_tick: rgba(darkForeground, 1),
    color_dark_tick_value: rgba(darkForeground, 1),
    color_dark_icon: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled_icon: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_label: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled_label: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_pin_label: "#fff",
    color_dark_pin_background: "currentColor"
  };

  var classes = {
    component: "pe-slider",

    // elements
    control: "pe-slider__control",
    label: "pe-slider__label",
    pin: "pe-slider__pin",
    thumb: "pe-slider__thumb",
    tick: "pe-slider__tick",
    ticks: "pe-slider__ticks",
    track: "pe-slider__track",
    trackBar: "pe-slider__track-bar",
    trackBarValue: "pe-slider__track-bar-value",
    trackPart: "pe-slider__track-part",
    trackPartRest: "pe-slider__track-rest",
    trackPartValue: "pe-slider__track-value",

    // states
    hasFocus: "pe-slider--focus",
    hasPin: "pe-slider--pin",
    hasTicks: "pe-slider--ticks",
    hasTrack: "pe-slider--track",
    isActive: "pe-slider--active",
    isAtMin: "pe-slider--min",
    isDisabled: "pe-slider--disabled",
    tickValue: "pe-slider__tick--value"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MAX_TICKS = 100;
  var focusElement = void 0;

  var deFocus = function deFocus(state) {
    if (focusElement) {
      focusElement.blur();
    }
    focusElement = undefined;
    state.hasFocus(false);
  };

  var focus = function focus(state, el) {
    deFocus(state);
    focusElement = el;
    state.hasFocus(true);
  };

  var positionFromEvent = function positionFromEvent(e, isVertical) {
    return (
      // isVertical not yet implemented
      polytheneCore.isTouch && e.touches ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX
    );
  };

  var updatePinPosition = function updatePinPosition(state) {
    if (state.controlEl && state.pinEl) {
      var left = state.fraction() * state.rangeWidth;
      state.pinEl.style.left = left + "px";
    }
  };

  var updateValue = function updateValue(state, value) {
    state.setValue(value, true);
    updatePinPosition(state);
  };

  var generateTickMarks = function generateTickMarks(h, stepCount, stepSize, value) {
    var items = [];
    var stepWithValue = value / stepSize;
    console.log("stepSize", stepSize, "value", value, "stepWithValue", stepWithValue);
    var s = 0;
    while (s < stepCount + 1) {
      items.push(h("div", {
        className: s <= stepWithValue ? [classes.tick, classes.tickValue].join(" ") : classes.tick,
        key: "tick-" + s
      }));
      s++;
    }
    return items;
  };

  var readRangeData = function readRangeData(state) {
    if (state.controlEl && polytheneCore.isClient) {
      // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
      state.controlWidth = themeVars.thumb_size;
      state.rangeWidth = state.trackEl.getBoundingClientRect().width - state.controlWidth;
      var styles = window.getComputedStyle(state.trackEl);
      state.rangeOffset = parseFloat(styles.marginLeft);
    }
  };

  var calculateClickOffset = function calculateClickOffset(state) {
    var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    state.clickOffset = state.trackEl.getBoundingClientRect().left - (state.rangeOffset - state.controlWidth / 2) + controlOffset;
  };

  var initControlEvent = function initControlEvent(state, e) {
    var controlPos = state.controlEl.getBoundingClientRect().left;
    var eventPos = positionFromEvent(e);
    var controlOffset = eventPos - controlPos - state.controlWidth / 2;
    calculateClickOffset(state, controlOffset);
  };

  var initTrackEvent = function initTrackEvent(state) {
    return calculateClickOffset(state, 0);
  };

  var handlePosEvent = function handlePosEvent(state, e) {
    var pos = positionFromEvent(e) - state.clickOffset;
    var value = state.min + (pos - state.rangeOffset) / state.rangeWidth * (state.max - state.min);
    updateValue(state, value);
  };

  var startDrag = function startDrag(state, attrs, e) {
    if (state.isDragging()) return;
    e.preventDefault();
    state.isDragging(true);
    state.isActive(true);
    deFocus(state);

    var drag = function drag(e) {
      if (!state.isDragging()) return;
      handlePosEvent(state, e);
    };

    var endDrag = function endDrag() {
      if (!state.isDragging()) return;
      deFocus(state);
      if (polytheneCore.isClient) {
        polytheneCore.pointerMoveEvent.forEach(function (evt) {
          return window.removeEventListener(evt, drag);
        });
        polytheneCore.pointerEndMoveEvent.forEach(function (evt) {
          return window.removeEventListener(evt, endDrag);
        });
      }
      state.isDragging(false);
      state.isActive(false);
    };

    if (polytheneCore.isClient) {
      polytheneCore.pointerMoveEvent.forEach(function (evt) {
        return window.addEventListener(evt, drag);
      });
      polytheneCore.pointerEndMoveEvent.forEach(function (evt) {
        return window.addEventListener(evt, endDrag);
      });
    }
    readRangeData(state);

    if (attrs.pin) {
      updatePinPosition(state);
    }
  };

  var startTrack = function startTrack(state, attrs, e) {
    e.preventDefault();
    if (state.isDragging()) {
      return;
    }
    readRangeData(state);
    initTrackEvent(state);
    handlePosEvent(state, e);
    startDrag(state, attrs, e);
  };

  var createSlider = function createSlider(vnode, _ref) {
    var _ref2;

    var h = _ref.h,
        k = _ref.k,
        hasTicks = _ref.hasTicks,
        interactiveTrack = _ref.interactiveTrack;

    var state = vnode.state;
    var attrs = vnode.attrs;
    var fraction = state.fraction();
    var range = state.max - state.min;
    var stepCount = Math.min(MAX_TICKS, parseInt(range / state.stepSize, 10));

    console.log("value", state.value(), "state.stepSize", state.stepSize);
    var onStartTrack = function onStartTrack(e) {
      return startTrack(state, attrs, e);
    };

    var onInitDrag = function onInitDrag(e) {
      readRangeData(state);
      initControlEvent(state, e);
      startDrag(state, attrs, e);
    };

    var flexValueCss = fraction + " 1 0%";
    var flexRestValue = 1 - fraction;
    var flexRestCss = flexRestValue + " 1 0%";

    return h("div", _extends({}, { className: classes.track }, interactiveTrack && !attrs.disabled && polytheneCore.pointerStartMoveEvent.reduce(function (acc, evt) {
      return acc[k["on" + evt]] = onStartTrack, acc;
    }, {})), [h("div", {
      className: classes.trackPart + " " + classes.trackPartValue,
      key: "trackPartValue",
      style: {
        flex: flexValueCss,
        msFlex: flexValueCss,
        WebkitFlex: flexValueCss
      }
    }, h("div", { className: classes.trackBar }, h("div", { className: classes.trackBarValue }))), h("div", _extends({}, {
      className: classes.control,
      key: "control"
    }, attrs.disabled ? { disabled: true } : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onfocus, function () {
      return focus(state, state.controlEl);
    }), _defineProperty(_ref2, k.onblur, function () {
      return deFocus(state);
    }), _defineProperty(_ref2, k.onkeydown, function (e) {
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
    }), _ref2), !attrs.disabled && polytheneCore.pointerStartMoveEvent.reduce(function (acc, evt) {
      return acc[k["on" + evt]] = onInitDrag, acc;
    }, {}), attrs.events ? attrs.events : null, hasTicks ? { step: stepCount } : null), attrs.icon ? h("div", {
      className: classes.thumb,
      key: "icon"
    }, attrs.icon) : null), h("div", {
      className: classes.trackPart + " " + classes.trackPartRest,
      key: "trackPartRest",
      style: {
        flex: flexRestCss,
        msFlex: flexRestCss,
        WebkitFlex: flexRestCss,
        maxWidth: flexRestValue * 100 + "%" // for IE Edge
      }
    }, h("div", { className: classes.trackBar }, h("div", { className: classes.trackBarValue }))), hasTicks && !attrs.disabled ? h("div", {
      className: classes.ticks,
      key: "ticks"
    }, generateTickMarks(h, stepCount, state.stepSize, state.value())) : null, hasTicks && attrs.pin && !attrs.disabled ? h("div", {
      className: classes.pin,
      key: "pin",
      value: state.value()
    }) : null]);
  };

  var getInitialState = function getInitialState(vnode, createStream) {
    var attrs = vnode.attrs;

    var min = attrs.min !== undefined ? attrs.min : 0;
    var max = attrs.max !== undefined ? attrs.max : 100;
    var range = max - min;
    var stepSize = attrs.stepSize !== undefined ? attrs.stepSize : 1;
    var defaultValue = attrs.defaultValue !== undefined ? attrs.defaultValue : attrs.value !== undefined ? attrs.value : 0;
    var previousValue = createStream(undefined);
    var isActive = createStream(false);
    var hasFocus = createStream(false);
    var isDragging = createStream(false);
    var fraction = createStream(min);
    var value = createStream(0);
    var normalizeFactor = 1 / stepSize;

    var setValue = function setValue(v) {
      var shouldNotify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (v < min) v = min;
      if (v > max) v = max;
      value(stepSize ? Math.round(v * normalizeFactor) / normalizeFactor : v);
      fraction((value() - min) / range);
      if (shouldNotify && attrs.onChange) {
        attrs.onChange({
          value: value()
        });
      }
      previousValue(v);
    };

    var increment = function increment(state, useLargeStep) {
      return updateValue(state, value() + (useLargeStep ? 10 : 1) * (stepSize || 1));
    };

    var decrement = function decrement(state, useLargeStep) {
      return updateValue(state, value() - (useLargeStep ? 10 : 1) * (stepSize || 1));
    };

    setValue(defaultValue);

    return {
      min: min,
      max: max,
      stepSize: stepSize,
      fraction: fraction,
      // DOM elements
      trackEl: null,
      controlEl: null,
      pinEl: null,
      // functions
      setValue: setValue,
      increment: increment,
      decrement: decrement,
      // streams
      isDragging: isDragging,
      isActive: isActive,
      value: value,
      previousValue: previousValue,
      hasFocus: hasFocus,
      // coordinates
      controlWidth: 0,
      rangeWidth: 0,
      rangeOffset: 0,
      clickOffset: 0,
      redrawOnUpdate: createStream.merge([isActive, value])
    };
  };

  var onMount = function onMount(vnode) {
    if (!vnode.dom) {
      return;
    }
    var dom = vnode.dom;
    var state = vnode.state;
    var attrs = vnode.attrs;

    state.trackEl = dom.querySelector("." + classes.track);
    state.controlEl = dom.querySelector("." + classes.control);
    state.pinEl = dom.querySelector("." + classes.pin);

    readRangeData(state);

    if (attrs.pin) {
      setTimeout(function () {
        updateValue(state, state.value());
      }, 0);
    }
  };

  var createProps = function createProps(vnode, _ref3) {
    var k = _ref3.keys;

    var state = vnode.state;
    var attrs = vnode.attrs;
    if (attrs.value !== undefined) {
      if (state.previousValue() !== attrs.value) {
        state.previousValue(attrs.value);
        setTimeout(function () {
          return state.setValue(state.previousValue());
        }, 0); // perform in next tick to play nice with React
      }
    }
    var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
    var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.disabled ? classes.isDisabled : null, attrs.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, state.isActive() ? classes.isActive : null, state.hasFocus() ? classes.hasFocus : null, state.fraction() === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    });
  };

  var createContent = function createContent(vnode, _ref4) {
    var h = _ref4.renderer,
        k = _ref4.keys;

    var attrs = vnode.attrs;
    var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
    var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
    return createSlider(vnode, { h: h, k: k, hasTicks: hasTicks, interactiveTrack: interactiveTrack });
  };

  var slider = /*#__PURE__*/Object.freeze({
    getInitialState: getInitialState,
    onMount: onMount,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreSlider = slider;
  exports.vars = themeVars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-slider.js.map
