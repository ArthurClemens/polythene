import { isServer, pointerStartMoveEvent, pointerEndEvent, subscribe } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

export const theme = customTheme;

const MAX_Z = 5;

let tapStart,
  tapEndAll = () => {},
  downButtons = [];

subscribe(pointerEndEvent, () => tapEndAll());

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
  vnode.dom.addEventListener(pointerStartMoveEvent, tapStart);
};

const clearTapEvents = vnode =>
  vnode.dom.removeEventListener(pointerStartMoveEvent, tapStart);

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
  const state = vnode.state;
  if (vnode.dom && !state.tapEventsInited()) {
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
      children
    },
    attrs
  );
};

export const createContent = () => null;
