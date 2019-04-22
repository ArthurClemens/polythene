import { filterSupportedAttributes, classForSize } from "polythene-core";
import classes from "polythene-css-classes/icon";

export const _Icon = ({ h, a, SVG, ...props }) => {
  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        classForSize(classes, props.size),
        props.avatar ? classes.avatar : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
    },
    props.events
  );

  const content = props.content
    ? props.content
    : props.svg
      ? h(SVG, props.svg)
      : props.src
        ? h("img", { src: props.src })
        : props.children;

  return h(props.element || "div",
    componentProps,
    content
  );
};
