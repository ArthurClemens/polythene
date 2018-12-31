import { CommonOptions, TransitionOptions } from "polythene-core";
import { Options as DialogPaneOptions } from "polythene-core-dialog-pane";

export interface Options extends CommonOptions {

  /**
   * Spawner id.
   * Use with multiple spawn locations.
   * @default "default_dialog"
   */
  spawn?: string;

}

export interface AppearanceOptions extends DialogPaneOptions, TransitionOptions {

  /**
   * Set to true to make the dialog full screen.
   * - Title and footer will be ignored.
   * - Instead pass a Toolbar to `body`.
   * - Pressing ESCAPE will not close the dialog.
   * @default false
   */
  fullScreen?: boolean;

  /**
   * Set to true to create a modal dialog.
   * - Tapping the backdrop or pressing ESCAPE will not close the dialog.
   * @default false
   */
  modal?: boolean;

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
   * Use with multiple spawn locations. `spawn` must also be passed as option at the spawner dialog.
   * @default "default_dialog"
   */
  spawn?: string;

}

export type show = <T>(dialogOptions: AppearanceOptions, spawnOptions?: SpawnOptions) => Promise<T>;
export type hide = <T>(spawnOptions?: SpawnOptions) => Promise<T>;
