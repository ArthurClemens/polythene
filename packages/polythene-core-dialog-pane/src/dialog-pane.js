import { filterSupportedAttributes, unpackAttrs, subscribe, unsubscribe, getStyle } from "polythene-core";
import classes from "polythene-css-classes/dialog-pane";
import buttonClasses from "polythene-css-classes/button";

export const getElement = vnode =>
  vnode.attrs.element || "form";

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

const updateBodyState = vnode => {
  const state = vnode.state;
  const headerEl = state.headerEl();
  const headerHeight = headerEl
    ? headerEl.getBoundingClientRect().height
    : 0;
  const footerEl = state.footerEl();
  const footerHeight = footerEl
    ? footerEl.getBoundingClientRect().height
    : 0;
  const scrollEl = state.scrollEl();
  const paddingTop = parseInt(getStyle({ element: scrollEl, prop: "padding-top" }) || 0, 10);
  const paddingBottom = parseInt(getStyle({ element: scrollEl, prop: "padding-bottom" }) || 0, 10);
  scrollEl.style.maxHeight = `calc(100vh - ${paddingTop + paddingBottom + headerHeight + footerHeight}px)`;
};

export const getInitialState = (vnode, createStream) => {
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

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const dom = vnode.dom;
  const state = vnode.state;
  state.el(dom);

  state.scrollEl(dom.querySelector(`.${classes.body}`));
  state.footerEl(dom.querySelector(`.${classes.footer}`));
  state.headerEl(dom.querySelector(`.${classes.header}`));

  state.isScrolling.map(() =>
    updateScrollOverflowState(vnode)
  );

  const update = () => {
    updateScrollOverflowState(vnode);
    updateBodyState(vnode);
  };

  state.cleanUp = () => (
    unsubscribe("resize", update)
  );

  // resize: update scroll state ("overflow" borders)
  subscribe("resize", update);

  update();
};

export const onUnMount = vnode => (
  vnode.state.cleanUp()
);

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = unpackAttrs(vnode.attrs);
  const borders = attrs.borders || "overflow";
  const showTopBorder = borders === "always" || (borders === "overflow" && state.topOverflow());
  const showBottomBorder = borders === "always" || (borders === "overflow" && state.bottomOverflow());
  const withHeader = attrs.header !== undefined || attrs.title !== undefined;
  const withFooter = attrs.footer !== undefined || attrs.footerButtons !== undefined;
  
  return Object.assign(
    {},
    filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    {
      className: [
        classes.component,
        attrs.fullBleed ? classes.fullBleed : null,
        showTopBorder ? classes.borderTop : null,
        showBottomBorder ? classes.borderBottom : null,
        withHeader ? classes.withHeader : null,
        withFooter ? classes.withFooter : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    },
    attrs.formOptions
  );
};

export const createContent = (vnode, { renderer: h, keys: k }) => {
  const state = vnode.state;
  const attrs = unpackAttrs(vnode.attrs);

  return h("div",
    {
      className: [
        classes.content,
        attrs.menu ? classes.menuContent : null
      ].join(" "),
      style: attrs.style
    },
    [
      attrs.header
        ? attrs.header
        : attrs.title
          ? h("div",
            {
              className: [
                classes.header,
                classes.headerWithTitle
              ].join(" "),
              key: "title"
            },
            h("div",
              { className: classes.title },
              attrs.title
            )
          )
          : null,
      h("div",
        {
          className: classes.body,
          key: "body",
          [k.onscroll]: () => {
            state.isScrolling(true);
            clearTimeout(state.scrollWatchId);
            state.scrollWatchId = setTimeout(() => {
              state.isScrolling(false);
            }, SCROLL_WATCH_END_TIMER);
          }
        },
        attrs.content || attrs.body || attrs.menu
      ),
      attrs.footer
        ? h("div",
          {
            className: classes.footer,
            key: "footer"
          },
          attrs.footer
        )
        : attrs.footerButtons
          ? h("div",
            {
              className: [
                classes.footer,
                classes.footerWithButtons,
                buttonClasses.row
              ].join(" "),
              key: "footer"
            },
            h("div",
              { className: classes.actions },
              attrs.footerButtons
            )
          )
          : null
    ]
  );
};
