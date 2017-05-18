[Back to Polythene Raised Button main page](RaisedButton.md)

# Raised Button component for Mithril



## Usage

### With JSX

~~~jsx
import React from "react"
import { RaisedButton } from "polythene-react"

// render component
<RaisedButton label="Button" />
~~~

### With hyperscript

~~~javascript
import { RaisedButton } from "polythene-react"

h(RaisedButton, {
  label: "Button"
})
~~~



## Links

See description in [Button](Button-React.md)



## Options

[Raised Button options](RaisedButton.md)



## Appearance

### Styling

Below are examples how to change the raised button appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~jsx
RaisedButton.theme(".themed-raised-button", {
  color_light_background: "#ff1744",
  color_light_text:       "#fff"
})

<RaisedButton className="themed-raised-button" />
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-raised-button/src/classes.js`

Class names can be imported with:

~~~javascript
import { CoreRaisedButton } from "polythene-core-raised-button";

// CoreRaisedButton.classes
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<RaisedButton style={{ color: "#fff", backgroundColor: "#ef6c00" }} />
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

