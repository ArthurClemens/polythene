import m from "mithril";
import { Icon, ripple } from "polythene-mithril";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

const primaryContent = (attrs, children) => {
  const element = attrs.element
    ? attrs.element
    : attrs.url
      ? "a"
      : "div";
  const contentFrontClass = classes.content + " " + classes.contentFront;
  const frontComp = attrs.front
    ? m("div", {class: contentFrontClass}, attrs.front)
    : attrs.indent
      ? m("div", {class: contentFrontClass})
      : null;
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    attrs.url,
    attrs.events,
    {
      class: classes.primary,
      style: null
    }
  );
  return m(element, props, [
    frontComp,
    m("div", {
      class: classes.content,
      style: attrs.style
    }, [
      attrs.content
        ? attrs.content
        : children,
      attrs.title && !attrs.content
        ? m("div", {
          class: classes.title
        }, attrs.title)
        : null,
      attrs.subtitle
        ? m("div", {
          class: classes.subtitle
        }, attrs.subtitle)
        : null,
      attrs.highSubtitle
        ? m("div", {
          class: classes.subtitle + " " + classes.highSubtitle
        }, attrs.highSubtitle)
        : null
    ])
  ]);
};

const secondaryContent = (secondaryAttrs = {}) => {
  const element = secondaryAttrs.element
    ? secondaryAttrs.element
    : secondaryAttrs.url
      ? "a"
      : "div";
  return m(element,
    {
      ...filterSupportedAttributes(secondaryAttrs),
      ...secondaryAttrs.url,
      class: classes.secondary
    },
    m("div", {
      class: classes.content
    }, [
      secondaryAttrs.icon ? m(Icon, secondaryAttrs.icon) : null,
      secondaryAttrs.content ? secondaryAttrs.content : null
    ])
  );
};

const view = vnode => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const heightClass = attrs.subtitle
    ? classes.hasSubtitle
    : attrs.highSubtitle
      ? classes.hasHighSubtitle
      : attrs.front || attrs.indent
        ? classes.hasFront
        : null;

  const props = {
    ...filterSupportedAttributes(attrs),
    class: [
      classes.component,
      attrs.selected   ? classes.selected : null,
      attrs.disabled   ? classes.disabled : null,
      attrs.sticky     ? classes.sticky : null,
      attrs.compact    ? classes.compact : null,
      attrs.hoverable  ? classes.hoverable : null,
      attrs.selectable ? classes.selectable : null,
      attrs.tone === "dark" ? "pe-dark-tone" : null,
      attrs.tone === "light" ? "pe-light-tone" : null,
      heightClass,
      attrs.class
    ].join(" ")
      // events and url are attached to primary content to not interfere with controls
  };

  const primaryAttrs = {...attrs};
  delete primaryAttrs.id;
  delete primaryAttrs.class;
  const content = [
    attrs.ink && !attrs.disabled
      ? m(ripple, attrs.ripple)
      : null,
    primaryContent(primaryAttrs, attrs.children || vnode.children),
    attrs.secondary
      ? secondaryContent(attrs.secondary)
      : null
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};

