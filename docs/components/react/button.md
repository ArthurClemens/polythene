[Back to Polythene Button main page](../button.md)

# Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
  - [Events](#events)
  - [Variations](#variations)
  - [A row of buttons](#a-row-of-buttons)
  - [Mobile and tap delay](#mobile-and-tap-delay)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[Button options](../button.md)


<a name="usage"></a>
## Usage

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/5db99xoj/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Button } from "polythene-react"

<Button label="Button" />
~~~

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/5z374g58/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, Button } from "polythene-react"

h(Button, {
  label: "Button"
})
~~~

<a name="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)


<a name="events"></a>
### Events

Add an onClick event:

~~~jsx
<Button
  label="Button"
  events={{
    onClick: () => console.log("click")
  }}
/>
~~~

With hyperscript:

~~~javascript
h(Button, {
  label: "Button",
  events: {
    onClick: () => console.log("click")
  }
})
~~~

<a name="variations"></a>
### Variations

* The hover effect can be hidden with `wash: false`.
* The ripple effect on click can be hidden with `ink: false`.
* Button contains no icon as this is not part of the Material Design guidelines; use [Icon Button](../icon-button.md) instead.


<a name="a-row-of-buttons"></a>
### A row of buttons

When placed inside an element with classname `pe-button-row`, buttons will get a side margin to set them apart. The row element itself will have an negative side margin so that the first button still lines up properly.


<a name="mobile-and-tap-delay"></a>
### Mobile and tap delay

To remove the tap delay on mobile devices it is advisable to use a library like [Fastclick](https://github.com/ftlabs/fastclick). `polythene-fastclick` is a simple wrapper around the Fastclick library.

~~~javascript
import { addFastClick } from "polythene-fastclick"

addFastClick()
~~~


<a name="appearance"></a>
## Appearance

<a name="styling"></a>
### Styling

Below are examples how to change the Button appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

#### Themed component

~~~javascript
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".bordered-button", {
  color_light_text:   "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text:    "yellow",
  color_dark_border:  "yellow"
})

<Button
  label="Borders"
  className="bordered-button"
  borders
/>
~~~

#### CSS

Change CSS using the [Button CSS classes](../../../packages/polythene-css-classes/button.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/button"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Button
  style={{
    backgroundColor: "#EF6C00"
    color: "#fff"
  }}
/>
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


