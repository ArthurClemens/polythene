import { isTouch, touchStartEvent, touchEndEvent, subscribe } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

// Don't export 'element': that will be the wrapped button component (set in polythene-xxx-raised-button)

export const theme = customTheme;

const MAX_Z = 5;

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;
  const zValue = attrs.z !== undefined ? attrs.z : 1;
  const z = createStream(zValue);
  const zBase = createStream(zValue);
  const tapEventsInited = createStream(false);
  return {
    z,
    zBase,
    tapEventsInited,
    redrawOnUpdate: createStream.merge([z])
  };
};

let tapStart,
  tapEndAll = () => {},
  downButtons = [];

subscribe(touchEndEvent, () => tapEndAll());

const animateZ = (which, vnode) => {
  const zBase = vnode.state.zBase();
  const increase = vnode.attrs.increase || 1;
  let z = vnode.state.z();
  if (which === "down" && zBase < MAX_Z) {
    z = Math.min(zBase + increase, MAX_Z);
  } else if (which === "up") {
    z = Math.max(z - increase, zBase);
  }
  if (z !== vnode.state.z()) {
    vnode.state.z(z);
  }
};

const tapHandler = (which, vnode) => {
  if (which === "down") {
    downButtons.push(Object.assign({}, vnode));
  }
  // no z animation on touch
  const animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;
  if (animateOnTap && !isTouch) {
    animateZ(which, vnode);
  }
};

const initTapEvents = vnode => {
  tapStart = () => tapHandler("down", vnode);
  tapEndAll = () => {
    downButtons.map(buttonVnode =>
      tapHandler("up", buttonVnode));
    downButtons = [];
  };
  vnode.dom.addEventListener(touchStartEvent, tapStart);
};

const clearTapEvents = vnode =>
  vnode.dom.removeEventListener(touchStartEvent, tapStart);

export const createProps = (vnode, { renderer: h, Shadow }) => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const children = attrs.children || vnode.children || [];
  return Object.assign(
    {},
    {
      parentClassName: [
        attrs.parentClassName || classes.component
      ].join(" "),
      animateOnTap: false,
      shadowComponent: h(Shadow, { z: state.z, animated: true }),
      children
    },
    attrs
  );
};

export const createContent = () => null;

export const onMount = vnode => {
  if (vnode.dom && !vnode.attrs.disabled && !vnode.attrs.inactive && !vnode.state.tapEventsInited()) {
    initTapEvents(vnode);
    vnode.state.tapEventsInited(true);
  }
};

export const onUnmount = vnode => {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};
