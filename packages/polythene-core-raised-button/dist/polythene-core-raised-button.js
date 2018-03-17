(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-button pe-text-button pe-raised-button"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

  var MAX_Z = 5;

  var tapStart = void 0,
      tapEndAll = function tapEndAll() {},
      downButtons = [];

  polytheneCore.subscribe(polytheneCore.pointerEndEvent, function () {
    return tapEndAll();
  });

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
    if (polytheneCore.isServer) return;
    tapStart = function tapStart() {
      return tapHandler("down", vnode);
    };
    tapEndAll = function tapEndAll() {
      downButtons.map(function (buttonVnode) {
        return tapHandler("up", buttonVnode);
      });
      downButtons = [];
    };
    vnode.dom.addEventListener(polytheneCore.pointerStartMoveEvent, tapStart);
  };

  var clearTapEvents = function clearTapEvents(vnode) {
    return vnode.dom.removeEventListener(polytheneCore.pointerStartMoveEvent, tapStart);
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
    var state = vnode.state;
    if (vnode.dom && !state.tapEventsInited()) {
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
      parentClassName: [attrs.parentClassName || classes.component].join(" "),
      animateOnTap: false,
      shadowComponent: h(Shadow, {
        z: attrs.disabled ? 0 : state.z,
        animated: true
      }),
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

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    color_light_background: "#fff",
    color_light_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_hover_background: "transparent",
    color_light_focus_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_active_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover), // same as hover
    color_light_disabled_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_light_disabled_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),

    color_dark_background: rgba(polytheneTheme.vars.color_primary),
    color_dark_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_hover_background: polytheneTheme.vars.color_primary_active,
    color_dark_focus_background: polytheneTheme.vars.color_primary_active,
    color_dark_active_background: polytheneTheme.vars.color_primary_dark,
    color_dark_disabled_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),
    color_dark_disabled_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled)
  };

  exports.coreRaisedButton = raisedButton;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-raised-button.js.map
