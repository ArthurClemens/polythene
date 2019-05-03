import { transitionComponent, filterSupportedAttributes, classForSize } from 'polythene-core';

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
  return transitionComponent(_objectSpread({}, opts, {
    isShow: true
  }));
}; // const hideSpinner = opts =>
//   transitionComponent({
//     ...opts,
//     isShow: false
//   });


var _BaseSpinner = function _BaseSpinner(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      getRef = _ref.getRef,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "getRef", "Shadow"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTransitioning = _useState2[0],
      setIsTransitioning = _useState2[1];

  var _useState3 = useState(!!props.permanent),
      _useState4 = _slicedToArray(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      domElement = _useState6[0],
      setDomElement = _useState6[1];

  var transitionOptions = {
    isTransitioning: isTransitioning,
    setIsTransitioning: setIsTransitioning,
    setIsVisible: setIsVisible,
    attrs: props,
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
    className: [classes.component, props.instanceClass, classForSize(classes, props.size), props.singleColor ? classes.singleColor : null, props.raised ? classes.raised : null, props.animated ? classes.animated : null, props.permanent ? classes.permanent : null, isVisible ? classes.visible : null, props.className || props[a.class]].join(" ")
  }, props.events); // if (state.hide) {
  //   setTimeout(() => { hideSpinner(state, attrs); }, 0);
  // }


  var content = [props.before, props.content, props.after].filter(Boolean);
  return h("div", componentProps, [props.raised && content.length > 0 ? h(Shadow, {
    key: "shadow",
    shadowDepth: props.shadowDepth
  }) : null, content]);
};

export { _BaseSpinner };
