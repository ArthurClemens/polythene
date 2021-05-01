import { transitionStateReducer, initialTransitionState, subscribe, unsubscribe, transitionComponent, filterSupportedAttributes, stylePropCompare } from 'polythene-core';

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

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};

var DEFAULT_SHADOW_DEPTH = 3;
var openDialogsSelector = ".".concat(classes.component);

var createPane = function createPane(_ref) {
  var h = _ref.h,
      Pane = _ref.Pane,
      props = _ref.props;
  return h(Pane, {
    body: props.content || props.body || props.menu || props.children,
    element: props.element,
    borders: props.borders,
    className: props.className,
    footer: props.footer,
    footerButtons: props.footerButtons,
    formOptions: props.formOptions,
    fullBleed: props.fullBleed,
    header: props.header,
    style: props.style,
    title: props.title
  });
};

var _Dialog = function _Dialog(_ref2) {
  var h = _ref2.h,
      a = _ref2.a,
      useState = _ref2.useState,
      useEffect = _ref2.useEffect,
      useRef = _ref2.useRef,
      getRef = _ref2.getRef,
      useReducer = _ref2.useReducer,
      Pane = _ref2.Pane,
      Shadow = _ref2.Shadow,
      openDialogsSelector = _ref2.openDialogsSelector,
      props = _objectWithoutProperties(_ref2, ["h", "a", "useState", "useEffect", "useRef", "getRef", "useReducer", "Pane", "Shadow", "openDialogsSelector"]);

  var _useReducer = useReducer(transitionStateReducer, initialTransitionState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var backdropElRef = useRef();
  var touchElRef = useRef();
  var contentElRef = useRef();
  var isVisible = (transitionState || initialTransitionState).isVisible;
  var isTransitioning = (transitionState || initialTransitionState).isTransitioning;

  var transitionOptions = function transitionOptions(_ref3) {
    var isShow = _ref3.isShow,
        _ref3$hideDelay = _ref3.hideDelay,
        hideDelay = _ref3$hideDelay === void 0 ? props.hideDelay : _ref3$hideDelay,
        referrer = _ref3.referrer;
    return {
      transitionState: transitionState,
      dispatchTransitionState: dispatchTransitionState,
      instanceId: props.instanceId,
      props: _extends({}, props, {
        hideDelay: hideDelay
      }),
      isShow: isShow,
      domElements: {
        el: domElement,
        contentEl: contentElRef.current,
        backdropEl: backdropElRef.current
      },
      showClass: classes.visible,
      transitionClass: classes.transition,
      referrer: referrer
    };
  };

  var showDialog = function showDialog() {
    return transitionComponent(transitionOptions({
      isShow: true
    }));
  };

  var hideDialog = function hideDialog() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        hideDelay = _ref4.hideDelay,
        referrer = _ref4.referrer;

    return transitionComponent(transitionOptions({
      isShow: false,
      hideDelay: hideDelay,
      referrer: referrer
    }));
  };

  var isModal = function isModal() {
    return props.modal || domElement && domElement.classList.contains(classes.modal) || stylePropCompare({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("modal", "\"")
    });
  };

  var isFullScreen = function isFullScreen() {
    return props.fullScreen || domElement && domElement.classList.contains(classes.fullScreen) || stylePropCompare({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("full_screen", "\"")
    });
  }; // DOM elements


  useEffect(function () {
    if (!domElement) {
      return;
    }

    backdropElRef.current = domElement.querySelector(".".concat(classes.backdrop));
    touchElRef.current = domElement.querySelector(".".concat(classes.touch));
    contentElRef.current = domElement.querySelector(".".concat(classes.content));
  }, [domElement]); // Handle Escape key

  useEffect(function () {
    if (!domElement || props.inactive) {
      return;
    }

    var handleEscape = function handleEscape(e) {
      if (props.disableEscape && (isFullScreen() || isModal())) return;

      if (e.key === "Escape" || e.key === "Esc") {
        // "Esc" for IE11
        var openDialogs = document.querySelectorAll(openDialogsSelector);

        if (openDialogs[openDialogs.length - 1] === domElement) {
          hideDialog();
          unsubscribe("keydown", handleEscape);
        }
      }
    };

    subscribe("keydown", handleEscape);
    return function () {
      unsubscribe("keydown", handleEscape);
    };
  }, [domElement, props.inactive]); // Show / hide logic

  useEffect(function () {
    if (!domElement || isTransitioning) {
      return;
    }

    if (props.hide) {
      if (isVisible) {
        hideDialog();
      }
    } else if (props.show) {
      if (!isVisible) {
        showDialog();
      }
    }
  }, [domElement, isTransitioning, isVisible, props.hide, props.show]);

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), _defineProperty({
    className: [props.parentClassName || classes.component, props.fromMultipleClassName, props.fullScreen ? classes.fullScreen : null, props.modal ? classes.modal : null, props.backdrop ? classes.showBackdrop : null, // classes.visible is set in showDialog though transition
    props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" "),
    "data-spawn-id": props.spawnId,
    // received from Multi
    "data-instance-id": props.instanceId
  }, a.onclick, function (e) {
    if (e.target !== domElement && e.target !== backdropElRef.current && e.target !== touchElRef.current) {
      return;
    }

    if (isModal()) {
      // not allowed
      return;
    }

    hideDialog();
  }));

  var pane = props.panesOptions && props.panesOptions.length ? h(Pane, props.panesOptions[0]) : props.panes && props.panes.length ? props.panes[0] : createPane({
    h: h,
    Pane: Pane,
    props: props
  });
  var shadowDepth = props.shadowDepth;
  var content = [h("div", {
    className: classes.backdrop
  }), h("div", {
    className: classes.touch
  }), h("div", {
    className: [classes.content, props.menu ? classes.menuContent : null].join(" ")
  }, [props.fullScreen ? null : h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : DEFAULT_SHADOW_DEPTH,
    animated: true
  }), props.before, pane, props.after])];
  return h("div", componentProps, content);
};

export { _Dialog, openDialogsSelector };
