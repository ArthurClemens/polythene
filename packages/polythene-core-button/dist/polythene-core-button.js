(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

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
      separatorAtStart: "pe-button--separator-start"
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
      polytheneCore.deprecation("Button", "borders", "border");
    }
    state.dom(vnode.dom);

    if (polytheneCore.isClient) {
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

    return _extends({}, polytheneCore.filterSupportedAttributes(attrs, { add: [k.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
    {
      className: [classes.super, attrs.parentClassName || classes.component, attrs.selected ? classes.selected : null, attrs.dropdown ? classes.hasDropdown : null, attrs.highLabel ? classes.highLabel : null, attrs.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.separatorAtStart ? classes.separatorAtStart : null, attrs.border || attrs.borders ? classes.border : null, state.focus() ? classes.focused : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
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
        SVG = _ref3.SVG;

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
    disabled ? null : h("div", { key: "focus", className: classes.focus }), label, attrs.dropdown ? h("div", {
      className: classes.dropdown,
      key: "dropdown"
    }, h(SVG, null, h.trust(attrs.dropdownOpen ? polytheneCore.iconDropdownUp : polytheneCore.iconDropdownDown))) : null]);
  };

  var button = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    getInitialState: getInitialState,
    onMount: onMount,
    onUnMount: onUnMount,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreButton = button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-button.js.map
