import { filterSupportedAttributes, subscribe, unsubscribe, show, hide, isServer } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const theme = customTheme;

const SHADOW_Z         = 1;
const OFFSET_V         = -8;
const DEFAULT_OFFSET_H = 16;
const MIN_SIZE         = 1.5;

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
  const reposition = attrs.reposition === false ? false : true;
  let positionOffset = 0;
  if (reposition) {
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

const showMenu = (state, attrs) => {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  positionMenu(state, attrs);
  const transitions = attrs.transitions;
  const el = state.dom();
  return show(Object.assign({},
    attrs,
    transitions
      ? transitions.show(el, attrs)
      : {
        el,
        showClass: classes.visible
      }
    )
  ).then(() => {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

const hideMenu = (state, attrs) => {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  const transitions = attrs.transitions;
  const el = state.dom();
  return hide(Object.assign({},
    attrs,
    transitions
      ? transitions.hide(el, attrs)
      : {
        el,
        showClass: classes.visible
      }
    )
  ).then(() => {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

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
      document.body.addEventListener("click", state.handleDismissTap);
    };

    state.deActivateDismissTap = () => {
      document.body.removeEventListener("click", state.handleDismissTap);
    };

    state.handleEscape = e => {
      if (e.key === "Escape") {
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

export const getInitialState = (vnode, createStream) => {
  const dom = createStream();
  const visible = createStream(false);
  return {
    dom,
    visible,
    activateDismissTap: undefined, // set in onMount
    deActivateDismissTap: undefined, // set in onMount
    handleDismissTap: undefined, // set in onMount
    handleEscape: undefined, // set in onMount
    update: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([visible])
  };
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.permanent ? classes.permanent : null,
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
