(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

  var classes = {
    base: "pe-button",
    component: "pe-button pe-text-button",
    row: "pe-button-row",

    // elements
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",

    // states
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected"
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
    var state = vnode.state;
    var attrs = vnode.attrs;
    if (attrs.borders) {
      polytheneCore.deprecation("Button", "borders", "border");
    }
    if (!vnode.dom) {
      return;
    }
    state.dom(vnode.dom);

    if (polytheneCore.isClient) {
      var noink = attrs.ink !== undefined && attrs.ink === false;
      var handleInactivate = function handleInactivate() {
        return (
          // delay a bit so that the ripple can finish before the hover disappears
          // the timing is crude and does not take the actual ripple "done" into account
          setTimeout(function () {
            return state.inactive(true), setTimeout(function () {
              return state.inactive(false);
            }, attrs.inactivate * 1000);
          }, noink ? 0 : 300)
        );
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
    var onKeyDownHandler = attrs.events && attrs.events[k.onkeydown] || onClickHandler;
    var onClickHandler = attrs.events && attrs.events[k.onclick];

    return _extends({}, polytheneCore.filterSupportedAttributes(attrs, { add: [k.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
    {
      className: [attrs.parentClassName || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.border || attrs.borders ? classes.border : null, state.focus() ? classes.focused : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events, inactive ? null : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, disabled || inactive ? -1 : attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onclick, onClickHandler), _defineProperty(_ref2, k.onkeydown, function (e) {
      if (e.key === "Enter" && state.focus()) {
        state.focus(false);
        if (onKeyDownHandler) {
          onKeyDownHandler(e);
        }
      }
    }), _ref2), attrs.url, disabled ? { disabled: true } : null);
  };

  var createContent = function createContent(vnode, _ref3) {
    var _h;

    var h = _ref3.renderer,
        k = _ref3.keys,
        Ripple = _ref3.Ripple;

    var state = vnode.state;
    var attrs = vnode.attrs;
    var noink = attrs.ink !== undefined && attrs.ink === false;
    var disabled = attrs.disabled;
    var children = attrs.children || vnode.children;
    var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : h("div", { className: classes.label }, attrs.label) : children ? children : null;
    var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
    return label ? h("div", (_h = {}, _defineProperty(_h, k.class, classes.content), _defineProperty(_h, "style", attrs.style), _h), [attrs.shadowComponent // "protected" option, used by raised-button
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
    disabled ? null : h("div", { key: "focus", className: classes.focus }), label]) : null;
  };

  var button = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    getInitialState: getInitialState,
    onMount: onMount,
    onUnMount: onUnMount,
    createProps: createProps,
    createContent: createContent
  });

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var touch_height = polytheneTheme.vars.unit_touch_height;
  var height = 36;

  var vars = {
    margin_h: polytheneTheme.vars.grid_unit,
    border_radius: polytheneTheme.vars.unit_item_border_radius,
    font_size: 14,
    font_weight: 500,
    outer_padding_v: (touch_height - height) / 2,
    padding_h: 2 * polytheneTheme.vars.grid_unit,
    padding_v: 11,
    min_width: 8 * polytheneTheme.vars.grid_unit_component,
    text_transform: "uppercase",
    border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border
    animation_duration: polytheneTheme.vars.animation_duration,

    color_light_background: "transparent",
    color_light_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_hover_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_focus_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_active_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_active),
    color_light_disabled_background: "transparent",
    color_light_disabled_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),

    // border colors may be set in theme; disabled by default
    // color_light_border:              "transparent", // only specify this variable to get all 4 states
    // color_light_hover_border:        "transparent",
    // color_light_active_border:       "transparent",
    // color_light_disabled_border:     "transparent",

    color_dark_background: "transparent",
    color_dark_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_hover_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover),
    color_dark_focus_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover),
    color_dark_active_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_active),
    color_dark_disabled_background: "transparent",
    color_dark_disabled_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled)

    // border colors may be set in theme; disabled by default
    // color_dark_border:               "transparent", // only specify this variable to get all 4 states
    // color_dark_hover_border:         "transparent",
    // color_dark_active_border:        "transparent",
    // color_dark_disabled_border:      "transparent"
  };

  exports.coreButton = button;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-button.js.map
