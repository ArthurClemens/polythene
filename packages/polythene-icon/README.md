# Icon

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/icon">Demo</a>

Displays an icon (image or [SVG](#svg)).



## Usage

### mSVG (recommended)

mSVG is an SVG string wrapped around `m.trust()` and stored as a Javascript file. This way the SVG can be imported just like any other module, without having to resort to bundler plugins.

Use option `msvg`:

~~~javascript
import m from "mithril";
import { icon } from "polythene-icon";
import gIconStars from "mmsvg/google/action/stars";

const myIcon = m(icon, {
  msvg: gIconStars
});
~~~

A large collection of msvg icons is available at [mmsvg](https://github.com/ArthurClemens/mmsvg).

You can create your own mSVG icons using this template:

~~~javascript
var m = require("mithril");
module.exports = m.trust("paste svg contents here");
~~~


### Using SVG files

To use SVG instead of an image, pass an [svg](#svg) option object:

~~~javascript
const myIcon = m(icon, {
  svg: {
    src: "img/arrow.svg"
  }
});
~~~


### Using image files

~~~javascript
import { icon } from "polythene-icon";

const myIcon = m(icon, {
  src: "img/arrow.png"
});
~~~



## Variations

* The size is set with option `type` (and of course with CSS, in conjuction with `class`).
* The color is set with the CSS `color` attribute of the parent element.



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **class**     | optional | String |       | Extra CSS class appended to `pe-icon` |
| **id**        | optional | String |       | HTML element id |
| **content**   | optional | Mithril element |  | Any content; replaces `vnode.children` and ignores `svg` and `msvg`  |
| **before**    | optional | Mithril element | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |

### Icon options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **msvg**      | either `src` or `svg` or `msvg` must be passed | Mithril element |  | Mithril-ified SVG icon |
| **svg**       | either `src` or `svg` or `msvg` must be passed | Object |  | [svg](#svg) options object |
| **src**       | either `src` or `svg` or `msvg` must be passed | String |  | Icon URL (for `img` only) |
| **type**      | optional | String | "regular" | Sets the size: either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px). Adds CSS class `pe-icon--small`, etcetera |
| **avatar**    | optional | Boolean | | Set to `true` to add class `pe-icon--avatar` which creates a round image |



## Composition

Icon is composed from:

* [SVG](#svg) (when using option `svg` or `msvg`)



## CSS classes

| **Element** | **Key**     |  **Class** |
| ----------- | ----------- | --------------- |
| Component   | component   | `pe-icon` |

| **State**         | **Key**     |  **Class** |
| ----------------- | ----------- | --------------- |
| Small             | small       | `pe-icon--small` |
| Regular           | regular     | `pe-icon--regular` |
| Medium            | medium      | `pe-icon--medium` |
| Large             | large       | `pe-icon--large` |
| Avatar round icon | avatar      | `pe-icon--avatar` |

