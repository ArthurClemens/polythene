import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const createContent = (vnode, { renderer: h, keys: k, Shadow, IconButton }) => {
  const attrs = vnode.attrs;

  const zOff = attrs.zOff !== undefined ? attrs.zOff : 1;
  const zOn = attrs.zOn !== undefined ? attrs.zOn : 2;
  const z = attrs.checked ? zOn : zOff;
  const raised = attrs.disabled
    ? false
    : attrs.raised !== undefined ? attrs.raised : true;
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
                  z: z,
                  animated: true
                }
              )
              : null
          ]
        ),
        style: attrs.style,
        disabled: attrs.disabled,
        events: { [k.onclick]: attrs.onChange },
        ink: attrs.ink || false,
        inactive: attrs.inactive
      },
      attrs.iconButton
    ))
  ];
};
