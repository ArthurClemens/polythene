# Text field

Form input field. Generates a styled text input element.

Features:

* optional (floating) label
* helper message
* multi-line
* dense or full-width formatting
* required state
* front-end validation
* character counter


## Usage

~~~javascript
import m from "mithril";
import textfield from "polythene-textfield";

const field = m(textfield, {
  label: "Name"
});
~~~

Generates a text input field with a hint label that disappears when text is entered (functionally equal to a placeholder).

Other types of input fields can be created using option `type` (for instance "number", "email" and so on).

To create a floating hint label that moves up when the field gets focus:

~~~javascript
const field = m(textfield, {
  label: "Name",
  floatingLabel: true
});
~~~

A more compact field with floating hint label:

~~~javascript
const field = m(textfield, {
  label: "Name",
  dense: true,
  floatingLabel: true
});
~~~

Full-width field, compact field and with floating hint label:

~~~javascript
const field = m(textfield, {
  label: "Name",
  fullWidth: true,
  dense: true,
  floatingLabel: true
});
~~~

Create a multi-line field (textarea) with `multiline`:

~~~javascript
const field = m(textfield, {
  label: "Name",
  multiline: true,
  rows: 4
});
~~~

### Help texts

Pass `help` to create a help text below the field:

~~~javascript
const field = m(textfield, {
  label: "Your Name",
  help: "Enter the name as written on the credit card"
});
~~~

Pass `help` to create a help text below the field:

~~~javascript
const field = m(textfield, {
  label: "Your Name",
  help: "Enter the name as written on the credit card"
});
~~~

To show the help text only on focus, use `focusHelp`:

~~~javascript
const field = m(textfield, {
  label: "Your Name",
  help: "Enter the name as written on the credit card",
  focusHelp: true
});
~~~

A help text also function as error message when the field input is invalid.


### Front-end validation

Passing `required` adds a `*` to the label, and uses HTML5 field validation to test for a non-empty value:

~~~javascript
const field = m(textfield, {
  label: "Your Name",
  required: true,
  floatingLabel: true,
  help: "Enter the name as written on the credit card"
});
~~~

When left empty, the field will show an error status.

Other supported validation checks:

* `minlength`
* `maxlength`
* `min`
* `max`
* `pattern`

#### When to validate

By default the component will validate only when a user action has been done (triggered by "onblur"). This to make sure that required fields don"t scream INVALID at page load.

Variations:

* To validate immediately, use option `validateAtStart`
* To validate on key press before "onblur", use option `validateOnInput`
* To reset all error messages when the field is cleared, use option `validateResetOnClear`


### Custom validation

Option `validate` is a function that accepts the current field value and is called on every `oninput`. Return an object with attributes `valid` (Boolean) and `error` (message string):

~~~javascript
const field = m(textfield, {
  validate: value => {
    if (value !== value.toLowerCase()) {
      return {
        valid: false,
        error: "Only use lowercase characters."
      };
    }
  }
});
~~~

The validation function can of course have multiple checks.



### Character counter

Adding `counter` with a value adds a counter below the field:

~~~javascript
const field = m(textfield, {
  label: "Your Name",
  counter: 30
});
~~~

After 30 characters, the field with show an error status, but the user will be able to type more characters.

To limit the input to 30 characters, add constraint `maxlength`:

~~~javascript
const field = m(textfield, {
  label: "Your Name",
  counter: 30,
  maxlength: 30,
  error: "You have exceeded the maximum number of characters."
});
~~~


### Programmatically giving focus

A field can be given focus either by passing the options `autofocus` or `focus`. Because `focus` is set in JavaScript, and the component option is read every redraw, special care must be taken to not keep the field in a permanent focused state.

Instead of passing a fixed value to `focus`, we use a variable. Option `` gets the up to date status of the field (it gets called on every event), so we can use that to reset the focus state.

~~~javascript
import m from "mithril";
import textfield from "polythene-textfield";
import button from "polythene-button";

const component = {
  view: vnode => block([
    m(textfield, {
      label: "Your name",
      focus: vnode.state.hasFocus,
      getState: focusState => vnode.state.hasFocus = focusState.focus
    }),
    m(button, {
      label: "Give focus",
      events: {
        onclick: () => vnode.state.hasFocus = true
      }
    })
  ])
};§
~~~

### Update the value from outside

If the textfield value needs to be set from outside, for instance from a controller value, use option `value` as function:

~~~javascript
import m from "mithril";
import textfield from "polythene-textfield";
import button from "polythene-button";

const component = {
  value: "00000",
  view: vnode => block([
    m(textfield, {
      value: () => vnode.state.value
    }),
    m(button, {
      label: "Randomize",
      events: {
        onclick: () => vnode.state.value = Math.floor(Math.random() * 100000)
      }
    })
  ])
};
~~~

To keep any user input, also use `getState` to update the value with each change.

~~~javascript
getState: state => vnode.state.value = state.value
~~~



## Appearance

### Styling

Below are examples how to textfield appearance, either with a theme or with CSS.

#### Themed component

~~~javascript
textfield.theme(".themed-textfield", {
  color_light_input_text: "#0D47A1",
  color_light_input_background: "#BBDEFB",
  color_light_focus_border: "#0D47A1",
  input_padding_h: 16
});

m(textfield, {
  class: "themed-textfield",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(textfield, {
  style: {
    background: "#2196F3"
  },
  // ... other options
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **class**     | optional       | String   |             | Extra CSS class appended to `pe-textfield` |
| **id**        | optional       | String   |             | HTML element id |
| **before**    | optional       | Mithril element |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | Mithril element |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex**  | optional       | Integer  | 0           | Tab index |
| **events** | optional | Object | | Input events; options object containing one or more events; predefined events are `onfocus`, `onblur`, `oninput`, `onfocus`, `onclick`, `onkeydown`; events with the same name that are specified in the `events` option will overwrite the predefined functions; use `ignoreEvents` to ignore specific events  |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Text field options

These options have effect on the overall component (label, input, help, error).

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **counter** | optional | Number | | Set to any number greater than 0 to create a character counter below the field; optionally combine with `maxlength` (see below) |
| **dense** | optional | Boolean | | Creates a more compact layout |
| **error** | optional | String | | Message that is displayed when the field is invalid |
| **floatingLabel** | optional | Boolean | false | Makes the label move upward when the field gets focus |
| **focusHelp** | optional | Boolean | false | Makes the help text appear when the field gets focus |
| **fullWidth** | optional | Boolean | | Set to `true` change the layout of the field better fitted for full width |
| **getState** | | | | See: Functions |
| **help** | optional | String | | Help text below the field |
| **hideValidation** | optional | Boolean |  | Set to true to hide invalid state indicators |
| **hideSpinner** | optional | Boolean | true | Set to false to show the default browser step indicator on number inputs |
| **hideClear** | optional | Boolean | true | Set to false to show the default browser clear button |
| **label** | optional | String | | Text label; unless `floatingLabel` is `true`, the label is functionally equal to a placeholder |
| **validate** | | | | See: Functions |
| **validateAtStart** | optional | Boolean | | Set to `true` to validate the field before any user action |
| **validateOnInput** | optional | Boolean | | Set to `true` to validate the field at the first keypress |
| **validateResetOnClear** | optional | Boolean | | Set to `true` to re-initiate validation state when the field is cleared |

### Input options

These options also have effect on the generated HTML input field.

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **autofocus** | optional | Boolean | | Set to `true` to give the input field autofocus |
| **disabled** | optional | Boolean | | Creates a disabled input field |
| **ignoreEvents** | optional | Array | | List of input event names to ignore, for instance `["onblur"]` |
| **focus** | optional | Boolean | | Set to `true` to give focus to the field; WARNING: make sure that the value is also reset to `false` (using a variable) or the field will always have focus |
| **max** | optional | Number | | Maximum value (for type: number) |
| **maxlength** | optional | Integer | | Maximum number of characters (for type: text, email, search, password, tel, or url) |
| **min** | optional | Number | | Minimum value (for type: number) |
| **minlength** | optional | Integer | | Minimum number of characters (for type: text, email, search, password, tel, or url) |
| **multiline** | optional | Boolean | | Set to `true` to create a textarea instead of an text input field |
| **name** | optional | String | | Input element name |
| **pattern** | optional | String | | Validation regex pattern for fields of `type` text, search, url, tel, email, password | 
| **required** | optional | Boolean | false  | Set to `true` to use HTML5 field validation to test for a non-empty value; adds a "required mark" (asterisk character) to the label |
| **requiredIndicator** | optional | String | "*"  | String to indicate that the field is required; added to the label string |
| **optionalIndicator** | optional | String |   | String to indicate that the field is optional; added to the label string |
| **readonly** | optional | Boolean | | Creates a readonly input field |
| **rows** | optional (only when `multiline` is `true`) | Number | | The number of rows for the textarea |
| **type** | optional | String: "text", "password", "email", "number", ... | "text" | Type of input element |
| **value** | | | | See: Functions |

### Functions

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **value** | optional | String or Function | | Input element value; use as function to update the value from outside |
| **getState**  | optional | Function(state {Object}) | | Callback function that accepts the field state (Object with properties `focus` {Boolean}, `dirty` {Boolean}, `value` {String}, `el` {HTMLElement}, `invalid` {Boolean}, `error` {String}) |
| **validate** | optional | Function(value) | | Use for custom validation; the validate function accepts the current field value; it should return an object with attributes `valid` (Boolean) and `error` (message string) |



## CSS classes

| **Element**        | **Key**           |  **Class** |
| ------------------ | ----------------- | --------------- |
| Component          | component         | `pe-textfield` |
| Input area         | inputArea         | `pe-textfield__input-area` |
| Input              | input             | `pe-textfield__input` |
| Label              | label             | `pe-textfield__label` |
| Counter            | counter           | `pe-textfield__counter` |
| Help               | help              | `pe-textfield__help` |
| Focus help         | focusHelp         | `pe-textfield__help-focus` |
| Error              | error             | `pe-textfield__error` |
| Error placeholder  | error             | `pe-textfield__error-placeholder` |
| Required indicator | requiredIndicator | `pe-textfield__required-indicator` |
| Optional indicator | optionalIndicator | `pe-textfield__optional-indicator` |
 
| **State**          | **Key**     |  **Class** |
| ------------------ | ----------- | --------------- |  
| Focused state      | stateFocused     | `pe-textfield--focused` |
| Disabled state     | stateDisabled    | `pe-textfield--disabled` |
| Read-only state    | stateReadonly    | `pe-textfield--readonly` |
| Invalid state      | stateInvalid     | `pe-textfield--invalid` |
| Dirty state        | stateDirty       | `pe-textfield--dirty` |
| Has floating label | hasFloatingLabel | `pe-textfield--floating-label` |
| Dense              | isDense          | `pe-textfield--dense` |
| Required           | isRequired       | `pe-textfield--required` |
| Has full width     | hasFullWidth     | `pe-textfield--full-width` |
| Has counter        | hasCounter       | `pe-textfield--counter` |
| Hide spinner       | hideSpinner      | `pe-textfield--hide-spinner` |
| Hide clear         | hideClear        | `pe-textfield--hide-clear` |
| Hide validation    | hideValidation   | `pe-textfield--hide-validation` |


