import { filterSupportedAttributes, processDataset } from "polythene-core";
import classes from "polythene-css-classes/toolbar";

export const _ToolbarTitle = ({ h, a, ...props }) => {
  const element = props.element ? props.element : props.url ? "a" : "div";
  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    processDataset(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.title,
        props.indent ? classes.indentedTitle : null,
        props.center ? classes.centeredTitle : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
    },
    props.events,
    props.url
  );
  const content = props.text
    ? props.text
    : props.content
    ? props.content
    : props.children;

  return h(element, componentProps, content);
};
