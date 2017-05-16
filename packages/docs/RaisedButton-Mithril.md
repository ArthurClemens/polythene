[Back to Polythene Raised Button main page](RaisedButton.md)

# Raised Button component for Mithril



## Usage

~~~javascript
import m from "mithril"
import { RaisedButton } from "polythene-mithril"

m(RaisedButton, {
  label: "Button"
})
~~~



## Links

See description in [Button](Button-Mithril.md)



## Options

[Raised Button options](RaisedButton.md)



## Appearance

### Styling

Below are examples how to change the raised button appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~javascript
RaisedButton.theme(".themed-raised-button", {
  color_light_background: "#ff1744",
  color_light_text:       "#fff"
})

m(RaisedButton, {
  className: "themed-raised-button",
  // ... other options
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-raised-button/src/classes.js`

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(RaisedButton, {
  style: {
    backgroundColor: "#ef6c00",
    color: "#fff"
  },
  // ... other options
})
~~~
