import { Ripple } from 'polythene-react-ripple';
import { Icon } from 'polythene-react-icon';
import { StateComponent, ViewComponent, renderer } from 'polythene-react-base';
import { coreButton, coreRaisedButton } from 'polythene-core-button';
import { Shadow } from 'polythene-react-shadow';

const TextButton = StateComponent(Object.assign({}, coreButton, {
  createProps: (vnode, args) => coreButton.createProps(vnode, Object.assign(args, {
    Ripple,
    Icon,
    Shadow
  })),
  createContent: (vnode, args) => coreButton.createContent(vnode, Object.assign(args, {
    Ripple,
    Icon,
    Shadow
  }))
}));
TextButton.displayName = "TextButton";

const RaisedButton = StateComponent(Object.assign({}, coreRaisedButton, {
  createProps: (vnode, args) => coreRaisedButton.createProps(vnode, Object.assign(args, {
    Shadow
  })),
  createContent: (vnode, args) => coreRaisedButton.createContent(vnode, Object.assign(args, {
    Shadow
  })),
  component: TextButton
}));
RaisedButton.displayName = "RaisedButton";

const Button = ViewComponent({
  view: vnode => renderer(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children)
});
Button.displayName = "Button";

export { Button };
