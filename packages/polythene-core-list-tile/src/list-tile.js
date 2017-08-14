import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const getElement = () => "div"; // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content

export const theme = customTheme;

const primaryContent = (h, k, requiresKeys, attrs, children) => {
  const element = attrs.element
    ? attrs.element
    : attrs.url
      ? "a"
      : "div";
  const contentFrontClass = [
    classes.content,
    classes.contentFront,
    attrs.compactFront ? classes.compactFront : null,
  ].join(" ");
  const frontComp = attrs.front
    ? h("div", Object.assign(
      {},
      requiresKeys ? { key: "front" } : null,
      { className: contentFrontClass }
    ), attrs.front)
    : attrs.indent
      ? h("div", Object.assign(
        {},
        requiresKeys ? { key: "front" } : null,
        { className: contentFrontClass }
      ))
      : null;
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    attrs.url,
    attrs.events,
    {
      className: classes.primary,
      style: null,
      [[k.tabindex]]: attrs[k.tabindex] || 0
    }
  );
  return h(element, props, [
    frontComp,
    h("div",
      {
        className: classes.content,
        style: attrs.style
      },
      [
        attrs.content
          ? Object.assign(
            {},
            requiresKeys ? { key: "content" } : null,
            attrs.content
          )
          : children,
        attrs.title && !attrs.content
          ? h("div", Object.assign(
            {},
            requiresKeys ? { key: "title" } : null,
            { className: classes.title }
          ), attrs.title)
          : null,
        attrs.subtitle
          ? h("div", Object.assign(
            {},
            requiresKeys ? { key: "subtitle" } : null,
            { className: classes.subtitle }
          ), attrs.subtitle)
          : null,
        attrs.highSubtitle
          ? h("div", Object.assign(
            {},
            requiresKeys ? { key: "high-subtitle" } : null,
            { className: classes.subtitle + " " + classes.highSubtitle }
          ), attrs.highSubtitle)
          : null
      ]
    )
  ]);
};

const secondaryContent = (h, requiresKeys, Icon, secondaryAttrs = {}) => {
  const element = secondaryAttrs.element
    ? secondaryAttrs.element
    : secondaryAttrs.url
      ? "a"
      : "div";
  return h(element,
    Object.assign(
      {},
      secondaryAttrs.url,
      {
        className: classes.secondary,
      },
      requiresKeys ? { key: "secondary" } : null,
      filterSupportedAttributes(secondaryAttrs)
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
    filterSupportedAttributes(attrs, { remove: ["tabindex", "tabIndex"] }), // tab index set in primary or secondary content
    {
      className: [
        classes.component,
        attrs.selected     ? classes.selected : null,
        attrs.disabled     ? classes.disabled : null,
        attrs.sticky       ? classes.sticky : null,
        attrs.compact      ? classes.compact : null,
        attrs.hoverable    ? classes.hoverable : null,
        attrs.selectable   ? classes.selectable : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        heightClass,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
    // events and url are attached to primary content to not interfere with controls
  );
};

export const createContent = (vnode, { renderer: h, requiresKeys, keys: k, Ripple, Icon }) => {
  const attrs = vnode.attrs;
  const primaryAttrs = Object.assign(
    {},
    requiresKeys ? { key: "primary" } : null,
    attrs
  );
  delete primaryAttrs.id;
  delete primaryAttrs[k.class];
  return [
    attrs.ink && !attrs.disabled
      ? h(Ripple, Object.assign({}, attrs.ripple, requiresKeys ? { key: "ripple" } : null))
      : null,
    primaryContent(h, k, requiresKeys, primaryAttrs, attrs.children || vnode.children),
    attrs.secondary
      ? secondaryContent(h, requiresKeys, Icon, attrs.secondary)
      : null
  ];
};

