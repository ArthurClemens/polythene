import { filterSupportedAttributes, subscribe, unsubscribe, show, hide } from "polythene-core";
import classes from "polythene-css-classes/dialog";

export const getElement = vnode =>
  vnode.attrs.element || "div";

const DEFAULT_Z    = 3;

const showDialog = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  state.visible(true);
  const id = state.instanceId;
  
  const transitions = attrs.transitions;
  return show(Object.assign({},
    attrs,
    transitions 
      ? transitions.show({ el: state.el, contentEl: state.contentEl, showDuration: attrs.showDuration, showDelay: attrs.showDelay })
      : { el: state.el, showClass: classes.visible, showDuration: attrs.showDuration, showDelay: attrs.showDelay }
  )).then(() => {
    if (attrs.fromMultipleDidShow) {
      attrs.fromMultipleDidShow(id); // when used with Multiple; this will call attrs.didShow
    } else if (attrs.didShow) {
      attrs.didShow(id); // when used directly
    }
    state.transitioning(false);
  });
};

const hideDialog = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  state.visible(false);
  const id = state.instanceId;

  // Hide dialog
  const transitions = attrs.transitions;
  return hide(Object.assign({},
    attrs,
    transitions
      ? transitions.hide({ el: state.el, contentEl: state.contentEl, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay })
      : { el: state.el, showClass: classes.visible, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay }
  )).then(() => {
    if (attrs.fromMultipleDidHide) {
      attrs.fromMultipleDidHide(id); // when used with Multiple; this will call attrs.didHide
    } else if (attrs.didHide) {
      attrs.didHide(id); // when used directly
    }
    state.transitioning(false);
  });
};

export const getInitialState = (vnode, createStream) => {
  const transitioning = createStream(false);
  const visible = createStream(false);
  return {
    backdropEl: undefined,
    touchEl:    undefined,
    cleanUp:    undefined,
    el:         undefined,
    contentEl:  undefined,
    transitioning,
    visible,
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
  state.touchEl = dom.querySelector(`.${classes.touch}`);
  state.contentEl = dom.querySelector(`.${classes.content}`);

  if (!attrs.inactive) {

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

    if (attrs.show) {
      showDialog(state, attrs);
    }
  }
};

export const onUnMount = vnode => (
  vnode.state.cleanUp && vnode.state.cleanUp()
);

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  return Object.assign(
    {},
    filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    {
      className: [
        attrs.parentClassName || classes.component,
        attrs.fullScreen ? classes.fullScreen : null,
        // classes.visible is set in showDialog though transition
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
      "data-spawn-id": attrs.spawnId,
      "data-instance-id": attrs.instanceId,
      // click backdrop: close dialog
      [k.onclick]: e => {
        if (e.target !== state.el && e.target !== state.backdropEl && e.target !== state.touchEl) {
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

  if (state.el) {
    const visible = state.visible();
    if (attrs.hide && visible) {
      hideDialog(state, attrs);
    } else if (attrs.show && !visible) {
      showDialog(state, attrs);
    }
  }

  const pane = attrs.panes && attrs.panes.length
    ? attrs.panes[0]
    : createPane(vnode, { renderer, Pane } );
  return [
    attrs.backdrop && h("div",
      {
        key: "backdrop",
        className: classes.backdrop
      }
    ),
    h("div",
      {
        key: "touch",
        className: classes.touch
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
