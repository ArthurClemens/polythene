(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var menuClasses = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  fullHeight: "pe-menu--full-height",
  floating: "pe-menu--floating",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",

  // states
  fullScreen: "pe-dialog--full-screen",
  open: "pe-dialog--open",

  // lookup
  menuContent: menuClasses.content
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

var defaultBackdropTransitions = {
  show: show$1,
  hide: hide$1
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

  // Show backdrop
  if (attrs.backdrop) {
    var backdropTransitions = attrs.backdropTransitions || defaultBackdropTransitions;
    polytheneCore.show(_extends({}, attrs, backdropTransitions.show({ el: state.backdropEl, showDuration: attrs.showDuration, showDelay: attrs.showDelay })));
  }

  // Show pane
  var transitions = attrs.transitions;
  return polytheneCore.show(_extends({}, attrs, transitions.show({ el: state.el, contentEl: state.contentEl, showDuration: attrs.showDuration, showDelay: attrs.showDelay }))).then(function () {
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

  // Hide backdrop
  if (attrs.backdrop) {
    var backdropTransitions = attrs.backdropTransitions || defaultBackdropTransitions;
    polytheneCore.hide(_extends({}, attrs, backdropTransitions.hide({ el: state.backdropEl, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay })));
  }

  // Hide pane
  var transitions = attrs.transitions;
  return polytheneCore.hide(_extends({}, attrs, transitions.hide({ el: state.el, contentEl: state.contentEl, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay }))).then(function () {
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
    state.transitioning(false);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  return {
    backdropEl: undefined,
    cleanUp: undefined,
    el: undefined,
    contentEl: undefined,
    transitioning: transitioning
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  var dom = vnode.dom;
  state.el = dom;
  state.backdropEl = dom.querySelector("." + classes.backdrop);
  state.contentEl = dom.querySelector("." + classes.content);

  var handleEscape = function handleEscape(e) {
    if (attrs.fullScreen || attrs.modal) return;
    if (e.key === "Escape") {
      hideDialog(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  state.cleanUp = function () {
    return polytheneCore.unsubscribe("keydown", handleEscape);
  };

  polytheneCore.subscribe("keydown", handleEscape);

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

  return _extends({}, polytheneCore.filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  _defineProperty({
    className: [classes.component, attrs.fullScreen ? classes.fullScreen : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" "),
    "data-spawn-id": attrs.spawnId,
    "data-instance-id": attrs.instanceId
  }, k.onclick, function (e) {
    if (e.target !== state.el && e.target !== state.backdropEl) {
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

var createPane = function createPane(vnode, _ref2) {
  var h = _ref2.renderer,
      Pane = _ref2.Pane;

  var attrs = vnode.attrs;
  return h(Pane, {
    title: attrs.title,
    header: attrs.header,
    body: attrs.content || attrs.body || attrs.menu,
    footer: attrs.footer,
    footerButtons: attrs.footerButtons,
    className: attrs.className,
    style: attrs.style,
    fullBleed: attrs.fullBleed
  });
};

var createContent = function createContent(vnode, _ref3) {
  var renderer = _ref3.renderer,
      Shadow = _ref3.Shadow,
      createPane = _ref3.createPane,
      Pane = _ref3.Pane;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var h = renderer;
  if (attrs.hideInstance) {
    hideDialog(state, attrs);
  }
  var pane = attrs.panes && attrs.panes.length ? attrs.panes[0] : createPane(vnode, { renderer: renderer, Pane: Pane });
  return [attrs.backdrop && h("div", {
    key: "backdrop",
    className: classes.backdrop
  }), h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
    key: "content"
  }, [attrs.fullScreen ? null : h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
    animated: true,
    key: "shadow"
  }), pane])];
};

var dialogInstance = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createPane: createPane,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  position: "fixed",
  border_radius: polytheneTheme.vars.unit_block_border_radius,
  padding_vertical: 3 * polytheneTheme.vars.grid_unit_component,
  padding_horizontal: 5 * polytheneTheme.vars.grid_unit_component,

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: rgba(polytheneTheme.vars.color_light_background),
  color_dark_background: rgba(polytheneTheme.vars.color_dark_background),

  color_light_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_regular),
  color_dark_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_regular)
};

var ANIMATION_DURATION$1 = .220;

var show$2 = function show$$1(_ref) {
  var contentEl = _ref.contentEl,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: contentEl,
    showDuration: showDuration || ANIMATION_DURATION$1,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return contentEl.style.opacity = 0;
    },
    show: function show$$1() {
      return contentEl.style.opacity = 1;
    }
  };
};

var hide$2 = function hide$$1(_ref2) {
  var contentEl = _ref2.contentEl,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: contentEl,
    hideDuration: hideDuration || ANIMATION_DURATION$1,
    hideDelay: hideDelay || 0,
    hide: function hide$$1() {
      return contentEl.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$2,
  hide: hide$2
};

exports.coreDialogInstance = dialogInstance;
exports.vars = vars$1;
exports.transitions = transitions;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-dialog.js.map
