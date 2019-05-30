[Back to Polythene Icon main page](../icon.md)

# Icon component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
      - [With SVG](#with-svg)
      - [With SVG source files](#with-svg-source-files)
      - [With image source files](#with-image-source-files)
- [Appearance](#appearance)
  - [Sizes](#sizes)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Icon options](../icon.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/ep9pf5wp/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

<a id="with-svg"></a>
##### With SVG

~~~jsx
import React from "react"
import { Icon } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<Icon svg={{ content: starsSVG }} />
~~~

Instead of passing `svg` as option, the SVG component can be used as child:

~~~jsx
import { Icon, SVG } from "polythene-react"

<Icon><SVG>{starsSVG}</SVG></Icon>
~~~

<a id="with-svg-source-files"></a>
##### With SVG source files

~~~jsx
<Icon svg={{ src: "app/assets/stars.svg" }} />
~~~

<a id="with-image-source-files"></a>
##### With image source files

~~~jsx
<Icon src={"img/arrow.png" />
~~~


<a id="appearance"></a>
## Appearance


<a id="sizes"></a>
### Sizes

The size is set with option `size` (4 sizes). Use CSS for more finegrained control.


<a id="styling"></a>
### Styling

Below are examples how to change the icon appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { IconCSS } from "polythene-css"

IconCSS.addStyle(".themed-icon", {
  size_regular: 50,
  color_light:  "purple",
  color_dark:   "orange"
})

<Icon svg={{ content: starsSVG }} className="themed-icon" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Icon CSS classes](../../../packages/polythene-css-classes/icon.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/icon"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Icon svg={{ content: starsSVG }} style={{ color: "#EF6C00" }} />
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the Icon is flipped when:

* it is contained within an element that either has attribute `dir="rtl"` or has className `pe-rtl`
* has className `pe-rtl--flip`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


