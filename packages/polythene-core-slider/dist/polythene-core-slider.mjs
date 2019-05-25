import { filterSupportedAttributes, pointerStartDownEvent, isClient, getStyle, isTouch, pointerMoveEvent, pointerEndDownEvent } from 'polythene-core';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

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

var MAX_TICKS = 100;

var positionFromEvent = function positionFromEvent(e, isVertical) {
  return (// isVertical not yet implemented
    isTouch && e.touches ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX
  );
};

var _Slider = function _Slider(_ref) {
  var _ref3;

  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  var min = props.min !== undefined ? props.min : 0;
  var max = props.max !== undefined ? props.max : 100;
  var range = max - min;
  var stepSize = props.stepSize !== undefined ? props.stepSize : 1;
  var normalizeFactor = 1 / stepSize;
  var hasTicks = props.ticks !== undefined && props.ticks !== false;
  var interactiveTrack = props.interactiveTrack !== undefined ? props.interactiveTrack : true;
  var stepCount = Math.min(MAX_TICKS, parseInt(range / stepSize, 10));
  var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.value !== undefined ? props.value : 0;
  var focusElementRef = useRef();
  var trackElRef = useRef();
  var controlElRef = useRef();
  var pinElRef = useRef();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(min),
      _useState4 = _slicedToArray(_useState3, 2),
      fraction = _useState4[0],
      setFraction = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasFocus = _useState6[0],
      setHasFocus = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      previousValue = _useState10[0],
      setPreviousValue = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isActive = _useState12[0],
      setIsActive = _useState12[1];

  var isDraggingRef = useRef(false);
  var clickOffsetRef = useRef(0);
  var rangeWidthRef = useRef(0);
  var rangeOffsetRef = useRef(0);
  var controlWidthRef = useRef(0);

  var updatePinPosition = function updatePinPosition() {
    if (controlElRef.current && pinElRef.current) {
      var left = fraction * rangeWidthRef.current;
      pinElRef.current.style.left = left + "px";
    }
  };

  var generateTickMarks = function generateTickMarks(h, stepCount, stepSize, value) {
    var items = [];
    var stepWithValue = value / stepSize;
    var s = 0;

    while (s < stepCount + 1) {
      items.push(h("div", {
        className: s <= stepWithValue ? [classes.tick, classes.tickValue].join(" ") : classes.tick,
        key: "tick-".concat(s)
      }));
      s++;
    }

    return items;
  };

  var readRangeData = function readRangeData() {
    if (controlElRef.current && isClient) {
      // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
      controlWidthRef.current = parseFloat(getStyle({
        element: controlElRef.current,
        prop: "width"
      }));
      rangeWidthRef.current = trackElRef.current.getBoundingClientRect().width - controlWidthRef.current;
      var styles = window.getComputedStyle(trackElRef.current);
      rangeOffsetRef.current = parseFloat(styles.marginLeft);
    }
  };

  var updateClickOffset = function updateClickOffset() {
    var controlOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    clickOffsetRef.current = trackElRef.current.getBoundingClientRect().left - (rangeOffsetRef.current - controlWidthRef.current / 2) + controlOffset;
  };

  var initControlEvent = function initControlEvent(e) {
    var controlPos = controlElRef.current.getBoundingClientRect().left;
    var eventPos = positionFromEvent(e);
    var controlOffset = eventPos - controlPos - controlWidthRef.current / 2;
    updateClickOffset(controlOffset);
  };

  var initTrackEvent = function initTrackEvent() {
    return updateClickOffset(0);
  };

  var handlePosEvent = function handlePosEvent(e) {
    var pos = positionFromEvent(e) - clickOffsetRef.current;
    var newValue = min + (pos - rangeOffsetRef.current) / rangeWidthRef.current * range;
    updateValue(newValue);
  };

  var startDrag = function startDrag(e) {
    if (isDraggingRef.current) return;
    e.preventDefault();
    isDraggingRef.current = true;
    setIsActive(true);
    deFocus();

    var drag = function drag(e) {
      if (!isDraggingRef.current) return;
      handlePosEvent(e);
    };

    var endDrag = function endDrag() {
      if (!isDraggingRef.current) return;
      deFocus();

      if (isClient) {
        pointerMoveEvent.forEach(function (evt) {
          return window.removeEventListener(evt, drag);
        });
        pointerEndDownEvent.forEach(function (evt) {
          return window.removeEventListener(evt, endDrag);
        });
      }

      isDraggingRef.current = false;
      setIsActive(false);
    };

    if (isClient) {
      pointerMoveEvent.forEach(function (evt) {
        return window.addEventListener(evt, drag);
      });
      pointerEndDownEvent.forEach(function (evt) {
        return window.addEventListener(evt, endDrag);
      });
    }

    readRangeData();
  };

  var handleNewValue = function handleNewValue(_ref2) {
    var value = _ref2.value,
        _ref2$shouldNotify = _ref2.shouldNotify,
        shouldNotify = _ref2$shouldNotify === void 0 ? false : _ref2$shouldNotify;
    if (value < min) value = min;
    if (value > max) value = max;
    var newValue = stepSize ? Math.round(value * normalizeFactor) / normalizeFactor : value;
    setFraction((newValue - min) / range);
    setPreviousValue(newValue);
    setValue(newValue);

    if (shouldNotify && props.onChange) {
      props.onChange({
        value: newValue
      });
    }
  };

  var updateValue = function updateValue(value) {
    handleNewValue({
      value: value,
      shouldNotify: true
    });
  };

  var increment = function increment(useLargeStep) {
    return updateValue(value + (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var decrement = function decrement(useLargeStep) {
    return updateValue(value - (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var deFocus = function deFocus() {
    if (focusElementRef.current) {
      focusElementRef.current.blur();
    }

    focusElementRef.current = undefined;
    setHasFocus(false);
  };

  var focus = function focus(element) {
    deFocus();
    focusElementRef.current = element;
    setHasFocus(true);
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    trackElRef.current = domElement.querySelector(".".concat(classes.track));
    controlElRef.current = domElement.querySelector(".".concat(classes.control));
    pinElRef.current = domElement.querySelector(".".concat(classes.pin));
    readRangeData();
    handleNewValue({
      value: defaultValue
    });
  }, [domElement]);
  useEffect(function () {
    if (!props.pin) {
      return;
    }

    updatePinPosition();
  }, [value]); // Handle external changes of `value`

  useEffect(function () {
    if (previousValue !== props.value) {
      handleNewValue({
        value: props.value
      });
    }
  }, [props.value]);

  var componentProps = _extends({}, filterSupportedAttributes(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.disabled ? classes.isDisabled : null, props.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, isActive ? classes.isActive : null, hasFocus ? classes.hasFocus : null, fraction === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var onStartTrack = function onStartTrack(e) {
    e.preventDefault();

    if (isDraggingRef.current) {
      return;
    }

    readRangeData();
    initTrackEvent();
    handlePosEvent(e);
    startDrag(e);
  };

  var onInitDrag = function onInitDrag(e) {
    e.preventDefault();
    readRangeData();
    initControlEvent(e);
    startDrag(e);
  };

  var flexValueCss = fraction + " 1 0%";
  var flexRestValue = 1 - fraction;
  var flexRestCss = flexRestValue + " 1 0%";
  var content = [props.before, h("div", _extends({}, {
    className: classes.track
  }, interactiveTrack && !props.disabled && pointerStartDownEvent.reduce(function (acc, evt) {
    return acc[a["on".concat(evt)]] = onStartTrack, acc;
  }, {})), [h("div", {
    className: classes.trackPart + " " + classes.trackPartValue,
    key: "trackPartValue",
    style: {
      flex: flexValueCss,
      msFlex: flexValueCss,
      WebkitFlex: flexValueCss
    }
  }, h("div", {
    className: classes.trackBar
  }, h("div", {
    className: classes.trackBarValue
  }))), h("div", _extends({}, {
    className: classes.control,
    key: "control"
  }, props.disabled ? {
    disabled: true
  } : (_ref3 = {}, _defineProperty(_ref3, a.tabindex, props[a.tabindex] || 0), _defineProperty(_ref3, a.onfocus, function () {
    return focus(controlElRef.current);
  }), _defineProperty(_ref3, a.onblur, function () {
    return deFocus();
  }), _defineProperty(_ref3, a.onkeydown, function (e) {
    if (e.key !== "Tab") {
      e.preventDefault();
    }

    if (e.key === "Escape" || e.key === "Esc") {
      controlElRef.current.blur(e);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "Left" || e.key === "Down") {
      decrement(!!e.shiftKey);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "Right" || e.key === "Up") {
      increment(!!e.shiftKey);
    } else if (e.key === "Home") {
      updateValue(min);
    } else if (e.key === "End") {
      updateValue(max);
    } else if (e.key === "PageDown") {
      decrement(true);
    } else if (e.key === "PageUp") {
      increment(true);
    }

    readRangeData(); // updatePinPosition();
  }), _ref3), !props.disabled && pointerStartDownEvent.reduce(function (acc, evt) {
    return acc[a["on".concat(evt)]] = onInitDrag, acc;
  }, {}), props.events ? props.events : null, hasTicks ? {
    step: stepCount
  } : null), props.icon ? h("div", {
    className: classes.thumb,
    key: "icon"
  }, props.icon) : null), h("div", {
    className: classes.trackPart + " " + classes.trackPartRest,
    key: "trackPartRest",
    style: {
      flex: flexRestCss,
      msFlex: flexRestCss,
      WebkitFlex: flexRestCss,
      maxWidth: flexRestValue * 100 + "%" // for IE Edge

    }
  }, h("div", {
    className: classes.trackBar
  }, h("div", {
    className: classes.trackBarValue
  }))), hasTicks && !props.disabled ? h("div", {
    className: classes.ticks,
    key: "ticks"
  }, generateTickMarks(h, stepCount, stepSize, value)) : null, hasTicks && props.pin && !props.disabled ? h("div", {
    className: classes.pin,
    key: "pin",
    value: value
  }) : null]), props.after];
  return h(props.element || "div", componentProps, content);
};

export { _Slider };
