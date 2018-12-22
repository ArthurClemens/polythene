import { ViewComponent } from 'polythene-mithril-base';
import { coreIcon } from 'polythene-core-icon';
import { SVG } from 'polythene-mithril-svg';

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
