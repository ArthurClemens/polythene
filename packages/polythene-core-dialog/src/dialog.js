import { filterSupportedAttributes, subscribe, unsubscribe, transitionComponent, stylePropEquals, deprecation } from "polythene-core";
import classes from "polythene-css-classes/dialog";

const DEFAULT_SHADOW_DEPTH    = 3;

export const getElement = vnode =>
  vnode.attrs.element || "div";

const isFullScreen = ({ state, attrs }) =>
  attrs.fullScreen || stylePropEquals({
    element: state.el,
    pseudoSelector: ":before",
    prop: "content",
    expected: `"${"fullScreen"}"`
  });

const isModal = ({ state, attrs }) =>
  attrs.modal || stylePropEquals({
    element: state.el,
    pseudoSelector: ":before",
    prop: "content",
    expected: `"${"modal"}"`
  });

const transitionOptions = (state, attrs, isShow) => ({
  state,
  attrs,
  isShow,
  domElements: {
    el: state.el,
    contentEl: state.contentEl,
    backdropEl: state.backdropEl,
  },
  showClass: classes.visible,
  transitionClass: classes.transition,
});

const showDialog = (state, attrs) =>
  transitionComponent(transitionOptions(state, attrs, true));

const hideDialog = (state, attrs) =>
  transitionComponent(transitionOptions(state, attrs, false));

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
    redrawOnUpdate: createStream.merge([transitioning])
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (attrs.z !== undefined) {
    deprecation("Dialog", "z", "shadowDepth");
  }

  const dom = vnode.dom;
  state.el = dom;
  state.backdropEl = dom.querySelector(`.${classes.backdrop}`);
  state.touchEl = dom.querySelector(`.${classes.touch}`);
  state.contentEl = dom.querySelector(`.${classes.content}`);

  if (!attrs.inactive) {

    const handleEscape = e => {
      if (isFullScreen(vnode) || isModal(vnode)) return;
      if (e.key === "Escape" || e.key === "Esc") { // "Esc" for IE11
        const openDialogs = document.querySelectorAll(`.${classes.component}`);
        if (openDialogs[openDialogs.length - 1] === state.el) {
          hideDialog(state, Object.assign({}, attrs, {
            hideDelay: 0
          }));
        }
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
        attrs.fromMultipleClassName,
        attrs.fullScreen ? classes.fullScreen : null,
        attrs.modal ? classes.modal : null,
        attrs.backdrop ? classes.showBackdrop : null,
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
        if (isModal(vnode)) {
          // not allowed
          return;
        }
        hideDialog(state, attrs);
      }
    }
  );
};

export const createPane = (vnode, { renderer: h, Pane }) => {
  const attrs = vnode.attrs;
  return h(Pane, {
    body: attrs.content || attrs.body || attrs.menu || vnode.children,
    borders: attrs.borders,
    className: attrs.className,
    footer: attrs.footer,
    footerButtons: attrs.footerButtons,
    formOptions: attrs.formOptions,
    fullBleed: attrs.fullBleed,
    header: attrs.header,
    style: attrs.style,
    title: attrs.title,
  });
};

export const createContent = (vnode, { renderer, Shadow, createPane, Pane }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const h = renderer;

  if (state.el) {
    const visible = state.visible();
    const transitioning = state.transitioning();
    if (!transitioning) {
      if (attrs.hide && visible) {
        // Use setTimeout to play nice with React's lifecycle functions
        setTimeout(() => hideDialog(state, attrs), 0);
      } else if (attrs.show && !visible) {
        setTimeout(() => showDialog(state, attrs), 0);
      }
    }
  }
  const pane = attrs.panesOptions && attrs.panesOptions.length
    ? h(Pane, attrs.panesOptions[0])
    : attrs.panes && attrs.panes.length
      ? attrs.panes[0]
      : createPane(vnode, { renderer, Pane } );
  const shadowDepth = attrs.shadowDepth !== undefined
    ? attrs.shadowDepth
    : attrs.z; // deprecated
  return [
    h("div",
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
            shadowDepth: shadowDepth !== undefined
              ? shadowDepth
              : DEFAULT_SHADOW_DEPTH,
            animated: true,
            key: "shadow"
          }),
        pane
      ]
    )
  ];
};
