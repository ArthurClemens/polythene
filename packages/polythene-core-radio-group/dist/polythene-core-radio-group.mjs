import { filterSupportedAttributes } from 'polythene-core';

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
  component: "pe-radio-group"
};

var _RadioGroup = function _RadioGroup(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      RadioButton = _ref.RadioButton,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "RadioButton"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      checkedIndex = _useState2[0],
      setCheckedIndex = _useState2[1];

  var buttons = props.content || props.buttons || props.children;
  useEffect(function () {
    var index = buttons.reduce(function (acc, buttonOpts, index) {
      if (buttonOpts.value === undefined) {
        console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
      }

      return acc !== null ? acc : buttonOpts.defaultChecked !== undefined || props.defaultCheckedValue !== undefined && buttonOpts.value === props.defaultCheckedValue || props.defaultSelectedValue !== undefined && buttonOpts.value === props.defaultSelectedValue // deprecated
      ? index : acc;
    }, null);
    setCheckedIndex(index);
  }, []);

  var componentProps = _extends({}, filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  });

  var groupCheckedValue = props.checkedValue;
  var contents = buttons.length ? buttons.map(function (buttonOpts, index) {
    if (!buttonOpts) {
      return null;
    }

    var isChecked = buttonOpts.checked !== undefined ? buttonOpts.checked : groupCheckedValue !== undefined ? buttonOpts.value === groupCheckedValue : checkedIndex === index;
    return h(RadioButton, _extends({}, {
      /* group attributes that may be overwritten by individual buttons */
      name: props.name,
      key: buttonOpts.value
    }, props.all,
    /* individual button options */
    buttonOpts, {
      /* this component's options */
      onChange: function onChange(_ref2) {
        var value = _ref2.value;
        return setCheckedIndex(index), props.onChange && props.onChange({
          value: value
        });
      },
      checked: isChecked
    }));
  }) : null;
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};

export { _RadioGroup };
