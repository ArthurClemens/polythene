[Back to Polythene Ripple main page](../ripple.md)

# Ripple component for Mithril


## Options

[Ripple options](../ripple.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/rcyn8f64/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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


## Variations

Create multiple simultaneous ripples with option `multi`.


## Appearance

### Styling

Below are examples how to change the Ripple appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
Ripple.theme(".themed-ripple", {
  color_light:   "#F44336"
})

m(Ripple, {
  className: "themed-ripple"
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
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


