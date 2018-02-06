import classes from "polythene-css-classes/drawer";
import { filterSupportedAttributes, show, hide, isTouch, subscribe, unsubscribe } from "polythene-core";
import defaultTransitions from "./transitions-over-from-left";
import defaultBackdropTransitions from "./backdrop-transitions";

export const getElement = vnode =>
  vnode.attrs.element || "div";

const ANIMATION_DURATION = .220;
const DEFAULT_TYPE       = "coverFromLeft";

const handleSubscriptions = (vnode, which) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (which === "mount") {
    // subscribe("resize", state.update);
    attrs.closeOnEscape && subscribe("keydown", state.handleEscape);
    setTimeout(() => {
      state.activateDismissTap();
    }, 0);
  } else {
    // unsubscribe("resize", state.update);
    attrs.closeOnEscape && unsubscribe("keydown", state.handleEscape);
    state.deActivateDismissTap();
  }
};

const showDrawer = (state, attrs) => {
  if (state.transitioning() || state.visible()) {
    return;
  }
  state.transitioning(true);
  state.visible(true);
  if (attrs.onChange) {
    attrs.onChange({ visible: state.visible(), transitioning: state.transitioning() });
  }
  const transitions = attrs.transitions || defaultTransitions;
  // Show backdrop
  if (attrs.backdrop) {
    const backdropTransitions = attrs.backdropTransitions || defaultBackdropTransitions;
    show(Object.assign({},
      attrs,
      backdropTransitions.show({ el: state.backdropDom(), showDuration: attrs.showDuration || ANIMATION_DURATION, showDelay: attrs.showDelay })
    ));
  }
  // Show pane
  return show(Object.assign({},
    attrs,
    transitions.show({ el: state.dom(), showDuration: attrs.showDuration || ANIMATION_DURATION, showDelay: attrs.showDelay })
  )).then(() => {
    state.transitioning(false);
    if (attrs.onChange) {
      attrs.onChange({ visible: state.visible(), transitioning: state.transitioning() });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    
  });
};

const hideDrawer = (state, attrs) => {
  if (state.transitioning() || !state.visible()) {
    return;
  }
  state.transitioning(true);
  if (attrs.onChange) {
    attrs.onChange({ visible: state.visible(), transitioning: state.transitioning() });
  }
  const transitions = attrs.transitions || defaultTransitions;
  // Hide backdrop
  if (attrs.backdrop) {
    const backdropTransitions = attrs.backdropTransitions || defaultBackdropTransitions;
    hide(Object.assign({},
      attrs,
      backdropTransitions.hide({ el: state.backdropDom(), hideDuration: attrs.hideDuration || ANIMATION_DURATION, hideDelay: attrs.hideDelay })
    ));
  }
  // Hide pane
  return hide(Object.assign({},
    attrs,
    transitions.hide({ el: state.dom(), hideDuration: attrs.hideDuration || ANIMATION_DURATION, hideDelay: attrs.hideDelay })
  )).then(() => {
    state.visible(false);
    state.transitioning(false);
    if (attrs.onChange) {
      attrs.onChange({ visible: state.visible(), transitioning: state.transitioning() });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
  });
};

export const getInitialState = (vnode, createStream) => {
  const dom = createStream(null);
  const backdropDom = createStream(null);
  const transitioning = createStream(false);
  const visible = createStream(null);
  return {
    dom,
    backdropDom,
    transitioning,
    visible,
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
  state.dom(dom.querySelector(`.${classes.panel}`));
  state.backdropDom(dom.querySelector(`.${classes.backdrop}`));

  if (!attrs.permanent) {
    state.handleDismissTap = e => {
      if (e.target !== state.backdropDom()) {
        return;
      }
      if (e.defaultPrevented) {
        // clicked on .pe-drawer
        hideDrawer(state, attrs);
      } else {
        hideDrawer(state, Object.assign({}, attrs, {
          hideDelay: 0
        }));
      }
    };

    state.activateDismissTap = () => {
      if (isTouch) {
        dom.addEventListener("touchstart", state.handleDismissTap);
      } else {
        dom.addEventListener("click", state.handleDismissTap);
      }
    };

    state.deActivateDismissTap = () => {
      if (isTouch) {
        dom.removeEventListener("touchstart", state.handleDismissTap);
      } else {
        dom.removeEventListener("click", state.handleDismissTap);
      }
    };

    state.handleEscape = e => {
      if (e.key === "Escape" || e.key === "Esc") {
        hideDrawer(state, Object.assign(
          {},
          attrs,
          { hideDelay: 0 }
        ));
      }
    };

    handleSubscriptions(vnode, "mount");
  }
};

export const onUnMount = vnode => {
  const attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const type = attrs.type || DEFAULT_TYPE;
  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.menu && attrs.menu.fullHeight ? classes.fullHeight: null,
        classes[type],
        state.visible() ? classes.visible : null,
        attrs.backdrop ? classes.backdropVisible : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Menu }) => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const type = attrs.type || DEFAULT_TYPE;

  if (!state.transitioning()) {
    if (attrs.show === false && state.visible()) {
      hideDrawer(state, attrs);
    } else if (attrs.show === true && !state.visible()) {
      showDrawer(state, attrs);
    }
  }

  return h("div",
    {
      [k.onclick]: e => e.preventDefault(),
    },
    [
      h("div", { className: classes.backdrop }),
      h("div",
        { className: classes.panel },
        h(Menu, Object.assign(
          {},
          attrs.menu,
          {
            permanent: true,
            type
          }
        ))
      )
    ]
  );
};
