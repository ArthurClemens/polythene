# Icon Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/icon-button">Demo</a>

Displays an [icon](#icon) as a button. Also called toggle button.


## Usage

Icon Button takes an icon options object:

~~~javascript
import m from "mithril";
import { iconButton } from "polythene-icon-button";

const myIconButton = m(iconButton, {
  icon: {
    src: "img/arrow.png"
  }
});
~~~

To use SVG instead of an image, pass an `msvg` object:

~~~javascript
import gIconStars from "mmsvg/google/msvg/action/stars";
import { iconButton } from "polythene-icon-button";

const myIconButton = m(iconButton, {
  icon: {
    msvg: gIconStars
  }
});
~~~

or pass a [svg](#svg) option object:

~~~javascript
const myIconButton = m(iconButton, {
  icon: {
    svg: {
      content: m.trust(svgString)
    }
  }
});
~~~

Finally, instead of an `icon` options object, you can pass an icon component as `content`:

~~~javascript
import { icon } from "polythene-icon";
import gIconStars from "mmsvg/google/msvg/action/stars";

const myIcon = m(icon, {
  msvg: gIconStars
});

const myIconBtn = m.component(iconBtn, {
  content: myIcon
});
~~~

or 

~~~javascript
const myIconButton = m(iconButton, {}, myIcon);
~~~

### Variations

The icon color is set with the CSS (text) `color` attribute of the parent element. For example:

~~~css
/* CSS */
.pe-button--icon {
  color: red;
}
~~~

~~~javascript
// JS
const myIconButton = m(iconButton, {
  class: "colored"
});
~~~

Disable hover and ripple effects:

~~~javascript
const myIconButton = m(iconButton, {
  icon: {
    msvg: gIconStars
  },
  wash: false,
  ink: false
});
~~~

Compact (less padding):

~~~javascript
const myIconButton = m(iconButton, {
  icon: {
    msvg: gIconStars
  },
  compact: true
});
~~~



### Sizes

Pass `type` to the `icon` parameter, or use CSS.


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **class**     | optional | String |  | Extra CSS class appended to "pe-button--icon" |
| **id**        | optional | String | | HTML element id |
| **content**   | optional | Mithril element |  | Any content; replaces `vnode.children` |
| **before**    | optional | Mithril element | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tabindex**  | optional | Integer | | Tab index |

### Icon button specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon**      | either icon or child nodes must be passed | Object |  | [icon](#icon) options object; also used to show an round "avatar" portrait image |
| **compact**   | optional | Boolean | | Set to `true` to use less padding |


### Composition

Icon Button is composed from:

* [Button](#button)
* [Icon](#icon) (when using option `icon`)


## CSS classes

| **Element** |  **Class name** |
| ----------- | --------------- |
| component   | `pe-button pe-button--icon` |
| content     | `pe-button--icon__content` |


| **State**   |  **Class name** |
| ----------- | --------------- |
| compact      | `pe-button--compact` |


