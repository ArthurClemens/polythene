import { CommonOptions, Content } from "polythene-core";
import { Options as ButtonOptions } from "polythene-core-button";
import { Options as IconOptions } from "polythene-core-icon";

interface TabOptions extends Partial<CommonOptions> {

  /**
   * Tab content.
   */
  tabs?: Array<TabButtonOptions>;

  /**
   * Set to true to enable clicks/taps on the selected tab button.
   * @default false
   */
  activeSelected?: boolean;

  /**
   * Tab button options that will be applied to all tabs.
   */
  all?: TabButtonOptions;

  /**
   * Set to true to let the buttons fill the entire button row.
   * @default false
   */
  autofit?: boolean;

  /**
   * Set to true to center the button row.
   * This automatically sets `autofit` to false.
   * @default false
   */
  centered?: boolean;

  /**
   * Set to true to hide the "current tab" indicator.
   * @default false
   */
  hideIndicator?: boolean;

  /**
   * Set to true to give all tabs the width of the largest tab.
   * @default false
   */
  largestWidth?: boolean;

  /**
   * Set to true to make the tabs behave like a mobile navigation menu.
   * This removes the minimum width settings from the tab buttons and compresses padding and label font size.
   * @default false
   */
  menu?: boolean;

  /**
   * Set to true not let the "current tab" indicator slide to the new position.
   * @default false
   */
  noIndicatorSlide?: boolean;

  /**
   * Set to true to make the button row scrollable.
   * This automatically sets `autofit` to false.
   * On non-touch devices, 2 scroll buttons will be added to navigate tabs.
   * @default false
   */
  scrollable?: boolean;

  /**
   * Set to true to reduce the tab widths on larger screens.
   * @default false
   */
  small?: boolean;

  /**
   * Callback function that receives the tabs state.
   */
  onChange?: ({ index, options, el } : { index: number, options: TabButtonOptions, el: HTMLElement }) => void;

  /**
   * Overrides default arrow icon.
   */
  scrollIconBackward?: IconOptions;

  /**
   * Overrides default arrow icon.
   */
  scrollIconForward?: IconOptions;

  /**
   * The Array index of the selected tab.
   * Overridden when one of the tabs has option `selected`.
   * @default 0
   */
  selectedTabIndex?: number;

  /**
   * Alternative tab content.
   */
  content?: Content;

  /**
   * Alternative tab content.
   */
  children?: Content;

}

interface TabButtonOptions extends ButtonOptions {

  /**
   * Set to true to show the button as selected.
   * Overrides `selectedTabIndex`.
   * @default false
   */
  selected?: boolean;

}

export interface Options extends TabOptions, TabButtonOptions{}
