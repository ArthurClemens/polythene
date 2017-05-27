[Back to Polythene Icon Button main page](IconButton.md)

# Icon Button component for React



## Usage

Icon Button takes an icon options object.

### With JSX

~~~jsx
import React from "react"
import { IconButton } from "polythene-react"

const starsSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

// render component with icon option
<IconButton icon={{svg: starsSVG}} />
~~~

Instead of passing `icon` as option, the Icon component can be used as child:

~~~jsx
import { IconButton, Icon } from "polythene-react"

// render component with Icon component
<IconButton><Icon svg={starsSVG} /></IconButton>
~~~


### With hyperscript

~~~javascript
import { renderer as h, IconButton } from "polythene-react"

// note the quoted SVG string:
const starsSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

// render component
h(IconButton, {
  icon: { svg: h.trust(starsSVG) }
})
~~~

See [Icon](Icon.md) for more Icon options.



## Links

See description in [Button](Button-React.md)



## Options

[Icon Button options](IconButton.md)



## Appearance

Pass [Button](Button.md) options to change the behaviour and appearance - see some examples below.


### Interactivity

Disable hover and ripple effects:

~~~jsx
<IconButton icon={{svg: starsSVG}} wash={false} ink={false} />
~~~

or with hyperscript:

~~~javascript
m(IconButton, {
  icon: { svg: m.trust(starsSVG) },
  wash: false,
  ink: false
})
~~~

Alternatively, use `inactive`:

~~~jsx
<IconButton icon={{svg: starsSVG}} inactive />
~~~


### Size

`compact` reduces the button padding:

~~~jsx
<IconButton icon={{svg: starsSVG}} compact />
~~~


### Styling

Below are examples how to change the icon button appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~jsx
IconButton.theme(".themed-icon-button", {
  padding:                24,
  color_light_background: "purple",
  color_dark_background:  "orange",
  color_light:            "white"
})

<IconButton icon={{svg: starsSVG}} className="themed-icon-button" />
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

~~~jsx
<FAB icon={{svg: starsSVG}} style={{ color: "#FFCCBC", backgroundColor: "#4E342E" }} />
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

