(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-selection-control'), require('polythene-core-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-selection-control', 'polythene-core-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-selection-control'],global['polythene-core-icon-button']));
}(this, (function (exports,polytheneTheme,polytheneCoreSelectionControl,polytheneCoreIconButton) { 'use strict';

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

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = _extends$2({}, polytheneCoreSelectionControl.vars, {
    general_styles: true,

    animation_duration: polytheneTheme.vars.animation_duration,
    hit_area_padding: (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 2, // 12
    icon_button_padding: polytheneCoreIconButton.vars.padding,
    padding: polytheneTheme.vars.grid_unit_component,
    thumb_size: 20,
    track_height: 14,
    track_length: 36,

    color_light_thumb_on: rgba(polytheneTheme.vars.color_primary),
    color_light_thumb_off: "#f1f1f1",
    color_light_thumb_disabled: "#eee",
    color_light_wash_on: rgba(polytheneTheme.vars.color_primary, polytheneTheme.vars.blend_light_background_active),
    color_light_wash_off: polytheneCoreIconButton.vars.color_light_wash,

    color_light_track_on: rgba(polytheneTheme.vars.color_primary_faded),
    color_light_track_on_opacity: .55,
    color_light_track_off: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_regular),
    color_light_track_off_opacity: .55,
    color_light_track_disabled: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,

    // icon color may be set in theme; default "currentcolor"
    // color_light_icon_on:                   "currentcolor",
    // color_light_icon_off:                  "currentcolor",

    // color_light_focus_on and so on taken from selectionControlVars

    color_dark_thumb_on: rgba(polytheneTheme.vars.color_primary),
    color_dark_thumb_off: "#bdbdbd",
    color_dark_thumb_disabled: "#555",
    color_dark_wash_on: rgba(polytheneTheme.vars.color_primary, polytheneTheme.vars.blend_dark_background_active),
    color_dark_wash_off: polytheneCoreIconButton.vars.color_dark_wash,

    color_dark_track_on: rgba(polytheneTheme.vars.color_primary_faded, polytheneTheme.vars.blend_dark_text_tertiary), // or "#5a7f7c"
    color_dark_track_on_opacity: 9,
    color_dark_track_off: "#717171",
    color_dark_track_off_opacity: .55,
    color_dark_track_disabled: "#717171",
    color_dark_track_disabled_opacity: .3

    // icon color may be set in theme; default "currentcolor"
    // color_dark_icon_on:                    "currentcolor"
    // color_dark_icon_off:                   "currentcolor"

    // color_dark_focus_on and so on taken from selectionControlVars
  });

  exports.coreSwitch = _switch;
  exports.viewControl = viewControl;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-switch.js.map
