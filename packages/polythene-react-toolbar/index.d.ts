import { Component } from "react";
import { ToolbarOptions, ToolbarTitleOptions } from "polythene-core-toolbar";

interface Toolbar extends ToolbarOptions{}
declare namespace Toolbar {}
declare class Toolbar extends Component<ToolbarOptions> {}

interface ToolbarTitle extends ToolbarTitleOptions{}
declare namespace ToolbarTitle {}
declare class ToolbarTitle extends Component<ToolbarTitleOptions> {}


export { Toolbar, ToolbarTitle };
export as namespace Toolbar;
export as namespace ToolbarTitle;
