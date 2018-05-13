import { isServer, pointerStartMoveEvent, pointerEndMoveEvent } from "polythene-core";
import classes from "polythene-css-classes/raised-button";

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

const MAX_Z = 5;

let tapStart,
  tapEndAll = () => {},
  downButtons = [];

const animateZ = (which, vnode) => {
  const zBase = vnode.state.zBase;
  const increase = vnode.attrs.increase || 1;
  const z = vnode.state.z();
  const newZ = which === "down" && zBase < MAX_Z
    ? Math.min(zBase + increase, MAX_Z)
    : which === "up"
      ? Math.max(z - increase, zBase)
      : z;
  if (newZ !== z) {
    vnode.state.z(newZ);
  }
};

const tapHandler = (which, vnode) => {
  if (which === "down") {
    downButtons.push(Object.assign({}, vnode));
  }
  const animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;
  if (animateOnTap) {
    animateZ(which, vnode);
  }
};

const initTapEvents = vnode => {
  if (isServer) return;
  tapStart = () => tapHandler("down", vnode);
  tapEndAll = () => {
    downButtons.map(buttonVnode =>
      tapHandler("up", buttonVnode));
    downButtons = [];
  };
  pointerStartMoveEvent.forEach(evt =>
    vnode.dom.addEventListener(evt, tapStart));
  pointerEndMoveEvent.forEach(evt =>
    document.addEventListener(evt, tapEndAll));
};

const clearTapEvents = vnode => {
  pointerStartMoveEvent.forEach(evt =>
    vnode.dom.removeEventListener(evt, tapStart));
  pointerEndMoveEvent.forEach(evt =>
    document.removeEventListener(evt, tapEndAll));
};

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;
  const zBase = attrs.z !== undefined ? attrs.z : 1;
  const z = createStream(zBase);
  const tapEventsInited = createStream(false);
  return {
    zBase,
    z,
    tapEventsInited,
    redrawOnUpdate: createStream.merge([z])
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  if (!state.tapEventsInited()) {
    initTapEvents(vnode);
    state.tapEventsInited(true);
  }
};

export const onUnMount = vnode => {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};

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
      shadowComponent: h(Shadow, {
        z: attrs.disabled ? 0 : state.z,
        animated: true
      }),
      wash: attrs.wash !== undefined
        ? attrs.wash
        : false,
      children
    },
    attrs
  );
};

export const createContent = vnode =>
  vnode.children;
