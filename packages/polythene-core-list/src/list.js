import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const theme = customTheme;

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.borders ? classes.borders : null,
        attrs.indentedBorders ? classes.indentedBorders : null,
        attrs.header ? classes.hasHeader : null,
        attrs.compact ? classes.compact : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    }
  );
};

export const createContent = (vnode, { renderer: h, requiresKeys, keys: k, ListTile }) => {
  const attrs = vnode.attrs;
  let headerOpts;
  if (attrs.header) {
    headerOpts = Object.assign(
      {},
      attrs.header
    );
    headerOpts[k.class] = [
      classes.header,
      headerOpts[k.class] || null
    ].join(" ");
  }
  return [
    headerOpts ? h(ListTile, Object.assign(
      {},
      requiresKeys ? { key: "header" } : null,
      headerOpts
    )) : null,
    attrs.tiles
      ? attrs.tiles
      : attrs.content
        ? attrs.content
        : attrs.children || vnode.children
  ];
};
