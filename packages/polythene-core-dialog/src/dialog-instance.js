/*
TODO
rename:
- el => dom
- topOverflow => hasTopOverflow
- bottomOverflow => hasBottomOverflow
*/
import { filterSupportedAttributes, subscribe, unsubscribe, show, hide } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const element = "form";

export const theme = customTheme;

const SCROLL_WATCH_END_TIMER = 150;
const DEFAULT_Z = 3;

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
  const transitioning = createStream(false);
  const el = createStream();
  isScrolling.map(vnode1 =>
    updateScrollOverflowState(vnode1)
  );
  return {
    bottomOverflow,
    cleanUp: undefined,
    el,
    footerEl,
    headerEl,
    isScrolling,
    scrollEl,
    scrollWatchId: undefined,
    topOverflow,
    transitioning,
    redrawOnUpdate: createStream.merge([topOverflow, bottomOverflow, isScrolling])
  };
};

const showDialog = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  const id = state.instanceId;
  state.transitioning(true);
  const transitions = attrs.transitions || state.transitions;
  return show(Object.assign({},
    attrs,
    transitions.show(state.el(), attrs)
  )).then(() => {
    state.transitioning(false);
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
  });
};

const hideDialog = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  const id = state.instanceId;
  state.transitioning(true);
  const transitions = attrs.transitions || state.transitions;
  return hide(Object.assign({},
    attrs,
    transitions.hide(state.el(), attrs)
  )).then(() => {
    state.transitioning(false);
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
  });
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.el(vnode.dom);

  state.scrollEl(vnode.dom.querySelector(`.${classes.body}`));
  state.footerEl(vnode.dom.querySelector(`.${classes.footer}`));
  state.headerEl(vnode.dom.querySelector(`.${classes.title}`));

  const update = () => {
    updateScrollOverflowState(vnode);
    updateFooterState(vnode);
  };
  
  const handleEscape = e => {
    if (attrs.fullscreen || attrs.modal) return;
    if (e.which === 27) {
      hideDialog(state, Object.assign({}, attrs, {
        hideDelay: 0
      }));
    }
  };
  state.cleanUp = () => (
    unsubscribe("resize", update),
    unsubscribe("keydown", handleEscape)
  );

  // resize: update scroll state ("overflow" borders)
  subscribe("resize", update);
  subscribe("keydown", handleEscape);

  updateScrollOverflowState(vnode);

  if (attrs.show) {
    showDialog(state, attrs).then(() => {
      updateScrollOverflowState(vnode);
      updateFooterState(vnode);
    });
  }
};

export const onUnMount = vnode => (
  vnode.state.cleanUp()
);

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    {
      className: [
        classes.component,
        attrs.fullscreen ? classes.fullscreen : null,
        attrs.backdrop ? classes.hasBackdrop : null,
        state.topOverflow() || attrs.borders ? classes.hasTopOverflow : null,
        state.bottomOverflow() || attrs.borders ? classes.hasBottomOverflow : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
      // click backdrop: close dialog
      [k.onclick]: e => {
        if (e.target !== state.el()) {
          return;
        }
        if (attrs.modal) {
          // not allowed
          return;
        }
        hideDialog(state, Object.assign({}, attrs, {
          hideDelay: 0
        }));
      }
    },
    attrs.formOptions ? attrs.formOptions : null
  );
};

const createBody = (vnode, { state, attrs, h, k }) => {
  // if flex "self-stretch" is not supported, calculate the maximum height
  const bodyattrs = attrs.content || attrs.body || attrs.menu;
  return h("div", {
    className: classes.body,
    [k.onscroll]: () => {
      state.isScrolling(vnode);
      clearTimeout(state.scrollWatchId);
      state.scrollWatchId = setTimeout(() => {
        state.isScrolling(vnode);
      }, SCROLL_WATCH_END_TIMER);
    }
  }, bodyattrs);
};


export const createContent = (vnode, { renderer: h, keys: k, Shadow }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.hide) {
    hideDialog(state, attrs);
  }
  const body = createBody(vnode, { state, attrs, h, k });
  return h("div",
    {
      className: [
        classes.content,
        attrs.menu ? classes.menuContent : null
      ].join(" "),
      style: attrs.style
    },
    [
      attrs.fullscreen
        ? null
        : h(Shadow, {
          z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
          animated: true
        }),
      attrs.fullscreen
        ? null
        : attrs.title
          ? h("div",
              { className: classes.header },
              h("div",
                { className: classes.title },
                attrs.title
              )
            )
          : null,
      body,
      attrs.fullscreen
        ? null
        : attrs.footer
          ? h("div",
              { className: classes.footer },
              h("div",
                { className: classes.actions },
                attrs.footer
              )
            )
          : null
    ]
  );
};
