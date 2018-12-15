import { StateComponent } from 'polythene-react-base';
import { coreFAB } from 'polythene-core-fab';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';

const FAB = StateComponent(Object.assign({}, coreFAB, {
  createProps: (vnode, args) => coreFAB.createProps(vnode, Object.assign(args, {
    Icon
  })),
  createContent: (vnode, args) => coreFAB.createContent(vnode, Object.assign(args, {
    Icon
  })),
  component: Button
}));
FAB.displayName = "FAB";

export { FAB };
