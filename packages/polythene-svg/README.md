# SVG

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/svg">Demo</a>

Simple wrapper for SVG XML.

This is a low-level and simple stupid module for handling SVGs. If you want to use SVG for icons, the best method is to use [icon](#icon) directly.



## Usage

### 1. Using mSVG

mSVG is an SVG string wrapped around `m.trust()` and stored as a Javascript file. This way the SVG can be imported just like any other module, without having to resort to bundler plugins.

~~~javascript
import iconStars from "mmsvg/google/msvg/action/stars";
~~~

Usage with the SVG component:

~~~javascript
import m from "mithril";
import { svg } from "polythene-svg";
import iconStars from "mmsvg/google/msvg/action/stars";

const mySvg = m(svg, iconStars);
~~~

A large collection of ready to use mSVG icons is available at [mmsvg](https://github.com/ArthurClemens/mmsvg).

You can create your own mSVG icons using this template:

~~~javascript
var m = require("mithril");
module.exports = m.trust("paste svg contents here");
~~~


### 2. Using SVG XML

This is the same as mSVG, except that the SVG XML must be "trusted" first.

~~~javascript
import { svg } from "polythene-svg";

const svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";

const mySvg = m(svg, m.trust(svgString));
~~~
or
~~~javascript
const mySvg = m(svg, {
  content: m.trust(svgString)
});
~~~


## Usage with icon

SVG options can be passed to [icon](#icon):

~~~javascript
import { icon } from "polythene-icon";

const svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";

const myIcon = m(icon, {
  svg: {
    content: svgString
  }
});
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **class**     | optional | String |  | Extra CSS class appended to `pe-svg` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String | | HTML element id |
| **content**   | use `content` or `vnode.children` | Mithril element |  | Any content; replaces `vnode.children` |
| **before**    | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |



## CSS classes

| **Element** | **Key**     | **Class**  |
| ----------- | ----------- | ---------- |
| Component   | component   | `pe-svg`   |

