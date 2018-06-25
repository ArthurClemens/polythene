/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: coreBaseSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreBaseSpinner", function() { return spinner; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var transitionOptions = function transitionOptions(state, attrs, isShow) {
  return {
    state: state,
    attrs: attrs,
    isShow: isShow,
    domElements: {
      el: state.dom()
    },
    showClass: classes.visible
  };
};

var showSpinner = function showSpinner(state, attrs) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions(state, attrs, true));
};

var hideSpinner = function hideSpinner(state, attrs) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions(state, attrs, false));
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  var visible = createStream(false);
  var dom = createStream(null);
  return {
    dom: dom,
    visible: visible,
    transitioning: transitioning,
    redrawOnUpdate: createStream.merge([transitioning])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    showSpinner(state, attrs);
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.instanceClass, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, attrs.size), attrs.singleColor ? classes.singleColor : null, attrs.raised ? classes.raised : null, attrs.animated ? classes.animated : null, attrs.permanent ? classes.permanent : null, attrs.permanent ? classes.visible : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow;

  var state = vnode.state;
  var attrs = vnode.attrs;

  if (state.hide) {
    setTimeout(function () {
      hideSpinner(state, attrs);
    }, 0);
  }

  return [attrs.raised && attrs.content ? h(Shadow, { key: "shadow", z: attrs.z }) : null, attrs.content];
};

var spinner = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState,
  onMount: onMount,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-button-group/dist/polythene-core-button-group.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-button-group/dist/polythene-core-button-group.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: coreButtonGroup */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreButtonGroup", function() { return buttonGroup; });
var classes = {
  component: "pe-button-group"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-button-group)

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, {
    className: [classes.component, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode) {
  return vnode.children;
};

var buttonGroup = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-button/dist/polythene-core-button.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-button/dist/polythene-core-button.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: coreButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreButton", function() { return button; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
    component: "pe-text-button",
    super: "pe-button",
    row: "pe-button-row",

    // elements      
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states      
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    extraWide: "pe-button--extra-wide",
    separatorAtStart: "pe-button--separator-start",
    dropdownOpen: "pe-button--dropdown-open",
    dropdownClosed: "pe-button--dropdown-closed"
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  if (attrs.borders) {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["deprecation"])("Button", "borders", "border");
  }
  state.dom(vnode.dom);

  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
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

  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs, { add: [k.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
  {
    className: [classes.super, attrs.parentClassName || classes.component, attrs.selected ? classes.selected : null, attrs.highLabel ? classes.highLabel : null, attrs.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.separatorAtStart ? classes.separatorAtStart : null, attrs.border || attrs.borders ? classes.border : null, state.focus() ? classes.focused : null, attrs.dropdown ? classes.hasDropdown : null, attrs.dropdown ? attrs.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events, inactive ? null : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, disabled || inactive ? -1 : attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onclick, onClickHandler), _defineProperty(_ref2, k.onkeyup, function (e) {
    if (e.keyCode === 13 && state.focus()) {
      state.focus(false);
      if (onKeyUpHandler) {
        onKeyUpHandler(e);
      }
    }
  }), _ref2), attrs.url, disabled ? { disabled: true } : null);
};

var createContent = function createContent(vnode, _ref3) {
  var _h;

  var h = _ref3.renderer,
      k = _ref3.keys,
      Ripple = _ref3.Ripple,
      Icon = _ref3.Icon;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label !== undefined ? _typeof(attrs.label) === "object" ? attrs.label : h("div", { className: classes.label }, attrs.label) : children ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  return h("div", (_h = {}, _defineProperty(_h, k.class, classes.content), _defineProperty(_h, "style", attrs.style), _h), [attrs.shadowComponent // "protected" option, used by raised-button
  ? attrs.shadowComponent : null,
  // Ripple
  disabled || noink || !Ripple || (h.displayName === "react" ? !state.dom() : false)
  // somehow Mithril does not update when the dom stream is updated
  ? null : h(Ripple, _extends({}, {
    key: "ripple",
    target: state.dom()
  }, attrs.ripple)),
  // hover
  noWash ? null : h("div", { key: "wash", className: classes.wash }),
  // focus
  disabled ? null : h("div", { key: "focus", className: classes.focus }), label, attrs.dropdown ? h(Icon, {
    className: classes.dropdown,
    key: "dropdown",
    svg: { content: h.trust(polythene_core__WEBPACK_IMPORTED_MODULE_0__["iconDropdownDown"]) }
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




/***/ }),

/***/ "../../polythene-core-card/dist/polythene-core-card.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-card/dist/polythene-core-card.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: coreCard, coreCardActions, coreCardMedia, coreCardPrimary */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreCard", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreCardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreCardMedia", function() { return cardMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreCardPrimary", function() { return cardPrimary; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
  component: "pe-card",

  // elements
  actions: "pe-card__actions",
  any: "pe-card__any",
  content: "pe-card__content",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  media: "pe-card__media",
  mediaDimmer: "pe-card__media__dimmer",
  overlay: "pe-card__overlay",
  overlayContent: "pe-card__overlay__content",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  title: "pe-card__title",

  // states
  actionsBorder: "pe-card__actions--border",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsJustified: "pe-card__actions--justified",
  actionsTight: "pe-card__actions--tight",
  actionsVertical: "pe-card__actions--vertical",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  mediaOriginStart: "pe-card__media--origin-start",
  mediaOriginCenter: "pe-card__media--origin-center",
  mediaOriginEnd: "pe-card__media--origin-end",
  mediaLarge: "pe-card__media--large",
  mediaMedium: "pe-card__media--medium",
  mediaRatioLandscape: "pe-card__media--landscape",
  mediaRatioSquare: "pe-card__media--square",
  mediaRegular: "pe-card__media--regular",
  mediaSmall: "pe-card__media--small",
  overlaySheet: "pe-card__overlay--sheet",
  primaryHasMedia: "pe-card__primary--media",
  primaryTight: "pe-card__primary--tight",
  textTight: "pe-card__text--tight"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createOverlay = function createOverlay(_ref) {
  var dispatcher = _ref.dispatcher,
      attrs = _ref.attrs,
      h = _ref.h,
      k = _ref.k;

  var element = attrs.element || "div";
  var content = attrs.content.map(dispatcher);
  return h("div", {
    key: attrs.key || "card-overlay",
    style: attrs.style,
    className: [classes.overlay, attrs.sheet ? classes.overlaySheet : null, attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
    attrs.tone === "light" ? "pe-light-tone" : null].join(" ")
  }, [h(element, {
    key: "content",
    className: [classes.overlayContent, attrs.className || attrs[k.class]].join(" ")
  }, content), h("div", {
    key: "dimmer",
    className: classes.mediaDimmer
  })]);
};

var createAny = function createAny(_ref2) {
  var attrs = _ref2.attrs,
      h = _ref2.h,
      k = _ref2.k;

  var element = attrs.element || "div";
  return h(element, _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    key: attrs.key || "card-any",
    className: [classes.any, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
  }), attrs.content);
};

var createText = function createText(_ref3) {
  var attrs = _ref3.attrs,
      h = _ref3.h,
      k = _ref3.k;

  var element = attrs.element || "div";
  return h(element, _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    key: attrs.key || "card-text",
    className: [classes.text, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events), attrs.content);
};

var createHeader = function createHeader(_ref4) {
  var attrs = _ref4.attrs,
      h = _ref4.h,
      k = _ref4.k,
      Icon = _ref4.Icon,
      ListTile = _ref4.ListTile;

  return h(ListTile, _extends({}, attrs, {
    key: attrs.key || "card-header",
    className: [classes.header, attrs.className || attrs[k.class]].join(" ")
  }, attrs.icon ? { front: h(Icon, attrs.icon) } : null));
};

var getElement = function getElement(vnode) {
  return vnode.attrs.element || vnode.attrs.url ? "a" : "div";
};

var createProps = function createProps(vnode, _ref5) {
  var k = _ref5.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.url, attrs.events);
};

var createContent = function createContent(vnode, _ref6) {
  var h = _ref6.renderer,
      k = _ref6.keys,
      CardActions = _ref6.CardActions,
      CardMedia = _ref6.CardMedia,
      CardPrimary = _ref6.CardPrimary,
      Icon = _ref6.Icon,
      Shadow = _ref6.Shadow,
      ListTile = _ref6.ListTile;


  var dispatcher = function dispatcher(block) {
    var key = Object.keys(block)[0];
    var attrs = _extends({}, block[key], {
      dispatcher: dispatcher,
      key: key
    });
    switch (key) {
      case "actions":
        return h(CardActions, attrs);
      case "header":
        return createHeader({ attrs: attrs, h: h, k: k, Icon: Icon, ListTile: ListTile });
      case "media":
        return h(CardMedia, attrs);
      case "overlay":
        return createOverlay({ dispatcher: dispatcher, attrs: attrs, h: h, k: k });
      case "primary":
        return h(CardPrimary, attrs);
      case "text":
        return createText({ attrs: attrs, h: h, k: k });
      case "any":
        return createAny({ attrs: attrs, h: h, k: k });
      default:
        throw "Content type \"" + key + "\" does not exist";
    }
  };

  var attrs = vnode.attrs;
  var contents = Array.isArray(attrs.content) ? attrs.content.map(dispatcher) : attrs.content;

  return [h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : 1,
    animated: true,
    key: "shadow"
  }), h("div", {
    className: classes.content,
    key: "content"
  }, contents)];
};

var card = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createProps: createProps,
  createContent: createContent
});

var buttonClasses = {
    component: "pe-text-button",
    super: "pe-button",
    row: "pe-button-row",

    // elements      
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states      
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    extraWide: "pe-button--extra-wide",
    separatorAtStart: "pe-button--separator-start",
    dropdownOpen: "pe-button--dropdown-open",
    dropdownClosed: "pe-button--dropdown-closed"
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified
};

var onMount = function onMount(_ref) {
  var attrs = _ref.attrs;

  if (attrs.bordered) {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["deprecation"])("Card", "bordered", "border");
  }
};

var actionClassForLayout = function actionClassForLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
  return actionLayoutClasses[layout];
};

var createProps$1 = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var attrs = vnode.attrs;
  return _extends$1({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    key: "card-actions",
    className: [classes.actions, attrs.layout !== "vertical" ? buttonClasses.row : null, actionClassForLayout(attrs.layout), attrs.border || attrs.bordered ? classes.actionsBorder : null, attrs.tight ? classes.actionsTight : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent$1 = function createContent(vnode) {
  return vnode.attrs.content || vnode.children;
};

var cardActions = /*#__PURE__*/Object.freeze({
  onMount: onMount,
  createProps: createProps$1,
  createContent: createContent$1
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var imageRatios = {
  landscape: 16 / 9,
  square: 1
};

var mediaSizeClasses = {
  small: classes.mediaSmall,
  regular: classes.mediaRegular,
  medium: classes.mediaMedium,
  large: classes.mediaLarge
};

var mediaSizeClass = function mediaSizeClass() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return mediaSizeClasses[size];
};

var initImage = function initImage(_ref) {
  var dom = _ref.dom,
      img = _ref.img,
      ratio = _ref.ratio,
      origin = _ref.origin;

  img.onload = function () {
    // use a background image on the image container
    if (img.tagName === "IMG") {
      dom.style.backgroundImage = "url(" + img.src + ")";
    }
    var naturalRatio = this.naturalWidth / this.naturalHeight;
    // crop-x: crop over x axis
    // crop-y: crop over y axis
    var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
    dom.classList.add(cropClass);
    var originClass = origin === "start" ? classes.mediaOriginStart : origin === "end" ? classes.mediaOriginEnd : classes.mediaOriginCenter;
    dom.classList.add(originClass);
  };
};

var onMount$1 = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var attrs = vnode.attrs;
  var ratio = attrs.ratio || "landscape";
  var origin = attrs.origin || "center";
  var dom = vnode.dom;
  var img = dom.querySelector("img") || dom.querySelector("iframe");
  initImage({ dom: dom, img: img, ratio: ratio, origin: origin });
};

var createProps$2 = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var attrs = vnode.attrs;
  var ratio = attrs.ratio || "landscape";
  return _extends$2({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    key: "card-media",
    className: [classes.media, mediaSizeClass(attrs.size), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent$2 = function createContent(vnode, _ref3) {
  var h = _ref3.renderer;

  var attrs = vnode.attrs;
  var dispatcher = attrs.dispatcher;
  return [_extends$2({}, attrs.content, { key: "content" }), attrs.overlay ? dispatcher({ overlay: attrs.overlay, key: "overlay" }) : attrs.showDimmer && h("div", {
    className: classes.mediaDimmer,
    key: "dimmer"
  })];
};

var cardMedia = /*#__PURE__*/Object.freeze({
  onMount: onMount$1,
  createProps: createProps$2,
  createContent: createContent$2
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps$3 = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  var primaryHasMedia = Array.isArray(attrs.content) ? attrs.content.reduce(function (total, current) {
    return Object.keys(current)[0] === "media" ? true : total;
  }, false) : attrs.media || false;
  return _extends$3({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    key: "card-primary",
    className: [classes.primary, attrs.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent$3 = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var attrs = vnode.attrs;
  var dispatcher = attrs.dispatcher;
  var primaryDispatch = {
    title: function title(pAttrs) {
      return pAttrs.attrs || pAttrs.props ? pAttrs || pAttrs.props : h("div", {
        className: classes.title,
        key: "title",
        style: pAttrs.style
      }, [pAttrs.title, pAttrs.subtitle ? h("div", {
        className: classes.subtitle,
        key: "subtitle"
      }, pAttrs.subtitle) : null]);
    },
    media: function media(pAttrs) {
      return h("div", {
        className: classes.primaryMedia,
        key: "media",
        style: pAttrs.style
      }, dispatcher({ media: pAttrs }));
    },
    actions: function actions(pAttrs) {
      return dispatcher({ actions: pAttrs });
    }
  };

  return Array.isArray(attrs.content) ? attrs.content.map(function (block) {
    var key = Object.keys(block)[0];
    var pAttrs = block[key];
    return primaryDispatch[key] ? primaryDispatch[key](pAttrs) : block;
  }) : [attrs.title ? primaryDispatch.title({
    title: attrs.title,
    subtitle: attrs.subtitle,
    key: "title"
  }) : null, attrs.media ? primaryDispatch.media(attrs.media) : null, attrs.actions ? primaryDispatch.actions(attrs.actions) : null, attrs.content];
};

var cardPrimary = /*#__PURE__*/Object.freeze({
  createProps: createProps$3,
  createContent: createContent$3
});




/***/ }),

/***/ "../../polythene-core-checkbox/dist/polythene-core-checkbox.mjs":
/*!***************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-checkbox/dist/polythene-core-checkbox.mjs ***!
  \***************************************************************************************************************************************/
/*! exports provided: coreCheckbox */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreCheckbox", function() { return checkbox; });
var classes = {
  component: "pe-checkbox-control"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>";

var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    icons: icons,
    selectable: attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

var checkbox = /*#__PURE__*/Object.freeze({
  createProps: createProps
});




/***/ }),

/***/ "../../polythene-core-css/dist/polythene-core-css.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-css/dist/polythene-core-css.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: flex, mixin, styler, hex, rgba, sel, selectorRTL, createLayout, createColor, layoutStyles, addLayoutStyles */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return styler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sel", function() { return sel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorRTL", function() { return selectorRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLayout", function() { return createLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColor", function() { return createColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutStyles", function() { return layoutStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLayoutStyles", function() { return addLayoutStyles; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var j2c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! j2c */ "../../polythene-core-css/node_modules/j2c/dist/j2c.commonjs.js");



var layout = [{
  "display": "-webkit-box"
}, {
  "display": "-moz-box"
}, {
  "display": "-ms-flexbox"
}, {
  "display": "-webkit-flex"
}, {
  "display": "flex"
}];

var layoutInline = [layout, {
  "display": "-ms-inline-flexbox"
}, {
  "display": "-webkit-inline-flex"
}, {
  "display": "inline-flex"
}];

var layoutHorizontal = [layout, {
  "-ms-flex-direction": "row",
  "-webkit-flex-direction": "row",
  "flex-direction": "row"
}];

var layoutHorizontalReverse = [layout, {
  "-ms-flex-direction": "row-reverse",
  "-webkit-flex-direction": "row-reverse",
  "flex-direction": "row-reverse"
}];

var layoutVertical = [layout, {
  "-ms-flex-direction": "column",
  "-webkit-flex-direction": "column",
  "flex-direction": "column"
}];

var layoutVerticalReverse = [layout, {
  "-ms-flex-direction": "column-reverse",
  "-webkit-flex-direction": "column-reverse",
  "flex-direction": "column-reverse"
}];

var layoutWrap = [layout, {
  "-ms-flex-wrap": "wrap",
  "-webkit-flex-wrap": "wrap",
  "flex-wrap": "wrap"
}];

var layoutWrapReverse = [layout, {
  "-ms-flex-wrap": "wrap-reverse",
  "-webkit-flex-wrap": "wrap-reverse",
  "flex-wrap": "wrap-reverse"
}];

var layoutStart = [layout, {
  "-ms-flex-align": "start",
  "-webkit-align-items": "flex-start",
  "align-items": "flex-start"
}];

var layoutCenter = [layout, {
  "-ms-flex-align": "center",
  "-webkit-align-items": "center",
  "align-items": "center"
}];

var layoutEnd = [layout, {
  "-ms-flex-align": "end",
  "-webkit-align-items": "flex-end",
  "align-items": "flex-end"
}];

var layoutJustified = [layout, {
  "-ms-flex-pack": "justify",
  "-webkit-justify-content": "space-between",
  "justify-content": "space-between"
}];

var layoutStartJustified = [layout, {
  "-ms-flex-pack": "start",
  "-webkit-justify-content": "flex-start",
  "justify-content": "flex-start"
}];

var layoutCenterJustified = [layout, {
  "-ms-flex-pack": "center",
  "-webkit-justify-content": "center",
  "justify-content": "center"
}];

var layoutEndJustified = [layout, {
  "-ms-flex-pack": "end",
  "-webkit-justify-content": "flex-end",
  "justify-content": "flex-end"
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout, {
  "-ms-flex-pack": "distribute",
  "-webkit-justify-content": "space-around",
  "justify-content": "space-around"
}];

var flex = function flex() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return [{
    "-webkit-box-flex": num
  }, {
    "-moz-box-flex": num
  }, {
    "-webkit-flex": num
  }, {
    "-ms-flex": num
  }, {
    "flex": num
  }, num === 1 ? {
    "-webkit-flex-basis": "0.000000001px"
  } : {}, num === 1 ? {
    "flex-basis": "0.000000001px"
  } : {}];
};

var flexAuto = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexAutoVertical = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexIndex = function flexIndex(index) {
  return {
    "-ms-flex": index,
    "-webkit-flex": index,
    "flex": index
  };
};

var flexGrow = function flexGrow(value) {
  return {
    "-webkit-flex-grow": value,
    "flex-grow": value
  };
};

var selfStart = {
  "-ms-align-self": "flex-start",
  "-webkit-align-self": "flex-start",
  "align-self": "flex-start"
};

var selfCenter = {
  "-ms-align-self": "center",
  "-webkit-align-self": "center",
  "align-self": "center"
};

var selfEnd = {
  "-ms-align-self": "flex-end",
  "-webkit-align-self": "flex-end",
  "align-self": "flex-end"
};

var selfStretch = {
  "-ms-align-self": "stretch",
  "-webkit-align-self": "stretch",
  "align-self": "stretch"
};

var flex$1 = {
  flex: flex,
  flexAuto: flexAuto,
  flexAutoVertical: flexAutoVertical,
  flexIndex: flexIndex,
  flexGrow: flexGrow,
  layout: layout,
  layoutAroundJustified: layoutAroundJustified,
  layoutCenter: layoutCenter,
  layoutCenterCenter: layoutCenterCenter,
  layoutCenterJustified: layoutCenterJustified,
  layoutEnd: layoutEnd,
  layoutEndJustified: layoutEndJustified,
  layoutHorizontal: layoutHorizontal,
  layoutHorizontalReverse: layoutHorizontalReverse,
  layoutInline: layoutInline,
  layoutJustified: layoutJustified,
  layoutStart: layoutStart,
  layoutStartJustified: layoutStartJustified,
  layoutVertical: layoutVertical,
  layoutVerticalReverse: layoutVerticalReverse,
  layoutWrap: layoutWrap,
  layoutWrapReverse: layoutWrapReverse,
  selfCenter: selfCenter,
  selfEnd: selfEnd,
  selfStart: selfStart,
  selfStretch: selfStretch
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Mixins for j2c

// Centers an item absolutely within relative parent
// mixin.fit()
var fit = function fit() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var offsetPx = offset + "px";
  return {
    position: "absolute",
    top: offsetPx,
    right: offsetPx,
    bottom: offsetPx,
    left: offsetPx
  };
};

// Optional font smoothing
// mixin.fontSmoothing()
var fontSmoothing = function fontSmoothing() {
  var smoothing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (smoothing) {
    return {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale"
    };
  } else {
    return {
      "-webkit-font-smoothing": "subpixel-antialiased",
      "-moz-osx-font-smoothing": "auto"
    };
  }
};

// Breaks off a line with ...
// unless lines is "none"
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, "em") // max 2 lines, 2.6em high
var ellipsis = function ellipsis(lines, lineHeight) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "px";

  if (lines === "none") {
    return {
      textOverflow: "initial",
      overflow: "initial",
      display: "block",
      height: "auto",
      maxHeight: "none",
      whiteSpace: "normal"
    };
  }
  return [{
    "@supports (-webkit-line-clamp: 2)": _extends({}, lines !== undefined ? {
      "-webkit-line-clamp": lines,
      "-webkit-box-orient": "vertical",
      display: "-webkit-box",
      wordBreak: "break-word"
    } : null)
  }, _extends({}, {
    overflow: "hidden",
    textOverflow: "ellipsis",
    textRendering: "auto" // Samsung Android
  }, lineHeight !== undefined ? { maxHeight: lines * lineHeight + unit } : null, lineHeight === 1 ? { wordWrap: "nowrap" } : null)];
};

// Clears float
// mixin.clearfix()
var clearfix = function clearfix() {
  return {
    "&:after": {
      content: "\"\"",
      display: "table",
      clear: "both"
    }
  };
};

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    position: "sticky",
    top: 0,
    zIndex: zIndex
  };
};

// Creates a transition with presets
// mixin.defaultTransition("opacity", vars.animation_duration)
var defaultTransition = function defaultTransition() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".18s";
  var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ease-out";
  return {
    transitionDelay: "0ms",
    transitionDuration: duration,
    transitionTimingFunction: curve,
    transitionProperty: properties
  };
};

var mixin = {
  clearfix: clearfix,
  defaultTransition: defaultTransition,
  ellipsis: ellipsis,
  fit: fit,
  fontSmoothing: fontSmoothing,
  sticky: sticky
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var j2cPluginPrefixBrowser_commonjs = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', { value: true });

  // Derived from Lea Verou's PrefixFree

  var allStyles;
  var styleAttr;
  var styleElement;
  var supportedProperty;
  var supportedDecl;

  function init() {
    allStyles = getComputedStyle(document.documentElement, null);
    styleAttr = document.createElement('div').style;
    styleElement = document.documentElement.appendChild(document.createElement('style'));
    supportedDecl = _supportedDecl;
    supportedProperty = _supportedProperty;
    if ('zIndex' in styleAttr && !('z-index' in styleAttr)) {
      // Some browsers like it dash-cased, some camelCased, most like both.
      supportedDecl = function supportedDecl(property, value) {
        return _supportedDecl(camelCase(property), value);
      };
      supportedProperty = function supportedProperty(property) {
        return _supportedProperty(camelCase(property));
      };
    }
  }
  function finalize() {
    if (typeof document !== 'undefined') document.documentElement.removeChild(styleElement);
    // `styleAttr` is used at run time via `supportedProperty()`
    // `allStyles` and `styleElement` can be displosed of after initialization.
    allStyles = styleElement = null;
  }

  // Helpers, in alphabetic order

  function camelCase(str) {
    return str.replace(/-([a-z])/g, function ($0, $1) {
      return $1.toUpperCase();
    }).replace('-', '');
  }
  function deCamelCase(str) {
    return str.replace(/[A-Z]/g, function ($0) {
      return '-' + $0.toLowerCase();
    });
  }
  function _supportedDecl(property, value) {
    styleAttr[property] = '';
    styleAttr[property] = value;
    return !!styleAttr[property];
  }
  function supportedMedia(property, value) {
    styleElement.textContent = '@media (' + property + ':' + value + '){}';
    // The !!~indexOf trick. False for -1, true otherwise.
    return !!~styleElement.sheet.cssRules[0].cssText.indexOf(value);
  }
  function _supportedProperty(property) {
    return property in styleAttr;
  }
  function supportedRule(selector) {
    styleElement.textContent = selector + '{}';
    return !!styleElement.sheet.cssRules.length;
  }

  // Derived from Lea Verou's PrefixFree

  // TODO: http://caniuse.com/#feat=css-media-resolution

  function detectAtrules(fixers) {
    if (fixers.prefix === '') return;
    var atrules = {
      'keyframes': 'name',
      'viewport': null,
      'document': 'regexp(".")'
    };

    // build a map of {'@ruleX': '@-prefix-ruleX'}
    for (var atrule in atrules) {
      var test = atrule + ' ' + (atrules[atrule] || '');
      for (var i = fixers.prefixes.length; i--;) {
        if (!supportedRule('@' + test) && supportedRule('@' + fixers.prefixes[i] + test)) {

          fixers.hasAtrules = true;
          fixers.atrules['@' + atrule] = '@' + fixers.prefixes[i] + atrule;
        }
      }
    }

    // Standard
    fixers.hasDppx = supportedMedia('resolution', '1dppx');
    // Webkit
    fixers.hasPixelRatio = supportedMedia(fixers.prefix + 'device-pixel-ratio', '1');
    // Opera
    fixers.hasPixelRatioFraction = supportedMedia(fixers.prefix + 'device-pixel-ratio', '1/1');

    if (fixers.hasPixelRatio || fixers.hasPixelRatioFraction) {
      fixers.properties['resolution'] = fixers.prefix + 'device-pixel-ratio';
      fixers.properties['min-resolution'] = fixers.prefix + 'min-device-pixel-ratio';
      fixers.properties['max-resolution'] = fixers.prefix + 'max-device-pixel-ratio';
      if (supportedMedia('min-' + fixers.prefix + 'device-pixel-ratio', '1')) {
        // Mozilla/Firefox tunred a vendor prefix into a vendor infix
        fixers.properties['min-resolution'] = 'min-' + fixers.prefix + 'device-pixel-ratio';
        fixers.properties['max-resolution'] = 'max-' + fixers.prefix + 'device-pixel-ratio';
      }
    }
  }

  // Derived from Lea Verou's PrefixFree

  function detectFunctions(fixers) {
    // Values that might need prefixing
    if (fixers.prefix === '') return;
    var functions = {
      'linear-gradient': {
        property: 'background-image',
        params: 'red, teal'
      },
      'calc': {
        property: 'width',
        params: '1px + 5%'
      },
      'element': {
        property: 'background-image',
        params: '#foo'
      },
      'cross-fade': {
        property: 'backgroundImage',
        params: 'url(a.png), url(b.png), 50%'
      }
    };
    functions['repeating-linear-gradient'] = functions['repeating-radial-gradient'] = functions['radial-gradient'] = functions['linear-gradient'];

    // build an array of prefixable functions
    for (var func in functions) {
      var test = functions[func],
          property = test.property,
          value = func + '(' + test.params + ')';

      if (!supportedDecl(property, value) && supportedDecl(property, fixers.prefix + value)) {
        // It's only supported with a prefix
        fixers.functions.push(func);
      }
    }
  }

  // Derived from Lea Verou's PrefixFree and Robin Frischmann's Inline Style Prefixer

  // TODO: http://caniuse.com/#feat=css-writing-mode

  // db of prop/value pairs whose values may need treatment.

  var keywords = [

  // `initial` applies to all properties and is thus handled separately.
  {
    props: ['cursor'],
    values: ['grab', 'grabbing', 'zoom-in', 'zoom-out']
  }, {
    props: ['display'],
    values: ['box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid']
  }, {
    props: ['position'],
    values: ['sticky']
  }, {
    props: ['width', 'column-width', 'height', 'max-height', 'max-width', 'min-height', 'min-width'],
    values: ['contain-floats', 'fill-available', 'fit-content', 'max-content', 'min-content']
  }];
  // The flexbox zoo
  //
  // ## Specs:
  // - box     (2009/old):  https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
  // - flexbox (2012/ie10): https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/
  // - flex    (final):     https://www.w3.org/TR/css-flexbox-1/
  var flex2009Props = {
    // ?align-content =>
    // ?align-self =>
    'align-items': 'box-align',
    'flex': 'box-flex', // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025,
    // ?flex-basis =>
    // !!flex-direction => box-direction + box-orient, covered in `plugin.js`
    'box-direction': 'box-direction', // we prepopulate the cache for the above case.
    'box-orient': 'box-orient',
    // !!flex-flow => flex-direction and/or flex-wrap, covered in `plugin.js`
    'flex-grow': 'box-flex', // https://compat.spec.whatwg.org/#propdef--webkit-box-flex
    // ?flex-shrink =>
    'flex-wrap': 'box-lines',
    'justify-content': 'box-pack',
    'order': 'box-ordinal-group' // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025
  };
  var flex2009Values = {
    // flex => box || only for display? handled in the code
    'flex-end': 'end',
    'flex-start': 'start',
    // inline-flex => inline-box || see flex
    'nowrap': 'single',
    'space-around': 'justify',
    'space-between': 'justify',
    'wrap': 'multiple',
    'wrap-reverse': 'multiple'
  };
  var flex2012Props = {
    'align-content': '-ms-flex-line-pack',
    'align-items': '-ms-flex-align',
    'align-self': '-ms-flex-item-align',
    // flex => -ms-flex
    'flex-basis': '-ms-preferred-size',
    // flex-direction => -ms-flex-direction
    // flex-flow => -ms-flex-flow
    'flex-grow': '-ms-flex-positive',
    'flex-shrink': '-ms-flex-negative',
    // flex-wrap => -ms-flex-wrap
    'justify-content': '-ms-flex-pack',
    'order': '-ms-flex-order'
  };
  var flex2012Values = {
    // flex => flexbox || only for display? handled in the code
    'flex-end': 'end',
    'flex-start': 'start',
    // inline-flex => inline-flexbox || see 'flex'
    // nowrap => nowrap
    'space-around': 'distribute',
    'space-between': 'justify'
    // wrap => wrap
    // wrap-reverse => wrap-reverse
  };

  function detectKeywords(fixers) {
    if (fixers.prefixes.length === 0) return;

    // build a map of {propertyI: {keywordJ: previxedKeywordJ, ...}, ...}
    for (var i = 0; i < keywords.length; i++) {
      var map = {},
          property = keywords[i].props[0];
      // eslint-disable-next-line
      for (var j = 0, keyword; keyword = keywords[i].values[j]; j++) {
        for (var k = fixers.prefixes.length; k--;) {
          if (!supportedDecl(property, keyword) && supportedDecl(property, fixers.prefixes[k] + keyword)) {
            fixers.hasKeywords = true;
            map[keyword] = fixers.prefixes[k] + keyword;
          }
        }
      }
      // eslint-disable-next-line
      for (j = 0; property = keywords[i].props[j]; j++) {
        fixers.keywords[property] = map;
      }
    }
    if (fixers.keywords.display && fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
      // IE 10, Flexbox 2012
      fixers.keywords.display.flex = fixers.keywords.display.flexbox;
      fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-flexbox'];
      fixers.flexbox2012 = true;
      for (k in flex2012Props) {
        fixers.properties[k] = flex2012Props[k];
        fixers.keywords[k] = flex2012Values;
      }
    } else if (fixers.keywords.display && fixers.keywords.display.box && !supportedDecl('display', 'flex') && !supportedDecl('display', fixers.prefix + 'flex')) {
      // old flexbox spec
      fixers.keywords.display.flex = fixers.keywords.display.box;
      fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-box'];
      fixers.flexbox2009 = true;
      for (k in flex2009Props) {
        fixers.properties[k] = fixers.prefix + flex2009Props[k];
        fixers.keywords[k] = flex2009Values;
      }
    } else if (fixers.keywords.display && !fixers.keywords.display.box && !fixers.keywords.display.flex && !fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
      fixers.jsFlex = true;
    }
    if (!supportedDecl('color', 'initial') && supportedDecl('color', fixers.prefix + 'initial')) {
      // `initial` does not use the `hasKeywords` branch, no need to set it to true.
      fixers.initial = fixers.prefix + 'initial';
    }
  }

  // Derived from Lea Verou's PrefixFree

  function detectPrefix(fixers) {
    var prefixCounters = {};
    // Why are we doing this instead of iterating over properties in a .style object? Because Webkit.
    // 1. Older Webkit won't iterate over those.
    // 2. Recent Webkit will, but the 'Webkit'-prefixed properties are not enumerable. The 'webkit'
    //    (lower case 'w') ones are, but they don't `deCamelCase()` into a prefix that we can detect.

    function iteration(property) {
      if (property.charAt(0) === '-') {
        var prefix = property.split('-')[1];

        // Count prefix uses
        prefixCounters[prefix] = ++prefixCounters[prefix] || 1;
      }
    }

    // Some browsers have numerical indices for the properties, some don't
    if (allStyles && allStyles.length > 0) {
      for (var i = 0; i < allStyles.length; i++) {
        iteration(allStyles[i]);
      }
    } else {
      for (var property in allStyles) {
        iteration(deCamelCase(property));
      }
    }

    var prefixes = [];
    for (var p in prefixCounters) {
      prefixes.push(p);
    }prefixes.sort(function (a, b) {
      return prefixCounters[b] - prefixCounters[a];
    });

    fixers.prefixes = prefixes.map(function (p) {
      return '-' + p + '-';
    });
    fixers.prefix = fixers.prefixes[0] || '';
    // Edge supports both `webkit` and `ms` prefixes, but `ms` isn't detected with the method above.
    // the selector comes from http://browserstrangeness.com/css_hacks.html
    if (supportedRule('_:-ms-lang(x), _:-webkit-full-screen')) fixers.prefixes.push('-ms-');
    fixers.Prefix = camelCase(fixers.prefix);
  }

  // Derived from Lea Verou's PrefixFree

  function detectSelectors(fixers) {
    var selector, prefixed;
    function prefixSelector(selector) {
      return selector.replace(/^::?/, function ($0) {
        return $0 + fixers.prefix;
      });
    }

    if (fixers.prefix === '') return;
    var selectors = {
      ':any-link': null,
      '::backdrop': null,
      ':fullscreen': null, //TODO sort out what changed between specs
      ':full-screen': ':fullscreen',
      //sigh
      '::placeholder': null,
      ':placeholder': '::placeholder',
      '::input-placeholder': '::placeholder',
      ':input-placeholder': '::placeholder',
      ':read-only': null,
      ':read-write': null,
      '::selection': null
    };

    // builds an array of selectors that need a prefix.
    for (selector in selectors) {
      prefixed = prefixSelector(selector);
      if (!supportedRule(selectors[selector] || selector) && supportedRule(prefixed)) {
        fixers.hasSelectors = true;
        fixers.selectorList.push(selectors[selector] || selector);
        fixers.selectorMap[selectors[selector] || selector] = prefixed;
      }
    }
  }

  function detectWebkitCompat(fixers) {
    if (!supportedDecl('background-clip', 'text') && supportedDecl('-webkit-background-clip', 'text')) fixers.WkBCTxt = true;['background-clip', 'text-fill-color', 'text-stroke-color', 'text-stroke-width', 'text-stroke'].forEach(function (prop) {
      if (!supportedProperty(prop) && supportedProperty('-webkit-' + prop)) fixers.properties[prop] = '-webkit-' + prop;
    });
  }

  function blankFixers() {
    return {
      atrules: {},
      hasAtrules: false,
      hasDppx: null,
      hasKeywords: false,
      hasPixelRatio: false,
      hasPixelRatioFraction: false,
      hasSelectors: false,
      hasValues: false,
      fixAtMediaParams: null,
      fixAtSupportsParams: null,
      fixProperty: null,
      fixSelector: null,
      fixValue: null,
      flexbox2009: false,
      flexbox2012: false,
      functions: [],
      initial: null,
      jsFlex: false,
      keywords: {},
      placeholder: null,
      prefix: '',
      prefixes: [],
      Prefix: '',
      properties: {},
      selectorList: [],
      selectorMap: {},
      valueProperties: {
        'transition': 1,
        'transition-property': 1,
        'will-change': 1
      },
      WkBCTxt: false // -webkit-background-clip: text
    };
  }

  function browserDetector(fixers) {
    // add the required data to the fixers object.
    init();
    detectPrefix(fixers);
    detectSelectors(fixers);
    detectAtrules(fixers);
    detectKeywords(fixers);
    detectFunctions(fixers);
    detectWebkitCompat(fixers);
    finalize();
  }

  var emptySet = {};

  var valueTokenizer = /[(),]|\/\*[\s\S]*?\*\//g;

  /**
   * For properties whose values are also properties, this will split a coma-separated
   * value list into individual values, ignoring comas in comments and in
   * functions(parameter, lists).
   *
   * @param {string} selector
   * @return {string[]}
   */

  function splitValue(value) {
    var indices = [],
        res = [],
        inParen = 0,
        o;
    /*eslint-disable no-cond-assign*/
    while (o = valueTokenizer.exec(value)) {
      /*eslint-enable no-cond-assign*/
      switch (o[0]) {
        case '(':
          inParen++;break;
        case ')':
          inParen--;break;
        case ',':
          if (inParen) break;indices.push(o.index);
      }
    }
    for (o = indices.length; o--;) {
      res.unshift(value.slice(indices[o] + 1));
      value = value.slice(0, indices[o]);
    }
    res.unshift(value);
    return res;
  }

  function makeDetector(before, targets, after) {
    return new RegExp(before + '(?:' + targets.join('|') + ')' + after);
  }

  function makeLexer(before, targets, after) {
    return new RegExp("\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|" + before + '((?:' + targets.join('|') + '))' + after, 'gi');
  }

  // declarations
  // ------------
  // function trim(s) {
  //   return s.replace(/^\s*(.*?)\s*$/, '$1')
  // }

  function fixDecl(fixers, emit, property, value) {
    if (typeof property !== 'string' || property.charAt(0) === '-') return emit(property, value);

    if (!(typeof value === 'string' || typeof value === 'number')) {
      return emit(fixers.properties[property] || fixers.fixProperty(property), value);
    }

    value = value + '';
    if (fixers.jsFlex) {
      if (property === 'display' && (value === 'flex' || value === 'inline-flex')) {
        emit('-js-display', value);
        return;
      }
    } else if (fixers.flexbox2009) {
      // TODO: flex only takes one value in the 2009 spec
      // if (property === 'flex') {
      //   value = trim(value)
      //   if (value === 'none' || value === 'initial') emit(property, '0')
      //   else if (value === 'auto') emit(property, '1')
      //   else emit(property, value.replace(/^(\d+)(?=\W|$).*/, '$1'))
      //   return
      // } else
      if (property === 'flex-flow') {
        value.split(/\s+/).forEach(function (v) {
          // recurse! The lack of `next.` is intentional.
          if (v.indexOf('wrap') > -1) fixDecl(fixers, emit, 'flex-wrap', v);else if (v !== '') fixDecl(fixers, emit, 'flex-direction', v);
        });
        return;
      } else if (property === 'flex-direction') {
        emit(fixers.properties['box-orient'], value.indexOf('column') > -1 ? 'block-axis' : 'inline-axis');
        emit(fixers.properties['box-direction'], value.indexOf('-reverse') > -1 ? 'reverse' : 'normal');
        return;
      }
    }
    // else if (fixers.flexbox2012) {
    //   // if (property === 'flex' && value.indexOf('calc(') !== -1) {
    //   //   var parsed =
    //   // }
    // }
    if (fixers.WkBCTxt && property === 'background-clip' && value === 'text') {
      emit('-webkit-background-clip', value);
    } else {
      emit(fixers.properties[property] || fixers.fixProperty(property), fixers.fixValue(value, property));
    }
  }

  function finalizeFixers(fixers) {
    var prefix = fixers.prefix;

    // properties
    // ----------

    fixers.fixProperty = fixers.fixProperty || function (prop) {
      var prefixed;
      return fixers.properties[prop] = supportedProperty(prop) || !supportedProperty(prefixed = prefix + prop) ? prop : prefixed;
    };

    // selectors
    // ----------

    var selectorDetector = makeDetector('', fixers.selectorList, '(?:\\b|$|[^-])');
    var selectorMatcher = makeLexer('', fixers.selectorList, '(?:\\b|$|[^-])');
    var selectorReplacer = function selectorReplacer(match, selector) {
      return selector != null ? fixers.selectorMap[selector] : match;
    };
    fixers.fixSelector = function (selector) {
      return selectorDetector.test(selector) ? selector.replace(selectorMatcher, selectorReplacer) : selector;
    };

    // values
    // ------

    // When gradients are supported with a prefix, convert angles to legacy
    // (from clockwise to trigonometric)
    var hasGradients = fixers.functions.indexOf('linear-gradient') > -1;
    var gradientDetector = /\blinear-gradient\(/;
    var gradientMatcher = /(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/ig;
    var gradientReplacer = function gradientReplacer(match, delim, gradient, deg) {
      return delim + gradient + (90 - deg) + 'deg';
    };

    // functions
    var hasFunctions = !!fixers.functions.length;
    var functionsDetector = makeDetector('(?:^|\\s|,|\\()', fixers.functions, '\\s*\\(');
    var functionsMatcher = makeLexer('(^|\\s|,|\\()', fixers.functions, '(?=\\s*\\()');
    function functionReplacer(match, $1, $2) {
      return $1 + prefix + $2;
    }

    // properties as values (for transition, ...)
    // No need to look for strings in these properties. We may insert prefixes in comments. Oh the humanity.
    var valuePropertiesMatcher = /^\s*([-\w]+)/gi;
    var valuePropertiesReplacer = function valuePropertiesReplacer(match, prop) {
      return fixers.properties[prop] || fixers.fixProperty(prop);
    };

    fixers.fixValue = function (value, property) {
      var res;
      if (fixers.initial != null && value === 'initial') return fixers.initial;

      if (fixers.hasKeywords && (res = (fixers.keywords[property] || emptySet)[value])) return res;

      res = value;

      if (fixers.valueProperties.hasOwnProperty(property)) {
        res = value.indexOf(',') === -1 ? value.replace(valuePropertiesMatcher, valuePropertiesReplacer) : splitValue(value).map(function (v) {
          return v.replace(valuePropertiesMatcher, valuePropertiesReplacer);
        }).join(',');
      }

      if (hasFunctions && functionsDetector.test(value)) {
        if (hasGradients && gradientDetector.test(value)) {
          res = res.replace(gradientMatcher, gradientReplacer);
        }
        res = res.replace(functionsMatcher, functionReplacer);
      }
      return res;
    };

    // @media (resolution:...) {
    // -------------------------

    var resolutionMatcher = /((?:min-|max-)?resolution)\s*:\s*((?:\d*\.)?\d+)dppx/g;
    var resolutionReplacer = fixers.hasPixelRatio ? function (_, prop, param) {
      return fixers.properties[prop] + ':' + param;
    } : fixers.hasPixelRatioFraction ? function (_, prop, param) {
      return fixers.properties[prop] + ':' + Math.round(param * 10) + '/10';
    } : function (_, prop, param) {
      return prop + ':' + Math.round(param * 96) + 'dpi';
    };

    fixers.fixAtMediaParams = fixers.hasDppx !== false /*it may be null*/ ? function (p) {
      return p;
    } : function (params) {
      return params.indexOf('reso') !== -1 ? params.replace(resolutionMatcher, resolutionReplacer) : params;
    };

    // @supports ... {
    // ---------------

    var supportsProp, supportsValue;
    var atSupportsParamsFixer = function atSupportsParamsFixer(property, value) {
      supportsProp = property;
      supportsValue = value;
    };
    // regexp built by scripts/regexps.js
    var atSupportsParamsMatcher = /\(\s*([-\w]+)\s*:\s*((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;
    function atSupportsParamsReplacer(match, prop, value) {
      fixDecl(fixers, atSupportsParamsFixer, prop, value);
      return '(' + supportsProp + ':' + supportsValue;
    }
    fixers.fixAtSupportsParams = function (params) {
      return params.replace(atSupportsParamsMatcher, atSupportsParamsReplacer);
    };
  }

  var commonFixers;

  function initBrowser() {
    // exported for the test suite
    commonFixers = blankFixers();
    if (typeof getComputedStyle === 'function') browserDetector(commonFixers);
    finalizeFixers(commonFixers);
  }
  initBrowser();

  function prefixPlugin() {
    var fixers = commonFixers;
    var cache = [];
    return {
      set: {
        setPrefixDb: function setPrefixDb(f) {
          if (cache.indexOf(f) === -1) {
            finalizeFixers(f);
            cache.push(f);
          }
          fixers = f;
          return prefixPlugin;
        }
      },
      filter: function filter(next) {
        return {
          atrule: function atrule(rule, kind, params, hasBlock) {
            next.atrule(fixers.hasAtrules && fixers.atrules[rule] || rule, kind, rule === '@media' ? fixers.fixAtMediaParams(params) : rule === '@supports' ? fixers.fixAtSupportsParams(params) : params, hasBlock);
          },
          decl: function decl(property, value) {
            fixDecl(fixers, next.decl, property, value);
          },
          rule: function rule(selector) {
            next.rule(fixers.hasSelectors ? fixers.fixSelector(selector) : selector);
          }
        };
      }
    };
  }

  exports.prefixPlugin = prefixPlugin;
});

unwrapExports(j2cPluginPrefixBrowser_commonjs);
var j2cPluginPrefixBrowser_commonjs_1 = j2cPluginPrefixBrowser_commonjs.prefixPlugin;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var j2c = new j2c__WEBPACK_IMPORTED_MODULE_1__(j2cPluginPrefixBrowser_commonjs_1);
var ID_REGEX = /[^a-z0-9\\-]/g;

/*
 * @param id: identifier, used as HTMLElement id for the attached <style></style> element
 * @param styles: list of lists style Objects
 */
var add = function add(id) {
  for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  return addToDocument.apply(undefined, [{
    id: id
  }].concat(styles));
};

/*
 * Removes a style from head.
 */
var remove = function remove(id) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  if (id) {
    var old = document.getElementById(id);
    if (old && old.parentNode) {
      old.parentNode.removeChild(old);
    }
  }
};

/*
 * opts: options object
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * document: document reference; default window.document
 * styles: list of lists style objects
 */
var addToDocument = function addToDocument(opts) {
  for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styles[_key2 - 1] = arguments[_key2];
  }

  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var id = opts.id.replace(ID_REGEX, "_");
  var documentRef = opts.document || window.document;
  remove(id);
  var styleEl = documentRef.createElement("style");
  if (id) {
    styleEl.setAttribute("id", id);
  }
  styles.forEach(function (styleList) {
    // each style returns a list
    if (Object.keys(styleList).length) {
      styleList.forEach(function (style) {
        var scoped = {
          "@global": style
        };
        var sheet = j2c.sheet(scoped);
        styleEl.appendChild(documentRef.createTextNode(sheet));
      });
    }
  });
  documentRef.head.appendChild(styleEl);
};

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param vars: Object configuration variables
 * @param styleFns: Array of Functions: (selector, componentVars) => [j2c style objects]
*/

var addStyle = function addStyle(_ref) {
  var selectors = _ref.selectors,
      styleFns = _ref.fns,
      vars = _ref.vars,
      customVars = _ref.customVars,
      mediaQuery = _ref.mediaQuery;

  var selector = selectors.join("");
  var styleList = styleFns.map(function (fn) {
    return fn(selector, vars, customVars);
  });
  var id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  if (mediaQuery) {
    add(id, [_defineProperty({}, mediaQuery, styleList)]);
  } else {
    add(id, styleList);
  }
};

var getStyle = function getStyle(_ref3) {
  var selectors = _ref3.selectors,
      styleFns = _ref3.fns,
      vars = _ref3.vars,
      customVars = _ref3.customVars,
      mediaQuery = _ref3.mediaQuery;

  var selector = selectors.join("");
  var styleList = styleFns.map(function (fn) {
    return fn(selector, vars, customVars);
  });
  return mediaQuery ? [_defineProperty({}, mediaQuery, styleList)] : styleList;
};

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param fns: Array of Functions: (selector, componentVars) => [j2c style objects]
 * @param vars: (Object) Style configuration variables
*/
var createAddStyle = function createAddStyle(selector, fns, vars) {
  return function () {
    var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var customVars = arguments[1];

    var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref5.mediaQuery;

    return addStyle({
      selectors: [selector, customSelector],
      fns: fns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
  };
};

var createGetStyle = function createGetStyle(selector, fns, vars) {
  return function () {
    var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var customVars = arguments[1];

    var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref6.mediaQuery;

    return [getStyle({
      selectors: [selector, customSelector],
      fns: fns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    })];
  };
};

var styler = {
  add: add,
  addStyle: addStyle,
  addToDocument: addToDocument,
  createAddStyle: createAddStyle,
  createGetStyle: createGetStyle,
  getStyle: getStyle,
  remove: remove
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel = function sel(selector, o) {
  return _defineProperty$1({}, selector, o);
};

var selectorRTL = function selectorRTL(selector) {
  return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
};

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var hex = function hex(value) {
  var bigint = parseInt(value.substring(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r + "," + g + "," + b;
};

var createStyle = function createStyle(_ref2) {
  var varFns = _ref2.varFns,
      customVarFns = _ref2.customVarFns,
      superStyle = _ref2.superStyle,
      varMixin = _ref2.varMixin,
      selector = _ref2.selector,
      scopedSelector = _ref2.scopedSelector,
      componentVars = _ref2.componentVars,
      customVars = _ref2.customVars;

  var allVars = _extends$1({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;

  var _ref3 = componentVars || {},
      general_styles = _ref3.general_styles,
      otherVars = _objectWithoutProperties(_ref3, ["general_styles"]);

  var baseLayout = superStyle !== undefined ? customVars !== undefined ? superStyle(selector, componentVars, customVars) : superStyle(selector, otherVars) : [];
  var fns = _extends$1({}, !!customVars && customVarFns, varFns);
  return baseLayout.concat(Object.keys(varMixin(currentVars)).map(function (v) {
    return fns && fns[v] !== undefined ? fns[v](scopedSelector, allVars) : null;
  }).filter(function (s) {
    return s;
  }));
};

var createLayout = function createLayout(_ref4) {
  var varFns = _ref4.varFns,
      customVarFns = _ref4.customVarFns,
      superLayout = _ref4.superLayout,
      _ref4$varMixin = _ref4.varMixin,
      varMixin = _ref4$varMixin === undefined ? function (o) {
    return o;
  } : _ref4$varMixin;
  return function (selector, componentVars, customVars) {
    return createStyle({ varFns: varFns, customVarFns: customVarFns, superStyle: superLayout, varMixin: varMixin, selector: selector, scopedSelector: selector, componentVars: componentVars, customVars: customVars });
  };
};

var createColorStyle = function createColorStyle(_ref5) {
  var selector = _ref5.selector,
      scopedSelector = _ref5.scopedSelector,
      componentVars = _ref5.componentVars,
      customVars = _ref5.customVars,
      varFns = _ref5.varFns,
      superColor = _ref5.superColor,
      varMixin = _ref5.varMixin;
  return createStyle({ varFns: varFns, superStyle: superColor, varMixin: varMixin, selector: selector, scopedSelector: scopedSelector, componentVars: componentVars, customVars: customVars });
};

var appendPseudoClass = function appendPseudoClass(_ref6) {
  var scopes = _ref6.scopes,
      selector = _ref6.selector,
      _ref6$isNoTouch = _ref6.isNoTouch,
      isNoTouch = _ref6$isNoTouch === undefined ? false : _ref6$isNoTouch;
  return isNoTouch ? scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(",") : scopes.map(function (s) {
    return s + selector;
  }).join(",");
};

var createScopedSelector = function createScopedSelector(_ref7) {
  var scopes = _ref7.scopes,
      selector = _ref7.selector,
      _ref7$isNoTouch = _ref7.isNoTouch,
      isNoTouch = _ref7$isNoTouch === undefined ? false : _ref7$isNoTouch;
  return selector.split(/\s*,\s*/).map(function (s) {
    return appendPseudoClass({ scopes: scopes, selector: s, isNoTouch: isNoTouch });
  });
};

var colorScopes = [{
  // has/inside dark tone
  scopes: [".pe-dark-tone", ".pe-dark-tone "],
  varFnName: "darkTintFns",
  isNoTouch: false
}, {
  // normal, has/inside light tone
  scopes: ["", ".pe-light-tone", ".pe-light-tone "],
  varFnName: "lightTintFns",
  isNoTouch: false
}, {
  // has/inside dark tone
  scopes: [".pe-no-touch .pe-dark-tone "],
  varFnName: "darkTintHoverFns",
  isNoTouch: true
}, {
  // normal, has/inside light tone
  scopes: [".pe-no-touch ", ".pe-no-touch .pe-light-tone "],
  varFnName: "lightTintHoverFns",
  isNoTouch: true
}];

var createColor = function createColor(_ref8) {
  var _ref8$varFns = _ref8.varFns,
      varFns = _ref8$varFns === undefined ? {} : _ref8$varFns,
      superColor = _ref8.superColor,
      _ref8$varMixin = _ref8.varMixin,
      varMixin = _ref8$varMixin === undefined ? function (o) {
    return o;
  } : _ref8$varMixin;
  return function (selector, componentVars, customVars) {
    return colorScopes.map(function (_ref9) {
      var scopes = _ref9.scopes,
          varFnName = _ref9.varFnName,
          isNoTouch = _ref9.isNoTouch;
      return createColorStyle({
        selector: selector,
        scopedSelector: createScopedSelector({
          scopes: scopes,
          selector: selector,
          isNoTouch: isNoTouch
        }),
        componentVars: componentVars,
        customVars: customVars,
        varFns: varFns[varFnName],
        superColor: superColor,
        varMixin: varMixin
      });
    });
  };
};

var flex$2 = [{
  ".layout, .layout.horizontal": flex$1.layout,
  ".layout.horizontal.inline, .layout.vertical.inline": flex$1.layoutInline,
  ".layout.horizontal": flex$1.layoutHorizontal,
  ".layout.horizontal.reverse": flex$1.layoutHorizontalReverse,
  ".layout.vertical": flex$1.layoutVertical,
  ".layout.vertical.reverse": flex$1.layoutVerticalReverse,
  ".layout.wrap": flex$1.layoutWrap,
  ".layout.wrap.reverse": flex$1.layoutWrapReverse,
  ".flex": flex$1.flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": flex$1.flexAutoVertical,
  ".flex.auto": flex$1.flexAuto,
  ".flex.none": flex$1.flexIndex("none"),
  ".flex.one": flex$1.flexIndex(1),
  ".flex.two": flex$1.flexIndex(2),
  ".flex.three": flex$1.flexIndex(3),
  ".flex.four": flex$1.flexIndex(4),
  ".flex.five": flex$1.flexIndex(5),
  ".flex.six": flex$1.flexIndex(6),
  ".flex.seven": flex$1.flexIndex(7),
  ".flex.eight": flex$1.flexIndex(8),
  ".flex.nine": flex$1.flexIndex(9),
  ".flex.ten": flex$1.flexIndex(10),
  ".flex.eleven": flex$1.flexIndex(11),
  ".flex.twelve": flex$1.flexIndex(12),

  // alignment in cross axis
  ".layout.start": flex$1.layoutStart,
  ".layout.center, .layout.center-center": flex$1.layoutCenter,
  ".layout.end": flex$1.layoutEnd,

  // alignment in main axis
  ".layout.start-justified": flex$1.layoutStartJustified,
  ".layout.center-justified, .layout.center-center": flex$1.layoutCenterJustified,
  ".layout.end-justified": flex$1.layoutEndJustified,
  ".layout.around-justified": flex$1.layoutAroundJustified,
  ".layout.justified": flex$1.layoutJustified,

  // self alignment
  ".self-start": flex$1.selfStart,
  ".self-center": flex$1.selfCenter,
  ".self-end": flex$1.selfEnd,
  ".self-stretch": flex$1.selfStretch
}];

var commonStyle = [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  },

  ".pe-rtl": {
    direction: "rtl"
  }
}];

var layoutStyles = [flex$2, commonStyle];

var addLayoutStyles = function addLayoutStyles() {
  return styler.add("pe-layout", flex$2, commonStyle);
};




/***/ }),

/***/ "../../polythene-core-css/node_modules/j2c/dist/j2c.commonjs.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-css/node_modules/j2c/dist/j2c.commonjs.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emptyArray = [];
var emptyObject = {};
var type = emptyObject.toString;
var ARRAY =  type.call(emptyArray);
var OBJECT = type.call(emptyObject);
var STRING = type.call('');
var FUNCTION = type.call(type);
var own =  emptyObject.hasOwnProperty;
var freeze = Object.freeze || function(o) {return o};


function defaults(target, source) {
  for (var k in source) if (own.call(source, k)) {
    if (k.indexOf('$') && !(k in target)) target[k] = source[k];
  }
  return target
}

function cartesian(a,b) {
  var res = [], i, j;
  for (j in b) if(own.call(b, j))
    for (i in a) if(own.call(a, i))
      res.push(a[i] + b[j]);
  return res
}

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;


/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  var indices = [], res = [], inParen = 0, o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
  /*eslint-enable no-cond-assign*/
    switch (o[0]) {
    case '(': inParen++; break
    case ')': inParen--; break
    case ',': if (inParen) break; indices.push(o.index);
    }
  }
  for (o = indices.length; o--;){
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res
}

// Like the `selectorTokenizer`, but for the `&` operator
var ampersandTokenizer = /&|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

function ampersand (selector, parents) {
  var indices = [], split = [], res, o;
  /*eslint-disable no-cond-assign*/
  while (o = ampersandTokenizer.exec(selector)) {
  /*eslint-enable no-cond-assign*/
    if (o[0] == '&') indices.push(o.index);
  }
  for (o = indices.length; o--;){
    split.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  split.unshift(selector);
  if (split.length === 1) split.unshift('');
  res = [split[0]];
  for (o = 1; o < split.length; o++) {
    res = cartesian(res, cartesian(parents, [split[o]]));
  }
  return res.join(',')
}

function flatIter (f) {
  return function iter(arg) {
    if (type.call(arg) === ARRAY) for (var i= 0 ; i < arg.length; i ++) iter(arg[i]);
    else f(arg);
  }
}

function decamelize(match) {
  return '-' + match.toLowerCase()
}

/**
 * Handles the property:value; pairs.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current property or a prefix in case of nested
 *                          sub-properties.
 * @param {array|object|string} o - the declarations.
 * @param {boolean} local - are we in @local or in @global scope.
 */

function declarations(state, emit, prefix, o, local) {
  var k, v, kk;
  if (o==null) return

  switch ( type.call(o = o.valueOf()) ) {
  case ARRAY:
    for (k = 0; k < o.length; k++)

      declarations(state, emit, prefix, o[k], local);

    break
  case OBJECT:
    // prefix is falsy iif it is the empty string, which means we're at the root
    // of the declarations list.
    prefix = (prefix && prefix + '-');
    for (k in o) if (own.call(o, k)){
      v = o[k];
      if (/\$/.test(k)) {
        for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

          declarations(state, emit, prefix + k[kk], v, local);

        }
      } else {

        declarations(state, emit, prefix + k, v, local);

      }
    }
    break
  default:
    // prefix is falsy when it is "", which means that we're
    // at the top level.
    // `o` is then treated as a `property:value` pair, or a
    // semi-colon-separated list thereof.
    // Otherwise, `prefix` is the property name, and
    // `o` is the value.

    // restore the dashes
    k = prefix.replace(/_/g, '-').replace(/[A-Z]/g, decamelize);

    if (local && (k == 'animation-name' || k == 'animation' || k == 'list-style')) {
      // no need to tokenize here a plain `.split(',')` has all bases covered.
      // We may 'localize' a comment, but it's not a big deal.
      o = o.split(',').map(function (o) {

        return o.replace(/^\s*(?:(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*))/, state.localizeReplacer)

      }).join(',');
    }

    emit.decl(k, o);

  }
}

/**
 * Handles a single at-rules
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {array} k - The parsed at-rule, including the parameters,
 *                    if takes both parameters and a block.
 *                    k == [match, fullAtRule, atRuleType, params?]
 *                    So in `@-webkit-keyframes foo`, we have
 *                     - match = "@-webkit-keyframes foo"
 *                     - fullAtRule = "@-webkit-keyframes"
 *                     - atRuleType = "keyframes"
 *                     - params = "foo"
 * @param {string|string[]|object|object[]} v - Either parameters for
 *                                              block-less rules or
 *                                              their block
 *                                              for the others.
 * @param {string} prefix - the current selector or the selector prefix
 *                          in case of nested rules
 * @param {boolean} local - are we in @local or in @global scope?
 * @param {string} nestingDepth - are we nested in an at-rule or a selector?
 */

function atRules(state, emit, k, v, prefix, local, nestingDepth) {

  // First iterate over user-provided at-rules and return if one of them corresponds to the current one
  for (var i = 0; i < state.$atHandlers.length; i++) {

    if (state.$atHandlers[i](state, emit, k, v, prefix, local, nestingDepth)) return

  }

  // using `/^global$/.test(k[2])` rather that 'global' == k[2] gzips
  // slightly better thanks to the regexps tests further down.
  // It is slightly less efficient but this isn't a critical path.

  if (!k[3] && /^global$/.test(k[2])) {

    rules(state, emit, prefix, v, 0, nestingDepth);


  } else if (!k[3] && /^local$/.test(k[2])) {

    rules(state, emit, prefix, v, 1, nestingDepth);


  } else if (k[3] && /^adopt$/.test(k[2])) {

    if (!local || nestingDepth) return emit.err('@adopt global or nested: ' + k[0])

    if (!/^\.?[_A-Za-z][-\w]*$/.test(k[3])) return emit.err('bad adopter ' + JSON.stringify(k[3]) + ' in ' + k[0])

    i = [];
    flatIter(function(adoptee, asString) {

      if(adoptee == null || !/^\.?[_A-Za-z][-\w]*(?:\s+\.?[_A-Za-z][-\w]*)*$/.test(asString = adoptee + '')) emit.err('bad adoptee '+ JSON.stringify(adoptee) + ' in ' + k[0]);

      else i.push(asString.replace(/\./g, ''));

    })(v);

    // we may end up with duplicate classes but AFAIK it has no consequences on specificity.
    if (i.length) {
      state.localize(k[3] = k[3].replace(/\./g, ''));
      state.names[k[3]] += (' ' + i.join(' '));
    }


  } else if (!k[3] && /^(?:namespace|import|charset)$/.test(k[2])) {
    flatIter(function(v) {

      emit.atrule(k[1], k[2], v);

    })(v);


  } else if (!k[3] && /^(?:font-face|viewport)$/.test(k[2])) {
    flatIter(function(v) {

      emit.atrule(k[1], k[2], k[3], 1);

      declarations(state, emit, '', v, local);

      emit._atrule();

    })(v);

  } else if (k[3] && /^(?:media|supports|page|keyframes)$/.test(k[2])) {

    if (local && 'keyframes' == k[2]) {
      k[3] = k[3].replace(
        // generated by script/regexps.js
        /(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*)/,
        state.localizeReplacer
      );
    }


    emit.atrule(k[1], k[2], k[3], 1);

    if ('page' == k[2]) {

      declarations(state, emit, '', v, local);

    } else {

      rules(
        state, emit,
        'keyframes' == k[2] ? '' : prefix,
        v, local, nestingDepth + 1
      );

    }

    emit._atrule();

  } else {

    emit.err('Unsupported at-rule: ' + k[0]);

  }
}

/**
 * Add rulesets and other CSS tree to the sheet.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {array|string|object} tree - a source object or sub-object.
 * @param {string} nestingDepth - are we nested in an at-rule?
 * @param {boolean} local - are we in @local or in @global scope?
 */
function rules(state, emit, prefix, tree, local, nestingDepth) {
  var k, v, inDeclaration, kk;

  switch (type.call(tree)) {

  case OBJECT:
    for (k in tree) if (own.call(tree, k)) {
      v = tree[k];

      if (prefix.length > 0 && /^[-\w$]+$/.test(k)) {
        if (!inDeclaration) {
          inDeclaration = 1;

          emit.rule(prefix);

        }
        if (/\$/.test(k)) {
          for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

            declarations(state, emit, k[kk], v, local);

          }
        } else {

          declarations(state, emit, k, v, local);

        }

      } else if (/^@/.test(k)) {
        // Handle At-rules
        inDeclaration = 0;

        atRules(state, emit,
          /^(.(?:-[\w]+-)?([_A-Za-z][-\w]*))\b\s*(.*?)\s*$/.exec(k) || [k,'@','',''],
          v, prefix, local, nestingDepth
        );

      } else {
        // selector or nested sub-selectors
        inDeclaration = 0;

        rules(
          state, emit,
          // build the selector `prefix` for the next iteration.
          // ugly and full of redundant bits but so far the fastest/shortest.gz
          /*0 if*/(prefix.length > 0 && (/,/.test(prefix) || /,/.test(k))) ?

            /*0 then*/ (kk = splitSelector(prefix), splitSelector(
              local ?

                k.replace(
                  /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                  state.localizeReplacer
                ) :

                k
            ).map(function (k) {
              return /&/.test(k) ? ampersand(k, kk) : kk.map(function(kk) {
                return kk + k
              }).join(',')
            }).join(',')) :

            /*0 else*/ /*1 if*/ /&/.test(k) ?

              /*1 then*/ ampersand(
                local ?

                  k.replace(
                    /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                    state.localizeReplacer
                  ) :

                  k,
                [prefix]
              ) :

              /*1 else*/ prefix + (
                local ?

                  k.replace(
                    /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                    state.localizeReplacer
                  ) :

                  k
                ),
           v, local, nestingDepth + 1
        );

      }
    }

    break

  case ARRAY:
    for (k = 0; k < tree.length; k++){

      rules(state, emit, prefix, tree[k], local, nestingDepth);

    }
    break

  case STRING:
    // CSS hacks or ouptut of `j2c.inline`.
    if (!prefix.length) emit.err('No selector');
    emit.rule(prefix || ' ');

    declarations(state, emit, '', tree, local);

  }
}

// This is the first entry in the filters array, which is
// actually the last step of the compiler. It inserts
// closing braces to close normal (non at-) rules (those
// that start with a selector). Doing it earlier is
// impossible without passing state around in unrelated code
// or ending up with duplicated selectors when the source tree
// contains arrays.
// There's no `_rule` handler, because the core compiler never
// calls it.
function closeSelectors(next, inline) {
  var lastSelector;
  return inline ? next : {
    init: function(){lastSelector = 0; next.init();},
    done: function (raw) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      return next.done(raw)
    },
    atrule: function (rule, kind, param, takesBlock) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      next.atrule(rule, kind, param, takesBlock);
    },
    _atrule: function (rule) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      next._atrule(rule);
    },
    rule: function (selector) {
      if (selector !== lastSelector){
        if (lastSelector) next._rule();
        next.rule(selector);
        lastSelector = selector;
      }
    }
  }
}

function global(x) {
  return ':global(' + x + ')'
}

function kv (k, v, o) {
  o = {};
  o[k] = v;
  return o
}

function at (rule, params, block) {
  if (
    arguments.length < 3
  ) {
    // inner curry!
    var _at = at.bind.apply(at, [null].concat([].slice.call(arguments,0)));
    // So that it can be used as a key in an ES6 object literal.
    _at.toString = function(){return '@' + rule + ' ' + params};
    return _at
  }
  else return kv('@' + rule +' ' + params, block)
}

function j2c() {

  // the buffer that accumulates the output. Initialized in `$sink.i()`
  var buf, err;

  // the bottom of the 'codegen' stream. Mirrors the `$filter` plugin API.
  var $sink = {
    init: function(){buf=[], err=[];},
    done: function (raw) {
      if (err.length != 0) throw new Error('j2c error(s): ' + JSON.stringify(err,null,2) + 'in context:\n' + buf.join(''))
      return raw ? buf : buf.join('')
    },
    err: function(msg) {
      err.push(msg);
      buf.push('/* +++ ERROR +++ ' + msg + ' */\n');
    },
    atrule: function (rule, kind, param, takesBlock) {
      buf.push(rule, param && ' ', param, takesBlock ? ' {' : ';', _instance.endline);
    },
    // close atrule
    _atrule: function () {buf.push('}', _instance.endline);},
    rule: function (selector) {buf.push(selector, ' {', _instance.endline);},
    // close rule
    _rule: function () {buf.push('}', _instance.endline);},
    decl: function (prop, value) {buf.push(prop, prop && ':', value, ';', _instance.endline);}
  };

  // holds the `$filter` and `$at` handlers
  var $filters = [closeSelectors];
  var $atHandlers = [];

  // the public API (see the main docs)
  var _instance = {
    at: at,
    global: global,
    kv: kv,
    names: {},
    endline: '\n',
    suffix: '__j2c-' +
      // 128 bits of randomness
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36),
    $plugins: [],
    sheet: function(tree) {
      var emit = _createOrRetrieveStream(0);
      emit.init();
      rules(
        _walkers[0],
        emit,
        '', // prefix
        tree,
        1,  // local, by default
        0   // nesting depth
      );

      return emit.done()
    },
    inline: function (tree, options) {
      var emit = _createOrRetrieveStream(1);
      emit.init();
      declarations(
        _walkers[1],
        emit,
        '', // prefix
        tree,
        !(options && options.global)   // local, by default
      );
      return emit.done()
    }
  };

  // The `state` (for the core functions) / `walker` (for the plugins) tables.
  var _walkers = [
    // for j2c.sheet
    {
      // helpers for locaizing class and animation names
      localizeReplacer: _localizeReplacer, // second argument to String.prototype.replace
      localize: _localize,                 // mangles local names
      names: _instance.names,              // local => mangled mapping
      $atHandlers: $atHandlers,            // extra at-rules
      // The core walker methods, to be provided to plugins
      atrule: atRules,
      decl: declarations,
      rule: rules
    },
    // likewise, for j2c.inline (idem with `$a`, `a` and `s` removed)
    {
      localizeReplacer: _localizeReplacer,
      localize: _localize,
      names: _instance.names,
      decl: declarations
    }
  ];


  // inner helpers

  var _use = flatIter(function(plugin) {
    // `~n` is falsy for `n === -1` and truthy otherwise.
    // Works well to turn the  result of `a.indexOf(x)`
    // into a value that reflects the presence of `x` in
    // `a`.
    if (~_instance.$plugins.indexOf(plugin)) return

    _instance.$plugins.push(plugin);

    if (type.call(plugin) === FUNCTION) plugin = plugin(_instance);

    if (!plugin) return

    flatIter(function(filter) {
      $filters.push(filter);
    })(plugin.$filter || emptyArray);

    flatIter(function(handler) {
      $atHandlers.push(handler);
    })(plugin.$at || emptyArray);

    defaults(_instance.names, plugin.$names || emptyObject);

    _use(plugin.$plugins || emptyArray);

    $sink = plugin.$sink || $sink;

    defaults(_instance, plugin);
  });


  var _streams = [];
  /**
   * returns the codegen streams, creating them if necessary
   * @param
   */
  function _createOrRetrieveStream(inline) {
    // build the stream processors if needed
    if (!_streams.length) {
      // append the $sink as the ultimate filter
      $filters.push(function(_, inline) {return inline ? {init:$sink.init, decl:$sink.decl, done:$sink.done, err: $sink.err} : $sink});
      for(var i = 0; i < 2; i++){ // 0 for j2c.sheet, 1 for j2c.inline
        for (var j = $filters.length; j--;) {
          _streams[i] = freeze(
            defaults(
              $filters[j](_streams[i], !!i),
              _streams[i]
            )
          );
        }
      }
    }
    return _streams[inline]
  }

  /**
   * Returns a localized version of a given name.
   * Registers the pair in `instnace.name` if needed.
   *
   * @param {string} name - the name to localize
   * @return {string} - the localized version
   */
  function _localize(name) {
    if (!_instance.names[name]) _instance.names[name] = name + _instance.suffix;
    return _instance.names[name].match(/^\S+/)
  }

  /**
   * Used as second argument for str.replace(localizeRegex, replacer)
   * `ignore`, `global` and `(dot, name)` are mutually exclusive
   *
   * @param {string} match - the whole match (ignored)
   * @param {string|null} ignore - a comment or a string literal
   * @param {string|null} global - a global name
   * @param {string|null} dot - either '.' for a local class name or the empty string otherwise
   * @param {string|null} name - the name to localize
   * @return {string}
   */
  function _localizeReplacer(match, ignore, global$$1, dot, name) {
    return ignore || global$$1 || dot + _localize(name)
  }

  _use(emptyArray.slice.call(arguments));
  return _instance
}

module.exports = j2c;


/***/ }),

/***/ "../../polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: coreDialogPane */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDialogPane", function() { return dialogPane; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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
    super: "pe-button",
    row: "pe-button-row",

    // elements      
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states      
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    extraWide: "pe-button--extra-wide",
    separatorAtStart: "pe-button--separator-start",
    dropdownOpen: "pe-button--dropdown-open",
    dropdownClosed: "pe-button--dropdown-closed"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "form";
};

var SCROLL_WATCH_END_TIMER = 150;

var updateScrollOverflowState = function updateScrollOverflowState(vnode) {
  var state = vnode.state;
  var scroller = state.scrollEl();
  if (!scroller) {
    return;
  }
  state.topOverflow(scroller.scrollTop > 0);
  state.bottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
};

var updateFooterState = function updateFooterState(vnode) {
  var state = vnode.state;
  var footerEl = state.footerEl();
  if (!footerEl) {
    return;
  }
  var style = window.getComputedStyle(footerEl);
  var height = footerEl.getBoundingClientRect().height;
  var minHeight = parseInt(style.minHeight, 10);
  if (height > minHeight) {
    footerEl.classList.add(classes.footerHigh);
  } else {
    footerEl.classList.remove(classes.footerHigh);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var bottomOverflow = createStream(false);
  var footerEl = createStream(null);
  var headerEl = createStream(null);
  var isScrolling = createStream(false);
  var scrollEl = createStream(null);
  var topOverflow = createStream(false);
  var el = createStream(null);

  return {
    cleanUp: undefined,
    bottomOverflow: bottomOverflow,
    el: el,
    footerEl: footerEl,
    headerEl: headerEl,
    isScrolling: isScrolling,
    scrollEl: scrollEl,
    scrollWatchId: undefined,
    topOverflow: topOverflow,
    redrawOnUpdate: createStream.merge([topOverflow, bottomOverflow, isScrolling])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var dom = vnode.dom;
  var state = vnode.state;
  state.el(dom);

  state.scrollEl(dom.querySelector("." + classes.body));
  state.footerEl(dom.querySelector("." + classes.footer));
  state.headerEl(dom.querySelector("." + classes.title));

  state.isScrolling.map(function () {
    return updateScrollOverflowState(vnode);
  });

  var update = function update() {
    updateScrollOverflowState(vnode);
    updateFooterState(vnode);
  };

  state.cleanUp = function () {
    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", update);
  };

  // resize: update scroll state ("overflow" borders)
  Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", update);
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp();
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unpackAttrs"])(vnode.attrs);
  var borders = attrs.borders || "overflow";
  var showTopBorder = borders === "always" || borders === "overflow" && state.topOverflow();
  var showBottomBorder = borders === "always" || borders === "overflow" && state.bottomOverflow();
  var withHeader = attrs.header !== undefined || attrs.title !== undefined;
  var withFooter = attrs.footer !== undefined || attrs.footerButtons !== undefined;

  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  {
    className: [classes.component, attrs.fullBleed ? classes.fullBleed : null, showTopBorder ? classes.borderTop : null, showBottomBorder ? classes.borderBottom : null, withHeader ? classes.withHeader : null, withFooter ? classes.withFooter : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.formOptions);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys;

  var state = vnode.state;
  var attrs = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unpackAttrs"])(vnode.attrs);

  return h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.header ? attrs.header : attrs.title ? h("div", {
    className: [classes.header, classes.headerWithTitle].join(" "),
    key: "title"
  }, h("div", { className: classes.title }, attrs.title)) : null, h("div", _defineProperty({
    className: classes.body,
    key: "body"
  }, k.onscroll, function () {
    state.isScrolling(true);
    clearTimeout(state.scrollWatchId);
    state.scrollWatchId = setTimeout(function () {
      state.isScrolling(false);
    }, SCROLL_WATCH_END_TIMER);
  }), attrs.content || attrs.body || attrs.menu), attrs.footer ? h("div", {
    className: classes.footer,
    key: "footer"
  }, attrs.footer) : attrs.footerButtons ? h("div", {
    className: [classes.footer, classes.footerWithButtons, buttonClasses.row].join(" "),
    key: "footer"
  }, h("div", { className: classes.actions }, attrs.footerButtons)) : null]);
};

var dialogPane = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-dialog/dist/polythene-core-dialog.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-dialog/dist/polythene-core-dialog.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: coreDialog */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDialog", function() { return dialog; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
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
  open: "pe-dialog--open", // class set to html element
  visible: "pe-dialog--visible", // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",

  // lookup
  menuContent: menuClasses.content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_Z = 3;

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var transitionOptions = function transitionOptions(state, attrs, isShow) {
  return {
    state: state,
    attrs: attrs,
    isShow: isShow,
    domElements: {
      el: state.el,
      contentEl: state.contentEl,
      backdropEl: state.backdropEl
    },
    showClass: classes.visible
  };
};

var showDialog = function showDialog(state, attrs) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions(state, attrs, true));
};

var hideDialog = function hideDialog(state, attrs) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions(state, attrs, false));
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  var visible = createStream(false);
  return {
    backdropEl: undefined,
    touchEl: undefined,
    cleanUp: undefined,
    el: undefined,
    contentEl: undefined,
    transitioning: transitioning,
    visible: visible,
    redrawOnUpdate: createStream.merge([transitioning])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  var dom = vnode.dom;
  state.el = dom;
  state.backdropEl = dom.querySelector("." + classes.backdrop);
  state.touchEl = dom.querySelector("." + classes.touch);
  state.contentEl = dom.querySelector("." + classes.content);

  if (!attrs.inactive) {

    var handleEscape = function handleEscape(e) {
      if (attrs.fullScreen || attrs.modal) return;
      if (e.key === "Escape" || e.key === "Esc") {
        // "Esc" for IE11
        var openDialogs = document.querySelectorAll("." + classes.component);
        if (openDialogs[openDialogs.length - 1] === state.el) {
          hideDialog(state, _extends({}, attrs, {
            hideDelay: 0
          }));
        }
      }
    };

    state.cleanUp = function () {
      return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("keydown", handleEscape);
    };

    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("keydown", handleEscape);

    if (attrs.show) {
      showDialog(state, attrs);
    }
  }
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp && vnode.state.cleanUp();
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  _defineProperty({
    className: [attrs.parentClassName || classes.component, attrs.fromMultipleClassName, attrs.fullScreen ? classes.fullScreen : null, attrs.backdrop ? classes.showBackdrop : null,
    // classes.visible is set in showDialog though transition
    attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" "),
    "data-spawn-id": attrs.spawnId,
    "data-instance-id": attrs.instanceId
  }, k.onclick, function (e) {
    if (e.target !== state.el && e.target !== state.backdropEl && e.target !== state.touchEl) {
      return;
    }
    if (attrs.modal) {
      // not allowed
      return;
    }
    hideDialog(state, attrs);
  }));
};

var createPane = function createPane(vnode, _ref2) {
  var h = _ref2.renderer,
      Pane = _ref2.Pane;

  var attrs = vnode.attrs;
  return h(Pane, {
    title: attrs.title,
    header: attrs.header,
    body: attrs.content || attrs.body || attrs.menu || vnode.children,
    footer: attrs.footer,
    footerButtons: attrs.footerButtons,
    className: attrs.className,
    style: attrs.style,
    fullBleed: attrs.fullBleed,
    formOptions: attrs.formOptions
  });
};

var createContent = function createContent(vnode, _ref3) {
  var renderer = _ref3.renderer,
      Shadow = _ref3.Shadow,
      createPane = _ref3.createPane,
      Pane = _ref3.Pane;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var h = renderer;

  if (state.el) {
    var visible = state.visible();
    var transitioning = state.transitioning();
    if (!transitioning) {
      if (attrs.hide && visible) {
        // Use setTimeout to play nice with React's lifecycle functions
        setTimeout(function () {
          return hideDialog(state, attrs);
        }, 0);
      } else if (attrs.show && !visible) {
        setTimeout(function () {
          return showDialog(state, attrs);
        }, 0);
      }
    }
  }
  var pane = attrs.panesOptions && attrs.panesOptions.length ? h(Pane, attrs.panesOptions[0]) : attrs.panes && attrs.panes.length ? attrs.panes[0] : createPane(vnode, { renderer: renderer, Pane: Pane });
  return [h("div", {
    key: "backdrop",
    className: classes.backdrop
  }), h("div", {
    key: "touch",
    className: classes.touch
  }), h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
    key: "content"
  }, [attrs.fullScreen ? null : h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
    animated: true,
    key: "shadow"
  }), pane])];
};

var dialog = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createPane: createPane,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-drawer/dist/polythene-core-drawer.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-drawer/dist/polythene-core-drawer.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: coreDrawer */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDrawer", function() { return drawer; });
var classes = {
  component: "pe-dialog pe-drawer",

  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Props to be passed to a dialog
var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  var isCover = !(attrs.push || attrs.permanent || attrs.mini);
  return _extends({}, attrs, {
    fullBleed: true,
    parentClassName: [attrs.className, classes.component, isCover ? classes.cover : null, attrs.push ? classes.push : null, attrs.permanent ? classes.permanent : null, attrs.border ? classes.border : null, attrs.mini ? classes.mini : null, attrs.floating ? classes.floating : null, attrs.fixed ? classes.fixed : null, attrs.anchor === "end" ? classes.anchorEnd : null].join(" "),
    inactive: attrs.permanent && !attrs.mini,
    z: attrs.z !== undefined ? attrs.z : 0
  });
};

var createContent = function createContent(vnode) {
  return vnode.children;
};

var drawer = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-fab/dist/polythene-core-fab.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-fab/dist/polythene-core-fab.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: coreFAB */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreFAB", function() { return fab; });
var classes = {
  component: "pe-fab",

  // elements
  content: "pe-fab__content",

  // states
  mini: "pe-fab--mini"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped raised button component (set in polythene-xxx-fab)

// Props to be passed to a raised button, including 'content'
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys,
      h = _ref.renderer,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
  return _extends({}, attrs, {
    content: h("div", { className: classes.content }, content),
    parentClassName: [classes.component, attrs.mini ? classes.mini : null, attrs.className || attrs[k.class]].join(" "),
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: { increase: 5 },
    ink: true,
    wash: true,
    animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true
  });
};

var createContent = function createContent(vnode) {
  return vnode.children;
};

var fab = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-icon-button/dist/polythene-core-icon-button.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-icon-button/dist/polythene-core-icon-button.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: coreIconButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreIconButton", function() { return iconButton; });
var classes = {
  component: "pe-button pe-icon-button",

  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",

  // states
  compact: "pe-icon-button--compact"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped button component (set in polythene-xxx-icon-button)

// Props to be passed to a button, including 'content'

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
  return _extends({}, {
    content: h("div", { className: classes.content }, content),
    after: attrs.label && h("div", { className: classes.label }, attrs.label),
    parentClassName: [attrs.parentClassName || classes.component, attrs.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs);
};

var createContent = function createContent(vnode) {
  return vnode.children;
};

var iconButton = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-icon/dist/polythene-core-icon.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-icon/dist/polythene-core-icon.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: coreIcon */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreIcon", function() { return icon; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
  component: "pe-icon",

  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, attrs.size), attrs.avatar ? classes.avatar : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      SVG = _ref2.SVG;

  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.svg ? h(SVG, attrs.svg) : attrs.src ? h("img", { src: attrs.src }) : attrs.children || vnode.children;
};

var icon = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: coreIOSSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreIOSSpinner", function() { return spinner; });
var classes = {
  component: "pe-ios-spinner",

  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blade = function blade(num, h) {
  return h("div", {
    key: "blade-" + num,
    className: classes.blade
  });
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes.blades
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (num) {
    return blade(num, h);
  }));
  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: state.content
  });
};

var spinner = /*#__PURE__*/Object.freeze({
  createProps: createProps
});




/***/ }),

/***/ "../../polythene-core-list-tile/dist/polythene-core-list-tile.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-list-tile/dist/polythene-core-list-tile.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: coreListTile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreListTile", function() { return listTile; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement() {
  return "div";
}; // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content

var primaryContent = function primaryContent(h, k, requiresKeys, attrs, children) {
  var url = attrs.keyboardControl ? null : attrs.url;
  var element = attrs.element ? attrs.element : url ? "a" : "div";
  var contentFrontClass = [classes.content, classes.contentFront, attrs.compactFront ? classes.compactFront : null].join(" ");
  var frontComp = attrs.front ? h("div", _extends({}, requiresKeys ? { key: "front" } : null, { className: contentFrontClass }), attrs.front) : attrs.indent ? h("div", _extends({}, requiresKeys ? { key: "front" } : null, { className: contentFrontClass })) : null;
  var hasTabIndex = !attrs.header && attrs.url;
  var props = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), attrs.events, {
    className: classes.primary,
    style: null
  }, hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0), url);
  var content = attrs.content ? attrs.content : [frontComp, h("div", {
    className: classes.content,
    style: attrs.style
  }, [attrs.content ? _extends({}, requiresKeys ? { key: "content" } : null, attrs.content) : children, attrs.title && !attrs.content ? h("div", _extends({}, requiresKeys ? { key: "title" } : null, { className: classes.title }), attrs.title) : null, attrs.subtitle ? h("div", _extends({}, requiresKeys ? { key: "subtitle" } : null, { className: classes.subtitle }), attrs.subtitle) : null, attrs.highSubtitle ? h("div", _extends({}, requiresKeys ? { key: "highSubtitle" } : null, { className: classes.subtitle + " " + classes.highSubtitle }), attrs.highSubtitle) : null, attrs.subContent ? h("div", _extends({}, requiresKeys ? { key: "subContent" } : null, { className: classes.subContent }), attrs.subContent) : null])];
  return h(element, props, content);
};

var secondaryContent = function secondaryContent(h, k, requiresKeys, Icon) {
  var attrs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var url = attrs.keyboardControl ? null : attrs.url;
  var element = attrs.element ? attrs.element : url ? "a" : "div";
  var hasTabIndex = attrs.url;
  return h(element, _extends({}, url, {
    className: classes.secondary
  }, requiresKeys ? { key: "secondary" } : null, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0)), h("div", { className: classes.content }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.content ? attrs.content : null]));
};

var createProps = function createProps(vnode, _ref3) {
  var k = _ref3.keys;

  var attrs = vnode.attrs;
  var hasTabIndex = !attrs.header && !attrs.url && !(attrs.secondary && attrs.secondary.url);
  var heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs, { remove: ["tabindex", "tabIndex"] }), // tabindex is set elsewhere
  {
    className: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.compact : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, attrs.highlight ? classes.highlight : null, attrs.header ? classes.header : null, attrs.navigation ? classes.navigation : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, heightClass, attrs.className || attrs[k.class]].join(" ")
  }, hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0)
  // events and url are attached to primary content to not interfere with controls
  );
};

var createContent = function createContent(vnode, _ref5) {
  var h = _ref5.renderer,
      requiresKeys = _ref5.requiresKeys,
      k = _ref5.keys,
      Ripple = _ref5.Ripple,
      Icon = _ref5.Icon;

  var attrs = vnode.attrs;
  var primaryAttrs = _extends({}, requiresKeys ? { key: "primary" } : null, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs[k.class];
  return [attrs.ink && !attrs.disabled ? h(Ripple, _extends({}, attrs.ripple, requiresKeys ? { key: "ripple" } : null)) : null, primaryContent(h, k, requiresKeys, primaryAttrs, attrs.children || vnode.children), attrs.secondary ? secondaryContent(h, k, requiresKeys, Icon, attrs.secondary) : null];
};

var listTile = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-list/dist/polythene-core-list.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-list/dist/polythene-core-list.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: coreList */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreList", function() { return list; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-list",

  // states
  border: "pe-list--border",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorder: "pe-list--indented-border",
  padding: "pe-list--padding",
  paddingTop: "pe-list--padding-top",
  paddingBottom: "pe-list--padding-bottom",

  // lookup
  header: listTileClasses.header
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var paddingClasses = {
  both: classes.padding,
  bottom: classes.paddingBottom,
  top: classes.paddingTop,
  none: null
};

var paddingClass = function paddingClass() {
  var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "both";
  return paddingClasses[attr];
};

var onMount = function onMount(_ref) {
  var attrs = _ref.attrs;

  if (attrs.borders) {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["deprecation"])("List", "borders", "border");
  }
  if (attrs.indentedBorders) {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["deprecation"])("List", "indentedBorders", "indentedBorder");
  }
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.border || attrs.borders ? classes.border : null, attrs.indentedBorder || attrs.indentedBorders ? classes.indentedBorder : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, paddingClass(attrs.padding), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      requiresKeys = _ref3.requiresKeys,
      k = _ref3.keys,
      ListTile = _ref3.ListTile;

  var attrs = vnode.attrs;
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts[k.class] = [classes.header, headerOpts[k.class] || null].join(" ");
  }
  var tiles = attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children;
  return [headerOpts ? h(ListTile, _extends({}, requiresKeys ? { key: "header" } : null, attrs.all, headerOpts, {
    header: true
  })) : null, attrs.all ? tiles.map(function (tileOpts) {
    return h(ListTile, _extends({}, attrs.all, tileOpts));
  }) : tiles];
};

var list = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  onMount: onMount,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: coreMaterialDesignProgressSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreMaterialDesignProgressSpinner", function() { return spinner; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../../polythene-utilities/dist/polythene-utilities.mjs");



var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var percentageValue = function percentageValue(min, max) {
  var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(el, min, max, percentage) {
  var style = el.style;
  style["transform"] = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

var animate = function animate(stateEl, size, percentage) {
  var animationEl = stateEl.querySelector("." + classes.animation);
  var animationElStyle = animationEl.style;
  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }
  var leftCircle = stateEl.querySelector("." + classes.circleLeft);
  var rightCircle = stateEl.querySelector("." + classes.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

var updateWithPercentage = function updateWithPercentage(_ref) {
  var state = _ref.state,
      attrs = _ref.attrs,
      size = _ref.size;

  if (!state.dom) {
    return;
  }
  if (state.animating()) {
    return;
  }
  if (attrs.percentage === undefined) {
    return;
  }
  var percentage = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unpackAttrs"])(attrs.percentage);
  var previousPercentage = state.percentage();
  var easingFn = attrs.animated ? polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["easing"].easeInOutQuad : function (v) {
    return v;
  };
  if (attrs.animated && previousPercentage !== percentage) {
    var el = state.dom;
    var animationDuration = attrs.updateDuration !== undefined ? attrs.updateDuration * 1000 : Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["styleDurationToMs"])(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({ element: el.querySelector("." + classes.animation), prop: "animation-duration" }));
    var start = null;
    var step = function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      var stepPercentage = 1.0 / animationDuration * progress;
      var newPercentage = previousPercentage + stepPercentage * (percentage - previousPercentage);
      animate(el, size, easingFn(newPercentage));
      if (start && progress < animationDuration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
        state.percentage(percentage);
        state.animating(false);
      }
    };
    state.animating(true);
    window.requestAnimationFrame(step);
  } else {
    animate(state.dom, size, easingFn(percentage));
    state.percentage(percentage);
  }
};

var getSize = function getSize(element) {
  return Math.round(element ? parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({ element: element, prop: "height" })) - 2 * parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({ element: element, prop: "padding" })) : 0);
};

var getInitialState = function getInitialState(vnode, createStream) {
  var percentage = createStream(0);
  var animating = createStream(false);
  return {
    animating: animating,
    dom: undefined,
    percentage: percentage,
    redrawOnUpdate: createStream.merge([animating])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom = vnode.dom;
  var size = getSize(state.dom);
  updateWithPercentage({ state: state, attrs: attrs, size: size });
};

var createProps = function createProps(vnode, _ref2) {
  var h = _ref2.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var size = getSize(state.dom);
  updateWithPercentage({ state: state, attrs: attrs, size: size });

  var content = h("div", {
    key: "content",
    className: classes.animation,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, [h("div", {
    key: "left",
    className: [classes.circle, classes.circleLeft].join(" ")
  }), h("div", {
    key: "right",
    className: [classes.circle, classes.circleRight].join(" ")
  })]);

  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: content
  });
};

var spinner = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState,
  onMount: onMount,
  createProps: createProps
});




/***/ }),

/***/ "../../polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs":
/*!*********************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: coreMaterialDesignSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreMaterialDesignSpinner", function() { return spinner; });
var classes = {
  component: "pe-md-spinner",

  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var layer = function layer(num, h) {
  return h("div", {
    key: num,
    className: [classes.layer, classes.layerN + num].join(" ")
  }, [h("div", {
    key: "clipper-left",
    className: [classes.circleClipper, classes.circleClipperLeft].join(" ")
  }, h("div", {
    key: "circle",
    className: classes.circle
  })), h("div", {
    key: "gap-patch",
    className: classes.gapPatch
  }, h("div", { className: classes.circle })), h("div", {
    key: "clipper-right",
    className: [classes.circleClipper, classes.circleClipperRight].join(" ")
  }, h("div", { className: classes.circle }))]);
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes.animation
  }, [1, 2, 3, 4].map(function (num) {
    return layer(num, h);
  }));
  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: state.content
  });
};

var spinner = /*#__PURE__*/Object.freeze({
  createProps: createProps
});




/***/ }),

/***/ "../../polythene-core-menu/dist/polythene-core-menu.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-menu/dist/polythene-core-menu.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: coreMenu */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreMenu", function() { return menu; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var DEFAULT_OFFSET_H = 0;
var DEFAULT_OFFSET_V = "79%";
var DEFAULT_TYPE = "floating";
var MIN_WIDTH = 1.5;
var SHADOW_Z = 1;

var positionMenu = function positionMenu(state, attrs) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
    return;
  }
  if (!attrs.target) {
    return;
  }
  var targetEl = document.querySelector(attrs.target);
  if (!targetEl) {
    return;
  }
  var panelEl = state.panelEl;
  if (!panelEl) {
    return;
  }

  // Don't set the position or top offset if the menu position is fixed
  var hasStylePositionFixed = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({ element: panelEl, prop: "position" }) === "fixed";

  if (hasStylePositionFixed && !attrs.topMenu) {
    panelEl.style = {};
    panelEl.offsetHeight; // force reflow
    return;
  }

  var contentEl = state.contentEl;
  var parentRect = panelEl.parentNode.getBoundingClientRect();
  var targetRect = targetEl.getBoundingClientRect();
  var attrsOffsetH = attrs.offsetH !== undefined ? attrs.offsetH : attrs.offset !== undefined ? attrs.offset // deprecated
  : DEFAULT_OFFSET_H;
  var attrsOffsetV = attrs.offsetV !== undefined ? attrs.offsetV : DEFAULT_OFFSET_V;
  var offsetH = attrsOffsetH.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetH) * 0.01 * targetRect.width) : Math.round(parseFloat(attrsOffsetH));
  var offsetV = attrsOffsetV.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetV) * 0.01 * targetRect.height) : Math.round(parseFloat(attrsOffsetV));
  var positionOffsetV = offsetV;

  var attrsOrigin = attrs.origin || "top";
  var origin = attrsOrigin.split(/\W+/).reduce(function (acc, curr) {
    return acc[curr] = true, acc;
  }, {});

  var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];

  if (attrs.reposition) {
    // get the first List Tile to calculate the top position  
    var selectedItem = contentEl.querySelector("." + classes.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      var firstItemRect = firstItem.getBoundingClientRect();
      var selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffsetV = firstItemRect.top - selectedItemRect.top;
    }
    // align to middle of target
    var alignEl = selectedItem || firstItem;
    var alignRect = alignEl.getBoundingClientRect();
    var _targetRect = targetEl.getBoundingClientRect();
    var heightDiff = _targetRect.height - alignRect.height;
    positionOffsetV += Math.abs(heightDiff) / 2;
  } else if (attrs.origin && !hasStylePositionFixed) {
    if (origin.top) {
      positionOffsetV += targetRect.top - parentRect.top;
    } else if (origin.bottom) {
      positionOffsetV += targetRect.top - parentRect.bottom;
    }
  }

  if (attrs.height) {
    var firstItemHeight = firstItem ? firstItem.clientHeight : 48; // default List Tile height
    if (attrs.height === "max") {
      var topMargin = positionOffsetV;
      var bottomMargin = firstItemHeight;
      panelEl.style.height = "calc(100% - " + (topMargin + bottomMargin) + "px)";
    } else {
      console.log("attrs.height", attrs.height);
      var height = /^\d+$/.test(attrs.height.toString()) ? attrs.height + "px" : attrs.height;
      panelEl.style.height = height;
    }
  }

  // prevent animated changes
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

var scrollContent = function scrollContent(state, attrs) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
    return;
  }
  if (!attrs.scrollTarget) {
    return;
  }
  var scrollTargetEl = document.querySelector(attrs.scrollTarget);
  if (!scrollTargetEl) {
    return;
  }
  state.contentEl.scrollTop = scrollTargetEl.offsetTop;
};

var transitionOptions = function transitionOptions(state, attrs, isShow) {
  return {
    state: state,
    attrs: attrs,
    isShow: isShow,
    beforeTransition: isShow ? function () {
      return state.update();
    } : null,
    domElements: {
      el: state.panelEl,
      showClassElement: state.dom()
    },
    showClass: classes.visible
  };
};

var showMenu = function showMenu(state, attrs) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions(state, attrs, true));
};

var hideMenu = function hideMenu(state, attrs) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions(state, attrs, false));
};

var unifyWidth = function unifyWidth(width) {
  return width < MIN_WIDTH ? MIN_WIDTH : width;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var handleSubscriptions = function handleSubscriptions(vnode, which) {
  var state = vnode.state;
  var attrs = vnode.attrs;

  if (which === "mount") {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", state.update);
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("keydown", state.handleEscape);
    setTimeout(function () {
      state.activateDismissTap();
      showMenu(state, attrs);
    }, 0);
  } else {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", state.update);
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("keydown", state.handleEscape);
    state.deActivateDismissTap();
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var dom = createStream(null);
  var attrs = vnode.attrs;
  if (attrs.offset) {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["deprecation"])("Menu", "offset", "offsetH");
  }
  if (attrs.size) {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["deprecation"])("Menu", "size", "width");
  }
  var visible = createStream(false);
  var transitioning = createStream(false);
  return {
    dom: dom,
    visible: visible,
    transitioning: transitioning,
    activateDismissTap: undefined, // set in onMount
    contentEl: undefined, // set in onMount
    deActivateDismissTap: undefined, // set in onMount
    handleDismissTap: undefined, // set in onMount
    handleEscape: undefined, // set in onMount
    panelEl: undefined, // set in onMount
    update: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([transitioning])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);
  state.panelEl = vnode.dom.querySelector("." + classes.panel);
  state.contentEl = vnode.dom.querySelector("." + classes.content);

  if (!attrs.permanent) {
    state.handleDismissTap = function (e) {
      if (e.target === state.panelEl) {
        return;
      }
      hideMenu(state, attrs);
    };

    state.update = function () {
      positionMenu(state, attrs);
      scrollContent(state, attrs);
    };

    state.activateDismissTap = function () {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndMoveEvent"].forEach(function (evt) {
        return document.addEventListener(evt, state.handleDismissTap);
      });
    };

    state.deActivateDismissTap = function () {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndMoveEvent"].forEach(function (evt) {
        return document.removeEventListener(evt, state.handleDismissTap);
      });
    };

    state.handleEscape = function (e) {
      if (e.key === "Escape" || e.key === "Esc") {
        hideMenu(state, _extends({}, attrs, { hideDelay: 0 }));
      }
    };

    handleSubscriptions(vnode, "mount");
  }
};

var onUnMount = function onUnMount(vnode) {
  var attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  var type = attrs.type || DEFAULT_TYPE;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.permanent ? classes.permanent : null, attrs.origin ? classes.origin : null, attrs.backdrop ? classes.showBackdrop : null, attrs.topMenu ? classes.isTopMenu : null, type === "floating" && !attrs.permanent ? classes.floating : null, attrs.width || attrs.size ? widthClass(unifyWidth(attrs.width || attrs.size)) : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow;

  var attrs = vnode.attrs;
  var z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
  return [h("div", {
    key: "backdrop",
    className: classes.backdrop
  }), h("div", { className: classes.panel }, [z > 0 && h(Shadow, {
    z: z,
    animated: true
  }), h("div", {
    className: classes.content,
    style: attrs.style
  }, attrs.content ? attrs.content : vnode.children)])];
};

var menu = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-notification/dist/polythene-core-notification.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-notification/dist/polythene-core-notification.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: coreNotificationInstance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreNotificationInstance", function() { return notificationInstance; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../../polythene-utilities/dist/polythene-utilities.mjs");



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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_TIME_OUT = 3;

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var pause = function pause(state) {
  state.paused(true);
  if (state.timer) {
    state.timer.pause();
  }
};

var unpause = function unpause(state) {
  state.paused(false);
  if (state.timer) {
    state.timer.resume();
  }
};

var stopTimer = function stopTimer(state) {
  if (state.timer) {
    state.timer.stop();
  }
};

var transitionOptions = function transitionOptions(state, attrs, isShow) {
  return {
    state: state,
    attrs: attrs,
    isShow: isShow,
    beforeTransition: isShow ? function () {
      return stopTimer(state);
    } : function () {
      return stopTimer(state);
    },
    afterTransition: isShow ? function () {
      // set timer to hide in a few seconds
      var timeout = attrs.timeout;
      if (timeout === 0) {
        // do not time out
      } else {
        var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
        state.timer.start(function () {
          hideNotification(state, attrs);
        }, timeoutSeconds);
      }
    } : null,
    domElements: {
      el: state.el,
      containerEl: state.containerEl
    },
    showClass: classes.visible
  };
};

var showNotification = function showNotification(state, attrs) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions(state, attrs, true));
};

var hideNotification = function hideNotification(state, attrs) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions(state, attrs, false));
};

var setTitleStyles = function setTitleStyles(titleEl) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var height = titleEl.getBoundingClientRect().height;
  var lineHeight = parseInt(window.getComputedStyle(titleEl).lineHeight, 10);
  var paddingTop = parseInt(window.getComputedStyle(titleEl).paddingTop, 10);
  var paddingBottom = parseInt(window.getComputedStyle(titleEl).paddingBottom, 10);
  if (height > lineHeight + paddingTop + paddingBottom) {
    titleEl.classList.add(classes.multilineTitle);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  var paused = createStream(false);
  var mounted = createStream(false);
  var visible = createStream(false);
  return {
    cleanUp: undefined,
    containerEl: undefined,
    dismissEl: undefined,
    el: undefined,
    timer: new polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["Timer"](),
    paused: paused,
    transitioning: transitioning,
    visible: visible,
    mounted: mounted,
    redrawOnUpdate: createStream.merge([visible])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.el = dom;
  var titleEl = state.el.querySelector("." + classes.title);
  if (titleEl) {
    setTitleStyles(titleEl);
  }
  if (!state.containerEl && polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
    // attrs.holderSelector is passed as option to Multiple
    state.containerEl = document.querySelector(attrs.containerSelector || attrs.holderSelector);
  }
  if (!state.containerEl && polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
    console.error("No container element found"); // eslint-disable-line no-console
  }
  if (attrs.containerSelector && state.containerEl) {
    state.containerEl.classList.add(classes.hasContainer);
  }
  if (attrs.show && !state.visible()) {
    showNotification(state, attrs);
  }
  state.mounted(true);
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.mounted(false);
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  _defineProperty({
    className: [classes.component, attrs.fromMultipleClassName,
    // classes.visible is set in showNotification though transition
    attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
    attrs.containerSelector ? classes.hasContainer : null, attrs.layout === "vertical" ? classes.vertical : classes.horizontal, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, k.onclick, function (e) {
    return e.preventDefault();
  }));
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (state.mounted() && !state.transitioning()) {
    if (attrs.hide && state.visible()) {
      hideNotification(state, attrs);
    } else if (attrs.show && !state.visible()) {
      showNotification(state, attrs);
    }
  }
  if (attrs.pause && !state.paused()) {
    pause(state, attrs);
  } else if (attrs.unpause && state.paused()) {
    unpause(state, attrs);
  }

  return h("div", {
    className: classes.content,
    style: attrs.style
  }, attrs.content || [attrs.title ? h("div", { className: classes.title }, attrs.title) : null, attrs.action ? h("div", { className: classes.action }, attrs.action) : null]);
};

var notificationInstance = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-radio-button/dist/polythene-core-radio-button.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-radio-button/dist/polythene-core-radio-button.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: coreRadioButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreRadioButton", function() { return radioButton; });
var classes = {
  component: "pe-radio-control"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";

var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    icons: icons,
    selectable: attrs.selectable || function (selected) {
      return !selected;
    }, // default: only selectable when not checked
    instanceClass: classes.component,
    type: "radio"
  });
};

var radioButton = /*#__PURE__*/Object.freeze({
  createProps: createProps
});




/***/ }),

/***/ "../../polythene-core-radio-group/dist/polythene-core-radio-group.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-radio-group/dist/polythene-core-radio-group.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: coreRadioGroup */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreRadioGroup", function() { return radioGroup; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
  component: "pe-radio-group"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getInitialState = function getInitialState(vnode, createStream) {
  var checkedIndex = createStream(null);
  return {
    checkedIndex: checkedIndex,
    redrawOnUpdate: createStream.merge([checkedIndex])
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      RadioButton = _ref2.RadioButton;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var checkedIndex = state.checkedIndex();

  var buttons = attrs.content ? attrs.content : attrs.buttons ? attrs.buttons : attrs.children || vnode.children || [];

  return buttons.length ? buttons.map(function (buttonOpts, index) {
    if (!buttonOpts) {
      return null;
    }
    // Only set defaultChecked the first time when no value has been stored yet
    var isDefaultChecked = (buttonOpts.defaultChecked || buttonOpts.checked) && checkedIndex === null;
    if (buttonOpts.value === undefined) {
      console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
    }
    var isChecked = isDefaultChecked || buttonOpts.checked || checkedIndex === index;
    return h(RadioButton, _extends({}, {
      /* group attributes that may be overwritten by individual buttons */
      name: attrs.name,
      key: buttonOpts.value
    }, attrs.all,
    /* individual button options */
    buttonOpts, {
      /* this component's options */
      onChange: function onChange(_ref3) {
        var value = _ref3.value;
        return state.checkedIndex(index), attrs.onChange && attrs.onChange({ value: value });
      },
      checked: isChecked
    }));
  }) : null;
};

var radioGroup = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-raised-button/dist/polythene-core-raised-button.mjs":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-raised-button/dist/polythene-core-raised-button.mjs ***!
  \*************************************************************************************************************************************************/
/*! exports provided: coreRaisedButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreRaisedButton", function() { return raisedButton; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
  component: "pe-raised-button",
  super: "pe-button pe-text-button"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

var MAX_Z = 5;

var tapStart = void 0,
    tapEndAll = function tapEndAll() {},
    downButtons = [];

var animateZ = function animateZ(which, vnode) {
  var zBase = vnode.state.zBase;
  var increase = vnode.attrs.increase || 1;
  var z = vnode.state.z();
  var newZ = which === "down" && zBase < MAX_Z ? Math.min(zBase + increase, MAX_Z) : which === "up" ? Math.max(z - increase, zBase) : z;
  if (newZ !== z) {
    vnode.state.z(newZ);
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
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  tapStart = function tapStart() {
    return tapHandler("down", vnode);
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (buttonVnode) {
      return tapHandler("up", buttonVnode);
    });
    downButtons = [];
  };
  polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerStartMoveEvent"].forEach(function (evt) {
    return vnode.dom.addEventListener(evt, tapStart);
  });
  polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndMoveEvent"].forEach(function (evt) {
    return document.addEventListener(evt, tapEndAll);
  });
};

var clearTapEvents = function clearTapEvents(vnode) {
  polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerStartMoveEvent"].forEach(function (evt) {
    return vnode.dom.removeEventListener(evt, tapStart);
  });
  polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndMoveEvent"].forEach(function (evt) {
    return document.removeEventListener(evt, tapEndAll);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var zBase = attrs.z !== undefined ? attrs.z : 1;
  var z = createStream(zBase);
  var tapEventsInited = createStream(false);
  return {
    zBase: zBase,
    z: z,
    tapEventsInited: tapEventsInited,
    redrawOnUpdate: createStream.merge([z])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  if (!state.tapEventsInited()) {
    initTapEvents(vnode);
    state.tapEventsInited(true);
  }
};

var onUnMount = function onUnMount(vnode) {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      Shadow = _ref.Shadow;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = attrs.children || vnode.children || [];
  return _extends({}, {
    parentClassName: [classes.super, attrs.parentClassName || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: h(Shadow, {
      z: attrs.disabled ? 0 : state.z,
      animated: true
    }),
    wash: attrs.wash !== undefined ? attrs.wash : false,
    children: children
  }, attrs);
};

var createContent = function createContent(vnode) {
  return vnode.children;
};

var raisedButton = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-ripple/dist/polythene-core-ripple.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-ripple/dist/polythene-core-ripple.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: coreRipple */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreRipple", function() { return ripple; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var ANIMATION_END_EVENT = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getAnimationEndEvent"])();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var addStyleToHead = function addStyleToHead(id, stylesheet) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var documentRef = window.document;
  var styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

var removeStyleFromHead = function removeStyleFromHead(id) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var el = document.getElementById(id);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

var animation = (function (_ref) {
  var e = _ref.e,
      id = _ref.id,
      el = _ref.el,
      attrs = _ref.attrs,
      classes = _ref.classes;

  return new Promise(function (resolve) {
    var container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    var waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
    var rect = el.getBoundingClientRect();
    var x = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? e.touches[0].pageX : e.clientX;
    var y = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? e.touches[0].pageY : e.clientY;
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var mx = attrs.center ? rect.left + rect.width / 2 : x;
    var my = attrs.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var startOpacity = attrs.startOpacity !== undefined ? attrs.startOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
    var startScale = attrs.startScale || DEFAULT_START_SCALE;
    var endScale = attrs.endScale || DEFAULT_END_SCALE;
    var duration = attrs.duration ? attrs.duration : 1 / opacityDecayVelocity * 0.2;
    var color = window.getComputedStyle(el).color;

    var style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = attrs.animationTimingFunction || polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_curve_default;

    var rippleStyleSheet = "@keyframes " + id + " {\n      0% {\n        transform:scale(" + startScale + ");\n        opacity: " + startOpacity + "\n      }\n      100% {\n        transform:scale(" + endScale + ");\n        opacity: " + endOpacity + ";\n      }\n    }";
    addStyleToHead(id, rippleStyleSheet);

    var animationDone = function animationDone(evt) {
      removeStyleFromHead(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);
      if (attrs.persistent) {
        style.opacity = endOpacity;
        style.transform = "scale(" + endScale + ")";
      } else {
        waves.classList.remove(classes.wavesAnimating);
        container.removeChild(waves);
        el.removeChild(container);
      }
      resolve(evt);
    };

    waves.addEventListener(ANIMATION_END_EVENT, animationDone, false);
    waves.classList.add(classes.wavesAnimating);
  });
});

var classes = {
  component: "pe-ripple",

  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",

  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getInitialState = function getInitialState() {
  return {
    animations: {},
    animating: false,
    cleanUp: undefined
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.unconstrained ? classes.unconstrained : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var updateAnimationState = function updateAnimationState(state) {
  return state.animating = Object.keys(state.animations).length > 0;
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;

  var tap = function tap(e) {
    if (attrs.disabled || !attrs.multi && state.animating) {
      return;
    }
    if (attrs.start) {
      attrs.start(e);
    }
    var id = "ripple_animation_" + new Date().getTime();
    state.animations[id] = animation({ e: e, id: id, el: vnode.dom, attrs: attrs, classes: classes }).then(function (evt) {
      if (attrs.end) {
        attrs.end(evt);
      }
      delete state.animations[id];
      updateAnimationState(state);
    });
    updateAnimationState(state);
  };
  var triggerEl = attrs.target ? attrs.target : vnode.dom && vnode.dom.parentElement;

  if (triggerEl) {
    polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndEvent"].forEach(function (evt) {
      return triggerEl.addEventListener(evt, tap, false);
    });
  }
  state.cleanUp = function () {
    if (triggerEl) {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndEvent"].forEach(function (evt) {
        return triggerEl.removeEventListener(evt, tap, false);
      });
    }
  };
};

var onUnMount = function onUnMount(_ref2) {
  var state = _ref2.state;
  return state.cleanUp && state.cleanUp();
};

var ripple = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  createProps: createProps,
  onMount: onMount,
  onUnMount: onUnMount
});




/***/ }),

/***/ "../../polythene-core-search/dist/polythene-core-search.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-search/dist/polythene-core-search.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: coreSearch */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreSearch", function() { return search; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
  component: "pe-search",

  // elements
  content: "pe-search__content",

  // states
  searchFullWidth: "pe-search--full-width",
  searchInset: "pe-search--inset"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getNameOfState = function getNameOfState(state) {
  return state.focus && state.dirty ? "focus_dirty" : state.focus ? "focus" : state.dirty ? "dirty" : "none";
};

var getInitialState = function getInitialState(vnode, createStream) {
  var searchState = createStream({});
  return {
    searchState: searchState
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.fullWidth ? classes.searchFullWidth : classes.searchInset, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      TextField = _ref2.TextField;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var searchState = getNameOfState(state.searchState());
  var buttons = (attrs.buttons || {})[searchState] || {};
  var textfieldAttrs = attrs.textfield || {};
  return h("div", { className: classes.content }, [buttons.before, h(TextField, _extends({}, textfieldAttrs, {
    key: "input",
    onChange: function onChange(newState) {
      state.searchState(newState);
      if (textfieldAttrs.onChange) {
        textfieldAttrs.onChange(newState);
      }
    }
  })), buttons.after]);
};

var search = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-selection-control/dist/polythene-core-selection-control.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-selection-control/dist/polythene-core-selection-control.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: coreSelectionControl, viewControl */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreSelectionControl", function() { return selectionControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewControl", function() { return viewControl; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var currentState = function currentState(attrs, state) {
  var checked = attrs.checked !== undefined ? attrs.checked : state.checked();
  var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  var inactive = attrs.disabled || !selectable;
  return { checked: checked, inactive: inactive };
};

var getInitialState = function getInitialState(vnode, createStream, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  var isChecked = attrs.defaultChecked !== undefined ? attrs.defaultChecked : attrs.checked || false;
  var checked = createStream(isChecked);

  var notifyChange = function notifyChange(e, isChecked) {
    if (attrs.onChange) {
      attrs.onChange({
        event: e,
        checked: isChecked,
        value: attrs.value
      });
    }
  };

  var onChange = function onChange(e) {
    var isChecked = e.currentTarget.checked;
    if (attrs.type === "radio") {
      // do not set directly
    } else {
      checked(isChecked);
    }
    notifyChange(e, isChecked);
  };

  var toggle = function toggle(e) {
    var newChecked = !checked();
    checked(newChecked);
    notifyChange(e, newChecked);
  };

  var viewControlClickHandler = attrs.events && attrs.events[k.onclick];
  var viewControlKeyDownHandler = attrs.events && attrs.events[k.onkeydown] ? attrs.events[k.onkeydown] : function (e) {
    if (e.key === "Enter" || e.keyCode === 32) {
      e.preventDefault();
      if (viewControlClickHandler) {
        viewControlClickHandler(e);
      } else {
        toggle(e);
      }
    }
  };

  return {
    checked: checked,
    toggle: toggle,
    onChange: onChange,
    viewControlClickHandler: viewControlClickHandler,
    viewControlKeyDownHandler: viewControlKeyDownHandler,
    redrawOnUpdate: createStream.merge([checked])
  };
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var attrs = vnode.attrs;
  var state = vnode.state;

  var _currentState = currentState(attrs, state),
      checked = _currentState.checked,
      inactive = _currentState.inactive;

  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.instanceClass, // for instance pe-checkbox-control
    checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, attrs.size), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys,
      ViewControl = _ref3.ViewControl;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var _currentState2 = currentState(attrs, state),
      checked = _currentState2.checked,
      inactive = _currentState2.inactive;

  return h("label", _extends({}, {
    className: classes.formLabel
  }, state.viewControlClickHandler && _defineProperty({}, k.onclick, function (e) {
    return e.preventDefault(), state.viewControlClickHandler(e);
  })), [h(ViewControl, _extends({}, attrs, {
    inactive: inactive,
    checked: checked,
    key: "control",
    events: _defineProperty({}, k.onkeydown, state.viewControlKeyDownHandler)
  })), attrs.label ? h("." + classes.label, { key: "label" }, attrs.label) : null, h("input", _extends({}, attrs.events, {
    name: attrs.name,
    type: attrs.type,
    value: attrs.value,
    checked: checked
  }, attrs.disabled || inactive ? { disabled: "disabled" } : _defineProperty({}, k.onchange, state.onChange)))]);
};

var selectionControl = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CONTENT = [{ iconType: "iconOn", className: classes.buttonOn }, { iconType: "iconOff", className: classes.buttonOff }];

var getElement$1 = function getElement(vnode) {
  return vnode.attrs.element || "." + classes.box;
};

var createIcon = function createIcon(h, iconType, attrs, className) {
  return (
    // if attrs.iconOn/attrs.iconOff is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends$1({}, {
      className: className,
      key: iconType
    }, attrs[iconType] ? attrs[iconType] : { svg: { content: h.trust(attrs.icons[iconType]) } }, attrs.icon, attrs.size ? { size: attrs.size } : null)
  );
};

var createContent$1 = function createContent(vnode, _ref) {
  var h = _ref.renderer,
      Icon = _ref.Icon,
      IconButton = _ref.IconButton;

  var attrs = vnode.attrs;
  return h(IconButton, _extends$1({}, {
    element: "div",
    key: attrs.key,
    className: classes.button,
    content: CONTENT.map(function (o) {
      return h(Icon, createIcon(h, o.iconType, attrs, o.className));
    }),
    ripple: { center: true },
    disabled: attrs.disabled,
    events: attrs.events,
    inactive: attrs.inactive
  }, attrs.iconButton // for example for hover behaviour
  ));
};

var viewControl = /*#__PURE__*/Object.freeze({
  getElement: getElement$1,
  createContent: createContent$1
});




/***/ }),

/***/ "../../polythene-core-shadow/dist/polythene-core-shadow.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-shadow/dist/polythene-core-shadow.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: coreShadow */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreShadow", function() { return shadow; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
  component: "pe-shadow",

  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",

  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.animated && classes.animated, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  return [content, h("div", {
    key: "bottom",
    className: [classes.bottomShadow, depthClass].join(" ")
  }), h("div", {
    key: "top",
    className: [classes.topShadow, depthClass].join(" ")
  })];
};

var shadow = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-slider/dist/polythene-core-slider.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-slider/dist/polythene-core-slider.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: coreSlider */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreSlider", function() { return slider; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
  component: "pe-slider",

  // elements
  control: "pe-slider__control",
  label: "pe-slider__label",
  pin: "pe-slider__pin",
  thumb: "pe-slider__thumb",
  tick: "pe-slider__tick",
  ticks: "pe-slider__ticks",
  track: "pe-slider__track",
  trackBar: "pe-slider__track-bar",
  trackBarValue: "pe-slider__track-bar-value",
  trackPart: "pe-slider__track-part",
  trackPartRest: "pe-slider__track-rest",
  trackPartValue: "pe-slider__track-value",

  // states
  hasFocus: "pe-slider--focus",
  hasPin: "pe-slider--pin",
  hasTicks: "pe-slider--ticks",
  hasTrack: "pe-slider--track",
  isActive: "pe-slider--active",
  isAtMin: "pe-slider--min",
  isDisabled: "pe-slider--disabled",
  tickValue: "pe-slider__tick--value"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MAX_TICKS = 100;
var focusElement = void 0;

var deFocus = function deFocus(state) {
  if (focusElement) {
    focusElement.blur();
  }
  focusElement = undefined;
  state.hasFocus(false);
};

var focus = function focus(state, el) {
  deFocus(state);
  focusElement = el;
  state.hasFocus(true);
};

var positionFromEvent = function positionFromEvent(e, isVertical) {
  return (
    // isVertical not yet implemented
    polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX
  );
};

var updatePinPosition = function updatePinPosition(state) {
  if (state.controlEl && state.pinEl) {
    var left = state.fraction() * state.rangeWidth;
    state.pinEl.style.left = left + "px";
  }
};

var updateValue = function updateValue(state, value) {
  state.setValue(value, true);
  updatePinPosition(state);
};

var generateTickMarks = function generateTickMarks(h, stepCount, stepSize, value) {
  var items = [];
  var stepWithValue = value / stepSize;
  var s = 0;
  while (s < stepCount + 1) {
    items.push(h("div", {
      className: s <= stepWithValue ? [classes.tick, classes.tickValue].join(" ") : classes.tick,
      key: "tick-" + s
    }));
    s++;
  }
  return items;
};

var readRangeData = function readRangeData(state) {
  if (state.controlEl && polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
    // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
    state.controlWidth = parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({ element: state.controlEl, prop: "width" }));
    state.rangeWidth = state.trackEl.getBoundingClientRect().width - state.controlWidth;
    var styles = window.getComputedStyle(state.trackEl);
    state.rangeOffset = parseFloat(styles.marginLeft);
  }
};

var calculateClickOffset = function calculateClickOffset(state) {
  var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  state.clickOffset = state.trackEl.getBoundingClientRect().left - (state.rangeOffset - state.controlWidth / 2) + controlOffset;
};

var initControlEvent = function initControlEvent(state, e) {
  var controlPos = state.controlEl.getBoundingClientRect().left;
  var eventPos = positionFromEvent(e);
  var controlOffset = eventPos - controlPos - state.controlWidth / 2;
  calculateClickOffset(state, controlOffset);
};

var initTrackEvent = function initTrackEvent(state) {
  return calculateClickOffset(state, 0);
};

var handlePosEvent = function handlePosEvent(state, e) {
  var pos = positionFromEvent(e) - state.clickOffset;
  var value = state.min + (pos - state.rangeOffset) / state.rangeWidth * (state.max - state.min);
  updateValue(state, value);
};

var startDrag = function startDrag(state, attrs, e) {
  if (state.isDragging()) return;
  e.preventDefault();
  state.isDragging(true);
  state.isActive(true);
  deFocus(state);

  var drag = function drag(e) {
    if (!state.isDragging()) return;
    handlePosEvent(state, e);
  };

  var endDrag = function endDrag() {
    if (!state.isDragging()) return;
    deFocus(state);
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerMoveEvent"].forEach(function (evt) {
        return window.removeEventListener(evt, drag);
      });
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndMoveEvent"].forEach(function (evt) {
        return window.removeEventListener(evt, endDrag);
      });
    }
    state.isDragging(false);
    state.isActive(false);
  };

  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
    polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerMoveEvent"].forEach(function (evt) {
      return window.addEventListener(evt, drag);
    });
    polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndMoveEvent"].forEach(function (evt) {
      return window.addEventListener(evt, endDrag);
    });
  }
  readRangeData(state);

  if (attrs.pin) {
    updatePinPosition(state);
  }
};

var startTrack = function startTrack(state, attrs, e) {
  e.preventDefault();
  if (state.isDragging()) {
    return;
  }
  readRangeData(state);
  initTrackEvent(state);
  handlePosEvent(state, e);
  startDrag(state, attrs, e);
};

var createSlider = function createSlider(vnode, _ref) {
  var _ref2;

  var h = _ref.h,
      k = _ref.k,
      hasTicks = _ref.hasTicks,
      interactiveTrack = _ref.interactiveTrack;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var fraction = state.fraction();
  var range = state.max - state.min;
  var stepCount = Math.min(MAX_TICKS, parseInt(range / state.stepSize, 10));

  var onStartTrack = function onStartTrack(e) {
    return startTrack(state, attrs, e);
  };

  var onInitDrag = function onInitDrag(e) {
    readRangeData(state);
    initControlEvent(state, e);
    startDrag(state, attrs, e);
  };

  var flexValueCss = fraction + " 1 0%";
  var flexRestValue = 1 - fraction;
  var flexRestCss = flexRestValue + " 1 0%";

  return h("div", _extends({}, { className: classes.track }, interactiveTrack && !attrs.disabled && polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerStartMoveEvent"].reduce(function (acc, evt) {
    return acc[k["on" + evt]] = onStartTrack, acc;
  }, {})), [h("div", {
    className: classes.trackPart + " " + classes.trackPartValue,
    key: "trackPartValue",
    style: {
      flex: flexValueCss,
      msFlex: flexValueCss,
      WebkitFlex: flexValueCss
    }
  }, h("div", { className: classes.trackBar }, h("div", { className: classes.trackBarValue }))), h("div", _extends({}, {
    className: classes.control,
    key: "control"
  }, attrs.disabled ? { disabled: true } : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onfocus, function () {
    return focus(state, state.controlEl);
  }), _defineProperty(_ref2, k.onblur, function () {
    return deFocus(state);
  }), _defineProperty(_ref2, k.onkeydown, function (e) {
    if (e.key !== "Tab") {
      e.preventDefault();
    }
    if (e.key === "Escape" || e.key === "Esc") {
      state.controlEl.blur(e);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "Left" || e.key === "Down") {
      state.decrement(state, e.shiftKey);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "Right" || e.key === "Up") {
      state.increment(state, e.shiftKey);
    } else if (e.key === "Home") {
      updateValue(state, state.min);
    } else if (e.key === "End") {
      updateValue(state, state.max);
    } else if (e.key === "PageDown") {
      state.decrement(state, true);
    } else if (e.key === "PageUp") {
      state.increment(state, true);
    }
    readRangeData(state);
    updatePinPosition(state);
  }), _ref2), !attrs.disabled && polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerStartMoveEvent"].reduce(function (acc, evt) {
    return acc[k["on" + evt]] = onInitDrag, acc;
  }, {}), attrs.events ? attrs.events : null, hasTicks ? { step: stepCount } : null), attrs.icon ? h("div", {
    className: classes.thumb,
    key: "icon"
  }, attrs.icon) : null), h("div", {
    className: classes.trackPart + " " + classes.trackPartRest,
    key: "trackPartRest",
    style: {
      flex: flexRestCss,
      msFlex: flexRestCss,
      WebkitFlex: flexRestCss,
      maxWidth: flexRestValue * 100 + "%" // for IE Edge
    }
  }, h("div", { className: classes.trackBar }, h("div", { className: classes.trackBarValue }))), hasTicks && !attrs.disabled ? h("div", {
    className: classes.ticks,
    key: "ticks"
  }, generateTickMarks(h, stepCount, state.stepSize, state.value())) : null, hasTicks && attrs.pin && !attrs.disabled ? h("div", {
    className: classes.pin,
    key: "pin",
    value: state.value()
  }) : null]);
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;

  var min = attrs.min !== undefined ? attrs.min : 0;
  var max = attrs.max !== undefined ? attrs.max : 100;
  var range = max - min;
  var stepSize = attrs.stepSize !== undefined ? attrs.stepSize : 1;
  var defaultValue = attrs.defaultValue !== undefined ? attrs.defaultValue : attrs.value !== undefined ? attrs.value : 0;
  var previousValue = createStream(undefined);
  var isActive = createStream(false);
  var hasFocus = createStream(false);
  var isDragging = createStream(false);
  var fraction = createStream(min);
  var value = createStream(0);
  var normalizeFactor = 1 / stepSize;

  var setValue = function setValue(v) {
    var shouldNotify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (v < min) v = min;
    if (v > max) v = max;
    value(stepSize ? Math.round(v * normalizeFactor) / normalizeFactor : v);
    fraction((value() - min) / range);
    if (shouldNotify && attrs.onChange) {
      attrs.onChange({
        value: value()
      });
    }
    previousValue(v);
  };

  var increment = function increment(state, useLargeStep) {
    return updateValue(state, value() + (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var decrement = function decrement(state, useLargeStep) {
    return updateValue(state, value() - (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  setValue(defaultValue);

  return {
    min: min,
    max: max,
    stepSize: stepSize,
    fraction: fraction,
    // DOM elements
    trackEl: null,
    controlEl: null,
    pinEl: null,
    // functions
    setValue: setValue,
    increment: increment,
    decrement: decrement,
    // streams
    isDragging: isDragging,
    isActive: isActive,
    value: value,
    previousValue: previousValue,
    hasFocus: hasFocus,
    // coordinates
    controlWidth: 0,
    rangeWidth: 0,
    rangeOffset: 0,
    clickOffset: 0,
    redrawOnUpdate: createStream.merge([isActive, value])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.trackEl = dom.querySelector("." + classes.track);
  state.controlEl = dom.querySelector("." + classes.control);
  state.pinEl = dom.querySelector("." + classes.pin);

  readRangeData(state);

  if (attrs.pin) {
    setTimeout(function () {
      updateValue(state, state.value());
    }, 0);
  }
};

var createProps = function createProps(vnode, _ref3) {
  var k = _ref3.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.value !== undefined) {
    if (state.previousValue() !== attrs.value) {
      state.previousValue(attrs.value);
      setTimeout(function () {
        return state.setValue(state.previousValue());
      }, 0); // perform in next tick to play nice with React
    }
  }
  var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.disabled ? classes.isDisabled : null, attrs.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, state.isActive() ? classes.isActive : null, state.hasFocus() ? classes.hasFocus : null, state.fraction() === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref4) {
  var h = _ref4.renderer,
      k = _ref4.keys;

  var attrs = vnode.attrs;
  var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
  return createSlider(vnode, { h: h, k: k, hasTicks: hasTicks, interactiveTrack: interactiveTrack });
};

var slider = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState,
  onMount: onMount,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-snackbar/dist/polythene-core-snackbar.mjs":
/*!***************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-snackbar/dist/polythene-core-snackbar.mjs ***!
  \***************************************************************************************************************************************/
/*! exports provided: coreSnackbarInstance, transitions */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitions", function() { return transitions; });
/* harmony import */ var polythene_core_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-notification */ "../../polythene-core-notification/dist/polythene-core-notification.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coreSnackbarInstance", function() { return polythene_core_notification__WEBPACK_IMPORTED_MODULE_0__["coreNotificationInstance"]; });



var DEFAULT_DURATION = 0.4;

var show = function show(_ref) {
  var containerEl = _ref.containerEl,
      el = _ref.el,
      duration = _ref.duration,
      delay = _ref.delay;

  return {
    el: containerEl,
    duration: duration || DEFAULT_DURATION,
    delay: delay || 0,
    before: function before() {
      el.style.display = "block";
      var height = el.getBoundingClientRect().height;
      containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    transition: function transition() {
      return containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var hide = function hide(_ref2) {
  var containerEl = _ref2.containerEl,
      el = _ref2.el,
      duration = _ref2.duration,
      delay = _ref2.delay;

  return {
    el: containerEl,
    duration: duration || DEFAULT_DURATION,
    delay: delay || 0,
    transition: function transition() {
      var height = el.getBoundingClientRect().height;
      containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    // reset to original position to counter the removal of the snackbar instance
    after: function after() {
      // prevent a "bounce back"
      el.style.display = "none";
      containerEl.style.transitionDuration = "0ms";
      containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};




/***/ }),

/***/ "../../polythene-core-svg/dist/polythene-core-svg.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-svg/dist/polythene-core-svg.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: coreSVG */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreSVG", function() { return svg; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {
  component: "pe-svg"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  // Prevent that SVG gets keyboard focus
  var elem = vnode.dom.querySelector("svg");
  if (elem) {
    elem.setAttribute("focusable", "false");
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var svg = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  onMount: onMount,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-switch/dist/polythene-core-switch.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-switch/dist/polythene-core-switch.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: coreSwitch, viewControl */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreSwitch", function() { return _switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewControl", function() { return viewControl; });
var classes = {
  component: "pe-switch-control",

  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    selectable: attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless of the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

var _switch = /*#__PURE__*/Object.freeze({
  createProps: createProps
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createContent = function createContent(vnode, _ref) {
  var h = _ref.renderer,
      Shadow = _ref.Shadow,
      IconButton = _ref.IconButton;

  var attrs = vnode.attrs;

  var zOff = attrs.zOff !== undefined ? attrs.zOff : 1;
  var zOn = attrs.zOn !== undefined ? attrs.zOn : 2;
  var z = attrs.checked ? zOn : zOff;
  var raised = attrs.raised !== undefined ? attrs.raised : true;

  return [h("div", {
    className: classes.track,
    key: "track"
  }), h(IconButton, _extends$1({}, {
    className: classes.thumb,
    key: "button",
    content: h("div", { className: classes.knob }, [attrs.icon ? attrs.icon : null, raised ? h(Shadow, {
      z: z,
      animated: true
    }) : null]),
    style: attrs.style,
    disabled: attrs.disabled,
    events: attrs.events,
    ink: attrs.ink || false,
    inactive: attrs.inactive
  }, attrs.iconButton))];
};

var viewControl = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-tabs/dist/polythene-core-tabs.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-tabs/dist/polythene-core-tabs.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: coreTabs, coreTab, coreScrollButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreTabs", function() { return tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreTab", function() { return tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreScrollButton", function() { return scrollButton; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../../polythene-utilities/dist/polythene-utilities.mjs");



var buttonClasses = {
    component: "pe-text-button",
    super: "pe-button",
    row: "pe-button-row",

    // elements      
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states      
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    extraWide: "pe-button--extra-wide",
    separatorAtStart: "pe-button--separator-start",
    dropdownOpen: "pe-button--dropdown-open",
    dropdownClosed: "pe-button--dropdown-closed"
};

var classes = {
  component: "pe-tabs",

  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  tab: "pe-tab",
  tabContent: "pe-tabs__tab-content",
  tabRow: "pe-tabs__row",

  // states
  activeSelectable: "pe-tabs__active--selectable",
  isAtEnd: "pe-tabs--end",
  isAtStart: "pe-tabs--start",
  isAutofit: "pe-tabs--autofit",
  isMenu: "pe-tabs--menu",
  scrollable: "pe-tabs--scrollable",
  compactTabs: "pe-tabs--compact",
  tabHasIcon: "pe-tabs__tab--icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",

  // lookup
  label: buttonClasses.label
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SCROLL_SPEED = 600; // px per second
var SCROLL_DELAY = .15; // seconds
var SCROLL_MIN_DURATION = .5; // seconds
var INDICATOR_SLIDE_MIN_DURATION = .25; // seconds

var whenCreateDone = function whenCreateDone() {
  return Promise.resolve();
};

var getIndex = function getIndex(state, attrs) {
  var attrsSelectedTabIndex = attrs.selectedTabIndex !== undefined ? attrs.selectedTabIndex : attrs.selectedTab !== undefined // deprecated
  ? attrs.selectedTab : undefined;
  return attrsSelectedTabIndex !== undefined ? attrsSelectedTabIndex : Array.isArray(attrs.tabs) ? attrs.tabs.reduce(function (acc, tab, index) {
    return acc === undefined && !tab.disabled ? index : acc;
  }, undefined) : undefined;
};

var scrollButtonGetNewIndex = function scrollButtonGetNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var handleScrollButtonClick = function handleScrollButtonClick(state, attrs, e, direction) {
  e.stopPropagation();
  e.preventDefault();
  var currentTabIndex = state.selectedTabIndex();
  var newIndex = scrollButtonGetNewIndex(currentTabIndex, state.tabs)[direction];
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
  } else {
    scrollToTab(state, newIndex);
  }
};

var scrollToTab = function scrollToTab(state, tabIndex) {
  var tabs = state.tabs;
  var scroller = state.tabRowEl;
  // Scroll to position of selected tab
  var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
    return totalWidth + tabData.dom.getBoundingClientRect().width;
  }, 0);
  // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width
  var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
  var scrollingWidth = scroller.scrollWidth;
  var maxScroll = scrollingWidth - scrollerWidth;
  var left = state.isRTL ? -1 * Math.min(tabLeft, maxScroll) : Math.min(tabLeft, maxScroll);
  var currentLeft = scroller.scrollLeft;
  if (currentLeft !== left) {
    var duration = Math.abs(currentLeft - left) / SCROLL_SPEED;
    var delaySeconds = SCROLL_DELAY;
    setTimeout(function () {
      Object(polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["scrollTo"])({
        element: scroller,
        to: left,
        duration: Math.max(SCROLL_MIN_DURATION, duration),
        direction: "horizontal"
      }).then(function () {
        return updateScrollButtons(state);
      });
    }, delaySeconds * 1000);
  }
};

var updateScrollButtons = function updateScrollButtons(state) {
  var tabRowEl = state.tabRowEl;
  var scrollLeft = tabRowEl.scrollLeft;
  var currentTabIndex = state.selectedTabIndex();
  var tabsEl = state.tabsEl;
  var minTabIndex = 0;
  var maxTabIndex = state.tabs.length - 1;
  var isAtStart = tabRowEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
  var isAtEnd = scrollLeft >= tabRowEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
  state.scrollButtonAtStart(isAtStart);
  state.scrollButtonAtEnd(isAtEnd);
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, state) {
  var parentRect = state.tabsEl.getBoundingClientRect();
  var rect = selectedTabEl.getBoundingClientRect();
  var buttonSize = state.managesScroll ? rect.height : 0;
  var translateX = state.isRTL ? rect.right - parentRect.right + state.tabRowEl.scrollLeft + buttonSize : rect.left - parentRect.left + state.tabRowEl.scrollLeft - buttonSize;
  var scaleX = 1 / (parentRect.width - 2 * buttonSize) * rect.width;
  var transformCmd = "translate(" + translateX + "px, 0) scaleX(" + scaleX + ")";
  var duration = animate ? INDICATOR_SLIDE_MIN_DURATION : 0;
  var style = state.tabIndicatorEl.style;
  style["transition-duration"] = duration + "s";
  style.transform = transformCmd;
};

var setSelectedTab = function setSelectedTab(state, attrs, index, animate) {
  state.selectedTabIndex(index);
  if (!state.tabs.length) return;
  var selectedTabEl = state.tabs[index].dom;
  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }
  if (state.managesScroll) {
    updateScrollButtons(state);
  }
  scrollToTab(state, index);
  if (attrs.onChange) {
    attrs.onChange({
      index: index,
      options: state.tabs[index].attrs,
      el: selectedTabEl
    });
  }
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var getInitialState = function getInitialState(vnode, createStream) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.selectedTab) {
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["deprecation"])("Tabs", "selectedTab", "selectedTabIndex");
  }
  var tabIndex = getIndex(state, attrs) || 0;
  var selectedTabIndex = createStream(tabIndex);
  var scrollButtonAtStart = createStream(true);
  var scrollButtonAtEnd = createStream(true);
  var registerTabButton = function registerTabButton(state) {
    return function (index, data) {
      return state.tabs[index] = data;
    };
  };
  var registerScrollButton = function registerScrollButton(state) {
    return function (position, dom) {
      return state.scrollButtons[position] = dom;
    };
  };
  return {
    tabsEl: undefined,
    tabRowEl: undefined,
    tabs: [], // {data, el}
    tabRow: undefined,
    tabIndicatorEl: undefined,
    selectedTabIndex: selectedTabIndex,
    previousSelectedTabIndex: undefined,
    managesScroll: attrs.scrollable && !polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"],
    scrollButtonAtStart: scrollButtonAtStart,
    scrollButtonAtEnd: scrollButtonAtEnd,
    scrollButtons: {
      start: undefined,
      end: undefined
    },
    registerTabButton: registerTabButton,
    registerScrollButton: registerScrollButton,
    isRTL: false,
    cleanUp: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([selectedTabIndex, scrollButtonAtStart, scrollButtonAtEnd])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.tabsEl = dom;
  state.isRTL = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["isRTL"])({ element: dom });
  if (!attrs.hideIndicator) {
    state.tabIndicatorEl = dom.querySelector("." + classes.indicator);
  }
  state.tabRowEl = dom.querySelector("." + classes.tabRow);

  // A promise can't resolve during the oncreate loop
  // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
  whenCreateDone().then(function () {
    if (state.tabs && attrs.largestWidth) {
      var widths = state.tabs.map(function (tabData) {
        return tabData.dom.getBoundingClientRect().width;
      });
      var largest = widths.sort(sortByLargestWidth)[0];
      state.tabs.forEach(function (tabData) {
        return tabData.dom.style.width = largest + "px";
      });
    }
    setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  });

  var onResize = function onResize() {
    return setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  };

  Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", onResize), state.cleanUp = function () {
    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", onResize);
  };
};

var onUnMount = function onUnMount(_ref) {
  var state = _ref.state;
  return state.cleanUp();
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false;

  // Keep selected tab up to date
  var index = getIndex(state, attrs);
  if (index !== undefined && state.previousSelectedTabIndex !== index) {
    setSelectedTab(state, attrs, index, true);
  }
  state.previousSelectedTabIndex = index;

  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.scrollable ? classes.scrollable : null, state.scrollButtonAtStart() ? classes.isAtStart : null, state.scrollButtonAtEnd() ? classes.isAtEnd : null, attrs.activeSelected ? classes.activeSelectable : null, autofit ? classes.isAutofit : null, attrs.compact ? classes.compactTabs : null, attrs.menu ? classes.isMenu : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys,
      Tab = _ref3.Tab,
      ScrollButton = _ref3.ScrollButton;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var buttons = attrs.content ? attrs.content : attrs.tabs ? attrs.tabs : attrs.children || vnode.children || [];

  if (buttons.length === 0) {
    console.error("No tabs specified"); // eslint-disable-line no-console
  }

  var tabRow = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments[1];

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by `all`
      selected: index === state.selectedTabIndex(),
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.all, {
      // Internal options, should not get overridden
      index: index,
      key: buttonOpts.key || "tab-" + index,
      register: state.registerTabButton(state),
      onSelect: function onSelect() {
        return setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true);
      }
    });
    return h(Tab, buttonOptsCombined);
  });

  var scrollButtonAtStart = void 0,
      scrollButtonAtEnd = void 0;
  if (attrs.scrollable) {
    scrollButtonAtStart = h(ScrollButton, _extends({}, {
      key: "backward",
      icon: attrs.scrollIconBackward,
      className: classes.scrollButtonAtStart,
      position: "start",
      register: state.registerScrollButton(state),
      events: _defineProperty({}, k.onclick, function (e) {
        return handleScrollButtonClick(state, attrs, e, "backward");
      }),
      isRTL: state.isRTL
    }));
    scrollButtonAtEnd = h(ScrollButton, _extends({}, {
      key: "forward",
      icon: attrs.scrollIconForward,
      className: classes.scrollButtonAtEnd,
      position: "end",
      register: state.registerScrollButton(state),
      events: _defineProperty({}, k.onclick, function (e) {
        return handleScrollButtonClick(state, attrs, e, "forward");
      }),
      isRTL: state.isRTL
    }));
  }

  var tabIndicator = attrs.hideIndicator ? null : h("div", {
    key: "indicator",
    className: classes.indicator
  });

  return [attrs.scrollable ? scrollButtonAtStart : null, h("div", {
    key: "tabrow",
    className: [classes.tabRow, attrs.centered ? classes.tabRowCentered : null, attrs.scrollable ? classes.tabRowIndent : null].join(" ")
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonAtEnd : null];
};

var tabs = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Don't export 'element': it will be the wrapped Button component (set in polythene-xxx-tabs/tab)

var onMount$1 = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var dom = vnode.dom;
  var attrs = vnode.attrs;
  attrs.register(attrs.index, {
    attrs: attrs,
    dom: dom
  });
};

var createProps$1 = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events[k.onclick] = attrs.events[k.onclick] || function () {};
  return _extends$1({}, attrs, {
    content: h("div", { className: classes.tabContent }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.label ? h("div", { className: classes.label }, h("span", attrs.label)) : null]),
    className: [classes.tab, attrs.icon && attrs.label ? classes.tabHasIcon : null, attrs.className || attrs[k.class]].join(" "),
    selected: attrs.selected,
    wash: false,
    ripple: true,
    events: _extends$1({}, attrs.events, _defineProperty$1({}, k.onclick, function (e) {
      attrs.onSelect();
      attrs.events[k.onclick](e);
    }))
  });
};

var createContent$1 = function createContent(vnode) {
  return vnode.children;
};

var tab = /*#__PURE__*/Object.freeze({
  onMount: onMount$1,
  createProps: createProps$1,
  createContent: createContent$1
});

// Don't export 'element': it will be the wrapped IconButton component (set in polythene-xxx-tabs/scroll-button)

var arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
var arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";

var onMount$2 = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var dom = vnode.dom;
  var attrs = vnode.attrs;
  attrs.register(attrs.position, dom);
};

var createProps$2 = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys;

  var attrs = vnode.attrs;
  var icon = attrs.position === "start" ? attrs.icon || { svg: { content: h.trust(attrs.isRTL ? arrowForward : arrowBackward) } } : attrs.icon || { svg: { content: h.trust(attrs.isRTL ? arrowBackward : arrowForward) } };
  return {
    className: [classes.scrollButton, attrs.className || attrs[k.class]].join(" "),
    icon: icon,
    ripple: { center: true },
    events: attrs.events
  };
};

var scrollButton = /*#__PURE__*/Object.freeze({
  onMount: onMount$2,
  createProps: createProps$2
});




/***/ }),

/***/ "../../polythene-core-textfield/dist/polythene-core-textfield.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-textfield/dist/polythene-core-textfield.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: coreTextField */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreTextField", function() { return textfield; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var DEFAULT_VALID_STATE = {
  invalid: false,
  message: undefined
};

var validateCustom = function validateCustom(state, attrs) {
  var el = state.inputEl();
  if (!el) {
    return DEFAULT_VALID_STATE;
  }
  var validState = attrs.validate(state.inputEl().value);
  return {
    invalid: validState && !validState.valid,
    message: validState && validState.error
  };
};

var validateCounter = function validateCounter(state, attrs) {
  return {
    invalid: state.inputEl().value.length > attrs.counter,
    message: attrs.error
  };
};

var validateHTML = function validateHTML(state, attrs) {
  return {
    invalid: !state.inputEl().checkValidity(),
    message: attrs.error
  };
};

var getValidStatus = function getValidStatus(state, attrs) {
  var status = DEFAULT_VALID_STATE;

  // attrs.validateResetOnClear: reset validation when field is cleared
  if (state.isTouched() && state.isInvalid() && state.inputEl().value.length === 0 && attrs.validateResetOnClear) {
    state.isTouched(false);
    state.isInvalid(false);
    state.error(undefined);
  }
  if (!status.invalid && attrs.counter) {
    status = validateCounter(state, attrs);
  }
  if (!status.invalid && state.inputEl() && state.inputEl().checkValidity) {
    status = validateHTML(state, attrs);
  }
  if (!status.invalid && attrs.validate) {
    status = validateCustom(state, attrs);
  }
  return status;
};

var checkValidity = function checkValidity(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  // default
  var status = attrs.valid !== undefined ? {
    invalid: !attrs.valid,
    message: attrs.error
  } : !state.isTouched() && !attrs.validateAtStart ? DEFAULT_VALID_STATE : getValidStatus(state, attrs);
  var previousInvalid = state.isInvalid();
  state.error(status.message);
  if (status.invalid !== previousInvalid) {
    state.isInvalid(status.invalid);
  }
  if (!status.invalid) {
    state.error(undefined);
  }
};

var notifyState = function notifyState(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.onChange) {
    var status = getValidStatus(state, attrs);
    attrs.onChange({
      focus: state.hasFocus(),
      dirty: state.isDirty(),
      el: state.inputEl(),
      invalid: status.invalid,
      error: status.error,
      value: state.inputEl().value,
      setInputState: function setInputState(newState) {
        var hasNewValue = newState.value !== undefined && newState.value !== state.inputEl().value;
        var hasNewFocus = newState.focus !== undefined && newState.focus !== state.hasFocus();
        if (hasNewValue || hasNewFocus) {
          state.setInputState(_extends({}, newState, { vnode: vnode }));
        }
      }
    });
  }
};

var ignoreEvent = function ignoreEvent(attrs, name) {
  return attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;
};

var getInitialState = function getInitialState(vnode, createStream, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;

  var defaultValue = attrs.defaultValue !== undefined && attrs.defaultValue !== null ? attrs.defaultValue.toString() : attrs.value !== undefined && attrs.value !== null ? attrs.value.toString() : "";

  var el = createStream(null);
  var inputEl = createStream(null);
  var setInputState = createStream({});
  var error = createStream(attrs.error);
  var hasFocus = createStream(false);
  var isTouched = createStream(false); // true when any change is made
  var isDirty = createStream(defaultValue !== ""); // true for any input
  var isInvalid = createStream(false);
  var previousValue = createStream(undefined);
  var didSetFocusTime = 0;
  var showErrorPlaceholder = !!(attrs.valid !== undefined || attrs.validate || attrs.min || attrs.max || attrs[k.minlength] || attrs[k.maxlength] || attrs.required || attrs.pattern);

  return {
    defaultValue: defaultValue,
    didSetFocusTime: didSetFocusTime,
    el: el,
    error: error,
    hasFocus: hasFocus,
    inputEl: inputEl,
    isDirty: isDirty,
    isInvalid: isInvalid,
    isTouched: isTouched,
    previousValue: previousValue,
    setInputState: setInputState,
    showErrorPlaceholder: showErrorPlaceholder,
    redrawOnUpdate: createStream.merge([inputEl, isInvalid, isDirty])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.el(dom);
  var inputType = attrs.multiLine ? "textarea" : "input";
  var inputEl = dom.querySelector(inputType);
  vnode.state.inputEl(inputEl);
  state.inputEl().value = state.defaultValue;

  state.setInputState.map(function (_ref2) {
    var vnode = _ref2.vnode,
        type = _ref2.type,
        focus = _ref2.focus,
        value = _ref2.value;

    if (vnode) {
      value !== undefined ? state.inputEl().value = value : null;
      focus !== undefined && (state.hasFocus(focus), focus ? state.inputEl().focus() : state.inputEl().blur());
      type === "input" && (attrs.validateOnInput || attrs.counter) && state.isTouched(state.inputEl().value !== state.defaultValue);
      type !== "input" && state.isTouched(state.inputEl().value !== state.defaultValue);
      type === "onblur" && state.isTouched(true);
      state.isDirty(state.inputEl().value !== "");
      checkValidity(vnode);
      notifyState(vnode);
      state.previousValue(state.inputEl().value);
    }
  });
  notifyState(vnode);
};

var onUpdate = function onUpdate(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  checkValidity(vnode);

  var inputEl = state.inputEl();
  var value = attrs.value !== undefined && attrs.value !== null ? attrs.value : inputEl ? inputEl.value : state.previousValue();
  var valueStr = value === undefined || value === null ? "" : value.toString();

  if (inputEl && state.previousValue() !== valueStr) {
    inputEl.value = valueStr;
    state.previousValue(valueStr);
    state.setInputState({ vnode: vnode, type: "input" });
  }
};

var createProps = function createProps(vnode, _ref3) {
  var k = _ref3.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var isInvalid = state.isInvalid();

  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, isInvalid ? classes.stateInvalid : "", state.hasFocus() ? classes.stateFocused : "", state.isDirty() ? classes.stateDirty : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.disabled ? classes.stateDisabled : "", attrs.readonly ? classes.stateReadonly : "", attrs.dense ? classes.isDense : "", attrs.required ? classes.isRequired : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.counter ? classes.hasCounter : "", attrs.hideSpinner !== false && attrs.hideSpinner !== undefined ? classes.hideSpinner : "", attrs.hideClear !== false && attrs.hideClear !== undefined ? classes.hideClear : "", attrs.hideValidation ? classes.hideValidation : "", attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref4) {
  var h = _ref4.renderer,
      k = _ref4.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var inputEl = state.inputEl();
  var error = attrs.error || state.error();
  var isInvalid = state.isInvalid();
  var inputType = attrs.multiLine ? "textarea" : "input";
  var type = attrs.multiLine ? null : !attrs.type || attrs.type === "submit" || attrs.type === "search" ? "text" : attrs.type;
  var showError = isInvalid && error !== undefined;

  var inactive = attrs.disabled || attrs[k.readonly];

  var requiredIndicator = attrs.required && attrs.requiredIndicator !== "" ? h("span", {
    key: "required",
    className: classes.requiredIndicator
  }, attrs.requiredIndicator || "*") : null;
  var optionalIndicator = !attrs.required && attrs.optionalIndicator ? h("span", {
    key: "optional",
    className: classes.optionalIndicator
  }, attrs.optionalIndicator) : null;
  var label = attrs.label ? [attrs.label, requiredIndicator, optionalIndicator] : null;

  return [h("div", {
    className: classes.inputArea,
    key: "input-area"
  }, [label ? h("label", {
    key: "label",
    className: classes.label
  }, label) : null, h(inputType, _extends({}, {
    key: "input",
    className: classes.input,
    disabled: attrs.disabled
  }, type ? { type: type } : null, attrs.name ? { name: attrs.name } : null, !ignoreEvent(attrs, k.onclick) ? _defineProperty({}, k.onclick, function () {
    if (inactive) {
      return;
    }
    // in case the browser does not give the field focus,
    // for instance when the user tapped to the current field off screen
    state.setInputState({ vnode: vnode, focus: true });
    notifyState(vnode);
  }) : null, !ignoreEvent(attrs, k.onfocus) ? _defineProperty({}, k.onfocus, function () {
    if (inactive) {
      return;
    }
    state.setInputState({ vnode: vnode, focus: true });

    // set CSS class manually in case field gets focus but is off screen
    // and no redraw is triggered
    // at the next redraw state.hasFocus() will be read and the focus class be set
    // in the props.class statement
    if (state.el()) {
      state.el().classList.add(classes.stateFocused);
    }
    notifyState(vnode);
  }) : null, !ignoreEvent(attrs, k.onblur) ? _defineProperty({}, k.onblur, function () {
    state.setInputState({ vnode: vnode, type: "onblur", focus: false });
    // same principle as onfocus
    state.el().classList.remove(classes.stateFocused);
  }) : null, !ignoreEvent(attrs, k.oninput) ? _defineProperty({}, k.oninput, function () {
    // default input event
    // may be overwritten by attrs.events
    state.setInputState({ vnode: vnode, type: "input" });
  }) : null, !ignoreEvent(attrs, k.onkeydown) ? _defineProperty({}, k.onkeydown, function (e) {
    if (e.key === "Enter") {
      state.isTouched(true);
    } else if (e.key === "Escape" || e.key === "Esc") {
      state.setInputState({ vnode: vnode, focus: false });
    }
  }) : null, attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
  attrs.required !== undefined && !!attrs.required ? { required: true } : null, attrs[k.readonly] !== undefined && !!attrs[k.readonly] ? _defineProperty({}, k.readonly, true) : null, attrs.pattern !== undefined ? { pattern: attrs.pattern } : null, attrs[k.maxlength] !== undefined ? _defineProperty({}, k.maxlength, attrs[k.maxlength]) : null, attrs[k.minlength] !== undefined ? _defineProperty({}, k.minlength, attrs[k.minlength]) : null, attrs.max !== undefined ? { max: attrs.max } : null, attrs.min !== undefined ? { min: attrs.min } : null, attrs[k.autofocus] !== undefined ? _defineProperty({}, k.autofocus, attrs[k.autofocus]) : null, attrs[k.tabindex] !== undefined ? _defineProperty({}, k.tabindex, attrs[k.tabindex]) : null, attrs.rows !== undefined ? { rows: attrs.rows } : null))]), attrs.counter ? h("div", {
    key: "counter",
    className: classes.counter
  }, (inputEl && inputEl.value.length || 0) + " / " + attrs.counter) : null, attrs.help && !showError ? h("div", {
    key: "help",
    className: [classes.help, attrs.focusHelp ? classes.focusHelp : null].join(" ")
  }, attrs.help) : null, showError ? h("div", {
    key: "error",
    className: classes.error
  }, error) : state.showErrorPlaceholder && !attrs.help ? h("div", {
    key: "error-placeholder",
    className: classes.errorPlaceholder
  }) : null];
};

var textfield = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUpdate: onUpdate,
  createProps: createProps,
  createContent: createContent
});




/***/ }),

/***/ "../../polythene-core-toolbar/dist/polythene-core-toolbar.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-toolbar/dist/polythene-core-toolbar.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: coreToolbar, coreToolbarTitle */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreToolbar", function() { return toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreToolbarTitle", function() { return toolbarTitle; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var classes = {

  // Toolbar

  component: "pe-toolbar",

  // states
  compact: "pe-toolbar--compact",
  appBar: "pe-toolbar--app-bar",

  // Toolbar title

  // elements
  title: "pe-toolbar__title",

  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent",
  fullbleed: "pe-toolbar--fullbleed",
  border: "pe-toolbar--border"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.component, attrs.compact ? classes.compact : null, attrs.fullbleed ? classes.fullbleed : null, attrs.border ? classes.border : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var renderer = _ref2.renderer,
      Shadow = _ref2.Shadow;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var shadow = attrs.z !== undefined ? renderer(Shadow, {
    z: attrs.z,
    animated: true,
    key: "shadow"
  }) : null;
  return [content, shadow];
};

var toolbar = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createProps: createProps,
  createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement$1 = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps$1 = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends$1({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(attrs), {
    className: [classes.title, attrs.indent ? classes.indentedTitle : null, attrs.center ? classes.centeredTitle : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent$1 = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.text ? attrs.text : attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var toolbarTitle = /*#__PURE__*/Object.freeze({
  getElement: getElement$1,
  createProps: createProps$1,
  createContent: createContent$1
});




/***/ }),

/***/ "../../polythene-core/dist/polythene-core.mjs":
/*!*********************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core/dist/polythene-core.mjs ***!
  \*********************************************************************************************************************/
/*! exports provided: getAnimationEndEvent, Conditional, filterSupportedAttributes, unpackAttrs, classForSize, isClient, isServer, isTouch, pointerStartEvent, pointerEndEvent, pointerStartMoveEvent, pointerMoveEvent, pointerEndMoveEvent, Multi, show, hide, transitionComponent, throttle, subscribe, unsubscribe, emit, getStyle, isRTL, styleDurationToMs, deprecation, iconDropdownUp, iconDropdownDown */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimationEndEvent", function() { return getAnimationEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conditional", function() { return Conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSupportedAttributes", function() { return filterSupportedAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackAttrs", function() { return unpackAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classForSize", function() { return classForSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerStartEvent", function() { return pointerStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerEndEvent", function() { return pointerEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerStartMoveEvent", function() { return pointerStartMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerMoveEvent", function() { return pointerMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerEndMoveEvent", function() { return pointerEndMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multi", function() { return Multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionComponent", function() { return transitionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribe", function() { return unsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleDurationToMs", function() { return styleDurationToMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecation", function() { return deprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconDropdownUp", function() { return iconDropdownUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconDropdownDown", function() { return iconDropdownDown; });
var isClient = typeof document !== "undefined";
var isServer = !isClient;

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

var getAnimationEndEvent = function getAnimationEndEvent() {
  if (isClient) {
    var el = document.createElement("fakeelement");
    for (var a in evts) {
      if (el.style[a] !== undefined) {
        return evts[a];
      }
    }
  }
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var modes = {
  hidden: "hidden",
  visible: "visible",
  exposing: "exposing",
  hiding: "hiding"
};

var Conditional = {
  getInitialState: function getInitialState(vnode, createStream) {
    var attrs = vnode.attrs;
    if (!attrs.didHide) {
      return {};
    }
    var visible = attrs.permanent || attrs.show;
    var mode = createStream(attrs.permanent ? modes.visible : visible ? modes.visible : modes.hidden);
    return {
      mode: mode,
      redrawOnUpdate: createStream.merge([mode])
    };
  },
  onUpdate: function onUpdate(_ref) {
    var state = _ref.state,
        attrs = _ref.attrs;

    if (!attrs.didHide) {
      return;
    }
    var mode = state.mode();
    if (attrs.permanent) {
      if (mode === modes.visible && attrs.show) {
        state.mode(modes.exposing);
      } else if (mode === modes.exposing && !attrs.show) {
        state.mode(modes.hiding);
      }
    } else {
      // "normal" type
      if (mode === modes.hidden && attrs.show) {
        state.mode(modes.visible);
      } else if (mode === modes.visible && !attrs.show) {
        state.mode(modes.hiding);
      }
    }
  },
  view: function view(_ref2, _ref3) {
    var state = _ref2.state,
        attrs = _ref2.attrs;
    var h = _ref3.renderer;

    var placeholder = h("span", { className: attrs.placeholderClassName });

    // No didHide callback passed: use normal visibility evaluation
    if (!attrs.didHide) {
      return attrs.permanent || attrs.inactive || attrs.show ? h(attrs.instance, attrs) : placeholder;
    }

    // else: use didHide to reset the state after hiding
    var mode = state.mode();
    var visible = mode !== modes.hidden;
    return visible ? h(attrs.instance, _extends({}, attrs, {
      didHide: function didHide(args) {
        return attrs.didHide(args), state.mode(attrs.permanent ? modes.visible : modes.hidden);
      }
    }, mode === modes.hiding && {
      show: true,
      hide: true
    })) : placeholder;
  }
};

Conditional.displayName = "Conditional";

var r = function r(acc, p) {
  return acc[p] = 1, acc;
};

/* 
Separately handled props:
- class
- element
*/

var defaultAttrs = [
// Universal
"key", "style", "href", "id",

// React
"tabIndex",

// Mithril
"tabindex", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"];

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$add = _ref.add,
      addAttrs = _ref$add === undefined ? [] : _ref$add,
      _ref$remove = _ref.remove,
      removeAttrs = _ref$remove === undefined ? [] : _ref$remove;

  var removeLookup = removeAttrs.reduce(r, {});
  var supported = defaultAttrs.concat(addAttrs).filter(function (item) {
    return !removeLookup[item];
  }).reduce(r, {});
  return Object.keys(attrs).reduce(function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

var unpackAttrs = function unpackAttrs(attrs) {
  return typeof attrs === "function" ? attrs() : attrs;
};

var sizeClasses = function sizeClasses(classes) {
  return {
    small: classes.small,
    regular: classes.regular,
    medium: classes.medium,
    large: classes.large,
    fab: classes.fab
  };
};

var classForSize = function classForSize(classes) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "regular";
  return sizeClasses(classes)[size];
};

var isTouch = isServer ? false : "ontouchstart" in document.documentElement;

var pointerStartEvent = isTouch ? ["touchstart", "click"] : ["click"];

var pointerEndEvent = isTouch ? ["click", "mouseup"] : ["mouseup"];

var pointerStartMoveEvent = isTouch ? ["touchstart", "mousedown"] : ["mousedown"];

var pointerMoveEvent = isTouch ? ["touchmove", "mousemove"] : ["mousemove"];

var pointerEndMoveEvent = isTouch ? ["touchend", "mouseup"] : ["mouseup"];

if (isClient) {
  document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");
}

var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isClient ? window : {};

  var wait = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      return func.apply(context, args);
    };
    if (!wait) {
      later();
      wait = true;
      setTimeout(function () {
        return wait = false;
      }, s);
    }
  };
};

var subscribe = function subscribe(eventName, listener, delay) {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
  if (!listeners[eventName]) {
    return;
  }
  var index = listeners[eventName].indexOf(listener);
  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};

var emit = function emit(eventName, event) {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient) {
  window.addEventListener("resize", function (e) {
    return emit("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit("keydown", e);
  });
  window.addEventListener(pointerEndEvent, function (e) {
    return emit(pointerEndEvent, e);
  });
}

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Multi = function Multi(_ref) {
  var mOptions = _ref.options,
      renderer = _ref.renderer;


  var items = []; // This is shared between all instances of a type (Dialog, Notification, ...)
  var current = void 0;

  var getInitialState = function getInitialState(vnode, createStream) {
    current = createStream(null);
    return {
      current: current,
      redrawOnUpdate: createStream.merge([current])
    };
  };

  /*
  @param e: { id, eventName }
  */
  var onChange = function onChange(e) {
    if (!current) {
      console.error("Cannot set state. Did you set a root element like Dialog to show instances?"); // eslint-disable-line no-console
    }
    current(e.id);
    emit(mOptions.name, e);
  };

  var itemIndex = function itemIndex(id) {
    var item = findItem(id);
    return items.indexOf(item);
  };

  var removeItem = function removeItem(id) {
    var index = itemIndex(id);
    if (index !== -1) {
      items.splice(index, 1);
      onChange({ id: id, name: "removeItem" });
    }
  };

  var replaceItem = function replaceItem(id, newItem) {
    var index = itemIndex(id);
    if (index !== -1) {
      items[index] = newItem;
    }
  };

  var findItem = function findItem(id) {
    // traditional for loop for IE10
    for (var i = 0; i < items.length; i++) {
      if (items[i].instanceId === id) {
        return items[i];
      }
    }
  };

  var next = function next() {
    if (items.length) {
      items[0].show = true;
    }
    onChange({ id: items.length ? items[0].instanceId : null, name: "next" });
  };

  var remove = function remove() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;

    if (mOptions.queue) {
      items.shift();
      next();
    } else {
      removeItem(instanceId);
    }
  };

  var removeAll = function removeAll() {
    items.length = 0;
    onChange({ id: null, name: "removeAll" });
  };

  var setPauseState = function setPauseState(pause, instanceId) {
    var item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
      onChange({ id: instanceId, name: pause ? "pause" : "unpause" });
    }
  };

  var createItem = function createItem(itemAttrs, instanceId, spawn) {
    var resolveShow = void 0;
    var resolveHide = void 0;
    var attrs = unpackAttrs(itemAttrs);

    var didShow = function didShow() {
      if (attrs.didShow) {
        attrs.didShow(instanceId);
      }
      onChange({ id: instanceId, name: "didShow" });
      return resolveShow(instanceId);
    };
    var showPromise = new Promise(function (resolve) {
      return resolveShow = resolve;
    });

    var didHide = function didHide() {
      if (attrs.didHide) {
        attrs.didHide(instanceId);
      }
      onChange({ id: instanceId, name: "didHide" });
      remove(instanceId);
      return resolveHide(instanceId);
    };

    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    return _extends$1({}, mOptions, {
      instanceId: instanceId,
      spawn: spawn,
      attrs: itemAttrs,
      show: mOptions.queue ? false : true,
      showPromise: showPromise,
      hidePromise: hidePromise,
      didShow: didShow,
      didHide: didHide
    });
  };

  var count = function count() {
    return items.length;
  };
  var pause = function pause() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
    return setPauseState(true, instanceId);
  };
  var unpause = function unpause() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
    return setPauseState(false, instanceId);
  };

  var show = function show() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var spawnOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var instanceId = spawnOpts.id || mOptions.defaultId;
    var spawn = spawnOpts.spawn || mOptions.defaultId;
    var item = createItem(attrs, instanceId, spawn);
    onChange({ id: instanceId, name: "show" });
    if (mOptions.queue) {
      items.push(item);
      if (items.length === 1) {
        next();
      }
    } else {
      var storedItem = findItem(instanceId);
      if (!storedItem) {
        items.push(item);
      } else {
        replaceItem(instanceId, item);
      }
    }
    return item.showPromise;
  };

  var hide = function hide() {
    var spawnOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var instanceId = spawnOpts.id || mOptions.defaultId;
    var item = mOptions.queue && items.length ? items[0] : findItem(instanceId);
    if (item) {
      item.hide = true;
    }
    onChange({ id: instanceId, name: "hide" });
    return item ? item.hidePromise : Promise.resolve(instanceId);
  };

  var clear = removeAll;

  var view = function view(_ref2) {
    var attrs = _ref2.attrs;

    var spawn = attrs.spawn || mOptions.defaultId;
    var candidates = items.filter(function (item) {
      return item.show && item.spawn === spawn;
    });
    if (mOptions.htmlShowClass && isClient && document.documentElement) {
      document.documentElement.classList[candidates.length ? "add" : "remove"](mOptions.htmlShowClass);
    }
    return !candidates.length ? renderer(mOptions.placeholder) // placeholder because we cannot return null
    : renderer(mOptions.holderSelector, {
      className: attrs.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
    }, candidates.map(function (itemData) {
      return renderer(mOptions.instance, _extends$1({}, {
        fromMultipleClassName: mOptions.className,
        fromMultipleClear: clear,
        fromMultipleDidHide: itemData.didHide,
        fromMultipleDidShow: itemData.didShow,
        hide: itemData.hide,
        holderSelector: mOptions.holderSelector,
        instanceId: itemData.instanceId,
        key: itemData.key,
        pause: itemData.pause,
        show: itemData.show,
        spawnId: spawn,
        transitions: mOptions.transitions,
        unpause: itemData.unpause
      }, unpackAttrs(itemData.attrs)));
    }));
  };

  return {
    clear: clear,
    count: count,
    getInitialState: getInitialState,
    hide: hide,
    pause: pause,
    remove: remove,
    show: show,
    unpause: unpause,
    view: view
  };
};

Multi.displayName = "Multi";

var getStyle = function getStyle(_ref) {
  var _ref$element = _ref.element,
      element = _ref$element === undefined ? document : _ref$element,
      selector = _ref.selector,
      prop = _ref.prop;

  var el = selector ? element.querySelector(selector) : element;
  if (!el) {
    return;
  }
  return el.currentStyle ? el.currentStyle[prop] : window.getComputedStyle ? document.defaultView.getComputedStyle(el, null).getPropertyValue(prop) : null;
};

var isRTL = function isRTL(_ref2) {
  var _ref2$element = _ref2.element,
      element = _ref2$element === undefined ? document : _ref2$element,
      selector = _ref2.selector;
  return getStyle({ element: element, selector: selector, prop: "direction" }) === "rtl";
};

var styleDurationToMs = function styleDurationToMs(durationStr) {
  var parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed) ? 0 : parsed;
};

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// defaults
var DEFAULT_DURATION = .240;
var DEFAULT_DELAY = 0;
// const TRANSITION =    "both";

// See: transition
var show = function show(opts) {
  return transition(opts, "show");
};

var hide = function hide(opts) {
  return transition(opts, "hide");
};

/*
opts:
- el
- duration
- delay
- showClass
- before
- show
- hide
- after
- timingFunction

- state (show, hide)
*/
var transition = function transition(opts, state) {
  var el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve) {
      var style = el.style;
      var computedStyle = isClient ? window.getComputedStyle(el) : {};
      var duration = opts.hasDuration ? opts.duration * 1000.0 : styleDurationToMs(computedStyle.transitionDuration);
      var delay = opts.hasDelay ? opts.delay * 1000.0 : styleDurationToMs(computedStyle.transitionDelay);
      var timingFunction = opts.timingFunction || computedStyle.transitionTimingFunction;

      var before = opts.before && state === "show" ? function () {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
        opts.before();
      } : opts.before && state === "hide" ? function () {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
        opts.before();
      } : null;

      var after = opts.after ? function () {
        return opts.after();
      } : null;

      var applyTransition = function applyTransition() {
        style.transitionDuration = duration + "ms";
        style.transitionDelay = delay + "ms";

        if (timingFunction) {
          style.transitionTimingFunction = timingFunction;
        }
        if (opts.showClass) {
          var showClassElement = opts.showClassElement || el;
          showClassElement.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }
        if (opts.transition) {
          opts.transition();
        }
      };

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          if (after) {
            after();
          }
          resolve();
        }, duration + delay);
      };

      var maybeDelayTransition = function maybeDelayTransition() {
        if (duration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (before) {
        before();
        el.offsetHeight; // force reflow
        setTimeout(function () {
          maybeDelayTransition();
        }, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};

var transitionComponent = function transitionComponent(_ref) {
  var isShow = _ref.isShow,
      state = _ref.state,
      attrs = _ref.attrs,
      domElements = _ref.domElements,
      beforeTransition = _ref.beforeTransition,
      afterTransition = _ref.afterTransition,
      showClass = _ref.showClass;

  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  state.visible(isShow ? true : false);
  if (beforeTransition) {
    beforeTransition();
  }
  var duration = attrs[isShow ? "showDuration" : "hideDuration"];
  var delay = attrs[isShow ? "showDelay" : "hideDelay"];
  var timingFunction = attrs[isShow ? "showTimingFunction" : "hideTimingFunction"];
  var transitions = attrs.transitions;
  var fn = isShow ? show : hide;
  var opts1 = _extends$2({}, attrs, domElements, {
    showClass: showClass,
    duration: duration,
    delay: delay,
    timingFunction: timingFunction
  });
  var opts2 = _extends$2({}, opts1, transitions && transitions[isShow ? "show" : "hide"](opts1));
  var opts3 = _extends$2({}, opts2, {
    duration: opts2.duration !== undefined ? opts2.duration : DEFAULT_DURATION,
    hasDuration: opts2.duration !== undefined,
    delay: opts2.delay !== undefined ? opts2.delay : DEFAULT_DELAY,
    hasDelay: opts2.delay !== undefined
  });
  return fn(opts3).then(function () {
    var id = state.instanceId;
    if (attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"]) {
      attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"](id); // when used with Multiple; this will call attrs.didShow / attrs.didHide
    } else if (attrs[isShow ? "didShow" : "didHide"]) {
      attrs[isShow ? "didShow" : "didHide"](id); // when used directly
    }
    if (afterTransition) {
      afterTransition();
    }
    state.transitioning(false);
  });
};

var deprecation = function deprecation(component, deprecatedOption, newOption) {
  return console.warn(component + ": option '" + deprecatedOption + "' is deprecated and will be removed in later versions. Use '" + newOption + "' instead.");
}; // eslint-disable-line no-console

var iconDropdownUp = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-up-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
var iconDropdownDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-down-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";




/***/ }),

/***/ "../../polythene-css-base-spinner/dist/polythene-css-base-spinner.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-base-spinner/dist/polythene-css-base-spinner.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint + "_raised_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-spinner--raised": {
        backgroundColor: vars$$1["color_" + tint + "_raised_background"]
      }
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sizes = function sizes(size) {
  return {
    width: size + "px",
    height: size + "px"
  };
};

var raisedSize = function raisedSize(size) {
  var padding = Math.round(size * 0.25); // only use rounded number to prevent sub-pixel alignment issues
  var paddedSize = size + padding * 2;
  return {
    width: paddedSize + "px",
    height: paddedSize + "px",
    padding: padding + "px"
  };
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      transitionProperty: "all",

      ".pe-spinner--raised": {
        position: "relative",
        borderRadius: "50%"
      }
    })];
  },
  animation_show_css: function animation_show_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-spinner--visible, &.pe-spinner--permanent": [vars$$1.animation_show_css]
    })];
  },
  animation_hide_css: function animation_hide_css(selector, vars$$1) {
    return _defineProperty$1({}, selector, vars$$1.animation_hide_css);
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      transitionDelay: vars$$1.animation_delay
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      transitionDuration: vars$$1.animation_duration
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      transitionTimingFunction: vars$$1.animation_timing_function
    })];
  },
  size_small: function size_small(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-spinner--small": sizes(vars$$1.size_small),

      ".pe-spinner--raised": {
        ".pe-spinner--small": raisedSize(vars$$1.size_small)
      }
    })];
  },
  size_regular: function size_regular(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-spinner--regular": sizes(vars$$1.size_regular),

      ".pe-spinner--raised": {
        ".pe-spinner--regular": raisedSize(vars$$1.size_regular)
      }
    })];
  },
  size_medium: function size_medium(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-spinner--medium": sizes(vars$$1.size_medium),

      ".pe-spinner--raised": {
        ".pe-spinner--medium": raisedSize(vars$$1.size_medium)
      }
    })];
  },
  size_large: function size_large(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-spinner--large": sizes(vars$$1.size_large),

      ".pe-spinner--raised": {
        ".pe-spinner--large": raisedSize(vars$$1.size_large)
      }
    })];
  },
  size_fab: function size_fab(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-spinner--fab": sizes(vars$$1.size_fab),

      ".pe-spinner--raised": {
        ".pe-spinner--fab": raisedSize(vars$$1.size_fab)
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_delay: "0s",
  animation_duration: ".220s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  size_fab: 7 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  size_large: 6 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  size_medium: 5 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  size_regular: 4 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  size_small: 3 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,

  color_light_raised_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background),
  color_dark_raised_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background) // also use light background with dark tone
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-button-group/dist/polythene-css-button-group.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-button-group/dist/polythene-css-button-group.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: addStyle, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");


var classes = {
  component: "pe-button-group"
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      display: "flex"
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars = {
  general_styles: true
};

var fns = [layout];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});




/***/ }),

/***/ "../../polythene-css-button/dist/polythene-css-button.mjs":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-button/dist/polythene-css-button.mjs ***!
  \*********************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      userSelect: "none",
      "-moz-user-select": "none",
      outline: "none",
      padding: 0,
      textDecoration: "none",
      textAlign: "center",
      cursor: "pointer",

      ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
        cursor: "default",
        pointerEvents: "none"
      },

      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      },

      " .pe-button__content": {
        position: "relative",
        borderRadius: "inherit"
      },

      " .pe-button__label": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fontSmoothing(), {
        position: "relative",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none"
      }],

      " .pe-button__wash, .pe-button__focus": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
        borderRadius: "inherit",
        pointerEvents: "none"
      }],

      " .pe-button__focus": {
        opacity: 0
      },

      " .pe-button__wash": {
        zIndex: 0
      }
    }), {
      ".pe-button-row": {
        // prevent inline block style to add extra space:
        fontSize: 0,
        lineHeight: 0
      }
    }];
  },
  row_margin_h: function row_margin_h(selector, vars$$1) {
    return [{
      ".pe-button-row": _defineProperty({
        margin: "0 -" + vars$$1.row_margin_h + "px"

      }, " " + selector, {
        margin: "0 " + vars$$1.row_margin_h + "px"
      })
    }];
  }
};

var baseLayout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var classes = {
    component: "pe-text-button",
    super: "pe-button",
    row: "pe-button-row",

    // elements      
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states      
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    extraWide: "pe-button--extra-wide",
    separatorAtStart: "pe-button--separator-start",
    dropdownOpen: "pe-button--dropdown-open",
    dropdownClosed: "pe-button--dropdown-closed"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: 1
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty$1(_ref, "color_" + tint + "_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars$$1["color_" + tint + "_text"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_disabled_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--disabled": {
        color: vars$$1["color_" + tint + "_disabled_text"]
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-button--disabled)": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_focus_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__focus": {
        backgroundColor: vars$$1["color_" + tint + "_focus_background"]
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_active_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_active_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_disabled_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_disabled_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--border:not(.pe-button--disabled)": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_border"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_active_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--border.pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_active_border"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_disabled_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--border.pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_disabled_border"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_icon", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__dropdown": {
        color: vars$$1["color_" + tint + "_icon"]
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_separator", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_separator"]
        }
      }
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_hover", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars$$1["color_" + tint + "_hover"]
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_hover_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content": {
        borderColor: vars$$1["color_" + tint + "_hover_border"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_wash_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__wash": {
        backgroundColor: vars$$1["color_" + tint + "_wash_background"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_hover_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_hover_background"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_hover_icon", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__dropdown": {
        color: vars$$1["color_" + tint + "_hover_icon"]
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns, lightTintHoverFns: lightTintHoverFns, darkTintHoverFns: darkTintHoverFns }
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      ".pe-button--separator-start .pe-button__content": {
        borderStyle: isRTL ? "none solid none none" : "none none none solid"
      }
    };
  };
};
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var line_height_label_padding_v = function line_height_label_padding_v(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-button__dropdown": {
      minHeight: "calc((1em * " + vars$$1.line_height + ") + 2 * " + vars$$1.label_padding_v + "px)"
    }
  });
};

var outer_padding_v_label_padding_v = function outer_padding_v_label_padding_v(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-button--high-label": {
      padding: 0,

      " .pe-button__label": {
        padding: vars$$1.outer_padding_v + vars$$1.label_padding_v + "px 0"
      }
    }
  });
};

var line_height_outer_padding_v_label_padding_v = function line_height_outer_padding_v_label_padding_v(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-button--high-label": {
      " .pe-button__label, .pe-button__dropdown": {
        minHeight: "calc((1em * " + vars$$1.line_height + ") + 2 * " + (vars$$1.outer_padding_v + vars$$1.label_padding_v) + "px)"
      }
    }
  });
};

var border_radius_button_group = function border_radius_button_group(selector, vars$$1, isRTL) {
  var _peButton__content, _peButton__content2;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-button__content": {
      borderRadius: vars$$1.border_radius + "px"
    },
    ":not(:first-child)": {
      " .pe-button__content": (_peButton__content = {}, _defineProperty$2(_peButton__content, isRTL ? "borderTopRightRadius" : "borderTopLeftRadius", 0), _defineProperty$2(_peButton__content, isRTL ? "borderBottomRightRadius" : "borderBottomLeftRadius", 0), _peButton__content)
    },
    ":not(:last-child)": {
      " .pe-button__content": (_peButton__content2 = {}, _defineProperty$2(_peButton__content2, isRTL ? "borderTopLeftRadius" : "borderTopRightRadius", 0), _defineProperty$2(_peButton__content2, isRTL ? "borderBottomLeftRadius" : "borderBottomRightRadius", 0), _peButton__content2)
    }
  });
};

var varFns$1 = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(), {
      display: "inline-block",
      background: "transparent",
      border: "none",

      " .pe-button__content": {
        position: "relative",
        borderWidth: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },

      ".pe-button--border": {
        " .pe-button__wash, .pe-button__focus, .pe-ripple": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(-1),

        " .pe-button__content": {
          borderStyle: "solid",
          borderWidth: "1px"
        }
      },

      " .pe-button__label, .pe-button__dropdown": {
        whiteSpace: "pre",
        userSelect: "none",
        "-moz-user-select": "none"
      },

      ".pe-button--dropdown": {
        minWidth: "0", // IE 11 does not recognize "initial" here

        " .pe-button__dropdown": {
          position: "relative"
        },

        " .pe-svg": {
          position: "absolute",
          left: 0,
          top: "50%"
        },

        " .pe-button__label + .pe-button__dropdown": {
          marginLeft: "6px",
          minWidth: 0
        }
      },

      " .pe-button-group &": {
        minWidth: 0
      },

      " .pe-button__dropdown .pe-svg": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("transform"),

      ".pe-button--dropdown-open": {
        " .pe-button__dropdown .pe-svg": {
          transform: "rotate(-180deg)"
        }
      }
    }]), [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), alignRight())]];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content": {
        borderRadius: vars$$1.border_radius + "px"
      }
    }), border_radius_button_group(".pe-button-group " + selector, vars$$1, false), border_radius_button_group(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(".pe-button-group " + selector), vars$$1, true)];
  },
  border_width: function border_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--border": {
        " .pe-button__content": {
          borderWidth: vars$$1.border_width + "px"
        }
      }
    })];
  },
  min_width: function min_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      minWidth: vars$$1.min_width + "px"
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content, .pe-button__wash, .pe-button__focus": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("all", vars$$1.animation_duration)]
    })];
  },
  padding_h: function padding_h(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content": {
        padding: "0 " + vars$$1.padding_h + "px",

        " .pe-button__dropdown": {
          minWidth: "calc(36px - 2 * " + vars$$1.padding_h + "px)"
        },

        ".pe-button--dropdown": {
          " .pe-button__label + .pe-button__dropdown": {
            marginRight: "calc(7px - " + vars$$1.padding_h + "px)"
          }
        }
      }
    })];
  },
  padding_h_extra_wide: function padding_h_extra_wide(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--extra-wide .pe-button__content": {
        padding: "0 " + vars$$1.padding_h_extra_wide + "px"
      }
    })];
  },
  label_padding_v: function label_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__label": {
        padding: vars$$1.label_padding_v + "px 0"
      },

      ".pe-button--border": {
        " .pe-button__label": {
          padding: vars$$1.label_padding_v - 1 + "px 0"
        }
      }
    }), line_height_label_padding_v(selector, vars$$1), outer_padding_v_label_padding_v(selector, vars$$1), line_height_outer_padding_v_label_padding_v(selector, vars$$1)];
  },
  font_weight: function font_weight(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__label": {
        fontWeight: vars$$1.font_weight
      }
    })];
  },
  text_transform: function text_transform(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__label": {
        textTransform: vars$$1.text_transform
      }
    })];
  },
  font_size: function font_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        fontSize: vars$$1.font_size + "px"
      }
    })];
  },
  line_height: function line_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        lineHeight: vars$$1.line_height
      }
    }), line_height_label_padding_v(selector, vars$$1), line_height_outer_padding_v_label_padding_v(selector, vars$$1)];
  },
  dropdown_icon_size: function dropdown_icon_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--dropdown": {
        " .pe-button__dropdown": {
          width: vars$$1.dropdown_icon_size + "px"

        },
        " .pe-svg": {
          width: vars$$1.dropdown_icon_size + "px",
          height: vars$$1.dropdown_icon_size + "px",
          marginTop: -vars$$1.dropdown_icon_size / 2 + "px"
        }
      }
    })];
  },
  outer_padding_v: function outer_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      padding: vars$$1.outer_padding_v + "px 0",

      ".pe-button--high-label": {
        padding: 0
      }
    }), outer_padding_v_label_padding_v(selector, vars$$1), line_height_outer_padding_v_label_padding_v(selector, vars$$1)];
  },
  separator_width: function separator_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderWidth: vars$$1.separator_width + "px"
        }
      }
    })];
  },
  padding_h_border: function padding_h_border(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--border": {
        " .pe-button__content": {
          padding: "0 " + vars$$1.padding_h_border + "px"
        }
      }
    })];
  },
  letter_spacing: function letter_spacing(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      letterSpacing: vars$$1.letter_spacing + "px"
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns$1 });

var touch_height = polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_touch_height; // 48
var height = 36;

var vars$1 = {
  general_styles: true,

  animation_duration: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_duration,
  border_radius: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_item_border_radius,
  border_width: 1, // no border in MD, but used to correctly set the height when a theme does set a border
  dropdown_icon_size: 24,
  font_size: 14,
  font_weight: 500,
  label_padding_v: 9,
  letter_spacing: 0.75,
  line_height: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].line_height,
  min_width: 8 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  outer_padding_v: (touch_height - height) / 2, // (48 - 36) / 2 = 6
  padding_h: 2 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit, // 8
  padding_h_border: 4 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit, // 16
  padding_h_extra_wide: 6 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit, // 24
  row_margin_h: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit,
  separator_width: 1,
  text_transform: "uppercase",

  color_light_background: "transparent",
  color_light_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_wash_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_hover),
  color_light_focus_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_hover),
  color_light_active_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  color_light_icon: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_separator: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_border_light),

  color_dark_background: "transparent",
  color_dark_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_wash_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_hover),
  color_dark_focus_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_hover),
  color_dark_active_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled),
  color_dark_icon: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_separator: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_border_light),

  color_light_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_border_medium), // only specify this variable to get all 4 states
  // color_light_hover_border:             "transparent",
  // color_light_active_border:            "transparent",
  color_light_disabled_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  //
  color_dark_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_border_medium), // only specify this variable to get all 4 states
  // color_dark_hover_border:              "transparent",
  // color_dark_active_border:             "transparent",
  color_dark_disabled_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled)

  // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  // color_light_hover_background:         "transparent",
  // color_light_hover_icon:               "inherit",
  //
  // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  // color_dark_hover_background:          "transparent",
  // color_dark_hover_icon:                "inherit",

};

var fns = [layout, color];
var baseFns = [baseLayout];
var superSelector = "." + classes.super;
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, superSelector],
    fns: baseFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments[1];

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref2.mediaQuery;

  return polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, superSelector],
    fns: baseFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }).concat(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }));
};

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [superSelector],
  fns: baseFns,
  vars: vars$1
});
polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-card/dist/polythene-css-card.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-card/dist/polythene-css-card.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {
  component: "pe-card",

  // elements
  actions: "pe-card__actions",
  any: "pe-card__any",
  content: "pe-card__content",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  media: "pe-card__media",
  mediaDimmer: "pe-card__media__dimmer",
  overlay: "pe-card__overlay",
  overlayContent: "pe-card__overlay__content",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  title: "pe-card__title",

  // states
  actionsBorder: "pe-card__actions--border",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsJustified: "pe-card__actions--justified",
  actionsTight: "pe-card__actions--tight",
  actionsVertical: "pe-card__actions--vertical",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  mediaOriginStart: "pe-card__media--origin-start",
  mediaOriginCenter: "pe-card__media--origin-center",
  mediaOriginEnd: "pe-card__media--origin-end",
  mediaLarge: "pe-card__media--large",
  mediaMedium: "pe-card__media--medium",
  mediaRatioLandscape: "pe-card__media--landscape",
  mediaRatioSquare: "pe-card__media--square",
  mediaRegular: "pe-card__media--regular",
  mediaSmall: "pe-card__media--small",
  overlaySheet: "pe-card__overlay--sheet",
  primaryHasMedia: "pe-card__primary--media",
  primaryTight: "pe-card__primary--tight",
  textTight: "pe-card__text--tight"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint + "_main_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      backgroundColor: vars$$1["color_" + tint + "_main_background"]
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns$1 = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns$1 = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty$1(_ref, "color_" + tint + "_title_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__title": {
        color: vars$$1["color_" + tint + "_title_text"]
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_subtitle_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__subtitle": {
        color: vars$$1["color_" + tint + "_subtitle_text"]
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__text": {
        color: vars$$1["color_" + tint + "_text"]
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_actions_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__actions--border": {
        borderTop: "1px solid " + vars$$1["color_" + tint + "_actions_border"]
      }
    })];
  }), _ref;
};

var lightTintFns$1 = _extends$1({}, generalFns$1, tintFns$1("light"));
var darkTintFns$1 = _extends$1({}, generalFns$1, tintFns$1("dark"));

var contentColor = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns$1, darkTintFns: darkTintFns$1 }
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide() {
  return function () {
    return {};
  };
};
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var tight_title_padding_bottom_subtitle_line_height_padding_bottom = function tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-card__primary": {
      ".pe-card__primary--tight": {
        " .pe-card__title": {
          paddingBottom: vars$$1.tight_title_padding_bottom - vars$$1.subtitle_line_height_padding_bottom + "px"
        }
      }
    }
  });
};

var title_padding_v_title_padding_h_subtitle_line_height_padding_bottom = function title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-card__title": {
      padding: [vars$$1.title_padding_v, vars$$1.title_padding_h, vars$$1.title_padding_v - vars$$1.subtitle_line_height_padding_bottom, vars$$1.title_padding_h].map(function (v) {
        return v + "px";
      }).join(" ")
    }
  });
};

var text_padding_v_text_line_height_padding_top = function text_padding_v_text_line_height_padding_top(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-card__text": {
      paddingTop: vars$$1.text_padding_v - vars$$1.text_line_height_padding_top + "px"
    }
  });
};

var text_padding_bottom_text_line_height_padding_bottom = function text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-card__text": {
      "&:last-child": {
        paddingBottom: vars$$1.text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px"
      }
    }
  });
};

var tight_text_padding_bottom_text_line_height_padding_bottom = function tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-card__text": {
      paddingBottom: vars$$1.tight_text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px",

      ".pe-card__text--tight, &.pe-card__text--tight:last-child": {
        paddingBottom: vars$$1.tight_text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px"
      }
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(vars$$1), {
      display: "block",
      position: "relative",

      "&, a:link, a:visited": {
        textDecoration: "none"
      },

      // Content

      " .pe-card__content": {
        position: "relative",
        borderRadius: "inherit",
        overflow: "hidden",
        width: "inherit",
        height: "inherit"
      },

      // Media

      " .pe-card__media": {
        position: "relative",
        overflow: "hidden",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

        ".pe-card__media--landscape": {
          paddingBottom: 100 / 16 * 9 + "%"
        },
        ".pe-card__media--square": {
          paddingBottom: "100%"
        },

        ".pe-card__media--crop-x": {
          width: "100%",
          height: "auto",
          display: "block",

          ".pe-card__media--origin-start": {
            backgroundPositionY: "top"
          },
          ".pe-card__media--origin-end": {
            backgroundPositionY: "bottom"
          }
        },
        ".pe-card__media--crop-y": {
          height: "100%",
          width: "auto",
          display: "block",

          ".pe-card__media--origin-start": {
            backgroundPositionX: "left"
          },
          ".pe-card__media--origin-end": {
            backgroundPositionX: "right"
          }
        },
        " img, iframe": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
          width: "100%",
          height: "100%",
          maxWidth: "none"
        }],
        " img": {
          opacity: 0 /* allows right-click on image */
        },

        " .pe-card__header + .pe-card__media": {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }
      },

      " .pe-card__primary-media": {
        margin: "16px"
      },

      // Overlay

      " .pe-card__overlay": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(),

      // Dimmer

      " .pe-card__media__dimmer": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
        zIndex: 1,
        pointerEvents: "all"
      }],

      " .pe-card__overlay__content": {
        position: "absolute",
        bottom: 0,
        top: "auto",
        right: 0,
        left: 0,
        zIndex: 2
      },

      // Header

      " .pe-card__header": {
        " .pe-list-tile__title": {
          fontSize: "14px",
          fontWeight: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].font_weight_normal,
          lineHeight: "20px",
          marginTop: "2px"
        },
        " .pe-list-tile__subtitle": {
          marginTop: "-1px"
        }
      },

      // Primary 

      " .pe-card__primary": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, {
        position: "relative",

        "& + .pe-card__text": {
          marginTop: "-16px"
        }
      }],

      // Title

      " .pe-card__title": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), {
        fontSize: "24px",
        lineHeight: "29px"
      }],

      // Subtitle

      " .pe-card__subtitle": {
        fontSize: "14px",
        lineHeight: "24px"
      },

      // Actions

      " .pe-card__actions": {
        ".pe-card__actions--tight": {
          minHeight: 0,
          paddingTop: 0,
          paddingBottom: 0,

          ".pe-card__actions--vertical": {
            paddingLeft: 0,
            paddingRight: 0
          }
        },
        ".pe-card__actions--horizontal": {
          minHeight: 36 + 2 * 8 + "px",
          height: 36 + 2 * 8 + "px" // make align-items work on IE 11: https://github.com/philipwalton/flexbugs/issues/231
        },
        ".pe-card__actions--horizontal:not(.pe-card__actions--justified)": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenter, {
          " .pe-button": {
            minWidth: 0
          }
        }],

        ".pe-card__actions--justified": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutJustified],

        ".pe-card__actions--vertical": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutVertical, {
          // nested
          " .pe-card__actions": [{
            minHeight: 0
          }],

          " .pe-button": {
            height: "36px",
            padding: 0
          },
          " .pe-list": {
            padding: 0
          }
        }]
      },

      " .pe-card__primary.pe-card__primary--media + .pe-card__actions": {
        marginTop: "-16px"
      },

      // Text

      " .pe-card__text": {
        fontSize: "14px",
        lineHeight: "24px",

        " .pe-card__actions + &": {
          marginTop: "8px"
        }
      },

      " .pe-card__text, .pe-card__primary": {
        "& + .pe-card__actions:not(:last-child)": {
          // Lift up so that full button area is usable
          position: "relative",
          zIndex: 1
        }
      }
    }, {
      // RTL
      "*[dir=rtl], .pe-rtl ": _defineProperty$2({}, selector, alignRight(vars$$1))
    }])];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      borderRadius: vars$$1.border_radius + "px",

      " .pe-card__content .pe-card__media": {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },

      " .pe-card__content .pe-card__media:not(.pe-card__media--square):not(.pe-card__media--landscape)": {
        ":first-child": {
          borderTopLeftRadius: vars$$1.border_radius + "px",
          borderTopRightRadius: vars$$1.border_radius + "px"
        },
        ":last-child": {
          borderBottomLeftRadius: vars$$1.border_radius + "px",
          borderBottomRightRadius: vars$$1.border_radius + "px"
        }
      }
    })];
  },
  image_size_small: function image_size_small(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--small": {
          width: vars$$1.image_size_small + "px",
          height: vars$$1.image_size_small + "px"
        }
      }
    })];
  },
  image_size_regular: function image_size_regular(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--regular": {
          width: vars$$1.image_size_regular + "px"
        }
      }
    })];
  },
  image_size_medium: function image_size_medium(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--medium": {
          width: vars$$1.image_size_medium + "px"
        }
      }
    })];
  },
  image_size_large: function image_size_large(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--large": {
          width: vars$$1.image_size_large + "px"
        }
      }
    })];
  },
  one_line_height_with_icon: function one_line_height_with_icon(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__header": {
        height: vars$$1.one_line_height_with_icon + "px"
      }
    })];
  },
  tight_title_padding_bottom: function tight_title_padding_bottom(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars$$1)];
  },
  subtitle_line_height_padding_bottom: function subtitle_line_height_padding_bottom(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars$$1), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)];
  },
  title_padding_v: function title_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)];
  },
  title_padding_h: function title_padding_h(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)];
  },
  actions_button_margin_h: function actions_button_margin_h(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__actions.pe-card__actions--horizontal": {
        margin: "0 -" + vars$$1.actions_button_margin_h + "px",

        " .pe-button": {
          margin: "0 " + vars$$1.actions_button_margin_h + "px"
        }
      }
    })];
  },
  actions_padding_v: function actions_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__actions": {
        paddingTop: vars$$1.actions_padding_v + "px",
        paddingBottom: vars$$1.actions_padding_v + "px"
      }
    })];
  },
  actions_padding_h: function actions_padding_h(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__actions": {
        paddingRight: vars$$1.actions_padding_h + "px",
        paddingLeft: vars$$1.actions_padding_h + "px"
      }
    })];
  },
  actions_button_margin_v: function actions_button_margin_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__actions": {
        ".pe-card__actions--vertical": {
          " .pe-button": {
            marginTop: vars$$1.actions_button_margin_v + "px",
            marginBottom: vars$$1.actions_button_margin_v + "px"
          }
        }
      }
    })];
  },
  actions_vertical_padding_v: function actions_vertical_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__actions": {
        ".pe-card__actions--vertical": {
          ":not(.pe-card__actions--tight)": {
            paddingTop: vars$$1.actions_vertical_padding_v + "px",
            paddingBottom: vars$$1.actions_vertical_padding_v + "px"
          },
          // nested
          " .pe-card__actions": [{
            "&:first-child": {
              marginTop: -vars$$1.actions_vertical_padding_v + "px"
            },
            "&:last-child": {
              marginBottom: -vars$$1.actions_vertical_padding_v + "px"
            }
          }]
        }
      }
    })];
  },
  offset_small_padding_v: function offset_small_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__text, .pe-card__primary": {
        "& + .pe-card__actions:not(:last-child)": {
          marginTop: -(vars$$1.offset_small_padding_v + 3) + "px"
        }
      }
    })];
  },
  text_padding_h: function text_padding_h(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__text": {
        paddingRight: vars$$1.text_padding_h + "px",
        paddingLeft: vars$$1.text_padding_h + "px"
      }
    })];
  },
  text_padding_v: function text_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars$$1)];
  },
  text_line_height_padding_top: function text_line_height_padding_top(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars$$1)];
  },
  text_padding_bottom: function text_padding_bottom(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)];
  },
  tight_text_padding_bottom: function tight_text_padding_bottom(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)];
  },
  text_line_height_padding_bottom: function text_line_height_padding_bottom(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns$2 = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns$2 = function tintFns(tint) {
  return _defineProperty$3({}, "color_" + tint + "_overlay_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-card__overlay__content": {
        backgroundColor: vars$$1["color_" + tint + "_overlay_background"]
      }
    })];
  });
};

var lightTintFns$2 = _extends$2({}, generalFns$2, tintFns$2("light"));
var darkTintFns$2 = _extends$2({}, generalFns$2, tintFns$2("dark"));

var overlayColor = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns$2, darkTintFns: darkTintFns$2 }
});

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

var vars$1 = {
  general_styles: true,

  actions_button_margin_h: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit,
  actions_button_margin_v: actions_button_margin_v,
  actions_padding_h: 8,
  actions_padding_v: 0,
  actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,
  border_radius: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_block_border_radius,
  icon_element_width: 72 - 4,
  image_size_large: 3 * 80,
  image_size_medium: 2 * 80,
  image_size_regular: 1.4 * 80,
  image_size_small: 1 * 80,
  offset_small_padding_v: padding_v - 16,
  one_line_height_with_icon: 72,
  one_line_padding_v: 8,
  padding_h: 16,
  subtitle_line_height_padding_bottom: 7,
  text_line_height_padding_bottom: 7,
  text_line_height_padding_top: 6,
  text_padding_bottom: 24,
  text_padding_h: 16,
  text_padding_v: 16,
  tight_text_padding_bottom: 16,
  tight_title_padding_bottom: 16,
  title_padding_h: 16,
  title_padding_v: 24,

  color_light_main_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background),
  color_light_title_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_subtitle_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_regular),
  color_light_actions_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_border_light),
  color_light_overlay_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_overlay_background),

  color_dark_main_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_background),
  color_dark_title_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_subtitle_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_regular),
  color_dark_actions_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_border_light),
  color_dark_overlay_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_background, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_overlay_background)
};

var selector = "." + classes.component;
var contentSelector = "." + classes.content;
var overlaySheetSelector = "." + classes.overlaySheet;
var overlayContentSelector = "." + classes.overlayContent;

var baseFns = [layout, color];
var overlayColorFns = [overlayColor];
var contentColorFns = [contentColor];

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, selector],
    fns: baseFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, " " + overlaySheetSelector],
    fns: overlayColorFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, " " + contentSelector],
    fns: contentColorFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, " " + overlayContentSelector],
    fns: contentColorFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments[1];

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref2.mediaQuery;

  return polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, selector],
    fns: baseFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }).concat(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, customSelector ? " " : "", overlaySheetSelector],
    fns: overlayColorFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  })).concat(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, customSelector ? " " : "", contentSelector],
    fns: contentColorFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  })).concat(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, customSelector ? " " : "", overlayContentSelector],
    fns: contentColorFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }));
};

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: baseFns,
  vars: vars$1
});
polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [overlaySheetSelector],
  fns: overlayColorFns,
  vars: vars$1
});
polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [contentSelector],
  fns: contentColorFns,
  vars: vars$1
});
polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [overlayContentSelector],
  fns: contentColorFns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-checkbox/dist/polythene-css-checkbox.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-checkbox/dist/polythene-css-checkbox.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-css-selection-control */ "../../polythene-css-selection-control/dist/polythene-css-selection-control.mjs");



var classes = {
  component: "pe-checkbox-control"
};

var color$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  superColor: polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__["color"]
});

var layout$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ superLayout: polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__["layout"] });

var vars = {
  general_styles: true
};

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});




/***/ }),

/***/ "../../polythene-css-dialog-pane/dist/polythene-css-dialog-pane.mjs":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-dialog-pane/dist/polythene-css-dialog-pane.mjs ***!
  \*******************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars, fullScreen */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullScreen", function() { return fullScreen; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles() {
    return [{
      " .pe-dialog-pane__body": {
        borderColor: "transparent"
      }
    }];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_title_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog-pane__header .pe-dialog-pane__title": {
        color: vars$$1["color_" + tint + "_title_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_body_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog-pane__body": {
        color: vars$$1["color_" + tint + "_body_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_body_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
        borderTopColor: vars$$1["color_" + tint + "_body_border"]
      },
      ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
        borderBottomColor: vars$$1["color_" + tint + "_body_border"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var max_width_side_padding_mobile = function max_width_side_padding_mobile(selector, vars$$1) {
  var _ref3;

  var maxWidthBreakpointMobile = vars$$1.max_width + 2 * vars$$1.side_padding_mobile;
  return _ref3 = {}, _defineProperty$1(_ref3, "@media (max-width: " + maxWidthBreakpointMobile + "px)", _defineProperty$1({}, selector, {
    maxWidth: "calc(100vw - " + 2 * vars$$1.side_padding_mobile + "px)"
  })), _defineProperty$1(_ref3, "@media (min-width: " + (maxWidthBreakpointMobile + 1) + "px)", _defineProperty$1({}, selector, {
    maxWidth: vars$$1.max_width + "px"
  })), _ref3;
};

var padding_header_height_footer_height = function padding_header_height_footer_height(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-dialog-pane__body": {
      // initially set max-height; will be overridden by dialog core with actual heights
      maxHeight: "calc(100vh - " + 4 * vars$$1.padding + "px - " + (vars$$1.header_height + vars$$1.footer_height) + "px)"
    }
  });
};

var padding_header_bottom = function padding_header_bottom(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-dialog-pane__header--title": {
      paddingTop: vars$$1.padding - 4 + "px",
      paddingRight: vars$$1.padding + "px",
      paddingBottom: vars$$1.header_bottom - 4 + "px",
      paddingLeft: vars$$1.padding + "px"
    }
  });
};

var fullScreen = function fullScreen(selector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    padding: 0,

    " .pe-dialog-pane": {
      borderRadius: 0
    },
    " .pe-dialog-pane__content": {
      borderRadius: 0,
      maxWidth: "none",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",

      " > *": {
        flexShrink: 0
      },

      " > .pe-dialog-pane__body": {
        flexShrink: 1,
        maxHeight: "initial"
      }
    },
    " .pe-dialog-pane, .pe-dialog-pane__body": {
      height: "100vh",
      maxHeight: "100vh",
      border: "none",
      maxWidth: "initial"
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutVertical, {
      position: "relative",
      maxHeight: "100%",
      borderRadius: "inherit",
      margin: 0,

      " .pe-dialog-pane__header, pe-dialog-pane__body, pe-dialog-pane__header": {
        zIndex: 1
      },

      " .pe-dialog-pane__content": {
        width: "100%"
      },

      " .pe-dialog-pane__title": {
        fontSize: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].font_size_title + "px",
        fontWeight: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].font_weight_medium,

        "& + div": {
          marginTop: "16px"
        }
      },

      " .pe-dialog-pane__header": {
        " .pe-dialog-pane__title": {
          width: "100%",
          wordBreak: "break-all",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },

      " .pe-dialog-pane__body": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].selfStretch, {
        overflowY: "auto",
        "-webkit-overflow-scrolling": "touch",
        minHeight: "50px",

        " p": {
          margin: 0
        },
        " p + p": {
          marginTop: "16px"
        }
      }],

      ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
        " .pe-dialog-pane__body": {
          borderTopStyle: "solid"
        }
      },

      ".pe-dialog-pane--footer": {
        ".pe-dialog-pane--border-bottom": {
          " .pe-dialog-pane__body": {
            borderBottomStyle: "solid"
          }
        }
      },

      ".pe-dialog-pane--body-full-bleed .pe-dialog-pane__body": {
        padding: 0,
        borderStyle: "none"
      },

      " .pe-dialog-pane__header--title + .pe-dialog-pane__body": {
        paddingTop: 0
      },

      " .pe-dialog-pane__footer": {
        ".pe-dialog-pane__footer--high": {
          // when buttons are stacked vertically
          paddingBottom: "8px"
        },
        ".pe-dialog-pane__footer--buttons": {
          padding: "2px 8px",
          fontSize: 0 // remove inline block spacing
        }
      },

      " .pe-dialog-pane__actions": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutEndJustified, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutWrap]
    }]), {
      " .pe-dialog__content.pe-menu__content": _defineProperty$1({}, " " + selector, {
        " .pe-dialog-pane__body": {
          padding: 0,
          border: "none"
        }
      })
    }, [fullScreen(" .pe-dialog--full-screen")]];
  },
  max_width: function max_width(selector, vars$$1) {
    return [max_width_side_padding_mobile(selector, vars$$1)];
  },
  side_padding_mobile: function side_padding_mobile(selector, vars$$1) {
    return [max_width_side_padding_mobile(selector, vars$$1)];
  },
  min_width: function min_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      minWidth: vars$$1.min_width + "px"
    })];
  },
  line_height_title: function line_height_title(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog-pane__title": {
        lineHeight: vars$$1.line_height_title + "px"
      }
    })];
  },
  header_height: function header_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog-pane__header": {
        minHeight: vars$$1.header_height + "px"
      }
    }), padding_header_height_footer_height(selector, vars$$1)];
  },
  padding: function padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog-pane__body": {
        padding: vars$$1.padding + "px"
      },
      ".pe-dialog-pane--footer": {
        " .pe-dialog-pane__body": {
          paddingBottom: vars$$1.padding - 10 + "px"
        }
      }
    }), padding_header_bottom(selector, vars$$1), padding_header_height_footer_height(selector, vars$$1)];
  },
  header_bottom: function header_bottom(selector, vars$$1) {
    return [padding_header_bottom(selector, vars$$1)];
  },
  footer_height: function footer_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog-pane__footer": {
        ".pe-dialog-pane__footer--buttons": {
          minHeight: vars$$1.footer_height + "px"
        }
      }
    }), padding_header_height_footer_height(selector, vars$$1)];
  },
  border_width: function border_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
        " .pe-dialog-pane__body": {
          borderWidth: vars$$1.border_width + "px"
        }
      },
      ".pe-dialog-pane--footer": {
        ".pe-dialog-pane--border-bottom": {
          " .pe-dialog-pane__body": {
            borderWidth: vars$$1.border_width + "px"
          }
        }
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  border_width: 1,
  footer_height: 52,
  header_bottom: 20,
  header_height: 60,
  line_height_title: 24,
  max_width: 7 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_menu, // 7 * 56 = 392 
  min_width: 5 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_menu, // 5 * 56 = 280
  padding: 3 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component, // 3 * 8 = 24
  side_padding_mobile: 6 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit, // 6 * 4 = 48

  color_light_title_text: "inherit",
  color_light_body_text: "inherit",
  color_light_body_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_border_light),
  color_light_background: "inherit",

  color_dark_title_text: "inherit",
  color_dark_body_text: "inherit",
  color_dark_body_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_border_light),
  color_dark_background: "inherit"
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-dialog/dist/polythene-css-dialog.mjs":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-dialog/dist/polythene-css-dialog.mjs ***!
  \*********************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");
/* harmony import */ var polythene_css_dialog_pane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-css-dialog-pane */ "../../polythene-css-dialog-pane/dist/polythene-css-dialog-pane.mjs");




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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
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
  open: "pe-dialog--open", // class set to html element
  visible: "pe-dialog--visible", // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",

  // lookup
  menuContent: menuClasses.content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog__content": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog__content": {
        color: vars$$1["color_" + tint + "_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars$$1["color_" + tint + "_backdrop_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var minWidth = "320px";

var _backdrop = function _backdrop(selector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      display: "block",
      opacity: 1
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenterCenter, {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].z_dialog,
      height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar        
      transitionProperty: "opacity,background-color",

      ".pe-dialog--full-screen": {
        padding: 0,

        " .pe-dialog__content": {
          width: "100%" // for IE11
        }
      },

      " .pe-dialog__content": {
        position: "relative",
        transitionProperty: "all"
      },

      " .pe-dialog__backdrop": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("all"), // animation duration is set in component options
      {
        position: "absolute",
        opacity: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "none"
      }],

      ".pe-dialog--backdrop": _backdrop(selector)
    }]), {
      ".pe-dialog__holder": {
        height: "100%",
        minWidth: minWidth
      }
    }];
  },
  animation_hide_css: function animation_hide_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [vars$$1.animation_hide_css])];
  },
  position: function position(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      position: vars$$1.position
    })];
  },
  padding_vertical: function padding_vertical(selector, vars$$1) {
    return [!vars$$1.full_screen && Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      paddingTop: vars$$1.padding_vertical + "px",
      paddingBottom: vars$$1.padding_vertical + "px"
    })];
  },
  padding_horizontal: function padding_horizontal(selector, vars$$1) {
    return [!vars$$1.full_screen && Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      paddingLeft: vars$$1.padding_horizontal + "px",
      paddingRight: vars$$1.padding_horizontal + "px"
    })];
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      "&, .pe-dialog__content": {
        transitionDelay: vars$$1.animation_delay
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      "&, .pe-dialog__content": {
        transitionDuration: vars$$1.animation_duration
      }
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      "&, .pe-dialog__content": {
        transitionTimingFunction: vars$$1.animation_timing_function
      }
    })];
  },
  animation_show_css: function animation_show_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-dialog--visible": vars$$1.animation_show_css
    })];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [!vars$$1.full_screen && Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog__content": {
        borderRadius: vars$$1.border_radius + "px"
      }
    })];
  },
  full_screen: function full_screen(selector, vars$$1) {
    return [vars$$1.full_screen && Object(polythene_css_dialog_pane__WEBPACK_IMPORTED_MODULE_2__["fullScreen"])(selector)];
  },
  backdrop: function backdrop(selector, vars$$1) {
    return [vars$$1.backdrop && _backdrop(selector)];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_delay: "0s",
  animation_duration: ".220s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  border_radius: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_block_border_radius,
  padding_horizontal: 5 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  padding_vertical: 3 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  position: "fixed",

  // theme vars

  full_screen: false,

  // color vars

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background),
  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_background),

  color_light_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_regular),
  color_dark_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_regular)
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-drawer/dist/polythene-css-drawer.mjs":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-drawer/dist/polythene-css-drawer.mjs ***!
  \*********************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {
  component: "pe-dialog pe-drawer",

  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles() {
    return [{
      " .pe-dialog__content": {
        background: "none"
      }
    }];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog__content": {
        borderColor: vars$$1["color_" + tint + "_border"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog-pane": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars$$1["color_" + tint + "_backdrop_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHADOW_WIDTH = 15;

var _border = function _border(selector, vars$$1, isRTL) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-dialog__content": {
      borderWidth: "1px",
      borderStyle: isRTL ? "none none none solid" : "none solid none none"
    }
  });
};

var _border2 = function _border2(selector, vars$$1) {
  return [_border(selector, vars$$1, false), _border(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
};

var alignSide = function alignSide(isRTL) {
  return function (selector, vars$$1) {
    var _peDrawerFixed;

    return [{
      // Fixed
      ".pe-drawer--fixed": (_peDrawerFixed = {}, _defineProperty$1(_peDrawerFixed, isRTL ? "right" : "left", 0), _defineProperty$1(_peDrawerFixed, isRTL ? "left" : "right", "auto"), _peDrawerFixed)
    }, _border(selector + ".pe-drawer--border", vars$$1, isRTL)];
  };
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var _backdrop = function _backdrop(selector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      opacity: 1
    }
  });
};

var selectorAnchorEnd = function selectorAnchorEnd(selector) {
  return selector + ".pe-drawer--anchor-end";
};

// fn: miniSelector contains .pe-drawer--mini
var _content_width_mini_collapsed = function _content_width_mini_collapsed(miniSelector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(miniSelector, {
    ":not(.pe-dialog--visible) .pe-dialog__content": {
      width: vars$$1.content_width_mini_collapsed + "px"
    }
  });
};

// fn: coverSelector contains .pe-drawer--cover
var _cover_content_max_width = function _cover_content_max_width(coverSelector, vars$$1, isRTL) {
  var _peDialog__content, _peDialogVisible;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(coverSelector, {
    " .pe-dialog__content": (_peDialog__content = {
      maxWidth: vars$$1.content_max_width + "px"
    }, _defineProperty$1(_peDialog__content, isRTL ? "right" : "left", -vars$$1.content_max_width - SHADOW_WIDTH + "px"), _defineProperty$1(_peDialog__content, isRTL ? "left" : "right", "auto"), _peDialog__content),
    ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible = {}, _defineProperty$1(_peDialogVisible, isRTL ? "right" : "left", 0), _defineProperty$1(_peDialogVisible, isRTL ? "left" : "right", "auto"), _peDialogVisible)
  });
};

var cover_content_max_width = function cover_content_max_width(coverSelector, vars$$1) {
  return [_cover_content_max_width(coverSelector, vars$$1, false), _cover_content_max_width(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(coverSelector), vars$$1, true), _cover_content_max_width(selectorAnchorEnd(coverSelector), vars$$1, true), _cover_content_max_width(selectorAnchorEnd(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(coverSelector)), vars$$1, false)];
};

// fn: selector contains .pe-drawer--permanent
var _content_width = function _content_width(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-dialog__content": {
      width: vars$$1.content_width + "px"
    }
  });
};

// fn: pushSelector contains .pe-drawer--push
var _push_content_width = function _push_content_width(pushSelector, vars$$1, isRTL) {
  var _peDialog__content2, _peDialogVisible2;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(pushSelector, {
    " .pe-dialog__content": (_peDialog__content2 = {}, _defineProperty$1(_peDialog__content2, isRTL ? "marginRight" : "marginLeft", -vars$$1.content_width - SHADOW_WIDTH + "px"), _defineProperty$1(_peDialog__content2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialog__content2),
    ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible2 = {
      width: vars$$1.content_width + "px"
    }, _defineProperty$1(_peDialogVisible2, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty$1(_peDialogVisible2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialogVisible2)
  });
};

var push_content_width = function push_content_width(pushSelector, vars$$1) {
  return [_push_content_width(pushSelector, vars$$1, false), _push_content_width(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(pushSelector), vars$$1, true), _push_content_width(selectorAnchorEnd(pushSelector), vars$$1, true), _push_content_width(selectorAnchorEnd(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(pushSelector)), vars$$1, false)];
};

// const content_side_offset = (selector, vars) =>
//   sel(selector, {
//     " .pe-dialog__content": {
//       width: `calc(100% - ${vars.content_side_offset}px)`,
//     }
//   });

var _cover = function _cover(selector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-dialog__content": {
      position: "absolute",
      top: 0,
      zIndex: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].z_drawer
    },
    ".pe-dialog--visible": {
      " .pe-dialog__touch": {
        display: "block"
      }
    }
  });
};

var _mini = function _mini(miniSelector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(miniSelector, {
    " .pe-dialog__content": {
      marginLeft: 0,
      marginRight: 0
    }
  });
};

var _permanent = function _permanent(permanentSelector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(permanentSelector, {
    position: "static",
    display: "block",
    padding: 0,
    overflow: "initial",

    " .pe-dialog__content": {
      overflow: "visible",
      maxHeight: "initial",
      marginLeft: 0,
      marginRight: 0
    }
  });
};

// fn: pushSelector contains .pe-drawer--push
var _push = function _push(pushSelector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(pushSelector, {
    position: "static"
  });
};

var borderRadius = function borderRadius(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-dialog__content": {
      borderRadius: vars$$1.border_radius + "px"
    }
  });
};

var _floating = function _floating(selector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    height: "auto",

    " .pe-dialog__content": {
      height: "auto"
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(selector, vars$$1), {
      justifyContent: "flex-start",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      height: "100%",
      minWidth: 0, // IE 11 does not accept "none" or "inital" here
      padding: 0,
      opacity: 1,
      flexShrink: 0,
      transitionProperty: "all",

      " .pe-dialog__content": {
        position: "relative",
        transitionProperty: "all",

        height: "100%",
        overflow: "visible",
        minWidth: 0, // IE 11 does not accept "none" or "inital" here
        flexShrink: 0
      },

      " .pe-dialog-pane__content": {
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden"
      },

      " .pe-dialog-pane": {
        height: "100%",
        minWidth: 0 // IE 11 does not accept "none" or "inital" here
      },

      " .pe-dialog-pane__body": {
        overflow: "visible"
      },

      // Fixed
      ".pe-drawer--fixed": {
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].z_drawer
      },

      // Mini
      ".pe-drawer--mini": _mini(selector, vars$$1),

      // Permanent
      ".pe-drawer--permanent": _permanent(selector, vars$$1),

      // Floating
      ".pe-drawer--floating": _floating(selector, vars$$1),

      // Cover (default)
      ".pe-drawer--cover": _cover(selector),

      // Push
      ".pe-drawer--push": _push(selector, vars$$1),

      // Backdrop
      " .pe-dialog__backdrop": {
        pointerEvents: "none",
        opacity: 0,
        display: "block"
      },
      " .pe-dialog__touch": {
        display: "none",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },

      ".pe-dialog--backdrop": _backdrop(selector)
    }]), [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), alignRight(selector, vars$$1))]];
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDelay: vars$$1.animation_delay
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDuration: vars$$1.animation_duration
      }
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionTimingFunction: vars$$1.animation_timing_function
      }
    })];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [borderRadius(selector, vars$$1)];
  },
  content_max_width: function content_max_width(selector, vars$$1) {
    return [cover_content_max_width(selector + ".pe-drawer--cover", vars$$1)];
  },
  content_width: function content_width(selector, vars$$1) {
    return [_content_width(selector, vars$$1), _content_width(selector + ".pe-dialog--visible", vars$$1), _content_width(selector + ".pe-drawer--permanent", vars$$1), push_content_width(selector + ".pe-drawer--push", vars$$1)];
  },
  content_width_mini_collapsed: function content_width_mini_collapsed(selector, vars$$1) {
    return [_content_width_mini_collapsed(selector + ".pe-drawer--mini", vars$$1)];
  },
  // content_side_offset: (selector, vars) => [
  //   content_side_offset(`${selector}.pe-drawer--cover`, vars)
  // ],
  // content_max_width_large: (selector, vars) => ({
  //   ["@media (min-width: " + themeVars.breakpoint_for_tablet_portrait_up + "px)"]: {
  //     [selector]: {
  //       ".pe-drawer--push": {
  //         " .pe-dialog__content": {
  //           maxWidth: `${vars.content_max_width_large}px`,
  //         }
  //       },
  //       " .pe-dialog__content": {
  //         maxWidth: `${vars.content_max_width_large}px`,
  //       },
  //     }
  //   }
  // }),
  // content_side_offset_large: (selector, vars) => ({
  //   ["@media (min-width: " + themeVars.breakpoint_for_tablet_portrait_up + "px)"]: {
  //     [selector]: {
  //       " .pe-dialog__content": {
  //         width: `calc(100% - ${vars.content_side_offset_large}px)`,
  //       },
  //     }
  //   }
  // }),
  cover: function cover(selector, vars$$1) {
    return vars$$1.cover && [_cover(selector, vars$$1), cover_content_max_width(selector, vars$$1)];
  },
  backdrop: function backdrop(selector, vars$$1) {
    return [vars$$1.backdrop && _backdrop(selector)];
  },
  border: function border(selector, vars$$1) {
    return [vars$$1.border && _border2(selector)];
  },
  mini: function mini(selector, vars$$1) {
    return vars$$1.mini && [_mini(selector, vars$$1), _content_width_mini_collapsed(selector, vars$$1)];
  },
  permanent: function permanent(selector, vars$$1) {
    return [vars$$1.permanent && _permanent(selector, vars$$1)];
  },
  floating: function floating(selector, vars$$1) {
    return [vars$$1.floating && _floating(selector, vars$$1)];
  },
  push: function push(selector, vars$$1) {
    return vars$$1.push && [_push(selector, vars$$1), push_content_width(selector, vars$$1)];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_delay: "0s",
  animation_duration: ".260s",
  animation_timing_function: "ease-in-out",
  border_radius: 0,
  content_max_width: 5 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].increment, // 5 * 56
  // content_max_width_large:         5 * vars.increment_large,     // 5 * 64
  // content_side_offset:             vars.grid_unit_component * 7, // 56
  // content_side_offset_large:       vars.grid_unit_component * 8, // 64
  content_width: 240,
  content_width_mini_collapsed: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].increment, // 1 * 56

  // theme vars

  backdrop: false,
  border: false,
  cover: false,
  floating: false,
  mini: false,
  permanent: false,
  push: false,

  // color vars

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background),
  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_background),

  color_light_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_border_light),
  color_dark_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_border_light)
};

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-fab/dist/polythene-css-fab.mjs":
/*!***************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-fab/dist/polythene-css-fab.mjs ***!
  \***************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_css_raised_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-css-raised-button */ "../../polythene-css-raised-button/dist/polythene-css-raised-button.mjs");
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");




var classes = {
  component: "pe-fab",

  // elements
  content: "pe-fab__content",

  // states
  mini: "pe-fab--mini"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-button__content": {
        color: vars$$1["color_" + tint]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_background"]
        }
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns },
  superColor: polythene_css_raised_button__WEBPACK_IMPORTED_MODULE_0__["color"]
});

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      userSelect: "none",
      "-moz-user-select": "none",
      display: "inline-block",
      position: "relative",
      outline: "none",
      cursor: "pointer",
      padding: 0,
      border: "none",

      " .pe-button__content": {
        position: "relative",
        borderRadius: "50%"
      },

      " .pe-fab__content": {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      },

      " .pe-button__wash, .pe-button__focus": [polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["mixin"].fit(), {
        borderRadius: "inherit"
      }],

      " .pe-ripple": {
        borderRadius: "inherit"
      },

      " .pe-button__wash": {
        transition: "background-color " + polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].animation_duration + " ease-in-out",
        borderRadius: "inherit",
        pointerEvents: "none",
        backgroundColor: "transparent"
      }
    })];
  },
  size_regular: function size_regular(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-button__content": {
        width: vars$$1.size_regular + "px",
        height: vars$$1.size_regular + "px"
      }
    })];
  },
  size_mini: function size_mini(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ".pe-fab--mini": {
        " .pe-button__content": {
          width: vars$$1.size_mini + "px",
          height: vars$$1.size_mini + "px",
          padding: (vars$$1.size_mini - polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].unit_icon_size) / 2 + "px"
        }
      }
    })];
  }
};

var layout$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["createLayout"])({ varFns: varFns, superLayout: polythene_css_raised_button__WEBPACK_IMPORTED_MODULE_0__["layout"] });

var vars$1 = {
  general_styles: true,

  size_mini: 5 * polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].grid_unit_component, // 5 * 8 = 40
  size_regular: 7 * polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].grid_unit_component, // 7 * 8 = 56

  color_light: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary_foreground),
  color_light_focus_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_background_hover),
  color_light_focus_opacity: polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_background_hover_medium, // same as button
  color_light_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),

  color_dark: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary_foreground),
  color_dark_focus_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_background_hover), // same as button
  color_dark_focus_opacity: polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_background_hover_medium, // same as button
  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary)
};

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-icon-button/dist/polythene-css-icon-button.mjs":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-icon-button/dist/polythene-css-icon-button.mjs ***!
  \*******************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {
  component: "pe-button pe-icon-button",

  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",

  // states
  compact: "pe-icon-button--compact"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          backgroundColor: "currentcolor"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      "&, .pe-icon-button__label": {
        color: vars$$1["color_" + tint]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_wash_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      opacity: vars$$1["color_" + tint + "_wash_opacity"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--disabled": {
        " .pe-button__content, .pe-icon-button__label": {
          color: vars$$1["color_" + tint + "_disabled"]
        }
      }
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_hover", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__content": {
        color: vars$$1["color_" + tint + "_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_label_hover", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__label": {
        color: vars$$1["color_" + tint + "_label_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_background_hover", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_background_hover"]
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns, lightTintHoverFns: lightTintHoverFns, darkTintHoverFns: darkTintHoverFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function (vars$$1) {
    return {};
  };
}; // eslint-disable-line no-unused-vars
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var _label_padding_before = function _label_padding_before(selector, vars$$1, isRTL) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-icon-button__label": _defineProperty$1({}, isRTL ? "paddingRight" : "paddingLeft", vars$$1.label_padding_before + "px")
  });
};

var _label_padding_after = function _label_padding_after(selector, vars$$1, isRTL) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-icon-button__label": _defineProperty$1({}, isRTL ? "paddingLeft" : "paddingRight", vars$$1.label_padding_after + "px")
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(vars$$1), {
      // don't set button size to facilitate different icon sizes
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      border: "none",

      " .pe-button__content": {
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        borderRadius: "50%",
        position: "relative"
      },

      " .pe-icon-button__content": {
        lineHeight: 1,
        borderRadius: "50%",
        pointerEvents: "none"
      }
    }, _defineProperty$1({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(vars$$1)])])];
  },
  padding: function padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__content": {
        padding: vars$$1.padding + "px"
      }
    })];
  },
  padding_compact: function padding_compact(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-icon-button--compact": {
        " .pe-icon-button__content": {
          padding: vars$$1.padding_compact + "px"
        }
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content, .pe-button__wash": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("all", vars$$1.animation_duration)]
    })];
  },
  label_font_size: function label_font_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__label": {
        fontSize: vars$$1.label_font_size + "px"
      }
    })];
  },
  label_line_height: function label_line_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__label": {
        lineHeight: vars$$1.label_line_height + "px"
      }
    })];
  },
  label_font_weight: function label_font_weight(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__label": {
        fontWeight: vars$$1.label_font_weight
      }
    })];
  },
  label_text_transform: function label_text_transform(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon-button__label": {
        textTransform: vars$$1.label_text_transform
      }
    })];
  },
  label_padding_after: function label_padding_after(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), _label_padding_after(selector, vars$$1, false), _label_padding_after(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  label_padding_before: function label_padding_before(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), _label_padding_before(selector, vars$$1, false), _label_padding_before(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_duration: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_duration,
  label_font_size: 16,
  label_font_weight: 400,
  label_line_height: 20,
  label_padding_after: 0,
  label_padding_before: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit * 1, // 4
  label_text_transform: "initial",
  label_top_margin_factor: 1 / 12, // align with icon
  padding: (polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_icon_button - polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size) / 2, // 12
  padding_compact: (polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_icon_button - polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size) / 3, // 8

  color_background: "transparent", // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",
  // color_light_hover:         "inherit",
  // color_dark_hover:          "inherit",
  // color_light_label_hover:   "inherit",
  // color_dark_label_hover:    "inherit",

  color_light: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_label: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_disabled: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  color_light_focus_opacity: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_hover_medium,
  color_light_wash_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_hover),

  color_dark: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_label: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_disabled: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled),
  color_dark_focus_opacity: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_hover_medium,
  color_dark_wash_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_hover)

  // hover colors may be set in theme; disabled by default

  // color_light_background_hover:         "currentColor",
  // color_dark_background_hover:          "currentColor",
};

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-icon/dist/polythene-css-icon.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-icon/dist/polythene-css-icon.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {
  component: "pe-icon",

  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: "currentColor"
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars$$1["color_" + tint]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_avatar_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-icon--avatar": {
        backgroundColor: vars$$1["color_" + tint + "_avatar_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sizeDirective = function sizeDirective(size) {
  return function (selector, vars$$1) {
    return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, _defineProperty$1({}, ".pe-icon--" + size, {
      width: vars$$1["size_" + size] + "px",
      height: vars$$1["size_" + size] + "px"
    }));
  };
};

var varFns = _extends$1({}, {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      display: "inline-block",
      verticalAlign: "middle",
      backgroundRepeat: "no-repeat",
      position: "relative",
      fontSize: 0,
      lineHeight: 0,

      ".pe-icon--avatar": {
        borderRadius: "50%"
      },

      ".pe-icon--avatar img": {
        border: "none",
        borderRadius: "50%",
        width: "inherit",
        height: "inherit"
      },

      " img": {
        height: "inherit"
      },

      " .pe-svg, .pe-svg > div": { /* React creates an additional div when wrapping an SVG */
        width: "inherit",
        height: "inherit"
      }
    })];
  }
}, ["small", "regular", "medium", "large"].reduce(function (acc, size) {
  return acc["size_" + size] = sizeDirective(size), acc;
}, {}));

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  size_small: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_small, // 16 
  size_regular: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size, // 24
  size_medium: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_medium, // 32
  size_large: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_large, // 40

  // avatar background is visible when image is not yet loaded
  color_light_avatar_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_disabled),
  color_dark_avatar_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_disabled),

  color_light: "currentcolor",
  color_dark: "currentcolor"
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-ios-spinner/dist/polythene-css-ios-spinner.mjs":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-ios-spinner/dist/polythene-css-ios-spinner.mjs ***!
  \*******************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-css-base-spinner */ "../../polythene-css-base-spinner/dist/polythene-css-base-spinner.mjs");
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");





var classes = {
  component: "pe-ios-spinner",

  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-ios-spinner__blade": {
        background: "currentcolor"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint, function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      color: vars$$1["color_" + tint]
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns },
  superColor: polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["color"]
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bladeWidth = 9; // percent
var bladeHeight = 28; // percent

var kfFade = function kfFade() {
  return {
    " 0%": {
      opacity: .640
    },
    " 100%": {
      opacity: .035
    }
  };
};

var positionBlades = function positionBlades(vars$$1) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
    // reverse to improve performance on iOS
    var delay = -1 / 12 * i * Object(polythene_core__WEBPACK_IMPORTED_MODULE_2__["styleDurationToMs"])(vars$$1.rotation_animation_duration);
    var rotation = 360 - 360 / 12 * i;
    return _defineProperty$1({}, " .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")", {
      transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
      animation: "iosSpinnerFade " + vars$$1.rotation_animation_duration + " " + delay + "ms linear infinite"
    });
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-ios-spinner__blades": {
        transform: "translate3d(0,0,0)",
        position: "relative",
        width: "100%",
        height: "100%"
      },

      " .pe-ios-spinner__blade": {
        position: "absolute",
        width: bladeWidth + "%",
        height: bladeHeight + "%",
        left: (100 - bladeWidth) / 2 + "%",
        top: (100 - bladeHeight) / 2 + "%",
        opacity: 0,
        borderRadius: "50px"
      },

      "@keyframes iosSpinnerFade": kfFade()
    })];
  },
  rotation_animation_duration: function rotation_animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-ios-spinner__blades": [positionBlades(vars$$1)]
    })];
  }
};

var layout$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["createLayout"])({ varFns: varFns, superLayout: polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["layout"] });

var vars$1 = {
  general_styles: true,

  rotation_animation_duration: "1s",

  color_light: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_3__["vars"].color_light_foreground),
  color_dark: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_3__["vars"].color_dark_foreground)
};

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-list-tile/dist/polythene-css-list-tile.mjs":
/*!***************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-list-tile/dist/polythene-css-list-tile.mjs ***!
  \***************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {
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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: "inherit"
        }
      },
      ":not(.pe-list-tile--disabled)": {
        " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
          outline: "none",
          backgroundColor: "inherit"
        }
      },
      "&.pe-list-tile--sticky": {
        backgroundColor: "inherit"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_title", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars$$1["color_" + tint + "_title"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      backgroundColor: vars$$1["color_" + tint + "_background"],

      "&.pe-list-tile--sticky": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_list_header", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--header": {
        color: vars$$1["color_" + tint + "_list_header"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_subtitle", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-list-tile__subtitle": {
        color: vars$$1["color_" + tint + "_subtitle"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_secondary", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-list-tile__secondary": {
        color: vars$$1["color_" + tint + "_secondary"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_front", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-list-tile__content-front": {
        color: vars$$1["color_" + tint + "_front"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_text_disabled", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--disabled": {
        "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
          color: vars$$1["color_" + tint + "_text_disabled"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_selected_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--selected": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: vars$$1["color_" + tint + "_selected_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_highlight_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: vars$$1["color_" + tint + "_highlight_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-list-tile--disabled)": {
        " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_background"]
        }
      }
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_hover", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--hoverable": {
        color: vars$$1["color_" + tint + "_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_hover_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--hoverable": {
        " .pe-list-tile__primary, .pe-list-tile__secondary": {
          backgroundColor: vars$$1["color_" + tint + "_hover_background"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_hover_front", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--hoverable": {
        " .pe-list-tile__primary .pe-list-tile__content-front": {
          color: vars$$1["color_" + tint + "_hover_front"]
        }
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns, lightTintHoverFns: lightTintHoverFns, darkTintHoverFns: darkTintHoverFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function (vars$$1) {
    return { // eslint-disable-line no-unused-vars
      " .pe-list-tile__content-front + .pe-list-tile__content": _defineProperty$1({}, isRTL ? "paddingRight" : "paddingLeft", 0)
    };
  };
}; // eslint-disable-line no-unused-vars
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var paddingH = function paddingH(h) {
  return {
    "padding-left": h + "px",
    "padding-right": h + "px"
  };
};

var paddingV = function paddingV(top, bottom) {
  return {
    "padding-top": top + "px",
    "padding-bottom": (bottom || top) + "px"
  };
};

var title_line_count_single_line_height = function title_line_count_single_line_height(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    lineHeight: vars$$1.single_line_height + "px",

    ".pe-list-tile--navigation": {
      " .pe-list-tile__title": {
        minHeight: vars$$1.single_line_height + "px"
      }
    },

    " .pe-list-tile__title": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].ellipsis(vars$$1.title_line_count, vars$$1.single_line_height, "px")]
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(vars$$1), polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layout, {
      position: "relative",

      ".pe-list-tile--navigation": {
        " .pe-list-tile__title": {
          whiteSpace: "pre-wrap"
        }
      },

      ".pe-list-tile--sticky": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].sticky(2),

      " .pe-list-tile__primary": {
        width: "100%"
      },

      " .pe-list-tile__primary, .pe-list-tile__secondary": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("background", ".200s"), {
        textDecoration: "none",
        color: "inherit",
        border: "none"
      }],

      ":not(.pe-list-tile--header) .pe-list-tile__primary": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), {
        position: "relative",

        " .pe-list-tile__content:not(.pe-list-tile__content-front)": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex()]
      }],

      ":not(.pe-list-tile--disabled)": {
        outline: "none"
      },

      " .pe-list-tile__secondary": {
        textAlign: "right",
        position: "relative"
      },

      " .pe-list-tile__content": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutVertical, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].selfCenter, {
        width: "100%",

        ".pe-list-tile__content-front": {
          flexShrink: 0
        }
      }],

      " .pe-list-tile__title": {
        whiteSpace: "normal"
      },

      " .pe-list-tile__subtitle": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].ellipsis(vars$$1.subtitle_line_count, vars$$1.line_height_subtitle, "px"), {
        fontSize: vars$$1.font_size_subtitle + "px",
        fontWeight: vars$$1.font_weight_subtitle,
        lineHeight: vars$$1.line_height_subtitle + "px",

        ".pe-list-tile__high-subtitle": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].ellipsis(vars$$1.high_subtitle_line_count, vars$$1.line_height_subtitle, "px"), {
          whiteSpace: "normal"
        }]
      }],

      ".pe-list-tile--selected, &.pe-list-tile--disabled": {
        "&, a": {
          pointerEvents: "none"
        }
      },

      ".pe-list-tile--subtitle": {
        " .pe-list-tile__content": {
          " .pe-list-tile__title": {
            padding: 0
          }
        }
      },

      ".pe-list-tile--high-subtitle": {
        " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutStart],
        " .pe-list-tile__content": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].selfStart, {
          " .pe-list-tile__title": {
            padding: 0
          }
        }]
      },

      // List header
      ".pe-list-tile--header": {
        pointerEvents: "none",

        " .pe-list-tile__content": {
          paddingTop: 0,
          paddingBottom: 0
        },
        " .pe-list-tile__title": {
          padding: 0
        }
      },

      // Firefox only
      "@supports (-moz-appearance:none) and (display:contents)": {
        " .pe-list-tile__primary, .pe-list-tile__content": {
          overflow: "hidden"
        }
      },

      // Menu

      ".pe-dialog .pe-menu__content &": {
        " .pe-list-tile__content": {
          paddingLeft: "24px",
          paddingRight: "24px"
        },
        " .pe-list-tile__content-front": {
          paddingRight: 0,
          width: "64px",
          marginRight: "-7px"
        },

        " .pe-list-tile__title": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].ellipsis("none")
      },

      ".pe-menu__content &": {
        ":not(.pe-list-tile--disabled)": {
          cursor: "default",

          "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
            " .pe-list-tile__title, .pe-list-tile__subtitle": {
              userSelect: "none",
              "-moz-user-select": "none"
            }
          }
        }
      },

      // Non-touch

      "html.pe-no-touch &.pe-list-tile--hoverable, \
        html.pe-no-touch &.pe-list-tile--selectable": {
        ":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
          cursor: "pointer"
        }
      }
    }]), _defineProperty$1({}, Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), alignRight(vars$$1))];
  },
  title_line_count: function title_line_count(selector, vars$$1) {
    return [title_line_count_single_line_height(selector, vars$$1)];
  },
  single_line_height: function single_line_height(selector, vars$$1) {
    return [title_line_count_single_line_height(selector, vars$$1)];
  },
  font_size_title: function font_size_title(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      fontSize: vars$$1.font_size_title + "px",

      " .pe-list-tile__secondary": {
        fontSize: vars$$1.font_size_title + "px"
      }
    })];
  },
  font_weight_title: function font_weight_title(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      fontWeight: vars$$1.font_weight_title
    })];
  },
  font_size_navigation_title: function font_size_navigation_title(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--navigation": {
        fontSize: vars$$1.font_size_navigation_title + "px"
      }
    })];
  },
  font_weight_navigation_title: function font_weight_navigation_title(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--navigation": {
        fontWeight: vars$$1.font_weight_navigation_title
      }
    })];
  },
  padding: function padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-list-tile--header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content-front)": [paddingV(vars$$1.padding, vars$$1.padding + 1)]
      },

      " .pe-list-tile__content": {
        ".pe-list-tile__content-front": [paddingV(vars$$1.padding - 5)]
      }
    })];
  },
  side_padding: function side_padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-list-tile__content": [paddingH(vars$$1.side_padding)]
    })];
  },
  compact_front_item_width: function compact_front_item_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-list-tile__content-front": {
        ".pe-list-tile--compact-front": {
          width: vars$$1.compact_front_item_width + "px"
        }
      }
    })];
  },
  front_item_width: function front_item_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-list-tile__content-front": {
        ":not(.pe-list-tile--compact-front)": {
          width: vars$$1.front_item_width + "px"
        }
      }
    })];
  },
  font_size_small: function font_size_small(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-list-tile__content": {
        " small": {
          fontSize: vars$$1.font_size_small + "px"
        }
      }
    })];
  },
  has_high_subtitle_padding: function has_high_subtitle_padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--high-subtitle": {
        " .pe-list-tile__content": [paddingV(vars$$1.has_high_subtitle_padding, vars$$1.has_high_subtitle_padding + 1)]
      }
    })];
  },
  has_subtitle_padding: function has_subtitle_padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--subtitle": {
        " .pe-list-tile__content": [paddingV(vars$$1.has_subtitle_padding, vars$$1.has_subtitle_padding + 1)]
      }
    })];
  },
  single_height: function single_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--header": {
        height: vars$$1.single_height + "px",

        " .pe-list-tile__title": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].ellipsis(1, vars$$1.single_height, "px"), {
          lineHeight: vars$$1.single_height + "px",
          padding: 0
        }]
      }
    })];
  },
  font_size_list_header: function font_size_list_header(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__title": {
          fontSize: vars$$1.font_size_list_header + "px"
        }
      }
    })];
  },
  font_weight_list_header: function font_weight_list_header(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__title": {
          fontWeight: vars$$1.font_weight_list_header
        }
      }
    })];
  },
  compact_padding: function compact_padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-list--compact &, &.pe-list-tile--compact": {
        ":not(.pe-list-tile--header)": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": paddingV(vars$$1.compact_padding, vars$$1.compact_padding + 1)
        }
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

// SPECS
//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76

var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var vars$1 = {
  general_styles: true,

  compact_front_item_width: 64,
  compact_padding: 9,
  compact_side_padding: 1 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  font_size_list_header: 14,
  font_size_navigation_title: 14,
  font_size_small: 12,
  font_size_subtitle: 14,
  font_size_title: 16,
  font_weight_list_header: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].font_weight_medium,
  font_weight_navigation_title: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].font_weight_medium,
  font_weight_subtitle: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].font_weight_normal,
  font_weight_title: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].font_weight_normal,
  front_item_width: 72,
  has_high_subtitle_padding: 13,
  has_subtitle_padding: 15,
  high_subtitle_line_count: 2,
  line_height_subtitle: 20,
  padding: 13,
  side_padding: 2 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  single_height: single_height,
  single_line_height: single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height: single_with_icon_height,
  single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
  subtitle_line_count: 1,
  title_line_count: 1,

  color_light_title: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_subtitle: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_info: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_tertiary),
  color_light_front: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_text_disabled: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  color_light_list_header: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_tertiary),
  color_light_secondary: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_hover: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_hover_front: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_hover_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_hover),
  color_light_focus_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_hover),
  color_light_selected_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_hover),
  color_light_highlight_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_background_hover),
  // background color may be set in theme; disabled by default
  // color_light_background:          "inherit",

  color_dark_title: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_subtitle: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_info: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_tertiary),
  color_dark_front: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_text_disabled: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled),
  color_dark_list_header: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_tertiary),
  color_dark_secondary: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_hover: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_hover_front: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_hover_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_hover),
  color_dark_selected_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_hover),
  color_dark_highlight_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_background_hover)
  // background color may be set in theme; disabled by default
  // color_dark_background:           "inherit",
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-list/dist/polythene-css-list.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-list/dist/polythene-css-list.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-list",

  // states
  border: "pe-list--border",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorder: "pe-list--indented-border",
  padding: "pe-list--padding",
  paddingTop: "pe-list--padding-top",
  paddingBottom: "pe-list--padding-bottom",

  // lookup
  header: listTileClasses.header
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles() {
    return [];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars$$1) {
    var _sel;

    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, (_sel = {}, _defineProperty(_sel, "& + .pe-list", {
      borderTopColor: vars$$1["color_" + tint + "_border"]
    }), _defineProperty(_sel, ".pe-list--border", {
      " .pe-list-tile": {
        ":not(:last-child)": {
          borderColor: vars$$1["color_" + tint + "_border"]
        }
      }
    }), _defineProperty(_sel, ".pe-list--indented-border", {
      " .pe-list-tile": {
        " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
          borderColor: vars$$1["color_" + tint + "_border"]
        }
      }
    }), _sel))];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var borderStyle = function borderStyle(vars$$1) {
  return {
    borderStyle: "none none solid none",
    borderWidth: vars$$1.border_width_bordered + "px"
  };
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      flexGrow: 1,

      ".pe-list--header": {
        paddingTop: 0
      },
      ".pe-list--indented-border": {
        borderTop: "none"
      }
    })];
  },
  padding: function padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list--padding": {
        padding: vars$$1.padding + "px 0"
      },
      ".pe-list--padding-top": {
        paddingTop: vars$$1.padding + "px"
      },
      ".pe-list--padding-bottom": {
        paddingBottom: vars$$1.padding + "px"
      }
    })];
  },
  padding_compact: function padding_compact(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list--compact": {
        padding: vars$$1.padding_compact + "px 0"
      }
    })];
  },
  border_width_stacked: function border_width_stacked(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      "& + &": {
        borderStyle: "solid none none none",
        borderWidth: vars$$1.border_width_stacked + "px"
      }
    })];
  },
  border_width_bordered: function border_width_bordered(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-list--border": {
        " .pe-list-tile": {
          ":not(.pe-list-tile--header):not(:last-child)": {
            "&": borderStyle(vars$$1)
          }
        }
      },
      ".pe-list--indented-border": {
        " .pe-list-tile": {
          ":not(.pe-list-tile--header):not(:last-child)": {
            " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(vars$$1)
          }
        }
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  border_width_bordered: 1,
  border_width_stacked: 1,
  padding: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component, // vertical padding
  padding_compact: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component * 3 / 4,

  color_light_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_border_light),
  color_dark_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_border_light)

  // background color may be set in theme; disabled by default
  // color_light_background: "inherit",
  // color_dark_background:  "inherit"
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-material-design-progress-spinner/dist/polythene-css-material-design-progress-spinner.mjs":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-material-design-progress-spinner/dist/polythene-css-material-design-progress-spinner.mjs ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_css_material_design_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-css-material-design-spinner */ "../../polythene-css-material-design-spinner/dist/polythene-css-material-design-spinner.mjs");
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");




var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-md-progress-spinner__circle": {
        borderColor: "currentcolor"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint, function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      color: vars$$1["color_" + tint]
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns },
  superColor: polythene_css_material_design_spinner__WEBPACK_IMPORTED_MODULE_0__["color"]
});

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      position: "relative",

      " .pe-md-progress-spinner__animation": {
        position: "absolute",
        width: "100%",
        height: "100%"
      },

      " .pe-md-progress-spinner__circle": {
        position: "absolute",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderStyle: "solid",
        borderRadius: "50%"
      },

      " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
        transform: "rotate(0)",
        clip: "rect(0, 0, 0, 0)"
      }
    })];
  },
  progress_animation_duration: function progress_animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-md-progress-spinner__animation": {
        animationDuration: vars$$1.progress_animation_duration
      }
    })];
  }
};

var layout$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["createLayout"])({ varFns: varFns, superLayout: polythene_css_material_design_spinner__WEBPACK_IMPORTED_MODULE_0__["layout"] });

var vars$1 = {
  general_styles: true,

  progress_animation_duration: ".8s",

  color_light: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_dark: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary)
};

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-material-design-spinner/dist/polythene-css-material-design-spinner.mjs":
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-material-design-spinner/dist/polythene-css-material-design-spinner.mjs ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$2; });
/* harmony import */ var polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-css-base-spinner */ "../../polythene-css-base-spinner/dist/polythene-css-base-spinner.mjs");
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");




var classes = {
  component: "pe-md-spinner",

  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Styling derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-md-spinner__layer": {
        borderColor: "currentcolor"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_single", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      color: vars$$1["color_" + tint + "_single"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_1", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-1": {
          borderColor: vars$$1["color_" + tint + "_1"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_2", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-2": {
          borderColor: vars$$1["color_" + tint + "_2"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_3", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-3": {
          borderColor: vars$$1["color_" + tint + "_3"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_4", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-4": {
          borderColor: vars$$1["color_" + tint + "_4"]
        }
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns },
  superColor: polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["color"]
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OPACITY_MIN = 0;
var OPACITY_MAX = .99;
var CURVE_INFINITE = "cubic-bezier(0.4, 0.0, 0.2, 1) infinite both";

var kfRotate = function kfRotate() {
  return {
    " to": {
      transform: "rotate(360deg)"
    }
  };
};

var kfLeftSpin = function kfLeftSpin() {
  return kfSpin(1);
};
var kfRightSpin = function kfRightSpin() {
  return kfSpin(-1);
};

var kfSpin = function kfSpin(direction) {
  return {
    " from": {
      "transform": "rotate(" + direction * 130 + "deg)"
    },
    " 50%": {
      "transform": "rotate(" + direction * -5 + "deg)"
    },
    " to": {
      "transform": "rotate(" + direction * 130 + "deg)"
    }
  };
};

var kfFadeOut = function kfFadeOut() {
  return {
    " from": {
      opacity: OPACITY_MAX
    },
    " to": {
      opacity: OPACITY_MIN
    }
  };
};

var kfFillUnfillRotate = function kfFillUnfillRotate(arcSize) {
  return {
    " 12.5%": {
      transform: "rotate(" + 0.5 * arcSize + "deg)"
    },
    " 25%": {
      transform: "rotate(" + 1.0 * arcSize + "deg)"
    },
    " 37.5%": {
      transform: "rotate(" + 1.5 * arcSize + "deg)"
    },
    " 50%": {
      transform: "rotate(" + 2.0 * arcSize + "deg)"
    },
    " 62.5%": {
      transform: "rotate(" + 2.5 * arcSize + "deg)"
    },
    " 75%": {
      transform: "rotate(" + 3.0 * arcSize + "deg)"
    },
    " 87.5%": {
      transform: "rotate(" + 3.5 * arcSize + "deg)"
    },
    " to": {
      transform: "rotate(" + 4.0 * arcSize + "deg)"
    }
  };
};

/**
 * HACK: Even though the intention is to have the current .pe-md-spinner__layer at
 * `opacity: 1`, we set it to `opacity: 0.99` instead since this forces Chrome
 * to do proper subpixel rendering for the elements being animated. This is
 * especially visible in Chrome 39 on Ubuntu 14.04. See:
 *
 * - https://github.com/Polymer/paper-spinner/issues/9
 * - https://code.google.com/p/chromium/issues/detail?id=436255
 */
var kfLayer1FadeInOut = function kfLayer1FadeInOut() {
  return {
    " from": {
      opacity: OPACITY_MAX
    },
    " 25%": {
      opacity: OPACITY_MAX
    },
    " 26%": {
      opacity: OPACITY_MIN
    },
    " 89%": {
      opacity: OPACITY_MIN
    },
    " 90%": {
      opacity: OPACITY_MAX
    },
    " 100%": {
      opacity: OPACITY_MAX
    }
  };
};

var kfLayer2FadeInOut = function kfLayer2FadeInOut() {
  return {
    " from": {
      opacity: OPACITY_MIN
    },
    " 15%": {
      opacity: OPACITY_MIN
    },
    " 25%": {
      opacity: OPACITY_MAX
    },
    " 50%": {
      opacity: OPACITY_MAX
    },
    " 51%": {
      opacity: OPACITY_MIN
    }
  };
};

var kfLayer3FadeInOut = function kfLayer3FadeInOut() {
  return {
    " from": {
      opacity: OPACITY_MIN
    },
    " 40%": {
      opacity: OPACITY_MIN
    },
    " 50%": {
      opacity: OPACITY_MAX
    },
    " 75%": {
      opacity: OPACITY_MAX
    },
    " 76%": {
      opacity: OPACITY_MIN
    }
  };
};

var kfLayer4FadeInOut = function kfLayer4FadeInOut() {
  return {
    " from": {
      opacity: OPACITY_MIN
    },
    " 65%": {
      opacity: OPACITY_MIN
    },
    " 75%": {
      opacity: OPACITY_MAX
    },
    " 90%": {
      opacity: OPACITY_MAX
    },
    " 100%": {
      opacity: OPACITY_MIN
    }
  };
};

var layerAnimation = function layerAnimation(vars$$1, num) {
  return _defineProperty$1({}, ".pe-md-spinner__layer-" + num, {
    animation: "mdSpinnerFillUnfillRotate " + 4 * vars$$1.arc_time + "s " + CURVE_INFINITE + ",  mdSpinnerLayer" + num + "FadeInOut " + 4 * vars$$1.arc_time + "s " + CURVE_INFINITE
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      "@keyframes mdSpinnerRotate": kfRotate(),
      "@keyframes mdSpinnerRightSpin": kfRightSpin(),
      "@keyframes mdSpinnerLeftSpin": kfLeftSpin(),
      "@keyframes mdSpinnerFadeOut": kfFadeOut(),
      "@keyframes mdSpinnerLayer1FadeInOut": kfLayer1FadeInOut(),
      "@keyframes mdSpinnerLayer2FadeInOut": kfLayer2FadeInOut(),
      "@keyframes mdSpinnerLayer3FadeInOut": kfLayer3FadeInOut(),
      "@keyframes mdSpinnerLayer4FadeInOut": kfLayer4FadeInOut(),

      " .pe-md-spinner__animation": {
        position: "relative",
        width: "100%",
        height: "100%",

        /* The spinner does not have any contents that would have to be
        * flipped if the direction changes. Always use ltr so that the
        * style works out correctly in both cases. */
        direction: "ltr"
      },

      /**
      * Patch the gap that appear between the two adjacent div.pe-md-spinner__circle-clipper while the
      * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
      *
      * Update: the gap no longer appears on Chrome when .pe-md-spinner__layer"s opacity is 0.99,
      * but still does on Safari and IE.
      */
      " .pe-md-spinner__gap-patch": {
        position: "absolute",
        boxSizing: "border-box",
        top: 0,
        left: "45%",
        width: "10%",
        height: "100%",
        overflow: "hidden",
        borderColor: "inherit"
      },

      " .pe-md-spinner__gap-patch .pe-md-spinner__circle": {
        width: "1000%",
        left: "-450%"
      },

      " .pe-md-spinner__circle-clipper": {
        display: "inline-block",
        fontSize: 0,
        lineHeight: 0,
        position: "relative",
        width: "50%",
        height: "100%",
        overflow: "hidden",
        borderColor: "inherit"
      },

      " .pe-md-spinner__circle-clipper .pe-md-spinner__circle": {
        width: "200%"
      },

      " .pe-md-spinner__circle": [polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["mixin"].fit(), {
        animation: "none",
        boxSizing: "border-box",
        height: "100%",
        borderStyle: "solid",
        borderColor: "inherit",
        borderRadius: "50%",
        borderBottomColor: "transparent !important"
      }],

      " .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle": {
        transform: "rotate(129deg)",
        borderRightColor: "transparent !important"
      },

      " .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle": {
        transform: "rotate(-129deg)",
        left: "-100%",
        borderLeftColor: "transparent !important"
      },

      /**
      * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
      *
      * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn"t
      * guarantee that the animation will start _exactly_ after that value. So we avoid using
      * animation-delay and instead set custom keyframes for each color (as redundant as it
      * seems).
      *
      * We write out each animation in full (instead of separating animation-name,
      * animation-duration, etc.) because under the polyfill, Safari does not recognize those
      * specific properties properly, treats them as -webkit-animation, and overrides the
      * other animation rules. See https://github.com/Polymer/platform/issues/53.
      */
      " .pe-md-spinner__layer": [[1, 2, 3, 4].map(function (num) {
        return layerAnimation(vars$$1, num);
      }), {
        position: "absolute",
        width: "100%",
        height: "100%",
        whiteSpace: "nowrap"
      }]
    })];
  },
  rotation_duration: function rotation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-md-spinner__animation": {
        animation: "mdSpinnerRotate " + vars$$1.rotation_duration + "s linear infinite"
      }
    })];
  },
  border_width_small: function border_width_small(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ".pe-spinner--small": {
        " .pe-md-spinner__circle": {
          borderWidth: vars$$1.border_width_small + "px"
        }
      }
    })];
  },
  border_width_regular: function border_width_regular(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ".pe-spinner--regular": {
        " .pe-md-spinner__circle": {
          borderWidth: vars$$1.border_width_regular + "px"
        }
      }
    })];
  },
  border_width_medium: function border_width_medium(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ".pe-spinner--medium": {
        " .pe-md-spinner__circle": {
          borderWidth: vars$$1.border_width_medium + "px"
        }
      }
    })];
  },
  border_width_large: function border_width_large(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ".pe-spinner--large": {
        " .pe-md-spinner__circle": {
          borderWidth: vars$$1.border_width_large + "px"
        }
      }
    })];
  },
  border_width_fab: function border_width_fab(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      ".pe-spinner--fab": {
        " .pe-md-spinner__circle": {
          borderWidth: vars$$1.border_width_fab + "px"
        }
      }
    })];
  },
  arc_size: function arc_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      "@keyframes mdSpinnerFillUnfillRotate": kfFillUnfillRotate(vars$$1.arc_size)
    })];
  },
  arc_time: function arc_time(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["sel"])(selector, {
      " .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle": {
        animation: "mdSpinnerLeftSpin " + vars$$1.arc_time + "s " + CURVE_INFINITE
      },
      " .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle": {
        animation: "mdSpinnerRightSpin " + vars$$1.arc_time + "s " + CURVE_INFINITE
      },
      " .pe-md-spinner__layer": {
        animation: "mdSpinnerFillUnfillRotate " + 4 * vars$$1.arc_time + "s " + CURVE_INFINITE
      }
    })];
  }
};

var layout$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["createLayout"])({ varFns: varFns, superLayout: polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["layout"] });

/*
Styling derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var arc_size = 270; // degrees - amount of circle the arc takes up
var arc_time = 1.333; // s - time it takes to expand and contract arc
var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

var blue400 = "#42a5f5";
var red500 = "#f44336";
var yellow600 = "#fdd835";
var green500 = "#4caf50";

var vars$2 = {
  general_styles: true,

  arc_size: arc_size,
  arc_start_degrees: arc_start_degrees,
  arc_time: arc_time,
  border_width_fab: polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["vars"].size_fab / polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["vars"].size_regular * 3,
  border_width_large: polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["vars"].size_large / polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["vars"].size_regular * 3,
  border_width_medium: polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["vars"].size_medium / polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["vars"].size_regular * 3,
  border_width_regular: 3,
  border_width_small: polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["vars"].size_small / polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__["vars"].size_regular * 3,
  rotation_duration: rotation_duration,

  color_light_single: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_light_1: blue400,
  color_light_2: red500,
  color_light_3: yellow600,
  color_light_4: green500,

  color_dark_single: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_dark_1: blue400,
  color_dark_2: red500,
  color_dark_3: yellow600,
  color_dark_4: green500
};

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].createAddStyle(selector, fns, vars$2);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].createGetStyle(selector, fns, vars$2);

polythene_core_css__WEBPACK_IMPORTED_MODULE_1__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$2
});




/***/ }),

/***/ "../../polythene-css-menu/dist/polythene-css-menu.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-menu/dist/polythene-css-menu.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-menu__panel": {
        "background-color": vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-menu__backdrop": {
        "background-color": vars$$1["color_" + tint + "_backdrop_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      textAlign: isRTL ? "right" : "left"
    };
  };
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var unifyWidth = function unifyWidth(vars$$1, width) {
  return width < vars$$1.min_width ? vars$$1.min_width : width;
};

var widthClass = function widthClass(width) {
  var widthStr = width.toString().replace(".", "-");
  return "pe-menu--width-" + widthStr;
};

var widthStyle = function widthStyle(_ref) {
  var vars$$1 = _ref.vars,
      width = _ref.width,
      value = _ref.value;

  var s = unifyWidth(vars$$1, width);
  return _defineProperty$1({}, "." + widthClass(s), {
    " .pe-menu__panel": {
      width: value || vars$$1.width_factor * s + "px"
      // We can't set maxWidth because we don't know the width of the container
    }
  });
};

var widths_min_width_width_factor = function widths_min_width_width_factor(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [vars$$1.widths.map(function (width) {
    return widthStyle({ vars: vars$$1, width: width });
  }), {
    " .pe-menu__panel": {
      minWidth: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_menu * vars$$1.min_width + "px"
    }
  }]);
};

var _backdrop = function _backdrop(selector) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-menu__backdrop": {
      display: "block"
    }
  });
};

var _top_menu = function _top_menu(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [vars$$1.widths.map(function (width) {
    return widthStyle({ vars: vars$$1, width: width, value: "100vw" });
  }), {
    " .pe-menu__panel": {
      position: "fixed",
      width: "100vw",
      top: 0,
      left: 0,
      right: 0,
      bottom: "auto",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }
  }]);
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(vars$$1), {
      position: "static",

      ".pe-menu--width-auto": {
        width: "auto"
      },

      ".pe-menu--permanent": {
        " .pe-menu__panel": {
          opacity: 1,
          position: "relative"
        }
      },

      ".pe-menu--floating": {
        " .pe-menu__panel": {
          zIndex: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].z_menu,
          transitionProperty: "opacity, transform"
        }
      },

      " .pe-menu__panel": {
        transitionProperty: "all",
        opacity: 0,
        position: "absolute"
      },

      " .pe-menu__backdrop": {
        display: "none",
        transitionProperty: "all",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0,
        zIndex: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].z_menu
      },

      ".pe-menu--backdrop": _backdrop(selector),

      ".pe-menu--visible .pe-menu__backdrop": {
        opacity: 1
      },

      ".pe-menu--top-menu": _top_menu(selector, vars$$1),

      " .pe-menu__content": {
        overflow: "auto",
        width: "100%",
        height: "100%"
      },

      ".pe-menu--full-height": {
        height: "100%",

        " .pe-menu__panel": {
          height: "100%"
        }
      }
    }]), _defineProperty$1({}, Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), alignRight(vars$$1))];
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionDelay: vars$$1.animation_delay
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionDuration: vars$$1.animation_duration
      }
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionTimingFunction: vars$$1.animation_timing_function
      }
    })];
  },
  animation_show_css: function animation_show_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-menu--visible": {
        " .pe-menu__panel": vars$$1.animation_show_css
      }
    })];
  },
  animation_hide_css: function animation_hide_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-menu__panel": vars$$1.animation_hide_css
    })];
  },
  animation_show_origin_effect_css: function animation_show_origin_effect_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-menu--origin.pe-menu--visible": {
        " .pe-menu__panel": vars$$1.animation_show_origin_effect_css
      }
    })];
  },
  animation_hide_origin_effect_css: function animation_hide_origin_effect_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-menu--origin:not(.pe-menu--visible)": {
        " .pe-menu__panel": vars$$1.animation_hide_origin_effect_css
      }
    })];
  },
  height: function height(selector, vars$$1) {
    return [vars$$1.height !== undefined && Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-menu__panel": {
        height: vars$$1.height
      }
    })];
  },
  widths: function widths(selector, vars$$1) {
    return [widths_min_width_width_factor(selector, vars$$1)];
  },
  min_width: function min_width(selector, vars$$1) {
    return [widths_min_width_width_factor(selector, vars$$1)];
  },
  width_factor: function width_factor(selector, vars$$1) {
    return [widths_min_width_width_factor(selector, vars$$1)];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-menu__panel": {
        borderRadius: vars$$1.border_radius + "px"
      }
    })];
  },
  top_menu: function top_menu(selector, vars$$1) {
    return [vars$$1.top_menu && _top_menu(selector, vars$$1)];
  },
  backdrop: function backdrop(selector, vars$$1) {
    return [vars$$1.backdrop && _backdrop(selector)];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_delay: "0s",
  animation_duration: ".180s",
  animation_hide_css: "opacity: 0;",
  animation_hide_origin_effect_css: "transform: scale(0.75);", // set to "transform: scale(1)" to reset scaling
  animation_show_css: "opacity: 1;",
  animation_show_origin_effect_css: "transform: scale(1);",
  animation_timing_function: "ease-in-out",
  backdrop: undefined, // (Boolean) - if not set, backdrop existence is set by component option
  border_radius: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_block_border_radius,
  height: undefined, // (height value with unit) - if not set, height is set by component option
  min_width: 1.5,
  top_menu: false, // set to true to position the menu at the top of the screen, full width
  width_factor: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_menu,
  widths: [1, 1.5, 2, 3, 4, 5, 6, 7],

  color_light_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background),
  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_background),

  color_light_backdrop_background: "rgba(0, 0, 0, .1)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"

  // text colors are set by content, usually list tiles
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-notification/dist/polythene-css-notification.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-notification/dist/polythene-css-notification.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: addStyle, color, customLayoutFns, getStyle, holderLayout, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customLayoutFns", function() { return customLayoutFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "holderLayout", function() { return holderLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-notification__content": {
        color: vars$$1["color_" + tint + "_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-notification__content": {
        background: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenterCenter, {
      // assumes position relative
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      pointerEvents: "none",
      justifyContent: "flex-start", // For IE 11

      ".pe-multiple--screen": {
        position: "fixed",
        zIndex: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].z_notification
      }
    }]), {
      ":not(.pe-notification--container) .pe-multiple--container": {
        position: "absolute"
      }
    }];
  }
};

var holderLayout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({
  varFns: varFns
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var title_single_padding_v_title_padding_h = function title_single_padding_v_title_padding_h(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-notification__title": {
      padding: vars$$1.title_single_padding_v + "px " + vars$$1.title_padding_h + "px"
    }
  });
};

var customLayoutFns = {
  animation_hide_css: function animation_hide_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, vars$$1.animation_hide_css)];
  },
  animation_show_css: function animation_show_css(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-notification--visible": [vars$$1.animation_show_css]

    })];
  },
  width: function width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-notification__content": {
        width: vars$$1.width + "px"
      }
    })];
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      transitionDelay: vars$$1.animation_delay
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      transitionDuration: vars$$1.animation_duration
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      transitionTimingFunction: vars$$1.animation_timing_function
    })];
  },
  side_padding: function side_padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-notification__content": {
        padding: "0 " + vars$$1.side_padding + "px"
      }
    })];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-notification__content": {
        borderRadius: vars$$1.border_radius + "px"
      }
    })];
  },
  title_single_padding_v: function title_single_padding_v(selector, vars$$1) {
    return [title_single_padding_v_title_padding_h(selector, vars$$1)];
  },
  title_padding_h: function title_padding_h(selector, vars$$1) {
    return [title_single_padding_v_title_padding_h(selector, vars$$1)];
  },
  font_size: function font_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-notification__title": {
        fontSize: vars$$1.font_size + "px"
      }
    })];
  },
  line_height: function line_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-notification__title": {
        lineHeight: vars$$1.line_height + "px"
      }
    })];
  },
  title_multi_padding_v: function title_multi_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-notification--horizontal": {
        " .pe-notification__title--multi-line": {
          paddingTop: vars$$1.title_multi_padding_v + "px",
          paddingBottom: vars$$1.title_multi_padding_v + "px"
        }
      },
      ".pe-notification--vertical": {
        " .pe-notification__title--multi-line": {
          paddingTop: vars$$1.title_multi_padding_v + "px"
        }
      }
    })];
  }
};

var varFns$1 = _extends$1({}, {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenter, {
      pointerEvents: "all",
      justifyContent: "center",
      margin: "0 auto",
      transitionProperty: "all",
      opacity: 0,

      " .pe-notification__title": {
        flex: "1 0 auto"
      },

      " .pe-notification__action": {
        " .pe-button": {
          margin: 0
        }
      },

      " .pe-notification__content": {
        maxWidth: "100%"
      },

      ".pe-notification--horizontal": {
        " .pe-notification__content": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal,
        " .pe-notification__title": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), {
          alignSelf: "center"
        }],
        " .pe-notification__action": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenter
      },
      ".pe-notification--vertical": {
        " .pe-notification__content": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutVertical],

        " .pe-notification__title": {
          paddingBottom: "6px"
        },
        " .pe-notification__action": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutEndJustified, {
          width: "100%"
        }]
      }
    }])];
  }
}, customLayoutFns);

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({
  varFns: varFns$1
});

var buttonPaddingH = 8; // padding, inner text space

var vars$1 = {
  general_styles: true,

  animation_delay: "0s",
  animation_duration: ".3s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  border_radius: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_block_border_radius,
  font_size: 14,
  line_height: 20,
  min_height: 80,
  side_padding: 24 - buttonPaddingH,
  title_multi_padding_v: 20, // 24 - natural line height
  title_padding_h: buttonPaddingH,
  title_single_padding_v: 14,
  width: 288,

  color_light_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background),
  color_light_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_dark_primary),

  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_background),
  color_dark_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary)
};

var fns = [layout, color];
var selector = "." + classes.component;

var holderFns = [holderLayout];
var holderSelector = "." + classes.holder;

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, holderSelector],
    fns: holderFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments[1];

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref2.mediaQuery;

  return polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }).concat(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }));
};

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [holderSelector],
  fns: holderFns,
  vars: vars$1
});
polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-radio-button/dist/polythene-css-radio-button.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-radio-button/dist/polythene-css-radio-button.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-css-selection-control */ "../../polythene-css-selection-control/dist/polythene-css-selection-control.mjs");



var classes = {
  component: "pe-radio-control"
};

var color$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  superColor: polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__["color"]
});

var varFns = {
  general_styles: function general_styles() {
    return {
      " .pe-radio-group": {
        display: "flex"
      }
    };
  }
};

var layout$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns, superLayout: polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__["layout"] });

var vars = {
  general_styles: true
};

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});




/***/ }),

/***/ "../../polythene-css-raised-button/dist/polythene-css-raised-button.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-raised-button/dist/polythene-css-raised-button.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_css_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-css-button */ "../../polythene-css-button/dist/polythene-css-button.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");




var classes = {
  component: "pe-raised-button",
  super: "pe-button pe-text-button"
};

var color$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  superColor: polythene_css_button__WEBPACK_IMPORTED_MODULE_1__["color"]
});

var layout$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({
  superLayout: polythene_css_button__WEBPACK_IMPORTED_MODULE_1__["layout"]
});

var vars$1 = {
  general_styles: true,

  // Override Button:
  padding_h: 4 * polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].grid_unit, // 16
  color_light_active_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_background_hover), // same as hover
  color_light_background: "#fff",
  color_light_disabled_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_background_disabled),
  color_light_disabled_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_text_disabled),
  color_light_focus_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_background_hover),
  color_light_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_text_primary),
  color_light_wash_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_background_hover),

  color_dark_active_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary_dark),
  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_dark_disabled_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_background_disabled),
  color_dark_disabled_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_text_disabled),
  color_dark_focus_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary_active),
  color_dark_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_text_primary),
  color_dark_wash_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_background_hover)

  // hover colors may be set in theme; disabled by default

  // color_light_hover_background:    "transparent",
  // color_dark_hover_background:     vars.color_primary_active,
};

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-ripple/dist/polythene-css-ripple.mjs":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-ripple/dist/polythene-css-ripple.mjs ***!
  \*********************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");


var classes = {
  component: "pe-ripple",

  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",

  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: "inherit"
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color", function color(selector, vars) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars["color"]
    })];
  }), _defineProperty(_ref, "color_" + tint, function (selector, vars) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars["color_" + tint]
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
      color: "inherit",
      borderRadius: "inherit",
      pointerEvents: "none",

      ":not(.pe-ripple--unconstrained)": {
        borderRadius: "inherit",

        " .pe-ripple__mask": {
          overflow: "hidden",
          borderRadius: "inherit"
        }
      },
      " .pe-ripple__mask": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
        transform: "translate3d(0,0,0)"
      }],

      " .pe-ripple__waves": {
        outline: "1px solid transparent", // for IE10
        position: "absolute",
        borderRadius: "50%",
        pointerEvents: "none",
        display: "none"
      },
      " .pe-ripple__waves--animating": {
        display: "block"
      }
    }])];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars = {
  general_styles: true,

  color: "inherit" // only specify this variable to get both states
  // color_light:   "inherit",
  // color_dark:    "inherit"
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});




/***/ }),

/***/ "../../polythene-css-search/dist/polythene-css-search.mjs":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-search/dist/polythene-css-search.mjs ***!
  \*********************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {
  component: "pe-search",

  // elements
  content: "pe-search__content",

  // states
  searchFullWidth: "pe-search--full-width",
  searchInset: "pe-search--inset"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input-area": {
        backgroundColor: "transparent"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_label_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield": {
        " .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_label_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield": {
        " .pe-textfield__input": {
          color: vars$$1["color_" + tint + "_input_text"]
        }
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var inset_height_line_height_input = function inset_height_line_height_input(selector, vars$$1) {
  var inset_input_padding_v = (vars$$1.inset_height - vars$$1.line_height_input) / 2;
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-search--inset": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: inset_input_padding_v + "px",
        paddingBottom: inset_input_padding_v + "px"
      }
    }
  });
};

var full_width_height_line_height_input = function full_width_height_line_height_input(selector, vars$$1) {
  var full_width_input_padding_v = (vars$$1.full_width_height - vars$$1.line_height_input) / 2;
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-search--full-width": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: full_width_input_padding_v + "px",
        paddingBottom: full_width_input_padding_v + "px"
      }
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), {
      position: "relative", // necessary when a shadow is added

      " .pe-textfield": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), {
        alignItems: "center",
        padding: 0,
        // prevent that neighboring icon button with ripple hides the cursor
        position: "relative",
        zIndex: 1,

        " .pe-textfield__input-area": {
          padding: 0,

          ":after": {
            display: "none"
          }
        },

        " .pe-textfield__input": {
          // reset
          border: "none"
        },

        " .pe-textfield__label": {
          // reset
          top: 0,
          bottom: 0
        }
      }],

      " .pe-search__content": {
        "&, .pe-textfield": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal,
        "&, .pe-textfield__input-area": {
          flexGrow: 1
        }
      },

      " .pe-search__content > *": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutVertical, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].selfCenter],

      ".pe-search--inset": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          padding: 0
        }
      }
    }])];
  },
  font_size_input: function font_size_input(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield": {
        " .pe-textfield__input, .pe-textfield__label": {
          fontSize: vars$$1.font_size_input + "px"
        }
      }
    })];
  },
  line_height_input: function line_height_input(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        lineHeight: vars$$1.line_height_input + "px"
      }
    }), inset_height_line_height_input(selector, vars$$1)];
  },
  inset_border_radius: function inset_border_radius(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--inset": {
        "border-radius": vars$$1.inset_border_radius + "px"
      }
    })];
  },
  inset_side_padding: function inset_side_padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--inset": {
        padding: "0 " + vars$$1.inset_side_padding + "px"
      }
    })];
  },
  inset_height: function inset_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--inset": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          padding: 0,
          height: vars$$1.inset_height + "px"
        }
      }
    }), inset_height_line_height_input(selector, vars$$1)];
  },
  full_width_height: function full_width_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--full-width": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          height: vars$$1.full_width_height + "px"
        }
      }
    }), full_width_height_line_height_input(selector, vars$$1)];
  },
  inset_input_indent: function inset_input_indent(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingLeft: vars$$1.inset_input_indent + "px"
        }
      }
    })];
  },
  inset_input_right_padding: function inset_input_right_padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingRight: vars$$1.inset_input_right_padding + "px"
        }
      }
    })];
  },
  full_width_side_padding: function full_width_side_padding(selector, vars$$1) {
    var full_width_input_indent = polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_indent - vars$$1.full_width_side_padding - polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_icon_button;
    return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--full-width": {
        padding: "0 " + vars$$1.full_width_side_padding + "px",

        " .pe-textfield__input, .pe-textfield__label": {
          paddingLeft: full_width_input_indent + "px"
        }
      }
    });
  },
  full_width_border_radius: function full_width_border_radius(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--full-width": {
        borderRadius: vars$$1.full_width_border_radius + "px"
      }
    })];
  },
  full_width_input_right_padding: function full_width_input_right_padding(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-search--full-width": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingRight: vars$$1.full_width_input_right_padding + "px"
        }
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  font_size_input: 20,
  full_width_border_radius: 0,
  full_width_height: 56,
  full_width_input_right_padding: 0,
  full_width_side_margin: 0,
  full_width_side_padding: 8,
  inset_border_radius: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_block_border_radius,
  inset_height: 48,
  inset_input_indent: 16,
  inset_input_right_padding: 0,
  inset_side_padding: 0,
  line_height_input: 20,

  color_light_label_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  color_light_input_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background),

  color_dark_label_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled),
  color_dark_input_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_background)
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-selection-control/dist/polythene-css-selection-control.mjs":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-selection-control/dist/polythene-css-selection-control.mjs ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-control__box": {
        " .pe-control__button": {
          color: "inherit"
        },
        " .pe-control__button--on": {
          color: "inherit"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_on", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars$$1["color_" + tint + "_on"] // override by specifying "color"
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-control__button--off": {
        color: vars$$1["color_" + tint + "_off"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--disabled": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_disabled"]
        },
        " .pe-control__box": {
          " .pe-control__button--on, .pe-control__button--off": {
            color: vars$$1["color_" + tint + "_disabled"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-control__label": {
        color: vars$$1["color_" + tint + "_label"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_on_icon", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-control__box": {
        " .pe-control__button--on": {
          color: vars$$1["color_" + tint + "_on_icon"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off_icon", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-control__box": {
        " .pe-control__button--off": {
          color: vars$$1["color_" + tint + "_off_icon"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_on_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_off_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_on_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_on_label"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_off_label"]
        }
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function (vars$$1) {
    return {};
  };
}; // eslint-disable-line no-unused-vars
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var makeSize = function makeSize(vars$$1, height) {
  var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size;

  var labelSize = iconSize + vars$$1.label_height;
  var iconOffset = (labelSize - iconSize) / 2;
  return {
    " .pe-control__form-label": {
      height: height + "px"
    },
    " .pe-control__box": {
      width: iconSize + "px",
      height: iconSize + "px"
    },
    " .pe-button__content": {
      width: labelSize + "px",
      height: labelSize + "px",

      " .pe-icon": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(iconOffset)]
    }
  };
};

var activeButton = function activeButton() {
  return {
    opacity: 1,
    zIndex: 0
  };
};

var inactiveButton = function inactiveButton() {
  return {
    opacity: 0,
    zIndex: -1
  };
};

var button_size_icon_size = function button_size_icon_size(selector, vars$$1, isRTL) {
  var _peButtonPeContr;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-button.pe-control__button": (_peButtonPeContr = {
      top: -((vars$$1.button_size - vars$$1.icon_size) / 2) + "px"
    }, _defineProperty$1(_peButtonPeContr, isRTL ? "right" : "left", -((vars$$1.button_size - vars$$1.icon_size) / 2) + "px"), _defineProperty$1(_peButtonPeContr, isRTL ? "left" : "right", "auto"), _peButtonPeContr)
  });
};

var _label_padding_before = function _label_padding_before(selector, vars$$1, isRTL) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-control__label": _defineProperty$1({}, isRTL ? "paddingRight" : "paddingLeft", vars$$1.label_padding_before + "px")
  });
};

var _label_padding_after = function _label_padding_after(selector, vars$$1, isRTL) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-control__label": _defineProperty$1({}, isRTL ? "paddingLeft" : "paddingRight", vars$$1.label_padding_after + "px")
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(vars$$1), {
      display: "inline-block",
      boxSizing: "border-box",
      margin: 0,
      padding: 0,

      " input[type=checkbox], input[type=radio]": {
        display: "none"
      },

      " .pe-control__form-label": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenter, {
        position: "relative",
        cursor: "pointer",
        margin: 0,
        color: "inherit",

        ":focus": {
          outline: 0
        }
      }],

      ".pe-control--inactive": {
        " .pe-control__form-label": {
          cursor: "default"
        }
      },

      " .pe-control__box": {
        position: "relative",
        display: "inline-block",
        boxSizing: "border-box",
        color: "inherit",
        flexShrink: 0,

        ":focus": {
          outline: 0
        }
      },

      " .pe-button.pe-control__button": {
        position: "absolute"
      },

      ".pe-control--off": {
        " .pe-control__button--on": inactiveButton(),
        " .pe-control__button--off": activeButton()
      },

      ".pe-control--on": {
        " .pe-control__button--on": activeButton(),
        " .pe-control__button--off": inactiveButton()
      },

      " .pe-control__label": {
        // padding: RTL
        alignSelf: "center"
      },

      ".pe-control--disabled": {
        " .pe-control__form-label": {
          cursor: "auto"
        },
        " .pe-control__button": {
          pointerEvents: "none"
        }
      },

      " .pe-button__content": {
        " .pe-icon": {
          position: "absolute"
        }
      }
    }, _defineProperty$1({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(vars$$1)])])];
  },
  label_font_size: function label_font_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-control__form-label": {
        fontSize: vars$$1.label_font_size + "px"
      }
    })];
  },
  label_height: function label_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-control__box": {
        width: vars$$1.label_height + "px",
        height: vars$$1.label_height + "px"
      },
      ".pe-control--small": makeSize(vars$$1, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_small, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_small),
      ".pe-control--regular": makeSize(vars$$1, vars$$1.label_height, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size),
      ".pe-control--medium": makeSize(vars$$1, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_medium, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_medium),
      ".pe-control--large": makeSize(vars$$1, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_large, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size_large)
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button.pe-control__button": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("opacity", vars$$1.animation_duration)],
      " .pe-control__label": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("all", vars$$1.animation_duration)]
    })];
  },
  button_size: function button_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), button_size_icon_size(selector, vars$$1, false), button_size_icon_size(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  icon_size: function icon_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), button_size_icon_size(selector, vars$$1, false), button_size_icon_size(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  label_padding_after: function label_padding_after(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), _label_padding_after(selector, vars$$1, false), _label_padding_after(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  label_padding_before: function label_padding_before(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), _label_padding_before(selector, vars$$1, false), _label_padding_before(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, false)];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_duration: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_duration,
  button_size: 6 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  icon_size: 3 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component,
  label_font_size: 2 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component, // 16
  label_height: 3 * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component, // 24
  label_padding_after: 0,
  label_padding_before: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit * 4, // 16

  color_light_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary),
  color_light_off: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_label: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_disabled: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,

  // icon colors may be set in theme; set to "inherit" by default
  // color_light_on_icon
  // color_light_off_icon

  // label on/off colors may be set in theme; set to color_light_label by default
  // color_light_on_label
  // color_light_off_label

  color_light_focus_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground),
  color_light_focus_off_opacity: .07,

  color_dark_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary),
  color_dark_off: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_label: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_disabled: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,

  // icon color may be set in theme; set to "inherit" by default
  // color_dark_on_icon
  // color_dark_off_icon

  // label on/off colors may be set in theme; set to color_dark_label by default
  // color_dark_on_label
  // color_dark_off_label

  color_dark_focus_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary), // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground),
  color_dark_focus_off_opacity: .09
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-shadow/dist/polythene-css-shadow.mjs":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-shadow/dist/polythene-css-shadow.mjs ***!
  \*********************************************************************************************************************************/
/*! exports provided: addStyle, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {
  component: "pe-shadow",

  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",

  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shadowDirective = function shadowDirective(which, num) {
  return function (selector, vars$$1) {
    return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, _defineProperty({}, " .pe-shadow__" + which + ".pe-shadow--z-" + num, {
      boxShadow: vars$$1["shadow_" + which + "_z_" + num]
    }));
  };
};

var varFns = _extends({}, {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
      borderRadius: "inherit",
      pointerEvents: "none",

      " .pe-shadow__bottom, .pe-shadow__top": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
        borderRadius: "inherit"
      }]
    }])];
  },
  transition: function transition(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-shadow--animated": {
        " .pe-shadow__bottom, .pe-shadow__top": {
          transition: vars$$1.transition
        }
      }
    })];
  }
}, [1, 2, 3, 4, 5].reduce(function (acc, num) {
  return acc["shadow_top_z_" + num] = shadowDirective("top", num), acc["shadow_bottom_z_" + num] = shadowDirective("bottom", num), acc;
}, {}));

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({
  varFns: varFns
});

var vars$1 = {
  general_styles: true,

  transition: "box-shadow " + polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_duration + " ease-out",

  shadow_top_z_1: "initial",
  shadow_bottom_z_1: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  shadow_top_z_2: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  shadow_bottom_z_2: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_3: "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  shadow_bottom_z_3: "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_4: "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  shadow_bottom_z_4: "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_5: "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  shadow_bottom_z_5: "0 27px 55px 0 rgba(0, 0, 0, 0.3)"
};

var fns = [layout];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-slider/dist/polythene-css-slider.mjs":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-slider/dist/polythene-css-slider.mjs ***!
  \*********************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {
  component: "pe-slider",

  // elements
  control: "pe-slider__control",
  label: "pe-slider__label",
  pin: "pe-slider__pin",
  thumb: "pe-slider__thumb",
  tick: "pe-slider__tick",
  ticks: "pe-slider__ticks",
  track: "pe-slider__track",
  trackBar: "pe-slider__track-bar",
  trackBarValue: "pe-slider__track-bar-value",
  trackPart: "pe-slider__track-part",
  trackPartRest: "pe-slider__track-rest",
  trackPartValue: "pe-slider__track-value",

  // states
  hasFocus: "pe-slider--focus",
  hasPin: "pe-slider--pin",
  hasTicks: "pe-slider--ticks",
  hasTrack: "pe-slider--track",
  isActive: "pe-slider--active",
  isAtMin: "pe-slider--min",
  isDisabled: "pe-slider--disabled",
  tickValue: "pe-slider__tick--value"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__control": {
        ":after": {
          borderColor: "transparent"
        }
      },
      " .pe-slider__pin": {
        backgroundColor: "currentcolor",

        ":before": {
          backgroundColor: "inherit"
        }
      },
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          backgroundColor: "currentcolor"
        },
        " .pe-slider__track-value .pe-slider__track-bar-value": {
          background: "currentcolor"
        },
        ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
          backgroundColor: "currentcolor"
        }
      },
      ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
        " .pe-slider__control": {
          backgroundColor: "transparent"
        },
        " .pe-slider__thumb": {
          opacity: 0
        },
        ".pe-slider--ticks": {
          " .pe-slider__control:after": {
            borderColor: "transparent"
          }
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_icon", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-icon": {
          color: vars$$1["color_" + tint + "_icon"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__label": {
          color: vars$$1["color_" + tint + "_label"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_on", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars$$1["color_" + tint + "_thumb_on"] // override by specifying "color"
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_inactive", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__track-bar-value": {
        background: vars$$1["color_" + tint + "_track_inactive"]
      },
      ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
        " .pe-slider__control:after": {
          borderColor: vars$$1["color_" + tint + "_track_inactive"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_tick", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__tick": {
        background: vars$$1["color_" + tint + "_tick"]
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--tick": {
          backgroundColor: vars$$1["color_" + tint + "_tick"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_tick_value", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__tick--value": {
        background: vars$$1["color_" + tint + "_tick_value"]
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--tick--value": {
          backgroundColor: vars$$1["color_" + tint + "_tick_value"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled_icon", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-icon": {
        color: vars$$1["color_" + tint + "_disabled_icon"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__label": {
        color: vars$$1["color_" + tint + "_disabled_label"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_active", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-slider--active": {
        " .pe-slider__track-bar-value": {
          background: vars$$1["color_" + tint + "_track_active"]
        }
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--active .pe-slider__control:after": {
          borderColor: vars$$1["color_" + tint + "_track_active"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_inactive", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-slider--disabled": {
        " .pe-slider__control": {
          background: vars$$1["color_" + tint + "_thumb_inactive"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          backgroundColor: vars$$1["color_" + tint + "_thumb_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_off_focus_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          ":before": {
            opacity: vars$$1["color_" + tint + "_thumb_off_focus_opacity"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_off_focus", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-slider--disabled)": {
        ".pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
        .pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before": {
          backgroundColor: vars$$1["color_" + tint + "_thumb_off_focus"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_on_focus_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-slider--disabled)": {
        ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
          opacity: vars$$1["color_" + tint + "_thumb_on_focus_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_pin_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__pin:after": {
        color: vars$$1["color_" + tint + "_pin_label"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_pin_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__pin": {
        backgroundColor: vars$$1["color_" + tint + "_pin_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_value", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__track-value .pe-slider__track-bar-value": {
          backgroundColor: vars$$1["color_" + tint + "_track_value"]
        }
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var getThumbSize = function getThumbSize(vars$$1) {
  var thumbSize = Math.max(vars$$1.thumb_size, 2 * vars$$1.thumb_border_width);
  var barOffset = thumbSize / 2;
  var stepsOffset = barOffset - 1;
  return {
    normalThumbSize: thumbSize,
    disabledThumbSize: thumbSize - 2 * vars$$1.thumb_border_width,
    barOffset: barOffset,
    stepsOffset: stepsOffset
  };
};

var getBorderWidth = function getBorderWidth(vars$$1) {
  var borderWidth = vars$$1.thumb_border_width;
  var scaledBorderWidth = Math.max(1, vars$$1.thumb_border_width / vars$$1.active_thumb_scale);
  return {
    normalBorderWidth: borderWidth,
    disabledBorderWidth: 1 / vars$$1.disabled_thumb_scale * vars$$1.thumb_border_width,
    scaledBorderWidth: scaledBorderWidth
  };
};

var thumb_size_thumb_border_width_disabled_thumb_scale = function thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars$$1) {
  var _getThumbSize = getThumbSize(vars$$1),
      normalThumbSize = _getThumbSize.normalThumbSize,
      disabledThumbSize = _getThumbSize.disabledThumbSize;

  var _getBorderWidth = getBorderWidth(vars$$1),
      normalBorderWidth = _getBorderWidth.normalBorderWidth,
      disabledBorderWidth = _getBorderWidth.disabledBorderWidth;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-slider__control:after": {
      borderWidth: normalBorderWidth + "px",
      width: normalThumbSize + "px",
      height: normalThumbSize + "px",
      left: 0,
      top: 0
    },
    ".pe-slider--disabled .pe-slider__control:after": {
      borderWidth: disabledBorderWidth + "px",
      width: disabledThumbSize + "px",
      height: disabledThumbSize + "px",
      left: normalThumbSize - disabledThumbSize + "px",
      top: normalThumbSize - disabledThumbSize + "px"
    },
    ".pe-slider--ticks .pe-slider__control:after": {
      borderWidth: 0
    }
  });
};

var height_track_height = function height_track_height(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    marginTop: (vars$$1.height - vars$$1.track_height) / 2 + "px "
  });
};

var track_height_bar_height = function track_height_bar_height(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-slider__track-part": {
      margin: (vars$$1.track_height - vars$$1.bar_height) / 2 + "px 0"
    }
  });
};

var thumb_size_thumb_touch_size = function thumb_size_thumb_touch_size(selector, vars$$1) {
  var _getThumbSize2 = getThumbSize(vars$$1),
      normalThumbSize = _getThumbSize2.normalThumbSize;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-slider__control:before": {
      left: -vars$$1.thumb_touch_size / 2 + normalThumbSize / 2 + "px",
      top: -vars$$1.thumb_touch_size / 2 + normalThumbSize / 2 + "px"
    }
  });
};

var thumb_size_active_thumb_scale = function thumb_size_active_thumb_scale(selector, vars$$1) {
  var _getThumbSize3 = getThumbSize(vars$$1),
      normalThumbSize = _getThumbSize3.normalThumbSize;

  var _getBorderWidth2 = getBorderWidth(vars$$1),
      scaledBorderWidth = _getBorderWidth2.scaledBorderWidth;

  var scaledThumbDiff = (vars$$1.active_thumb_scale - 1) * normalThumbSize / 2;
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-slider--active:not(.pe-slider--ticks)": {
      " .pe-slider__control": {
        borderWidth: scaledBorderWidth + "px"
      },
      // left side
      " .pe-slider__track-value .pe-slider__track-bar-value": {
        transform: "translateX(" + -scaledThumbDiff + "px)"
      },
      // right side
      " .pe-slider__track-rest .pe-slider__track-bar-value": {
        transform: "translateX(" + scaledThumbDiff + "px)"
      }
    },
    ".pe-slider--active.pe-slider--ticks": {
      " .pe-slider__control:after": {
        borderWidth: 0
      }
    }
  });
};

var thumb_size_pin_width = function thumb_size_pin_width(selector, vars$$1) {
  var _getThumbSize4 = getThumbSize(vars$$1),
      stepsOffset = _getThumbSize4.stepsOffset;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-slider__pin": {
      margin: "0 " + stepsOffset + "px 0 " + (stepsOffset - vars$$1.pin_width / 2 + 1) + "px"
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flexGrow(1), {
      userSelect: "none",
      "-moz-user-select": "none",
      alignItems: "center",

      " > .pe-icon": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenter,

      " .pe-slider__track": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flexGrow(1), {
        userSelect: "none",
        "-moz-user-select": "none",
        position: "relative",
        outline: 0
      }],

      " .pe-slider__control": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].selfCenter, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("transform, background", ".200s"), {
        transform: "scale(1)",
        userSelect: "none",
        "-moz-user-select": "none",
        lineHeight: 0,
        borderRadius: "50%",
        outline: 0,
        zIndex: 1,
        position: "relative",

        // touch area
        ":before": {
          content: "\"\"",
          position: "absolute",
          borderRadius: "50%"
        },

        // border
        ":after": {
          content: "\"\"",
          position: "absolute",
          borderRadius: "50%",
          borderStyle: "solid"
        }
      }],

      " .pe-slider__thumb": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
        "&, .pe-icon": {
          width: "inherit",
          height: "inherit"
        }
      }],

      " .pe-slider__label": {
        minWidth: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_icon_size + "px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].font_weight_medium
      },

      " .pe-slider__track-part": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), {
        userSelect: "none",
        "-moz-user-select": "none",
        overflow: "hidden" // Firefox otherwise uses 6x at 0%
      }],

      " .pe-slider__track-value, .pe-slider__track-rest": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal,

      " .pe-slider__track-bar": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), {
        position: "relative",
        overflow: "hidden"
      }],
      " .pe-slider__track-bar-value": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(),

      " .pe-slider__ticks": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutJustified, {
        userSelect: "none",
        "-moz-user-select": "none",
        position: "absolute",
        left: 0,
        pointerEvents: "none"
      }],

      " .pe-slider__pin": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("transform", ".11s"), {
        transform: "translateZ(0) scale(0) translate(0, 0)",
        transformOrigin: "bottom",
        position: "absolute",
        zIndex: 1,
        height: 0,
        left: 0, // set in js
        top: 0,
        pointerEvents: "none",

        "&::before, &::after": {
          position: "absolute",
          top: 0,
          left: 0
        },

        "::before": {
          transform: "rotate(-45deg)",
          content: "\"\"",
          borderRadius: "50% 50% 50% 0"
        },
        "::after": {
          content: "attr(value)",
          textAlign: "center"
        }
      }],

      ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
        " .pe-slider__pin": {
          transform: "translateZ(0) scale(1) translate(0, -24px)"
        }
      },

      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          cursor: "pointer"
        },
        ".pe-slider--track": {
          " .pe-slider__track": {
            cursor: "pointer"
          }
        }
      },

      ".pe-slider--disabled": {
        " .pe-slider__control": {
          borderWidth: 0
        }
      }
    }])];
  },
  thumb_size: function thumb_size(selector, vars$$1) {
    var _getThumbSize5 = getThumbSize(vars$$1),
        normalThumbSize = _getThumbSize5.normalThumbSize,
        barOffset = _getThumbSize5.barOffset,
        stepsOffset = _getThumbSize5.stepsOffset;

    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__control": {
        width: normalThumbSize + "px",
        height: normalThumbSize + "px"
      },
      " .pe-slider__track-value .pe-slider__track-bar": {
        marginLeft: barOffset + "px"
      },
      " .pe-slider__track-rest .pe-slider__track-bar": {
        marginRight: barOffset + "px"
      },
      " .pe-slider__ticks": {
        width: "calc(100% - " + 2 * stepsOffset + "px)",
        margin: "0 " + stepsOffset + "px"
      }
    }), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars$$1), thumb_size_thumb_touch_size(selector, vars$$1), thumb_size_active_thumb_scale(selector, vars$$1), thumb_size_pin_width(selector, vars$$1)];
  },
  active_thumb_scale: function active_thumb_scale(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-slider--active:not(.pe-slider--ticks)": {
        " .pe-slider__control": {
          transform: "scale(" + vars$$1.active_thumb_scale + ")"
        }
      }
    }), thumb_size_active_thumb_scale(selector, vars$$1)];
  },
  thumb_touch_size: function thumb_touch_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__control": {
        ":before": {
          width: vars$$1.thumb_touch_size + "px",
          height: vars$$1.thumb_touch_size + "px"
        }
      }
    }), thumb_size_thumb_touch_size(selector, vars$$1)];
  },
  thumb_border_width: function thumb_border_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {}), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars$$1)];
  },
  disabled_thumb_scale: function disabled_thumb_scale(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-slider--disabled": {
        " .pe-slider__control": {
          transform: "scale(" + vars$$1.disabled_thumb_scale + ")"
        }
      }
    }), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars$$1)];
  },
  active_pin_thumb_scale: function active_pin_thumb_scale(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
        " .pe-slider__control": {
          transform: "scale(" + vars$$1.active_pin_thumb_scale + ")"
        }
      }
    })];
  },
  height: function height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      height: vars$$1.height + "px",

      " > .pe-icon": {
        height: vars$$1.height + "px"
      },
      " .pe-slider__label": {
        height: vars$$1.height + "px",
        lineHeight: vars$$1.height + "px"
      },
      " .pe-slider__ticks": {
        top: vars$$1.height / 2 - 1 + "px"
      }
    }), height_track_height(selector, vars$$1)];
  },
  track_height: function track_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__track": {
        height: vars$$1.track_height + "px"
      }
    }), height_track_height(selector, vars$$1), track_height_bar_height(selector, vars$$1)];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__track": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("transform", vars$$1.animation_duration),
      " .pe-slider__control:before": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("background-color", vars$$1.animation_duration),
      " .pe-slider__control:after": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("border", vars$$1.animation_duration),
      " .pe-slider__thumb": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("opacity", vars$$1.animation_duration),
      " .pe-slider__track-bar-value": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("transform, background-color", vars$$1.animation_duration)
    })];
  },
  side_spacing: function side_spacing(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__track": {
        margin: "0 " + vars$$1.side_spacing + "px"
      }
    })];
  },
  horizontal_layout_side_spacing: function horizontal_layout_side_spacing(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " div + .pe-slider__track": {
        margin: "0 " + vars$$1.horizontal_layout_side_spacing + "px"
      }
    })];
  },
  bar_height: function bar_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__track-part,\
        .pe-slider__track-bar-value,\
        .pe-slider__ticks,\
        .pe-slider__tick": {
        height: vars$$1.bar_height + "px"
      }
    }), track_height_bar_height(selector, vars$$1)];
  },
  step_width: function step_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__tick": {
        width: vars$$1.step_width + "px"
      }
    })];
  },
  pin_width: function pin_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__pin": {
        width: vars$$1.pin_width + "px",

        "::before": {
          width: vars$$1.pin_width + "px",
          height: vars$$1.pin_width + "px"
        },
        "::after": {
          width: vars$$1.pin_width + "px",
          height: vars$$1.pin_height + "px",
          lineHeight: vars$$1.pin_width + "px"
        }
      }
    }), thumb_size_pin_width(selector, vars$$1)];
  },
  pin_font_size: function pin_font_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-slider__pin::after": {
        fontSize: vars$$1.pin_font_size + "px"
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({
  varFns: varFns
});

var lightForeground = polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground;
var darkForeground = polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground;
var activeColor = polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary; // or override in CSS by setting 'color' property on '.pe-slider'
var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 1 / 2;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

var vars$1 = {
  general_styles: true,

  active_pin_thumb_scale: active_pin_thumb_scale,
  active_thumb_scale: active_thumb_scale,
  animation_duration: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_duration,
  bar_height: 2,
  disabled_thumb_scale: disabled_thumb_scale,
  height: height,
  horizontal_layout_side_spacing: horizontal_layout_side_spacing,
  pin_font_size: 10,
  pin_height: 32,
  pin_width: 26,
  side_spacing: side_spacing,
  step_width: 2,
  thumb_border_width: thumb_border_width,
  thumb_size: thumb_size,
  thumb_touch_size: thumb_touch_size,
  track_height: height,

  color_light_track_active: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(lightForeground, .38),
  color_light_track_inactive: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(lightForeground, .26),
  color_light_track_value: "currentColor",
  // background color may be set in theme; disabled by default
  // color_light_thumb_background:        undefined,
  color_light_thumb_off: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(lightForeground, .26),
  color_light_thumb_off_focus: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(lightForeground),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(activeColor),
  color_light_thumb_on_focus_opacity: .11,
  color_light_thumb_inactive: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(lightForeground, .26),
  color_light_tick: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(lightForeground, 1),
  color_light_tick_value: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(lightForeground, 1),
  color_light_icon: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_disabled_icon: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  color_light_label: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_secondary),
  color_light_disabled_label: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  color_light_pin_label: "#fff",
  color_light_pin_background: "currentColor",

  color_dark_track_active: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(darkForeground, .3),
  color_dark_track_inactive: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(darkForeground, .2),
  color_dark_track_value: "currentColor",
  // background color may be set in theme; disabled by default
  // color_dark_thumb_background:         undefined,
  color_dark_thumb_off: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(darkForeground, .2),
  color_dark_thumb_off_focus: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(darkForeground),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(activeColor),
  color_dark_thumb_on_focus_opacity: .11,
  color_dark_thumb_inactive: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(darkForeground, .2),
  color_dark_tick: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(darkForeground, 1),
  color_dark_tick_value: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(darkForeground, 1),
  color_dark_icon: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_disabled_icon: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled),
  color_dark_label: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_secondary),
  color_dark_disabled_label: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled),
  color_dark_pin_label: "#fff",
  color_dark_pin_background: "currentColor"
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-snackbar/dist/polythene-css-snackbar.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-snackbar/dist/polythene-css-snackbar.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, holderLayout, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "holderLayout", function() { return holderLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_css_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-css-notification */ "../../polythene-css-notification/dist/polythene-css-notification.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");




var notificationClasses = {
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = _extends({}, notificationClasses, {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var color$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  superColor: polythene_css_notification__WEBPACK_IMPORTED_MODULE_1__["color"]
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenterCenter, {
      position: "fixed",
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].z_notification,
      pointerEvents: "none",
      justifyContent: "flex-start", // For IE11
      width: "100%"
    }]), _defineProperty({}, ".pe-notification--container " + selector, {
      position: "relative"
    })];
  }
};

var holderLayout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({
  varFns: varFns
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var breakpoint = function breakpoint(breakpointSel) {
  return function (selector, o) {
    return _defineProperty$1({}, breakpointSel, _defineProperty$1({}, selector, o));
  };
};

var breakpointTabletPortraitUp = breakpoint("@media (min-width: " + polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].breakpoint_for_tablet_portrait_up + "px)");

var varFns$1 = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      width: "100%",
      opacity: 1,

      " .pe-notification__content": {
        width: "100%",
        margin: "0 auto",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }), breakpointTabletPortraitUp(selector, {
      ".pe-notification--horizontal": {
        " .pe-notification__title": {
          paddingRight: "30px"
        }
      }
    })];
  },
  min_width: function min_width(selector, vars$$1) {
    return [breakpointTabletPortraitUp(selector, {
      minWidth: vars$$1.min_width + "px"
    })];
  },
  max_width: function max_width(selector, vars$$1) {
    return [breakpointTabletPortraitUp(selector, {
      maxWidth: vars$$1.max_width + "px"
    })];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-notification__content": {
        borderTopLeftRadius: vars$$1.border_radius + "px",
        borderTopRightRadius: vars$$1.border_radius + "px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({
  varFns: varFns$1,
  customVarFns: polythene_css_notification__WEBPACK_IMPORTED_MODULE_1__["customLayoutFns"]
});

var vars$1 = {
  general_styles: true,

  animation_hide_css: "",
  animation_show_css: "",
  border_radius: 0,
  max_width: 568,
  min_height: 0,
  min_width: 288,

  color_light_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_background),
  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_dark_background)
};

var fns = [layout, color$1];
var selector = "." + classes.component.replace(/ /g, ".");

var holderFns = [holderLayout];
var holderSelector = "." + classes.holder.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, holderSelector],
    fns: holderFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments[1];

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref2.mediaQuery;

  return polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }).concat(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }));
};

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [holderSelector],
  fns: holderFns,
  vars: vars$1
});
polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-svg/dist/polythene-css-svg.mjs":
/*!***************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-svg/dist/polythene-css-svg.mjs ***!
  \***************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");


var classes = {
  component: "pe-svg"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: "inherit",

      " svg": {
        color: "inherit",

        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: "currentcolor"
          }
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint, function (selector, vars) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " svg": {
        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: vars["color_" + tint]
          }
        }
      }
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      lineHeight: 1,

      " > div, svg": {
        width: "inherit",
        height: "inherit"
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars = {
  general_styles: true,

  color_light: "currentcolor",
  color_dark: "currentcolor"
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});




/***/ }),

/***/ "../../polythene-css-switch/dist/polythene-css-switch.mjs":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-switch/dist/polythene-css-switch.mjs ***!
  \*********************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$3; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-css-selection-control */ "../../polythene-css-selection-control/dist/polythene-css-selection-control.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");
/* harmony import */ var polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-css-icon-button */ "../../polythene-css-icon-button/dist/polythene-css-icon-button.mjs");





var classes = {
  component: "pe-switch-control",

  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-switch-control__knob": {
          backgroundColor: "currentcolor"
        },
        " .pe-icon": {
          color: "currentcolor"
        }
      },
      ".pe-control--on": {
        " .pe-switch-control__knob": {
          backgroundColor: "currentcolor"
        },
        " .pe-icon": {
          color: "currentcolor"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-control__label": {
        color: vars$$1["color_" + tint + "_label"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_off", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-switch-control__track": {
          backgroundColor: vars$$1["color_" + tint + "_track_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_off_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-switch-control__track": {
          opacity: vars$$1["color_" + tint + "_track_off_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_off", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-switch-control__thumb": {
          color: vars$$1["color_" + tint + "_thumb_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars$$1["color_" + tint + "_focus_off"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: vars$$1["color_" + tint + "_focus_off_opacity"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_icon_off", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-icon": {
          color: vars$$1["color_" + tint + "_icon_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_off_label"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_on", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-switch-control__track": {
          backgroundColor: vars$$1["color_" + tint + "_track_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_on_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-switch-control__track": {
          opacity: vars$$1["color_" + tint + "_track_on_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_on", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-switch-control__thumb": {
          color: vars$$1["color_" + tint + "_thumb_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars$$1["color_" + tint + "_focus_on"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: vars$$1["color_" + tint + "_focus_on_opacity"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_icon_on", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-icon": {
          color: vars$$1["color_" + tint + "_icon_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_on_label", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_on_label"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_disabled"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_disabled", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__track": {
          backgroundColor: vars$$1["color_" + tint + "_track_disabled"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_disabled_opacity", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__track": {
          opacity: vars$$1["color_" + tint + "_track_disabled_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_disabled", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__thumb, .pe-button__content": {
          color: vars$$1["color_" + tint + "_thumb_disabled"]
        }
      }
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_wash_on", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--on": {
        " .pe-button__wash": {
          backgroundColor: vars$$1["color_" + tint + "_wash_on"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_wash_off", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-control--off": {
        " .pe-button__wash": {
          backgroundColor: vars$$1["color_" + tint + "_wash_off"]
        }
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns, lightTintHoverFns: lightTintHoverFns, darkTintHoverFns: darkTintHoverFns }
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transition = function transition(vars$$1, properties) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars$$1.animation_duration;
  return polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition(properties, duration, "ease-out");
};

var getSizeData = function getSizeData(vars$$1, size) {
  var factor = size / polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].unit_icon_size;
  var thumbSize = Math.floor(0.5 * vars$$1.thumb_size * factor) * 2; // round to even
  var scaledTrackHeight = Math.floor(0.5 * vars$$1.track_height * factor) * 2; // round to even
  var scaledTrackWidth = Math.floor(0.5 * vars$$1.track_length * factor) * 2;
  var scaledThumbSize = Math.floor(0.5 * vars$$1.thumb_size * factor) * 2;
  var trackTop = (vars$$1.label_height * factor - scaledTrackHeight) / 2;
  var thumbPadding = vars$$1.icon_button_padding;
  var thumbMargin = (size - scaledThumbSize) / 2;
  var thumbOuterSize = size + 2 * thumbPadding;
  var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
  var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
  var thumbOffsetY = thumbOffsetMin + thumbMargin;
  var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border
  return {
    factor: factor,
    scaledThumbSize: scaledThumbSize,
    scaledTrackHeight: scaledTrackHeight,
    scaledTrackWidth: scaledTrackWidth,
    size: size,
    thumbMargin: thumbMargin,
    thumbOffsetMax: thumbOffsetMax,
    thumbOffsetMin: thumbOffsetMin,
    thumbOffsetY: thumbOffsetY,
    thumbPadding: thumbPadding,
    trackTop: trackTop,
    trackVisualOffset: trackVisualOffset
  };
};

var customSize = function customSize(vars$$1, _ref) {
  var scaledThumbSize = _ref.scaledThumbSize,
      scaledTrackHeight = _ref.scaledTrackHeight,
      scaledTrackWidth = _ref.scaledTrackWidth,
      size = _ref.size,
      thumbMargin = _ref.thumbMargin,
      thumbOffsetY = _ref.thumbOffsetY,
      thumbPadding = _ref.thumbPadding,
      trackTop = _ref.trackTop,
      trackVisualOffset = _ref.trackVisualOffset;

  return {
    " .pe-control__form-label": {
      height: size + "px",
      minWidth: scaledTrackWidth + "px"
    },
    " .pe-switch-control__track": {
      height: scaledTrackHeight + "px",
      width: scaledTrackWidth - 2 * trackVisualOffset + "px",
      top: trackTop + "px",
      borderRadius: scaledTrackHeight + "px"
    },
    " .pe-switch-control__thumb": {
      top: thumbOffsetY + "px"
    },
    " .pe-switch-control__knob": {
      width: scaledThumbSize + "px",
      height: scaledThumbSize + "px",
      margin: thumbMargin + "px"
    },
    " .pe-button__content": {
      padding: thumbPadding + "px"
    }
  };
};

var customSpacing = function customSpacing(vars$$1, _ref2, isRTL) {
  var _peControl__label, _peSwitchControl_, _peSwitchControl_2, _peSwitchControl_3;

  var factor = _ref2.factor,
      scaledTrackWidth = _ref2.scaledTrackWidth,
      thumbOffsetMax = _ref2.thumbOffsetMax,
      thumbOffsetMin = _ref2.thumbOffsetMin,
      trackVisualOffset = _ref2.trackVisualOffset;

  return {
    " .pe-control__label": (_peControl__label = {}, _defineProperty$1(_peControl__label, isRTL ? "paddingRight" : "paddingLeft", vars$$1.padding * factor + 8 + scaledTrackWidth + "px"), _defineProperty$1(_peControl__label, isRTL ? "paddingLeft" : "paddingRight", 0), _peControl__label),
    " .pe-switch-control__track": (_peSwitchControl_ = {}, _defineProperty$1(_peSwitchControl_, isRTL ? "right" : "left", trackVisualOffset + "px"), _defineProperty$1(_peSwitchControl_, isRTL ? "left" : "right", "auto"), _peSwitchControl_),
    " .pe-switch-control__thumb": (_peSwitchControl_2 = {}, _defineProperty$1(_peSwitchControl_2, isRTL ? "right" : "left", thumbOffsetMin + "px"), _defineProperty$1(_peSwitchControl_2, isRTL ? "left" : "right", "auto"), _peSwitchControl_2),
    ".pe-control--on": {
      " .pe-switch-control__thumb": (_peSwitchControl_3 = {}, _defineProperty$1(_peSwitchControl_3, isRTL ? "right" : "left", thumbOffsetMax + "px"), _defineProperty$1(_peSwitchControl_3, isRTL ? "left" : "right", "auto"), _peSwitchControl_3)
    }
  };
};

var alignSide = function alignSide(isRTL) {
  return function () {
    var _peSwitchControl_4;

    return {
      " .pe-switch-control__track": (_peSwitchControl_4 = {}, _defineProperty$1(_peSwitchControl_4, isRTL ? "right" : "left", 0), _defineProperty$1(_peSwitchControl_4, isRTL ? "left" : "right", "auto"), _peSwitchControl_4)
    };
  };
};
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var createSize = function createSize(selector, vars$$1) {
  var sizeData = {
    small: getSizeData(vars$$1, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].unit_icon_size_small),
    regular: getSizeData(vars$$1, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].unit_icon_size),
    medium: getSizeData(vars$$1, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].unit_icon_size_medium),
    large: getSizeData(vars$$1, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].unit_icon_size_large)
  };
  return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-control--small": [customSize(vars$$1, sizeData.small), customSpacing(vars$$1, sizeData.small, false)],
    ".pe-control--regular": [customSize(vars$$1, sizeData.regular), customSpacing(vars$$1, sizeData.regular, false)],
    ".pe-control--medium": [customSize(vars$$1, sizeData.medium), customSpacing(vars$$1, sizeData.medium, false)],
    ".pe-control--large": [customSize(vars$$1, sizeData.large), customSpacing(vars$$1, sizeData.large, false)]
  }), _defineProperty$1({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(), {
    ".pe-control--small": [customSpacing(vars$$1, sizeData.small, true)],
    ".pe-control--regular": [customSpacing(vars$$1, sizeData.regular, true)],
    ".pe-control--medium": [customSpacing(vars$$1, sizeData.medium, true)],
    ".pe-control--large": [customSpacing(vars$$1, sizeData.large, true)]
  }])];
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(), {
      " .pe-switch-control__track": [{
        position: "absolute"
      }],

      " .pe-switch-control__thumb": {
        position: "absolute",
        zIndex: 1, // Prevents flickering of text label when toggling
        color: "inherit",

        ":focus": {
          outline: 0
        }
      },

      " .pe-switch-control__knob": {
        position: "relative",
        borderRadius: "50%"
      },

      " .pe-icon-button .pe-button__content": {
        transition: "none",

        " .pe-switch-control__knob .pe-icon": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
          width: "100%",
          height: "100%"
        }]
      }
    }]), _defineProperty$1({}, "_:-ms-fullscreen, :root " + selector, {
      " input": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: "block",
        opacity: 0,
        cursor: "pointer"
      },
      " label": {
        cursor: "auto"
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-switch-control__track, .pe-switch-control__thumb, .pe-control__label, .pe-button__focus": transition(vars$$1, "all")
    })];
  },
  createSize: createSize
};

var withCreateSizeVar = function withCreateSizeVar(vars$$1) {
  return vars$$1.thumb_size || vars$$1.track_height || vars$$1.track_length || vars$$1.label_height || vars$$1.icon_button_padding ? _extends$1({}, vars$$1, {
    createSize: true
  }) : vars$$1;
};

var layout$1 = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({
  varFns: varFns,
  superLayout: polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__["layout"],
  varMixin: withCreateSizeVar
});

var vars$3 = {
  general_styles: true,

  animation_duration: polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].animation_duration,
  hit_area_padding: (polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].grid_unit_icon_button - polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].unit_icon_size) / 2, // 12
  icon_button_padding: polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_3__["vars"].padding,
  padding: polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].grid_unit_component,
  thumb_size: 20,
  track_height: 14,
  track_length: 36,
  label_height: polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_1__["vars"].label_height,

  color_light_thumb_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_light_thumb_off: "#f1f1f1",
  color_light_thumb_disabled: "#eee",
  color_light_wash_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_background_active),
  color_light_wash_off: polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_3__["vars"].color_light_wash,

  color_light_track_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary_faded),
  color_light_track_on_opacity: .55,
  color_light_track_off: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_text_regular),
  color_light_track_off_opacity: .55,
  color_light_track_disabled: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_background_disabled),
  color_light_track_disabled_opacity: 1,

  // icon color may be set in theme; default "currentcolor"
  // color_light_icon_on:                   "currentcolor",
  // color_light_icon_off:                  "currentcolor",

  // color_light_focus_on and so on taken from selectionControlVars

  color_dark_thumb_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_dark_thumb_off: "#bdbdbd",
  color_dark_thumb_disabled: "#555",
  color_dark_wash_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_background_active),
  color_dark_wash_off: polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_3__["vars"].color_dark_wash,

  color_dark_track_on: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary_faded, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_text_tertiary), // or "#5a7f7c"
  color_dark_track_on_opacity: 9,
  color_dark_track_off: "#717171",
  color_dark_track_off_opacity: .55,
  color_dark_track_disabled: "#717171",
  color_dark_track_disabled_opacity: .3

  // icon color may be set in theme; default "currentcolor"
  // color_dark_icon_on:                    "currentcolor"
  // color_dark_icon_off:                   "currentcolor"

  // color_dark_focus_on and so on taken from selectionControlVars
};

var fns = [layout$1, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$3);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$3);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$3
});




/***/ }),

/***/ "../../polythene-css-tabs/dist/polythene-css-tabs.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-tabs/dist/polythene-css-tabs.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: addStyle, getStyle, tabColor, tabLayout, tabsColor, tabsLayout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabColor", function() { return tabColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabLayout", function() { return tabLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabsColor", function() { return tabsColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabsLayout", function() { return tabsLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$3; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_css_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-css-button */ "../../polythene-css-button/dist/polythene-css-button.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");
/* harmony import */ var polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-css-icon-button */ "../../polythene-css-icon-button/dist/polythene-css-icon-button.mjs");





var buttonClasses = {
    component: "pe-text-button",
    super: "pe-button",
    row: "pe-button-row",

    // elements      
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states      
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    extraWide: "pe-button--extra-wide",
    separatorAtStart: "pe-button--separator-start",
    dropdownOpen: "pe-button--dropdown-open",
    dropdownClosed: "pe-button--dropdown-closed"
};

var classes = {
  component: "pe-tabs",

  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  tab: "pe-tab",
  tabContent: "pe-tabs__tab-content",
  tabRow: "pe-tabs__row",

  // states
  activeSelectable: "pe-tabs__active--selectable",
  isAtEnd: "pe-tabs--end",
  isAtStart: "pe-tabs--start",
  isAutofit: "pe-tabs--autofit",
  isMenu: "pe-tabs--menu",
  scrollable: "pe-tabs--scrollable",
  compactTabs: "pe-tabs--compact",
  tabHasIcon: "pe-tabs__tab--icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",

  // lookup
  label: buttonClasses.label
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          background: "transparent"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_selected", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          color: vars$$1["color_" + tint + "_selected"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_selected_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          background: vars$$1["color_" + tint + "_selected_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_icon", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ":not(.pe-button--selected) .pe-icon": {
        color: vars$$1["color_" + tint + "_icon"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var tabColor = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns },
  superColor: polythene_css_button__WEBPACK_IMPORTED_MODULE_1__["color"]
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tab_label_transition_property_animation_duration = function tab_label_transition_property_animation_duration(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-button__content": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition(vars$$1.tab_label_transition_property, vars$$1.animation_duration)
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flexIndex("none"), {
      userSelect: "none",
      "-moz-user-select": "none",
      margin: 0,
      borderRadius: 0,
      padding: 0,

      " .pe-button__content": {
        lineHeight: polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].line_height + "em",
        borderRadius: 0,
        position: "relative",

        " .pe-button__label, .pe-icon": {
          overflow: "hidden",
          whiteSpace: "normal"
        },
        " .pe-button__label": {
          padding: 0,
          width: "100%" // for IE 11
        },
        " .pe-icon": {
          marginLeft: "auto",
          marginRight: "auto"
        },
        " .pe-button__focus": {
          display: "none"
        }
      },
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          " .pe-button__content, .pe-icon": {
            margin: "0 auto"
          }
        }
      },

      ".pe-tabs--menu &": {
        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          minWidth: 0,

          " .pe-button__content": {
            " .pe-icon": {
              marginBottom: 0
            },
            " .pe-button__content": {
              fontSize: "10px",
              lineHeight: "12px",
              textTransform: "none"
            }
          }
        }
      },

      ".pe-tabs--compact &": {
        minWidth: "initial"
      },

      " .pe-tabs__tab-content": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenterCenter, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutVertical, {
        height: "inherit"
      }],

      ".pe-tabs--autofit &": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), {
        minWidth: "initial",
        maxWidth: "none"
      }],

      ".pe-tabs__active--selectable &": {
        ".pe-button--selected": {
          cursor: "pointer",
          pointerEvents: "initial"
        }
      }

    }])];
  },
  tab_height: function tab_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      height: vars$$1.tab_height + "px",

      " .pe-button__content": {
        height: vars$$1.tab_height + "px"
      }
    })];
  },
  tab_min_width: function tab_min_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      minWidth: vars$$1.tab_min_width + "px" // for smaller screens, see also media query
    })];
  },
  tab_max_width: function tab_max_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      maxWidth: isNaN(vars$$1.tab_max_width) ? vars$$1.tab_max_width : vars$$1.tab_max_width + "px"
    })];
  },
  tab_min_width_tablet: function tab_min_width_tablet(selector, vars$$1) {
    return _defineProperty$1({}, "@media (min-width: " + polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].breakpoint_for_tablet_landscape_up + "px)", _defineProperty$1({}, ".pe-tabs:not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit):not(.pe-tabs--scrollable):not(.pe-tabs--compact) " + selector, {
      minWidth: vars$$1.tab_min_width_tablet + "px"
    }));
  },
  tab_icon_label_height: function tab_icon_label_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          height: vars$$1.tab_icon_label_height + "px"
        }
      }
    })];
  },
  tab_label_transition_property: function tab_label_transition_property(selector, vars$$1) {
    return [tab_label_transition_property_animation_duration(selector, vars$$1)];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [tab_label_transition_property_animation_duration(selector, vars$$1)];
  },
  tab_content_padding_v: function tab_content_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content": {
        padding: "0 " + vars$$1.tab_content_padding_v + "px"
      }
    })];
  },
  label_max_width: function label_max_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          maxWidth: vars$$1.label_max_width + "px" // or .pe-tabs width minus 56dp
        }
      }
    })];
  },
  tab_label_line_height: function tab_label_line_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          lineHeight: vars$$1.tab_label_line_height + "px",
          maxHeight: 2 * vars$$1.tab_label_line_height + "px"
        }
      }
    })];
  },
  tab_label_vertical_offset: function tab_label_vertical_offset(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-button__content": {
        " .pe-button__label": {
          margin: vars$$1.tab_label_vertical_offset + "px 0 0 0"
        }
      }
    })];
  },
  tab_icon_label_icon_spacing: function tab_icon_label_icon_spacing(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          " .pe-icon": {
            marginBottom: vars$$1.tab_icon_label_icon_spacing + "px"
          }
        }
      }
    })];
  },
  menu_tab_height: function menu_tab_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-tabs--menu &": {
        // reset sizes to fit within a small space
        height: vars$$1.menu_tab_height + "px",

        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          " .pe-button__content": {
            height: vars$$1.menu_tab_height + "px"
          }
        }
      }
    })];
  },
  menu_tab_icon_label_height: function menu_tab_icon_label_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-tabs--menu &": {
        "&.pe-tabs__tab--icon": {
          height: vars$$1.menu_tab_icon_label_height + "px"
        }
      }
    })];
  },
  tab_menu_content_padding_v: function tab_menu_content_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-tabs--menu &": {
        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          " .pe-button__content": {
            padding: "0 " + vars$$1.tab_menu_content_padding_v + "px"
          }
        }
      }
    })];
  }
};

var tabLayout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns, superLayout: polythene_css_button__WEBPACK_IMPORTED_MODULE_1__["layout"] });

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns$1 = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-tabs__scroll-button": {
        color: "inherit"
      },
      " .pe-no-touch &": {
        ".pe-tabs--scrollable": {
          backgroundColor: "inherit"
        },
        " .pe-tabs__scroll-button": {
          backgroundColor: "inherit",

          " .pe-button__content": {
            backgroundColor: "inherit"
          }
        }
      }
    })];
  }
};

var tintFns$1 = function tintFns(tint) {
  return _defineProperty$2({}, "color_" + tint + "_tab_indicator", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-tabs__indicator": {
        backgroundColor: vars$$1["color_" + tint + "_tab_indicator"]
      }
    })];
  });
};

var lightTintFns$1 = _extends$1({}, generalFns$1, tintFns$1("light"));
var darkTintFns$1 = _extends$1({}, generalFns$1, tintFns$1("dark"));

var tabsColor = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns$1, darkTintFns: darkTintFns$1 }
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      " .pe-tabs__indicator": _defineProperty$3({
        transformOrigin: isRTL ? "right 50%" : "left 50%"
      }, isRTL ? "right" : "left", 0)
    };
  };
};
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var _tabs_indent = function _tabs_indent(selector, vars$$1, isRTL) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-tabs__row": {
      ".pe-tabs__row--indent": _defineProperty$3({}, isRTL ? "paddingRight" : "paddingLeft", vars$$1.tabs_indent + "px")
    }
  });
};

var varFns$1 = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [alignLeft(), {
      userSelect: "none",
      "-moz-user-select": "none",
      transform: "translate3d(0,0,0)",
      "-webkit-overflow-scrolling": "touch",

      "& ::-webkit-scrollbar": {
        "display": "none"
      },

      ".pe-tabs--scrollable": {
        display: "flex",
        "-ms-overflow-style": "none",

        " .pe-tabs__scroll-button": {
          // default hide, show with html.pe-no-touch
          display: "none"
        },
        " .pe-tabs__tab": {
          minWidth: 0
        }
      },

      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          position: "relative",
          display: "block",
          zIndex: 1,
          borderRadius: 0,

          " .pe-button__content": {
            borderRadius: 0,
            transitionProperty: "all",
            transitionTimingFunction: "ease-in-out"
          }
        },
        ".pe-tabs--start .pe-tabs__scroll-button-start": {
          pointerEvents: "none",
          cursor: "default",
          opacity: 0
        },
        ".pe-tabs--end .pe-tabs__scroll-button-end": {
          pointerEvents: "none",
          cursor: "default",
          opacity: 0
        }
      },

      " .pe-tabs__row": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, {
        userSelect: "none",
        "-moz-user-select": "none",
        position: "relative",
        whiteSpace: "nowrap",

        ".pe-tabs__row--indent": {
          margin: 0,
          overflow: "auto"
        },

        ".pe-tabs__row--centered": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenterJustified
      }],

      " .pe-tabs__scroll-button-offset": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flex(), polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].flexIndex("none")],

      " .pe-tabs__indicator": {
        transform: "translate3d(0,0,0)",
        // transformOrigin set in alignSide
        transitionProperty: "all",
        transitionTimingFunction: "ease-in-out",
        position: "absolute",
        zIndex: 1,
        bottom: 0,
        // left/right set in alignSide
        width: "100%" // and transformed with js
        // background-color defined in implementation/theme css
      },

      " .pe-toolbar--tabs .pe-toolbar__bar &": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
        width: "auto",
        margin: 0,
        top: "auto"
      }]
    }]), _defineProperty$3({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight()])];
  },
  tabs_indent: function tabs_indent(selector, vars$$1) {
    return [_tabs_indent(selector, vars$$1, false), _tabs_indent(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  tab_height: function tab_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-tabs--scrollable": {
        display: "flex",
        // hide scrollbar (this approach is required for Firefox)
        "max-height": vars$$1.tab_height + "px"
      }
    })];
  },
  scrollbar_offset: function scrollbar_offset(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-tabs--scrollable": {
        " .pe-tabs__row": {
          marginBottom: -vars$$1.scrollbar_offset + "px"
        }
      }
    })];
  },
  scroll_button_size: function scroll_button_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          width: vars$$1.scroll_button_size + "px",
          height: vars$$1.scroll_button_size + "px"
        }
      }
    })];
  },
  scroll_button_fade_duration: function scroll_button_fade_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            transitionDuration: vars$$1.scroll_button_fade_duration
          }
        }
      }
    })];
  },
  scroll_button_fade_delay: function scroll_button_fade_delay(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            transitionDelay: vars$$1.scroll_button_fade_delay
          }
        }
      }
    })];
  },
  scroll_button_opacity: function scroll_button_opacity(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            opacity: vars$$1.scroll_button_opacity
          }
        }
      }
    })];
  },
  tab_indicator_height: function tab_indicator_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-tabs__indicator": {
        height: vars$$1.tab_indicator_height + "px"
      }
    })];
  }
};

var tabsLayout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns$1 });

var fontSize = polythene_css_button__WEBPACK_IMPORTED_MODULE_1__["vars"].font_size;
var tab_label_line_height = 1.1 * fontSize;
var tab_height = 48;
var scroll_button_size = tab_height;

var vars$3 = {
  general_styles: true,

  animation_duration: polythene_css_button__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_duration,
  indicator_slide_speed: 600, // px per second
  label_max_width: 264,
  menu_tab_height: 44,
  menu_tab_icon_label_height: 44,
  scroll_button_fade_delay: ".25s",
  scroll_button_fade_duration: ".2s",
  scroll_button_opacity: .7,
  scroll_button_size: scroll_button_size,
  scrollbar_offset: 0,
  tab_content_padding_v: 12,
  tab_height: tab_height,
  tab_icon_label_height: 72,
  tab_icon_label_icon_spacing: 7,
  tab_indicator_height: 2,
  tab_label_line_height: tab_label_line_height,
  tab_label_transition_property: "opacity, color, backgroundColor",
  tab_label_vertical_offset: tab_label_line_height - fontSize,
  tab_max_width: "initial",
  tab_menu_content_padding_v: 6,
  tab_min_width: 72,
  tab_min_width_tablet: 160,
  tabs_indent: 0,

  color_light_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_light_text_regular),
  color_light_selected: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_light_icon: polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_3__["vars"].color_light,

  color_dark_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].blend_dark_text_regular),
  color_dark_selected: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_2__["vars"].color_primary),
  color_dark_icon: polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_3__["vars"].color_dark

  // hover colors may be set in theme; disabled by default

  // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  // color_light_hover_background:         "transparent",
  //
  // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  // color_dark_hover_background:          "transparent",
};

var tabsFns = [tabsLayout, tabsColor];
var tabFns = [tabLayout, tabColor];
var tabsSelector = "." + classes.component;
var tabClass = classes.tab + " pe-text-button pe-button";
var tabSelector = " ." + tabClass.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, tabsSelector],
    fns: tabsFns,
    vars: vars$3,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
    selectors: [customSelector, tabSelector],
    fns: tabFns,
    vars: vars$3,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments[1];

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref2.mediaQuery;

  return polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, tabsSelector],
    fns: tabsFns,
    vars: vars$3,
    customVars: customVars,
    mediaQuery: mediaQuery
  }).concat(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].getStyle({
    selectors: [customSelector, tabSelector],
    fns: tabFns,
    vars: vars$3,
    customVars: customVars,
    mediaQuery: mediaQuery
  }));
};

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [tabsSelector],
  fns: tabsFns,
  vars: vars$3
});
polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [tabSelector],
  fns: tabFns,
  vars: vars$3
});




/***/ }),

/***/ "../../polythene-css-textfield/dist/polythene-css-textfield.mjs":
/*!***************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-textfield/dist/polythene-css-textfield.mjs ***!
  \***************************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input-area": {
        color: "inherit",

        "&:after": {
          backgroundColor: "currentcolor"
        }
      },
      ".pe-textfield--disabled, &.pe-textfield--readonly": {
        " .pe-textfield__input-area:after": {
          backgroundColor: "transparent"
        }
      },
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__input": {
          boxShadow: "none"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_focus_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars$$1["color_" + tint + "_focus_border"] // override by specifying "color"
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input-area": {
        backgroundColor: vars$$1["color_" + tint + "_input_background"]
      },
      " .pe-textfield__input:-webkit-autofill": {
        "-webkit-box-shadow": "0 0 0px 1000px " + vars$$1["color_" + tint + "_input_background"] + " inset"
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input": {
        color: vars$$1["color_" + tint + "_input_text"]
      },
      " .pe-textfield__input:-webkit-autofill": {
        color: vars$$1["color_" + tint + "_input_text"] + " !important"
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_counter_ok_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--counter ": {
        " .pe-textfield__input-area:after": {
          backgroundColor: vars$$1["color_" + tint + "_counter_ok_border"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_bottom_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input": {
        borderColor: vars$$1["color_" + tint + "_input_bottom_border"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_label_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__label": {
        color: vars$$1["color_" + tint + "_label_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled_label_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--disabled, &.pe-textfield--readonly": {
        " .pe-textfield__input-area:after": {
          backgroundImage: "linear-gradient(to right, " + vars$$1["color_" + tint + "_disabled_label_text"] + " 20%, rgba(255, 255, 255, 0) 0%)"
        }
      },
      ".pe-textfield--disabled": {
        " .pe-textfield__input, .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_disabled_label_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_readonly_label_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--readonly": {
        " .pe-textfield__input, .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_readonly_label_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_highlight_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--focused": {
        // note: not when textfield--dirty and not textfield--focused
        ".pe-textfield--floating-label .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_highlight_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_required_symbol", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--focused": {
        ".pe-textfield--required.pe-textfield--floating-label": {
          " .pe-textfield__required-indicator": {
            color: vars$$1["color_" + tint + "_required_symbol"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_help_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__help, .pe-textfield__counter": {
        color: vars$$1["color_" + tint + "_help_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_error_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__input": {
          borderColor: vars$$1["color_" + tint + "_input_error_border"]
        },
        "&, &.pe-textfield--counter": {
          " .pe-textfield__input-area:after": {
            backgroundColor: vars$$1["color_" + tint + "_input_error_border"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_error_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_input_error_text"]
        },
        " .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help": {
          color: vars$$1["color_" + tint + "_input_error_text"]
        },
        ".pe-textfield--required .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_input_error_text"]
        }
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var vertical_spacing_top_input_padding_v = function vertical_spacing_top_input_padding_v(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-textfield__label": {
      top: vars$$1.vertical_spacing_top + vars$$1.input_padding_v + "px"
    }
  });
};

var floating_label_vertical_spacing_top_input_padding_v = function floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-textfield--floating-label .pe-textfield__label": {
      top: vars$$1.floating_label_vertical_spacing_top + vars$$1.input_padding_v + "px"
    }
  });
};

var dense_floating_label_vertical_spacing_top_input_padding_v = function dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-textfield--floating-label.pe-textfield--dense .pe-textfield__label": {
      top: vars$$1.dense_floating_label_vertical_spacing_top + vars$$1.input_padding_v + "px"
    }
  });
};

var input_padding_v_input_padding_h = function input_padding_v_input_padding_h(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-textfield__input": {
      padding: vars$$1.input_padding_v + "px " + vars$$1.input_padding_h + "px"
    },
    " textarea.pe-textfield__input": {
      margin: vars$$1.input_padding_v + "px " + vars$$1.input_padding_h + "px"
    }
  });
};

var full_width_input_padding_v_full_width_input_padding_h = function full_width_input_padding_v_full_width_input_padding_h(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-textfield--full-width": {
      " .pe-textfield__input": {
        padding: vars$$1.full_width_input_padding_v + "px " + vars$$1.full_width_input_padding_h + "px"
      }
    }
  });
};

var dense_full_width_input_padding_v_dense_full_width_input_padding_h = function dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars$$1) {
  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    ".pe-textfield--full-width.pe-textfield--dense": {
      " .pe-textfield__input": {
        padding: vars$$1.dense_full_width_input_padding_v + "px " + vars$$1.dense_full_width_input_padding_h + "px"
      }
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].clearfix(), {
      position: "relative",
      lineHeight: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].line_height,
      display: "inline-block",
      boxSizing: "border-box",
      margin: 0,
      overflow: "visible", // Firefox needs this

      width: "100%",
      maxWidth: "100%",

      " .pe-textfield__input-area": {
        position: "relative",

        "&:after": {
          position: "absolute",
          content: "\"\"",
          bottom: 0,
          left: 0,
          width: "100%",
          opacity: 0
        }
      },
      ".pe-textfield--focused .pe-textfield__input-area:after": {
        opacity: 1
      },

      " .pe-textfield__input": {
        display: "block",
        width: "100%",
        background: "none",
        textAlign: "left",
        color: "inherit",
        borderStyle: "none none solid none",
        borderRadius: 0,
        margin: 0,

        // disable glow on textfield--invalid fields
        "&:textfield--invalid": {
          boxShadow: "none"
        },
        ":invalid": {
          boxShadow: "none"
        },
        // Remove clear cross icon from IE
        "::-ms-clear": {
          width: 0,
          height: 0
        }
      },
      " textarea.pe-textfield__input": {
        padding: 0,
        display: "block"
      },

      // focus border
      ".pe-textfield--focused .pe-textfield__input": {
        outline: "none"
      },

      " .pe-textfield__label": {
        position: "absolute",
        display: "block",
        bottom: 0,
        pointerEvents: "none",
        whiteSpace: "nowrap",
        textAlign: "left",
        cursor: "text"
      },
      ".pe-textfield--dirty .pe-textfield__label": {
        visibility: "hidden"
      },

      "&:not(.pe-textfield--no-char)": {
        " .pe-textfield__required-indicator, .pe-textfield__optional-indicator": {
          padding: "0 0 0 .25em"
        }
      },

      ".pe-textfield--floating-label": {
        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            visibility: "visible"
          }
        }
      },

      ".pe-textfield--disabled, &.pe-textfield--readonly": {
        " .pe-textfield__label": {
          cursor: "auto"
        },
        " .pe-textfield__input": {
          "border-bottom": "none"
        },
        " .pe-textfield__input-area:after": {
          opacity: 1,
          height: "1px",
          bottom: "-1px",
          backgroundPosition: "top",
          backgroundSize: "4px 1px",
          backgroundRepeat: "repeat-x"
        }
      },

      " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
        lineHeight: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].line_height
      },

      " .pe-textfield__counter": {
        textAlign: "right",
        float: "right",
        padding: "0 0 0 16px"
      },

      " .pe-textfield__help-focus": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("opacity"), {
        opacity: 0
      }],
      ".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus": {
        opacity: 1
      },

      ".pe-textfield--hide-clear": {
        " .pe-textfield__input::-ms-clear": {
          display: "none"
        }
      },
      ".pe-textfield--hide-spinner": {
        " input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0
        },
        " input[type=number]": {
          "-moz-appearance": "textfield"
        }
      },
      ".pe-textfield--full-width": {
        width: "100%",
        padding: 0,

        " .pe-textfield__input-area": {
          padding: 0
        }
      }
    }])];
  },
  vertical_spacing_bottom: function vertical_spacing_bottom(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      paddingBottom: vars$$1.vertical_spacing_bottom + "px"
    })];
  },
  floating_label_vertical_spacing_bottom: function floating_label_vertical_spacing_bottom(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--floating-label": {
        paddingBottom: vars$$1.floating_label_vertical_spacing_bottom + "px"
      },
      ".pe-textfield--dense": {
        paddingBottom: vars$$1.dense_floating_label_vertical_spacing_bottom + "px"
      }
    })];
  },
  vertical_spacing_top: function vertical_spacing_top(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input-area": {
        paddingTop: vars$$1.vertical_spacing_top + "px"
      }
    }), vertical_spacing_top_input_padding_v(selector, vars$$1)];
  },
  input_padding_v: function input_padding_v(selector, vars$$1) {
    return [vertical_spacing_top_input_padding_v(selector, vars$$1), floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1), dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1), input_padding_v_input_padding_h(selector, vars$$1)];
  },
  input_padding_h: function input_padding_h(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__label": {
        left: vars$$1.input_padding_h + "px",
        right: vars$$1.input_padding_h + "px"
      }
    }), input_padding_v_input_padding_h(selector, vars$$1)];
  },
  floating_label_vertical_spacing_top: function floating_label_vertical_spacing_top(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--floating-label": {
        " .pe-textfield__input-area": {
          paddingTop: vars$$1.floating_label_vertical_spacing_top + "px"
        }
      }

    }), floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1)];
  },
  dense_floating_label_vertical_spacing_top: function dense_floating_label_vertical_spacing_top(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--floating-label.pe-textfield--dense": {
        " .pe-textfield__input-area": {
          paddingTop: vars$$1.dense_floating_label_vertical_spacing_top + "px"
        }
      }
    }), dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1)];
  },
  input_focus_border_animation_duration: function input_focus_border_animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input-area:after": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("opacity", vars$$1.input_focus_border_animation_duration)
    })];
  },
  input_focus_border_width: function input_focus_border_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input-area:after": {
        height: vars$$1.input_focus_border_width + "px"
      }
    })];
  },
  font_size_error: function font_size_error(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
        fontSize: vars$$1.font_size_error + "px",
        minHeight: vars$$1.font_size_error * polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].line_height + "px"
      }
    })];
  },
  font_size_input: function font_size_input(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        fontSize: vars$$1.font_size_input + "px"
      }
    })];
  },
  line_height_input: function line_height_input(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        lineHeight: vars$$1.line_height_input + "px"
      }
    })];
  },
  input_border_width: function input_border_width(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__input": {
        borderWidth: vars$$1.input_border_width + "px"
      },
      // focus border
      ".pe-textfield--focused .pe-textfield__input": {
        borderWidth: vars$$1.input_border_width + "px",
        outline: "none"
      }
    })];
  },
  full_width_input_padding_v: function full_width_input_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--full-width": {
        " .pe-textfield__label": {
          top: vars$$1.full_width_input_padding_v + "px"
        }
      }
    }), full_width_input_padding_v_full_width_input_padding_h(selector, vars$$1)];
  },
  full_width_input_padding_h: function full_width_input_padding_h(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--full-width": {
        " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
          paddingLeft: vars$$1.full_width_input_padding_h + "px",
          paddingRight: vars$$1.full_width_input_padding_h + "px"
        },
        " .pe-textfield__label": {
          left: vars$$1.full_width_input_padding_h + "px",
          right: vars$$1.full_width_input_padding_h + "px"
        }
      }
    }), full_width_input_padding_v_full_width_input_padding_h(selector, vars$$1)];
  },
  dense_font_size_input: function dense_font_size_input(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--dense": {
        "&, .pe-textfield__input, .pe-textfield__label": {
          fontSize: vars$$1.dense_font_size_input + "px"
        }
      }
    })];
  },
  dense_full_width_font_size_input: function dense_full_width_font_size_input(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--dense": {
        " .pe-textfield__input": {
          fontSize: vars$$1.dense_full_width_font_size_input + "px"
        },
        " .pe-textfield__label": {
          fontSize: vars$$1.dense_full_width_font_size_input + "px"
        }
      }
    })];
  },
  dense_full_width_input_padding_v: function dense_full_width_input_padding_v(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--full-width": {
        ".pe-textfield--dense": {
          " .pe-textfield__label": {
            top: vars$$1.dense_full_width_input_padding_v + "px"
          }
        }
      }
    }), dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars$$1)];
  },
  dense_full_width_input_padding_h: function dense_full_width_input_padding_h(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--full-width": {
        ".pe-textfield--dense": {
          " .pe-textfield__label": {
            left: vars$$1.dense_full_width_input_padding_h + "px",
            right: vars$$1.dense_full_width_input_padding_h + "px"
          }
        }
      }
    }), dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars$$1)];
  },
  margin_top_error_message: function margin_top_error_message(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
        marginTop: vars$$1.margin_top_error_message + "px"
      }
    })];
  },
  floating_label_animation_duration: function floating_label_animation_duration(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--floating-label": {
        " .pe-textfield__label": polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].defaultTransition("all", vars$$1.floating_label_animation_duration)
      }
    })];
  },
  dense_font_size_floating_label: function dense_font_size_floating_label(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--dense": {
          ".pe-textfield--focused, &.pe-textfield--dirty": {
            fontSize: vars$$1.dense_font_size_floating_label + "px"
          }
        }
      }
    })];
  },
  dense_floating_label_top: function dense_floating_label_top(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--dense": {
          ".pe-textfield--focused, &.pe-textfield--dirty": {
            " .pe-textfield__label": {
              top: vars$$1.dense_floating_label_top + "px"
            }
          }
        }
      }
    })];
  },
  floating_label_top: function floating_label_top(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            top: vars$$1.floating_label_top + "px"
          }
        }
      }
    })];
  },
  font_size_floating_label: function font_size_floating_label(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            fontSize: vars$$1.font_size_floating_label + "px"
          }
        }
      }
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  dense_floating_label_top: 10,
  dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
  dense_floating_label_vertical_spacing_top: 23, // 12 + 8 + 4 minus natural label height padding (1)
  dense_font_size_floating_label: 13,
  dense_font_size_input: 13,
  dense_full_width_font_size_input: 13,
  dense_full_width_input_padding_h: 16,
  dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
  floating_label_animation_duration: ".12s",
  floating_label_top: 14,
  floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
  font_size_error: 12,
  font_size_floating_label: 12,
  font_size_input: 16,
  full_width_input_padding_h: 20,
  full_width_input_padding_v: 18, // 20 minus natural label height padding (2)
  input_border_width: 1,
  input_focus_border_animation_duration: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_duration,
  input_focus_border_width: 2,
  input_padding_h: 0,
  input_padding_v: 7,
  line_height_input: 20,
  margin_top_error_message: 6,
  vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  vertical_spacing_top: 6, // 8 minus natural label height padding (1)

  color_light_input_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_input_background: "transparent", // only used to "remove" autofill color
  color_light_highlight_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_input_bottom_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_border_light),
  color_light_input_error_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])("221, 44, 0"),
  color_light_input_error_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])("221, 44, 0"),
  color_light_input_placeholder: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_tertiary),
  color_light_label_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_tertiary),
  color_light_disabled_label_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_disabled),
  color_light_readonly_label_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_tertiary),
  color_light_help_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_tertiary),
  color_light_required_symbol: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])("221, 44, 0"),
  color_light_focus_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary),
  color_light_counter_ok_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary),

  color_dark_input_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_input_background: "transparent", // only used to "remove" autofill color
  color_dark_highlight_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_input_bottom_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_border_light),
  color_dark_input_error_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])("222, 50, 38"),
  color_dark_input_error_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])("222, 50, 38"),
  color_dark_input_placeholder: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_tertiary),
  color_dark_label_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_tertiary),
  color_dark_disabled_label_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_disabled),
  color_dark_readonly_label_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_tertiary),
  color_dark_help_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_tertiary),
  color_dark_required_symbol: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])("221, 44, 0"),
  color_dark_focus_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary),
  color_dark_counter_ok_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_primary)
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-toolbar/dist/polythene-css-toolbar.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-toolbar/dist/polythene-css-toolbar.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: addStyle, color, getStyle, layout, vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars$1; });
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



var classes = {

  // Toolbar

  component: "pe-toolbar",

  // states
  compact: "pe-toolbar--compact",
  appBar: "pe-toolbar--app-bar",

  // Toolbar title

  // elements
  title: "pe-toolbar__title",

  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent",
  fullbleed: "pe-toolbar--fullbleed",
  border: "pe-toolbar--border"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      color: vars$$1["color_" + tint + "_text"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-toolbar--border": {
        borderColor: vars$$1["color_" + tint + "_border"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createColor"])({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var breakpoint = function breakpoint(breakpointSel) {
  return function (selector, o) {
    return _defineProperty$1({}, breakpointSel, _defineProperty$1({}, selector, o));
  };
};

var indent_padding_side = function indent_padding_side(selector, vars$$1, isRTL) {
  var _peToolbar__title;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": (_peToolbar__title = {}, _defineProperty$1(_peToolbar__title, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty$1(_peToolbar__title, isRTL ? "marginRight" : "marginLeft", vars$$1.indent - vars$$1.padding_side + "px"), _peToolbar__title)
  });
};

var title_padding_title_after_icon_padding = function title_padding_title_after_icon_padding(selector, vars$$1, isRTL) {
  var _spanPeToolbar, _spanPe;

  return Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
    " > span, .pe-toolbar__title": (_spanPeToolbar = {}, _defineProperty$1(_spanPeToolbar, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty$1(_spanPeToolbar, isRTL ? "marginRight" : "marginLeft", vars$$1.title_padding + "px"), _spanPeToolbar),
    " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent, * + .pe-toolbar__title.pe-toolbar__title--indent": (_spanPe = {}, _defineProperty$1(_spanPe, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty$1(_spanPe, isRTL ? "marginRight" : "marginLeft", vars$$1.title_after_icon_padding + "px"), _spanPe),
    " .pe-toolbar__title--center": {
      marginLeft: vars$$1.title_padding + "px",
      marginRight: vars$$1.title_padding + "px"
    }
  });
};

var breakpointPhoneOnly = breakpoint("@media (min-width: " + polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].breakpoint_for_phone_only + "px) and (orientation: landscape)");

var breakpointTabletPortraitUp = breakpoint("@media (min-width: " + polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].breakpoint_for_tablet_portrait_up + "px)");

var varFns = {
  general_styles: function general_styles(selector) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layout, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutHorizontal, polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["flex"].layoutCenter, {
      position: "relative",
      zIndex: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].z_toolbar,

      ".pe-toolbar--fullbleed": {
        padding: 0
      },

      ".pe-toolbar--border": {
        borderWidth: "1px",
        borderStyle: "none none solid none"
      },

      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        width: "100%",
        display: "block",
        wordBreak: "break-all",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },

      " .pe-toolbar__title--center": {
        textAlign: "center",
        justifyContent: "center"
      },

      " > .pe-action": {
        paddingLeft: "12px",
        paddingRight: "12px"
      },

      " .pe-fit": [polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["mixin"].fit(), {
        margin: 0
      }]
    }])];
  },
  height: function height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      height: vars$$1.height + "px"
    })];
  },
  height_compact: function height_compact(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      ".pe-toolbar--compact": {
        height: vars$$1.height_compact + "px"
      }
    }), breakpointPhoneOnly(selector, {
      height: vars$$1.height + "px"
    })];
  },
  line_height: function line_height(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      lineHeight: vars$$1.line_height + "em",

      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        lineHeight: vars$$1.line_height
      }
    })];
  },
  font_size: function font_size(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        fontSize: vars$$1.font_size + "px"
      }
    })];
  },
  padding_side: function padding_side(selector, vars$$1) {
    return [Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["sel"])(selector, {
      padding: "0 " + vars$$1.padding_side + "px"
    }), indent_padding_side(selector, vars$$1, false), indent_padding_side(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  indent: function indent(selector, vars$$1) {
    return [indent_padding_side(selector, vars$$1, false), indent_padding_side(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  title_padding: function title_padding(selector, vars$$1) {
    return [title_padding_title_after_icon_padding(selector, vars$$1, false), title_padding_title_after_icon_padding(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  title_after_icon_padding: function title_after_icon_padding(selector, vars$$1) {
    return [title_padding_title_after_icon_padding(selector, vars$$1, false), title_padding_title_after_icon_padding(Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["selectorRTL"])(selector), vars$$1, true)];
  },
  height_large: function height_large(selector, vars$$1) {
    return [breakpointTabletPortraitUp(selector, {
      height: vars$$1.height_large + "px"
    })];
  },
  padding_side_large: function padding_side_large(selector, vars$$1) {
    return [breakpointTabletPortraitUp(selector, {
      padding: "0 " + vars$$1.padding_side_large + "px"
    })];
  }
};

var layout = Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["createLayout"])({ varFns: varFns });

var padding_side = polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component * 2 - 12; // 16 - 12 = 4

var vars$1 = {
  general_styles: true,

  font_size: 18,
  height: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component * 7, // 56
  height_compact: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component * 6, // 48
  height_large: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component * 8, // 64
  indent: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].unit_indent,
  line_height: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].line_height,
  padding_side: padding_side,
  padding_side_large: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component * 3 - 12, // 24 - 12 = 12
  title_after_icon_padding: polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component * 9 - polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].grid_unit_component * 6 - padding_side, // 72 - 48 - 4 = 20
  title_padding: 12, // icon padding

  color_light_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_text_primary),
  color_light_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_light_border_light),
  color_light_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_light_background),

  color_dark_text: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_text_primary),
  color_dark_border: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_foreground, polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].blend_dark_border_light),
  color_dark_background: Object(polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["rgba"])(polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].color_dark_background)
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createAddStyle(selector, fns, vars$1);

var getStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].createGetStyle(selector, fns, vars$1);

polythene_core_css__WEBPACK_IMPORTED_MODULE_0__["styler"].addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});




/***/ }),

/***/ "../../polythene-css-typography/dist/polythene-css-typography.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css-typography/dist/polythene-css-typography.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: vars, addRoboto, addStyle, addTypography, getStyle */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoboto", function() { return addRoboto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypography", function() { return addTypography; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony import */ var polythene_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-style */ "../../polythene-style/dist/polythene-style.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"]; });

/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../../polythene-utilities/dist/polythene-utilities.mjs");
/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");





var reset = (function () {
  return [{
    // apply a natural box layout model to all elements, but allow elements to change
    " html": {
      "box-sizing": "border-box"
    },
    " *, *:before, *:after": {
      "box-sizing": "inherit"
    },
    " *": [
    // remove tap highlight in mobile Safari
    {
      "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
    }, {
      "-webkit-tap-highlight-color": "transparent" // For some Androids
    }],

    // Remove dotted link borders in Firefox
    " a, a:active, a:focus, input:active, *:focus": {
      outline: 0
    },

    // Mobile Safari: override default fading of disabled elements
    " input:disabled": {
      opacity: 1
    }
  }];
});

var roboto = (function () {
  return [{
    "html, body, button, input, select, textarea": {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif"
    }
  }];
});

var loadRoboto = function loadRoboto() {
  return [{
    "@import": "url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700')"
  }];
};

var fontSize = 14;

var typography = (function () {
  return [{
    " h1, h2, h3, h4, h5, h6, p": {
      margin: 0,
      padding: 0
    }
  }, {
    " h1, h2, h3, h4, h5, h6": {
      " small": {
        "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
        "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
        "letter-spacing": "-0.02em",
        "font-size": "0.6em"
      }
    }
  }, {
    " h1": {
      "font-size": "56px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  }, {
    " h2": {
      "font-size": "45px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  }, {
    " h3": {
      "font-size": "34px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  }, {
    " h4": {
      "font-size": "24px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "-moz-osx-font-smoothing": "grayscale",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  }, {
    " h5": {
      "font-size": "20px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_medium,
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "letter-spacing": "-0.02em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  }, {
    " h6": {
      "font-size": "16px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "letter-spacing": "0.04em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  }, {
    " html, body": {
      "font-size": fontSize + "px",
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal
    },
    " p": {
      "font-size": fontSize + "px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "letter-spacing": "0",
      "margin-bottom": "16px"
    },
    " blockquote": {
      "position": "relative",
      "font-size": "24px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
      "font-style": "italic",
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "letter-spacing": "0.08em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    },
    " ul, ol": {
      "font-size": fontSize + "px",
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_normal,
      "line-height": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].line_height,
      "letter-spacing": 0
    },
    " b, strong": {
      "font-weight": polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"].font_weight_medium
    }
  }];
});

var fns = [roboto, reset, typography];
var selector = "";

var addStyle = polythene_core_css__WEBPACK_IMPORTED_MODULE_2__["styler"].createAddStyle(selector, fns, polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"]);

var getStyle = function getStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  return polythene_core_css__WEBPACK_IMPORTED_MODULE_2__["styler"].getStyle({
    selectors: [customSelector, selector],
    fns: [loadRoboto].concat(fns), // add font import for written CSS
    vars: polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"],
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var addRoboto = function addRoboto() {
  Object(polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["addWebFont"])("google", "Roboto:400,500,700,400italic:latin");
};

var addTypography = function addTypography() {
  addRoboto();
  polythene_core_css__WEBPACK_IMPORTED_MODULE_2__["styler"].add("pe-material-design-typography", fns.map(function (s) {
    return s();
  }));
};




/***/ }),

/***/ "../../polythene-css/dist/polythene-css.mjs":
/*!*******************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css/dist/polythene-css.mjs ***!
  \*******************************************************************************************************************/
/*! exports provided: BaseSpinnerCSS, ButtonCSS, ButtonGroupCSS, CardCSS, CheckboxCSS, DialogCSS, DialogPaneCSS, DrawerCSS, FABCSS, IconCSS, IconButtonCSS, IOSSpinnerCSS, ListCSS, ListTileCSS, MaterialDesignProgressSpinnerCSS, MaterialDesignSpinnerCSS, MenuCSS, NotificationCSS, RadioButtonCSS, RaisedButtonCSS, RippleCSS, SearchCSS, SelectionControlCSS, ShadowCSS, SliderCSS, SnackbarCSS, SVGCSS, SwitchCSS, TabsCSS, TextFieldCSS, ToolbarCSS, TypographyCSS, addTypography, addRoboto, addLayoutStyles */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-css-base-spinner */ "../../polythene-css-base-spinner/dist/polythene-css-base-spinner.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "BaseSpinnerCSS", function() { return polythene_css_base_spinner__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var polythene_css_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-css-button */ "../../polythene-css-button/dist/polythene-css-button.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ButtonCSS", function() { return polythene_css_button__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var polythene_css_button_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-css-button-group */ "../../polythene-css-button-group/dist/polythene-css-button-group.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupCSS", function() { return polythene_css_button_group__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var polythene_css_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-css-card */ "../../polythene-css-card/dist/polythene-css-card.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CardCSS", function() { return polythene_css_card__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var polythene_css_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-css-checkbox */ "../../polythene-css-checkbox/dist/polythene-css-checkbox.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CheckboxCSS", function() { return polythene_css_checkbox__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var polythene_css_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polythene-css-dialog */ "../../polythene-css-dialog/dist/polythene-css-dialog.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "DialogCSS", function() { return polythene_css_dialog__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var polythene_css_dialog_pane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polythene-css-dialog-pane */ "../../polythene-css-dialog-pane/dist/polythene-css-dialog-pane.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "DialogPaneCSS", function() { return polythene_css_dialog_pane__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var polythene_css_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! polythene-css-drawer */ "../../polythene-css-drawer/dist/polythene-css-drawer.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "DrawerCSS", function() { return polythene_css_drawer__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var polythene_css_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! polythene-css-fab */ "../../polythene-css-fab/dist/polythene-css-fab.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "FABCSS", function() { return polythene_css_fab__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var polythene_css_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! polythene-css-icon */ "../../polythene-css-icon/dist/polythene-css-icon.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "IconCSS", function() { return polythene_css_icon__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! polythene-css-icon-button */ "../../polythene-css-icon-button/dist/polythene-css-icon-button.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "IconButtonCSS", function() { return polythene_css_icon_button__WEBPACK_IMPORTED_MODULE_10__; });
/* harmony import */ var polythene_css_ios_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! polythene-css-ios-spinner */ "../../polythene-css-ios-spinner/dist/polythene-css-ios-spinner.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "IOSSpinnerCSS", function() { return polythene_css_ios_spinner__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var polythene_css_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! polythene-css-list */ "../../polythene-css-list/dist/polythene-css-list.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ListCSS", function() { return polythene_css_list__WEBPACK_IMPORTED_MODULE_12__; });
/* harmony import */ var polythene_css_list_tile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! polythene-css-list-tile */ "../../polythene-css-list-tile/dist/polythene-css-list-tile.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ListTileCSS", function() { return polythene_css_list_tile__WEBPACK_IMPORTED_MODULE_13__; });
/* harmony import */ var polythene_css_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! polythene-css-material-design-progress-spinner */ "../../polythene-css-material-design-progress-spinner/dist/polythene-css-material-design-progress-spinner.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignProgressSpinnerCSS", function() { return polythene_css_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_14__; });
/* harmony import */ var polythene_css_material_design_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! polythene-css-material-design-spinner */ "../../polythene-css-material-design-spinner/dist/polythene-css-material-design-spinner.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignSpinnerCSS", function() { return polythene_css_material_design_spinner__WEBPACK_IMPORTED_MODULE_15__; });
/* harmony import */ var polythene_css_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! polythene-css-menu */ "../../polythene-css-menu/dist/polythene-css-menu.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MenuCSS", function() { return polythene_css_menu__WEBPACK_IMPORTED_MODULE_16__; });
/* harmony import */ var polythene_css_notification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! polythene-css-notification */ "../../polythene-css-notification/dist/polythene-css-notification.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "NotificationCSS", function() { return polythene_css_notification__WEBPACK_IMPORTED_MODULE_17__; });
/* harmony import */ var polythene_css_radio_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! polythene-css-radio-button */ "../../polythene-css-radio-button/dist/polythene-css-radio-button.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RadioButtonCSS", function() { return polythene_css_radio_button__WEBPACK_IMPORTED_MODULE_18__; });
/* harmony import */ var polythene_css_raised_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! polythene-css-raised-button */ "../../polythene-css-raised-button/dist/polythene-css-raised-button.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RaisedButtonCSS", function() { return polythene_css_raised_button__WEBPACK_IMPORTED_MODULE_19__; });
/* harmony import */ var polythene_css_ripple__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! polythene-css-ripple */ "../../polythene-css-ripple/dist/polythene-css-ripple.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RippleCSS", function() { return polythene_css_ripple__WEBPACK_IMPORTED_MODULE_20__; });
/* harmony import */ var polythene_css_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! polythene-css-search */ "../../polythene-css-search/dist/polythene-css-search.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SearchCSS", function() { return polythene_css_search__WEBPACK_IMPORTED_MODULE_21__; });
/* harmony import */ var polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! polythene-css-selection-control */ "../../polythene-css-selection-control/dist/polythene-css-selection-control.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SelectionControlCSS", function() { return polythene_css_selection_control__WEBPACK_IMPORTED_MODULE_22__; });
/* harmony import */ var polythene_css_shadow__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! polythene-css-shadow */ "../../polythene-css-shadow/dist/polythene-css-shadow.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ShadowCSS", function() { return polythene_css_shadow__WEBPACK_IMPORTED_MODULE_23__; });
/* harmony import */ var polythene_css_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! polythene-css-slider */ "../../polythene-css-slider/dist/polythene-css-slider.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SliderCSS", function() { return polythene_css_slider__WEBPACK_IMPORTED_MODULE_24__; });
/* harmony import */ var polythene_css_snackbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! polythene-css-snackbar */ "../../polythene-css-snackbar/dist/polythene-css-snackbar.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SnackbarCSS", function() { return polythene_css_snackbar__WEBPACK_IMPORTED_MODULE_25__; });
/* harmony import */ var polythene_css_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! polythene-css-svg */ "../../polythene-css-svg/dist/polythene-css-svg.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SVGCSS", function() { return polythene_css_svg__WEBPACK_IMPORTED_MODULE_26__; });
/* harmony import */ var polythene_css_switch__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! polythene-css-switch */ "../../polythene-css-switch/dist/polythene-css-switch.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SwitchCSS", function() { return polythene_css_switch__WEBPACK_IMPORTED_MODULE_27__; });
/* harmony import */ var polythene_css_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! polythene-css-tabs */ "../../polythene-css-tabs/dist/polythene-css-tabs.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "TabsCSS", function() { return polythene_css_tabs__WEBPACK_IMPORTED_MODULE_28__; });
/* harmony import */ var polythene_css_textfield__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! polythene-css-textfield */ "../../polythene-css-textfield/dist/polythene-css-textfield.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "TextFieldCSS", function() { return polythene_css_textfield__WEBPACK_IMPORTED_MODULE_29__; });
/* harmony import */ var polythene_css_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! polythene-css-toolbar */ "../../polythene-css-toolbar/dist/polythene-css-toolbar.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ToolbarCSS", function() { return polythene_css_toolbar__WEBPACK_IMPORTED_MODULE_30__; });
/* harmony import */ var polythene_css_typography__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! polythene-css-typography */ "../../polythene-css-typography/dist/polythene-css-typography.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "TypographyCSS", function() { return polythene_css_typography__WEBPACK_IMPORTED_MODULE_31__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTypography", function() { return polythene_css_typography__WEBPACK_IMPORTED_MODULE_31__["addTypography"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoboto", function() { return polythene_css_typography__WEBPACK_IMPORTED_MODULE_31__["addRoboto"]; });

/* harmony import */ var polythene_core_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! polythene-core-css */ "../../polythene-core-css/dist/polythene-core-css.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLayoutStyles", function() { return polythene_core_css__WEBPACK_IMPORTED_MODULE_32__["addLayoutStyles"]; });





































































/***/ }),

/***/ "../../polythene-css/dist/polythene-typography.css":
/*!**************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css/dist/polythene-typography.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../../polythene-css/dist/polythene.css":
/*!***************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css/dist/polythene.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../../polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: BaseSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSpinner", function() { return BaseSpinner; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_base_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-base-spinner */ "../../polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");




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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BaseSpinner = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_base_spinner__WEBPACK_IMPORTED_MODULE_1__["coreBaseSpinner"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_base_spinner__WEBPACK_IMPORTED_MODULE_1__["coreBaseSpinner"].createContent(vnode, _extends(args, { Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__["Shadow"] }));
  }
}));

BaseSpinner.classes = classes;
BaseSpinner.displayName = "BaseSpinner";




/***/ }),

/***/ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-base/dist/polythene-mithril-base.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: keys, renderer, StateComponent, ViewComponent */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");


var keys = {
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  class: "class",
  className: "class",
  enctype: "enctype",
  formaction: "formaction",
  frameborder: "frameborder",
  maxlength: "maxlength",
  minlength: "minlength",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  readonly: "readonly",
  tabindex: "tabindex"
};

var renderer = mithril__WEBPACK_IMPORTED_MODULE_0__;
renderer.displayName = "mithril";

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stream = createCommonjsModule(function (module) {
(function () {
		/* eslint-enable */

		var guid = 0,
		    HALT = {};
		function createStream() {
			function stream() {
				if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);
				return stream._state.value;
			}
			initStream(stream);

			if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);

			return stream;
		}
		function initStream(stream) {
			stream.constructor = createStream;
			stream._state = { id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined, unregister: undefined };
			stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream;
			stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;

			Object.defineProperties(stream, {
				end: { get: function get() {
						if (!stream._state.endStream) {
							var endStream = createStream();
							endStream.map(function (value) {
								if (value === true) {
									unregisterStream(stream);
									endStream._state.unregister = function () {
										unregisterStream(endStream);
									};
								}
								return value;
							});
							stream._state.endStream = endStream;
						}
						return stream._state.endStream;
					} }
			});
		}
		function updateStream(stream, value) {
			updateState(stream, value);
			for (var id in stream._state.deps) {
				updateDependency(stream._state.deps[id], false);
			}if (stream._state.unregister != null) stream._state.unregister();
			finalize(stream);
		}
		function updateState(stream, value) {
			stream._state.value = value;
			stream._state.changed = true;
			if (stream._state.state !== 2) stream._state.state = 1;
		}
		function updateDependency(stream, mustSync) {
			var state = stream._state,
			    parents = state.parents;
			if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
				var value = stream._state.derive();
				if (value === HALT) return false;
				updateState(stream, value);
			}
		}
		function finalize(stream) {
			stream._state.changed = false;
			for (var id in stream._state.deps) {
				stream._state.deps[id]._state.changed = false;
			}
		}

		function combine(fn, streams) {
			if (!streams.every(valid)) throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream");
			return initDependency(createStream(), streams, function () {
				return fn.apply(this, streams.concat([streams.filter(changed)]));
			});
		}

		function initDependency(dep, streams, derive) {
			var state = dep._state;
			state.derive = derive;
			state.parents = streams.filter(notEnded);

			registerDependency(dep, state.parents);
			updateDependency(dep, true);

			return dep;
		}
		function registerDependency(stream, parents) {
			for (var i = 0; i < parents.length; i++) {
				parents[i]._state.deps[stream._state.id] = stream;
				registerDependency(stream, parents[i]._state.parents);
			}
		}
		function unregisterStream(stream) {
			for (var i = 0; i < stream._state.parents.length; i++) {
				var parent = stream._state.parents[i];
				delete parent._state.deps[stream._state.id];
			}
			for (var id in stream._state.deps) {
				var dependent = stream._state.deps[id];
				var index = dependent._state.parents.indexOf(stream);
				if (index > -1) dependent._state.parents.splice(index, 1);
			}
			stream._state.state = 2; //ended
			stream._state.deps = {};
		}

		function map(fn) {
			return combine(function (stream) {
				return fn(stream());
			}, [this]);
		}
		function ap(stream) {
			return combine(function (s1, s2) {
				return s1()(s2());
			}, [stream, this]);
		}
		function valueOf() {
			return this._state.value;
		}
		function toJSON() {
			return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value;
		}

		function valid(stream) {
			return stream._state;
		}
		function active(stream) {
			return stream._state.state === 1;
		}
		function changed(stream) {
			return stream._state.changed;
		}
		function notEnded(stream) {
			return stream._state.state !== 2;
		}

		function merge(streams) {
			return combine(function () {
				return streams.map(function (s) {
					return s();
				});
			}, streams);
		}

		function scan(reducer, seed, stream) {
			var newStream = combine(function (s) {
				return seed = reducer(seed, s._state.value);
			}, [stream]);

			if (newStream._state.state === 0) newStream(seed);

			return newStream;
		}

		function scanMerge(tuples, seed) {
			var streams = tuples.map(function (tuple) {
				var stream = tuple[0];
				if (stream._state.state === 0) stream(undefined);
				return stream;
			});

			var newStream = combine(function () {
				var changed = arguments[arguments.length - 1];

				streams.forEach(function (stream, idx) {
					if (changed.indexOf(stream) > -1) {
						seed = tuples[idx][1](seed, stream._state.value);
					}
				});

				return seed;
			}, streams);

			return newStream;
		}

		createStream["fantasy-land/of"] = createStream;
		createStream.merge = merge;
		createStream.combine = combine;
		createStream.scan = scan;
		createStream.scanMerge = scanMerge;
		createStream.HALT = HALT;

		module["exports"] = createStream;
	})();
});

var stream$1 = stream;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var requiresKeys = false;

var StateComponent = function StateComponent(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === undefined ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === undefined ? function () {} : _ref$createProps,
      _ref$component = _ref.component,
      component = _ref$component === undefined ? null : _ref$component,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === undefined ? function () {
    return "div";
  } : _ref$getElement,
      _ref$getInitialState = _ref.getInitialState,
      getInitialState = _ref$getInitialState === undefined ? function () {
    return {};
  } : _ref$getInitialState,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === undefined ? function () {} : _ref$onUnMount,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === undefined ? function () {} : _ref$onUpdate,
      _ref$view = _ref.view,
      view = _ref$view === undefined ? null : _ref$view;


  var oninit = function oninit(vnode) {
    var protoState = _extends({}, vnode);
    var initialState = getInitialState(protoState, stream$1, { keys: keys });
    _extends(vnode.state, initialState);
    vnode._mounted = false;

    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(function () {
      return vnode._mounted && setTimeout(renderer.redraw);
    });
  };

  var oncreate = function oncreate(vnode) {
    vnode._mounted = true;
    onMount(vnode, { keys: keys });
  };

  var render = function render(vnode) {
    return renderer(component || getElement(vnode), createProps(vnode, { renderer: renderer, requiresKeys: requiresKeys, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, requiresKeys: requiresKeys, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: view ? function (vnode) {
      return view(vnode, { render: render, renderer: renderer });
    } : function (vnode) {
      return render(vnode);
    },
    oninit: oninit,
    oncreate: oncreate,
    onremove: onUnMount,
    onupdate: onUpdate
  };
};

var requiresKeys$1 = false;

var ViewComponent = function ViewComponent(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === undefined ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === undefined ? function () {} : _ref$createProps,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === undefined ? function () {
    return "div";
  } : _ref$getElement,
      _ref$component = _ref.component,
      component = _ref$component === undefined ? null : _ref$component,
      _ref$view = _ref.view,
      view = _ref$view === undefined ? null : _ref$view,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === undefined ? function () {} : _ref$onUnMount;


  var render = function render(vnode) {
    return renderer(component || getElement(vnode), createProps(vnode, { renderer: renderer, requiresKeys: requiresKeys$1, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, requiresKeys: requiresKeys$1, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: view ? function (vnode) {
      return view(vnode, { render: render, renderer: renderer });
    } : function (vnode) {
      return render(vnode);
    },
    oncreate: function oncreate(vnode) {
      return onMount(vnode, { keys: keys });
    },
    onremove: onUnMount
  };
};




/***/ }),

/***/ "../../polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: ButtonGroup */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-button-group */ "../../polythene-core-button-group/dist/polythene-core-button-group.mjs");



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ButtonGroup = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_button_group__WEBPACK_IMPORTED_MODULE_1__["coreButtonGroup"]));

ButtonGroup.displayName = "ButtonGroup";




/***/ }),

/***/ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-button/dist/polythene-mithril-button.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Button */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-button */ "../../polythene-core-button/dist/polythene-core-button.mjs");
/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-ripple */ "../../polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_button__WEBPACK_IMPORTED_MODULE_1__["coreButton"], {
  createProps: function createProps(vnode, args) {
    return polythene_core_button__WEBPACK_IMPORTED_MODULE_1__["coreButton"].createProps(vnode, _extends(args, { Ripple: polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"], Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"] }));
  },
  createContent: function createContent(vnode, args) {
    return polythene_core_button__WEBPACK_IMPORTED_MODULE_1__["coreButton"].createContent(vnode, _extends(args, { Ripple: polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"], Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"] }));
  }
}));

Button.displayName = "Button";




/***/ }),

/***/ "../../polythene-mithril-card/dist/polythene-mithril-card.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-card/dist/polythene-mithril-card.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: Card */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-card */ "../../polythene-core-card/dist/polythene-core-card.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../../polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");






var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardActions = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_card__WEBPACK_IMPORTED_MODULE_1__["coreCardActions"]));

CardActions.displayName = "CardActions";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardMedia = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends$1({}, polythene_core_card__WEBPACK_IMPORTED_MODULE_1__["coreCardMedia"]));

CardMedia.displayName = "CardMedia";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardPrimary = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends$2({}, polythene_core_card__WEBPACK_IMPORTED_MODULE_1__["coreCardPrimary"]));

CardPrimary.displayName = "CardPrimary";

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Card = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends$3({}, polythene_core_card__WEBPACK_IMPORTED_MODULE_1__["coreCard"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_card__WEBPACK_IMPORTED_MODULE_1__["coreCard"].createContent(vnode, _extends$3(args, { CardActions: CardActions, CardMedia: CardMedia, CardPrimary: CardPrimary, Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], ListTile: polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_3__["ListTile"], Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__["Shadow"] }));
  }
}));

Card.displayName = "Card";




/***/ }),

/***/ "../../polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-selection-control */ "../../polythene-core-selection-control/dist/polythene-core-selection-control.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony import */ var polythene_core_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-core-checkbox */ "../../polythene-core-checkbox/dist/polythene-core-checkbox.mjs");






var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["viewControl"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["viewControl"].createContent(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__["IconButton"] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends$1({}, polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["coreSelectionControl"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["coreSelectionControl"].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Checkbox = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends$2({}, polythene_core_checkbox__WEBPACK_IMPORTED_MODULE_4__["coreCheckbox"], {
  component: SelectionControl
}));

Checkbox.displayName = "Checkbox";




/***/ }),

/***/ "../../polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs ***!
  \***************************************************************************************************************************************************/
/*! exports provided: DialogPane */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPane", function() { return DialogPane; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_dialog_pane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-dialog-pane */ "../../polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs");



var DialogPane = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core_dialog_pane__WEBPACK_IMPORTED_MODULE_1__["coreDialogPane"]);

DialogPane.displayName = "DialogPane";




/***/ }),

/***/ "../../polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DialogInstance, Dialog */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInstance", function() { return DialogInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-dialog */ "../../polythene-core-dialog/dist/polythene-core-dialog.mjs");
/* harmony import */ var polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-dialog-pane */ "../../polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");






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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
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
  open: "pe-dialog--open", // class set to html element
  visible: "pe-dialog--visible", // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",

  // lookup
  menuContent: menuClasses.content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DialogInstance = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__["coreDialog"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__["coreDialog"].createContent(vnode, _extends(args, { Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__["Shadow"], Pane: polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_3__["DialogPane"], createPane: polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__["coreDialog"].createPane }));
  }
}));

DialogInstance.displayName = "DialogInstance";

var options = {
  name: "dialog",
  htmlShowClass: classes.open,
  defaultId: "default_dialog",
  holderSelector: "div." + classes.holder,
  instance: DialogInstance,
  placeholder: "span." + classes.placeholder
};

var Multiple = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({ options: options, renderer: polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"] });
var Dialog = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Dialog[p] = Multiple[p];
});

Dialog.displayName = "Dialog";




/***/ }),

/***/ "../../polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Drawer */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-drawer */ "../../polythene-core-drawer/dist/polythene-core-drawer.mjs");
/* harmony import */ var polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-dialog */ "../../polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs");





var classes = {
  component: "pe-dialog pe-drawer",

  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DrawerInstance = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_drawer__WEBPACK_IMPORTED_MODULE_2__["coreDrawer"], { component: polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogInstance"] }));

var DrawerToggle = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Conditional"]);
DrawerToggle.displayName = "DrawerToggle";

var Drawer = {
  view: function view(vnode) {
    return Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"])(DrawerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      permanent: vnode.attrs.permanent || vnode.attrs.mini // passed to Conditional
    }));
  }
};

Drawer.displayName = "Drawer";




/***/ }),

/***/ "../../polythene-mithril-fab/dist/polythene-mithril-fab.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-fab/dist/polythene-mithril-fab.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: FAB */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAB", function() { return FAB; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-fab */ "../../polythene-core-fab/dist/polythene-core-fab.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_raised_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-raised-button */ "../../polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs");





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FAB = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_fab__WEBPACK_IMPORTED_MODULE_1__["coreFAB"], {
  createProps: function createProps(vnode, args) {
    return polythene_core_fab__WEBPACK_IMPORTED_MODULE_1__["coreFAB"].createProps(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"] }));
  },
  createContent: function createContent(vnode, args) {
    return polythene_core_fab__WEBPACK_IMPORTED_MODULE_1__["coreFAB"].createContent(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"] }));
  },
  component: polythene_mithril_raised_button__WEBPACK_IMPORTED_MODULE_3__["RaisedButton"]
}));

FAB.displayName = "FAB";




/***/ }),

/***/ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs ***!
  \***************************************************************************************************************************************************/
/*! exports provided: IconButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-icon-button */ "../../polythene-core-icon-button/dist/polythene-core-icon-button.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var IconButton = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_icon_button__WEBPACK_IMPORTED_MODULE_1__["coreIconButton"], {
  createProps: function createProps(vnode, args) {
    return polythene_core_icon_button__WEBPACK_IMPORTED_MODULE_1__["coreIconButton"].createProps(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"] }));
  },
  createContent: function createContent(vnode, args) {
    return polythene_core_icon_button__WEBPACK_IMPORTED_MODULE_1__["coreIconButton"].createContent(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"] }));
  },
  component: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_3__["Button"]
}));

IconButton.displayName = "IconButton";




/***/ }),

/***/ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-icon/dist/polythene-mithril-icon.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: Icon */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-icon */ "../../polythene-core-icon/dist/polythene-core-icon.mjs");
/* harmony import */ var polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-svg */ "../../polythene-mithril-svg/dist/polythene-mithril-svg.mjs");




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Icon = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_icon__WEBPACK_IMPORTED_MODULE_1__["coreIcon"], {
  createProps: function createProps(vnode, args) {
    return polythene_core_icon__WEBPACK_IMPORTED_MODULE_1__["coreIcon"].createProps(vnode, _extends(args, { SVG: polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_2__["SVG"] }));
  },
  createContent: function createContent(vnode, args) {
    return polythene_core_icon__WEBPACK_IMPORTED_MODULE_1__["coreIcon"].createContent(vnode, _extends(args, { SVG: polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_2__["SVG"] }));
  }
}));

Icon.displayName = "Icon";




/***/ }),

/***/ "../../polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs ***!
  \***************************************************************************************************************************************************/
/*! exports provided: IOSSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSSpinner", function() { return IOSSpinner; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_ios_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-ios-spinner */ "../../polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs");
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../../polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");





var classes = {
  component: "pe-ios-spinner",

  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var baseSpinnerClasses = {
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_ios_spinner__WEBPACK_IMPORTED_MODULE_2__["coreIOSSpinner"], { component: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_3__["BaseSpinner"] }));

var SpinnerToggle = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Conditional"]);
SpinnerToggle.displayName = "IOSSpinnerToggle";

var IOSSpinner = {
  view: function view(vnode) {
    return Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }));
  }
};

IOSSpinner.classes = classes;
IOSSpinner.displayName = "IOSSpinner";




/***/ }),

/***/ "../../polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ListTile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTile", function() { return ListTile; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_list_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-list-tile */ "../../polythene-core-list-tile/dist/polythene-core-list-tile.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-ripple */ "../../polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ListTile = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_list_tile__WEBPACK_IMPORTED_MODULE_1__["coreListTile"], {
  createProps: function createProps(vnode, args) {
    return polythene_core_list_tile__WEBPACK_IMPORTED_MODULE_1__["coreListTile"].createProps(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], Ripple: polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_3__["Ripple"] }));
  },
  createContent: function createContent(vnode, args) {
    return polythene_core_list_tile__WEBPACK_IMPORTED_MODULE_1__["coreListTile"].createContent(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], Ripple: polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_3__["Ripple"] }));
  }
}));

ListTile.displayName = "ListTile";




/***/ }),

/***/ "../../polythene-mithril-list/dist/polythene-mithril-list.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-list/dist/polythene-mithril-list.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: List */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-list */ "../../polythene-core-list/dist/polythene-core-list.mjs");
/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../../polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var List = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_list__WEBPACK_IMPORTED_MODULE_1__["coreList"], {
  createProps: function createProps(vnode, args) {
    return polythene_core_list__WEBPACK_IMPORTED_MODULE_1__["coreList"].createProps(vnode, _extends(args, { ListTile: polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_2__["ListTile"] }));
  },
  createContent: function createContent(vnode, args) {
    return polythene_core_list__WEBPACK_IMPORTED_MODULE_1__["coreList"].createContent(vnode, _extends(args, { ListTile: polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_2__["ListTile"] }));
  }
}));

List.displayName = "List";




/***/ }),

/***/ "../../polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: MaterialDesignProgressSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignProgressSpinner", function() { return MaterialDesignProgressSpinner; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-material-design-progress-spinner */ "../../polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs");
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../../polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");





var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var baseSpinnerClasses = {
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["coreMaterialDesignProgressSpinner"], { component: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_3__["BaseSpinner"] }));

var SpinnerToggle = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Conditional"]);
SpinnerToggle.displayName = "MaterialDesignProgressSpinnerToggle";

var MaterialDesignProgressSpinner = {
  view: function view(vnode) {
    return Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }));
  }
};

MaterialDesignProgressSpinner.classes = classes;
MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";




/***/ }),

/***/ "../../polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs":
/*!***************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: MaterialDesignSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignSpinner", function() { return MaterialDesignSpinner; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_material_design_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-material-design-spinner */ "../../polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs");
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../../polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");





var classes = {
  component: "pe-md-spinner",

  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var baseSpinnerClasses = {
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_material_design_spinner__WEBPACK_IMPORTED_MODULE_2__["coreMaterialDesignSpinner"], { component: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_3__["BaseSpinner"] }));

var SpinnerToggle = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Conditional"]);
SpinnerToggle.displayName = "MaterialDesignSpinnerToggle";

var MaterialDesignSpinner = {
  view: function view(vnode) {
    return Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }));
  }
};

MaterialDesignSpinner.classes = classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";




/***/ }),

/***/ "../../polythene-mithril-menu/dist/polythene-mithril-menu.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-menu/dist/polythene-mithril-menu.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: Menu */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-menu */ "../../polythene-core-menu/dist/polythene-core-menu.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");





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
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
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
  permanent: "pe-menu--permanent",
  floating: "pe-menu--floating",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  origin: "pe-menu--origin",
  visible: "pe-menu--visible",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MenuInstance = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_menu__WEBPACK_IMPORTED_MODULE_2__["coreMenu"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_menu__WEBPACK_IMPORTED_MODULE_2__["coreMenu"].createContent(vnode, _extends(args, { Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__["Shadow"] }));
  }
}));

var MenuToggle = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Conditional"]);
MenuToggle.displayName = "MenuToggle";

var Menu = {
  view: function view(vnode) {
    return Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"])(MenuToggle, _extends({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: MenuInstance
    }));
  }
};

Menu.displayName = "Menu";




/***/ }),

/***/ "../../polythene-mithril-notification/dist/polythene-mithril-notification.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-notification/dist/polythene-mithril-notification.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: NotificationInstance, Notification */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationInstance", function() { return NotificationInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-notification */ "../../polythene-core-notification/dist/polythene-core-notification.mjs");




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

var NotificationInstance = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core_notification__WEBPACK_IMPORTED_MODULE_2__["coreNotificationInstance"]);

NotificationInstance.displayName = "NotificationInstance";

var options = {
  name: "notification",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_notification",
  holderSelector: "." + classes.holder,
  instance: NotificationInstance,
  placeholder: "span." + classes.placeholder,
  queue: true
};

var Multiple = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({ options: options, renderer: polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"] });
var Notification = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Notification[p] = Multiple[p];
});

Notification.displayName = "Notification";




/***/ }),

/***/ "../../polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: RadioButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return RadioButton; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-selection-control */ "../../polythene-core-selection-control/dist/polythene-core-selection-control.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony import */ var polythene_core_radio_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-core-radio-button */ "../../polythene-core-radio-button/dist/polythene-core-radio-button.mjs");






var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["viewControl"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["viewControl"].createContent(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__["IconButton"] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends$1({}, polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["coreSelectionControl"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["coreSelectionControl"].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioButton = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends$2({}, polythene_core_radio_button__WEBPACK_IMPORTED_MODULE_4__["coreRadioButton"], {
  component: SelectionControl
}));

RadioButton.displayName = "RadioButton";




/***/ }),

/***/ "../../polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs ***!
  \***************************************************************************************************************************************************/
/*! exports provided: RadioGroup */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_radio_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-radio-group */ "../../polythene-core-radio-group/dist/polythene-core-radio-group.mjs");
/* harmony import */ var polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-radio-button */ "../../polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs");




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioGroup = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_radio_group__WEBPACK_IMPORTED_MODULE_1__["coreRadioGroup"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_radio_group__WEBPACK_IMPORTED_MODULE_1__["coreRadioGroup"].createContent(vnode, _extends(args, { RadioButton: polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_2__["RadioButton"] }));
  }
}));

RadioGroup.displayName = "RadioGroup";




/***/ }),

/***/ "../../polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: RaisedButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedButton", function() { return RaisedButton; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_raised_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-raised-button */ "../../polythene-core-raised-button/dist/polythene-core-raised-button.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RaisedButton = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_raised_button__WEBPACK_IMPORTED_MODULE_1__["coreRaisedButton"], {
  createProps: function createProps(vnode, args) {
    return polythene_core_raised_button__WEBPACK_IMPORTED_MODULE_1__["coreRaisedButton"].createProps(vnode, _extends(args, { Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__["Shadow"] }));
  },
  createContent: function createContent(vnode, args) {
    return polythene_core_raised_button__WEBPACK_IMPORTED_MODULE_1__["coreRaisedButton"].createContent(vnode, _extends(args, { Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__["Shadow"] }));
  },
  component: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__["Button"]
}));

RaisedButton.displayName = "RaisedButton";




/***/ }),

/***/ "../../polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Ripple */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-ripple */ "../../polythene-core-ripple/dist/polythene-core-ripple.mjs");



var Ripple = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core_ripple__WEBPACK_IMPORTED_MODULE_1__["coreRipple"]);

Ripple.displayName = "Ripple";




/***/ }),

/***/ "../../polythene-mithril-search/dist/polythene-mithril-search.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-search/dist/polythene-mithril-search.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Search */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-search */ "../../polythene-core-search/dist/polythene-core-search.mjs");
/* harmony import */ var polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-textfield */ "../../polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs");




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Search = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends({}, polythene_core_search__WEBPACK_IMPORTED_MODULE_1__["coreSearch"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_search__WEBPACK_IMPORTED_MODULE_1__["coreSearch"].createContent(vnode, _extends(args, { TextField: polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_2__["TextField"] }));
  }
}));

Search.displayName = "Search";




/***/ }),

/***/ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Shadow */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return Shadow; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-shadow */ "../../polythene-core-shadow/dist/polythene-core-shadow.mjs");



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Shadow = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_shadow__WEBPACK_IMPORTED_MODULE_1__["coreShadow"]));

Shadow.displayName = "Shadow";




/***/ }),

/***/ "../../polythene-mithril-slider/dist/polythene-mithril-slider.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-slider/dist/polythene-mithril-slider.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Slider */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-slider */ "../../polythene-core-slider/dist/polythene-core-slider.mjs");



var Slider = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core_slider__WEBPACK_IMPORTED_MODULE_1__["coreSlider"]);

Slider.displayName = "Slider";




/***/ }),

/***/ "../../polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: SnackbarInstance, Snackbar */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarInstance", function() { return SnackbarInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return Snackbar; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-snackbar */ "../../polythene-core-snackbar/dist/polythene-core-snackbar.mjs");




var notificationClasses = {
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = _extends({}, notificationClasses, {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var SnackbarInstance = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__["coreSnackbarInstance"]);

SnackbarInstance.displayName = "SnackbarInstance";

var options = {
  name: "snackbar",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_snackbar",
  holderSelector: "." + classes.holder,
  instance: SnackbarInstance,
  placeholder: "span." + classes.placeholder,
  queue: true,
  transitions: polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__["transitions"]
};

var Multiple = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({ options: options, renderer: polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"] });
var Snackbar = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Snackbar[p] = Multiple[p];
});

Snackbar.displayName = "Snackbar";




/***/ }),

/***/ "../../polythene-mithril-svg/dist/polythene-mithril-svg.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-svg/dist/polythene-mithril-svg.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: SVG */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-svg */ "../../polythene-core-svg/dist/polythene-core-svg.mjs");



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SVG = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_svg__WEBPACK_IMPORTED_MODULE_1__["coreSVG"]));

SVG.displayName = "SVG";




/***/ }),

/***/ "../../polythene-mithril-switch/dist/polythene-mithril-switch.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-switch/dist/polythene-mithril-switch.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Switch */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-switch */ "../../polythene-core-switch/dist/polythene-core-switch.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-core-selection-control */ "../../polythene-core-selection-control/dist/polythene-core-selection-control.mjs");






var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_switch__WEBPACK_IMPORTED_MODULE_1__["viewControl"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_switch__WEBPACK_IMPORTED_MODULE_1__["viewControl"].createContent(vnode, _extends(args, { Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__["Shadow"], IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__["IconButton"] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends$1({}, polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_4__["coreSelectionControl"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_4__["coreSelectionControl"].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Switch = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends$2({}, polythene_core_switch__WEBPACK_IMPORTED_MODULE_1__["coreSwitch"], {
  component: SelectionControl
}));

Switch.displayName = "Switch";




/***/ }),

/***/ "../../polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: Tabs */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-tabs */ "../../polythene-core-tabs/dist/polythene-core-tabs.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");






var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tab = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_tabs__WEBPACK_IMPORTED_MODULE_1__["coreTab"], {
  createProps: function createProps(vnode, args) {
    return polythene_core_tabs__WEBPACK_IMPORTED_MODULE_1__["coreTab"].createProps(vnode, _extends(args, { Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"] }));
  },
  component: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_3__["Button"]
}));

Tab.displayName = "Tab";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ScrollButton = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends$1({}, polythene_core_tabs__WEBPACK_IMPORTED_MODULE_1__["coreScrollButton"], {
  component: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__["IconButton"]
}));

ScrollButton.displayName = "ScrollButton";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tabs = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(_extends$2({}, polythene_core_tabs__WEBPACK_IMPORTED_MODULE_1__["coreTabs"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_tabs__WEBPACK_IMPORTED_MODULE_1__["coreTabs"].createContent(vnode, _extends$2(args, { Tab: Tab, ScrollButton: ScrollButton }));
  }
}));

Tabs.displayName = "Tabs";




/***/ }),

/***/ "../../polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: TextField */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_textfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-textfield */ "../../polythene-core-textfield/dist/polythene-core-textfield.mjs");



var TextField = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"])(polythene_core_textfield__WEBPACK_IMPORTED_MODULE_1__["coreTextField"]);

TextField.displayName = "TextField";




/***/ }),

/***/ "../../polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs ***!
  \*******************************************************************************************************************************************/
/*! exports provided: Toolbar, ToolbarTitle */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitle", function() { return ToolbarTitle; });
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony import */ var polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-toolbar */ "../../polythene-core-toolbar/dist/polythene-core-toolbar.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Toolbar = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(_extends({}, polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_1__["coreToolbar"], {
  createContent: function createContent(vnode, args) {
    return polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_1__["coreToolbar"].createContent(vnode, _extends(args, { Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__["Shadow"] }));
  }
}));

Toolbar.displayName = "Toolbar";

var ToolbarTitle = Object(polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"])(polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_1__["coreToolbarTitle"]);

ToolbarTitle.displayName = "ToolbarTitle";




/***/ }),

/***/ "../../polythene-mithril/dist/polythene-mithril.mjs":
/*!***************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril/dist/polythene-mithril.mjs ***!
  \***************************************************************************************************************************/
/*! exports provided: keys, renderer, StateComponent, ViewComponent, Button, ButtonGroup, Card, Checkbox, DialogInstance, Dialog, DialogPane, Drawer, FAB, Icon, IconButton, IOSSpinner, List, ListTile, MaterialDesignProgressSpinner, MaterialDesignSpinner, Menu, NotificationInstance, Notification, RadioButton, RadioGroup, RaisedButton, Ripple, Search, Shadow, Slider, SnackbarInstance, Snackbar, SVG, Switch, Tabs, TextField, Toolbar, ToolbarTitle */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base */ "../../polythene-mithril-base/dist/polythene-mithril-base.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["renderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["StateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return polythene_mithril_base__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"]; });

/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return polythene_mithril_button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var polythene_mithril_button_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-button-group */ "../../polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return polythene_mithril_button_group__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"]; });

/* harmony import */ var polythene_mithril_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-card */ "../../polythene-mithril-card/dist/polythene-mithril-card.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return polythene_mithril_card__WEBPACK_IMPORTED_MODULE_3__["Card"]; });

/* harmony import */ var polythene_mithril_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-checkbox */ "../../polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return polythene_mithril_checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"]; });

/* harmony import */ var polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polythene-mithril-dialog */ "../../polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogInstance", function() { return polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_5__["Dialog"]; });

/* harmony import */ var polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polythene-mithril-dialog-pane */ "../../polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogPane", function() { return polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_6__["DialogPane"]; });

/* harmony import */ var polythene_mithril_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! polythene-mithril-drawer */ "../../polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return polythene_mithril_drawer__WEBPACK_IMPORTED_MODULE_7__["Drawer"]; });

/* harmony import */ var polythene_mithril_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! polythene-mithril-fab */ "../../polythene-mithril-fab/dist/polythene-mithril-fab.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FAB", function() { return polythene_mithril_fab__WEBPACK_IMPORTED_MODULE_8__["FAB"]; });

/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"]; });

/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_10__["IconButton"]; });

/* harmony import */ var polythene_mithril_ios_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! polythene-mithril-ios-spinner */ "../../polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IOSSpinner", function() { return polythene_mithril_ios_spinner__WEBPACK_IMPORTED_MODULE_11__["IOSSpinner"]; });

/* harmony import */ var polythene_mithril_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! polythene-mithril-list */ "../../polythene-mithril-list/dist/polythene-mithril-list.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return polythene_mithril_list__WEBPACK_IMPORTED_MODULE_12__["List"]; });

/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../../polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListTile", function() { return polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_13__["ListTile"]; });

/* harmony import */ var polythene_mithril_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! polythene-mithril-material-design-progress-spinner */ "../../polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignProgressSpinner", function() { return polythene_mithril_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MaterialDesignProgressSpinner"]; });

/* harmony import */ var polythene_mithril_material_design_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! polythene-mithril-material-design-spinner */ "../../polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignSpinner", function() { return polythene_mithril_material_design_spinner__WEBPACK_IMPORTED_MODULE_15__["MaterialDesignSpinner"]; });

/* harmony import */ var polythene_mithril_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! polythene-mithril-menu */ "../../polythene-mithril-menu/dist/polythene-mithril-menu.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return polythene_mithril_menu__WEBPACK_IMPORTED_MODULE_16__["Menu"]; });

/* harmony import */ var polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! polythene-mithril-notification */ "../../polythene-mithril-notification/dist/polythene-mithril-notification.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationInstance", function() { return polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_17__["NotificationInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_17__["Notification"]; });

/* harmony import */ var polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! polythene-mithril-radio-button */ "../../polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_18__["RadioButton"]; });

/* harmony import */ var polythene_mithril_radio_group__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! polythene-mithril-radio-group */ "../../polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return polythene_mithril_radio_group__WEBPACK_IMPORTED_MODULE_19__["RadioGroup"]; });

/* harmony import */ var polythene_mithril_raised_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! polythene-mithril-raised-button */ "../../polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RaisedButton", function() { return polythene_mithril_raised_button__WEBPACK_IMPORTED_MODULE_20__["RaisedButton"]; });

/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! polythene-mithril-ripple */ "../../polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_21__["Ripple"]; });

/* harmony import */ var polythene_mithril_search__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! polythene-mithril-search */ "../../polythene-mithril-search/dist/polythene-mithril-search.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return polythene_mithril_search__WEBPACK_IMPORTED_MODULE_22__["Search"]; });

/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_23__["Shadow"]; });

/* harmony import */ var polythene_mithril_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! polythene-mithril-slider */ "../../polythene-mithril-slider/dist/polythene-mithril-slider.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return polythene_mithril_slider__WEBPACK_IMPORTED_MODULE_24__["Slider"]; });

/* harmony import */ var polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! polythene-mithril-snackbar */ "../../polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnackbarInstance", function() { return polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_25__["SnackbarInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_25__["Snackbar"]; });

/* harmony import */ var polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! polythene-mithril-svg */ "../../polythene-mithril-svg/dist/polythene-mithril-svg.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_26__["SVG"]; });

/* harmony import */ var polythene_mithril_switch__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! polythene-mithril-switch */ "../../polythene-mithril-switch/dist/polythene-mithril-switch.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return polythene_mithril_switch__WEBPACK_IMPORTED_MODULE_27__["Switch"]; });

/* harmony import */ var polythene_mithril_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! polythene-mithril-tabs */ "../../polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return polythene_mithril_tabs__WEBPACK_IMPORTED_MODULE_28__["Tabs"]; });

/* harmony import */ var polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! polythene-mithril-textfield */ "../../polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_29__["TextField"]; });

/* harmony import */ var polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! polythene-mithril-toolbar */ "../../polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_30__["Toolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitle", function() { return polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_30__["ToolbarTitle"]; });


































/***/ }),

/***/ "../../polythene-style/dist/polythene-style.mjs":
/*!***********************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-style/dist/polythene-style.mjs ***!
  \***********************************************************************************************************************/
/*! exports provided: vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars; });
// Global style variables

var grid_unit = 4;
var grid_unit_component = 8;
var increment = 7 * grid_unit_component; // 7 * 8 = 56
var increment_large = 8 * grid_unit_component; // 8 * 8 = 64

var animation_curve_slow_in_fast_out = "cubic-bezier(.4, 0, .2, 1)";
var animation_curve_slow_in_linear_out = "cubic-bezier(0, 0, .2, 1)";
var animation_curve_linear_in_fast_out = "cubic-bezier(.4, 0, 1, 1)";

var vars = {
  // grid
  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  increment: increment,
  increment_large: increment_large,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component, // 48

  // common sizes
  unit_block_border_radius: 4,
  unit_item_border_radius: 4,
  unit_indent: 72,
  unit_side_padding: 16,

  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component, // 16
  unit_icon_size: 3 * grid_unit_component, // 24
  unit_icon_size_medium: 4 * grid_unit_component, // 32
  unit_icon_size_large: 5 * grid_unit_component, // 40

  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,

  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
  animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
  animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
  animation_curve_default: "ease-out",

  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.3,

  // base colors
  color_primary: "33, 150, 243", // blue 500
  color_primary_active: "30, 136, 229", // blue 600
  color_primary_dark: "25, 118, 210", // blue 700
  color_primary_faded: "100, 181, 249", // blue 300
  color_primary_foreground: "255, 255, 255",

  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",

  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_medium: .24,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,

  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_medium: .22,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  /*
  Breakpoints
  Specs: https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
  Breakbpoint naming: inspiration from
  https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
  */
  breakpoint_for_phone_only: 599, // set max-width  cols: 4,  gutter: 16
  breakpoint_for_tablet_portrait_up: 600, // set min-width  cols: 8,  gutter: 24
  breakpoint_for_tablet_landscape_up: 840, // etc.           cols: 12, gutter: 24
  breakpoint_for_desktop_up: 1280,
  breakpoint_for_big_desktop_up: 1600,
  breakpoint_for_tv_up: 1920,

  // z-index
  z_toolbar: 100,
  z_menu: 1000,
  z_app_bar: 2000,
  z_drawer: 3000,
  z_notification: 4000,
  z_dialog: 5000
};




/***/ }),

/***/ "../../polythene-theme/dist/polythene-theme.mjs":
/*!***********************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-theme/dist/polythene-theme.mjs ***!
  \***********************************************************************************************************************/
/*! exports provided: vars, componentConfig */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentConfig", function() { return componentConfig; });
/* harmony import */ var polythene_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-style */ "../../polythene-style/dist/polythene-style.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"]; });



// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example:

// export const componentConfig = {
//     Button: vars => {
//         const mainColor = '#e4521b';
//         const textColor = '#fff';
//         const newVars = Object.assign(
//           {},
//           vars,
//           {
//             border_radius:                        0,
//             color_light_raised_normal_background: mainColor,
//             color_light_raised_normal_text:       textColor,
//             color_dark_raised_normal_background:  mainColor,
//             color_dark_raised_normal_text:        textColor
//           }
//         );
//         return [
//             { '': vars }, // default vars for all pages
//             { '.example-custom-theme ': newVars } // custom vars for this selector
//         ];
//     }
// };

var componentConfig = {};




/***/ }),

/***/ "../../polythene-utilities/dist/polythene-utilities.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-utilities/dist/polythene-utilities.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: addWebFont, easing, scrollTo, Timer */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWebFont", function() { return addWebFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


var addWebFont = function addWebFont(vendor, family, key) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  if (!window.WebFontConfig) {
    window.WebFontConfig = {};
    (function () {
      var wf = document.createElement("script");
      wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
      wf.type = "text/javascript";
      wf.async = "true";
      var s = document.getElementsByTagName("script")[0];
      if (s) {
        s.parentNode.insertBefore(wf, s);
      }
    })();
  }
  var vendorCfg = window.WebFontConfig[vendor] || {};
  vendorCfg.families = vendorCfg.families || [];
  vendorCfg.families.push(family);
  if (key) {
    vendorCfg.key = key;
  }
  window.WebFontConfig[vendor] = vendorCfg;
};

/*
https://gist.github.com/gre/1650294
Easing Functions - inspired from http://gizma.com/easing/
Only considering the t value for the range [0, 1] => [0, 1]
*/

var easing = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

/*
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/

var scrollTo = function scrollTo(opts) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
    return;
  }
  var element = opts.element;
  var which = opts.direction === "horizontal" ? "scrollLeft" : "scrollTop";
  var to = opts.to;
  var duration = opts.duration * 1000;
  var easingFn = opts.easing || easing.easeInOutCubic;
  var start = element[which];
  var change = to - start;
  var animationStart = new Date().getTime();
  var animating = true;
  return new Promise(function (resolve) {
    var animateScroll = function animateScroll() {
      if (!animating) {
        return;
      }
      requestAnimFrame(animateScroll);
      var now = new Date().getTime();
      var percentage = (now - animationStart) / duration;
      var val = start + change * easingFn(percentage);
      element[which] = val;
      if (percentage >= 1) {
        element[which] = to;
        animating = false;
        resolve();
      }
    };
    requestAnimFrame(animateScroll);
  });
};

var requestAnimFrame = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? function () {} : function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

var Timer = function Timer() {
  var timerId = void 0,
      startTime = void 0,
      remaining = void 0,
      cb = void 0;

  var stop = function stop() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      window.clearTimeout(timerId);
    }
  };

  var pause = function pause() {
    return stop(), remaining -= new Date() - startTime;
  };

  var startTimer = function startTimer() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      stop();
      startTime = new Date();
      timerId = window.setTimeout(cb, remaining);
    }
  };

  var start = function start(callback, delaySeconds) {
    return cb = callback, remaining = delaySeconds * 1000, startTimer();
  };

  var resume = function resume() {
    return startTimer();
  };

  return {
    start: start,
    pause: pause,
    resume: resume,
    stop: stop
  };
};




/***/ }),

/***/ "../index.js":
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./index.js");


/***/ }),

/***/ "../node_modules/mithril/stream.js":
/*!*****************************************!*\
  !*** ../node_modules/mithril/stream.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./stream/stream */ "../node_modules/mithril/stream/stream.js")


/***/ }),

/***/ "../node_modules/mithril/stream/stream.js":
/*!************************************************!*\
  !*** ../node_modules/mithril/stream/stream.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
;(function() {
"use strict"
/* eslint-enable */

var guid = 0, HALT = {}
function createStream() {
	function stream() {
		if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0])
		return stream._state.value
	}
	initStream(stream)

	if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0])

	return stream
}
function initStream(stream) {
	stream.constructor = createStream
	stream._state = {id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined, unregister: undefined}
	stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream
	stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf

	Object.defineProperties(stream, {
		end: {get: function() {
			if (!stream._state.endStream) {
				var endStream = createStream()
				endStream.map(function(value) {
					if (value === true) {
						unregisterStream(stream)
						endStream._state.unregister = function(){unregisterStream(endStream)}
					}
					return value
				})
				stream._state.endStream = endStream
			}
			return stream._state.endStream
		}}
	})
}
function updateStream(stream, value) {
	updateState(stream, value)
	for (var id in stream._state.deps) updateDependency(stream._state.deps[id], false)
	if (stream._state.unregister != null) stream._state.unregister()
	finalize(stream)
}
function updateState(stream, value) {
	stream._state.value = value
	stream._state.changed = true
	if (stream._state.state !== 2) stream._state.state = 1
}
function updateDependency(stream, mustSync) {
	var state = stream._state, parents = state.parents
	if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
		var value = stream._state.derive()
		if (value === HALT) return false
		updateState(stream, value)
	}
}
function finalize(stream) {
	stream._state.changed = false
	for (var id in stream._state.deps) stream._state.deps[id]._state.changed = false
}

function combine(fn, streams) {
	if (!streams.every(valid)) throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream")
	return initDependency(createStream(), streams, function() {
		return fn.apply(this, streams.concat([streams.filter(changed)]))
	})
}

function initDependency(dep, streams, derive) {
	var state = dep._state
	state.derive = derive
	state.parents = streams.filter(notEnded)

	registerDependency(dep, state.parents)
	updateDependency(dep, true)

	return dep
}
function registerDependency(stream, parents) {
	for (var i = 0; i < parents.length; i++) {
		parents[i]._state.deps[stream._state.id] = stream
		registerDependency(stream, parents[i]._state.parents)
	}
}
function unregisterStream(stream) {
	for (var i = 0; i < stream._state.parents.length; i++) {
		var parent = stream._state.parents[i]
		delete parent._state.deps[stream._state.id]
	}
	for (var id in stream._state.deps) {
		var dependent = stream._state.deps[id]
		var index = dependent._state.parents.indexOf(stream)
		if (index > -1) dependent._state.parents.splice(index, 1)
	}
	stream._state.state = 2 //ended
	stream._state.deps = {}
}

function map(fn) {return combine(function(stream) {return fn(stream())}, [this])}
function ap(stream) {return combine(function(s1, s2) {return s1()(s2())}, [stream, this])}
function valueOf() {return this._state.value}
function toJSON() {return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value}

function valid(stream) {return stream._state }
function active(stream) {return stream._state.state === 1}
function changed(stream) {return stream._state.changed}
function notEnded(stream) {return stream._state.state !== 2}

function merge(streams) {
	return combine(function() {
		return streams.map(function(s) {return s()})
	}, streams)
}

function scan(reducer, seed, stream) {
	var newStream = combine(function (s) {
		return seed = reducer(seed, s._state.value)
	}, [stream])

	if (newStream._state.state === 0) newStream(seed)

	return newStream
}

function scanMerge(tuples, seed) {
	var streams = tuples.map(function(tuple) {
		var stream = tuple[0]
		if (stream._state.state === 0) stream(undefined)
		return stream
	})

	var newStream = combine(function() {
		var changed = arguments[arguments.length - 1]

		streams.forEach(function(stream, idx) {
			if (changed.indexOf(stream) > -1) {
				seed = tuples[idx][1](seed, stream._state.value)
			}
		})

		return seed
	}, streams)

	return newStream
}

createStream["fantasy-land/of"] = createStream
createStream.merge = merge
createStream.combine = combine
createStream.scan = scan
createStream.scanMerge = scanMerge
createStream.HALT = HALT

if (true) module["exports"] = createStream
else {}

}());


/***/ }),

/***/ "./components/exposed-menu.js":
/*!************************************!*\
  !*** ./components/exposed-menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril/stream */ "../node_modules/mithril/stream.js");
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var menuOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(function (n) {
  return {
    title: "Menu item " + n,
    key: n
  };
});

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Menu = _ref.Menu,
      Button = _ref.Button,
      List = _ref.List,
      ListTile = _ref.ListTile;
  return {
    oninit: function oninit(vnode) {
      var show = mithril_stream__WEBPACK_IMPORTED_MODULE_0___default()(false);
      var selectedIndex = mithril_stream__WEBPACK_IMPORTED_MODULE_0___default()(0);
      _extends(vnode.state, {
        show: show,
        selectedIndex: selectedIndex,
        redrawOnUpdate: mithril_stream__WEBPACK_IMPORTED_MODULE_0___default.a.merge([show]), // for React
        id: "id-" + Math.floor(Math.random() * 1000)
      });
    },
    view: function view(_ref2) {
      var state = _ref2.state,
          attrs = _ref2.attrs;

      var id = state.id;
      var show = state.show();
      var selectedIndex = state.selectedIndex();
      return h("div", {
        style: {
          position: "relative",
          height: "inherit"
        }
      }, [h(Menu, {
        target: "#" + id,
        show: show,
        didHide: function didHide() {
          return state.show(false);
        },
        hideDelay: .180,
        width: 3,
        height: attrs.height,
        className: attrs.className,
        scrollTarget: "#item-" + selectedIndex,
        origin: "top",
        backdrop: attrs.backdrop,
        content: h(List, {
          hoverable: true,
          compact: true,
          tiles: menuOptions.map(function (item, index) {
            return h(ListTile, {
              title: item.title,
              key: item.key, // for React
              id: "item-" + index,
              selected: index === selectedIndex,
              ink: true,
              hoverable: true,
              events: _defineProperty({}, k.onclick, function () {
                return state.selectedIndex(index), state.show(false);
              })
            });
          })
        })
      }), h(Button, {
        id: id,
        label: menuOptions[selectedIndex].title,
        dropdown: {
          open: show
        },
        events: _defineProperty({}, k.onclick, function () {
          return state.show(!show);
        })
      })]);
    }
  };
});

/***/ }),

/***/ "./components/navigation-list.js":
/*!***************************************!*\
  !*** ./components/navigation-list.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polythene_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-css */ "../../polythene-css/dist/polythene-css.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var icons = {
  drafts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"/></svg>",
  inbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"/></svg>",
  star: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>",
  send: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/></svg>"
};

polythene_css__WEBPACK_IMPORTED_MODULE_0__["ListTileCSS"].addStyle(".tests-drawer-navigation-list", {
  color_light_hover: "#e01d5f",
  color_light_hover_front: "#e01d5f"
});

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon = _ref.Icon,
      List = _ref.List,
      ListTile = _ref.ListTile,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick;


  var tile = function tile(_ref2) {
    var title = _ref2.title,
        icon = _ref2.icon,
        index = _ref2.index;
    return h(ListTile, {
      title: title,
      key: title + "-" + index, // for React
      className: "tests-drawer-navigation-list",
      front: h(Icon, {
        svg: { content: h.trust(icon) }
      }),
      hoverable: true,
      navigation: true,
      events: _defineProperty({}, k.onclick, onClick)
    });
  };

  var nums = [1];

  return h(List, {
    hoverable: true,
    tiles: [].concat.apply([], nums.map(function (num, index) {
      return [{
        index: index,
        title: "Inbox",
        icon: icons.inbox
      }, {
        index: index,
        title: "Starred",
        icon: icons.star
      }, {
        index: index,
        title: "Sent mail",
        icon: icons.send
      }, {
        index: index,
        title: "Drafts",
        icon: icons.drafts
      }];
    })).map(tile)
  });
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril/stream */ "../node_modules/mithril/stream.js");
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polythene_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril */ "../../polythene-mithril/dist/polythene-mithril.mjs");
/* harmony import */ var polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-css/dist/polythene.css */ "../../polythene-css/dist/polythene.css");
/* harmony import */ var polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-css/dist/polythene-typography.css */ "../../polythene-css/dist/polythene-typography.css");
/* harmony import */ var polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_exposed_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/exposed-menu */ "./components/exposed-menu.js");
/* harmony import */ var _components_navigation_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation-list */ "./components/navigation-list.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









var ExposedDropdown = Object(_components_exposed_menu__WEBPACK_IMPORTED_MODULE_5__["default"])({ renderer: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["renderer"], keys: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["keys"], Menu: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Menu"], List: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["List"], ListTile: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["ListTile"], Button: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"] });
var createContent = function createContent(_ref) {
  var onClick = _ref.onClick;
  return Object(_components_navigation_list__WEBPACK_IMPORTED_MODULE_6__["default"])({ renderer: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["renderer"], keys: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["keys"], Icon: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Icon"], List: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["List"], ListTile: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["ListTile"], onClick: onClick });
};

var linkIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";

var App = {
  oninit: function oninit(vnode) {
    var showDrawer = mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()(false);
    _extends(vnode.state, {
      showDrawer: showDrawer
    });
  },
  view: function view(_ref2) {
    var state = _ref2.state;

    var showDrawer = state.showDrawer();
    return [mithril__WEBPACK_IMPORTED_MODULE_0___default()(".page", mithril__WEBPACK_IMPORTED_MODULE_0___default()(".drawer-content-wrapper", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      className: "small-screen-cover-drawer medium-screen-mini-drawer large-screen-floating-drawer",
      // push: true,
      // border: true,
      content: createContent({
        onClick: function onClick() {
          return state.showDrawer(false);
        }
      }),
      permanent: true,
      show: showDrawer,
      didHide: function didHide() {
        return state.showDrawer(false);
      } // sync state with component
    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".components", [
    // m(".row", [
    //   m("h1", "Polythene for Mithril"),
    //   m("h2", "CSS Test")
    // ]),
    // m(".row",
    //   [
    //     m("h2", "SVG"),
    //     m(".component", 
    //       m(SVG, {
    //         content: m.trust(linkIconSVG),
    //         className: "themed-svg"
    //       })
    //     )
    //   ]
    // ),
    // m(".row",
    //   [
    //     m("h2", "Raised Button"),
    //     m(".component", 
    //       m(RaisedButton, {
    //         label: "Button"
    //       })
    //     )
    //   ]
    // ),
    // m(".row", 
    //   [
    //     m("h2", "Themed Button"),
    //     m("h3", "Media query: colored on small screen"),
    //     m(".component", 
    //       m(Button, {
    //         label: "Button",
    //         className: "themed-button"
    //       })
    //     )
    //   ]
    // ),
    // m(".row", 
    //   [
    //     m("h2", "Themed Icon"),
    //     m("h3", "Media query: large on small screen"),
    //     m(".component", 
    //       m(Icon, {
    //         className: "themed-icon",
    //         svg: { content: m.trust(linkIconSVG) },
    //       })
    //     )
    //   ]
    // ),
    // m(".row", 
    //   [
    //     m("h2", "Icon Button"),
    //     m(".component", 
    //       m(IconButton, {
    //         icon: {
    //           svg: { content: m.trust(linkIconSVG) }
    //         }
    //       })
    //     )
    //   ]
    // ),
    // m(".row",
    //   [
    //     m("h2", "FAB"),
    //     m(".component", 
    //       m(FAB, {
    //         icon: {
    //           svg: { content: m.trust(linkIconSVG) }
    //         }
    //       })
    //     )
    //   ]
    // ),
    // m(".row",
    //   [
    //     m("h2", "Menu"),
    //     m(".component", 
    //       m(ExposedDropdown, { height: 150, className: "small-screen-top-menu" })
    //     )
    //   ]
    // ),
    mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Drawer"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h3", "Media query: cover drawer on small screen"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["RaisedButton"], {
      label: "Show",
      events: {
        onclick: function onclick() {
          return state.showDrawer(true);
        }
      },
      disabled: showDrawer
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Tabs"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      autofit: true,
      tabs: [{ label: "New" }, { label: "Favorites" }, { label: "Saved" }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed card"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h3", "Media query: smaller image on small screen"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "themed-card small-image-card",
      tone: "dark",
      content: [{
        primary: {
          title: "Get Ready",
          subtitle: "2 Unlimited",
          media: {
            ratio: "square",
            size: "medium",
            content: mithril__WEBPACK_IMPORTED_MODULE_0___default()("img", {
              src: "https://lastfm-img2.akamaized.net/i/u/avatar170s/ca297951611442bda8ea55fba764c757"
            })
          }
        }
      }, {
        actions: {
          content: [mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            label: "Listen now"
          })]
        }
      }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Checkbox"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      label: "Label"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Switch"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "Label"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Radio Button"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], {
      name: "defaultChecked",
      content: [{
        value: "One",
        label: "One"
      }, {
        value: "Two",
        label: "Two",
        defaultChecked: true
      }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "TextField"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      defaultValue: "abC",
      validate: function validate(value) {
        return value !== value.toLowerCase() ? {
          valid: false,
          error: "Only use lowercase characters."
        } : null;
      },
      validateAtStart: true
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Slider"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
      defaultValue: 50
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Spinner"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["MaterialDesignSpinner"], {
      permanent: true
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed Dialog"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h3", "Media query: full screen on small screen"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["RaisedButton"], {
      label: "Show dialog",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Dialog"].show({
            /* note the Dialog component is below the other elements in the app */
            title: "Hello",
            body: mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["RaisedButton"], {
              events: {
                onclick: function onclick() {
                  return polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Dialog"].hide();
                }
              },
              label: "Close"
            })]),
            backdrop: true,
            modal: true,
            className: "small-screen-full-screen"
          });
        }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Notification"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["RaisedButton"], {
      label: "Show Notification",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Notification"].show({
            /* note the Notification component is below the other elements in the app */
            title: "Hello"
          });
        }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Snackbar"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["RaisedButton"], {
      label: "Show Snackbar",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Snackbar"].show({
            /* note the Snackbar component is below the other elements in the app */
            title: "Hello"
          });
        }
      }
    }))])])])), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Dialog"]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Snackbar"]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Notification"])];
  }
};

mithril__WEBPACK_IMPORTED_MODULE_0___default.a.mount(document.querySelector("#root"), App);

/***/ }),

/***/ "mithril":
/*!********************!*\
  !*** external "m" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = m;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map