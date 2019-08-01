import { CommonOptions, TransitionOptions, CyanoComponentOptions } from "polythene-core";
import { Options as DialogPaneOptions } from "polythene-core-dialog-pane";

export interface Options extends Partial<CommonOptions> {

  /**
   * Spawner id.
   * Use with multiple spawn locations.
   * @default "default_dialog"
   */
  spawn?: string;

}

export interface AppearanceOptions extends DialogPaneOptions, Partial<TransitionOptions> {

  /**
   * Set to true to make the dialog full screen.
   * - Title and footer will be ignored.
   * - Instead pass a Toolbar to `body`.
   * @default false
   */
  fullScreen?: boolean;

  /**
   * Set to true to create a modal dialog.
   * - Tapping the backdrop will not close the dialog.
   * @default false
   */
  modal?: boolean;

  /**
   * Set to `true` to not close the dialog when pressing ESCAPE.
   */
  disableEscape? : boolean;
  
  /**
   * Depth of the shadow.
   * Number 0-5
   * @default: 3
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * Used by Drawer. Set to true to disable ESCAPE.
   * @default false
   */
  inactive?: boolean;
  
  /**
   * Set to true to show a backdrop background color.
   * @default false
   */
  backdrop?: boolean;

  /**
   * Alternative way to create dialog panes.
   * Overrides DialogPane options `title`, `body` and `footer`.
   */
  panesOptions?: DialogPaneOptions;

  /**
   * Alternative way to create dialog panes.
   * For Mithril: use `panesOptions` instead.
   * Overrides DialogPane options `title`, `body` and `footer`.
   */
  panes?: Array<any>;

  /**
   * Generated HTML element.
   * @default "form"
   */
  element?: string;
  
}

export interface SpawnOptions {

  /**
   * Dialog instance id.
   * Use to differentiate simultaneous dialogs.
   * @default "default_dialog"
   */
  id?: string;

  /**
   * Spawner id.
   * Use with multiple spawn locations. The id bound to `spawn` must be the same as the one passed to the spawner dialog.
   * @default "default_dialog"
   */
  spawn?: string;

}

type showStatic = <T>(dialogOptions: AppearanceOptions, spawnOptions?: SpawnOptions) => Promise<T>;
type showDynamic = (_:any) => showStatic;
export type show = showDynamic & showStatic;

export type hide = <T>(spawnOptions?: SpawnOptions) => Promise<T>;

export const _Dialog: (options: CyanoComponentOptions & AppearanceOptions) => any;

export const openDialogsSelector: string;
