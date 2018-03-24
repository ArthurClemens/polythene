(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-utilities'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-utilities', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-utilities'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneUtilities,polytheneTheme) { 'use strict';

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
    return polytheneCore.transitionComponent(transitionOptions(state, attrs, true));
  };

  var hideNotification = function hideNotification(state, attrs) {
    return polytheneCore.transitionComponent(transitionOptions(state, attrs, false));
  };

  var setTitleStyles = function setTitleStyles(titleEl) {
    if (polytheneCore.isServer) return;
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
      timer: new polytheneUtilities.Timer(),
      paused: paused,
      transitioning: transitioning,
      visible: visible,
      mounted: mounted,
      redrawOnUpdate: createStream.merge([visible])
    };
  };

  var onMount = function onMount(vnode) {
    var dom = vnode.dom;
    if (!dom) {
      return;
    }
    var state = vnode.state;
    var attrs = vnode.attrs;
    state.el = dom;
    var titleEl = state.el.querySelector("." + classes.title);
    if (titleEl) {
      setTitleStyles(titleEl);
    }
    if (!state.containerEl && polytheneCore.isClient) {
      // attrs.holderSelector is passed as option to Multiple
      state.containerEl = document.querySelector(attrs.containerSelector || attrs.holderSelector);
    }
    if (!state.containerEl && polytheneCore.isClient) {
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
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    _defineProperty({
      className: [classes.component,
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

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var buttonPaddingH = 8; // padding, inner text space

  var vars = {
    width: 288,
    min_height: 80,
    border_radius: polytheneTheme.vars.unit_block_border_radius,
    title_padding_h: buttonPaddingH,
    title_single_padding_v: 14,
    title_multi_padding_v: 20, // 24 - natural line height
    side_padding: 24 - buttonPaddingH,
    font_size: 14,
    line_height: 20,

    animation_delay: "0s",
    animation_duration: ".3s",
    animation_timing_function: "ease-in-out",

    color_light_background: rgba(polytheneTheme.vars.color_light_background),
    color_light_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_dark_primary),

    color_dark_background: rgba(polytheneTheme.vars.color_dark_background),
    color_dark_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_light_text_primary)
  };

  exports.coreNotificationInstance = notificationInstance;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-notification.js.map
