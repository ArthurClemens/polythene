[Back to Polythene Icon Button main page](../icon-button.md)

# Icon Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
- [Appearance](#appearance)
  - [Interactivity](#interactivity)
  - [Size](#size)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Icon Button options](../icon-button.md)



<a id="usage"></a>
## Usage

Icon Button takes an icon options object.

<a id="with-jsx"></a>
#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/xuo1gow5/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { IconButton } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<IconButton icon={{ svg: { content: starsSVG } }} />
~~~

Instead of passing `icon` as option, the Icon component can be used as child:

~~~jsx
import { IconButton, Icon } from "polythene-react"

<IconButton><Icon svg={{ content: starsSVG }} /></IconButton>
~~~

Or even:

~~~jsx
import { IconButton, Icon, SVG } from "polythene-react"

<IconButton><Icon><SVG>{starsSVG}</SVG></Icon></IconButton>
~~~

<a id="with-hyperscript"></a>
#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/xh7jgutu/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, IconButton } from "polythene-react"

// note the quoted SVG string:
const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

h(IconButton, {
  icon: { svg: { content: h.trust(starsSVG) } }
})
~~~

See [Icon](../icon.md) for more Icon options.

Alternatively, pass an Icon as child:

~~~javascript
import { renderer as h, Icon, IconButton, SVG } from "polythene-react"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

const StarIcon = h(Icon,
  h(SVG, { content: h.trust(starsSVG) })
)

h(IconButton, StarIcon)
~~~



<a id="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)



<a id="appearance"></a>
## Appearance

Pass [Button](../button.md) options to change the behaviour and appearance - see some examples below.


<a id="interactivity"></a>
### Interactivity

Disable hover and ripple effects:

~~~jsx
<IconButton icon={{ svg: { content: starsSVG } }} wash={false} ink={false} />
~~~

or with hyperscript:

~~~javascript
h(IconButton, {
  icon: { svg: { content: h.trust(starsSVG) } },
  wash: false,
  ink: false
})
~~~

Alternatively, use `inactive`:

~~~jsx
<IconButton icon={{ svg: { content: starsSVG } }} inactive />
~~~


<a id="size"></a>
### Size

`compact` reduces the button padding:

~~~jsx
<IconButton icon={{ svg: { content: starsSVG } }} compact />
~~~


<a id="styling"></a>
### Styling

Below are examples how to change the icon button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { IconButtonCSS } from "polythene-css"

IconButtonCSS.addStyle(".themed-icon-button", {
  padding:                24,
  color_light_background: "purple",
  color_dark_background:  "orange",
  color_light:            "white"
})

<IconButton icon={{ svg: { content: starsSVG } }} className="themed-icon-button" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Icon Button CSS classes](../../../packages/polythene-css-classes/icon-button.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/icon-button"
~~~

The icon color is set with the CSS (text) `color` attribute of the parent element. For example:

~~~css
.pe-button-icon {
  color: red;
}
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<FAB icon={{ svg: { content: starsSVG } }} style={{ color: "#FFCCBC", backgroundColor: "#4E342E" }} />
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


