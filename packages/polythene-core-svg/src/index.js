import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/svg";

export const _SVG = ({ h, a, useEffect, useState, getRef, ...props }) => {
  const [domElement, setDomElement] = useState();

  useEffect(
    () => {
      if (!domElement) {
        return;
      }
      // Prevent that SVG gets keyboard focus
      const svgElement = domElement.querySelector("svg");
      if (svgElement) {
        svgElement.setAttribute("focusable", "false");
      }
    },
    [domElement]
  );
  
  const componentProps = Object.assign({},
    filterSupportedAttributes(props),
    getRef(dom => dom && !domElement && (
      setDomElement(dom),
      props.getRef && props.getRef(dom)
    )),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
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
    content
  );
};
