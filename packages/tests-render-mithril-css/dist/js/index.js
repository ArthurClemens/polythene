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

  updateScrollOverflowState(vnode);
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
    className: [attrs.parentClassName || classes.component, attrs.fromMultipleClassName, attrs.fullScreen ? classes.fullScreen : null,
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
  return [attrs.backdrop && h("div", {
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
  } else if (attrs.origin) {
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
      var height = attrs.height.toString().indexOf("%") !== -1 ? attrs.height : attrs.height.toString().indexOf("px") !== -1 ? attrs.height : attrs.height + "px";
      panelEl.style.height = height;
    }
  }

  // prevent animated changes
  var transitionDuration = panelEl.style.transitionDuration;
  panelEl.style.transitionDuration = "0ms";

  if (panelEl.parentNode) {
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
    className: [classes.component, attrs.permanent ? classes.permanent : null, attrs.origin ? classes.origin : null, type === "floating" && !attrs.permanent ? classes.floating : null, attrs.width || attrs.size ? widthClass(unifyWidth(attrs.width || attrs.size)) : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow;

  var attrs = vnode.attrs;
  var z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
  return [attrs.backdrop && h("div", {
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
/* harmony import */ var polythene_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril */ "../../polythene-mithril/dist/polythene-mithril.mjs");
/* harmony import */ var polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-css/dist/polythene.css */ "../../polythene-css/dist/polythene.css");
/* harmony import */ var polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-css/dist/polythene-typography.css */ "../../polythene-css/dist/polythene-typography.css");
/* harmony import */ var polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_3__);







var linkIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";

var App = {
  view: function view() {
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".page", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h1", "Polythene for Mithril"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "CSS Test")]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "SVG"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
      content: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(linkIconSVG),
      className: "themed-svg"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Raised Button"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["RaisedButton"], {
      label: "Button"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed Media Query Button (colored on small screen)"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      label: "Button",
      className: "themed-button"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed Media Query Icon (large on small screen)"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      className: "themed-icon",
      svg: { content: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(linkIconSVG) }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Icon Button"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      icon: {
        svg: { content: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(linkIconSVG) }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "FAB"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["FAB"], {
      icon: {
        svg: { content: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(linkIconSVG) }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Tabs"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      autofit: true,
      tabs: [{ label: "New" }, { label: "Favorites" }, { label: "Saved" }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed card (larger image on small screen)"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Card"], {
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
          content: [mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            label: "Listen now"
          })]
        }
      }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Checkbox"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      label: "Label"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Switch"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      label: "Label"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Radio Button"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], {
      name: "defaultChecked",
      content: [{
        value: "One",
        label: "One"
      }, {
        value: "Two",
        label: "Two",
        defaultChecked: true
      }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "TextField"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      defaultValue: "abC",
      validate: function validate(value) {
        return value !== value.toLowerCase() ? {
          valid: false,
          error: "Only use lowercase characters."
        } : null;
      },
      validateAtStart: true
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Slider"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
      defaultValue: 50
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Spinner"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["MaterialDesignSpinner"], {
      permanent: true
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Media Query Dialog (full screen on small screen)"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["RaisedButton"], {
      label: "Show dialog",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Dialog"].show({
            /* note the Dialog component is below the other elements in the app */
            title: "Hello",
            body: mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["RaisedButton"], {
              events: {
                onclick: function onclick() {
                  return polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Dialog"].hide();
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
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Notification"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["RaisedButton"], {
      label: "Show Notification",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Notification"].show({
            /* note the Notification component is below the other elements in the app */
            title: "Hello"
          });
        }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Snackbar"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["RaisedButton"], {
      label: "Show Snackbar",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Snackbar"].show({
            /* note the Snackbar component is below the other elements in the app */
            title: "Hello"
          });
        }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Dialog"]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Snackbar"]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_1__["Notification"])]);
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