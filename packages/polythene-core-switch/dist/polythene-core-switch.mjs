import { deprecation } from 'polythene-core';

var classes = {
  component: "pe-switch-control",
  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

// Props to be passed to a selection control

const createProps = vnode => {
  const attrs = vnode.attrs;
  return Object.assign({}, attrs, {
    selectable: attrs.selectable || (() => true),
    // default: always selectable, regardless of the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

var _switch = /*#__PURE__*/Object.freeze({
  createProps: createProps
});

const getElement = vnode => vnode.attrs.element || "div";
const onMount = ({
  attrs
}) => {
  if (attrs.zOn !== undefined) {
    deprecation("Switch", {
      option: "zOn",
      newOption: "shadowDepthOn"
    });
  }

  if (attrs.zOff !== undefined) {
    deprecation("Switch", {
      option: "zOff",
      newOption: "shadowDepthOff"
    });
  }
};
const createContent = (vnode, {
  renderer: h,
  Shadow,
  IconButton
}) => {
  const attrs = vnode.attrs;
  const shadowDepthOff = attrs.shadowDepthOff !== undefined ? attrs.shadowDepthOff : attrs.zOff !== undefined ? attrs.zOff // deprecated
  : 1;
  const shadowDepthOn = attrs.shadowDepthOn !== undefined ? attrs.shadowDepthOn : attrs.zOn !== undefined ? attrs.zOn // deprecated
  : 2;
  const shadowDepth = attrs.checked ? shadowDepthOn : shadowDepthOff;
  const raised = attrs.raised !== undefined ? attrs.raised : true;
  return [h("div", {
    className: classes.track,
    key: "track"
  }), h(IconButton, Object.assign({}, {
    className: classes.thumb,
    key: "button",
    content: h("div", {
      className: classes.knob
    }, [attrs.icon ? attrs.icon : null, raised ? h(Shadow, {
      shadowDepth,
      animated: true
    }) : null]),
    style: attrs.style,
    disabled: attrs.disabled,
    events: attrs.events,
    ink: attrs.ink || false,
    inactive: attrs.inactive
  }, attrs.iconButton))];
};

var viewControl = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  onMount: onMount,
  createContent: createContent
});

export { _switch as coreSwitch, viewControl };
