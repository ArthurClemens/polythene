import { CommonOptions, URLOptions, Content } from "polythene-core";

export interface ToolbarOptions extends Partial<CommonOptions> {

  /* START COMMON OPTIONS */

  /**
   * Options object containing one or more standard events such as onclick (React: onClick).
   */
  events?: object;

  /* END COMMON OPTIONS */

  /**
   * Set to true to add a bottom border.
   * @default false
   */
  border?: boolean;

  /**
   * Set to true to create a more compact Toolbar.
   * @default false
   */
  compact?: boolean;

  /**
   * Set to true to remove side padding.
   * @default false
   */
  fullbleed?: boolean;

  /**
   * Depth of the shadow.
   * @default 0
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * Alternative content.
   */
  content?: Content;

  /**
   * Alternative content.
   */
  children?: Content;

}

export interface ToolbarTitleOptions extends Partial<CommonOptions> {

  /**
   * Title text.
   */
  text?: Content;

  /**
   * Set to true to center the text.
   * @default false
   */
  center?: boolean;

  /**
   * Set to true to indent the text as if it would be next to an icon.
   * @default false
   */
  indent?: boolean;

  /**
   * URL options.
   * Mithril: for in-app route linking set `oncreate: m.route.link`.
   * React: for in-app route linking use onClick and a router such as react-router-dom.
   */
  url?: Partial<URLOptions>;

  /**
   * Alternative content.
   */
  content?: Content;

  /**
   * Alternative content.
   */
  children?: Content;
}
