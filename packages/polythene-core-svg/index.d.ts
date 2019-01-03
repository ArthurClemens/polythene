import { CommonOptions } from "polythene-core";

interface CommonSVGOptions extends Partial<CommonOptions> {

  /**
   * SVG content: string, hyperscript or component.
   */
  content?: any;

  /**
   * Alternative SVG content.
   */
  children?: any;

}

export type Options = CommonSVGOptions;
