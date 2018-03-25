(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

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

  var sizeClasses = {
    small: classes.small,
    regular: classes.regular,
    medium: classes.medium,
    large: classes.large,
    fab: classes.fab
  };

  var classForSize = function classForSize() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
    return sizeClasses[size];
  };

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
    return polytheneCore.transitionComponent(transitionOptions(state, attrs, true));
  };

  var hideSpinner = function hideSpinner(state, attrs) {
    return polytheneCore.transitionComponent(transitionOptions(state, attrs, false));
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
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.instanceClass, classForSize(attrs.size), attrs.singleColor ? classes.singleColor : null, attrs.raised ? classes.raised : null, attrs.animated ? classes.animated : null, attrs.permanent ? classes.permanent : null, attrs.permanent ? classes.visible : null, attrs.className || attrs[k.class]].join(" ")
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

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    size_small: 3 * polytheneTheme.vars.grid_unit_component,
    size_regular: 4 * polytheneTheme.vars.grid_unit_component,
    size_medium: 5 * polytheneTheme.vars.grid_unit_component,
    size_large: 6 * polytheneTheme.vars.grid_unit_component,
    size_fab: 7 * polytheneTheme.vars.grid_unit_component,

    animation_delay: "0s",
    animation_duration: ".220s",
    animation_timing_function: "ease-in-out",
    animation_hide_css: "opacity: 0;",
    animation_show_css: "opacity: 1;",

    raisedSize: function raisedSize(size) {
      var padding = size * 0.25;
      var paddedSize = size + padding * 2;
      return { padding: padding, paddedSize: paddedSize };
    },

    color_light_raised_background: rgba(polytheneTheme.vars.color_light_background),
    // also use light background with dark tone
    color_dark_raised_background: rgba(polytheneTheme.vars.color_light_background)
  };

  exports.coreBaseSpinner = spinner;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-base-spinner.js.map
