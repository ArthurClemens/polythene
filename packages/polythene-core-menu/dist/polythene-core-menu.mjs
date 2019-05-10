import { transitionStateReducer, subscribe, transitionComponent, unsubscribe, filterSupportedAttributes, isServer, stylePropCompare, pointerEndMoveEvent } from 'polythene-core';

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

var classes = {
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

var DEFAULT_OFFSET_H = 0;
var DEFAULT_OFFSET_V = "79%";
var DEFAULT_TYPE = "floating";
var MIN_WIDTH = 1.5;
var DEFAULT_SHADOW_DEPTH = 1;

var unifyWidth = function unifyWidth(width) {
  return width < MIN_WIDTH ? MIN_WIDTH : width;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false
};
var _Menu = function _Menu(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useReducer = _ref.useReducer,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "useReducer", "useState", "useEffect", "useRef", "getRef", "Shadow"]);

  var _useReducer = useReducer(transitionStateReducer, initialTransitionState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(!!props.permanent),
      _useState4 = _slicedToArray(_useState3, 2),
      setIsVisible = _useState4[1];

  var panelElRef = useRef();
  var contentElRef = useRef();

  var update = function update() {
    positionMenu();
    scrollContent();
  };

  var transitionOptions = function transitionOptions(_ref2) {
    var isShow = _ref2.isShow,
        _ref2$hideDelay = _ref2.hideDelay,
        hideDelay = _ref2$hideDelay === void 0 ? props.hideDelay : _ref2$hideDelay;
    return {
      dispatchTransitionState: dispatchTransitionState,
      setIsVisible: setIsVisible,
      props: _extends({}, props, {
        hideDelay: hideDelay
      }),
      isShow: isShow,
      beforeTransition: isShow ? function () {
        return update();
      } : null,
      domElements: {
        el: panelElRef.current,
        showClassElement: domElement
      },
      showClass: classes.visible
    };
  };

  var isTopMenu = function isTopMenu() {
    return props.topMenu || stylePropCompare({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("top_menu", "\"")
    });
  };

  var positionMenu = function positionMenu() {
    if (isServer) {
      return;
    }

    if (!props.target) {
      return;
    }

    var panelEl = panelElRef.current;
    var contentEl = contentElRef.current;
    var targetEl = document.querySelector(props.target);

    if (!targetEl) {
      return;
    }

    if (!panelEl) {
      return;
    } // Don't set the position or top offset if the menu position is fixed


    var hasStylePositionFixed = stylePropCompare({
      element: panelEl,
      prop: "position",
      equals: "fixed"
    });

    if (hasStylePositionFixed && !isTopMenu()) {
      _extends(panelEl.style, {});

      panelEl.offsetHeight; // force reflow

      return;
    }

    var parentRect = panelEl.parentNode.getBoundingClientRect();
    var targetRect = targetEl.getBoundingClientRect();
    var attrsOffsetH = props.offsetH !== undefined ? props.offsetH : props.offset !== undefined ? props.offset // deprecated
    : DEFAULT_OFFSET_H;
    var attrsOffsetV = props.offsetV !== undefined ? props.offsetV : DEFAULT_OFFSET_V;
    var offsetH = attrsOffsetH.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetH) * 0.01 * targetRect.width) : Math.round(parseFloat(attrsOffsetH));
    var offsetV = attrsOffsetV.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetV) * 0.01 * targetRect.height) : Math.round(parseFloat(attrsOffsetV));
    var positionOffsetV = offsetV;
    var attrsOrigin = props.origin || "top";
    var origin = attrsOrigin.split(/\W+/).reduce(function (acc, curr) {
      return acc[curr] = true, acc;
    }, {});
    var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];

    if (props.reposition) {
      // get the first List Tile to calculate the top position  
      var selectedItem = contentEl.querySelector("." + classes.selectedListTile);

      if (firstItem && selectedItem) {
        // calculate v position: menu should shift upward relative to the first item
        var firstItemRect = firstItem.getBoundingClientRect();
        var selectedItemRect = selectedItem.getBoundingClientRect();
        positionOffsetV = firstItemRect.top - selectedItemRect.top;
      } // align to middle of target


      var alignEl = selectedItem || firstItem;
      var alignRect = alignEl.getBoundingClientRect();

      var _targetRect = targetEl.getBoundingClientRect();

      var heightDiff = _targetRect.height - alignRect.height;
      positionOffsetV += Math.abs(heightDiff) / 2;
    } else if (props.origin && !hasStylePositionFixed) {
      if (origin.top) {
        positionOffsetV += targetRect.top - parentRect.top;
      } else if (origin.bottom) {
        positionOffsetV += targetRect.top - parentRect.bottom;
      }
    }

    if (props.height) {
      var firstItemHeight = firstItem ? firstItem.clientHeight : 48; // default List Tile height

      if (props.height === "max") {
        var topMargin = positionOffsetV;
        var bottomMargin = firstItemHeight;
        panelEl.style.height = "calc(100% - ".concat(topMargin + bottomMargin, "px)");
      } else {
        var height = /^\d+$/.test(props.height.toString()) ? "".concat(props.height, "px") : props.height;
        panelEl.style.height = height;
      }
    } // prevent animated changes


    var transitionDuration = panelEl.style.transitionDuration;
    panelEl.style.transitionDuration = "0ms";

    if (panelEl.parentNode && !hasStylePositionFixed) {
      if (origin.right) {
        panelEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
      } else {
        panelEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
      }

      if (origin.bottom) {
        panelEl.style.bottom = positionOffsetV + "px";
      } else {
        panelEl.style.top = positionOffsetV + "px";
      }

      panelEl.style.transformOrigin = attrsOrigin.split(/\W+/).join(" ");
    }

    panelEl.offsetHeight; // force reflow

    panelEl.style.transitionDuration = transitionDuration;
  };

  var scrollContent = function scrollContent() {
    if (isServer) {
      return;
    }

    if (!props.scrollTarget) {
      return;
    }

    var scrollTargetEl = document.querySelector(props.scrollTarget);

    if (!scrollTargetEl) {
      return;
    }

    contentElRef.current.scrollTop = scrollTargetEl.offsetTop;
  };

  var showMenu = function showMenu() {
    return transitionComponent(transitionOptions({
      isShow: true
    }));
  };

  var hideMenu = function hideMenu() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        hideDelay = _ref3.hideDelay;

    return transitionComponent(transitionOptions({
      isShow: false,
      hideDelay: hideDelay
    }));
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    panelElRef.current = domElement.querySelector(".".concat(classes.panel));

    _extends(panelElRef.current.style, props.style);

    contentElRef.current = domElement.querySelector(".".concat(classes.content));

    var handleEscape = function handleEscape(e) {
      if (e.key === "Escape" || e.key === "Esc") {
        hideMenu({
          hideDelay: 0
        });
      }
    };

    var handleDismissTap = function handleDismissTap(e) {
      if (e.target === panelElRef.current) {
        return;
      }

      hideMenu();
    };

    var activateDismissTap = function activateDismissTap() {
      pointerEndMoveEvent.forEach(function (evt) {
        return document.addEventListener(evt, handleDismissTap);
      });
    };

    var deActivateDismissTap = function deActivateDismissTap() {
      pointerEndMoveEvent.forEach(function (evt) {
        return document.removeEventListener(evt, handleDismissTap);
      });
    };

    if (!props.permanent) {
      subscribe("resize", update);
      subscribe("keydown", handleEscape);
      setTimeout(function () {
        activateDismissTap();
        showMenu();
      }, 0);
    }

    return function () {
      if (!props.permanent) {
        unsubscribe("resize", update);
        unsubscribe("keydown", handleEscape);
        deActivateDismissTap();
      }
    };
  }, [domElement]);
  var type = props.type || DEFAULT_TYPE;

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    remove: ["style"]
  }), props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.getRef && props.getRef(dom));
  }), {
    className: [classes.component, props.permanent ? classes.permanent : null, props.origin ? classes.origin : null, props.backdrop ? classes.showBackdrop : null, props.topMenu ? classes.isTopMenu : null, type === "floating" && !props.permanent ? classes.floating : null, props.width || props.size ? widthClass(unifyWidth(props.width || props.size)) : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  });

  var shadowDepth = props.shadowDepth !== undefined ? props.shadowDepth : DEFAULT_SHADOW_DEPTH;
  var contents = [h("div", {
    key: "backdrop",
    className: classes.backdrop
  }), h("div", {
    className: classes.panel,
    key: "panel"
  }, [h(Shadow, {
    shadowDepth: shadowDepth,
    animated: true,
    key: "shadow"
  }), h("div", {
    className: classes.content,
    key: "content"
  }, props.content || props.children)])];
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};

export { _Menu };
