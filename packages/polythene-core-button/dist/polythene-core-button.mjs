import { filterSupportedAttributes, iconDropdownDown } from 'polythene-core';
import { getDepthClass } from 'polythene-core-shadow';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var classes = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
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
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};

var shadowClasses = {
  component: "pe-shadow",
  // elements      
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-",
  with_active_shadow: "pe-with-active-shadow"
};

var DEFAULT_SHADOW_DEPTH = 1;
var _Button = function _Button(_ref) {
  var _objectSpread2$1;

  var h = _ref.h,
      a = _ref.a,
      getRef = _ref.getRef,
      useState = _ref.useState;
      _ref.useEffect;
      _ref.useRef;
      var Ripple = _ref.Ripple,
      Shadow = _ref.Shadow,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "getRef", "useState", "useEffect", "useRef", "Ripple", "Shadow", "Icon"]);

  var events = props.events || {};

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(props.inactive),
      _useState4 = _slicedToArray(_useState3, 2),
      isInactive = _useState4[0],
      setIsInactive = _useState4[1];

  var disabled = props.disabled;
  var inactive = props.inactive || isInactive;

  var onClickHandler = events[a.onclick] || function () {};

  var onKeyUpHandler = events[a.onkeyup] || onClickHandler;
  var shadowDepth = props.raised ? props.shadowDepth !== undefined ? props.shadowDepth : DEFAULT_SHADOW_DEPTH : 0;
  var animateOnTap = props.animateOnTap !== false ? true : false;

  var handleInactivate = function handleInactivate() {
    if (props.inactivate === undefined) {
      return;
    }

    setIsInactive(true);
    setTimeout(function () {
      return setIsInactive(false);
    }, props.inactivate * 1000);
  };

  var hasHover = !disabled && !props.selected && (props.raised ? props.wash : props.wash !== false);

  var handleMouseLeave = function handleMouseLeave(e) {
    domElement.blur();
    domElement.removeEventListener("mouseleave", handleMouseLeave);
  };

  var aria = _extends({}, // default:
  props.element === "button" ? {
    role: "button"
  } : {}, // attrs:
  props.aria, // overrides:
  disabled || inactive ? {
    "aria-disabled": "true"
  } : undefined);

  var isAriaButton = aria.role === "button";

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    add: [a.formaction, "type"],
    remove: ["style"]
  }), // Set style on content, not on component
  getRef(function (dom) {
    if (!dom || domElement) {
      return;
    }

    setDomElement(dom);

    if (props.getRef) {
      props.getRef(dom);
    }
  }), props.testId && {
    "data-test-id": props.testId
  }, _defineProperty({
    className: [classes["super"], props.parentClassName || classes.component, props.contained ? classes.contained : undefined, // Raised button classes
    props.raised ? classes.contained : undefined, props.raised ? classes.raised : undefined, props.raised && animateOnTap ? shadowClasses.with_active_shadow : undefined, props.raised && animateOnTap ? getDepthClass(shadowDepth + 1) : undefined, //
    hasHover ? classes.hasHover : undefined, props.selected ? classes.selected : undefined, props.highLabel ? classes.highLabel : undefined, props.extraWide ? classes.extraWide : undefined, disabled ? classes.disabled : undefined, inactive ? classes.inactive : undefined, props.separatorAtStart ? classes.separatorAtStart : undefined, props.border || props.borders ? classes.border : undefined, props.dropdown ? classes.hasDropdown : undefined, props.dropdown ? props.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : undefined, props.tone === "dark" ? "pe-dark-tone" : undefined, props.tone === "light" ? "pe-light-tone" : undefined, props.className || props[a["class"]]].join(" ")
  }, a.tabindex, isAriaButton ? (props[a.tabindex] || 0).toString() : undefined), inactive ? null : _objectSpread2(_objectSpread2({}, events), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, a.onmousedown, function (e) {
    return domElement && domElement.addEventListener && domElement.addEventListener("mouseleave", handleMouseLeave), props.events && props.events[a.onmousedown] && props.events[a.onmousedown](e);
  }), _defineProperty(_objectSpread2$1, a.onclick, function (e) {
    return document.activeElement === domElement && document.activeElement.blur(), handleInactivate(), onClickHandler(e);
  }), _defineProperty(_objectSpread2$1, a.onkeyup, function (e) {
    if (document.activeElement === domElement) {
      if (e.key === "Space" || e.keyCode === 32 || isAriaButton && (e.key === "Enter" || e.keyCode === 13)) {
        // For accessibility: don't blur
        if (onKeyUpHandler) {
          onKeyUpHandler(e);
        }
      }

      if (props.events && props.events[a.onkeyup]) {
        props.events[a.onkeyup](e);
      }
    }
  }), _objectSpread2$1)), props.url, disabled ? {
    disabled: true
  } : undefined, aria);

  var noink = props.ink !== undefined && props.ink === false;
  var buttonContent = props.content ? props.content : props.label !== undefined ? _typeof(props.label) === "object" ? props.label : h("div", {
    className: classes.label
  }, h("div", {
    className: classes.textLabel,
    style: props.textStyle
  }, props.label)) : props.children;
  var componentContent = h("div", {
    className: classes.content,
    style: props.style
  }, [h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : 0,
    animated: true
  }), disabled || noink ? undefined : h(Ripple, _extends({}, {
    target: domElement
  }, props.ripple)), h("div", {
    className: classes.wash
  }, h("div", {
    className: classes.washColor
  })), buttonContent, props.dropdown ? h(Icon, {
    className: classes.dropdown,
    svg: {
      content: h.trust(iconDropdownDown)
    },
    "aria-hidden": "true"
  }) : null]);
  return h(props.element || "a", componentProps, [props.before, componentContent, props.after]);
};

export { _Button };
