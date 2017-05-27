[Back to Polythene SVG main page](SVG.md)

# SVG component for Mithril



## Usage

### With trusted SVG text

~~~javascript
import m from "mithril"
import { SVG } from "polythene-mithril"

const starsSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

// render component
m(SVG, m.trust(starsSVG))

// or
m(SVG, {
  content: m.trust(starsSVG)
  // ... other attributes
})
~~~

### With source files

~~~javascript
m(SVG, {
  src: "app/assets/stars.svg"
})
~~~

### With Javascript modules

To facilitate importing (and reuse) of SVG strings, you may put them in Javascript modules:

~~~javascript
// assets/svg/stars.js
var m = require("mithril")
module.exports = m.trust("<svg xmlns ... />")
~~~

Now you can import the SVG like any module:

~~~javascript
import m from "mithril"
import { SVG } from "polythene-mithril"
import starsSVG from "assets/svg/stars"

m(SVG, starsSVG)
~~~

A large collection of such ready to use SVG modules is available at [mmsvg](https://github.com/ArthurClemens/mmsvg).


### Usage with Icon component

SVG options can be passed to [icon](Icon-mithril.md):

~~~javascript
import { Icon } from "polythene-mithril"

m(Icon, {
  svg: m.trust(svgString)
})
~~~



## Options

[SVG options](SVG.md)



## Appearance

### Styling

Below are examples how to change the SVG appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~javascript
SVG.theme(".themed-svg", {
  color_light: "#0d47a1",
  color_dark: "orange"
})

m(SVG, {
  className: "themed-svg",
  // ... other options
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-svg/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-svg";
~~~

#### Style option

Some style attributes can be set using option `style`. For example:

~~~javascript
m(SVG, {
  style: {
    color: "#ef6c00"
  },
  // ... other options
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


