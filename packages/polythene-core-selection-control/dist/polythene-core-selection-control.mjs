import { classForSize, filterSupportedAttributes } from 'polythene-core';

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
  component: "pe-control",
  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",
  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",
  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",
  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
};

var _SelectionControl = function _SelectionControl(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      ViewControl = _ref.ViewControl,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "ViewControl"]);

  // remove unused props
  delete props.key;
  var defaultChecked = props.defaultChecked !== undefined ? props.defaultChecked : props.checked || false;

  var _useState = useState(defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      previousIsChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var _useState3 = useState(props.selectable),
      _useState4 = _slicedToArray(_useState3, 2),
      isSelectable = _useState4[0],
      setIsSelectable = _useState4[1];

  var isChecked = props.checked !== undefined ? props.checked : previousIsChecked;
  var inactive = props.disabled || !isSelectable; // define isSelectable
  // This variable is set in the next tick to allow button interaction (e.g. ripples) to show
  // before the button is set to inactive state

  useEffect(function () {
    var selectable = props.selectable !== undefined ? props.selectable(isChecked) : false;

    if (selectable !== isSelectable) {
      setIsSelectable(selectable);
    }
  }, [props.selectable, isChecked]);

  var notifyChange = function notifyChange(e, isChecked) {
    if (props.onChange) {
      props.onChange({
        event: e,
        checked: isChecked,
        value: props.value
      });
    }
  };

  var onChange = function onChange(e) {
    var isChecked = e.currentTarget.checked;

    if (props.type === "radio") ; else {
      setIsChecked(isChecked);
    }

    notifyChange(e, isChecked);
  };

  var toggle = function toggle(e) {
    var newChecked = !isChecked;
    setIsChecked(newChecked);
    notifyChange(e, newChecked);
  };

  var viewControlClickHandler = props.events && props.events[a.onclick];
  var viewControlKeyDownHandler = props.events && props.events[a.onkeydown] ? props.events[a.onkeydown] : function (e) {
    if (e.key === "Enter" || e.keyCode === 32) {
      e.preventDefault();

      if (viewControlClickHandler) {
        viewControlClickHandler(e);
      } else {
        toggle(e);
      }
    }
  };

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    remove: ["style"]
  }), // Set style on view control
  props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.instanceClass, // for instance pe-checkbox-control
    isChecked ? classes.on : classes.off, props.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForSize(classes, props.size), props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = h("label", _extends({}, {
    className: classes.formLabel
  }, viewControlClickHandler && _defineProperty({}, a.onclick, function (e) {
    return e.preventDefault(), viewControlClickHandler(e);
  })), [props.before, h(ViewControl, _extends({}, props, {
    inactive: inactive,
    checked: isChecked,
    events: _defineProperty({}, a.onkeydown, viewControlKeyDownHandler)
  })), props.label ? h(".".concat(classes.label), props.label) : null, h("input", _extends({}, props.events, {
    name: props.name,
    type: props.type,
    value: props.value,
    checked: isChecked
  }, props.disabled || inactive ? _defineProperty({}, a.readonly, "readonly") : _defineProperty({}, a.onchange, onChange))), props.after]);
  return h(props.element || "div", componentProps, content);
};

var CONTENT = [{
  iconType: "iconOn",
  className: classes.buttonOn
}, {
  iconType: "iconOff",
  className: classes.buttonOff
}];

var createIcon = function createIcon(h, iconType, props, className) {
  return (// if props.iconOn/props.iconOff is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends({}, {
      className: className
    }, props[iconType] ? props[iconType] : {
      svg: {
        content: h.trust(props.icons[iconType])
      }
    }, props.icon, props.size ? {
      size: props.size
    } : null)
  );
};

var _ViewControl = function _ViewControl(_ref) {
  var h = _ref.h,
      Icon = _ref.Icon,
      IconButton = _ref.IconButton,
      props = _objectWithoutProperties(_ref, ["h", "Icon", "IconButton"]);

  var element = props.element || ".".concat(classes.box);
  var content = h(IconButton, _extends({}, {
    element: "div",
    className: classes.button,
    style: props.style,
    content: CONTENT.map(function (o) {
      return h(Icon, createIcon(h, o.iconType, props, o.className));
    }),
    ripple: {
      center: true
    },
    disabled: props.disabled,
    events: props.events,
    inactive: props.inactive
  }, props.iconButton // for example for hover behaviour
  ));
  return h(element, null, content);
};

export { _SelectionControl, _ViewControl };
