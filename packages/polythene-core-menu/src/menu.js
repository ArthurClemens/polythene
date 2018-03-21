import { filterSupportedAttributes, subscribe, unsubscribe, transitionComponent, isServer, isTouch } from "polythene-core";
import classes from "polythene-css-classes/menu";

export const getElement = vnode =>
  vnode.attrs.element || "div";

const DEFAULT_ANIMATION_DURATION = .220;
const DEFAULT_OFFSET_H           = 0;
const DEFAULT_TYPE               = "floating";
const MIN_SIZE                   = 1.5;
const OFFSET_V                   = -8;
const SHADOW_Z                   = 1;

const positionMenu = (state, attrs) => {
  if (isServer) {
    return;
  }
  const targetEl = document.querySelector(attrs.target);
  if (!targetEl) {
    return;
  }
  const offsetH = (attrs.offset !== undefined) ? attrs.offset : DEFAULT_OFFSET_H;
  const menuEl = state.dom();
  if (!menuEl) {
    return;
  }
  const contentEl = state.dom().querySelector("." + classes.content);
  const origin = attrs.origin || "top-left";
  let positionOffset = 0;
  if (attrs.reposition) {
    const firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];
    const selectedItem = contentEl.querySelector("." + classes.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      const firstItemRect = firstItem.getBoundingClientRect();
      const selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffset = selectedItemRect.top - firstItemRect.top;
    }
    // align to middle of target
    const alignEl = selectedItem || firstItem;
    const alignRect = alignEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    const heightDiff = alignRect.height - targetRect.height;
    positionOffset += heightDiff / 2;
  }
  const targetRect = targetEl.getBoundingClientRect();
  if (menuEl.parentNode) {
    const parentRect = menuEl.parentNode.getBoundingClientRect();
    const alignLeft =   () => menuEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
    const alignRight =  () => menuEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
    const alignTop =    () => menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + "px";
    const alignBottom = () => menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + "px";
    const alignFn = {
      "top-left":       () => alignTop() && alignLeft(),
      "top-right":      () => alignTop() && alignRight(),
      "bottom-left":    () => alignBottom() && alignLeft(),
      "bottom-right":   () => alignBottom() && alignRight()
    };
    alignFn[origin].call();
  }
};

const transitionOptions = (state, attrs, isShow) => ({
  state,
  attrs,
  isShow,
  beforeTransition: isShow
    ? () => positionMenu(state, attrs)
    : null,
  domElements: {
    el: state.dom()
  },
  showClass: classes.visible,
  defaultDuration: DEFAULT_ANIMATION_DURATION,
});

const showMenu = (state, attrs) =>
  transitionComponent(transitionOptions(state, attrs, true));

const hideMenu = (state, attrs) =>
  transitionComponent(transitionOptions(state, attrs, false));

const unifySize = size =>
  size < MIN_SIZE ? MIN_SIZE : size;

const widthClass = size =>
  classes.width_n + size.toString().replace(".", "-");

const handleSubscriptions = (vnode, which) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (which === "mount") {
    subscribe("resize", state.update);
    subscribe("keydown", state.handleEscape);
    setTimeout(() => {
      state.activateDismissTap();
      showMenu(state, attrs);
    }, 0);
  } else {
    unsubscribe("resize", state.update);
    unsubscribe("keydown", state.handleEscape);
    state.deActivateDismissTap();
  }
};

export const getInitialState = (vnode, createStream) => {
  const dom = createStream(null);
  const visible = createStream(false);
  const transitioning = createStream(false);
  return {
    dom,
    visible,
    transitioning,
    activateDismissTap: undefined, // set in onMount
    deActivateDismissTap: undefined, // set in onMount
    handleDismissTap: undefined, // set in onMount
    handleEscape: undefined, // set in onMount
    update: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([transitioning])
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    state.handleDismissTap = e => {
      if (e.target === state.dom()) {
        return;
      }
      if (e.defaultPrevented) {
        // clicked on .pe-menu__content
        hideMenu(state, attrs);
      } else {
        hideMenu(state, Object.assign({}, attrs, {
          hideDelay: 0
        }));
      }
    };

    state.update = () => {
      positionMenu(state, attrs);
    };

    state.activateDismissTap = () => {
      if (isTouch) {
        document.addEventListener("touchstart", state.handleDismissTap);
      } else {
        document.addEventListener("click", state.handleDismissTap);
      }
    };

    state.deActivateDismissTap = () => {
      if (isTouch) {
        document.removeEventListener("touchstart", state.handleDismissTap);
      } else {
        document.removeEventListener("click", state.handleDismissTap);
      }
    };

    state.handleEscape = e => {
      if (e.key === "Escape" || e.key === "Esc") {
        hideMenu(state, Object.assign(
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
  const type = attrs.type || DEFAULT_TYPE;
  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.permanent ? classes.permanent : null,
        attrs.fullHeight ? classes.fullHeight : null,
        type === "floating" ? classes.floating : null,
        attrs.target ? classes.target : null,
        attrs.size ? widthClass(unifySize(attrs.size)) : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Shadow }) => {
  const attrs = vnode.attrs;
  const z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
  return h("div",
    {
      className: classes.content,
      [k.onclick]: e => e.preventDefault(),
      style: attrs.style
    },
    [
      z > 0 && h(Shadow, {
        z,
        animated: true
      }),
      attrs.content
        ? attrs.content
        : vnode.children
    ]
  );
};