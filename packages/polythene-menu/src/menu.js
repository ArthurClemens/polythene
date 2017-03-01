import m from "mithril";
import shadow from "polythene-shadow";
import { filterSupportedAttributes, subscribe, unsubscribe, show, hide } from "polythene-core";
import { customTheme } from "./theme";

export const classes = {
  component:   "pe-menu",
  content:     "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target:      "pe-menu__target",
  visible:     "pe-menu--visible",
  permanent:   "pe-menu--permanent",
  width_n:     "pe-menu--width-",
  width_auto:  "pe-menu--width-auto",

  // lookup
  listTile:         "pe-list-tile",
  selectedListTile: "pe-list-tile--selected"
};

const SHADOW_Z         = 1;
const OFFSET_V         = -8;
const DEFAULT_OFFSET_H = 16;
const MIN_SIZE         = 1.5;

const positionMenu = (state, attrs) => {
  if (!attrs.target) {
    return;
  }
  const targetEl = document.querySelector("#" + attrs.target);
  if (!targetEl) {
    return;
  }
  const offsetH = (attrs.offset !== undefined) ? attrs.offset : DEFAULT_OFFSET_H;
  const menuEl = state.el;
  if (!menuEl) {
    return;
  }
  const contentEl = state.el.querySelector("." + classes.content);
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
  state.isTransitioning = true;
  return show(Object.assign({},
    attrs, {
      el: state.el,
      showClass: classes.visible
    }
  )).then(() => {
    state.isTransitioning = false;
    state.visible = true;
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
  });
};

const hideMenu = (state, attrs) => {
  state.isTransitioning = true;
  return hide(Object.assign({},
    attrs, {
      el: state.el,
      showClass: classes.visible
    }
  )).then(() => {
    state.isTransitioning = false;
    state.visible = false;
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    m.redraw(); // removes remainder of drawn component
  });
};

const unifySize = size =>
  size < MIN_SIZE ? MIN_SIZE : size;

const widthClass = size =>
  classes.width_n + size.toString().replace(".", "-");

const createView = vnode => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const listenEl = document.body;

  const activateDismissTap = () => {
    listenEl.addEventListener("click", handleDismissTap);
  };

  const deActivateDismissTap = () => {
    listenEl.removeEventListener("click", handleDismissTap);
  };

  const handleDismissTap = e => {
    if (e.target === state.el) {
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

  const update = () => {
    positionMenu(state, attrs);
    m.redraw();
  };

  const handleEscape = e => {
    if (e.which === 27) {
      hideMenu(state, Object.assign({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  const element = attrs.element || "div";
  const props = Object.assign(
    {}, 
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.permanent ? classes.permanent : null,
        attrs.target ? classes.target : null,
        attrs.size ? widthClass(unifySize(attrs.size)) : null,
        attrs.class
      ].join(" "),
      oncreate: ({dom}) => {
        state.el = dom;
        if (!attrs.permanent) {
          subscribe("resize", update);
          subscribe("keydown", handleEscape);
          setTimeout(() => {
            activateDismissTap();
            showMenu(state, attrs);
          }, 0);
        }
        positionMenu(state, attrs);
      },
      onremove: () => {
        unsubscribe("resize", update);
        unsubscribe("keydown", handleEscape);
        if (!attrs.permanent) {
          deActivateDismissTap();
        }
      }
    }
  );
  const content = m("div", {
    class: classes.content,
    onclick: e => e.preventDefault()
  }, [
    state.z > 0 && m(shadow, {
      z: state.z,
      animated: true
    }),
    attrs.content
      ? attrs.content
      : vnode.children
  ]);
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => {
    const attrs = vnode.attrs;
    vnode.state = Object.assign(vnode.state, {
      z: attrs.z !== undefined ? attrs.z : SHADOW_Z,
      el: null,
      isTransitioning: false,
      visible: attrs.permanent || false
    });
  },
  view: vnode => {
    if (vnode.attrs.show) {
      vnode.state.visible = true;
    }
    return vnode.state.visible
      ? createView(vnode)
      : m("span", {
        class: classes.placeholder
      });
  }
};

