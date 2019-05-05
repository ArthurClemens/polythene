import { transitionStateReducer, isClient, transitionComponent, filterSupportedAttributes, isServer } from 'polythene-core';
import { Timer } from 'polythene-utilities';

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
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

var DEFAULT_TIME_OUT = 3;

var setTitleStyles = function setTitleStyles(titleEl) {
  if (isServer) return;
  var height = titleEl.getBoundingClientRect().height;
  var lineHeight = parseInt(window.getComputedStyle(titleEl).lineHeight, 10);
  var paddingTop = parseInt(window.getComputedStyle(titleEl).paddingTop, 10);
  var paddingBottom = parseInt(window.getComputedStyle(titleEl).paddingBottom, 10);

  if (height > lineHeight + paddingTop + paddingBottom) {
    titleEl.classList.add(classes.multilineTitle);
  }
};

var initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false
};
var _Notification = function _Notification(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      useReducer = _ref.useReducer,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef", "useReducer"]);

  var _useReducer = useReducer(transitionStateReducer, initialTransitionState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPaused = _useState4[0],
      setIsPaused = _useState4[1];

  var containerElRef = useRef();
  var titleElRef = useRef();
  var timerRef = useRef(new Timer());
  var isVisible = transitionState.isVisible;
  var isTransitioning = transitionState.isTransitioning;
  var isHiding = transitionState.isHiding;
  var timer = timerRef.current;

  var transitionOptions = function transitionOptions(_ref2) {
    var isShow = _ref2.isShow;
    return {
      dispatchTransitionState: dispatchTransitionState,
      instanceId: props.instanceId,
      props: props,
      isShow: isShow,
      beforeTransition: stopTimer,
      afterTransition: isShow ? function () {
        // set timer to hide in a few seconds
        var timeout = props.timeout;

        if (timeout === 0) ; else {
          var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
          timer.start(hideNotification, timeoutSeconds);
        }
      } : null,
      domElements: {
        el: domElement,
        containerEl: containerElRef.current
      },
      showClass: classes.visible
    };
  };

  var showNotification = function showNotification() {
    return transitionComponent(transitionOptions({
      isShow: true
    }));
  };

  var hideNotification = function hideNotification() {
    return transitionComponent(transitionOptions({
      isShow: false
    }));
  };

  var pause = function pause() {
    setIsPaused(true);

    if (timer) {
      timer.pause();
    }
  };

  var unpause = function unpause() {
    setIsPaused(false);

    if (timer) {
      timer.resume();
    }
  };

  var stopTimer = function stopTimer() {
    if (timer) {
      timer.stop();
    }
  }; // DOM elements


  useEffect(function () {
    if (!domElement) {
      return;
    }

    if (isClient) {
      // props.holderSelector is passed as option to Multiple
      containerElRef.current = document.querySelector(props.containerSelector || props.holderSelector);

      if (!containerElRef.current) {
        console.error("No container element found"); // eslint-disable-line no-console
      }

      if (props.containerSelector && containerElRef.current) {
        containerElRef.current.classList.add(classes.hasContainer);
      }
    }

    titleElRef.current = domElement.querySelector(".".concat(classes.title));

    if (titleElRef.current) {
      setTitleStyles(titleElRef.current);
    }
  }, [domElement]); // Show / hide logic

  useEffect(function () {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }

    if (props.hide) {
      if (isVisible) {
        hideNotification();
      }
    } else if (props.show) {
      if (!isVisible) {
        showNotification();
      }
    }
  }, [domElement, isTransitioning, isVisible, isHiding, props.hide, props.show]); // Pause logic

  useEffect(function () {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }

    if (props.pause) {
      if (!isPaused) {
        pause();
      }
    } else if (props.unpause) {
      if (isPaused) {
        unpause();
      }
    }
  }, [domElement, isTransitioning, isHiding, props.pause, props.unpause]);

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, _defineProperty({
    className: [classes.component, props.fromMultipleClassName, // classes.visible is set in showNotification though transition
    props.tone === "light" ? null : "pe-dark-tone", // default dark tone
    props.containerSelector ? classes.hasContainer : null, props.layout === "vertical" ? classes.vertical : classes.horizontal, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  }, a.onclick, function (e) {
    return e.preventDefault();
  }));

  var contents = h("div", {
    className: classes.content,
    style: props.style
  }, props.content || [props.title ? h("div", {
    className: classes.title
  }, props.title) : null, props.action ? h("div", {
    className: classes.action
  }, props.action) : null]);
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};

export { _Notification };
