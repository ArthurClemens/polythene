import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/shadow";

const DEFAULT_SHADOW_DEPTH = 1;

export const getDepthClass = shadowDepth =>
  shadowDepth !== undefined
    ? `${classes.depth_n}${Math.min(5, shadowDepth)}`
    : DEFAULT_SHADOW_DEPTH;

export const _Shadow = ({ h, a, ...props }) => {
  const depthClass = getDepthClass(props.shadowDepth);
  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        depthClass,
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
  
  return h(props.element || "div",
    componentProps,
    [
      content,
      h("div", {
        className: [classes.bottomShadow].join(" ")
      }),
      h("div", {
        className: [classes.topShadow].join(" ")
      })
    ]
  );
};
