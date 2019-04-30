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
  var _ref4;

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

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      hasMouseOver = _useState8[0],
      setHasMouseOver = _useState8[1];

  var disabled = props.disabled;
  var inactive = props.inactive || isInactive;
  var onClickHandler = props.events && props.events[a.onclick];
  var onKeyUpHandler = props.events && props.events[a.onkeyup] || onClickHandler;

  var _ref2 = props.raised ? useAnimatedShadow(_objectSpread({
    useState: useState,
    useEffect: useEffect,
    useRef: useRef,
    domElement: domElement
  }, props)) : [0],
      _ref3 = _slicedToArray(_ref2, 1),
      shadowDepth = _ref3[0];

  var handleInactivate = function handleInactivate() {
    return setIsInactive(true), setTimeout(function () {
      return setIsInactive(false);
    }, props.inactivate * 1000);
  };

  useEffect(function () {
    if (!domElement || !domElement.addEventListener) return;

    var onFocus = function onFocus() {
      return setHasFocus(!hasMouseOver);
    };

    var onBlur = function onBlur() {
      return setHasFocus(false);
    };

    var onMouseOver = function onMouseOver() {
      return setHasMouseOver(true);
    };

    var onMouseOut = function onMouseOut() {
      return setHasMouseOver(false);
    };

    var onClick = handleInactivate;
    domElement.addEventListener("focus", onFocus, false);
    domElement.addEventListener("blur", onBlur, false);
    domElement.addEventListener("mouseover", onMouseOver, false);
    domElement.addEventListener("mouseout", onMouseOut, false);
    domElement.addEventListener("click", onClick, false);
    return function () {
      domElement.removeEventListener("focus", onFocus, false);
      domElement.removeEventListener("blur", onBlur, false);
      domElement.removeEventListener("mouseover", onBlur, false);
      domElement.removeEventListener("mouseout", onMouseOut, false);
      domElement.removeEventListener("click", onClick, false);
    };
  }, [domElement]);

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    add: [a.formaction, "type"],
    remove: ["style", "ref"]
  }), // Set style on content, not on component
  getDom(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.getDom && props.getDom(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.super, props.parentClassName || classes.component, props.contained ? classes.contained : null, props.raised ? classes.contained : null, props.raised ? classes.raised : null, props.selected ? classes.selected : null, props.highLabel ? classes.highLabel : null, props.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, props.separatorAtStart ? classes.separatorAtStart : null, props.border || props.borders ? classes.border : null, props.dropdown ? classes.hasDropdown : null, props.dropdown ? props.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  }, props.events, inactive ? null : (_ref4 = {}, _defineProperty(_ref4, a.tabindex, disabled || inactive ? -1 : props[a.tabindex] || 0), _defineProperty(_ref4, a.onclick, onClickHandler), _defineProperty(_ref4, a.onkeyup, function (e) {
    if (e.keyCode === 13 && hasFocus) {
      setHasFocus(false);

      if (onKeyUpHandler) {
        onKeyUpHandler(e);
      }
    }
  }), _ref4), props.url, disabled ? {
    disabled: true
  } : null);

  var noink = props.ink !== undefined && props.ink === false;
  var label = props.content ? props.content : props.label !== undefined ? _typeof(props.label) === "object" ? props.label : h("div", {
    className: classes.label
  }, h("div", {
    className: classes.textLabel,
    style: props.textStyle
  }, props.label)) : props.children;
  var noWash = disabled // if disabled: no wash
  || props.raised && props.wash !== true // if raised/contained: enable wash if true
  || props.wash !== undefined && !props.wash; // otherwise: enable wash unless false

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
  }, props.ripple)), noWash ? null : h("div", {
    key: "wash",
    className: classes.wash
  }), label, props.dropdown ? h(Icon, {
    className: classes.dropdown,
    key: "dropdown",
    svg: {
      content: h.trust(iconDropdownDown)
    }
  }) : null]));
};

export { _Button };
