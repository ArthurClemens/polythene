import { CommonOptions } from "polythene-core";

export type onChangeTextFieldState = { focus: boolean, setInputState: setInputStateFn, dirty: boolean, value: string, el: HTMLElement, invalid: boolean, error: string };
type onChangeTextField = ({ focus, setInputState, dirty, value, el, invalid, error } : onChangeTextFieldState) => void;


interface CommonTextFieldOptions extends Partial<CommonOptions> {

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

}

interface AppearanceOptions {

  /**
   * Text label.
   * Unless floatingLabel is true, the label is functionally equal to a placeholder.
   */
  label?: string;
  
  /**
   * Set to any number greater than 0 to create a character counter below the field. Optionally combine with `maxlength`.
   */
  counter?: number;

  /**
   * Creates a more compact layout.
   * @default false
   */
  dense?: boolean;

  /**
   * Makes the label move upward when the field gets focus.
   * @default false
   */
  floatingLabel?: boolean;

  /**
   * Makes the help text appear when the field gets focus.
   * default @false
   */
  focusHelp? : boolean;

  /**
   * Set to true change the layout of the field better fitted for full width.
   * default @false
   */
  fullWidth?: boolean;

  /**
   * Help text below the field.
   */
  help?: string;

  /**
   * Set to false to show the default browser clear button.
   * default @true
   */
  hideClear?: boolean;

  /**
   * Set to false to show the default browser step indicator on number inputs.
   * default @true
   */
  hideSpinner?: boolean;

  /**
   * Set to true to hide invalid state indicators.
   * default @false
   */
  hideValidation?: boolean;
  
}

type setInputStateFn = ({ focus, value } : { focus: boolean, value: string }) => void;

interface InputOptions {

  /**
   * Input element name.
   */
  name?: string;

  /**
   * (Mithril)
   * Set to true to give the input field autofocus; NOTE: does not work on iOS, set focus explicitly when an event is fired.
   */
  autofocus?: boolean;
  
  /**
   * (React)
   * Set to true to give the input field autofocus; NOTE: does not work on iOS, set focus explicitly when an event is fired.
   */
  autoFocus?: boolean;

  /**
   * (Mithril)
   */
  readonly?: boolean;

  /**
   * (React)
   */
  readOnly?: boolean;

  /**
   * Initial input value.
   */
  defaultValue?: string;

  /**
   * Input value.
   */
  value?: string;

  /**
   * Type of input element.
   * For example: "text", "password", "email", "number".
   * @default "text"
   */
  type?: string;

  /**
   * Creates a disabled input field.
   * @default false
   */
  disabled?: boolean;

  /**
   * List of input event names to ignore, for instance ["onblur"].
   */
  ignoreEvents?: Array<string>

  /**
   * Set to true to create a textarea instead of an text input field.
   * @default false
   */
  multiLine?: boolean;

  /**
   * Callback function that receives the field state.
   */
  onChange?: onChangeTextField;

  /**
   * The number of rows for the textarea.
   */
  rows?: number;

  /**
   * Placeholder text.
   */
  placeholder?: string;

  /**
   * (Mithril)
   * Apple introduced an attribute on HTMLInputElement and HTMLTextAreaElement called autocapitalize in iOS 5. It allows the page author to hint at how the browser should present the virtual keyboard for a user to optimize text entry for the user. In it's simplest form, you could indicate that a text box should automatically capitalize the first letter of every new sentence.
   * @see https://googlechrome.github.io/samples/autocapitalize/
   */
  autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";

  /**
   * (React)
   * Apple introduced an attribute on HTMLInputElement and HTMLTextAreaElement called autocapitalize in iOS 5. It allows the page author to hint at how the browser should present the virtual keyboard for a user to optimize text entry for the user. In it's simplest form, you could indicate that a text box should automatically capitalize the first letter of every new sentence.
   * @see https://googlechrome.github.io/samples/autocapitalize/
   */
  autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";

}

interface ValidationOptions {

  /**
   * Message that is displayed when the field is invalid.
   */
  error?: string;

  /**
   * (Mithril)
   * Minimum number of characters (only for type: text, email, search, password, tel, or url; browsers do not support this for type "number").
   */
  minlength?: number;

  /**
   * (React)
   * Minimum number of characters (only for type: text, email, search, password, tel, or url; browsers do not support this for type "number").
   */
  minLength?: number;

  /**
   * (Mithril)
   * Maximum number of characters (only for type: text, email, search, password, tel, or url; browsers do not support this for type "number").
   */
  maxlength?: number;

  /**
   * (React)
   * Maximum number of characters (only for type: text, email, search, password, tel, or url; browsers do not support this for type "number").
   */
  maxLength?: number;

  /**
   * Minimum value (for type: number).
   */
  min?: number;

  /**
   * Maximum value (for type: number).
   */
  max?: number;

  /**
   * Validation regex pattern for fields of type text, search, url, tel, email, password.
   */
  pattern?: string;

  /**
   * Set to true to use HTML5 field validation to test for a non-empty value.
   * Adds a "required" mark (asterisk character) to the label.
   * @default false
   */
  required?: boolean;

  /**
   * String to indicate that the field is required. This text is appended to the label string.
   * @default "*"
   */
  requiredIndicator?: string;

  /**
   * String to indicate that the field is optional; added to the label string.
   */
  optionalIndicator?: string;

  /**
   * Use for per field validation when the field value is kept in local state, for instance when using a form validator.
   * Overrides built-in form validation.
   * @default false
   */
  valid?: boolean;

  /**
   * Use for custom per field validation when you don't keep the field value in a local state (in that case, use valid).
   */
  validate?: (value: string) => { valid: boolean, error: string } | null | undefined;

  /**
   * Set to true to validate the field before any user action.
   * @default false
   */
  validateAtStart?: boolean;

  /**
   * Set to true to validate the field at the first keypress.
   * @default false
   */
  validateOnInput?: boolean;
  
  /**
   * Set to true to re-initiate validation state when the field is cleared.
   * @default false
   */
  validateResetOnClear?: boolean;

}

export interface Options extends CommonTextFieldOptions, InputOptions, AppearanceOptions, ValidationOptions{}

