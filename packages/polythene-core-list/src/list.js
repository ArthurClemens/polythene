import { filterSupportedAttributes, deprecation } from "polythene-core";
import classes from "polythene-css-classes/list";

export const getElement = vnode =>
  vnode.attrs.element || "div";

const paddingClasses = {
  both: classes.padding,
  bottom: classes.paddingBottom,
  top: classes.paddingTop,
  none: null
};

const paddingClass = (attr = "both") =>
  paddingClasses[attr];

export const onMount = ({ attrs }) => {
  if (attrs.borders) {
    deprecation("List", "borders", "border");
  }
  if (attrs.indentedBorders) {
    deprecation("List", "indentedBorders", "indentedBorder");
  }
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        (attrs.border || attrs.borders) ? classes.border : null,
        (attrs.indentedBorder || attrs.indentedBorders) ? classes.indentedBorder : null,
        attrs.header ? classes.hasHeader : null,
        attrs.compact ? classes.compact : null,
        paddingClass(attrs.padding),
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
  const tiles = attrs.tiles
    ? attrs.tiles
    : attrs.content
      ? attrs.content
      : attrs.children || vnode.children;
  return [
    headerOpts ? h(ListTile, Object.assign(
      {},
      requiresKeys ? { key: "header" } : null,
      attrs.all,
      headerOpts,
      {
        header: true
      }
    )) : null,
    attrs.all
      ? tiles.map(tileOpts => 
        h(ListTile, Object.assign(
          {},
          attrs.all,
          tileOpts
        ))
      )
      : tiles
  ];
};
