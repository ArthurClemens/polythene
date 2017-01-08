import m from "mithril";
import { listTile } from "polythene-list-tile";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

const classes = {
  component: "pe-list",
  header: "pe-list__header",
  borders: "pe-list--borders",
  indentedBorders: "pe-list--borders-indented",
  hasHeader: "pe-list--header",
  isCompact: "pe-list--compact",
  isHoverable: "pe-list--hoverable",
  isSelectable: "pe-list--selectable"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        (attrs.borders ? classes.borders : null),
        (attrs.indentedBorders ? classes.indentedBorders : null),
        (attrs.hoverable ? classes.isHoverable : null),
        (attrs.selectable ? classes.isSelectable : null),
        (attrs.header ? classes.hasHeader : null),
        (attrs.compact ? classes.isCompact : null),
        attrs.class
      ].join(" "),
    }
  );
  let headerOpts;
  if (attrs.header) {
    headerOpts = Object.assign({}, attrs.header);
    headerOpts.class = [
      classes.header,
      headerOpts.class || null
    ].join(" ");
  }
  const children = vnode.children.length && vnode.children || attrs.children;
  const content = [
    headerOpts ? m(listTile, headerOpts) : null,
    attrs.tiles
      ? attrs.tiles
      : attrs.content
        ? attrs.content
        : children && children[0]
          ? children
          : null
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const list = {
  theme: customTheme, // accepts (className, vars)
  view
};
