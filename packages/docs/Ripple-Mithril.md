[Back to Polythene Ripple main page](Ripple.md)

# Ripple component for Mithril



## Usage

Append a ripple to any HTML element (which requires to have style `position: relative` and a size):

~~~javascript
import m from "mithril"
import { Ripple } from "polythene-mithril"

m(".relative-with-size",
  m(Ripple)
)
~~~

Use option `after` to append a Ripple to a Polythene component:

~~~javascript
import m from "mithril"
import { Ripple, ListTile } from "polythene-mithril"

m(ListTile, {
  title: "Title",
  after: m(Ripple)
})
~~~



## Options

[Ripple options](Ripple.md)



## Appearance

### Styling

Below are examples how to change the Ripple appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~javascript
Ripple.theme(".themed-ripple", {
  color_light:   "#F44336"
})

m(Ripple, {
  className: "themed-ripple",
  // ... other options
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-ripple/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-ripple";
~~~

By default the inherited `color` from the parent element is used. It can be changed with CSS:

~~~css
.pe-ripple {
  color: green;
}
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Ripple, {
  style: {
    color: "#2196F3"
  },
  // ... other options
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set



