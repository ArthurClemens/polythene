import m from "mithril";
import { show, hide, filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import { Timer } from "polythene-utilities";
import classes from "./classes";

const DEFAULT_TIME_OUT = 3;

const pauseInstance = state => {
  state.isPaused = true;
  if (state.timer) {
    state.timer.pause();
  }
};

const unpauseInstance = state => {
  state.isPaused = false;
  if (state.timer) {
    state.timer.resume();
  }
};

const stopTimer = state => {
  if (state.timer) {
    state.timer.stop();
  }
};

const prepareShow = (state, opts) => {
  state.containerEl = state.containerEl || document.querySelector(opts.containerSelector || state.element);
  if (opts.containerSelector) {
    const holderEl = state.containerEl.querySelector(state.element);
    holderEl.classList.add(classes.hasContainer);
  }
};

const showInstance = (state, opts) => {
  prepareShow(state, opts);
  stopTimer(state);
  state.transitioning = true;
  const transitions = opts.transitions || state.transitions;
  return show(Object.assign({},
    opts,
    transitions.show(state.containerEl, opts)
  )).then(() => {
    state.transitioning = false;
    if (state.didShow) {
      // notify multiple
      state.didShow(state.instanceId);
      // this will call opts.didShow
    }
    // set timer to hide in a few seconds
    const timeout = opts.timeout;
    if (timeout === 0) {
      // do not time out
    } else {
      const timeoutSeconds = timeout !== undefined
        ? timeout
        : DEFAULT_TIME_OUT;
      state.timer = new Timer(() => {
        hideInstance(state, opts);
      }, timeoutSeconds);
    }
  });
};

const hideInstance = (state, opts) => {
  stopTimer(state);
  const id = state.instanceId;
  state.transitioning = true;
  const transitions = opts.transitions || state.transitions;
  return hide(Object.assign({},
    opts,
    transitions.hide(state.containerEl, opts)
  )).then(() => {
    stopTimer(state);
    state.transitioning = false;
    if (state.didHide) {
      // notify multiple
      state.didHide(id);
      // this will call opts.didHide
    }
    m.redraw(); // removes remainder of drawn component
  });
};

const createView = (state, opts) => {
  const element = opts.element || "div";
  const props = Object.assign({},
    filterSupportedAttributes(opts),
    {
      className: [
        state.class,
        opts.tone === "light" ? null : "pe-dark-tone", // default dark tone
        opts.tone === "light" ? "pe-light-tone" : null,
        opts.containerSelector ? classes.hasContainer : null,
        opts.layout === "vertical" ? classes.vertical : classes.horizontal,
        opts.tone === "dark" ? "pe-dark-tone" : null,
        opts.tone === "light" ? "pe-light-tone" : null,
        opts.class
      ].join(" "),
      oncreate: ({ dom }) => {
        state.el = dom;
        showInstance(state, opts);
      },
      onclick: e => e.preventDefault()
    }
  );

  const content = m("div",
    {
      className: classes.content
    },
    opts.content || [
      opts.title
        ? m("div", {
          className: classes.title,
          oncreate: ({ dom }) => {
            const height = dom.getBoundingClientRect().height;
            const lineHeight = parseInt(window.getComputedStyle(dom).lineHeight, 10);
            const paddingTop = parseInt(window.getComputedStyle(dom).paddingTop, 10);
            const paddingBottom = parseInt(window.getComputedStyle(dom).paddingBottom, 10);
            if (height > (lineHeight + paddingTop + paddingBottom)) {
              dom.classList.add(classes.multilineTitle);
            }
          }
        }, opts.title)
        : null,
      opts.action
        ? m("div", { className: classes.action }, [ opts.action ])
        : null
    ]
  );
  return m(element, props, content);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => {
    const attrs = vnode.attrs;
    vnode.state = Object.assign(
      vnode.state,
      attrs,
      {
        el:            null,
        containerEl:   null,
        dismissEl:     null,
        transitioning: false,
        timer:         null,
        isPaused:      false
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
    if (attrs.pause && !state.isPaused) {
      pauseInstance(state, attrs);
    } else if (attrs.unpause && state.isPaused) {
      unpauseInstance(state, attrs);
    }
    return createView(state, opts);
  }
};
