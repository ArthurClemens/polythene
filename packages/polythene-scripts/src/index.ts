import fs from "fs";
import postcss from "postcss";
import cssnano from "cssnano";
import tar from "tar";
import autoprefixer from "autoprefixer";

// @ts-ignore-line
import perfectionist from "perfectionist";
// @ts-ignore-line
import postcssPrettify from "postcss-prettify";
// @ts-ignore-line
import J2c from "j2c";

// Type imports
import { Result } from "postcss";

type StyleObject = object;
type Style = {[selector:string] : StyleObject};
type Styles = Style[];

// @ts-ignore-line
const j2c = new J2c();
const COLOR_RED = "\x1b[31m";
const COLOR_WHITE = "\x1b[37m";

const makeStyleSheet = (...styles: Styles[]) =>
  styles.reduce((acc, styleList) =>
    // each style returns a list
    Object.keys(styleList).length
      ? (
        styleList.forEach(style => {
          const scoped = {
            "@global": style
          };
          const sheet = j2c.sheet(scoped);
          acc += sheet;
        }),
        acc
      )
      : acc, "");

const saveToFile = (path: string, cssString: string) =>
  fs.writeFileSync(path, cssString, "ascii");

const templateWithGlobal = (css: string) => `:global {
  ${css}
}`;

interface writeCSSOptions {
  /**
   * CSS text, for instance from an existing .css file
   */
  css: string,

  /**
   * Style object.
   */
  styles: Styles[],

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

  /**
   * To use with CSS Modules: set to `true` to wrap the generated css inside a `:global { ... }` tag.
   */
  wrapInGlobal: boolean
}

export const writeCSS = (props: writeCSSOptions) => {
  const sourceMap = props.sourceMap === undefined
    ? true
    : props.sourceMap;
  const cssString = props.css
    ? props.css
    : props.styles
      ? props.styles.reduce((acc: string, current: Styles) => (
        current !== undefined
          ? acc + makeStyleSheet(current)
          : (
            console.log("No styles passed to `writeCSS`. Make sure to use `getStyle` instead of `addStyle`."), // eslint-disable-line no-console
            acc
          )
      ), "")
      : "";
  const processedCss = props.wrapInGlobal
    ? templateWithGlobal(cssString)
    : cssString;

  const mapPath = `${props.path}.map`;

  const plugins: any[] = [];
  if (props.autoPrefix) {
    plugins.push(autoprefixer());
  }
  plugins.push(cssnano({
    preset: ['default', {
      reduceIdents: false,
      zindex: false
    }]
  }));
  if (props.wrapInGlobal && props.beautify) {
    plugins.push(postcssPrettify());
  } else if (props.beautify) {
    plugins.push(perfectionist({
      indentSize: 2
    }));
  }

  const postCSSOptions = sourceMap
    ? {
      from: undefined,
      to: props.path,
      map: { inline: false }
    }
    : { from: undefined };

  return new Promise((resolve, reject) => {
    postcss(plugins)
      .process(processedCss, postCSSOptions)
      .then((result: Result) => {
        result.warnings().forEach(warn => {
          console.warn(COLOR_RED, "Warning", COLOR_WHITE, warn.toString()); // eslint-disable-line no-console
        });
        saveToFile(props.path, result.css);
        if (props.gzip) {
          tar.c(
            { gzip: true },
            [props.path]
          ).pipe(fs.createWriteStream(`${props.path}.gz`));
        }
        if (sourceMap) {
          saveToFile(mapPath, result.map.toString());
        }
        resolve(result.css);
      })
      .catch(() => reject());
    });
};
