import m from "mithril";
import button from "polythene-button";
import shadow from "polythene-shadow";
import { isTouch, touchStartEvent, touchEndEvent, subscribe } from "polythene-core";
import { customTheme } from "./theme";

export const classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

const MAX_Z = 5;

let tapStart,
  tapEndAll = () => {},
  downButtons = [];

subscribe(touchEndEvent, () => tapEndAll());

const animateZ = (state, attrs, name) => {
  const zBase = state.zBase;
  const increase = attrs.increase || 1;
  let z = state.z;
  if (name === "down" && zBase !== 5) {
    z = Math.min(z + increase, MAX_Z);
  } else if (name === "up") {
    z = Math.max(z - increase, zBase);
  }
  if (z !== state.z) {
    state.z = z;
    m.redraw(); // show shadow animation
  }
};

const inactivate = (state, attrs) => {
  state.inactive = true;
  m.redraw();
  setTimeout(() => {
    state.inactive = false;
    m.redraw();
  }, attrs.inactivate * 1000);
};

const initTapEvents = (el, state, attrs) => {
  const tapHandler = (state, attrs, name) => {
    if (name === "down") {
      downButtons.push({
        state,
        attrs
      });
    } else
    if (name === "up") {
      if (attrs.inactivate && !state.inactive) {
        inactivate(state, attrs);
      }
    }
    // no z animation on touch
    const animateOnTap = attrs.animateOnTap !== false ? true : false;
    if (animateOnTap && !isTouch) {
      animateZ(state, attrs, name);
    }
  };
  tapStart = () => tapHandler(state, attrs, "down");
  tapEndAll = () => {
    downButtons.map((btn) => {
      tapHandler(btn.state, btn.attrs, "up");
    });
    downButtons = [];
  };
  el.addEventListener(touchStartEvent, tapStart);
};

const clearTapEvents = el => {
  el.removeEventListener(touchStartEvent, tapStart);
};

const view = vnode => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const children = (attrs.children || vnode.children || []).filter(c  => c !== void 0);
  return m(button, Object.assign(
    {},
    {
      parentClass: [
        attrs.parentClass || classes.component
      ].join(" "),
      animateOnTap: false,
      shadowComponent: m(shadow, {z: state.z, animated: true}),
      children: children
    },
    attrs
  ));
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => {
    const z = (vnode.attrs.z !== undefined) ? vnode.attrs.z : 1;
    vnode.state = Object.assign(vnode.state,
      {
        el: undefined,
        zBase: z,
        z: z,
        tapEventsInited: false
      }
    );
  },
  oncreate: vnode => {
    if (!vnode.attrs.disabled && !vnode.state.inactive && !vnode.state.tapEventsInited) {
      vnode.state.el = vnode.dom;
      initTapEvents(vnode.dom, vnode.state, vnode.attrs);
      vnode.state.tapEventsInited = true;
    }
  },
  onremove: vnode => {
    if (vnode.state.tapEventsInited) {
      clearTapEvents(vnode.dom);
    }
  },
  view
};
