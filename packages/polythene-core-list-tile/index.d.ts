import { CommonOptions, URLOptions } from "polythene-core";
import { Options as IconOptions } from "polythene-core-icon";
import { Options as RippleOptions } from "polythene-core-ripple";

interface CommonListTileOptions extends Partial<CommonOptions> {

  /**
   * Set to true to reduce vertical padding.
   * @default false
   */
  compact?: boolean;

  /**
   * Options for secondary content, positioned horizontally next to the primary content.
   */
  secondary?: SecondaryContentOptions;

  /**
   * Set to true to deactivate the url and hover state (in case of List with setting hoverable) and show a disabled state.
   * @default false
   */
  disabled?: boolean;

  /**
   * Set to true to make this a header tile.
   * @default false
   */
  header?: boolean;

  /**
   * Set to true to show a highlight state; a selected state always has precedence over a highlight state.
   * @default false
   */
  highlight?: boolean;

  /**
   * Set to true to show a hover effect (non-touch devices).
   * @default false
   */
  hoverable?: boolean;

  /**
   * Set to true to indent the content.
   * @default false
   */
  indent?: boolean;

  /**
   * Set to true to show a ripple effect when the tile is tapped.
   * @default false
   */
  ink?: boolean;

  /**
   * Set to true to add side and top margins.
   * @default false
   */
  inset?: boolean;

  /**
   * Set to true to use a Material Design navigation style.
   * @default false
   */
  navigation?: boolean;

  /**
   * Pass Ripple options to define ripple behavior.
   * @default false
   */
  ripple?: RippleOptions;

  /**
   * Set to true to make the highlight and selection rounded.
   * @default false
   */
  rounded?: boolean;

  /**
   * Set to true to show a mouse pointer (non-touch devices).
   * @default false
   */
  selectable?: boolean;

  /**
   * Set to true to show a selected state.
   * @default false
   */
  selected?: boolean;
  
  /**
   * Make list tile sticky when scrolling; this is normally set in the List component as header.sticky; does not work in IE or Edge < 16.
   * @default false
   */
  sticky?: boolean;
  
}

interface PrimaryContentOptions extends CommonListTileOptions {

  /**
   * The main text content.
   */
  title?: string;

  /**
   * Secondary text content, formatted to a max height of 1 line.
   */
  subtitle?: string;

  /**
   * Secondary text content, formatted to a max height of 2 lines.
   */
  highSubtitle?: string;

  /**
   * Secondary text content (no height restriction).
   * May contain string, hyperscript or components.
   */
  subContent?: any;
  
  /**
   * Set to true to reduce horizontal width of `front` content.
   * @default false
   */
  compactFront?: boolean;

  /**
   * HTML element tag.
   * If `url` is passed, the default value is "a".
   * @default "div"
   */
  element?: string;

  /**
   * Content to show at the left of the primary content.
   * May contain string, hyperscript or components.
   */
  front?: any;

  /**
   * URL options.
   * Mithril: for in-app route linking set `oncreate: m.route.link`.
   * React: for in-app route linking use onClick and a router such as react-router-dom.
   */
  url?: Partial<URLOptions>;

  /**
   * Options object containing one or more standard events such as onclick (React: onClick).
   */
  events?: object;

  /**
   * Additional content, appended to primary content.
   */
  children?: any;

  /**
   * Primary content, unstyled.
   * May contain string, hyperscript or components.
   * Ignores `title`, `subtitle`, `highSubtitle`, `subContent` and `children`.
   */
  content?: any;
  
}

interface SecondaryContentOptions extends Partial<CommonOptions> {

  /**
   * Icon options object for Icon in secondary content; will be placed above secondary content.
   */
  icon?: IconOptions;

  /**
   * Secondary content. If `icon` is used, this content is placed below it.
   * May contain string, hyperscript or components.
   */
  content?: any;

  /**
   * URL options for secondary content.
   * Mithril: for in-app route linking set `oncreate: m.route.link`.
   * React: for in-app route linking use onClick and a router such as react-router-dom.
   */
  url?: Partial<URLOptions>;

}

export type Options = PrimaryContentOptions;
