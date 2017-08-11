[Back to Polythene Radio Button main page](../radio-button.md)

# Radio Button component for React


## Options

[Radio Button options](../radio-button.md)


## Usage

Radio buttons always come in groups. To simply show 2 radio buttons, without handling their state, does not make much sense:

~~~jsx
import React from "react"
import { RadioButton } from "polythene-react"

// Inferior solution
<div>
  <RadioButton 
    name="company"
    value="1"
    label="One"
  />
  <RadioButton 
    name="company"
    value="2"
    label="Two"
  />
</div>
~~~

### Reading and setting the checked state

Radio Buttons will generally be used with a [Radio Group](radio-group.md) that manages the buttons' (singular) selected state.

Equivalent to the example above, now including state handling:

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/b1vbbLgw/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { RadioGroup } from "polythene-react"

// Better solution
<RadioGroup
  name="company"
  buttons={[
    {
      value: "One",
      label: "One",
    },
    {
      value: "Two",
      label: "Two",
    }
  ]}
/>
~~~

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/fhqrcuL9/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, RadioGroup } from "polythene-react"

// Better solution
h(RadioGroup, {
  name: "company",
  buttons: [
    {
      value: "1",
      label: "One",
    },
    {
      value: "2",
      label: "Two",
    }
  ]
})
~~~

Note that `name` is required when using RadioGroup.

See also [Handling state](../handling-state.md).

To read the checked state, use `onChange`. But unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group:

#### With JSX

~~~jsx
<RadioGroup
  onChange={state => this.setState({ checkedValue: state.value })}
/>
~~~

#### With hyperscript

~~~javascript
h(RadioGroup, {
  onChange: state => this.setState({ checkedValue: state.value })
})
~~~

### Shared options

Use RadioGroup's option `all` to pass options that should be applied to all Radio Buttons.

#### With JSX

~~~jsx
<RadioGroup
  name="company"
  all={{
    className: "my-class"
  }}
  buttons={[
    // ...
  ]}
/>
~~~

#### With hyperscript

~~~javascript
h(RadioGroup, {
  name: "company",
  all: {
    className: "my-class"
  },
  buttons: [
    // ...
  ]
})
~~~


## Appearance

Both Radio Button and Radio Group can be styled using `theme`, `style` and CSS.

### Styling

Below are examples how to change the Radio Button appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~javascript
RadioButton.theme(".themed-radio-button", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

<RadioButton className="themed-radio-button" />
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-radio-button/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-radio-button"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<RadioButton
  style={{
    color: "#2196F3"
  }}
/>
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


