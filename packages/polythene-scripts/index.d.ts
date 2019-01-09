

type CSSStyleObject = object;

interface writeCSSOptions {
  /**
   * CSS text, for instance from an existing .css file
   */
  css: string,

  /**
   * Style object.
   */
  styles: Array<CSSStyleObject>,

  /**
   * File path to write to.
   */
  path: string,

  /**
   * Include browser vendor prefixes.
   */
  autoPrefix: boolean,

  /**
   * Beautify the output.
   */
  beautify: boolean,

  /**
   * Include source maps.
   */
  sourceMap: boolean,

  /**
   * Enable gzip compression.
   */
  gzip: boolean
}

export function writeCSS({ css, styles, path, autoPrefix, beautify, sourceMap, gzip } : Partial<writeCSSOptions>): void;
