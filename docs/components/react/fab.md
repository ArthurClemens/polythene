[Back to Polythene FAB main page](../fab.md)

# FAB: Floating Action Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[FAB options](../fab.md)


<a name="usage"></a>
## Usage

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/nj11av54/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { FAB } from "polythene-react"

const iconSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>

<FAB mini icon={{ svg: { content: iconSVG } }} />
~~~

Instead of passing `icon` as option, the Icon component can be used as child:

~~~jsx
import { FAB, Icon } from "polythene-react"

<FAB mini><Icon svg={{ content: iconSVG }} />
~~~

or even with Icon and SVG components:

~~~jsx
import { FAB, Icon, SVG } from "polythene-react"

<FAB mini><Icon><SVG>{iconSVG}</SVG></Icon></FAB>
~~~

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/Lebqe5g2/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, FAB } from "polythene-react"

// note the quoted SVG string:
const iconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>"

h(FAB, {
  mini: true,
  icon: { svg: { content: h.trust(iconSVG) } }
})
~~~

<a name="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)


<a name="appearance"></a>
## Appearance

FAB's default colors are:

* Background: the app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style

<a name="styling"></a>
### Styling

Below are examples how to change the FAB appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~jsx
import { FABCSS } from "polythene-css"

FABCSS.addStyle(".themed-fab", {
  color_light_background: "#2196f3",
  color_dark_background:  "#0097a7",
  color_light:            "#fff",
  color_dark:             "#b2ebf2"
})

<FAB icon={{ svg: { content: starsSVG } }} className="themed-fab" />
~~~

or with hyperscript:

~~~javascript
h(FAB, {
  icon: { svg: { content: h.trust(starsSVG) } },
  className: "themed-svg"
})
~~~

#### CSS

Change CSS using the [FAB CSS classes](../../../packages/polythene-css-classes/fab.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/fab"
~~~

#### Style option

Some style attributes can be set using option `style`. For example:

~~~jsx
<FAB
  icon={{ svg: { content: starsSVG } }}
  style={{ color: "#ef6c00" }}
/>
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


