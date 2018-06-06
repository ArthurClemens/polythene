import { filterSupportedAttributes, subscribe, unsubscribe, transitionComponent, isServer, pointerEndMoveEvent, deprecation } from "polythene-core";
import classes from "polythene-css-classes/menu";

export const getElement = vnode =>
  vnode.attrs.element || "div";

const DEFAULT_OFFSET_H           = 0;
const DEFAULT_OFFSET_V           = "79%";
const DEFAULT_TYPE               = "floating";
const MIN_SIZE                   = 1.5;
const SHADOW_Z                   = 1;

const positionMenu = (state, attrs) => {
  if (isServer) {
    return;
  }
  if (!attrs.target) {
    return;
  }
  const targetEl = document.querySelector(attrs.target);
  if (!targetEl) {
    return;
  }
  const menuEl = state.dom();
  if (!menuEl) {
    return;
  }

  const contentEl = state.dom().querySelector("." + classes.content);
  const parentRect = menuEl.parentNode.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();
  const attrsOffsetH = attrs.offsetH !== undefined
    ? attrs.offsetH
    : attrs.offset !== undefined
      ? attrs.offset // deprecated
      : DEFAULT_OFFSET_H;
  const attrsOffsetV = attrs.offsetV !== undefined
    ? attrs.offsetV
    : DEFAULT_OFFSET_V;
  const offsetH = attrsOffsetH.toString().indexOf("%") !== -1
    ? Math.round(parseFloat(attrsOffsetH) * 0.01 * targetRect.width)
    : Math.round(parseFloat(attrsOffsetH));
  const offsetV = attrsOffsetV.toString().indexOf("%") !== -1
    ? Math.round(parseFloat(attrsOffsetV) * 0.01 * targetRect.height)
    : Math.round(parseFloat(attrsOffsetV));
  let positionOffsetV = offsetV;

  const attrsOrigin = attrs.origin || "top";
  const origin = attrsOrigin.split(/\W+/).reduce((acc, curr) => (
    acc[curr] = true,
    acc
  ), {});

  const firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];

  if (attrs.reposition) {
    // get the first List Tile to calculate the top position  
    const selectedItem = contentEl.querySelector("." + classes.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      const firstItemRect = firstItem.getBoundingClientRect();
      const selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffsetV = firstItemRect.top - selectedItemRect.top;
    }
    // align to middle of target
    const alignEl = selectedItem || firstItem;
    const alignRect = alignEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    const heightDiff = targetRect.height - alignRect.height;
    positionOffsetV += Math.abs(heightDiff) / 2;
  } else if (attrs.origin) {
    if (origin.top) {
      positionOffsetV += targetRect.top - parentRect.top;
    } else if (origin.bottom) {
      positionOffsetV += parentRect.bottom - targetRect.bottom;
    }
  }

  if (attrs.height) {
    const firstItemHeight = firstItem
      ? firstItem.clientHeight
      : 48; // default List Tile height
    if (attrs.height === "max") {
      const topMargin = positionOffsetV;
      const bottomMargin = firstItemHeight;
      menuEl.style.height = `calc(100% - ${topMargin + bottomMargin}px)`;
    } else {
      const height = attrs.height.toString().indexOf("%") !== -1
        ? attrs.height
        : attrs.height.toString().indexOf("px") !== -1
          ? attrs.height
          : `${attrs.height}px`;
      menuEl.style.height = height;
    }
  }

  // prevent animated changes
  const transitionDuration = menuEl.style.transitionDuration;
  menuEl.style.transitionDuration = "0ms";

  if (menuEl.parentNode) {
    if (origin.right) {
      menuEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
    } else {
      menuEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
    }
    if (origin.bottom) {
      menuEl.style.bottom = positionOffsetV + "px";
    } else {
      menuEl.style.top = positionOffsetV + "px";
    }
    menuEl.style.transformOrigin = attrsOrigin.split(/\W+/).join(" ");
  }

  menuEl.offsetHeight; // force reflow
  menuEl.style.transitionDuration = transitionDuration;
};

const scrollContent = (state, attrs) => {
  if (isServer) {
    return;
  }
  if (!attrs.scrollTarget) {
    return;
  }
  const scrollTargetEl = document.querySelector(attrs.scrollTarget);
  if (!scrollTargetEl) {
    return;
  }
  const contentEl = state.dom().querySelector("." + classes.content);
  contentEl.scrollTop = scrollTargetEl.offsetTop;
};

const transitionOptions = (state, attrs, isShow) => ({
  state,
  attrs,
  isShow,
  beforeTransition: isShow
    ? () => state.update()
    : null,
  domElements: {
    el: state.dom()
  },
  showClass: classes.visible,
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
  const attrs = vnode.attrs;
  if (attrs.offset) {
    deprecation("Menu", "offset", "offsetH");
  }
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
      hideMenu(state, attrs);
    };

    state.update = () => {
      positionMenu(state, attrs);
      scrollContent(state, attrs);
    };

    state.activateDismissTap = () => {
      pointerEndMoveEvent.forEach(evt =>
        document.addEventListener(evt, state.handleDismissTap));
    };

    state.deActivateDismissTap = () => {
      pointerEndMoveEvent.forEach(evt =>
        document.removeEventListener(evt, state.handleDismissTap));
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
        attrs.origin ? classes.origin : null,
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

export const createContent = (vnode, { renderer: h, Shadow }) => {
  const attrs = vnode.attrs;
  const z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
  return h("div",
    {
      className: classes.content,
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