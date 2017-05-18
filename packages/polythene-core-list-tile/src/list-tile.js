import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const element = "div";

export const theme = customTheme;

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  const heightClass = attrs.subtitle
    ? classes.hasSubtitle
    : attrs.highSubtitle
      ? classes.hasHighSubtitle
      : attrs.front || attrs.indent
        ? classes.hasFront
        : null;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
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
        attrs.className || attrs[k.class],
      ].join(" ")
    }
    // events and url are attached to primary content to not interfere with controls
  );
};

const primaryContent = (h, attrs, children) => {
  const element = attrs.element
    ? attrs.element
    : attrs.url
      ? "a"
      : "div";
  const contentFrontClass = classes.content + " " + classes.contentFront;
  const frontComp = attrs.front
    ? h("div", { className: contentFrontClass }, attrs.front)
    : attrs.indent
      ? h("div", { className: contentFrontClass })
      : null;
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    attrs.url,
    attrs.events,
    {
      className: classes.primary,
      style: null
    }
  );
  return h(element, props, [
    frontComp,
    h("div", {
      className: classes.content,
      style: attrs.style
    }, [
      attrs.content
        ? attrs.content
        : children,
      attrs.title && !attrs.content
        ? h("div", { className: classes.title }, attrs.title)
        : null,
      attrs.subtitle
        ? h("div", { className: classes.subtitle }, attrs.subtitle)
        : null,
      attrs.highSubtitle
        ? h("div", { className: classes.subtitle + " " + classes.highSubtitle }, attrs.highSubtitle)
        : null
    ])
  ]);
};

const secondaryContent = (h, Icon, secondaryAttrs = {}) => {
  const element = secondaryAttrs.element
    ? secondaryAttrs.element
    : secondaryAttrs.url
      ? "a"
      : "div";
  return h(element,
    Object.assign(
      {},
      filterSupportedAttributes(secondaryAttrs),
      secondaryAttrs.url,
      {
        className: classes.secondary
      }
    ),
    h("div",
      { className: classes.content },
      [
        secondaryAttrs.icon ? h(Icon, secondaryAttrs.icon) : null,
        secondaryAttrs.content ? secondaryAttrs.content : null
      ]
    )
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Ripple, Icon }) => {
  const attrs = vnode.attrs;
  const primaryAttrs = Object.assign({}, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs[k.class];
  return [
    attrs.ink && !attrs.disabled
      ? h(Ripple, attrs.ripple)
      : null,
    primaryContent(h, primaryAttrs, attrs.children || vnode.children),
    attrs.secondary
      ? secondaryContent(h, Icon, attrs.secondary)
      : null
  ];
};

