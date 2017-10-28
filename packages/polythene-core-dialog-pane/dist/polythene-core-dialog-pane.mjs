import { filterSupportedAttributes, subscribe, unpackAttrs, unsubscribe } from 'polythene-core';
import { dialogPaneClasses } from 'polythene-css-classes';
import { vars } from 'polythene-theme';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "form";
};

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
    footerEl.classList.add(dialogPaneClasses.footerHigh);
  } else {
    footerEl.classList.remove(dialogPaneClasses.footerHigh);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var bottomOverflow = createStream(false);
  var footerEl = createStream(null);
  var headerEl = createStream(null);
  var isScrolling = createStream(false);
  var scrollEl = createStream(null);
  var topOverflow = createStream(false);
  var el = createStream(null);

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

  state.scrollEl(dom.querySelector("." + dialogPaneClasses.body));
  state.footerEl(dom.querySelector("." + dialogPaneClasses.footer));
  state.headerEl(dom.querySelector("." + dialogPaneClasses.title));

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
  var borders = attrs.borders || "overflow";
  var showTopBorder = borders === "always" || borders === "overflow" && state.topOverflow();
  var showBottomBorder = borders === "always" || borders === "overflow" && state.bottomOverflow();
  var withHeader = attrs.header !== undefined || attrs.title !== undefined;
  var withFooter = attrs.footer !== undefined || attrs.footerButtons !== undefined;
  return _extends({}, filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  {
    className: [dialogPaneClasses.component, attrs.fullBleed ? dialogPaneClasses.fullBleed : null, showTopBorder ? dialogPaneClasses.borderTop : null, showBottomBorder ? dialogPaneClasses.borderBottom : null, withHeader ? dialogPaneClasses.withHeader : null, withFooter ? dialogPaneClasses.withFooter : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.formOptions);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys;

  var state = vnode.state;
  var attrs = unpackAttrs(vnode.attrs);

  return h("div", {
    className: [dialogPaneClasses.content, attrs.menu ? dialogPaneClasses.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.header ? attrs.header : attrs.title ? h("div", {
    className: [dialogPaneClasses.header, dialogPaneClasses.headerWithTitle].join(" "),
    key: "title"
  }, h("div", { className: dialogPaneClasses.title }, attrs.title)) : null, h("div", _defineProperty({
    className: dialogPaneClasses.body,
    key: "body"
  }, k.onscroll, function () {
    state.isScrolling(true);
    clearTimeout(state.scrollWatchId);
    state.scrollWatchId = setTimeout(function () {
      state.isScrolling(false);
    }, SCROLL_WATCH_END_TIMER);
  }), attrs.content || attrs.body || attrs.menu), attrs.footer ? h("div", {
    className: dialogPaneClasses.footer,
    key: "footer"
  }, attrs.footer) : attrs.footerButtons ? h("div", {
    className: [dialogPaneClasses.footer, dialogPaneClasses.footerWithButtons].join(" "),
    key: "footer"
  }, h("div", { className: dialogPaneClasses.actions }, attrs.footerButtons)) : null]);
};

var dialogPane = Object.freeze({
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

export { dialogPane as coreDialogPane, dialogPaneClasses as classes, vars$1 as vars };
