import { ViewComponent } from 'polythene-mithril-base';
import { coreIconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-mithril-icon';
import { Button } from 'polythene-mithril-button';

const IconButton = ViewComponent(Object.assign({}, coreIconButton, {
  createProps: (vnode, args) => coreIconButton.createProps(vnode, Object.assign(args, {
    Icon
  })),
  createContent: (vnode, args) => coreIconButton.createContent(vnode, Object.assign(args, {
    Icon
  })),
  component: Button
}));
IconButton.displayName = "IconButton";

export { IconButton };
