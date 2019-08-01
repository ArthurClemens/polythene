
export type StyleObject = object;

export type StyleFn = {(selector: string, vars?: StyleObject, customVars?: StyleObject): StyleObject | Array<StyleObject>};

export type StyleFns = {
  [s: string] : StyleFn
} | StyleObject;

export type ColorStyleFns = {
  lightTintFns: { [s: string] : StyleFn },
  darkTintFns: { [s: string] : StyleFn },
  lightTintHoverFns?: { [s: string] : StyleFn },
  darkTintHoverFns?: { [s: string] : StyleFn },
}

export type Scoping = {
  mediaQuery?: string,
  scope?: string
}

export type Style = {[selector:string] : StyleObject};

export type Styles = Array<Style> | Style;

type StyleCollection = {[s: string]: StyleFn};

/** mixin-flex.js START */

  export const flex: {
    /**
    * @param num - Default: 1.
    * @returns Style objects
    */
    flex: (num?: number) => Styles,

    /**
     * @param flexIndex
     * @returns Style objects
     */
    flexIndex: (flexIndex: number | "none") => Styles,
    
    /**
     * @param value
     * @returns Style objects
     */
    flexGrow: (value: number | "none") => Styles,

    /**
     * @param value
     * @returns Style objects
     */
    flexShrink: (value: number | "none") => Styles,

    flexAuto: Styles,
    flexAutoVertical: Styles,
    layout: Styles,
    layoutAroundJustified: Styles,
    layoutCenter: Styles,
    layoutCenterCenter: Styles,
    layoutCenterJustified: Styles,
    layoutEnd: Styles,
    layoutEndJustified: Styles,
    layoutHorizontal: Styles,
    layoutHorizontalReverse: Styles,
    layoutInline: Styles,
    layoutJustified: Styles,
    layoutStart: Styles,
    layoutStartJustified: Styles,
    layoutVertical: Styles,
    layoutVerticalReverse: Styles,
    layoutWrap: Styles,
    layoutWrapReverse: Styles,
    selfCenter: Styles,
    selfEnd: Styles,
    selfStart: Styles,
    selfStretch: Styles,
  };

/** mixin-flex.js END */


/** mixin.js START */

  export const mixin: {

    /**
     * Clears float
     * @returns Style object
     */
    clearfix: () => StyleObject,

    /**
     * Creates a transition with presets
     * @param properties - Comma-separated list of CSS transition properties. Default: "all".
     * @param duration - Transition duration. Default: ".18s".
     * @param curve - Transition timing function. Default: "ease-out".
     * @returns Style object
     * @example
     * mixin.defaultTransition("opacity", vars.animation_duration)
     */
    defaultTransition: (properties?: string, duration?: string, curve?: string) => StyleObject,

    /**
     * Breaks off a line with ... unless lines is "none"
     * @param lines - Number of lines before breaking off
     * @param lineHeight - Line height as number
     * @param unit - Line height unit. Default: "px".
     * @returns Style object
     * @example
     * // max 1 line, 16px high
     * mixin.ellipsis(1, 16)
     * @example 
     * // max 2 lines, 2.6em high
     * mixin.ellipsis(2, 1.3, "em")
     */
    ellipsis: (lines: number|"none", lineHeight?: number, unit?: string) => StyleObject,

    /**
     * Centers an item absolutely within relative parent.
     * @param offset - Offset in pixels, default: 0.
     * @returns Style object
     */
    fit: (offset?: number) => StyleObject,

    /**
     * Creates sticky headers in a scrollable list.
     * Does not work in IE 11, Edge < 16.
     * @param zIndex - Sets the z-index (necessary to have the sticky header on top of the scrollable content). Default: 1.
     * @returns Style object
     */
    sticky: (zIndex?: number) => StyleObject
  };

/** mixin.js END */


/** layout-styles START */

  export const layoutStyles: Style;

  export function addLayoutStyles() : void;

/** layout-styles END */


/** styler.js START */

  export const styler: {
  
    /**
     * Adds styles to head.
     * @param id - Identifier, used as HTMLElement id for the attached <style></style> element
     * @param styles - List of lists style Objects
     */

    add: (id: string, ...styles: Array<StyleObject>) => void,

    /**
     * Removes a style from head.
     * @param id - Identifier, used as HTMLElement id for the attached <style></style> element
     */
    remove: (id: string) => void,

    /**
     * Adds styles to head for a component.
     * @param params - Parameters object
     * @param params.selectors - CSS selectors
     * @param params.fns - List of style functions
     * @param params.vars - Style configuration variables
     * @param params.customVars - Style configuration variables
     * @param params.mediaQuery - CSS media query string
     * @param params.scope - CSS selector
     * @param params.identifier - Identifier, useful when no selector is passed
     */
    addStyle: ({ selectors, fns, vars, customVars, mediaQuery, scope, identifier } : { selectors: Array<string>, fns: StyleFns, vars: StyleObject, customVars?: StyleObject, mediaQuery?: string, scope?: string, addStyle?: string, identifier?: string }) => void
    
    /**
     * Adds styles to the head.
     * @param params - Parameters object
     * @param params.id - Identifier, used as HTMLElement id for the attached <style></style> element.
     * @param params.document - Document reference.
     * @param styles - List of style Objects.
     */
    addToDocument: ({ id, document } : { id: string, document: object }, ...styles: Array<StyleObject>) => void,

    /**
     * Adds styles to head for a component.
     * @param selector - CSS selector
     * @param fns - List of style functions
     * @param vars - Style configuration variables
     * @returns Function with optional params customSelector, customVars, scoping.
     */
    createAddStyle: (selector: string, fns: StyleFns, vars: StyleObject) =>
      (customSelector?: string, customVars?: StyleObject, scoping?: Scoping) => void;
    
    /**
     * Returns styles for a component.
     * @param selector - CSS selector
     * @param fns - List of style functions
     * @param vars - Style configuration variables
     * @returns Function with optional params customSelector, customVars, scoping.
     */
    createGetStyle: (selector: string, fns: StyleFns, vars: StyleObject) =>
      (customSelector?: string, customVars?: StyleObject, scoping?: Scoping) => Array<StyleObject>,

    /**
     * Returns a list of style objects for a component.
     * @param params - Parameters object
     * @param params.selectors - CSS selectors
     * @param params.fns - List of style functions
     * @param params.vars - Style configuration variables
     * @param params.customVars - Style configuration variables
     * @param params.mediaQuery - CSS media query string
     * @param params.scope - CSS selector
     * @returns List of style objects
     */
    getStyle: ({ selectors, fns, vars, customVars, mediaQuery, scope } : { selectors: Array<string>, fns: StyleFns, vars: StyleObject, customVars?: StyleObject, mediaQuery?: string, scope?: string }) => Array<StyleObject>,
  }

/** styler.js END */


/** helpers.js START */

  /**
   * Creates a rgba CSS color string.
   * @param colorStr - CSS RGB color string.
   * @param opacity - Opacity. Default: 1.
   * @returns A CSS RGBA string
   * @example
   * const color = rgba(#f00, 0.5)
   */
  export const rgba: (colorStr: string, opacity?: number) => string;

  /**
   * Wraps an object with a selector.
   * @param selector - CSS selector
   * @param o - Style object
   * @returns A wrapped style object.
   */
  export const sel: (selector: string, o: StyleObject) => StyleObject;

  /**
   * Creates a right-to-left selector.
   * @param selector - CSS selector
   * @returns CSS selector.
   */
  export const selectorRTL: (selector: string) => string;

  /**
   * Conveyor belt function to create a list of style objects from a layout style collection.
   * Used to 
   * @param params - Parameters object
   * @param params.varFns - Style functions
   * @param params.customVarFns - Style functions
   * @param params.superLayout - Style functions
   * @param params.varMixin - Mixin function to optionally change the vars object on the fly.
   * @returns Function with params selector, componentVars, customVars.
   */
  export const createLayout: ({ varFns, customVarFns, superLayout, varMixin }: { varFns?: StyleFns, customVarFns?: StyleFns, superLayout?: StyleFns, varMixin?: (_:any) => StyleCollection }) =>
    (selector: string, componentVars: StyleObject, customVars?: StyleObject) => Array<StyleObject>;
  
  /**
  * Conveyor belt function to create a list of style objects from a color style collection.
  * @param params - Parameters object
  * @param params.varFns - Style functions wrapped in object with keys `lightTintFns` and `darkTintFns` (and optional `lightTintHoverFns` and `darkTintHoverFns`)
  * @param params.superColor - Style functions
  * @param params.varMixin - Mixin function to optionally change the vars object on the fly.
  * @returns Function with params selector, componentVars, customVars.
  */
  export const createColor: ({ varFns, superColor, varMixin } : { varFns?: ColorStyleFns, superColor?: StyleFns, varMixin?: (_:any) => StyleCollection }) => 
    (selector: string, componentVars: StyleObject, customVars?: StyleObject) => Array<StyleObject>;
    
  /**
   * Creates a CSS style from which the key can be read from the `content` property.
   * @param vars - Style object
   * @param behaviorVars - Style object
   * @returns Style object.
   * @example
   * const vars = {
   *   // ...
   * }
   * const behaviorVars = {
   *   full_screen: false,
   *   modal:       false,
   * }
   * createMarker(vars, behaviorVars)
   */
  export const createMarker: (vars: StyleObject, behaviorVars: StyleObject) => StyleObject;

/** helpers.js END */
