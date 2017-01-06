import m from "mithril";
import { icon } from "polythene-icon";
import { ripple } from "polythene-ripple";
import { filterSupportedAttributes } from "polythene-core";
import "./theme";

const CSS_CLASSES = {
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

  const frontComp = attrs.front
    ? m("div", {
      class: CSS_CLASSES.content + " " + CSS_CLASSES.contentFront
    }, attrs.front)
    : attrs.indent
      ? m("div", {
        class: CSS_CLASSES.content + " " + CSS_CLASSES.contentFront
      })
      : null;

  return m(element, {
    ...filterSupportedAttributes(attrs),
    ...attrs.url,
    class: CSS_CLASSES.primary
  }, [
    frontComp,
    m("div", {
      class: CSS_CLASSES.content
    }, [
      attrs.content
        ? attrs.content
        : children && children[0]
          ? children
          : null,
      attrs.title && !attrs.content
        ? m("div", {
          class: CSS_CLASSES.title
        }, attrs.title)
        : null,
      attrs.subtitle
        ? m("div", {
          class: CSS_CLASSES.subtitle
        }, attrs.subtitle)
        : null,
      attrs.highSubtitle
        ? m("div", {
          class: CSS_CLASSES.subtitle + " " + CSS_CLASSES.highSubtitle
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
      class: CSS_CLASSES.secondary
    },
    m("div", {
      class: CSS_CLASSES.content
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
    ? CSS_CLASSES.hasSubtitle
    : attrs.highSubtitle
      ? CSS_CLASSES.hasHighSubtitle
      : attrs.front || attrs.indent
        ? CSS_CLASSES.hasFront
        : null;

  const props = {
    ...filterSupportedAttributes(attrs),
    class: [
      CSS_CLASSES.component,
      attrs.selected   ? CSS_CLASSES.selected     : null,
      attrs.disabled   ? CSS_CLASSES.disabled     : null,
      attrs.sticky     ? CSS_CLASSES.sticky       : null,
      attrs.compact    ? CSS_CLASSES.isCompact    : null,
      attrs.hoverable  ? CSS_CLASSES.isHoverable  : null,
      attrs.selectable ? CSS_CLASSES.isSelectable : null,
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
  view
};

