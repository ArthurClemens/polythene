import classes from "polythene-css-classes/switch";

export const _ViewControl = ({ h, a, IconButton, Shadow, ...props }) => {
  const element = props.element || "div";
  const shadowDepthOff =
    props.shadowDepthOff !== undefined
      ? props.shadowDepthOff
      : props.zOff !== undefined
      ? props.zOff // deprecated
      : 1;
  const shadowDepthOn =
    props.shadowDepthOn !== undefined
      ? props.shadowDepthOn
      : props.zOn !== undefined
      ? props.zOn // deprecated
      : 2;
  const shadowDepth = props.checked ? shadowDepthOn : shadowDepthOff;
  const raised = props.raised !== undefined ? props.raised : true;

  const aria = Object.assign(
    {},
    // default:
    { role: "switch" },
    // attrs:
    props.aria,
    // state overrides:
    {
      id: props.id,
      "aria-checked": props.checked.toString(),
    }
  );

  return h(element, null, [
    h("div", {
      className: classes.track,
      key: "track",
    }),
    h(
      IconButton,
      Object.assign(
        {},
        {
          className: classes.thumb,
          key: "button",
          content: h(
            "div",
            {
              className: classes.knob,
              style: props.style,
            },
            [
              props.icon ? props.icon : null,
              raised
                ? h(Shadow, {
                    shadowDepth,
                    animated: true,
                  })
                : null,
            ]
          ),
          disabled: props.disabled,
          events: props.events,
          ink: props.ink || false,
          inactive: props.inactive,
          [a.tabindex]: "0",
          aria,
        },
        props.iconButton
      )
    ),
  ]);
};
