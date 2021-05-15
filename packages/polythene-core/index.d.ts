import * as m from "mithril";

export type Content = object | any;

/* animation-event.js START */

/**
 * Returns the name of the animation end event of the current client.
 */
export function getAnimationEndEvent(): string | void;

/* animation-event.js END */

/* attrs.js START */

/**
 * Updates the `attrs` object by adding keys to or removing keys from it.
 */
export function filterSupportedAttributes(
  attrs: object,
  { add, remove }: { add?: Array<string>; remove?: Array<string> }
): void;

/**
 * Process attrs.dataSet and return an object with keys 'data-xxxx': 'value'
 */
export function processDataset(attrs: object): object | undefined;

/**
 * Unpacks the `attrs` object if it is wrapped in a stream function.
 */
export function unpackAttrs(attrs: object | (() => object)): object;

export interface CSSClasses {
  [s: string]: string;
}

/**
 * Gets the class name for a given size.
 */
export function classForSize(classes: CSSClasses, size: string): string;

/* attrs.js END */

/* Conditional.js START */

export interface ConditionalOptions {
  permanent: boolean;

  show: boolean;

  hide: boolean;

  inactive: boolean;

  instance: any;

  placeholderClassName: string;

  /**
   * Callback function that is called when the hide transition is done.
   */
  didHide: (id: string) => void;
}

export const _Conditional: (
  options: CyanoComponentOptions & ConditionalOptions
) => any;

/* Conditional.js END */

/* developer.js START */

/**
 * Creates console warnings for deprecated components or component options and provides info on replacements.
 */
export function deprecation(
  component: string,
  {
    option,
    newOption,
    newComponent,
    message,
    since,
  }: {
    option?: string;
    newOption?: string;
    newComponent?: string;
    message?: string;
    since?: string;
  }
): void;

/* developer.js END */

/* events.js START */

export function throttle(
  func: (...args: any) => any,
  s?: string,
  context?: object
): void;
export function subscribe(
  eventName: string,
  listener: object,
  delay?: number
): void;
export function unsubscribe(eventName: string, listener: object): void;
export function emit(eventName: string, event: object): void;

/* events.js START */

/* icon.js START */

/**
 * SVG string for dropdown icon.
 */
export function iconDropdownUp(): string;

/**
 * SVG string for dropup icon.
 */
export function iconDropdownDown(): string;

/* icon.js END */

/* iso.js START */

/**
 * Returns true if the client has a document property.
 */
export function isClient(): boolean;

/**
 * Returns true if the client does not have a document property.
 */
export function isServer(): boolean;

/* iso.js END */

/* multi.js START */

export const Multi: ({ options }: { options: object }) => any;

/* multi.js END */

/* pointer.js START */

export function isTouch(isServer: boolean): boolean;
export function pointerStartEvent(isServer: boolean): Array<string>;
export function pointerEndEvent(isServer: boolean): Array<string>;
export function pointerStartMoveEvent(isServer: boolean): Array<string>;
export function pointerMoveEvent(isServer: boolean): Array<string>;
export function pointerEndMoveEvent(isServer: boolean): Array<string>;

/* pointer.js END */

/* style.js START */

export function getStyle({
  element,
  selector,
  pseudoSelector,
  prop,
}: {
  element: object;
  selector?: string;
  pseudoSelector?: string;
  prop: string;
}): object;
export function stylePropCompare({
  element,
  selector,
  pseudoSelector,
  prop,
  equals,
  contains,
}: {
  element: object;
  selector?: string;
  pseudoSelector?: string;
  prop: string;
  equals?: string;
  contains?: string;
}): boolean;
export function isRTL({
  element,
  selector,
}: {
  element: object;
  selector?: string;
}): boolean;
export function styleDurationToMs(durationStr: string): number;

/* style.js END */

export interface CommonOptions {
  /**
   * Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth.
   */
  after: any;

  /**
   * Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth.
   */
  before: any;

  /**
   * Additional CSS class to default component class.
   */
  className: string;

  /**
   * HTML element id.
   */
  id: string;

  /**
   * Test id. Gets rendered as "data-test-id=my-value"
   */
  testId: string;

  /**
   * Tag name.
   * @default "div"
   */
  element: any;

  /**
   * For setting simple style attributes.
   */
  style: Partial<CSSStyleDeclaration>;

  /**
   * Renders the component light on dark (sets class pe-dark-tone); use "light" to locally inverse (sets class pe-light-tone).
   */
  tone: "dark" | "light";

  /**
   * Extra DOM attributes.
   */
  domAttributes: { [key: string]: string };

  /**
   * ARIA properties.
   */
  aria?: {
    role: string;

    /**
     * Id to match a label to a control element.
     */
    id?: string;

    /**
     * Label when the label element is not visible on the screen.
     */
    "aria-label"?: string;

    /**
     * Label when the label element is visible on the screen.
     */
    "aria-labelledby"?: string;

    /**
     * Boolean as string.
     */
    "aria-checked"?: string;

    /**
     * Boolean as string.
     */
    "aria-readonly"?: string;

    /**
     * Boolean as string.
     */
    "aria-disabled"?: string;
  };
}

export interface URLOptions {
  /**
   * Link target.
   */
  href: string;

  /**
   * Mithril lifecycle method.
   * https://mithril.js.org/route.html
   */
  oncreate: (vnode: m.VnodeDOM) => any;

  /**
   * Mithril lifecycle method.
   * https://mithril.js.org/route.html
   */
  onupdate: (vnode: m.VnodeDOM) => any;

  /**
   * React event method.
   */
  onClick: (e: Event) => any;

  /**
   * React Router path.
   */
  to: string;
}

interface TransitionAppearanceReturnOptions {
  el: HTMLElement;

  /**
   * Transition duration in seconds.
   */
  duration: number;

  /**
   * Delay duration in seconds.
   */
  delay: number;

  /**
   * Callback function called just before the transition.
   */
  before: () => void;

  /**
   * Callback function called just after the transition. After a hide transition, the transitioning element may be reset or hidden.
   */
  after: () => void;

  /**
   * Callback function called at the transition. The transitioning element should be set to its goal.
   */
  transition: () => void;

  /**
   * The timing function.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
   */
  timingFunction: string;
}

interface TransitionAppearanceOptions {
  show?: ({
    el,
    backdropEl,
    contentEl,
  }: {
    el?: HTMLElement;
    backdropEl?: HTMLElement;
    contentEl?: HTMLElement;
  }) => Partial<TransitionAppearanceReturnOptions>;
  hide?: ({
    el,
    backdropEl,
    contentEl,
  }: {
    el?: HTMLElement;
    backdropEl?: HTMLElement;
    contentEl?: HTMLElement;
  }) => Partial<TransitionAppearanceReturnOptions>;
}

export interface TransitionOptions {
  /**
   * The show transition duration in seconds.
   * @default .240
   */
  showDuration: number;

  /**
   * The hide transition duration in seconds.
   * @default .240
   */
  hideDuration: number;

  /**
   * The show delay duration in seconds.
   * @default 0
   */
  showDelay: number;

  /**
   * The hide delay duration in seconds.
   * @default 0
   */
  hideDelay: number;

  /**
   * The show timing function.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
   */
  showTimingFunction: string;

  /**
   * The hide timing function.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
   */
  hideTimingFunction: string;

  /**
   * Callback function that is called when the show transition is done.
   */
  didShow: (id: string) => void;

  /**
   * Callback function that is called when the hide transition is done.
   */
  didHide: (id: string) => void;

  /**
   * Object with functions for keys show and hide.
   */
  transitions: Partial<TransitionAppearanceOptions>;
}

export type CyanoComponentOptions = {
  h: (args: any) => any;
  a?: object;
  cast?: (args: any) => any;
  getRef?: (args: any) => any;
  useCallback?: (args: any) => any;
  useEffect?: (args: any) => any;
  useLayoutEffect?: (args: any) => any;
  useMemo?: (args: any) => any;
  useReducer?: (args: any) => any;
  useRef?: (args: any) => any;
  useState?: (args: any) => any;
};

export function createUid(): string;
