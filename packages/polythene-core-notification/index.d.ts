import { CommonOptions, TransitionOptions, Content, CoreComponentCreatorOptions } from "polythene-core";

export interface Options extends Partial<CommonOptions> {

  /**
   * Spawner id.
   * Use with multiple spawn locations.
   * @default "default_notification"
   */
  spawn?: string;

}

export interface AppearanceOptions {

  /**
   * Notification text.
   */
  title: string;

  /**
   * Alternative content. Replaces `title`.
   */
  content?: string;

  /**
   * Action element; Will likely contain a button.
   */
  action?: Content;

  /**
   * Selector of container HTML element that will be animated with the Notification (does not need to be the direct parent).
   * For example if a FAB button needs to move together with the Notification, both the FAB and Notification will be placed in the same container. Transitions will then move both simultaneously
   * If set, the Notification's position will be absolute (default: fixed).
   */
  containerSelector?: string;

  /**
   * Duration (in seconds) to show the Notification. After this the Notification hides automatically.
   * Use `0` to not hide automatically.
   * @default 3
   */
  timeout?: number;

  /**
   * Configures the appearance of the component.
   */
  transitions?: Partial<TransitionOptions>;

  /**
   * Sets the arrangement of the action. By default the action is placed right to the title, but longer action labels better fit below the title, and need a vertical layout.
   * @default "horizontal"
   */
  layout?: "horizontal" | "vertical"

}

export interface SpawnOptions {

  /**
   * Notification instance id.
   * Use to differentiate simultaneous notifications.
   * @default "default_notification"
   */
  id?: string;

  /**
   * Use with multiple spawn locations. The id bound to `spawn` must be the same as the one passed to the spawner notification.
   * @default "default_notification"
   */
  spawn?: string;

  /**
   * Set to "container" to give the Notification holder CSS style `position: absolute`, so it will be positioned relative to its container. The container element needs to have `position: relative`.
   * @default "screen"
   */
  position?: "screen" | "container";

}

type showStatic = <T>(messageOptions: AppearanceOptions, spawnOptions?: SpawnOptions) => Promise<T>;
type showDynamic = (_:any) => showStatic;
export type show = showDynamic & showStatic;

export type hide = <T>(spawnOptions?: SpawnOptions) => Promise<T>;

export const coreNotification: CoreComponentCreatorOptions;
