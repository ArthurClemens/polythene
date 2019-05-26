import { CyanoComponentOptions } from "polythene-core";
import { Options as ButtonOptions } from "polythene-core-button";
import { Options as IconOptions } from "polythene-core-icon";

export interface Options extends ButtonOptions {

  /**
   * Icon options object; also used to show an round "avatar" portrait image.
   */
  icon?: IconOptions;

  /**
   * Optional button label, placed next to the icon.
   */
  label?: string;

  /**
   * Set to true to use smaller padding.
   * @default false
   */
  compact?: boolean;

}

export const _IconButton: (options: CyanoComponentOptions & Options) => any;
