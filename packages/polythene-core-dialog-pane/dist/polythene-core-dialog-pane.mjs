import { unpackAttrs, subscribe, unsubscribe, filterSupportedAttributes } from 'polythene-core';

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
  component: "pe-dialog-pane",
  // elements
  actions: "pe-dialog-pane__actions",
  body: "pe-dialog-pane__body",
  content: "pe-dialog-pane__content",
  footer: "pe-dialog-pane__footer",
  header: "pe-dialog-pane__header",
  title: "pe-dialog-pane__title",
  // states
  withHeader: "pe-dialog-pane--header",
  withFooter: "pe-dialog-pane--footer",
  headerWithTitle: "pe-dialog-pane__header--title",
  footerWithButtons: "pe-dialog-pane__footer--buttons",
  footerHigh: "pe-dialog-pane__footer--high",
  borderBottom: "pe-dialog-pane--border-bottom",
  borderTop: "pe-dialog-pane--border-top",
  fullBleed: "pe-dialog-pane--body-full-bleed"
};

var buttonClasses = {
  component: "pe-text-button",
  "super": "pe-button",
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
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};

var SCROLL_WATCH_END_TIMER = 50;
var _DialogPane = function _DialogPane(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      unpackedProps = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  var props = unpackAttrs(unpackedProps);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isScrolling = _useState4[0],
      setIsScrolling = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasTopOverflow = _useState6[0],
      setHasTopOverflow = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      hasBottomOverflow = _useState8[0],
      setHasBottomOverflow = _useState8[1];

  var headerElRef = useRef();
  var footerElRef = useRef();
  var scrollElRef = useRef();
  var scrollWatchIdRef = useRef();

  var updateScrollOverflowState = function updateScrollOverflowState() {
    var scroller = scrollElRef.current;

    if (!scroller) {
      return;
    }

    setHasTopOverflow(scroller.scrollTop > 0);
    setHasBottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    headerElRef.current = domElement.querySelector(".".concat(classes.header));
    footerElRef.current = domElement.querySelector(".".concat(classes.footer));
    scrollElRef.current = domElement.querySelector(".".concat(classes.body));
  }, [domElement]);
  useEffect(function () {
    if (!scrollElRef.current) {
      return;
    }

    var update = function update() {
      updateScrollOverflowState();
    };

    subscribe("resize", update);
    return function () {
      unsubscribe("resize", update);
    };
  }, [scrollElRef.current]);
  useEffect(function () {
    updateScrollOverflowState();
  }, [scrollElRef.current, isScrolling]);
  var withHeader = props.header !== undefined || props.title !== undefined;
  var withFooter = props.footer !== undefined || props.footerButtons !== undefined;
  var borders = props.borders || "overflow";
  var showTopBorder = borders === "always" || withHeader && borders === "overflow" && hasTopOverflow;
  var showBottomBorder = borders === "always" || withFooter && borders === "overflow" && hasBottomOverflow;

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), {
    className: [classes.component, props.fullBleed ? classes.fullBleed : null, showTopBorder ? classes.borderTop : null, showBottomBorder ? classes.borderBottom : null, withHeader ? classes.withHeader : null, withFooter ? classes.withFooter : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.formOptions);

  var contents = h("div", {
    className: [classes.content, props.menu ? classes.menuContent : null].join(" "),
    style: props.style
  }, [props.header ? props.header : props.title ? h("div", {
    className: [classes.header, classes.headerWithTitle].join(" "),
    key: "title"
  }, h("div", {
    className: classes.title
  }, props.title)) : null, h("div", _defineProperty({
    className: classes.body,
    key: "body"
  }, a.onscroll, function () {
    setIsScrolling(true);
    clearTimeout(scrollWatchIdRef.current);
    scrollWatchIdRef.current = setTimeout(function () {
      setIsScrolling(false);
    }, SCROLL_WATCH_END_TIMER);
  }), props.content || props.body || props.menu), props.footer ? h("div", {
    className: classes.footer,
    key: "footer"
  }, props.footer) : props.footerButtons ? h("div", {
    className: [classes.footer, classes.footerWithButtons, buttonClasses.row].join(" "),
    key: "footer"
  }, h("div", {
    className: classes.actions
  }, props.footerButtons)) : null]);
  var content = [props.before, contents, props.after];
  return h(props.element || "form", componentProps, content);
};

export { _DialogPane };
