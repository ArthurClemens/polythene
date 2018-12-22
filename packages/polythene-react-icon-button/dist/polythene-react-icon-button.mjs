import { StateComponent } from 'polythene-react-base';
import { coreIconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';

const IconButton = StateComponent(Object.assign({}, coreIconButton, {
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
