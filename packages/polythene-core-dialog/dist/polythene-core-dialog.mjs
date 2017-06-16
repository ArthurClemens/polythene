import { filterSupportedAttributes, hide, show, subscribe, unsubscribe } from 'polythene-core';
import { flex, styler } from 'polythene-core-css';
import { classes } from 'polythene-core-menu';
import { vars } from 'polythene-theme';

var classes$1 = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",

  // states
  fullscreen: "pe-dialog--fullscreen",
  backdrop: "pe-dialog--backdrop",
  open: "pe-dialog--open",

  // lookup
  menuContent: classes.content
};

var rgba = vars.rgba;

var vars$1 = {
  border_radius: vars.unit_block_border_radius,

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background),

  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular)
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  var _ref;

  return [(_ref = {}, _defineProperty$1(_ref, selector, [flex.layoutCenterCenter, {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: vars.z_dialog,
    height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
    padding: componentVars.padding + "px 40px",

    ".pe-dialog--fullscreen": {
      padding: 0

    },

    " .pe-dialog__content": {
      position: "relative",
      borderRadius: componentVars.border_radius + "px"
    }
  }]), _defineProperty$1(_ref, " body.pe-dialog--open", {
    overflow: "hidden",
    left: 0,
    "-webkit-overflow-scrolling": "touch",
    top: 0,
    width: "100%"
  }), _ref)];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-dialog__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      color: componentVars["color_" + tint + "_text"]
    },
    "&.pe-dialog--backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes$1.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var theme = customTheme;

var DEFAULT_Z = 3;

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  var el = createStream();
  return {
    cleanUp: undefined,
    el: el,
    transitioning: transitioning
  };
};

var showDialog = function showDialog(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  var id = state.instanceId;
  state.transitioning(true);
  var transitions = attrs.transitions || state.transitions;
  return show(_extends({}, attrs, transitions.show(state.el(), attrs))).then(function () {
    state.transitioning(false);
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
  });
};

var hideDialog = function hideDialog(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  var id = state.instanceId;
  state.transitioning(true);
  var transitions = attrs.transitions || state.transitions;
  return hide(_extends({}, attrs, transitions.hide(state.el(), attrs))).then(function () {
    state.transitioning(false);
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
  });
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.el(vnode.dom);

  var handleEscape = function handleEscape(e) {
    if (attrs.fullscreen || attrs.modal) return;
    if (e.which === 27) {
      hideDialog(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  state.cleanUp = function () {
    return unsubscribe("keydown", handleEscape);
  };

  subscribe("keydown", handleEscape);

  if (attrs.show) {
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
    className: [classes$1.component, attrs.fullscreen ? classes$1.fullscreen : null, attrs.backdrop ? classes$1.backdrop : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, k.onclick, function (e) {
    if (e.target !== state.el()) {
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
  if (attrs.hide) {
    hideDialog(state, attrs);
  }
  var pane = attrs.panes && attrs.panes.length ? attrs.panes[0] : h(DialogPane, {
    title: attrs.title,
    body: attrs.content || attrs.body || attrs.menu,
    footer: attrs.footer,
    className: attrs.className,
    style: attrs.style
  });
  return h("div", {
    className: [classes$1.content, attrs.menu ? classes$1.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.fullscreen ? null : h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
    animated: true
  }), pane]);
};

var dialogInstance = Object.freeze({
	getElement: getElement,
	theme: theme,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var ANIMATION_DURATION = .220;

var show$1 = function show$$1(el, opts) {
  return {
    el: el,
    showDuration: opts.showDuration || ANIMATION_DURATION,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(el, opts) {
  return {
    el: el,
    hideDuration: opts.hideDuration || ANIMATION_DURATION,
    hideDelay: opts.hideDelay || 0,
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
