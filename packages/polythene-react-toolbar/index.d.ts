import { Component } from "react";
import { ToolbarOptions, ToolbarTitleOptions } from "polythene-core-toolbar";
import { Vnode } from "polythene-react-base";

interface Toolbar extends ToolbarOptions{
  (_: ToolbarOptions): Vnode<ToolbarOptions>;
}
declare namespace Toolbar {}
declare class Toolbar extends Component<ToolbarOptions> {}

interface ToolbarTitle extends ToolbarTitleOptions{
  (_: ToolbarTitleOptions): Vnode<ToolbarTitleOptions>;
}
declare namespace ToolbarTitle {}
declare class ToolbarTitle extends Component<ToolbarTitleOptions> {}

export { Toolbar, ToolbarTitle };
export as namespace Toolbar;
export as namespace ToolbarTitle;
