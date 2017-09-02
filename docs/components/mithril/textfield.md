[Back to Polythene Text Field main page](../textfield.md)

# Text Field component for Mithril


## Options

[Text Field options](../textfield.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/m396q0hh/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { TextField } from "polythene-mithril"

m(TextField, {
  label: "Name"
})
~~~

This creates a text input field with a hint label that disappears when text is entered (functionally equal to a placeholder). 

Other types of input fields can be created using option `type` (for instance "number", "email" and so on).

To create a floating hint label that moves up when the field gets focus:

~~~javascript
m(TextField, {
  label: "Name",
  floatingLabel: true
})
~~~

A more compact field with floating hint label:

~~~javascript
m(TextField, {
  label: "Name",
  floatingLabel: true,
  dense: true
})
~~~

Full-width field, compact field and with floating hint label:

~~~javascript
m(TextField, {
  label: "Name",
  floatingLabel: true,
  dense: true,
  fullWidth: true
})
~~~

Create a multi-line field (textarea) with `multiLine`:

~~~javascript
m(TextField, {
  label: "Name",
  multiLine: true,
  rows: 4
})
~~~

### Help texts

Pass `help` to create a help text below the field:

~~~javascript
m(TextField, {
  label: "Your Name",
  help: "Enter the name as written on the credit card"
})
~~~

To show the help text only on focus, use `focusHelp`:

~~~javascript
m(TextField, {
  label: "Your Name",
  help: "Enter the name as written on the credit card",
  focusHelp: true
})
~~~

A help text also function as error message when the field input is invalid.


### Front-end validation

Passing `required` adds a mark `*` to the label, and uses HTML5 field validation to test for a non-empty value:

~~~javascript
m(TextField, {
  label: "Your Name",
  required: true,
  floatingLabel: true,
  help: "Enter the name as written on the credit card"
})
~~~

When left empty, the field will show an error status.

Other supported validation checks:

* `minlength`
* `maxlength`
* `min`
* `max`
* `pattern`

#### When to validate

By default the component will validate only when a user action has been done (triggered by "onblur"). This to make sure that required fields don't scream INVALID at initial page load.

Variations:

* To do validate immediately, use option `validateAtStart`
* To validate on key press before "onblur", use option `validateOnInput`
* To reset all error messages when the field is cleared, use option `validateResetOnClear`


### Custom validation

Option `validate` is a function that accepts the current field value and is called on every `oninput`. Return an object with attributes `valid` (Boolean) and `error` (message string):

~~~javascript
m(TextField, {
  validate: value => {
    if (value !== value.toLowerCase()) {
      return {
        valid: false,
        error: "Only use lowercase characters."
      }
    }
  }
})
~~~

### Character counter

Adding `counter` with a value adds a live counter below the field:

~~~javascript
m(TextField, {
  label: "Your Name",
  counter: 30
})
~~~

After 30 characters, the field with show an error status, but the user will be able to type more characters.

To limit the input to 30 characters, add constraint `maxlength`:

~~~javascript
m(TextField, {
  label: "Your Name",
  counter: 30,
  maxlength: 30,
  error: "You have exceeded the maximum number of characters."
})
~~~

### Reading and setting the value

See also [Handling state](../../handling-state.md).

To read the input value, use `onChange`:

~~~javascript
m(TextField, {
  onChange: newState => vnode.state.value = newState.value
})
~~~

To programmatically set the input value, pass `value`:

~~~javascript
m(TextField, {
  onChange: newState => vnode.state.value = newState.value,
  value: vnode.state.value
})
~~~

Finally, you can also use Mithril's `m.withAttr`:

~~~javascript
m(TextField, {
  events: {
    oninput: m.withAttr("value", value => vnode.state.value = value),
  },
  value: vnode.state.value
})
~~~

### Programmatically giving focus

Reading and setting the focus state is similar to handling the input value:

~~~javascript
m(TextField, {
  label: "Your name",
  onChange: newState => vnode.state.hasFocus = newState.focus,
  focus: vnode.state.hasFocus
}),
m(Button, {
  label: "Set focus",
  events: {
    onclick: () => vnode.state.hasFocus = true
  }
})
~~~


## Appearance

### Styling

Below are examples how to change the TextField appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
TextField.theme(".themed-textfield", {
  color_light_input_text: "#0D47A1",
  color_light_input_background: "#BBDEFB",
  color_light_focus_border: "#0D47A1",
  input_padding_h: 16
})

m(TextField, {
  className: "themed-textfield"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-textfield/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-textfield"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(TextField, {
  style: {
    background: "#2196F3"
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


