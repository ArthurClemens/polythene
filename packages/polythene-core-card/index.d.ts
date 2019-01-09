import { CommonOptions, URLOptions, CoreComponentCreatorOptions } from "polythene-core";
import { Options as ListTileOptions } from "polythene-core-list-tile";
import { Options as IconOptions } from "polythene-core-icon";

interface AnyOptions {

  /**
   * HTML element tag.
   * @default "div"
   */
  element?: string;
 
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Content: a string, hyperscript or component.
   */
  content?: any;

  /**
   * Style object.
   */
  style?: CSSStyleDeclaration;

}

interface TextOptions extends AnyOptions {

  /**
   * Set to true to reduce the top and bottom padding.
   * @default false
   */
  tight?: boolean;

}

interface MediaOptions extends AnyOptions {

  /**
   * From which side cropping should be done.
   * @default "center"
   */
  origin?: "start" | "center" | "end";

  /**
   * Content to place on the overlay.
   */
  overlay?: OverlayOptions | GenericContentOptions;

  /**
   * Set to true to create an image dimmer; the dimmer does not have a default style.
   * @default false
   */
  showDimmer?: boolean;

  /**
   * Image ratio; "landscape" translates to 16:9 ratio.
   * @default landscape
   */
  ratio?: "landscape" | "square";

  /**
   * For primary media only; defines the image (or iframe) size.
   */
  size?: "small" | "medium" | "large" | "extra-large";

}

interface PrimaryContentOptions {

  /**
   * Title text.
   */
  title?: string;

  /**
   * Subtitle text.
   */
  subtitle?: string;

  /**
   * Media that is shown in this part.
   */
  media?: MediaOptions;

  /**
   * Actions that are shown in this part.
   */
  actions?: ActionsOptions;

  /**
   * Set to true to reduce the top and bottom padding.
   * @default false
   */
  tight?: boolean;

}

interface HeaderOptions extends ListTileOptions {
 
  /**
   * Icon options object; used to show an round "avatar" portrait image.
   * Altenatively use ListTile's `front`.
   */
  icon?: IconOptions;

}

interface ActionsOptions extends AnyOptions {

  /**
   * Set to true to add a top border.
   * @default false
   */
  border?: boolean;

  /**
   * Set to "vertical" for a vertical list of actions; use "justified" for a horizontally evenly spread of icons.
   * @default "horizontal"
   */
  layout?: "horizontal" | "vertical" | "justified";

  /**
   * Set to true to reduce the top and bottom padding.
   * @default false
   */
  tight?: boolean;

}

interface OverlayOptions {

  /**
   * Set to true to show the overlay as a partly covering sheet.
   * @default false
   */
  sheet?: boolean;

}

type ContentOptions = {
  any?: AnyOptions;
  header?: HeaderOptions;
  media?: MediaOptions;
  primary?: PrimaryContentOptions;
  text?: TextOptions;
  actions?: ActionsOptions;
}

type Content = Array<ContentOptions>; 

interface GenericContentOptions extends Partial<CommonOptions> {
  
  /**
   * List of option objects for distinct areas.
   * To pass other content, use `children`.
   */
  content?: Content;

  /**
   * HTML element tag.
   * @default "div"
   */
  element?: string;

  /**
   * Options object containing one or more standard events such as onclick (React: onClick).
   */
  events?: object;

  /**
   * Alternative content.
   */
  children?: any;

}

interface CardOptions extends GenericContentOptions {

  /**
   * HTML element tag.
   * @default "a"
   */
  element?: string;

  /**
   * Depth of the shadow
   * @default 1
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * URL for the entire card; Mithril: for in-app route linking set oncreate : m.route.link; React: for in-app route linking use onClick and a router such as react-router-dom.
   */
  url?: Partial<URLOptions>;

}

export type Options = CardOptions;

export const coreCard: CoreComponentCreatorOptions;
export const coreCardActions: CoreComponentCreatorOptions;
export const coreCardMedia: CoreComponentCreatorOptions;
export const coreCardPrimary: CoreComponentCreatorOptions;
