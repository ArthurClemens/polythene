import m from "mithril";
import { Shadow, IconButton } from "polythene-mithril";
import classes from "./classes";

export const controlView = (checked, attrs) => {
  const zOff = attrs.zOff !== undefined ? attrs.zOff : 1;
  const zOn = attrs.zOn !== undefined ? attrs.zOn : 2;
  const z = checked ? zOn : zOff;
  const raised = attrs.disabled
    ? false
    : attrs.raised !== undefined ? attrs.raised : true;
  return [
    m("div", {
      className: classes.track
    }),
    m(IconButton, Object.assign(
      {},
      {
        className: classes.thumb,
        content: [
          m("div", {
            className: classes.knob
          }, [
            attrs.icon ? attrs.icon : null,
            raised
              ? m(Shadow, {
                z: z,
                animated: true
              })
              : null
          ])
        ],
        style: attrs.style,
        disabled: attrs.disabled,
        events: attrs.events,
        ink: attrs.ink || false
      },
      attrs.selectable !== undefined
        ? { inactive: !attrs.selectable(checked) }
        : null,
      attrs.iconButton
    ))
  ];
};
