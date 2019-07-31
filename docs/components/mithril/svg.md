[Back to Polythene SVG main page](../svg.md)

# SVG component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [With trusted SVG text](#with-trusted-svg-text)
  - [With source files](#with-source-files)
  - [With Javascript modules](#with-javascript-modules)
  - [Usage with Icon component](#usage-with-icon-component)
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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgdgYA4BdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoRrUyci5sKV0YN1LLazsHfzcPZVzffyCQsIiomPh4qqgkmClMKHxMeGgkuYXEgFohPwMeaLiEpcPjtvh9lbWNraWxACsYerUbVvapBqaoFoUH5dHrmPowWz2RwuYaITxjY6BYKhTDhGqzc6LZardabbZneYXRD7fIYwlYknhO44x7bV7vEB1T7fDp-Zr4LgAN10XHwpUoEFqjM+HM5dXkeCQYCkIVgqgALCgAIxK+UgAC+RAEwlEIHp8kgimUUlUhpWumAugAygA1ADiunVumMul2RIA3I0zZ1Lba7QBhK1Wx3O12YxKBq2e-5+yNiTD4fBW8pIAAU5jECRE+DunO85iIFsaul0kC25AA+ppvNIULpzABiDgcJUMeXygvF0sICCVjbkbR1+sgBtgACsKoAbAAmTtQdUASmjXug5q4hr9ofMLTzugA7rynGZTOZpx2TyB9IguDWpMfT+fCpyuIg9wAhCApe8gWi6X9n3QzxPD5sEwJxdD5YCQAAWSVaddFbMRpwYAAZJVmDEdDAKVW4lTESd5X2BgxFoABmFDp3ggBOJD5VuYilSo-Z8KVND4OozCqN0DDJ1IwDdBos94DHMR5UnXR5TEBhyJE5h2KVAAvKCbCZL48waEBoxLEsV1gToAEFsGwUNgEaUwpGfV861TBdnTqXRqC7cyhHTPVKD3MQoEFRACwcrsdJkVzMF80yoG0+taicQwODrMEpCsCEBmhVx3DhUYfERSZQjdCl8DhCAoiOKLTgbNT82Ifzwt0VZyG8GpYpACsAiwHRzDMzptM1YcrWqXRNjgOsAAVwyWXQOF7XRoOuHhdH2a17Qg-LzAXSrWAXIhKpcjN3N8xywu05zXMzPwkF88wAHkOllOtDSURRlo2-bwq2vVICEGIlnu4h6yeqqXL9QtQqqqrbuNOshEzchnBWVN12gP0Vt+8LF0q7TEfCtbHueo6du+vbwsOjMZSkU7vvMZMKgIB7Ud0F68ggd7ti+wsaZLf77UB1ntJWSm6yB4GDqkMtewapsOCo5haFoNqkaqzUuZLUHFHByHoakWGN3tdGBZR2XdG1ktMc2nGID3XbKsJvVidJlmQAAFSqbNqdlum3o+40zr12nUwBosvcVrBwgAOR1BqswIXNyqxgXFegO6pBVqQoZhuGoARrndYFg3dDWrtWEadVlygCGhAgZxFFTfAIDAZxPCkHwagAURGRQ31iABJfBXIFIV1t0QzsCXRoJUQKUZVXVQx1oFBaA1LUQEEERVDycIDTj41VA1dgQE0HQ+BQahtSXtAipOeAAAElhSE0SFcOQ0HBSFy+wbRvHpoQbFPm5z+nEiSP2Nw+FP7TXgGII4UB9QkHKNgXULITTqlYOqIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>



<a id="with-trusted-svg-text"></a>
### With trusted SVG text

```javascript
import m from "mithril"
import { SVG } from "polythene-mithril"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

m(SVG, m.trust(starsSVG))

// or
m(SVG, { content: m.trust(starsSVG) })
```


<a id="with-source-files"></a>
### With source files

```javascript
m(SVG, {
  src: "app/assets/stars.svg"
})
```


<a id="with-javascript-modules"></a>
### With Javascript modules

To facilitate importing (and reuse) of SVG strings, you may put them in a JavaScript module:

```javascript
// file: assets/svg/stars.js
var m = require("mithril")
module.exports = m.trust("<svg xmlns ... />")
```

Now you can import the SVG like any module:

```javascript
import m from "mithril"
import { SVG } from "polythene-mithril"
import starsSVG from "assets/svg/stars"

m(SVG, starsSVG)
```

A large collection of such ready to use SVG modules is available at [mmsvg](https://github.com/ArthurClemens/mmsvg). It includes icons sets from:

* [google/material-design-icons](https://github.com/google/material-design-icons)
* [zavoloklom/material-design-iconic-font](https://github.com/zavoloklom/material-design-iconic-font)
* [Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign)
* [Zondicons](http://www.zondicons.com)



<a id="usage-with-icon-component"></a>
### Usage with Icon component

SVG options can be passed to [icon](../icon.md):

```javascript
import { Icon } from "polythene-mithril"

m(Icon, { svg: { content: m.trust(svgString) } })
```



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the SVG appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { SVGCSS } from "polythene-css"

SVGCSS.addStyle(".themed-svg", {
  color_light: "#0d47a1",
  color_dark: "orange"
})

m(SVG, { className: "themed-svg" })
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

```javascript
m(SVG, {
  style: { color: "#ef6c00" }
})
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


