import { ViewComponent } from 'polythene-mithril-base';
import { coreToolbar, coreToolbarTitle } from 'polythene-core-toolbar';

var Toolbar = ViewComponent(coreToolbar);

Toolbar.theme = coreToolbar.theme;
Toolbar.displayName = "Toolbar";

var ToolbarTitle = ViewComponent(coreToolbarTitle);

ToolbarTitle.theme = coreToolbarTitle.theme;
ToolbarTitle.displayName = "ToolbarTitle";

export { Toolbar, ToolbarTitle };
