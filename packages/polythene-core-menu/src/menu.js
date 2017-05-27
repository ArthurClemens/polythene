import { filterSupportedAttributes, subscribe, unsubscribe, show, hide } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const element = "div";

export const theme = customTheme;

const SHADOW_Z         = 1;
const OFFSET_V         = -8;
const DEFAULT_OFFSET_H = 16;
const MIN_SIZE         = 1.5;

export const getInitialState = (vnode, createStream) => {
  const dom = createStream();
  return { dom };
};

const positionMenu = (state, attrs) => {
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
  attrs.setTransitioning(true);
  return show(Object.assign({},
    attrs, {
      el: state.dom(),
      showClass: classes.visible
    }
  )).then(() => {
    attrs.setTransitioning(false);
    attrs.setVisible(true);
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
  });
};

const hideMenu = (state, attrs) => {
  attrs.setTransitioning(true);
  return hide(Object.assign({},
    attrs, {
      el: state.dom(),
      showClass: classes.visible
    }
  )).then(() => {
    attrs.setTransitioning(false);
    attrs.setVisible(false);
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
  });
};

const unifySize = size =>
  size < MIN_SIZE ? MIN_SIZE : size;

const widthClass = size =>
  classes.width_n + size.toString().replace(".", "-");

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

const handleSubscriptions = (vnode, which) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  const update = () => {
    positionMenu(state, attrs);
  };

  const handleDismissTap = e => {
    if (e.target === state.dom()) {
      return;
    }
    deActivateDismissTap();
    if (e.defaultPrevented) {
      // clicked on .pe-menu__content
      hideMenu(state, attrs);
    } else {
      hideMenu(state, Object.assign({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  const listenEl = document.body;

  const activateDismissTap = () => {
    listenEl.addEventListener("click", handleDismissTap);
  };

  const deActivateDismissTap = () => {
    listenEl.removeEventListener("click", handleDismissTap);
  };

  const handleEscape = e => {
    if (e.which === 27) {
      hideMenu(state, Object.assign(
        {},
        attrs,
        { hideDelay: 0 }
      ));
    }
  };

  if (which === "mount") {
    subscribe("resize", update);
    subscribe("keydown", handleEscape);
    setTimeout(() => {
      activateDismissTap();
      showMenu(state, attrs);
    }, 0);
  } else if (which === "unmount") {
    unsubscribe("resize", update);
    unsubscribe("keydown", handleEscape);
    deActivateDismissTap();
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
    handleSubscriptions(vnode, "mount");
  }
  positionMenu(state, attrs);
};

export const onUnMount = vnode => {
  const attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
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
