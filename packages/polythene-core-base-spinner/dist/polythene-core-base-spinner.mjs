import { filterSupportedAttributes, show, hide } from 'polythene-core';
import { vars } from 'polythene-theme';

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

var showSpinner = function showSpinner(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  return show(_extends({}, attrs, {
    el: state.dom(),
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

var hideSpinner = function hideSpinner(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  return hide(_extends({}, attrs, {
    el: state.dom(),
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var visible = createStream(false);
  var dom = createStream(null);
  return {
    dom: dom,
    visible: visible,
    redrawOnUpdate: createStream.merge([visible])
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
  return _extends({}, filterSupportedAttributes(attrs), {
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

var vars$1 = {
  size_small: 3 * vars.grid_unit_component,
  size_regular: 4 * vars.grid_unit_component,
  size_medium: 5 * vars.grid_unit_component,
  size_large: 6 * vars.grid_unit_component,
  size_fab: 7 * vars.grid_unit_component,

  raisedSize: function raisedSize(size) {
    var padding = size * 0.25;
    var paddedSize = size + padding * 2;
    return { padding: padding, paddedSize: paddedSize };
  },

  color_light_raised_background: rgba(vars.color_light_background),
  // also use light background with dark tone
  color_dark_raised_background: rgba(vars.color_light_background)
};

export { spinner as coreBaseSpinner, vars$1 as vars };
