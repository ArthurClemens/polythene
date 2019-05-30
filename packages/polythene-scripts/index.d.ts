declare type StyleObject = object;
declare type Style = {
    [selector: string]: StyleObject;
};
declare type Styles = Style[];
interface writeCSSOptions {
    /**
     * CSS text, for instance from an existing .css file
     */
    css: string;
    /**
     * Style object.
     */
    styles: Styles[];
    /**
     * File path to write to.
     */
    path: string;
    /**
     * Include browser vendor prefixes.
     */
    autoPrefix: boolean;
    /**
     * Beautify the output.
     */
    beautify: boolean;
    /**
     * Include source maps.
     */
    sourceMap: boolean;
    /**
     * Enable gzip compression.
     */
    gzip: boolean;
    /**
     * To use with CSS Modules: set to `true` to wrap the generated css inside a `:global { ... }` tag.
     */
    wrapInGlobal: boolean;
}
export declare const writeCSS: (props: writeCSSOptions) => Promise<{}>;
export {};
