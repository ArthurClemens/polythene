[Back to Polythene SVG main page](../svg.md)

# SVG component for React


## Options

[SVG options](SVG.md)


## Usage

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/qm31tx7b/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { SVG } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<SVG>{starsSVG}</SVG>

// or:

<SVG content={starsSVG} />
~~~

Note that JSX needs SVG attributes to be camelCased; see [React: All Supported SVG Attributes](https://facebook.github.io/react/docs/dom-elements.html#all-supported-svg-attributes).

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/3v5v5kdb/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, SVG } from "polythene-react"

// note the quoted SVG string:
const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

h(SVG, h.trust(starsSVG))

// or:

h(SVG, { content: h.trust(starsSVG) })
~~~

### With source files

~~~jsx
<SVG src={"app/assets/stars.svg"} />
~~~

or with hyperscript:

~~~javascript
h(SVG, { src: "app/assets/stars.svg" })
~~~

### Usage with Icon

SVG options can be passed to [Icon](../icon.md):

~~~jsx
import { Icon } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<Icon svg={starsSVG} />
~~~

or with hyperscript:

~~~javascript
import React from "react"
import { renderer as h, Icon } from "polythene-react"

// note the quoted SVG string:
const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

h(Icon, { svg: h.trust(starsSVG) })
~~~


## Appearance

### Styling

Below are examples how to change the SVG appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~jsx
SVG.theme(".themed-svg", {
  color_light: "#0d47a1",
  color_dark: "orange"
})

<SVG className="themed-svg">{starsSVG}</SVG>
~~~

or with hyperscript:

~~~javascript
h(SVG, { className: "themed-svg" })
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-svg/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-svg";
~~~

#### Style option

Some style attributes can be set using option `style`. For example:

~~~jsx
<SVG style={{ color: "#ef6c00" }}>{starsSVG}</SVG>
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


