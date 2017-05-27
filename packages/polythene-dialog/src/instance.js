import m from "mithril";
import { filterSupportedAttributes, subscribe, unsubscribe, show, hide } from "polythene-core";
import dialog from "./dialog";
import { Shadow } from "polythene-mithril";
import { customTheme } from "./theme";
import classes from "./classes";

const SCROLL_WATCH_TIMER = 150;

const updateScrollState = state => {
  const scroller = state.scrollEl;
  if (!scroller) {
    return;
  }
  state.topOverflow = (scroller.scrollTop > 0);
  state.bottomOverflow = (scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
};

const updateFooterState = state => {
  const footerEl = state.footerEl;
  if (footerEl) {
    const style = window.getComputedStyle(footerEl);
    const height = footerEl.getBoundingClientRect().height;
    const minHeight = parseInt(style.minHeight, 10);
    if (height > minHeight) {
      footerEl.classList.add(classes.footerHigh);
    } else {
      footerEl.classList.remove(classes.footerHigh);
    }
  }
};

const showInstance = (state, opts) => {
  const id = state.instanceId;
  state.transitioning = true;
  const transitions = opts.transitions || state.transitions;
  return show(Object.assign({},
    opts,
    transitions.show(state.el, opts)
  )).then(() => {
    state.transitioning = false;
    state.visible = true;
    if (state.didShow) {
      // notify multiple
      state.didShow(id);
      // this will call opts.didShow
    }
  });
};

const hideInstance = (state, opts) => {
  const id = state.instanceId;
  state.transitioning = true;
  const transitions = opts.transitions || state.transitions;
  return hide(Object.assign({},
    opts,
    transitions.hide(state.el, opts)
  )).then(() => {
    dialog.remove(id);
    state.transitioning = false;
    state.visible = false;
    if (state.didHide) {
      // notify multiple
      state.didHide(id);
      // this will call opts.didHide
    }
    setTimeout(m.redraw, 0); // removes remainder of dialog component
  });
};

const createViewContent = (state, opts) => {
  // if flex "self-stretch" is not supported, calculate the maximum height
  const bodyOpts = opts.content || opts.body || opts.menu;
  const updateContentOnScroll = opts.updateContentOnScroll || false;
  const ignoreContent = !updateContentOnScroll && state.isScrolling;
  return m("div", {
    className: classes.body,
    oncreate: ({ dom }) => state.scrollEl = dom,
    onbeforeupdate: !ignoreContent,
    onscroll: () => {
      state.isScrolling = true;
      updateScrollState(state);
      clearTimeout(state.scrollWatchId);
      state.scrollWatchId = setTimeout(() => {
        state.isScrolling = false;
      }, SCROLL_WATCH_TIMER);
    }
  }, bodyOpts);
};

const createView = (state, opts) => {
  const update = () => {
    updateScrollState(state);
    updateFooterState(state);
    m.redraw();
  };
  const handleEscape = e => {
    if (opts.fullscreen || opts.modal) return;
    if (e.which === 27 && !state.transitioning) {
      cleanup();
      hideInstance(state, Object.assign({}, opts, {
        hideDelay: 0
      }));
    }
  };
  const cleanup = () => {
    unsubscribe("resize", update);
    unsubscribe("keydown", handleEscape);
  };
  
  const element = opts.element || "form";
  const props = Object.assign(
    {},
    filterSupportedAttributes(opts, { remove: ["style"] }), // style set in content, and set by show/hide transition
    {
      className: [
        classes.component,
        opts.fullscreen ? classes.fullscreen : null,
        opts.backdrop ? classes.hasBackdrop : null,
        state.topOverflow || opts.borders ? classes.hasTopOverflow : null,
        state.bottomOverflow || opts.borders ? classes.hasBottomOverflow : null,
        state.visible ? classes.visible : null,
        opts.tone === "dark" ? "pe-dark-tone" : null,
        opts.tone === "light" ? "pe-light-tone" : null,
        opts.class
      ].join(" "),
      oncreate: ({ dom }) => {
        state.el = dom;
        // resize: update scroll state ("overflow" borders)
        subscribe("resize", update);
        subscribe("keydown", handleEscape);

        updateScrollState(state);

        showInstance(state, opts).then(() => {
          updateScrollState(state);
          updateFooterState(state);
          if (state.topOverflow || state.bottomOverflow) {
            setTimeout(m.redraw, 0);
          }
        });
      },
      onremove: cleanup,
      // click backdrop: close dialog
      onclick: e => {
        if (e.target !== state.el) {
          return;
        }
        if (opts.modal) {
          // not allowed
          return;
        }
        if (!state.transitioning) {
          hideInstance(state, Object.assign({}, opts, {
            hideDelay: 0
          }));
        }
      }
    },
    opts.formOptions ? opts.formOptions : null
  );
  
  const body = createViewContent(state, opts);
  const content = m("div",
    {
      className: [
        classes.content,
        opts.menu ? classes.menuContent : null
      ].join(" "),
      style: opts.style
    },
    [
      opts.fullscreen
        ? null
        : m(Shadow, {
          z: state.z,
          animated: true
        }),
      opts.fullscreen
        ? null
        : opts.title
          ? m("div",
            {
              className: classes.header,
              oncreate: ({ dom }) => {
                state.headerHeight = dom.scrollHeight;
              }
            },
            m("div", {
              className: classes.title
            }, opts.title))
          : null,
      body,
      opts.fullscreen ? null : opts.footer ? m("div", {
        className: classes.footer,
        oncreate: ({ dom }) => {
          state.footerHeight = dom.scrollHeight;
          state.footerEl = dom;
          updateFooterState(state);
        },
        onupdate: ({ dom }) => (
          state.footerHeight = dom.scrollHeight,
          updateFooterState(state)
        )
      }, [
        m("div", {
          className: classes.actions
        }, opts.footer)
      ]) : null
    ]
  );

  return m(element, props, [opts.before, content, opts.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => {
    const attrs = vnode.attrs;
    const opts = attrs.opts;
    const z = opts.z !== undefined ? opts.z : 3; // shadow depth
    vnode.state = Object.assign(
      vnode.state,
      attrs,
      {
        z, 
        scrollEl:       undefined,
        footerEl:       undefined,
        topOverflow:    false,
        bottomOverflow: false,
        scrollWatchId:  0,
        isScrolling:    false,
        headerHeight:   0,
        footerHeight:   0,
        el:             undefined,
        visible:        false,
        transitioning:  false
      }
    );
  },
  view: ({ state, attrs }) => {
    // attrs contains {id, opts}
    const opts = (typeof attrs.opts === "function")
      ? attrs.opts()
      : attrs.opts;
    if (attrs.hide && !state.transitioning) {
      hideInstance(state, opts);
    }
    return createView(state, opts);
  }
};
