import { CommonOptions } from "polythene-core";

export interface Options extends Partial<CommonOptions> {    

  /**
   * Body content.
   */
  body?: any;

  /**
   * Alternative body content.
   */
  content?: any;

  /**
   * Pass a menu content component to use the dialog as menu, for example as a settings menu.
   */
  menu?: any;

  /**
   * Header row.
   * If no `title` or `header` is passed, no header row will be displayed.
   */
  header?: any;

  /**
   * Header title
   * If no `title` or `header` is passed, no header row will be displayed.
   */
  title?: string | any;

  /**
   * Footer content, usually a row containing one or more buttons.
   */
  footer?: any;

  /**
   * Border setting.
   * Value "overflow" activates borders when the body overflows the content area: a top border is only shown when a header is present; a bottom border is only shown when a footer is present.
   */
  borders?: "always" | "never" | "overflow";

  /**
   * Footer buttons to show in the footer row. 
   * This is a convenience setting: it sets a number of CSS classes to optimally display a row of buttons.
   * May contain a single button component or an array.
   */
  footerButtons?: any;

  /**
   * Form attribute options such as `method` or `enctype` (React: `encType`).
   */
  formOptions?: object;

  /**
   * Set to true to remove padding from the body content.
   * @default false
   */
  fullBleed?: boolean;

}
