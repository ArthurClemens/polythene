import m from "mithril";
import { icon } from "polythene-icon";
import { ripple } from "polythene-ripple";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

const classes = {
  component:       "pe-list-tile",
  primary:         "pe-list-tile__primary",
  secondary:       "pe-list-tile__secondary",
  content:         "pe-list-tile__content",
  contentFront:    "pe-list-tile__content--front",
  title:           "pe-list-tile__title",
  subtitle:        "pe-list-tile__subtitle",
  highSubtitle:    "pe-list-tile__subtitle--high",
  selected:        "pe-list-tile--selected",
  disabled:        "pe-list-tile--disabled",
  sticky:          "pe-list-tile--sticky",
  hasSubtitle:     "pe-list-tile--subtitle",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasFront:        "pe-list-tile--front",
  isCompact:       "pe-list-tile--compact",
  isHoverable:     "pe-list-tile--hoverable",
  isSelectable:    "pe-list-tile--selectable"
};

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

  return m(element, {
    ...filterSupportedAttributes(attrs),
    ...attrs.url,
    class: classes.primary
  }, [
    frontComp,
    m("div", {
      class: classes.content
    }, [
      attrs.content
        ? attrs.content
        : children && children[0]
          ? children
          : null,
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
      secondaryAttrs.icon ? m(icon, secondaryAttrs.icon) : null,
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
      attrs.selected   ? classes.selected     : null,
      attrs.disabled   ? classes.disabled     : null,
      attrs.sticky     ? classes.sticky       : null,
      attrs.compact    ? classes.isCompact    : null,
      attrs.hoverable  ? classes.isHoverable  : null,
      attrs.selectable ? classes.isSelectable : null,
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
    primaryContent(primaryAttrs, vnode.children),
    attrs.secondary
      ? secondaryContent(attrs.secondary)
      : null
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const listTile = {
  theme: customTheme, // accepts (className, vars)
  view
};

