import { CommonOptions, Content } from "polythene-core";
import { Options as TextFieldOptions } from "polythene-core-textfield";

interface SearchButtons {
  before?: Content;
  after?: Content;
}

interface SearchStates {
  /**
   * Search state: no interaction, no input
   */
  none?: SearchButtons;
  focus?: SearchButtons;
  focus_dirty?: SearchButtons;
  dirty?: SearchButtons;
}

export interface Options extends Partial<CommonOptions> {

  /**
   * The search component does not include any icons by itself - providing those is the responsibility of your application.
   * Each state ("none", "focus", "focus_dirty" and "dirty") can have buttons `before` and `after` the search field.
   */
  buttons?: SearchStates;

  /**
   * A fullwidth search box is visually extended to the sides (with a height of 56px). An inset (non-fullwidth) search box has side (page) padding and is less tall (48px).
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Options for the text field, for instance to specify the label.
   */
  textfield?: TextFieldOptions;
  
}
