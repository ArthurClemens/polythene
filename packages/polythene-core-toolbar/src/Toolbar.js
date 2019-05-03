import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/toolbar";

export const _Toolbar = ({ h, a, Shadow, ...props }) => {
  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.compact ? classes.compact : null,
        props.fullbleed ? classes.fullbleed : null,
        props.border ? classes.border : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    },
    props.events
  );

  const content = [
    props.before,
    props.content || props.children,
    props.after
  ];

  const shadow = props.shadowDepth !== undefined
    ? h(Shadow, {
      shadowDepth: props.shadowDepth,
      animated: true,
      key: "shadow"
    })
    : null;

  return h(props.element || "div",
    componentProps,
    [
      content,
      shadow
    ]
  );
};
