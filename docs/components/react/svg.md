[Back to Polythene SVG main page](../svg.md)

# SVG component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [With source files](#with-source-files)
  - [Usage with Icon](#usage-with-icon)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style option](#style-option)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[SVG options](../svg.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDQHYBMAOAXQxADMBLOAUzGRVADsBDAW0uRADoALAF2cWIQY9HpRHsAPHDL0A1gAIuUSiQC8AHRC8eABzBIA9AcZQeXAK5QIVVvTAcA5mTPmARhzIxjYMJR5gDHXgATzMxSgNKAA8WHSoAkht7CB9NeWU4DXAeYPiuSj9NAD51eglIKDIdHnkwKyztPUNjUwsrGzF7Jxd3T29ff0CQsPoIsB5GegATRjhhCKC4UPzRgFplRggeIaWRynXKTZ5V8cmZudGOACswYokDCqqeErLH6tr6zUb9IxMXdsoti6zgsvS8jB8fgCi2W4QeE2ms3mO1haxS0OGK326JOCPO82utxARXub2epVKEimZAAbvIyFMsrAYDw7gZqTSiiBiL4qFtPHZ2ABGJBoEAAXwwDBYbCQnBu3JAQhEYh47GV43kwHkAGUAGoAcXk4vkqnkML2AG5Shqatr9QaAMI6nXG03mzHhZ06630UoO70cRhTKY6nJUAAUmg4YVYUxONIcmgwWtK8nkQjmUAA+tIHLwkPJNABiEgkIVYAAsleTaYz8BgOZmUFkhaLIGLEAArEKhQA2HC1+jigCUvptwk1ZGVDvd5UT8gA7gyzFkcDWQIpKGR8zw1xv5DSyJRFwAhGBRLJoeTX9fydd3HSMMzyRmaACyQpw8grHBwWAAGSFPAOGA+8hTgVYhQ4PtK1WLAODQABmACcG-ABOP9K0ghChXQ1YYKFIDvww0D0PkEC+yQ+95Ew9c4C7DhKz7eRKw4LAUMYvASKFAAvTQDBJB5EyKcd6FteQAEEdB0d0IxHU0iiLeh0ypWkXnTVSOQzOAITAAA5GUmRgRd5HoFlKGKOtNPkCRGEUZQ1C+HhdB+Fp-msQFOkcEE3A8LwLSxVYpkBGAAg2LYDGLYSk03CYoAcPwsmzVxdLkYodQKeRZjAGBCwABU9UZ5BIRt5AAJUOLZ5FWXVDVfUL7kYDTNPuDkWq02kdL0wzWGMxcrJUmzbO06weqMzQeGcKhigASWVesVRENr1Os1rRt0nxesoLIhGYIJRhEQbhtah0imAadhAdcV7jOtbVPZVahoe9q1rUukxq2iaQFgAbiXukaus+gzvqmngZuJMNckoKYVs5AH3u6r6+s0PaDtVY6Tts2dxmh1RgG1TNG0LEsy3QvA0DQNJxXFc7Lvoa7bsNDrWse+HntstmWcR4Htv6zGbJ5zaQZRkAwYhooABV8jjOGWc6j7hb51GYH2+Yjv+jnBdnXnQZlmGE1iumZ0NG6DDurXOdejm5brW2-XoSqjgAEQAeXfDhlGmSgoCjIaJGk2TBIwOsphgCBzFsHhHD8ABRDoRFPYJZqmKMfpgFlNBHUox0VNGKB99hXEYVxKAEcAy8oflJ3YJC8CQHAJSlEAmFYdgOHRPPhFEcQ5QlIgQGkOQaFQaU27lCLo5Cmky5gHQo8JRVLEQOVvmacx6B0WQHA71WDEngxI6mfeqqnygZ7mefVUX4gch0WVwGgJ4m7Hh-J+C1WOGn2er5EG+QGXuwNeRgN5bx3ntE+RwP7MEPswY+78w7MC-ufH+C8FS32CPfdgZJ+7iiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { SVG } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<SVG>{starsSVG}</SVG>

// or:

<SVG content={starsSVG} />
```

Note that JSX needs SVG attributes to be camelCased; see [React: All Supported SVG Attributes](https://facebook.github.io/react/docs/dom-elements.html#all-supported-svg-attributes).


<a id="with-source-files"></a>
### With source files

```jsx
<SVG src={"app/assets/stars.svg"} />
```

<a id="usage-with-icon"></a>
### Usage with Icon

SVG options can be passed to [Icon](../icon.md):

```jsx
import { Icon } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<Icon svg={{ content: starsSVG }} />
```

<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the SVG appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```jsx
import { SVGCSS } from "polythene-css"

SVGCSS.addStyle(".themed-svg", {
  color_light: "#0d47a1",
  color_dark: "orange"
})

<SVG className="themed-svg">{starsSVG}</SVG>
```

<a id="css"></a>
#### CSS

Change CSS using the [SVG CSS classes](../../../packages/polythene-css-classes/svg.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/svg"
```

<a id="style-option"></a>
#### Style option

Some style attributes can be set using option `style`. For example:

```jsx
<SVG style={{ color: "#ef6c00" }}>{starsSVG}</SVG>
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


