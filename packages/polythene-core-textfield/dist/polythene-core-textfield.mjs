import { createUid, processDataset, filterSupportedAttributes } from 'polythene-core';

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
  component: "pe-textfield",
  // elements
  counter: "pe-textfield__counter",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  focusHelp: "pe-textfield__help-focus",
  help: "pe-textfield__help",
  input: "pe-textfield__input",
  inputArea: "pe-textfield__input-area",
  label: "pe-textfield__label",
  optionalIndicator: "pe-textfield__optional-indicator",
  requiredIndicator: "pe-textfield__required-indicator",
  // states
  hasCounter: "pe-textfield--counter",
  hasFloatingLabel: "pe-textfield--floating-label",
  hasFullWidth: "pe-textfield--full-width",
  hideClear: "pe-textfield--hide-clear",
  hideSpinner: "pe-textfield--hide-spinner",
  hideValidation: "pe-textfield--hide-validation",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  stateDirty: "pe-textfield--dirty",
  stateDisabled: "pe-textfield--disabled",
  stateFocused: "pe-textfield--focused",
  stateInvalid: "pe-textfield--invalid",
  stateReadonly: "pe-textfield--readonly"
};

var DEFAULT_VALID_STATE = {
  invalid: false,
  message: undefined
};

var ignoreEvent = function ignoreEvent(props, name) {
  return props.ignoreEvents && props.ignoreEvents.indexOf(name) !== -1;
};

var _TextField = function _TextField(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  // Id to match the label to the control
  var uidRef = useRef(createUid());
  var defaultValue = props.defaultValue !== undefined && props.defaultValue !== null ? props.defaultValue.toString() : props.value !== undefined && props.value !== null ? props.value.toString() : "";

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isInvalid = _useState4[0],
      setIsInvalid = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      setHasFocus = _useState6[1];

  var _useState7 = useState(defaultValue),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var inputElRef = useRef();
  var previousValueRef = useRef();
  var previousStatusRef = useRef();
  var isDirtyRef = useRef();
  var hasFocusRef = useRef();
  var isTouchedRef = useRef();
  var errorRef = useRef();
  var inputType = props.multiLine ? "textarea" : "input";
  var showErrorPlaceholder = !!(props.valid !== undefined || props.validate || props.min || props.max || props[a.minlength] || props[a.maxlength] || props.required || props.pattern);

  var handleStateUpdate = function handleStateUpdate() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        type = _ref2.type,
        focus = _ref2.focus,
        value = _ref2.value;

    if (!inputElRef.current) {
      return;
    }

    if (value !== undefined) {
      inputElRef.current.value = value;
    }

    if (focus !== undefined) {
      hasFocusRef.current = focus;
      setHasFocus(focus); // force redraw

      if (focus) {
        inputElRef.current.focus();
      } else {
        inputElRef.current.blur();
      }
    }

    if (type === "input" && (props.validateOnInput || props.counter)) {
      isTouchedRef.current = inputElRef.current.value !== defaultValue;
    }

    if (type !== "input") {
      isTouchedRef.current = inputElRef.current.value !== defaultValue;
    }

    if (type === "onblur") {
      isTouchedRef.current = true;
    }

    isDirtyRef.current = inputElRef.current.value !== "";
    checkValidity();
    notifyState();

    if (previousValueRef.current !== inputElRef.current.value) {
      setValue(inputElRef.current.value); // force update
    }
  };

  var validateCustom = function validateCustom() {
    if (!inputElRef.current) {
      return DEFAULT_VALID_STATE;
    }

    var validState = props.validate(inputElRef.current.value);
    return {
      invalid: validState && !validState.valid,
      message: validState && validState.error
    };
  };

  var validateCounter = function validateCounter() {
    return {
      invalid: inputElRef.current.value.length > props.counter,
      message: props.error
    };
  };

  var validateHTML = function validateHTML() {
    return {
      invalid: !inputElRef.current.checkValidity(),
      message: props.error
    };
  };

  var getValidStatus = function getValidStatus() {
    var status = DEFAULT_VALID_STATE; // props.validateResetOnClear: reset validation when field is cleared

    if (isTouchedRef.current && isInvalid && inputElRef.current.value.length === 0 && props.validateResetOnClear) {
      isTouchedRef.current = false;
      setIsInvalid(false);
      errorRef.current = undefined;
    }

    if (props.counter) {
      status = validateCounter();
    }

    if (!status.invalid && inputElRef.current.checkValidity) {
      status = validateHTML();
    }

    if (!status.invalid && props.validate) {
      status = validateCustom();
    }

    return status;
  };

  var checkValidity = function checkValidity() {
    // default
    var status = props.valid !== undefined ? {
      invalid: !props.valid,
      message: props.error
    } : !isTouchedRef.current && !props.validateAtStart ? DEFAULT_VALID_STATE : getValidStatus();
    var previousInvalid = isInvalid;
    errorRef.current = status.message;

    if (status.invalid !== previousInvalid) {
      setIsInvalid(status.invalid);
    }

    if (!status.invalid) {
      errorRef.current = undefined;
    }
  };

  var notifyState = function notifyState() {
    if (props.onChange) {
      var validStatus = getValidStatus();
      var status = {
        focus: hasFocusRef.current,
        dirty: isDirtyRef.current,
        invalid: validStatus.invalid,
        error: validStatus.error,
        value: inputElRef.current.value
      };

      if (JSON.stringify(status) !== JSON.stringify(previousStatusRef.current)) {
        props.onChange(_objectSpread2(_objectSpread2({}, status), {}, {
          el: inputElRef.current,
          setInputState: function setInputState(newState) {
            var hasNewValue = newState.value !== undefined && newState.value !== inputElRef.current.value;
            var hasNewFocus = newState.focus !== undefined && newState.focus !== hasFocusRef.current;

            if (hasNewValue || hasNewFocus) {
              handleStateUpdate(newState);
            }
          }
        }));
        previousStatusRef.current = status;
      }
    }
  };

  var allProps = _objectSpread2(_objectSpread2({}, props), props.domAttributes);

  var errorMessage = props.error || errorRef.current;
  var type = allProps.multiLine ? null : !allProps.type || allProps.type === "submit" || allProps.type === "search" ? "text" : allProps.type;
  var showError = isInvalid && errorMessage !== undefined;
  var inactive = allProps.disabled || allProps[a.readonly];
  var requiredIndicator = allProps.required && allProps.requiredIndicator !== "" ? h("span", {
    className: classes.requiredIndicator
  }, allProps.requiredIndicator || "*") : null;
  var optionalIndicator = !allProps.required && allProps.optionalIndicator ? h("span", {
    className: classes.optionalIndicator
  }, allProps.optionalIndicator) : null;
  var label = allProps.label ? [allProps.label, requiredIndicator, optionalIndicator] : null;
  var events = allProps.events || {};
  var componentContent = [h("div", {
    className: classes.inputArea
  }, [label ? h("label", _defineProperty({
    className: classes.label
  }, a["for"], uidRef.current), label) : null, h(inputType, _extends({}, {
    className: classes.input,
    disabled: allProps.disabled,
    id: uidRef.current
  }, type ? {
    type: type
  } : null, allProps.name ? {
    name: allProps.name
  } : null, allProps.aria, events, !ignoreEvent(allProps, a.onclick) ? _defineProperty({}, a.onclick, function (e) {
    if (inactive) {
      return;
    } // in case the browser does not give the field focus,
    // for instance when the user tapped to the current field off screen


    handleStateUpdate({
      focus: true
    });
    events[a.onclick] && events[a.onclick](e);
  }) : null, !ignoreEvent(allProps, a.onfocus) ? _defineProperty({}, a.onfocus, function (e) {
    if (inactive) {
      return;
    }

    handleStateUpdate({
      focus: true
    }); // set CSS class manually in case field gets focus but is off screen
    // and no redraw is triggered
    // at the next redraw `hasFocusRef.current` will be read and the focus class be set
    // in the props.class statement

    if (domElement) {
      domElement.classList.add(classes.stateFocused);
    }

    events[a.onfocus] && events[a.onfocus](e);
  }) : null, !ignoreEvent(allProps, a.onblur) ? _defineProperty({}, a.onblur, function (e) {
    handleStateUpdate({
      type: "onblur",
      focus: false
    }); // same principle as onfocus

    domElement.classList.remove(classes.stateFocused);
    events[a.onblur] && events[a.onblur](e);
  }) : null, !ignoreEvent(allProps, a.oninput) ? _defineProperty({}, a.oninput, function (e) {
    // default input event
    // may be overwritten by props.events
    handleStateUpdate({
      type: "input"
    });
    events[a.oninput] && events[a.oninput](e);
  }) : null, !ignoreEvent(allProps, a.onkeydown) ? _defineProperty({}, a.onkeydown, function (e) {
    if (e.key === "Enter") {
      isTouchedRef.current = true;
    } else if (e.key === "Escape" || e.key === "Esc") {
      handleStateUpdate({
        focus: false
      });
    }

    events[a.onkeydown] && events[a.onkeydown](e);
  }) : null, allProps.required !== undefined && !!allProps.required ? {
    required: true
  } : null, allProps[a.readonly] !== undefined && !!allProps[a.readonly] ? _defineProperty({}, a.readonly, true) : null, allProps.pattern !== undefined ? {
    pattern: allProps.pattern
  } : null, allProps[a.maxlength] !== undefined ? _defineProperty({}, a.maxlength, allProps[a.maxlength]) : null, allProps[a.minlength] !== undefined ? _defineProperty({}, a.minlength, allProps[a.minlength]) : null, allProps.max !== undefined ? {
    max: allProps.max
  } : null, allProps.min !== undefined ? {
    min: allProps.min
  } : null, allProps[a.autofocus] !== undefined ? _defineProperty({}, a.autofocus, allProps[a.autofocus]) : null, allProps[a.tabindex] !== undefined ? _defineProperty({}, a.tabindex, allProps[a.tabindex]) : null, allProps.rows !== undefined ? {
    rows: allProps.rows
  } : null, allProps.placeholder !== undefined ? {
    placeholder: allProps.placeholder
  } : null, allProps.domAttributes !== undefined ? _objectSpread2({}, allProps.domAttributes) : null))]), allProps.counter ? h("div", {
    className: classes.counter
  }, (value.length || 0) + " / " + allProps.counter) : null, allProps.help && !showError ? h("div", {
    className: [classes.help, allProps.focusHelp ? classes.focusHelp : null].join(" ")
  }, allProps.help) : null, showError ? h("div", {
    className: classes.error
  }, errorMessage) : showErrorPlaceholder && !allProps.help ? h("div", {
    className: classes.errorPlaceholder
  }) : null]; // State refs

  useEffect(function () {
    isDirtyRef.current = defaultValue !== "";
    hasFocusRef.current = false;
    isTouchedRef.current = false;
    errorRef.current = props.error;
  }, []); // Input DOM element

  useEffect(function () {
    if (!domElement) {
      return;
    }

    inputElRef.current = domElement.querySelector(inputType);
    inputElRef.current.value = defaultValue;

    if (allProps[a.autofocus]) {
      handleStateUpdate({
        focus: true
      });
    } else {
      handleStateUpdate();
    }

    checkValidity(); // handle `validateAtStart`

    notifyState();
  }, [domElement]); // Handle value updates

  useEffect(function () {
    if (!inputElRef.current) {
      return;
    }

    var value = props.value !== undefined && props.value !== null ? props.value : inputElRef.current ? inputElRef.current.value : previousValueRef.current;
    var valueStr = value === undefined || value === null ? "" : value.toString();

    if (inputElRef.current && previousValueRef.current !== valueStr) {
      inputElRef.current.value = valueStr;
      previousValueRef.current = valueStr;
      handleStateUpdate({
        type: "input"
      });
    }
  }, [inputElRef.current, props.value]); // Handle error state updates

  useEffect(function () {
    if (!inputElRef.current) {
      return;
    }

    checkValidity();
    notifyState();
  }, [props, inputElRef.current && inputElRef.current.value]);

  var componentProps = _extends({}, filterSupportedAttributes(props), processDataset(props), props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), {
    className: [classes.component, isInvalid ? classes.stateInvalid : "", hasFocusRef.current ? classes.stateFocused : "", isDirtyRef.current ? classes.stateDirty : "", props.floatingLabel ? classes.hasFloatingLabel : "", props.disabled ? classes.stateDisabled : "", props.readonly ? classes.stateReadonly : "", props.dense ? classes.isDense : "", props.required ? classes.isRequired : "", props.fullWidth ? classes.hasFullWidth : "", props.counter ? classes.hasCounter : "", props.hideSpinner !== false && props.hideSpinner !== undefined ? classes.hideSpinner : "", props.hideClear !== false && props.hideClear !== undefined ? classes.hideClear : "", props.hideValidation ? classes.hideValidation : "", props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before].concat(componentContent, [props.after]);
  return h(props.element || "div", componentProps, content);
};

export { _TextField };
