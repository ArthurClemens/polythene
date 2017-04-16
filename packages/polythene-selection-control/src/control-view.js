import m from "mithril";
import icon from "polythene-icon";
import iconButton from "polythene-icon-button";
import classes from "./classes";

const createIcon = (onOffType, attrs) => (
  // if attrs.iconOn/Off is passed, use that icon options object and ignore size
  // otherwise create a new object
  Object.assign(
    {},
    attrs[onOffType]
      ? attrs[onOffType]
      : { msvg: attrs.theme[onOffType] },
    { class: attrs.class },
    attrs.icon,
    attrs.size
      ? { type: attrs.size }
      : null
  )
);

export const controlView = (checked, attrs) =>
  m("div", {
    class: classes.box
  },
  m(iconButton, Object.assign(
    {},
    {
      element: "div",
      class: classes.button,
      content: [
        m(icon, createIcon("iconOn", Object.assign(
          {},
          attrs,
          { class: classes.buttonOn }
        ))),
        m(icon, createIcon("iconOff", Object.assign(
          {},
          attrs,
          { class: classes.buttonOff }
        )))
      ],
      ripple: { center: true },
      disabled: attrs.disabled,
      events: attrs.events
    },
    attrs.selectable !== undefined
      ? {inactive: !attrs.selectable(checked)}
      : null,
    attrs.iconButton
  )));

