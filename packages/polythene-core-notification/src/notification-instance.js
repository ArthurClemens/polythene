import { filterSupportedAttributes, show, hide, isClient, isServer } from "polythene-core";
import { Timer } from "polythene-utilities";
import classes from "./classes";

const DEFAULT_TIME_OUT = 3;

export const getElement = vnode =>
  vnode.attrs.element || "div";

const pauseInstance = state => {
  state.paused(true);
  if (state.timer) {
    state.timer.pause();
  }
};

const unpauseInstance = state => {
  state.paused(false);
  if (state.timer) {
    state.timer.resume();
  }
};

const stopTimer = state => {
  if (state.timer) {
    state.timer.stop();
  }
};

const prepareShow = (state, attrs) => {
  if (!state.containerEl && isClient) {
    // attrs.holderSelector is passed as option to Multiple
    state.containerEl = document.querySelector(attrs.containerSelector || attrs.holderSelector);
  }
  if (!state.containerEl && isClient) {
    console.error("No container element found"); // eslint-disable-line no-console
  }
  if (attrs.containerSelector && state.containerEl) {
    state.containerEl.classList.add(classes.hasContainer);
  }
};

const showInstance = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  stopTimer(state);
  prepareShow(state, attrs);
  const id = attrs.instanceId;
  const transitions = attrs.transitions;
  return show(Object.assign({},
    attrs,
    transitions.show(Object.assign(
      {},
      attrs,
      {
        containerEl: state.containerEl,
        el: state.el,
      }
    ))
  )).then(() => {
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
    // set timer to hide in a few seconds
    const timeout = attrs.timeout;
    if (timeout === 0) {
      // do not time out
    } else {
      const timeoutSeconds = timeout !== undefined
        ? timeout
        : DEFAULT_TIME_OUT;
      state.timer.start(() => {
        hideInstance(state, attrs);
      }, timeoutSeconds);
    }
    state.visible(true);
    state.transitioning(false);
  });
};

const hideInstance = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  stopTimer(state);
  const id = attrs.instanceId;
  const transitions = attrs.transitions;
  return hide(Object.assign({},
    attrs,
    transitions.hide(Object.assign(
      {},
      attrs,
      {
        containerEl: state.containerEl,
        el: state.el,
      }
    ))
  )).then(() => {
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
    state.visible(false);
    state.transitioning(false);
  });
};

const setTitleStyles = titleEl => {
  if (isServer) return;
  const height = titleEl.getBoundingClientRect().height;
  const lineHeight = parseInt(window.getComputedStyle(titleEl).lineHeight, 10);
  const paddingTop = parseInt(window.getComputedStyle(titleEl).paddingTop, 10);
  const paddingBottom = parseInt(window.getComputedStyle(titleEl).paddingBottom, 10);
  if (height > (lineHeight + paddingTop + paddingBottom)) {
    titleEl.classList.add(classes.multilineTitle);
  }
};

export const getInitialState = (vnode, createStream) => {
  const transitioning = createStream(false);
  const paused = createStream(false);
  const mounted = createStream(false);
  const visible = createStream(false);
  return {
    cleanUp:        undefined,
    containerEl:    undefined,
    dismissEl:      undefined,
    el:             undefined,
    timer:          new Timer(),
    paused,
    transitioning,
    visible,
    mounted,
    redrawOnUpdate: createStream.merge([visible])
  };
};

export const onMount = vnode => {
  const dom = vnode.dom;
  if (!dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.el = dom;
  const titleEl = state.el.querySelector(`.${classes.title}`);
  if (titleEl) {
    setTitleStyles(titleEl);
  }
  if (attrs.showInstance && !state.visible()) {
    showInstance(state, attrs);
  }
  state.mounted(true);
};

export const onUnMount = vnode => (
  // vnode.attrs.multipleClear(),
  vnode.state.mounted(false)
);

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.containerSelector ? classes.hasContainer : null,
        attrs.layout === "vertical" ? classes.vertical : classes.horizontal,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
      [k.onclick]: e => e.preventDefault()
    }
  );
};

export const createContent = (vnode, { renderer: h }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (state.mounted() && !state.transitioning()) {
    if (attrs.hideInstance && state.visible()) {
      hideInstance(state, attrs);
    } else if (attrs.showInstance && !state.visible()) {
      showInstance(state, attrs);
    }
  }
  if (attrs.pauseInstance && !state.paused()) {
    pauseInstance(state, attrs);
  } else if (attrs.unpauseInstance && state.paused()) {
    unpauseInstance(state, attrs);
  }

  return h("div",
    {
      className: classes.content,
      style: attrs.style
    },
    attrs.content || [
      attrs.title
        ? h("div",
          { className: classes.title },
          attrs.title
        )
        : null,
      attrs.action
        ? h("div",
          { className: classes.action },
          attrs.action
        )
        : null
    ]
  );
};
