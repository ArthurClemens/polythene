(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

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
    withHeader: "pe-dialog-pane--header",
    withFooter: "pe-dialog-pane--footer",
    headerWithTitle: "pe-dialog-pane__header--title",
    footerWithButtons: "pe-dialog-pane__footer--buttons",
    footerHigh: "pe-dialog-pane__footer--high",
    borderBottom: "pe-dialog-pane--border-bottom",
    borderTop: "pe-dialog-pane--border-top",
    fullBleed: "pe-dialog-pane--body-full-bleed"
  };

  var buttonClasses = {
      component: "pe-text-button",
      super: "pe-button",
      row: "pe-button-row",

      // elements      
      content: "pe-button__content",
      focus: "pe-button__focus",
      label: "pe-button__label",
      wash: "pe-button__wash",
      dropdown: "pe-button__dropdown",

      // states      
      border: "pe-button--border",
      disabled: "pe-button--disabled",
      focused: "pe-button--focus",
      inactive: "pe-button--inactive",
      selected: "pe-button--selected",
      hasDropdown: "pe-button--dropdown",
      highLabel: "pe-button--high-label",
      extraWide: "pe-button--extra-wide",
      separatorAtStart: "pe-button--separator-start",
      dropdownOpen: "pe-button--dropdown-open",
      dropdownClosed: "pe-button--dropdown-closed"
  };

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
    if (!vnode.dom) {
      return;
    }
    var dom = vnode.dom;
    var state = vnode.state;
    state.el(dom);

    state.scrollEl(dom.querySelector("." + classes.body));
    state.footerEl(dom.querySelector("." + classes.footer));
    state.headerEl(dom.querySelector("." + classes.header));

    state.isScrolling.map(function () {
      return updateScrollOverflowState(vnode);
    });

    var update = function update() {
      updateScrollOverflowState(vnode);
    };

    state.cleanUp = function () {
      return polytheneCore.unsubscribe("resize", update);
    };

    // resize: update scroll state ("overflow" borders)
    polytheneCore.subscribe("resize", update);

    update();
  };

  var onUnMount = function onUnMount(vnode) {
    return vnode.state.cleanUp();
  };

  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var state = vnode.state;
    var attrs = polytheneCore.unpackAttrs(vnode.attrs);
    var borders = attrs.borders || "overflow";
    var showTopBorder = borders === "always" || borders === "overflow" && state.topOverflow();
    var showBottomBorder = borders === "always" || borders === "overflow" && state.bottomOverflow();
    var withHeader = attrs.header !== undefined || attrs.title !== undefined;
    var withFooter = attrs.footer !== undefined || attrs.footerButtons !== undefined;

    return _extends({}, polytheneCore.filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    {
      className: [classes.component, attrs.fullBleed ? classes.fullBleed : null, showTopBorder ? classes.borderTop : null, showBottomBorder ? classes.borderBottom : null, withHeader ? classes.withHeader : null, withFooter ? classes.withFooter : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.formOptions);
  };

  var createContent = function createContent(vnode, _ref2) {
    var h = _ref2.renderer,
        k = _ref2.keys;

    var state = vnode.state;
    var attrs = polytheneCore.unpackAttrs(vnode.attrs);

    return h("div", {
      className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
      style: attrs.style
    }, [attrs.header ? attrs.header : attrs.title ? h("div", {
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
      className: [classes.footer, classes.footerWithButtons, buttonClasses.row].join(" "),
      key: "footer"
    }, h("div", { className: classes.actions }, attrs.footerButtons)) : null]);
  };

  var dialogPane = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    getInitialState: getInitialState,
    onMount: onMount,
    onUnMount: onUnMount,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreDialogPane = dialogPane;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-dialog-pane.js.map
