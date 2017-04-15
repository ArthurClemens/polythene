import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import svg from "polythene-svg";
import { customTheme } from "./theme";

export const classes = {
  icon:    "pe-icon",
  avatar:  "pe-icon--avatar",
  small:   "pe-icon--small",
  regular: "pe-icon--regular",
  medium:  "pe-icon--medium",
  large:   "pe-icon--large"
};

const typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
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
        classes.icon,
        classForType(attrs.type),
        attrs.avatar ? classes.avatar : null,
        attrs.tone === "dark" ? "pe-dark-theme" : null,
        attrs.tone === "light" ? "pe-light-theme" : null,
        attrs.class
      ].join(" "),
    },
    attrs.events ? attrs.events : null
  );
  const content = attrs.content
    ? attrs.content
    : attrs.svg
      ? m(svg, {...attrs.svg})
      : attrs.msvg
        ? m(svg, attrs.msvg)
        : attrs.src
          ? m("img", {src: attrs.src})
          : attrs.children || vnode.children;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};

