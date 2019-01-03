import { Component } from "mithril";
import { ToolbarOptions, ToolbarTitleOptions } from "polythene-core-toolbar";

interface Toolbar extends ToolbarOptions{}
declare namespace Toolbar {}
declare const Toolbar: Component<ToolbarOptions, any>;

interface ToolbarTitle extends ToolbarTitleOptions{}
declare namespace ToolbarTitle {}
declare const ToolbarTitle: Component<ToolbarTitleOptions, any>;

export { Toolbar, ToolbarTitle };
export as namespace Toolbar;
export as namespace ToolbarTitle;
