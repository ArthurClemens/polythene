import { filterSupportedAttributes } from "polythene-core";
import classes from "./classes";

const actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical:   classes.actionsVertical,
  justified:  classes.actionsJustified
};

const actionClassForLayout = (layout = "horizontal") => actionLayoutClasses[layout];

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      key: "card-actions",
      className: [
        classes.actions,
        actionClassForLayout(attrs.layout),
        attrs.bordered ? classes.actionsBordered : null,
        attrs.tight ? classes.actionsTight : null,
        attrs.className || attrs[k.class]
      ].join(" "),
    }
  );
};

export const createContent = vnode =>
  vnode.attrs.content;
