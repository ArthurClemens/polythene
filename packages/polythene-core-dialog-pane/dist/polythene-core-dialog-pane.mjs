import { unsubscribe, subscribe, unpackAttrs, filterSupportedAttributes } from 'polythene-core';

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
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start"
};

const getElement = vnode => vnode.attrs.element || "form";
const SCROLL_WATCH_END_TIMER = 150;

const updateScrollOverflowState = vnode => {
  const state = vnode.state;
  const scroller = state.scrollEl();

  if (!scroller) {
    return;
  }

  state.topOverflow(scroller.scrollTop > 0);
  state.bottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
};

const getInitialState = (vnode, createStream) => {
  const bottomOverflow = createStream(false);
  const footerEl = createStream(null);
  const headerEl = createStream(null);
  const isScrolling = createStream(false);
  const scrollEl = createStream(null);
  const topOverflow = createStream(false);
  const el = createStream(null);
  return {
    cleanUp: undefined,
    bottomOverflow,
    el,
    footerEl,
    headerEl,
    isScrolling,
    scrollEl,
    scrollWatchId: undefined,
    topOverflow,
    redrawOnUpdate: createStream.merge([topOverflow, bottomOverflow, isScrolling])
  };
};
const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }

  const dom = vnode.dom;
  const state = vnode.state;
  state.el(dom);
  state.scrollEl(dom.querySelector(`.${classes.body}`));
  state.footerEl(dom.querySelector(`.${classes.footer}`));
  state.headerEl(dom.querySelector(`.${classes.header}`));
  state.isScrolling.map(() => updateScrollOverflowState(vnode));

  const update = () => {
    updateScrollOverflowState(vnode);
  };

  state.cleanUp = () => unsubscribe("resize", update); // resize: update scroll state ("overflow" borders)


  subscribe("resize", update);
  update();
};
const onUnMount = vnode => vnode.state.cleanUp();
const createProps = (vnode, {
  keys: k
}) => {
  const state = vnode.state;
  const attrs = unpackAttrs(vnode.attrs);
  const withHeader = attrs.header !== undefined || attrs.title !== undefined;
  const withFooter = attrs.footer !== undefined || attrs.footerButtons !== undefined;
  const borders = attrs.borders || "overflow";
  const showTopBorder = borders === "always" || withHeader && borders === "overflow" && state.topOverflow();
  const showBottomBorder = borders === "always" || withFooter && borders === "overflow" && state.bottomOverflow();
  return Object.assign({}, filterSupportedAttributes(attrs, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  {
    className: [classes.component, attrs.fullBleed ? classes.fullBleed : null, showTopBorder ? classes.borderTop : null, showBottomBorder ? classes.borderBottom : null, withHeader ? classes.withHeader : null, withFooter ? classes.withFooter : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.formOptions);
};
const createContent = (vnode, {
  renderer: h,
  keys: k
}) => {
  const state = vnode.state;
  const attrs = unpackAttrs(vnode.attrs);
  return h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.header ? attrs.header : attrs.title ? h("div", {
    className: [classes.header, classes.headerWithTitle].join(" "),
    key: "title"
  }, h("div", {
    className: classes.title
  }, attrs.title)) : null, h("div", {
    className: classes.body,
    key: "body",
    [k.onscroll]: () => {
      state.isScrolling(true);
      clearTimeout(state.scrollWatchId);
      state.scrollWatchId = setTimeout(() => {
        state.isScrolling(false);
      }, SCROLL_WATCH_END_TIMER);
    }
  }, attrs.content || attrs.body || attrs.menu), attrs.footer ? h("div", {
    className: classes.footer,
    key: "footer"
  }, attrs.footer) : attrs.footerButtons ? h("div", {
    className: [classes.footer, classes.footerWithButtons, buttonClasses.row].join(" "),
    key: "footer"
  }, h("div", {
    className: classes.actions
  }, attrs.footerButtons)) : null]);
};

var dialogPane = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});

export { dialogPane as coreDialogPane };
