import { filterSupportedAttributes, unpackAttrs, subscribe, unsubscribe } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const element = "form";

export const theme = customTheme;

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

const updateFooterState = vnode => {
  const state = vnode.state;
  const footerEl = state.footerEl();
  if (!footerEl) {
    return;
  }
  const style = window.getComputedStyle(footerEl);
  const height = footerEl.getBoundingClientRect().height;
  const minHeight = parseInt(style.minHeight, 10);
  if (height > minHeight) {
    footerEl.classList.add(classes.footerHigh);
  } else {
    footerEl.classList.remove(classes.footerHigh);
  }
};

export const getInitialState = (vnode, createStream) => {
  const bottomOverflow = createStream(false); 
  const footerEl = createStream();
  const headerEl = createStream();
  const isScrolling = createStream();
  const scrollEl = createStream();
  const topOverflow = createStream(false);
  const el = createStream();
  isScrolling.map(vnode1 =>
    updateScrollOverflowState(vnode1)
  );
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
  const state = vnode.state;
  // const attrs = vnode.attrs;
  state.el(vnode.dom);

  state.scrollEl(vnode.dom.querySelector(`.${classes.body}`));
  state.footerEl(vnode.dom.querySelector(`.${classes.footer}`));
  state.headerEl(vnode.dom.querySelector(`.${classes.title}`));

  const update = () => {
    updateScrollOverflowState(vnode);
    updateFooterState(vnode);
  };

  state.cleanUp = () => (
    unsubscribe("resize", update)
  );

  // resize: update scroll state ("overflow" borders)
  subscribe("resize", update);
  
  updateScrollOverflowState(vnode);
};

export const onUnMount = vnode => (
  vnode.state.cleanUp()
);

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = unpackAttrs(vnode.attrs);
  return Object.assign(
    {},
    filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    {
      className: [
        classes.component,
        state.topOverflow() || attrs.borders ? classes.hasTopOverflow : null,
        state.bottomOverflow() || attrs.borders ? classes.hasBottomOverflow : null,
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
      attrs.title
        ? h("div",
          {
            className: classes.header,
            key: "header"
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
            state.isScrolling(vnode);
            clearTimeout(state.scrollWatchId);
            state.scrollWatchId = setTimeout(() => {
              state.isScrolling(vnode);
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
          h("div",
            { className: classes.actions },
            attrs.footer
          )
        )
        : null
    ]
  );
};
