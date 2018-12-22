import { ViewComponent } from 'polythene-react-base';
import { coreIcon } from 'polythene-core-icon';
import { SVG } from 'polythene-react-svg';

const Icon = ViewComponent(Object.assign({}, coreIcon, {
  createProps: (vnode, args) => coreIcon.createProps(vnode, Object.assign(args, {
    SVG
  })),
  createContent: (vnode, args) => coreIcon.createContent(vnode, Object.assign(args, {
    SVG
  }))
}));
Icon.displayName = "Icon";

export { Icon };
