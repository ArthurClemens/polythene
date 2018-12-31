import { CommonOptions } from "polythene-core";
import { Options as ListTileOptions } from "polythene-core-list-tile";

export interface Options extends CommonOptions {

  /**
   * List of List Tile components or (when using `all`) List Tile options.
   */
  tiles?: any;

  /**
   * Alternative list content.
   * List of List Tile components or (when using `all`) List Tile options.
   */
  content?: any;

  /**
   * Alternative list content.
   * List of List Tile components.
   */
  children?: any;

  /**
   * List Tile options that will be applied to all tiles.
   * For this, List children need to be passed as options (instead of passing a list of List Tile components).
   */
  all?: ListTileOptions;

  /**
   * Set to true to insert separator borders between List Tiles.
   * @default false
   */
  border?: boolean;

  /**
   * Set to true to reduce vertical padding of List Tiles.
   * @default false
   */
  compact?: boolean;

  /**
   * Options object for a List Tile.
   * Use `sticky` to pin the header when scrolling.
   * Does not work in IE or Edge < 16: http://caniuse.com/#feat=css-sticky
   */
  header?: ListTileOptions;

  /**
   * Set to true to indent the List Tile borders.
   * For a proper layout, List Tiles must have option `indent` as well.
   * @default false
   */
  indentedBorder?: boolean;

  /**
   * Vertical padding
   * @default "both"
   */
  padding?: "both" | "top" | "bottom" | "none";
  
}
