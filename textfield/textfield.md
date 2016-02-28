# Text field

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/textfield">Demo</a>

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
import m from 'mithril';
import textfield from 'polythene/textfield/textfield';

const field = m.component(textfield, {
    label: 'Name'
});
~~~

Generates a text input field with a hint label that disappears when text is entered (functionally equal to a placeholder).

Other types of input fields can be created using option `type` (for instance "number", "email" and so on).

To create a floating hint label that moves up when the field gets focus:

~~~javascript
const field = m.component(textfield, {
    label: 'Name',
    floatingLabel: true
});
~~~

A more compact field with floating hint label:

~~~javascript
const field = m.component(textfield, {
    label: 'Name',
    dense: true,
    floatingLabel: true
});
~~~

Full-width field, compact field and with floating hint label:

~~~javascript
const field = m.component(textfield, {
    label: 'Name',
    fullWidth: true,
    dense: true,
    floatingLabel: true
});
~~~

Create a multi-line field (textarea) with `multiline`:

~~~javascript
const field = m.component(textfield, {
    label: 'Name',
    multiline: true,
    rows: 4
});
~~~

### Help texts

Pass `help` to create a help text below the field:

~~~javascript
const field = m.component(textfield, {
    label: 'Your Name',
    help: 'Enter the name as written on the credit card'
});
~~~

Pass `help` to create a help text below the field:

~~~javascript
const field = m.component(textfield, {
    label: 'Your Name',
    help: 'Enter the name as written on the credit card'
});
~~~

To show the help text only on focus, use `focusHelp`:

~~~javascript
const field = m.component(textfield, {
    label: 'Your Name',
    help: 'Enter the name as written on the credit card',
    focusHelp: true
});
~~~

A help text has a double function as error message when the field input is invalid.


### Front-end validation

Passing `required` adds a `*` to the label, and uses HTML5 field validation to test for a non-empty value:

~~~javascript
const field = m.component(textfield, {
    label: 'Your Name',
    required: true,
    floatingLabel: true,
    help: 'Enter the name as written on the credit card'
});
~~~

When left empty, the field will show an error status.

Other supported validation checks:

* `minlength`
* `maxlength`
* `min`
* `max`

#### When to validate

By default the component will validate only when a user action has been done (triggered by "onblur"). This to make sure that required fields don't scream INVALID at page load.

Variations:

* To validate immediately, use option `validateAtStart`
* To validate on key press before "onblur", use option `validateOnInput`


### Custom validation

Option `validate` is a function that accepts the current field value and is called on every `oninput`. Return an object with attributes `valid` (Boolean) and `error` (message string):

~~~javascript
const field = m.component(textfield, {
    validate: (value) => {
        if (value !== value.toLowerCase()) {
            return {
                valid: false,
                error: 'Only use lowercase characters.'
            };
        }
    }
});
~~~

The validation function can of course have multiple checks.



### Character counter

Adding `counter` with a value adds a counter below the field:

~~~javascript
const field = m.component(textfield, {
    label: 'Your Name',
    counter: 30
});
~~~

After 30 characters, the field with show an error status, but the user will be able to type more characters.

To limit the input to 30 characters, add constraint `maxlength`:

~~~javascript
const field = m.component(textfield, {
    label: 'Your Name',
    counter: 30,
    maxlength: 30,
    error: 'You have exceeded the maximum number of characters.'
});
~~~


### Programmatically giving focus

A field can be given focus either by passing the options `autofocus` or `focus`. Because `focus` is set in JavaScript, and the component option is read every redraw, special care must be taken to not keep the field in a permanent focused state.

Instead of passing a fixed value to `focus`, we use a variable. Option `` gets the up to date status of the field (it gets called on every event), so we can use that to reset the focus state.

~~~javascript
import m from 'mithril';
import textfield from 'polythene/textfield/textfield';
import button from 'polythene/button/button';

const module = {};
module.controller = () => {
    return {
        focusState: false
    };
};
module.view = (ctrl) => {
    return m('.form', [
        m.component(textfield, {
            label: 'Your name',
            focus: ctrl.focusState,
            getState: (state) => (ctrl.focusState = state.focus)
        }),
        m.component(button, {
            label: 'Give focus',
            raised: true,
            events: {
                onclick: () => (ctrl.focusState = true)
            }
        })
    ]);
};
~~~

### Update the value from outside

If the textfield value needs to be set from outside, for instance from a controller value, use option `value` as function:

~~~javascript
const module = {};
module.controller = () => {
    return {
        volume: 0
    };
};
module.view = (ctrl) => {
    return m.component(textfield, {
        type: 'number',
        value: () => (ctrl.volume.toString()),
        events: {
            oninput: () => {}, // only update on blur
            onchange: (e) => (ctrl.volume = e.target.value),
        },
        maxlength: 3,
        min: 0,
        max: 255,
        hideValidation: true // don't show red line
    })
};
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-textfield' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick`, applied to the input element |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

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

### Input options

These options are also passed to the component, but have effect on the generated HTML input field.

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **autofocus** | optional | Boolean | | Set to `true` to give the input field autofocus |
| **events** | optional | Object | | Input events; options object containing one or more events; predefined events are `onfocus`, `onblur`, `oninput`, `onfocus`, `onclick`, `onkeydown`; events with the same name that are specified in the `events` option will overwrite the predefined functions  |
| **focus** | optional | Boolean | | Set to `true` to give focus to the field; WARNING: make sure that the value is also reset to `false` (using a variable) or the field will always have focus |
| **max** | optional | Number | | Maximum value (for type: number) |
| **maxlength** | optional | Integer | | Maximum number of characters (for type: text, email, search, password, tel, or url) |
| **min** | optional | Number | | Minimum value (for type: number) |
| **minlength** | optional | Integer | | Minimum number of characters (for type: text, email, search, password, tel, or url) |
| **multiline** | optional | Boolean | | Set to `true` to create a textarea instead of an text input field |
| **name** | optional | String | | Input element name |
| **required** | optional | Boolean | false  | Set to `true` to use HTML5 field validation to test for a non-empty value; adds a "required mark" (asterisk character) to the label |
| **hideRequiredMark** | optional | Boolean | false  | Set to `true` to hide the "required mark" character |
| **rows** | optional (only when `multiline` is `true`) | Number | | The number of rows for the textarea |
| **tabindex** | optional | Integer | | Tab index |
| **type** | optional | String: 'text', 'password', 'email', 'number', ... | 'text' | Type of input element |
| **value** | | | | See: Functions |

### Functions
| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **value** | optional | String or Function | | Input element value; use as function to update the value from outside |
| **getState**  | optional | Function(state {Object}) | | Callback function that accepts the field state (Object with properties `focus` {Boolean}, `dirty` {Boolean}, `value` {String}, `el` {HTMLElement}) |
| **validate** | optional | Function(value) | | Use for custom validation; the validate function accepts the current field value; it should return an object with attributes `valid` (Boolean) and `error` (message string) |


## Default generated HTML

~~~html
<div class="textfield">
    <div class="input-label">
        <input class="input" type="text" />
    </div>
</div>
~~~

With a floating label:

~~~html
<div class="textfield floating-label">
    <div class="input-label">
        <input class="input" type="text" />
        <label>Your name</label>
    </div>
</div>
~~~

## Future

* Formatting of icon next to input field
* Formatting of autocomplete text field
* Formatting of search filter text field
* Growing (auto height) multiline text field
