import { filterSupportedAttributes, hide, isTouch, show, subscribe, unsubscribe } from 'polythene-core';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-drawer",

  // elements
  panel: "pe-drawer__panel",
  backdrop: "pe-drawer__backdrop",

  // states
  visible: "pe-drawer--visible",
  backdropVisible: "pe-drawer--backdrop-visible",
  fullHeight: "pe-drawer--full-height",
  coverFromLeft: "pe-drawer--cover-from-left"
};

var SHADOW_WIDTH = 10;

var show$1 = function show$$1(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      var rect = el.getBoundingClientRect();
      var width = rect.width + SHADOW_WIDTH;
      el.style.top = 0;
      el.style.left = "-" + width + "px";
    },
    show: function show$$1() {
      el.style.left = 0;
    }
  };
};

var hide$1 = function hide$$1(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration,
    hideDelay: hideDelay || 0,
    hide: function hide$$1() {
      var rect = el.getBoundingClientRect();
      var width = rect.width + SHADOW_WIDTH;
      el.style.left = "-" + width + "px";
    }
  };
};

var defaultTransitions = {
  show: show$1,
  hide: hide$1
};

var show$2 = function show$$1(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$2 = function hide$$1(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration,
    hideDelay: hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var defaultBackdropTransitions = {
  show: show$2,
  hide: hide$2
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var ANIMATION_DURATION = .220;
var DEFAULT_TYPE = "coverFromLeft";

var handleSubscriptions = function handleSubscriptions(vnode, which) {
  var state = vnode.state;
  var attrs = vnode.attrs;

  if (which === "mount") {
    // subscribe("resize", state.update);
    attrs.closeOnEscape && subscribe("keydown", state.handleEscape);
    setTimeout(function () {
      state.activateDismissTap();
    }, 0);
  } else {
    // unsubscribe("resize", state.update);
    attrs.closeOnEscape && unsubscribe("keydown", state.handleEscape);
    state.deActivateDismissTap();
  }
};

var showDrawer = function showDrawer(state, attrs) {
  if (state.transitioning() || state.visible()) {
    return;
  }
  state.transitioning(true);
  state.visible(true);
  if (attrs.onChange) {
    attrs.onChange({ visible: state.visible(), transitioning: state.transitioning() });
  }
  var transitions = attrs.transitions || defaultTransitions;
  // Show backdrop
  if (attrs.backdrop) {
    var backdropTransitions = attrs.backdropTransitions || defaultBackdropTransitions;
    show(_extends({}, attrs, backdropTransitions.show({ el: state.backdropDom(), showDuration: attrs.showDuration || ANIMATION_DURATION, showDelay: attrs.showDelay })));
  }
  // Show pane
  return show(_extends({}, attrs, transitions.show({ el: state.dom(), showDuration: attrs.showDuration || ANIMATION_DURATION, showDelay: attrs.showDelay }))).then(function () {
    state.transitioning(false);
    if (attrs.onChange) {
      attrs.onChange({ visible: state.visible(), transitioning: state.transitioning() });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
  });
};

var hideDrawer = function hideDrawer(state, attrs) {
  if (state.transitioning() || !state.visible()) {
    return;
  }
  state.transitioning(true);
  if (attrs.onChange) {
    attrs.onChange({ visible: state.visible(), transitioning: state.transitioning() });
  }
  var transitions = attrs.transitions || defaultTransitions;
  // Hide backdrop
  if (attrs.backdrop) {
    var backdropTransitions = attrs.backdropTransitions || defaultBackdropTransitions;
    hide(_extends({}, attrs, backdropTransitions.hide({ el: state.backdropDom(), hideDuration: attrs.hideDuration || ANIMATION_DURATION, hideDelay: attrs.hideDelay })));
  }
  // Hide pane
  return hide(_extends({}, attrs, transitions.hide({ el: state.dom(), hideDuration: attrs.hideDuration || ANIMATION_DURATION, hideDelay: attrs.hideDelay }))).then(function () {
    state.visible(false);
    state.transitioning(false);
    if (attrs.onChange) {
      attrs.onChange({ visible: state.visible(), transitioning: state.transitioning() });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var dom = createStream(null);
  var backdropDom = createStream(null);
  var transitioning = createStream(false);
  var visible = createStream(null);
  return {
    dom: dom,
    backdropDom: backdropDom,
    transitioning: transitioning,
    visible: visible,
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
  state.dom(dom.querySelector("." + classes.panel));
  state.backdropDom(dom.querySelector("." + classes.backdrop));

  if (!attrs.permanent) {
    state.handleDismissTap = function (e) {
      if (e.target !== state.backdropDom()) {
        return;
      }
      if (e.defaultPrevented) {
        // clicked on .pe-drawer
        hideDrawer(state, attrs);
      } else {
        hideDrawer(state, _extends({}, attrs, {
          hideDelay: 0
        }));
      }
    };

    state.activateDismissTap = function () {
      if (isTouch) {
        dom.addEventListener("touchstart", state.handleDismissTap);
      } else {
        dom.addEventListener("click", state.handleDismissTap);
      }
    };

    state.deActivateDismissTap = function () {
      if (isTouch) {
        dom.removeEventListener("touchstart", state.handleDismissTap);
      } else {
        dom.removeEventListener("click", state.handleDismissTap);
      }
    };

    state.handleEscape = function (e) {
      if (e.key === "Escape" || e.key === "Esc") {
        hideDrawer(state, _extends({}, attrs, { hideDelay: 0 }));
      }
    };

    handleSubscriptions(vnode, "mount");
  }
};

var onUnMount = function onUnMount(vnode) {
  var attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var type = attrs.type || DEFAULT_TYPE;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.menu && attrs.menu.fullHeight ? classes.fullHeight : null, classes[type], state.visible() ? classes.visible : null, attrs.backdrop ? classes.backdropVisible : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys,
      Menu = _ref2.Menu;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var type = attrs.type || DEFAULT_TYPE;

  if (!state.transitioning()) {
    if (attrs.show === false && state.visible()) {
      hideDrawer(state, attrs);
    } else if (attrs.show === true && !state.visible()) {
      showDrawer(state, attrs);
    }
  }

  return h("div", _defineProperty({}, k.onclick, function (e) {
    return e.preventDefault();
  }), [h("div", { className: classes.backdrop }), h("div", { className: classes.panel }, h(Menu, _extends({}, attrs.menu, {
    permanent: true,
    type: type
  })))]);
};

var drawer = Object.freeze({
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
  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background),

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
};

export { drawer as coreDrawer, vars$1 as vars };
