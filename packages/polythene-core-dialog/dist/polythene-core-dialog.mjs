import { filterSupportedAttributes, hide, show, subscribe, unsubscribe } from 'polythene-core';
import { classes } from 'polythene-core-menu';
import { vars } from 'polythene-theme';

var classes$1 = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",

  // states
  fullScreen: "pe-dialog--full-screen",
  backdrop: "pe-dialog--backdrop",
  open: "pe-dialog--open",

  // lookup
  menuContent: classes.content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var DEFAULT_Z = 3;

var showDialog = function showDialog(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  var id = state.instanceId;
  state.transitioning(true);
  var transitions = attrs.transitions;
  return show(_extends({}, attrs, transitions.show({ el: state.el, showDuration: attrs.showDuration, showDelay: attrs.showDelay }))).then(function () {
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
    state.transitioning(false);
  });
};

var hideDialog = function hideDialog(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  var id = state.instanceId;
  state.transitioning(true);
  var transitions = attrs.transitions;
  return hide(_extends({}, attrs, transitions.hide({ el: state.el, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay }))).then(function () {
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
    state.transitioning(false);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  return {
    cleanUp: undefined,
    el: undefined,
    transitioning: transitioning
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.el = vnode.dom;

  var handleEscape = function handleEscape(e) {
    if (attrs.fullScreen || attrs.modal) return;
    if (e.key === "Escape") {
      hideDialog(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  state.cleanUp = function () {
    return unsubscribe("keydown", handleEscape);
  };

  subscribe("keydown", handleEscape);

  if (attrs.showInstance) {
    showDialog(state, attrs);
  }
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp();
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  _defineProperty({
    className: [classes$1.component, attrs.fullScreen ? classes$1.fullScreen : null, attrs.backdrop ? classes$1.backdrop : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, k.onclick, function (e) {
    if (e.target !== state.el) {
      return;
    }
    if (attrs.modal) {
      // not allowed
      return;
    }
    hideDialog(state, _extends({}, attrs, {
      hideDelay: 0
    }));
  }), attrs.formOptions ? attrs.formOptions : null);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow,
      DialogPane = _ref2.DialogPane;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.hideInstance) {
    hideDialog(state, attrs);
  }
  var pane = attrs.panes && attrs.panes.length ? attrs.panes[0] : h(DialogPane, {
    title: attrs.title,
    header: attrs.header,
    body: attrs.content || attrs.body || attrs.menu,
    footer: attrs.footer,
    footerButtons: attrs.footerButtons,
    className: attrs.className,
    style: attrs.style
  });
  return h("div", {
    className: [classes$1.content, attrs.menu ? classes$1.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.fullScreen ? null : h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
    animated: true
  }), pane]);
};

var dialogInstance = Object.freeze({
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

var vars$1 = {
  border_radius: vars.unit_block_border_radius,
  padding_vertical: 3 * vars.grid_unit_component,
  padding_horizontal: 5 * vars.grid_unit_component,
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background),

  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular)
};

var ANIMATION_DURATION = .220;

var show$1 = function show$$1(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration || ANIMATION_DURATION,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration || ANIMATION_DURATION,
    hideDelay: hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};

export { dialogInstance as coreDialogInstance, classes$1 as classes, vars$1 as vars, transitions };
