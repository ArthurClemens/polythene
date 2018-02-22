import { filterSupportedAttributes, subscribe, unsubscribe, show, hide } from "polythene-core";
import classes from "polythene-css-classes/dialog";
import defaultBackdropTransitions from "./backdrop-transitions";

export const getElement = vnode =>
  vnode.attrs.element || "div";

const DEFAULT_Z    = 3;

const showDialog = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  const id = state.instanceId;
  state.transitioning(true);

  // Show backdrop
  if (attrs.backdrop) {
    const backdropTransitions = attrs.backdropTransitions || defaultBackdropTransitions;
    show(Object.assign({},
      attrs,
      backdropTransitions.show({ el: state.backdropEl, showDuration: attrs.showDuration, showDelay: attrs.showDelay })
    ));
  }

  // Show pane
  const transitions = attrs.transitions;
  return show(Object.assign({},
    attrs,
    transitions.show({ el: state.el, contentEl: state.contentEl, showDuration: attrs.showDuration, showDelay: attrs.showDelay })
  )).then(() => {
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
    state.transitioning(false);
  });
};

const hideDialog = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  const id = state.instanceId;
  state.transitioning(true);

  // Hide backdrop
  if (attrs.backdrop) {
    const backdropTransitions = attrs.backdropTransitions || defaultBackdropTransitions;
    hide(Object.assign({},
      attrs,
      backdropTransitions.hide({ el: state.backdropEl, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay })
    ));
  }

  // Hide pane
  const transitions = attrs.transitions;
  return hide(Object.assign({},
    attrs,
    transitions.hide({ el: state.el, contentEl: state.contentEl, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay })
  )).then(() => {
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
    state.transitioning(false);
  });
};

export const getInitialState = (vnode, createStream) => {
  const transitioning = createStream(false);
  return {
    backdropEl: undefined,
    cleanUp:    undefined,
    el:         undefined,
    contentEl:  undefined,
    transitioning,
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  const dom = vnode.dom;
  state.el = dom;
  state.backdropEl = dom.querySelector(`.${classes.backdrop}`);
  state.contentEl = dom.querySelector(`.${classes.content}`);

  const handleEscape = e => {
    if (attrs.fullScreen || attrs.modal) return;
    if (e.key === "Escape") {
      hideDialog(state, Object.assign({}, attrs, {
        hideDelay: 0
      }));
    }
  };
  
  state.cleanUp = () => (
    unsubscribe("keydown", handleEscape)
  );

  subscribe("keydown", handleEscape);

  if (attrs.showInstance) {
    showDialog(state, attrs);
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
        attrs.fullScreen ? classes.fullScreen : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
      "data-spawn-id": attrs.spawnId,
      "data-instance-id": attrs.instanceId,
      // click backdrop: close dialog
      [k.onclick]: e => {
        if (e.target !== state.el && e.target !== state.backdropEl) {
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

export const createPane = (vnode, { renderer: h, Pane }) => {
  const attrs = vnode.attrs;
  return h(Pane,
    {
      title: attrs.title,
      header: attrs.header,
      body: attrs.content || attrs.body || attrs.menu,
      footer: attrs.footer,
      footerButtons: attrs.footerButtons,
      className: attrs.className,
      style: attrs.style,
      fullBleed: attrs.fullBleed
    }
  );
};

export const createContent = (vnode, { renderer, Shadow, createPane, Pane }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const h = renderer;
  if (attrs.hideInstance) {
    hideDialog(state, attrs);
  }
  const pane = attrs.panes && attrs.panes.length
    ? attrs.panes[0]
    : createPane(vnode, { renderer, Pane} );
  return [
    attrs.backdrop && h("div",
      {
        key: "backdrop",
        className: classes.backdrop
      }
    ),
    h("div",
      {
        className: [
          classes.content,
          attrs.menu ? classes.menuContent : null
        ].join(" "),
        key: "content"
      },
      [
        attrs.fullScreen
          ? null
          : h(Shadow, {
            z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
            animated: true,
            key: "shadow"
          }),
        pane
      ]
    )
  ];
};
