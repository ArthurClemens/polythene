[Back to Polythene Icon Button main page](../icon-button.md)

# Icon Button component for Mithril


## Options

[Icon Button options](../icon-button.md)


## Usage

Icon Button takes an icon options object:

~~~javascript
import m from "mithril"
import { IconButton } from "polythene-mithril"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

m(IconButton, {
  icon: { svg: m.trust(starsSVG) }
})
~~~

See [Icon](Icon.md) for more Icon options.

Alternatively, pass an Icon as child:

~~~javascript
import m from "mithril"
import { Icon, IconButton, SVG } from "polythene-mithril"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

const StarIcon = m(Icon,
  m(SVG, m.trust(starsSVG))
)

m(IconButton, StarIcon)
~~~


### Links

See: [URLs and router links](../../handling-urls.md)


## Appearance

Pass [Button](../button.md) options to change the behaviour and appearance - see some examples below.


### Interactivity

Disable hover and ripple effects:

~~~javascript
m(IconButton, {
  icon: { svg: m.trust(starsSVG) },
  wash: false,
  ink: false
})
~~~

Alternatively, use `inactive`:

~~~javascript
m(IconButton, {
  icon: { svg: m.trust(starsSVG) },
  inactive: true
})
~~~

### Size

`compact` creates reduced padding:

~~~javascript
m(IconButton, {
  icon: { svg: m.trust(starsSVG) },
  compact: true
})
~~~

### Styling

Below are examples how to change the icon button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
IconButton.theme(".themed-icon-button", {
  padding:                24,
  color_light_background: "purple",
  color_dark_background:  "orange",
  color_light:            "white"
})

m(IconButton, {
  className: "themed-icon-button"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-icon-button/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-icon-button";
~~~

The icon color is set with the CSS (text) `color` attribute of the parent element. For example:

~~~css
.pe-button-icon {
  color: red;
}
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(IconButton, {
  style: {
    color: "#FFCCBC",
    backgroundColor: "#4E342E"
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


