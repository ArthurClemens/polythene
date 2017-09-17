import { ViewComponent } from 'polythene-mithril-base';
import { coreToolbar, coreToolbarTitle } from 'polythene-core-toolbar';

var Toolbar = ViewComponent(coreToolbar);

Toolbar.displayName = "Toolbar";

var ToolbarTitle = ViewComponent(coreToolbarTitle);

ToolbarTitle.displayName = "ToolbarTitle";

export { Toolbar, ToolbarTitle };
