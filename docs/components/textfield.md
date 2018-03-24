# Text Field

Form input field. Generates a styled text input element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Text field options](#text-field-options)
  - [Input options](#input-options)
  - [Validation options](#validation-options)
  - [Common component options](#common-component-options)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Optional label, floating label
* Helper message
* Multi-line
* Dense or full-width formatting
* Front-end validation
* Custom validation function
* "required" state indicators or messages
* Postpone validation until after input
* Character counter
* Programmatically set value
* Programmatically set focus



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/textfield.md)
* [Usage with React](react/textfield.md)



<a id="options"></a>
## Options


<a id="text-field-options"></a>
### Text field options

These options have effect on the overall component (label, input, help, error).

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **counter** | optional | Number | | Set to any number greater than 0 to create a character counter below the field; optionally combine with `maxlength` (see below) |
| **dense** | optional | Boolean | | Creates a more compact layout |
| **floatingLabel** | optional | Boolean | false | Makes the label move upward when the field gets focus |
| **focusHelp** | optional | Boolean | false | Makes the help text appear when the field gets focus |
| **fullWidth** | optional | Boolean | | Set to `true` change the layout of the field better fitted for full width |
| **help** | optional | String | | Help text below the field |
| **hideValidation** | optional | Boolean |  | Set to true to hide invalid state indicators |
| **hideSpinner** | optional | Boolean | true | Set to false to show the default browser step indicator on number inputs |
| **hideClear** | optional | Boolean | true | Set to false to show the default browser clear button |
| **label** | optional | String | | Text label; unless `floatingLabel` is `true`, the label is functionally equal to a placeholder |


<a id="input-options"></a>
### Input options

These options also have effect on the generated HTML input field.

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **autofocus** (React: **autoFocus**) | optional | Boolean | | Set to `true` to give the input field autofocus; NOTE: does not work on iOS, set focus explicitly when an event is fired |
| **disabled** | optional | Boolean | | Creates a disabled input field |
| **ignoreEvents** | optional | Array | | List of input event names to ignore, for instance `["onblur"]` |
| **multiLine** | optional | Boolean | | Set to `true` to create a textarea instead of an text input field |
| **name** | optional | String | | Input element name |
| **readonly** (React: **readOnly**) | optional | Boolean | | Creates a readonly input field |
| **rows** | optional (only when `multiLine` is `true`) | Number | | The number of rows for the textarea |
| **type** | optional | String: "text", "password", "email", "number", ... | "text" | Type of input element |
| **value** | optional | String | | Input value |
| **defaultValue** | optional | String | | Initial input value |
| **onChange**  | optional | Function `({focus::Boolean, setInputState({ focus, value }) -> undefined, dirty::Boolean, value::String, el::HTMLElement, invalid::Boolean, error:String}) -> undefined` | | Callback function that receives the field state |


<a id="validation-options"></a>
### Validation options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **error**     | optional | String | | Message that is displayed when the field is invalid |
| **max**       | optional | Number | | Maximum value (for type: number) |
| **maxlength** (React: **maxLength**) | optional | Integer | | Maximum number of characters (for type: text, email, search, password, tel, or url; browsers do not support this for type "number") |
| **min**       | optional | Number | | Minimum value (for type: number) |
| **minlength** (React: **minLength**) | optional | Integer | | Minimum number of characters (for type: text, email, search, password, tel, or url) |
| **optionalIndicator** | optional | String |   | String to indicate that the field is optional; added to the label string |
| **pattern**   | optional | String | | Validation regex pattern for fields of `type` text, search, url, tel, email, password | 
| **required**  | optional | Boolean | false  | Set to `true` to use HTML5 field validation to test for a non-empty value; adds a "required mark" (asterisk character) to the label |
| **requiredIndicator** | optional | String | "*"  | String to indicate that the field is required; added to the label string |
| **valid**     | optional | Boolean | | Use for per field validation when the field value is kept in local state, for instance when using a form validator |
| **error**     | optional | String | | Error message when `valid` is `false` |
| **validate**  | optional | Function `(value::String) -> {valid::Boolean, error::String}` | | Use for custom per field validation when you don't keep the field value in a local state (in that case, use `valid`) |
| **validateAtStart** | optional | Boolean | | Set to `true` to validate the field before any user action |
| **validateOnInput** | optional | Boolean | | Set to `true` to validate the field at the first keypress |
| **validateResetOnClear** | optional | Boolean | | Set to `true` to re-initiate validation state when the field is cleared |



<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **className**     | optional       | String   |             | Extra CSS class appended to `pe-textfield` |
| **id**        | optional       | String   |             | HTML element id |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex** (React: **tabIndex**) | optional       | Integer  | 0           | Tab index |
| **events** | optional | Object | | Input events; options object containing one or more events; predefined events are (Mithril) `onfocus`, `onblur`, `oninput`, `onfocus`, `onclick`, `onkeydown`, (React) `onFocus`, `onBlur`, `onInput`, `onFocus`, `onClick`, `onKeyDown`; events with the same name that are specified in the `events` option will overwrite the predefined functions; use `ignoreEvents` to ignore specific events  |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="css-classes"></a>
## CSS classes

* [Text Field classes](../../packages/polythene-css-classes/textfield.js)


