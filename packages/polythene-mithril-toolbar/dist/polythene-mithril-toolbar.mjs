import { ViewComponent } from 'polythene-mithril-base';
import { coreToolbar, coreToolbarTitle } from 'polythene-core-toolbar';
import { Shadow } from 'polythene-mithril-shadow';

const Toolbar = ViewComponent(Object.assign({}, coreToolbar, {
  createContent: (vnode, args) => coreToolbar.createContent(vnode, Object.assign(args, {
    Shadow
  }))
}));
Toolbar.displayName = "Toolbar";

const ToolbarTitle = ViewComponent(coreToolbarTitle);
ToolbarTitle.displayName = "ToolbarTitle";

export { Toolbar, ToolbarTitle };
