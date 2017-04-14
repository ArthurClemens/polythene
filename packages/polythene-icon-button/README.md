# Icon Button

Displays an [icon](../polythene-icon) as a button. Also called toggle button.



## Usage

Icon Button takes an icon options object:

~~~javascript
import m from "mithril";
import iconButton from "polythene-icon-button";

const myIconButton = m(iconButton, {
  icon: {
    src: "img/arrow.png"
  }
});
~~~

To use SVG instead of an image, pass an `msvg` object:

~~~javascript
import iconButton from "polythene-icon-button";
import gIconStars from "mmsvg/google/msvg/action/stars";

const myIconButton = m(iconButton, {
  icon: {
    msvg: gIconStars
  }
});
~~~

or pass a [svg](../polythene-svg) option object:

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
import icon from "polythene-icon";
import gIconStars from "mmsvg/google/msvg/action/stars";

const myIcon = m(icon, {
  msvg: gIconStars
});

const myIconBtn = m(iconBtn, {
  content: myIcon
});
~~~

or 

~~~javascript
const myIconButton = m(iconButton, {}, myIcon);
~~~



## Appearance

### Interactivity

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

Alternatively, use `inactive`:

~~~javascript
const myIconButton = m(iconButton, {
  icon: {
    msvg: gIconStars
  },
  inactive: true
});
~~~


### Size

Compact (less padding):

~~~javascript
const myIconButton = m(iconButton, {
  icon: {
    msvg: gIconStars
  },
  compact: true
});
~~~


### Styling

Below are examples how to change the icon button appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
iconButton.theme(".themed-icon-button", {
  padding:                24,
  color_light_background: "purple",
  color_dark_background:  "orange",
  color_light:            "white"
});

m(iconButton, {
  class: "themed-icon-button",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Colors

Colors can be set using `style`.

~~~javascript
m(icon, {
  style: {
    color: "#FFCCBC",
    backgroundColor: "#4E342E"
  },
  // ... other options
});
~~~

The icon color is set with the CSS (text) `color` attribute of the parent element. For example:

~~~css
/* CSS */
.pe-button-icon {
  color: red;
}
~~~

~~~javascript
// JS
const myIconButton = m(iconButton, {
  class: "colored"
});
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **class**     | optional | String |  | Extra CSS class appended to "pe-icon-button" |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String | | HTML element id |
| **content**   | optional | Mithril element |  | Any content; replaces `vnode.children` |
| **before**    | optional | Mithril element | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tabindex**  | optional | Integer | | Tab index |

### Icon button specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon**      | either icon or child nodes must be passed | Object |  | [icon](../polythene-icon) options object; also used to show an round "avatar" portrait image |
| **compact**   | optional | Boolean | | Set to `true` to use less padding |
| **inactive** | optional | Boolean | | Set to `true` to disable button events and ripple/wash effects |



## Composition

Icon Button is composed from:

* [Button](../polythene-button)
* [Icon](../polythene-icon) (when using option `icon`)



## CSS classes

| **Element** | **Key**     |  **Class** |
| ----------- | ----------- | --------------- |
| Component   | component   | `pe-button pe-icon-button` |
| Content     | content     | `pe-icon-button__content` |

| **State**   | **Key**     |  **Class** |
| ----------- | ----------- | --------------- |
| Compact     | compact     | `pe-icon-button--compact` |


