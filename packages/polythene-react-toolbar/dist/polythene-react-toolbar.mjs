import { ViewComponent } from 'polythene-react-base';
import { coreToolbar, coreToolbarTitle } from 'polythene-core-toolbar';

var Toolbar = ViewComponent(coreToolbar);

Toolbar.displayName = "Toolbar";

var ToolbarTitle = ViewComponent(coreToolbarTitle);

ToolbarTitle.displayName = "ToolbarTitle";

export { Toolbar, ToolbarTitle };
