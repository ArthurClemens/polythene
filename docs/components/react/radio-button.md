[Back to Polythene Radio Button main page](../radio-button.md)

# Radio Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Reading and setting the checked state](#reading-and-setting-the-checked-state)
  - [Shared options](#shared-options)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Radio Button options](../radio-button.md)



<a id="usage"></a>
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


<a id="reading-and-setting-the-checked-state"></a>
### Reading and setting the checked state

Radio Buttons will generally be used with a [Radio Group](radio-group.md) that manages the buttons' (singular) selected state.

Equivalent to the example above, now including state handling:

<a id="with-jsx"></a>
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

<a id="with-hyperscript"></a>
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

See also [Handling state](../../handling-state.md).


<a id="reading-the-checked-state"></a>
#### Reading the checked state

To read the checked state, use `onChange`:

<a id="with-jsx-1"></a>
#### With JSX

~~~jsx
<RadioGroup
  onChange={state => this.setState({ checkedValue: state.value })}
/>
~~~

<a id="with-hyperscript-1"></a>
#### With hyperscript

~~~javascript
h(RadioGroup, {
  onChange: state => this.setState({ checkedValue: state.value })
})
~~~

But unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group:


<a id="setting-the-checked-state"></a>
#### Setting the checked state

Unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group.

To set the initially checked radio button, pass `defaultChecked` to the `button` option:

~~~javascript
[
  {
    value: "1",
    label: "One",
    defaultChecked: true
  },
  {
    value: "2",
    label: "Two",
  }
]
~~~




<a id="shared-options"></a>
### Shared options

Use RadioGroup's option `all` to pass options that should be applied to all Radio Buttons.

<a id="with-jsx-2"></a>
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

<a id="with-hyperscript-2"></a>
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



<a id="appearance"></a>
## Appearance

Both Radio Button and Radio Group can be styled using `theme`, `style` and CSS.


<a id="styling"></a>
### Styling

Below are examples how to change the Radio Button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { RadioButtonCSS } from "polythene-css"

RadioButtonCSS.addStyle(".themed-radio-button", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

<RadioButton className="themed-radio-button" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the CSS classes:

* [Radio Button CSS classes](../../../packages/polythene-css-classes/radio-button.js)
* [Radio Group CSS classes](../../../packages/polythene-css-classes/radio-group.js)

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/radio-button"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<RadioButton
  style={{
    color: "#2196F3"
  }}
/>
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


