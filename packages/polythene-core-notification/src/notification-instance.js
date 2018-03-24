import { filterSupportedAttributes, transitionComponent, isClient, isServer } from "polythene-core";
import { Timer } from "polythene-utilities";
import classes from "polythene-css-classes/notification";

const DEFAULT_TIME_OUT = 3;

export const getElement = vnode =>
  vnode.attrs.element || "div";

const pause = state => {
  state.paused(true);
  if (state.timer) {
    state.timer.pause();
  }
};

const unpause = state => {
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

const transitionOptions = (state, attrs, isShow) => ({
  state,
  attrs,
  isShow,
  beforeTransition: isShow
    ? () => stopTimer(state)
    : () => stopTimer(state),
  afterTransition: isShow
    ? () => {
      // set timer to hide in a few seconds
      const timeout = attrs.timeout;
      if (timeout === 0) {
        // do not time out
      } else {
        const timeoutSeconds = timeout !== undefined
          ? timeout
          : DEFAULT_TIME_OUT;
        state.timer.start(() => {
          hideNotification(state, attrs);
        }, timeoutSeconds);
      }     
    }
    : null,
  domElements: {
    el: state.el,
    containerEl: state.containerEl,
  },
  showClass: classes.visible,
});

const showNotification = (state, attrs) =>
  transitionComponent(transitionOptions(state, attrs, true));

const hideNotification = (state, attrs) =>
  transitionComponent(transitionOptions(state, attrs, false));

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
  if (attrs.show && !state.visible()) {
    showNotification(state, attrs);
  }
  state.mounted(true);
};

export const onUnMount = vnode => (
  vnode.state.mounted(false)
);

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    {
      className: [
        classes.component,
        // classes.visible is set in showNotification though transition
        attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
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
    if (attrs.hide && state.visible()) {
      hideNotification(state, attrs);
    } else if (attrs.show && !state.visible()) {
      showNotification(state, attrs);
    }
  }
  if (attrs.pause && !state.paused()) {
    pause(state, attrs);
  } else if (attrs.unpause && state.paused()) {
    unpause(state, attrs);
  }

  return h("div",
    {
      className: classes.content,
      style: attrs.style,
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
