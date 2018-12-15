import { Shadow } from 'polythene-react-shadow';
import { ViewComponent } from 'polythene-react-base';
import { coreToolbar, coreToolbarTitle } from 'polythene-core-toolbar';

const Toolbar = ViewComponent(Object.assign({}, coreToolbar, {
  createContent: (vnode, args) => coreToolbar.createContent(vnode, Object.assign(args, {
    Shadow
  }))
}));
Toolbar.displayName = "Toolbar";

const ToolbarTitle = ViewComponent(coreToolbarTitle);
ToolbarTitle.displayName = "ToolbarTitle";

export { Toolbar, ToolbarTitle };
