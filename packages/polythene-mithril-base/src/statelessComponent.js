import { renderer } from "./renderer";
import { keys } from "./keys";

export const statelessComponent = ({
  createContent,
  createProps,
  element,
}) => {

  const view = vnode => {
    return renderer(
      vnode.attrs.element || element,
      createProps(vnode, { renderer, keys }),
      [
        vnode.attrs.before,
        createContent(vnode, { renderer, keys }),
        vnode.attrs.after
      ]
    );
  };

  return {
    view
  };
};
