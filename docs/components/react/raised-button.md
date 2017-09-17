[Back to Polythene Raised Button main page](../raised-button.md)

# Raised Button component for React


## Options

[Raised Button options](../raised-button.md)


## Usage

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/sbtonwbf/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { RaisedButton } from "polythene-react"

<RaisedButton label="Button" />
~~~

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/hL8wmrpL/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { RaisedButton } from "polythene-react"

h(RaisedButton, {
  label: "Button"
})
~~~

### Links

See: [URLs and router links](../../handling-urls.md)


## Appearance

### Styling

Below are examples how to change the raised button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~jsx
import { RaisedButtonCSS } from "polythene-css"

RaisedButtonCSS.addStyle(".themed-raised-button", {
  color_light_background: "#ff1744",
  color_light_text:       "#fff"
})

<RaisedButton className="themed-raised-button" />
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-raised-button/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-raised-button";
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<RaisedButton
  style={{
    color: "#fff",
    backgroundColor: "#ef6c00"
  }}
/>
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


