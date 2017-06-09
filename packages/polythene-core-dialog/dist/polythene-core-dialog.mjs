import { filterSupportedAttributes, hide, show, subscribe, unsubscribe } from 'polythene-core';
import { flex, mixin, styler } from 'polythene-core-css';
import { classes } from 'polythene-core-menu';
import { vars } from 'polythene-theme';

var classes$1 = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  actions: "pe-dialog__actions",
  body: "pe-dialog__body",
  content: "pe-dialog__content",
  footer: "pe-dialog__footer",
  header: "pe-dialog__header",
  title: "pe-dialog__title",

  // states
  footerHigh: "pe-dialog__footer--high",
  fullscreen: "pe-dialog--fullscreen",
  hasBackdrop: "pe-dialog--backdrop",
  hasBottomOverflow: "pe-dialog--overflow-bottom",
  hasTopOverflow: "pe-dialog--overflow-top",
  open: "pe-dialog--open",
  transitioning: "pe-dialog--transitioning",

  // lookup
  menuContent: classes.content
};

var rgba = vars.rgba;

var vars$1 = {
  border_radius: vars.unit_block_border_radius,
  padding: 3 * vars.grid_unit_component,
  header_bottom: 20,
  header_height: 60,
  footer_height: 52,

  color_light_content_background: rgba(vars.color_light_background),
  color_light_title_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_body_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_light_body_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",

  color_dark_content_background: rgba(vars.color_dark_background),
  color_dark_title_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_body_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
  color_dark_body_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lineHeightTitle = 24;

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
      padding: 0,

      " .pe-dialog__content": {
        opacity: 0,
        borderRadius: 0,
        maxWidth: "none",
        height: "100%",
        width: "100%",

        " .pe-dialog__header, .pe-dialog__footer": {
          display: "none"
        },

        " .pe-dialog__body": {
          padding: 0,
          height: "100%",
          maxHeight: "calc(100%)",
          border: "none"
        }
      }
    },

    " .pe-dialog__header, pe-dialog__body, pe-dialog__header": {
      zIndex: 1
    },

    " .pe-dialog__content": [flex.layoutVertical, {
      position: "relative",
      maxHeight: "100%",
      minWidth: 56 * 5 + "px",
      maxWidth: 7 * vars.grid_unit_menu + "px",
      borderRadius: componentVars.border_radius + "px",

      " > .pe-shadow": {
        zIndex: -1 // For IE10 to get click events on content
      },

      ".pe-menu__content": {
        " .pe-dialog__body": {
          padding: 0,
          border: "none"
        }
      },
      " p": {
        margin: 0
      },
      " p + p": {
        marginTop: "16px"
      }
    }],

    " .pe-dialog__title": {
      fontSize: vars.font_size_title + "px",
      lineHeight: lineHeightTitle + "px",
      fontWeight: vars.font_weight_medium,

      "& + div": {
        marginTop: "16px"
      }
    },

    " .pe-dialog__header": {
      padding: [componentVars.padding - 4, componentVars.padding, componentVars.header_bottom - 4, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" "),
      minHeight: componentVars.header_height + "px",

      " .pe-dialog__title": [mixin.ellipsis(1), {
        width: "100%"
      }]
    },

    " .pe-dialog__body": [flex.selfStretch, {
      padding: componentVars.padding + "px",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "touch",
      borderWidth: "1px",
      borderStyle: "solid none",
      borderColor: "transparent",
      // initially set max-height; will be overridden by dialog core with actual heights
      maxHeight: "calc(100vh - " + 2 * componentVars.padding + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)"
    }],
    " .pe-dialog__header + .pe-dialog__body": {
      paddingTop: 0
    },

    " .pe-dialog__footer": {
      padding: "2px 8px",
      minHeight: componentVars.footer_height + "px",
      fontSize: 0, // remove inline block spacing

      ".pe-dialog__footer--high": {
        // when buttons are stacked vertically
        paddingBottom: "8px"
      }
    },

    " .pe-dialog__actions": [flex.layoutHorizontal, flex.layoutEndJustified, flex.layoutWrap, {
      margin: "0 -4px",

      " .pe-button": {
        height: "36px",
        marginTop: "6px",
        marginBottom: "6px",
        padding: 0
      }
    }]
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
    "&.pe-dialog--backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
    },
    " .pe-dialog__content": {
      backgroundColor: componentVars["color_" + tint + "_content_background"]
    },
    " .pe-dialog__header .pe-dialog__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog__body": {
      color: componentVars["color_" + tint + "_body_text"]
    },
    "&.pe-dialog--overflow-top .pe-dialog__body": {
      borderTopColor: componentVars["color_" + tint + "_body_border"]
    },
    "&.pe-dialog--overflow-bottom .pe-dialog__body": {
      borderBottomColor: componentVars["color_" + tint + "_body_border"]
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

/*
TODO
rename:
- el => dom
- topOverflow => hasTopOverflow
- bottomOverflow => hasBottomOverflow
*/
var element = "form";

var theme = customTheme;

var SCROLL_WATCH_END_TIMER = 150;
var DEFAULT_Z = 3;

var updateScrollOverflowState = function updateScrollOverflowState(vnode) {
  var state = vnode.state;
  var scroller = state.scrollEl();
  if (!scroller) {
    return;
  }
  state.topOverflow(scroller.scrollTop > 0);
  state.bottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
};

var updateFooterState = function updateFooterState(vnode) {
  var state = vnode.state;
  var footerEl = state.footerEl();
  if (!footerEl) {
    return;
  }
  var style = window.getComputedStyle(footerEl);
  var height = footerEl.getBoundingClientRect().height;
  var minHeight = parseInt(style.minHeight, 10);
  if (height > minHeight) {
    footerEl.classList.add(classes$1.footerHigh);
  } else {
    footerEl.classList.remove(classes$1.footerHigh);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var bottomOverflow = createStream(false);
  var footerEl = createStream();
  var headerEl = createStream();
  var isScrolling = createStream();
  var scrollEl = createStream();
  var topOverflow = createStream(false);
  var transitioning = createStream(false);
  var el = createStream();
  isScrolling.map(function (vnode1) {
    return updateScrollOverflowState(vnode1);
  });
  return {
    bottomOverflow: bottomOverflow,
    cleanUp: undefined,
    el: el,
    footerEl: footerEl,
    headerEl: headerEl,
    isScrolling: isScrolling,
    scrollEl: scrollEl,
    scrollWatchId: undefined,
    topOverflow: topOverflow,
    transitioning: transitioning,
    redrawOnUpdate: createStream.merge([topOverflow, bottomOverflow, isScrolling])
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

  state.scrollEl(vnode.dom.querySelector("." + classes$1.body));
  state.footerEl(vnode.dom.querySelector("." + classes$1.footer));
  state.headerEl(vnode.dom.querySelector("." + classes$1.title));

  var update = function update() {
    updateScrollOverflowState(vnode);
    updateFooterState(vnode);
  };

  var handleEscape = function handleEscape(e) {
    if (attrs.fullscreen || attrs.modal) return;
    if (e.which === 27) {
      hideDialog(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };
  state.cleanUp = function () {
    return unsubscribe("resize", update), unsubscribe("keydown", handleEscape);
  };

  // resize: update scroll state ("overflow" borders)
  subscribe("resize", update);
  subscribe("keydown", handleEscape);

  updateScrollOverflowState(vnode);

  if (attrs.show) {
    showDialog(state, attrs).then(function () {
      updateScrollOverflowState(vnode);
      updateFooterState(vnode);
    });
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
    className: [classes$1.component, attrs.fullscreen ? classes$1.fullscreen : null, attrs.backdrop ? classes$1.hasBackdrop : null, state.topOverflow() || attrs.borders ? classes$1.hasTopOverflow : null, state.bottomOverflow() || attrs.borders ? classes$1.hasBottomOverflow : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
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

var createBody = function createBody(vnode, _ref2) {
  var state = _ref2.state,
      attrs = _ref2.attrs,
      h = _ref2.h,
      k = _ref2.k;

  // if flex "self-stretch" is not supported, calculate the maximum height
  var bodyattrs = attrs.content || attrs.body || attrs.menu;
  return h("div", _defineProperty({
    className: classes$1.body
  }, k.onscroll, function () {
    state.isScrolling(vnode);
    clearTimeout(state.scrollWatchId);
    state.scrollWatchId = setTimeout(function () {
      state.isScrolling(vnode);
    }, SCROLL_WATCH_END_TIMER);
  }), bodyattrs);
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys,
      Shadow = _ref3.Shadow;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.hide) {
    hideDialog(state, attrs);
  }
  var body = createBody(vnode, { state: state, attrs: attrs, h: h, k: k });
  return h("div", {
    className: [classes$1.content, attrs.menu ? classes$1.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.fullscreen ? null : h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
    animated: true
  }), attrs.fullscreen ? null : attrs.title ? h("div", { className: classes$1.header }, h("div", { className: classes$1.title }, attrs.title)) : null, body, attrs.fullscreen ? null : attrs.footer ? h("div", { className: classes$1.footer }, h("div", { className: classes$1.actions }, attrs.footer)) : null]);
};

var dialogInstance = Object.freeze({
	element: element,
	theme: theme,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var show$1 = function show$$1(el, opts) {
  return {
    el: el,
    showDuration: opts.showDuration || .220,
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
    hideDuration: opts.hideDuration || .220,
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
