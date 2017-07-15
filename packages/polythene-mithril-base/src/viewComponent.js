import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

export const ViewComponent = ({
  createContent = () => {},
  createProps = () => {},
  getElement = () => "div",
  component = null,
  view = null,
  onMount = () => {},
  onUnMount = () => {},
}) => {

  const render = vnode =>
    renderer(
      component || getElement(vnode),
      createProps(vnode, { renderer, requiresKeys, keys }),
      [
        vnode.attrs.before,
        createContent(vnode, { renderer, requiresKeys, keys }),
        vnode.attrs.after
      ]
    );

  return {
    view: view
      ? vnode => view(vnode, { render, renderer })
      : vnode => render(vnode),
    oncreate: onMount,
    onremove: onUnMount
  };
};
