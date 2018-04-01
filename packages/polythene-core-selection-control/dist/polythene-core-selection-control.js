(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

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

  var sizeClasses = {
    small: classes.small,
    regular: classes.regular,
    medium: classes.medium,
    large: classes.large
  };

  var classForSize = function classForSize() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
    return sizeClasses[size];
  };

  var currentState = function currentState(attrs, state) {
    var checked = attrs.checked !== undefined ? attrs.checked : state.checked();
    var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
    var inactive = attrs.disabled || !selectable;
    return { checked: checked, inactive: inactive };
  };

  var getInitialState = function getInitialState(vnode, createStream) {
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

    return {
      checked: checked,
      toggle: toggle,
      onChange: onChange,
      redrawOnUpdate: createStream.merge([checked])
    };
  };

  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var attrs = vnode.attrs;
    var state = vnode.state;

    var _currentState = currentState(attrs, state),
        checked = _currentState.checked,
        inactive = _currentState.inactive;

    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.instanceClass, // for instance pe-checkbox-control
      checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForSize(attrs.size), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    });
  };

  var createContent = function createContent(vnode, _ref2) {
    var h = _ref2.renderer,
        k = _ref2.keys,
        ViewControl = _ref2.ViewControl;

    var state = vnode.state;
    var attrs = vnode.attrs;

    var _currentState2 = currentState(attrs, state),
        checked = _currentState2.checked,
        inactive = _currentState2.inactive;

    var viewControlClickHandler = attrs.events && attrs.events[k.onclick];
    var viewControlKeyDownHandler = attrs.events && attrs.events[k.onkeydown] ? attrs.events[k.onkeydown] : function (e) {
      if (e.key === "Enter") {
        if (viewControlClickHandler) {
          viewControlClickHandler(e);
        } else {
          state.toggle(e);
        }
      }
    };

    return h("label", _extends({}, {
      className: classes.formLabel
    }, viewControlClickHandler && _defineProperty({}, k.onclick, function (e) {
      return e.preventDefault(), viewControlClickHandler(e);
    })), [h(ViewControl, _extends({}, attrs, {
      inactive: inactive,
      checked: checked,
      key: "control",
      events: _defineProperty({}, k.onkeydown, viewControlKeyDownHandler)
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

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    label_font_size: 2 * polytheneTheme.vars.grid_unit_component, // 16
    label_height: 3 * polytheneTheme.vars.grid_unit_component, // 24
    label_padding_before: polytheneTheme.vars.grid_unit * 4, // 16
    label_padding_after: 0,
    button_size: 6 * polytheneTheme.vars.grid_unit_component,
    icon_size: 3 * polytheneTheme.vars.grid_unit_component,
    animation_duration: polytheneTheme.vars.animation_duration,

    color_light_on: rgba(polytheneTheme.vars.color_primary),
    color_light_off: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_label: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on_focus_opacity: .11,

    // icon colors may be set in theme; set to "inherit" by default
    // color_light_on_icon
    // color_light_off_icon

    // label on/off colors may be set in theme; set to color_light_label by default
    // color_light_on_label
    // color_light_off_label

    color_light_focus_on: rgba(polytheneTheme.vars.color_primary),
    color_light_focus_on_opacity: .11,
    color_light_focus_off: rgba(polytheneTheme.vars.color_light_foreground),
    color_light_focus_off_opacity: .07,

    color_dark_on: rgba(polytheneTheme.vars.color_primary),
    color_dark_off: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_label: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on_focus_opacity: .11,

    // icon color may be set in theme; set to "inherit" by default
    // color_dark_on_icon
    // color_dark_off_icon

    // label on/off colors may be set in theme; set to color_dark_label by default
    // color_dark_on_label
    // color_dark_off_label

    color_dark_focus_on: rgba(polytheneTheme.vars.color_primary), // or '#80cbc4'
    color_dark_focus_on_opacity: .14,
    color_dark_focus_off: rgba(polytheneTheme.vars.color_dark_foreground),
    color_dark_focus_off_opacity: .09
  };

  exports.coreSelectionControl = selectionControl;
  exports.viewControl = viewControl;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-selection-control.js.map
