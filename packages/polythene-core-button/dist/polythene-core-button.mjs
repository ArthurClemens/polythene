import { deprecation, isClient, filterSupportedAttributes, iconDropdownDown, isServer, pointerStartMoveEvent, pointerEndMoveEvent } from 'polythene-core';

function _typeof(obj) {
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

var classes = {
  component: "pe-text-button",
  super: "pe-button",
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
  separatorAtStart: "pe-button--separator-start"
};

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "a";
};
var getInitialState = function getInitialState(vnode, createStream) {
  var dom = createStream(null);
  var focus = createStream(false);
  var inactive = createStream(false);
  var mouseover = createStream(false);
  return {
    dom: dom,
    focus: focus,
    inactive: inactive,
    mouseover: mouseover,
    redrawOnUpdate: createStream.merge([dom, focus, inactive])
  };
};
var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }

  var state = vnode.state;
  var attrs = vnode.attrs;

  if (attrs.borders !== undefined) {
    deprecation("Button", {
      option: "borders",
      newOption: "border"
    });
  }

  state.dom(vnode.dom);

  if (isClient) {
    var handleInactivate = function handleInactivate() {
      return state.inactive(true), setTimeout(function () {
        return state.inactive(false);
      }, attrs.inactivate * 1000);
    };

    var onFocus = function onFocus() {
      return state.focus(!state.mouseover());
    };

    var onBlur = function onBlur() {
      return state.focus(false);
    };

    var onMouseOver = function onMouseOver() {
      return state.mouseover(true);
    };

    var onMouseOut = function onMouseOut() {
      return state.mouseover(false);
    };

    var onClick = handleInactivate;
    vnode.dom.addEventListener("focus", onFocus, false);
    vnode.dom.addEventListener("blur", onBlur, false);
    vnode.dom.addEventListener("mouseover", onMouseOver, false);
    vnode.dom.addEventListener("mouseout", onMouseOut, false);
    vnode.dom.addEventListener("click", onClick, false);

    state.removeEventListeners = function () {
      return vnode.dom.removeEventListener("focus", onFocus, false), vnode.dom.removeEventListener("blur", onBlur, false), vnode.dom.removeEventListener("mouseover", onBlur, false), vnode.dom.removeEventListener("mouseout", onMouseOut, false), vnode.dom.removeEventListener("click", onClick, false);
    };
  }
};
var onUnMount = function onUnMount(vnode) {
  return vnode.state.removeEventListeners && vnode.state.removeEventListeners();
};
var createProps = function createProps(vnode, _ref) {
  var _ref2;

  var k = _ref.keys;
  var state = vnode.state;
  var attrs = vnode.attrs;
  var disabled = attrs.disabled;
  var inactive = attrs.inactive || state.inactive();
  var onClickHandler = attrs.events && attrs.events[k.onclick];
  var onKeyUpHandler = attrs.events && attrs.events[k.onkeyup] || onClickHandler;
  return _extends({}, filterSupportedAttributes(attrs, {
    add: [k.formaction, "type"],
    remove: ["style"]
  }), // Set style on content, not on component
  {
    className: [classes.super, attrs.parentClassName || classes.component, attrs.contained ? classes.contained : null, attrs.raised ? classes.contained : null, attrs.raised ? classes.raised : null, attrs.selected ? classes.selected : null, attrs.highLabel ? classes.highLabel : null, attrs.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.separatorAtStart ? classes.separatorAtStart : null, attrs.border || attrs.borders ? classes.border : null, attrs.dropdown ? classes.hasDropdown : null, attrs.dropdown ? attrs.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events, inactive ? null : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, disabled || inactive ? -1 : attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onclick, onClickHandler), _defineProperty(_ref2, k.onkeyup, function (e) {
    if (e.keyCode === 13 && state.focus()) {
      state.focus(false);

      if (onKeyUpHandler) {
        onKeyUpHandler(e);
      }
    }
  }), _ref2), attrs.url, disabled ? {
    disabled: true
  } : null);
};
var createContent = function createContent(vnode, _ref3) {
  var _h;

  var h = _ref3.renderer,
      k = _ref3.keys,
      Ripple = _ref3.Ripple,
      Icon = _ref3.Icon,
      Shadow = _ref3.Shadow;
  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label !== undefined ? _typeof(attrs.label) === "object" ? attrs.label : h("div", {
    className: classes.label
  }, h("div", {
    className: classes.textLabel,
    style: attrs.textStyle
  }, attrs.label)) : children ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  return h("div", (_h = {}, _defineProperty(_h, k.class, classes.content), _defineProperty(_h, "style", attrs.style), _h), [h(Shadow, {
    key: "shadow",
    shadowDepth: attrs.shadowDepth !== undefined ? attrs.shadowDepth : 0,
    animated: true
  }), // Ripple
  disabled || noink || !Ripple || (h["displayName"] === "react" ? !state.dom() : false) // somehow Mithril does not update when the dom stream is updated
  ? null : h(Ripple, _extends({}, {
    key: "ripple",
    target: state.dom()
  }, attrs.ripple)), // hover
  noWash ? null : h("div", {
    key: "wash",
    className: classes.wash
  }), label, attrs.dropdown ? h(Icon, {
    className: classes.dropdown,
    key: "dropdown",
    svg: {
      content: h.trust(iconDropdownDown)
    }
  }) : null]);
};

var button = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});

var MAX_SHADOW_DEPTH = 5;

var tapStart,
    tapEndAll = function tapEndAll() {},
    downButtons = [];

var animateZ = function animateZ(which, vnode) {
  var shadowDepthBase = vnode.state.shadowDepthBase;
  var increase = vnode.attrs.increase || 1;
  var shadowDepth = vnode.state.shadowDepth();
  var newShadowDepth = which === "down" && shadowDepthBase < MAX_SHADOW_DEPTH ? Math.min(shadowDepthBase + increase, MAX_SHADOW_DEPTH) : which === "up" ? Math.max(shadowDepth - increase, shadowDepthBase) : shadowDepth;

  if (newShadowDepth !== shadowDepth) {
    vnode.state.shadowDepth(newShadowDepth);
  }
};

var tapHandler = function tapHandler(which, vnode) {
  if (which === "down") {
    downButtons.push(_extends({}, vnode));
  }

  var animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;

  if (animateOnTap) {
    animateZ(which, vnode);
  }
};

var initTapEvents = function initTapEvents(vnode) {
  if (isServer) return;

  tapStart = function tapStart() {
    return tapHandler("down", vnode);
  };

  tapEndAll = function tapEndAll() {
    downButtons.map(function (buttonVnode) {
      return tapHandler("up", buttonVnode);
    });
    downButtons = [];
  };

  pointerStartMoveEvent.forEach(function (evt) {
    return vnode.dom.addEventListener(evt, tapStart);
  });
  pointerEndMoveEvent.forEach(function (evt) {
    return document.addEventListener(evt, tapEndAll);
  });
};

var clearTapEvents = function clearTapEvents(vnode) {
  pointerStartMoveEvent.forEach(function (evt) {
    return vnode.dom.removeEventListener(evt, tapStart);
  });
  pointerEndMoveEvent.forEach(function (evt) {
    return document.removeEventListener(evt, tapEndAll);
  });
};

var getInitialState$1 = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var shadowDepthBase = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z !== undefined // deprecated
  ? attrs.z : 1;
  var shadowDepth = createStream(shadowDepthBase);
  var tapEventsInited = createStream(false);
  return {
    shadowDepthBase: shadowDepthBase,
    shadowDepth: shadowDepth,
    tapEventsInited: tapEventsInited,
    redrawOnUpdate: createStream.merge([shadowDepth])
  };
};
var onMount$1 = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }

  var state = vnode.state;
  var attrs = vnode.attrs;

  if (attrs.z !== undefined) {
    deprecation("RaisedButton", {
      option: "z",
      newOption: "shadowDepth"
    });
  }

  if (!state.tapEventsInited()) {
    initTapEvents(vnode);
    state.tapEventsInited(true);
  }
};
var onUnMount$1 = function onUnMount(vnode) {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};
var createProps$1 = function createProps(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = attrs.children || vnode.children || [];
  return _objectSpread({
    raised: true,
    animateOnTap: false,
    wash: attrs.wash !== undefined ? attrs.wash : false,
    children: children
  }, attrs, {
    shadowDepth: attrs.disabled ? 0 : state.shadowDepth()
  });
};
var createContent$1 = function createContent(vnode) {
  return vnode.children;
};

var raisedButton = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState$1,
  onMount: onMount$1,
  onUnMount: onUnMount$1,
  createProps: createProps$1,
  createContent: createContent$1
});

export { button as coreButton, raisedButton as coreRaisedButton };
