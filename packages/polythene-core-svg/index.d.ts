import { CommonOptions, CyanoComponentOptions } from "polythene-core";

export interface Options extends Partial<CommonOptions> {

  /**
   * SVG content: string, hyperscript or component.
   */
  content?: any;

  /**
   * Alternative SVG content.
   */
  children?: any;

}

export const _SVG: (options: CyanoComponentOptions & Options) => any;
