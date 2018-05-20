import { isServer, pointerStartMoveEvent, pointerEndMoveEvent } from 'polythene-core';

var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

var MAX_Z = 5;

var tapStart = void 0,
    tapEndAll = function tapEndAll() {},
    downButtons = [];

var animateZ = function animateZ(which, vnode) {
  var zBase = vnode.state.zBase;
  var increase = vnode.attrs.increase || 1;
  var z = vnode.state.z();
  var newZ = which === "down" && zBase < MAX_Z ? Math.min(zBase + increase, MAX_Z) : which === "up" ? Math.max(z - increase, zBase) : z;
  if (newZ !== z) {
    vnode.state.z(newZ);
  }
};

var tapHandler = function tapHandler(which, vnode) {
  if (which === "down") {
    downButtons.push(_extends({}, vnode));
  }
  var animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;
  if (animateOnTap) {
    animateZ(which, vnode);
  }
};

var initTapEvents = function initTapEvents(vnode) {
  if (isServer) return;
  tapStart = function tapStart() {
    return tapHandler("down", vnode);
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (buttonVnode) {
      return tapHandler("up", buttonVnode);
    });
    downButtons = [];
  };
  pointerStartMoveEvent.forEach(function (evt) {
    return vnode.dom.addEventListener(evt, tapStart);
  });
  pointerEndMoveEvent.forEach(function (evt) {
    return document.addEventListener(evt, tapEndAll);
  });
};

var clearTapEvents = function clearTapEvents(vnode) {
  pointerStartMoveEvent.forEach(function (evt) {
    return vnode.dom.removeEventListener(evt, tapStart);
  });
  pointerEndMoveEvent.forEach(function (evt) {
    return document.removeEventListener(evt, tapEndAll);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var zBase = attrs.z !== undefined ? attrs.z : 1;
  var z = createStream(zBase);
  var tapEventsInited = createStream(false);
  return {
    zBase: zBase,
    z: z,
    tapEventsInited: tapEventsInited,
    redrawOnUpdate: createStream.merge([z])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  if (!state.tapEventsInited()) {
    initTapEvents(vnode);
    state.tapEventsInited(true);
  }
};

var onUnMount = function onUnMount(vnode) {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      Shadow = _ref.Shadow;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = attrs.children || vnode.children || [];
  return _extends({}, {
    parentClassName: [attrs.parentClassName || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: h(Shadow, {
      z: attrs.disabled ? 0 : state.z,
      animated: true
    }),
    wash: attrs.wash !== undefined ? attrs.wash : false,
    children: children
  }, attrs);
};

var createContent = function createContent(vnode) {
  return vnode.children;
};

var raisedButton = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});

export { raisedButton as coreRaisedButton };
