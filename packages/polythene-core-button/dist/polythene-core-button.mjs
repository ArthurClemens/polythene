import { isServer, pointerStartMoveEvent, pointerEndMoveEvent, filterSupportedAttributes, iconDropdownDown } from 'polythene-core';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
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
  component: "pe-text-button",
  super: "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  focus: "pe-button--focus",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start"
};

var DEFAULT_SHADOW_DEPTH = 1;
var DEFAULT_SHADOW_DEPTH_INCREASE = 1;
var MAX_SHADOW_DEPTH = 5;
var downButtons = [];
/*
useRef combined with useState to enforce re-render.
*/

var useStateWithRef = function useStateWithRef(_ref) {
  var useState = _ref.useState,
      useRef = _ref.useRef;
  return function (initialValue) {
    var value = useRef(initialValue);

    var _useState = useState(value.current),
        _useState2 = _slicedToArray(_useState, 2),
        setValue = _useState2[1];

    return [value, function (newValue) {
      return value.current = newValue, setValue(value.current);
    }];
  };
};

var animateZ = function animateZ(which, getButtonProps) {
  var _getButtonProps = getButtonProps(),
      shadowDepthBase = _getButtonProps.shadowDepthBase,
      shadowDepthRef = _getButtonProps.shadowDepthRef,
      setShadowDepth = _getButtonProps.setShadowDepth,
      increase = _getButtonProps.increase;

  var newShadowDepth = which === "down" && shadowDepthBase < MAX_SHADOW_DEPTH ? Math.min(shadowDepthBase + increase, MAX_SHADOW_DEPTH) : which === "up" ? Math.max(shadowDepthRef.current - increase, shadowDepthBase) : shadowDepthRef.current;

  if (newShadowDepth !== shadowDepthRef.current) {
    setShadowDepth(newShadowDepth);
  }
};

var tapHandler = function tapHandler(_ref2) {
  var which = _ref2.which,
      getButtonProps = _ref2.getButtonProps;

  if (which === "down") {
    downButtons.push(getButtonProps);
  }

  animateZ(which, getButtonProps);
};

var useAnimatedShadow = function useAnimatedShadow(_ref3) {
  var useState = _ref3.useState,
      useEffect = _ref3.useEffect,
      useRef = _ref3.useRef,
      domElement = _ref3.domElement,
      props = _objectWithoutProperties(_ref3, ["useState", "useEffect", "useRef", "domElement"]);

  var _useState3 = useState(props.shadowDepth !== undefined ? props.shadowDepth : DEFAULT_SHADOW_DEPTH),
      _useState4 = _slicedToArray(_useState3, 1),
      shadowDepthBase = _useState4[0];

  var _useStateWithRef = useStateWithRef({
    useState: useState,
    useRef: useRef
  })(shadowDepthBase),
      _useStateWithRef2 = _slicedToArray(_useStateWithRef, 2),
      shadowDepthRef = _useStateWithRef2[0],
      setShadowDepth = _useStateWithRef2[1];

  var increase = props.increase || DEFAULT_SHADOW_DEPTH_INCREASE;
  var animateOnTap = props.animateOnTap !== false ? true : false;

  var getButtonProps = function getButtonProps() {
    return {
      shadowDepthBase: shadowDepthBase,
      shadowDepthRef: shadowDepthRef,
      setShadowDepth: setShadowDepth,
      increase: increase
    };
  };

  useEffect(function () {
    // Init tap events
    if (isServer || !domElement || !animateOnTap) return;

    var tapStart = function tapStart() {
      return tapHandler({
        which: "down",
        getButtonProps: getButtonProps
      });
    };

    var tapEndAll = function tapEndAll() {
      downButtons.map(function (getButtonProps) {
        return tapHandler({
          which: "up",
          getButtonProps: getButtonProps
        });
      });
      downButtons.length = 0;
    };

    pointerStartMoveEvent.forEach(function (evt) {
      return domElement.addEventListener(evt, tapStart);
    });
    pointerEndMoveEvent.forEach(function (evt) {
      return document.addEventListener(evt, tapEndAll);
    }); // Clear tap events

    return function () {
      pointerStartMoveEvent.forEach(function (evt) {
        return domElement.removeEventListener(evt, tapStart);
      });
      pointerEndMoveEvent.forEach(function (evt) {
        return document.removeEventListener(evt, tapEndAll);
      });
    };
  }, [domElement]);
  var shadowDepth = props.disabled ? 0 : shadowDepthRef.current;
  return [shadowDepth];
};

var _Button = function _Button(_ref) {
  var _objectSpread2, _objectSpread3;

  var h = _ref.h,
      a = _ref.a,
      getDom = _ref.getDom,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      Ripple = _ref.Ripple,
      Shadow = _ref.Shadow,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "getDom", "useState", "useEffect", "useRef", "Ripple", "Shadow", "Icon"]);

  var events = props.events || {};

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(props.inactive),
      _useState4 = _slicedToArray(_useState3, 2),
      isInactive = _useState4[0],
      setIsInactive = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasFocus = _useState6[0],
      setHasFocus = _useState6[1];

  var disabled = props.disabled;
  var inactive = props.inactive || isInactive;

  var onClickHandler = events[a.onclick] || function () {};

  var onKeyUpHandler = events[a.onkeyup] || onClickHandler;

  var _ref2 = props.raised ? useAnimatedShadow(_objectSpread({
    useState: useState,
    useEffect: useEffect,
    useRef: useRef,
    domElement: domElement
  }, props)) : [0],
      _ref3 = _slicedToArray(_ref2, 1),
      shadowDepth = _ref3[0];

  var handleInactivate = function handleInactivate() {
    if (props.inactivate === undefined) {
      return;
    }

    setIsInactive(true);
    setTimeout(function () {
      return setIsInactive(false);
    }, props.inactivate * 1000);
  };

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    add: [a.formaction, "type"],
    remove: ["style"]
  }), // Set style on content, not on component
  getDom(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.getDom && props.getDom(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.super, props.parentClassName || classes.component, props.contained ? classes.contained : null, props.raised ? classes.contained : null, props.raised ? classes.raised : null, hasFocus ? classes.focus : null, props.selected ? classes.selected : null, props.highLabel ? classes.highLabel : null, props.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, props.separatorAtStart ? classes.separatorAtStart : null, props.border || props.borders ? classes.border : null, props.dropdown ? classes.hasDropdown : null, props.dropdown ? props.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  }, inactive ? null : _objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, a.tabindex, disabled || inactive ? -1 : props[a.tabindex] || 0), _defineProperty(_objectSpread2, a.onfocus, function (e) {
    return setHasFocus(true), events[a.onfocus] && events[a.onfocus](e);
  }), _defineProperty(_objectSpread2, a.onblur, function (e) {
    return setHasFocus(false), events[a.onblur] && events[a.onblur](e);
  }), _objectSpread2), events, (_objectSpread3 = {}, _defineProperty(_objectSpread3, a.onclick, function (e) {
    return setHasFocus(false), handleInactivate(e), onClickHandler(e);
  }), _defineProperty(_objectSpread3, a.onkeyup, function (e) {
    // With focus, trigger click with ENTER and with SPACE
    if (hasFocus) {
      if (e.keyCode === 13 || e.keyCode == 0 || e.keyCode == 32) {
        setHasFocus(false);
        onKeyUpHandler(e);
      }
    }
  }), _objectSpread3)), props.url, disabled ? {
    disabled: true
  } : null);

  var noink = props.ink !== undefined && props.ink === false;
  var label = props.content ? props.content : props.label !== undefined ? _typeof(props.label) === "object" ? props.label : h("div", {
    className: classes.label
  }, h("div", {
    className: classes.textLabel,
    style: props.textStyle
  }, props.label)) : props.children;
  /*
  Use wash to indicate focus, or hover when not a raised button.
  */

  var showWash = !disabled && (props.raised &&
  /* hasFocus ||  */
  props.wash === true || !props.raised &&
  /* hasFocus &&  */
  props.wash !== false);
  return h(props.element || "div", componentProps, h("div", {
    className: classes.content,
    style: props.style
  }, [h(Shadow, {
    key: "shadow",
    shadowDepth: shadowDepth !== undefined ? shadowDepth : 0,
    animated: true
  }), disabled || noink ? null : h(Ripple, _extends({}, {
    key: "ripple",
    target: domElement
  }, props.ripple)), showWash ? h("div", {
    key: "wash",
    className: classes.wash
  }) : null, label, props.dropdown ? h(Icon, {
    className: classes.dropdown,
    key: "dropdown",
    svg: {
      content: h.trust(iconDropdownDown)
    }
  }) : null]));
};

export { _Button };
