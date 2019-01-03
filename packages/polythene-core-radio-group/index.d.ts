import { CommonOptions } from "polythene-core";
import { Options as RadioButtonOptions } from "polythene-core-radio-button";

export interface Options extends Partial<CommonOptions> {

  /**
   * Name for all radio button elements.
   */
  name?: string;

  /**
   * Radio Button options that will be applied to all Radio Buttons in the group.
   */
  all?: RadioButtonOptions;

  /**
   * List of Radio Button options.
   */
  buttons?: Array<RadioButtonOptions>;

  /**
   * Alternative content: Radio Button options.
   */
  content?: Array<RadioButtonOptions>;

  /**
   * The value of the default checked Radio Button.
   */
  defaultCheckedValue?: string;

  /**
   * The value of the checked Radio Button.
   */
  checkedValue?: string;

  /**
   * Callback function.
   * See: Handling State in the documentation.
   */
  onChange?: ({ event, checked, value } : { event: Event, checked: boolean, value: string }) => void;

}
