import { filterSupportedAttributes, isClient } from 'polythene-core';
import { vars } from 'polythene-theme';

var baseClass = "pe-button";

var classes = {
  base: baseClass,
  component: baseClass + " pe-text-button",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
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
  var dom = createStream();
  var focus = createStream(false);
  var click = createStream();
  var inactive = createStream(false);
  var mouseover = createStream(false);
  return {
    dom: dom,
    click: click,
    focus: focus,
    inactive: inactive,
    mouseover: mouseover,
    redrawOnUpdate: createStream.merge([dom, click, focus, inactive, mouseover])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  state.dom(vnode.dom);

  if (isClient) {
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

    vnode.dom.addEventListener("focus", onFocus, false);
    vnode.dom.addEventListener("blur", onBlur, false);
    vnode.dom.addEventListener("mouseover", onMouseOver, false);
    vnode.dom.addEventListener("mouseout", onMouseOut, false);

    state.removeEventListeners = function () {
      return vnode.dom.removeEventListener("focus", onFocus, false), vnode.dom.removeEventListener("blur", onBlur, false), vnode.dom.removeEventListener("mouseover", onBlur, false), vnode.dom.removeEventListener("mouseout", onMouseOut, false);
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

  var handleInactivate = function handleInactivate() {
    return state.inactive(true), setTimeout(function () {
      return state.inactive(false);
    }, attrs.inactivate * 1000);
  };
  var onClickHandler = attrs.events && attrs.events[k.onclick];

  return _extends({}, filterSupportedAttributes(attrs, { add: [k.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
  {
    className: [attrs.parentClassName || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus() ? classes.focused : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events, inactive ? null : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, disabled || inactive ? -1 : attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onclick, function (e) {
    return state.click(e), attrs.inactivate !== undefined && handleInactivate(), onClickHandler && onClickHandler(e), true;
  }), _defineProperty(_ref2, k.onkeydown, function (e) {
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
  disabled || noink || !Ripple || !state.dom() ? null : h(Ripple, _extends({}, {
    key: "ripple",
    target: state.dom()
  }, attrs.ripple)),
  // hover
  noWash ? null : h("div", { key: "wash", className: classes.wash }),
  // focus
  disabled ? null : h("div", { key: "focus", className: classes.focus }), label]) : null;
};

var button = Object.freeze({
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

var touch_height = vars.unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: vars.grid_unit,
  border_radius: vars.unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * vars.grid_unit,
  padding_v: 11,
  min_width: 8 * vars.grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border
  animation_duration: vars.animation_duration,

  color_light_background: "transparent",
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_hover_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  // border colors may be set in theme; disabled by default
  // color_light_border:              "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:        "transparent",
  // color_light_active_border:       "transparent",
  // color_light_disabled_border:     "transparent",

  color_dark_background: "transparent",
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_hover_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_focus_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_active_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)

  // border colors may be set in theme; disabled by default
  // color_dark_border:               "transparent", // only specify this variable to get all 4 states
  // color_dark_hover_border:         "transparent",
  // color_dark_active_border:        "transparent",
  // color_dark_disabled_border:      "transparent"
};

export { button as coreButton, classes, vars$1 as vars };
