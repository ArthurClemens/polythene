import { filterSupportedAttributes, subscribe, unpackAttrs, unsubscribe } from 'polythene-core';
import { flex, mixin, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-dialog-pane",

  // elements
  actions: "pe-dialog-pane__actions",
  body: "pe-dialog-pane__body",
  content: "pe-dialog-pane__content",
  footer: "pe-dialog-pane__footer",
  header: "pe-dialog-pane__header",
  title: "pe-dialog-pane__title",

  // states
  headerWithTitle: "pe-dialog-pane__header--title",
  footerWithButtons: "pe-dialog-pane__footer--buttons",
  footerHigh: "pe-dialog-pane__footer--high",
  hasBottomOverflow: "pe-dialog-pane--overflow-bottom",
  hasTopOverflow: "pe-dialog-pane--overflow-top",
  fullBleed: "pe-dialog-pane--full-bleed"
};

var vars$1 = {
  padding: 3 * vars.grid_unit_component,
  header_bottom: 20,
  header_height: 60,
  footer_height: 52,

  border_width: 1,

  color_light_title_text: "inherit",
  color_light_body_text: "inherit",
  color_light_body_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background: "inherit",

  color_dark_title_text: "inherit",
  color_dark_body_text: "inherit",
  color_dark_body_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background: "inherit"
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lineHeightTitle = 24;

var layout = (function (selector, componentVars) {
  var _ref;

  return [(_ref = {}, _defineProperty$1(_ref, selector, [flex.layoutVertical, {
    position: "relative",
    maxHeight: "100%",
    minWidth: 56 * 5 + "px",
    maxWidth: 7 * vars.grid_unit_menu + "px",
    borderRadius: "inherit",
    margin: 0,

    ".pe-menu__content": {
      " .pe-dialog-pane__body": {
        padding: 0,
        border: "none"
      }
    },
    " .pe-dialog-pane__header, pe-dialog-pane__body, pe-dialog-pane__header": {
      zIndex: 1
    },

    " .pe-dialog-pane__title": {
      fontSize: vars.font_size_title + "px",
      lineHeight: lineHeightTitle + "px",
      fontWeight: vars.font_weight_medium,

      "& + div": {
        marginTop: "16px"
      }
    },

    " .pe-dialog-pane__header": {
      minHeight: componentVars.header_height + "px",

      " .pe-dialog-pane__title": [mixin.ellipsis(1), {
        width: "100%"
      }]
    },

    " .pe-dialog-pane__header--title": {
      padding: [componentVars.padding - 4, componentVars.padding, componentVars.header_bottom - 4, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" ")
    },

    " .pe-dialog-pane__body": [flex.selfStretch, {
      padding: componentVars.padding + "px",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "touch",
      borderWidth: componentVars.border_width + "px",
      borderStyle: "solid none",
      borderColor: "transparent",
      // initially set max-height; will be overridden by dialog core with actual heights
      maxHeight: "calc(100vh - " + 2 * componentVars.padding + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)",

      " p": {
        margin: 0
      },
      " p + p": {
        marginTop: "16px"
      }
    }],
    " .pe-dialog-pane__header--title + .pe-dialog-pane__body": {
      paddingTop: 0
    },

    " .pe-dialog-pane__footer": {
      ".pe-dialog-pane__footer--high": {
        // when buttons are stacked vertically
        paddingBottom: "8px"
      },
      ".pe-dialog-pane__footer--buttons": {
        padding: "2px 8px",
        minHeight: componentVars.footer_height + "px",
        fontSize: 0 // remove inline block spacing
      }
    },

    " .pe-dialog-pane__actions": [flex.layoutHorizontal, flex.layoutEndJustified, flex.layoutWrap, {
      margin: "0 -4px",

      " .pe-button": {
        height: "36px",
        marginTop: "6px",
        marginBottom: "6px",
        padding: 0
      }
    }]
  }]), _defineProperty$1(_ref, ".pe-menu__content", {
    " .pe-dialog-pane__body": {
      padding: 0,
      border: "none"
    }
  }), _defineProperty$1(_ref, " .pe-dialog--full-screen", {
    " .pe-dialog-pane__content": {
      borderRadius: 0,
      maxWidth: "none",
      height: "100vh",
      width: "100vw"
    },
    " .pe-dialog-pane, .pe-dialog-pane__body": {
      height: "100vh",
      maxHeight: "100vh",
      border: "none",
      maxWidth: "initial"
    }
  }), _ref)];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {

    backgroundColor: componentVars["color_" + tint + "_background"],

    " .pe-dialog-pane__header .pe-dialog-pane__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog-pane__body": {
      color: componentVars["color_" + tint + "_body_text"]
    },
    "&.pe-dialog-pane--overflow-top .pe-dialog-pane__body": {
      borderTopColor: componentVars["color_" + tint + "_body_border"]
    },
    "&.pe-dialog-pane--overflow-bottom .pe-dialog-pane__body": {
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
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "form";
};

var theme = customTheme;

var SCROLL_WATCH_END_TIMER = 150;

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
    footerEl.classList.add(classes.footerHigh);
  } else {
    footerEl.classList.remove(classes.footerHigh);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var bottomOverflow = createStream(false);
  var footerEl = createStream();
  var headerEl = createStream();
  var isScrolling = createStream(false);
  var scrollEl = createStream();
  var topOverflow = createStream(false);
  var el = createStream();

  return {
    cleanUp: undefined,
    bottomOverflow: bottomOverflow,
    el: el,
    footerEl: footerEl,
    headerEl: headerEl,
    isScrolling: isScrolling,
    scrollEl: scrollEl,
    scrollWatchId: undefined,
    topOverflow: topOverflow,
    redrawOnUpdate: createStream.merge([topOverflow, bottomOverflow, isScrolling])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var state = vnode.state;
  state.el(dom);

  state.scrollEl(dom.querySelector("." + classes.body));
  state.footerEl(dom.querySelector("." + classes.footer));
  state.headerEl(dom.querySelector("." + classes.title));

  state.isScrolling.map(function () {
    return updateScrollOverflowState(vnode);
  });

  var update = function update() {
    updateScrollOverflowState(vnode);
    updateFooterState(vnode);
  };

  state.cleanUp = function () {
    return unsubscribe("resize", update);
  };

  // resize: update scroll state ("overflow" borders)
  subscribe("resize", update);

  updateScrollOverflowState(vnode);
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp();
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = unpackAttrs(vnode.attrs);
  return _extends({}, filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  {
    className: [classes.component,
    // attrs.fullBleed ? classes.fullBleed : null,
    state.topOverflow() || attrs.borders ? classes.hasTopOverflow : null, state.bottomOverflow() || attrs.borders ? classes.hasBottomOverflow : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.formOptions);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys;

  var state = vnode.state;
  var attrs = unpackAttrs(vnode.attrs);

  return h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.header ? h("div", {
    className: classes.header,
    key: "header"
  }, attrs.header) : attrs.title ? h("div", {
    className: [classes.header, classes.headerWithTitle].join(" "),
    key: "title"
  }, h("div", { className: classes.title }, attrs.title)) : null, h("div", _defineProperty({
    className: classes.body,
    key: "body"
  }, k.onscroll, function () {
    state.isScrolling(true);
    clearTimeout(state.scrollWatchId);
    state.scrollWatchId = setTimeout(function () {
      state.isScrolling(false);
    }, SCROLL_WATCH_END_TIMER);
  }), attrs.content || attrs.body || attrs.menu), attrs.footer ? h("div", {
    className: classes.footer,
    key: "footer"
  }, attrs.footer) : attrs.footerButtons ? h("div", {
    className: [classes.footer, classes.footerWithButtons].join(" "),
    key: "footer"
  }, h("div", { className: classes.actions }, attrs.footerButtons)) : null]);
};

var dialogPane = Object.freeze({
	getElement: getElement,
	theme: theme,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

export { dialogPane as coreDialogPane, classes, vars$1 as vars };
