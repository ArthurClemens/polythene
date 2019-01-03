
/* easing.js START */

  interface EasingFn {
    (t: number): number;
  }

  interface Easing {
    linear: EasingFn;
    easeInQuad: EasingFn;
    easeOutQuad: EasingFn;
    easeInOutQuad: EasingFn;
    easeInCubic: EasingFn;
    easeOutCubic: EasingFn;
    easeInOutCubic: EasingFn;
    easeInQuart: EasingFn;
    easeOutQuart: EasingFn;
    easeInOutQuart: EasingFn;
    easeInQuint: EasingFn;
    easeOutQuint: EasingFn;
    easeInOutQuint: EasingFn;
  }

  /**
   * Easing functions
   */
  export const easing: Easing;

/* easing.js END */


/* scroll-to.js START */

  interface ScrollToOptions {

    /**
     * Element to scroll.
     */
    element: HTMLElement;

    /**
     * Scroll direction.
     * @default "vertical"
     */
    direction?: "vertical" | "horizontal";

    /**
     * Scroll duration in seconds.
     */
    duration: number;

    /**
     * Easing function
     */
    easing?: EasingFn;

  }

  export const scrollTo: <T>(opts: ScrollToOptions) => Promise<T>;

/* scroll-to.js END */

/* timer.js START */

  export declare class Timer {
    /**
     * Creates a new timer
     * @param callback Callback function after timer has finished.
     * @param duration Duration in seconds
     */
    start(
      callback: () => void,
      duration: number
    ): void;

    /**
     * Pauses the timer.
     */
    pause(): void;

    /**
     * Resumes the paused timer.
     */
    resume(): void;

    /**
     * Stops the timer.
     */
    stop(): void;
  }

/* timer.js END */

/* webfont-loader.js START */

  interface WebFontConfig {

    /**
     * The font families to load.
     * For example: ["Droid Sans", "Droid Serif:bold"]
     */
    families?: Array<string>;

    /**
     * To perform character subsetting.
     * For example: "abcdefghijklmnopqrstuvwxyz!"
     */
    text?: string;
    
    /**
     * Other properties.
     * @see https://github.com/typekit/webfontloader
     */
    [key: string]: any;

  }

  /**
   * 
   * @param vendor Vendor name (or any other unique identifier). For example "google" or "typekit".
   * @param config Configuration object. See: https://github.com/typekit/webfontloader
   */
  export function addWebFont(vendor: string, config: WebFontConfig) : void;

/* webfont-loader.js END */