[Back to Polythene Icon main page](../icon.md)

# Icon component for Mithril


## Options

[Icon options](../icon.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/ubzhapwy/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

### With trusted SVG text

~~~javascript
import m from "mithril"
import { Icon } from "polythene-mithril"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

m(Icon, {
  svg: m.trust(starsSVG)
})
~~~

or pass an SVG component as child:

~~~javascript
import m from "mithril"
import { Icon, SVG } from "polythene-mithril"

m(Icon,
  m(SVG, m.trust(starsSVG))
)
~~~

### With SVG source files

~~~javascript
m(Icon, {
  svg: { src: "app/assets/stars.svg" }
})
~~~

### With image source files

~~~javascript
m(Icon, {
  src: "img/arrow.png"
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
import { Icon } from "polythene-mithril"
import starsSVG from "assets/svg/stars"

m(Icon, { svg: starsSVG })
~~~

A large collection of such ready to use SVG modules is available at [mmsvg](https://github.com/ArthurClemens/mmsvg).


## Appearance

### Sizes

The size is set with option `size` (4 sizes). Use CSS for more finegrained control.


### Styling

Below are examples how to change the icon appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~javascript
Icon.theme(".themed-icon", {
  size_regular: 50,
  color_light:  "purple",
  color_dark:   "orange"
})

m(Icon, {
  className: "themed-icon"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-icon/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-icon";
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Icon, {
  style: {
    color: "#EF6C00"
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


