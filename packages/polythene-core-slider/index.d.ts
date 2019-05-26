import { CommonOptions, Content, CyanoComponentOptions } from "polythene-core";

export interface Options extends Partial<CommonOptions> {

   /* START COMMON OPTIONS */

  /**
   * Options object containing one or more standard events such as onclick (React: onClick).
   */
  events?: object;

  /**
   * (Mithril)
   * Tab index.
   */
  tabindex?: number;
  
  /**
   * (React)
   * Tab index.
   */
  tabIndex?: number;

  /* END COMMON OPTIONS */


  /**
   * Initial slider value.
   * @default 0
   */
  defaultValue?: number;

  /**
   * Managed Slider value (see: Handling state).
   * @default: 0
   */
  value?: number;

  disabled?: boolean;

  /**
   * Set to false to prevent clicking on the track.
   * @default true
   */
  interactiveTrack?: boolean;

  /**
   * Minimum slider value.
   */
  min?: number;

  /**
   * Maximum slider value.
   */
  max?: number;

  /**
   * An icon at the Slider control.
   */
  icon?: Content;

  /**
   * Callback function that receives the slider state.
   */
  onChange?: ({ value } : { value: number }) => void;

  /**
   * Use with `step`.
   * On click shows a pin shape with the current value.
   */
  pin?: boolean;

  /**
   * Step size.
   * Set to 0 for a continuous (smooth) slider.
   * @default 1
   */
  stepSize?: number;

  /**
   * Show a tick for each step.
   * Limited to 100 ticks.
   */
  ticks?: boolean;

}

export const _Slider: (options: CyanoComponentOptions & Options) => any;
