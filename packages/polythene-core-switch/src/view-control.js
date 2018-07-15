import { deprecation } from "polythene-core";

import classes from "polythene-css-classes/switch";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const onMount = ({ attrs }) => {
  if (attrs.zOn !== undefined) {
    deprecation("Switch", "zOn", "shadowDepthOn");
  }
  if (attrs.zOff !== undefined) {
    deprecation("Switch", "zOff", "shadowDepthOff");
  }
};

export const createContent = (vnode, { renderer: h, Shadow, IconButton }) => {
  const attrs = vnode.attrs;

  const shadowDepthOff = attrs.shadowDepthOff !== undefined
    ? attrs.shadowDepthOff
    : attrs.zOff !== undefined 
      ? attrs.zOff // deprecated
      : 1;
  const shadowDepthOn = attrs.shadowDepthOn !== undefined
    ? attrs.shadowDepthOn
    : attrs.zOn !== undefined 
      ? attrs.zOn // deprecated
      : 2; 
  const shadowDepth = attrs.checked ? shadowDepthOn : shadowDepthOff;
  const raised = attrs.raised !== undefined
    ? attrs.raised
    : true; 

  return [
    h("div",
      {
        className: classes.track,
        key: "track"
      }
    ),
    h(IconButton, Object.assign(
      {},
      {
        className: classes.thumb,
        key: "button",
        content: h("div",
          { className: classes.knob },
          [
            attrs.icon ? attrs.icon : null,
            raised
              ? h(Shadow,
                {
                  shadowDepth,
                  animated: true
                }
              )
              : null
          ]
        ),
        style: attrs.style,
        disabled: attrs.disabled,
        events: attrs.events,
        ink: attrs.ink || false,
        inactive: attrs.inactive
      },
      attrs.iconButton
    ))
  ];
};
