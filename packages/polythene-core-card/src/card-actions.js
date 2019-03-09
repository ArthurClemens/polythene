import { filterSupportedAttributes, deprecation } from "polythene-core";
import classes from "polythene-css-classes/card";
import buttonClasses from "polythene-css-classes/button";

export const getElement = vnode =>
  vnode.attrs.element || "div";
  
const actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical:   classes.actionsVertical,
  justified:  classes.actionsJustified
};

export const onMount = ({ attrs }) => {
  if (attrs.bordered !== undefined) {
    deprecation("Card", { option: "bordered", newOption: "border" });
  }
};

const actionClassForLayout = (layout = "horizontal") => actionLayoutClasses[layout];

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    attrs.testId && { "data-test-id": attrs.testId },
    {
      key: "card-actions",
      className: [
        classes.actions,
        attrs.layout !== "vertical" ? buttonClasses.row : null,
        actionClassForLayout(attrs.layout),
        (attrs.border || attrs.bordered) ? classes.actionsBorder : null,
        attrs.tight ? classes.actionsTight : null,
        attrs.className || attrs[k.class]
      ].join(" "),
    },
    attrs.events
  );
};

export const createContent = vnode =>
  vnode.attrs.content || vnode.children;
