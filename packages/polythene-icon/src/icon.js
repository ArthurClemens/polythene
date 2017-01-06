import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import { svg } from "polythene-svg";
import "./theme";

const CSS_CLASSES = {
  icon: "pe-icon",
  avatar: "pe-icon--avatar",
  small: "pe-icon--small",
  regular: "pe-icon--regular",
  medium: "pe-icon--medium",
  large: "pe-icon--large"
};

const typeClasses = {
  small: CSS_CLASSES.small,
  regular: CSS_CLASSES.regular,
  medium: CSS_CLASSES.medium,
  large: CSS_CLASSES.large
};

const classForType = (mode = "regular") => typeClasses[mode];

const view = vnode => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        CSS_CLASSES.icon,
        classForType(attrs.type),
        attrs.avatar ? CSS_CLASSES.avatar : null,
        attrs.class
      ].join(" "),
    },
    attrs.events ? attrs.events : null
  );
  const content = attrs.content
    ? attrs.content
    : vnode.children && vnode.children[0]
      ? vnode.children
      : attrs.svg
        ? m(svg, {...attrs.svg})
        : attrs.msvg
          ? m(svg, attrs.msvg)
          : attrs.src
            ? m("img", {src: attrs.src})
            : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const icon = {
  view
};

