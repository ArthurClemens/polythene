import { CommonOptions, CoreComponentCreatorOptions } from "polythene-core";

export interface Options extends Partial<CommonOptions> {

  /**
   * Name of animation function: "ease-in-out" or "cubic-bezier(0.1, 0.7, 1.0, 0.1)".
   * @default "ease-out"
   */
  animationTimingFunction?: string;

  /**
   * Set to true to start the ripple from the center.
   * @default false
   */
  center?: boolean;

  /**
   * Set to true to disable ripples.
   */
  disabled?: boolean;

  /**
   * The animation duration in seconds.
   * The default value is calculated with the value of opacityDecayVelocity:
   * 1 / opacityDecayVelocity * 0.2
   * @default 0.5
   */
  duration?: number;

  /**
   * Scale at the start of the ripple animation.
   * @default 0.1
   */
  startScale?: number;

  /**
   * Scale at the end of the ripple animation.
   * @default 2.0
   */
  endScale?: number;
  
  /**
   * Set to true to enable multiple simultaneous ripples, instead of one after the other.
   * @default false
   */
  multi?: boolean;
  
  /**
   * Velocity of decrease of opacity.
   * @default 0.4
   */
  opacityDecayVelocity?: number;
  
  /**
   * Set to true to keep the ripple at the end of the animation to make a persistent color fill.
   * @default false
   */
  persistent?: boolean;
  
  /**
   * Opacity at the start of the ripple animation.
   * @default 0.2
   */
  startOpacity?: number;
  
  /**
   * Opacity at the end of the ripple animation.
   * @default 0.0
   */
  endOpacity?: number;

  /**
   * The target defines which element responds to tap.
   * Default target is the ripple's parent node element.
   */
  target?: HTMLElement;

  /**
   * Set to true to make the ripple shape no longer bound to the target element.
   * @default false
   */
  unconstrained?: boolean;

  /**
   * Callback function just before the ripple starts.
   */
  start?: (e: MouseEvent) => void;

  /**
   * Callback function when the ripple has ended.
   */
  end?: (e: AnimationEvent) => void;

}

export const coreRipple: CoreComponentCreatorOptions;
