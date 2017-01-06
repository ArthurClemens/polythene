import m from "mithril";
import { listTile } from "polythene-list-tile";
import { filterSupportedAttributes } from "polythene-core";
import "./theme";

const CSS_CLASSES = {
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
        CSS_CLASSES.component,
        (attrs.borders ? CSS_CLASSES.borders : null),
        (attrs.indentedBorders ? CSS_CLASSES.indentedBorders : null),
        (attrs.hoverable ? CSS_CLASSES.isHoverable : null),
        (attrs.selectable ? CSS_CLASSES.isSelectable : null),
        (attrs.header ? CSS_CLASSES.hasHeader : null),
        (attrs.compact ? CSS_CLASSES.isCompact : null),
        attrs.class
      ].join(" "),
    }
  );
  let headerOpts;
  if (attrs.header) {
    headerOpts = Object.assign({}, attrs.header);
    headerOpts.class = [
      CSS_CLASSES.header,
      headerOpts.class || null
    ].join(" ");
  }
  const content = [
    headerOpts ? m(listTile, headerOpts) : null,
    attrs.tiles
      ? attrs.tiles
      : attrs.content
        ? attrs.content
        : vnode.children && vnode.children[0]
          ? vnode.children
          : null
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const list = {
  view
};
