import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/shadow";

export const _Shadow = ({ h, a, ...props }) => {
  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.animated && classes.animated,
        props.className || props[a.class],
      ].join(" ")
    }
  );
  const content = [
    props.before,
    props.content
      ? props.content
      : props.children,
    props.after
  ];
  const shadowDepth = props.shadowDepth !== undefined
    ? props.shadowDepth
    : props.z; // deprecated
  const depthClass = shadowDepth !== undefined
    ? `${classes.depth_n}${Math.min(5, shadowDepth)}`
    : null;
  return h(props.element || "div",
    componentProps,
    [
      content,
      h("div", {
        key: "bottom",
        className: [classes.bottomShadow, depthClass].join(" ")
      }),
      h("div", {
        key: "top",
        className: [classes.topShadow, depthClass].join(" ")
      })
    ]
  );
};
