import { transitionStateReducer, transitionComponent, filterSupportedAttributes, classForSize } from 'polythene-core';

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var showSpinner = function showSpinner(opts) {
  return transitionComponent(_objectSpread2({}, opts, {
    isShow: true
  }));
}; // const hideSpinner = opts =>
//   transitionComponent({
//     ...opts,
//     isShow: false
//   });


var initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false
};
var _BaseSpinner = function _BaseSpinner(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useReducer = _ref.useReducer,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      getRef = _ref.getRef,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "useReducer", "useState", "useEffect", "getRef", "Shadow"]);

  var _useReducer = useReducer(transitionStateReducer, initialTransitionState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var isVisible = (transitionState || initialTransitionState).isVisible;
  var transitionOptions = {
    dispatchTransitionState: dispatchTransitionState,
    props: props,
    domElements: {
      el: domElement
    },
    showClass: classes.visible
  };
  useEffect(function () {
    if (!domElement) {
      return;
    }

    if (!props.permanent) {
      showSpinner(transitionOptions);
    }
  }, [domElement]);

  var componentProps = _extends({}, filterSupportedAttributes(props), getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.instanceClass, classForSize(classes, props.size), props.singleColor ? classes.singleColor : null, props.raised ? classes.raised : null, props.animated ? classes.animated : null, props.permanent ? classes.permanent : null, isVisible ? classes.visible : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var content = [props.before, props.content, props.after];

  if (props.raised && content.length > 0) {
    content.push(h(Shadow, {
      shadowDepth: props.shadowDepth
    }));
  }

  return h("div", componentProps, content);
};

export { _BaseSpinner };
