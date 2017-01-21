# Floating Action Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/fab">Demo</a>

A circular main button with a [shadow](../polythene-shadow) and [ripple](../polythene-ripple) effect.



## Usage

~~~javascript
import m from "mithril";
import { fab } from "polythene-fab";
import gIconStars from "mmsvg/google/msvg/action/stars";

const myFab = m(fab, {
  icon: { msvg: gIconStars }
});
~~~



## Appearance

FAB's default colors are:

* Background: the app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style



### Styling

Below are examples how to change the FAB appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
fab.theme(".themed-fab", {
  color_light_background: "#2196F3",
  color_dark_background:  "#0097A7",
  color_light:            "#fff",
  color_dark:             "#B2EBF2"
});

m(fab, {
  class: "themed-fab",
  icon: { msvg: gIconStars }
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Colors

Colors can be set using `style`.

~~~javascript
m(fab, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff"
  }
});
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **class**     | optional | String |       | Extra CSS class appended to `pe-fab` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String |       | HTML element id |
| **content**| either `icon` or `content` | Mithril element |  | Alternative content |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex** | optional | Integer | | Tab index |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |

### FAB specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon** | use `icon` or `content` | Object |  | [icon](../polythene-icon) options object |
| **mini** | optional | Boolean | false | Set to true to display a small button (class name `pe-fab--mini`) |



## Composition

FAB is composed from:

* [Raised Button](../polythene-raised-button)
  * [Button](../polythene-button)
* [Icon](../polythene-icon) (when using option `icon`)

Differences to button behaviour:

* Button options `raised` is default set to `true`
* The ripple emanates from the center of the button
* The ripple has a 2/3 decay speed



## CSS classes

| **Element** | **Key**     | **Class** |
| ----------- | ----------- | --------------- |
| Component   | component   | `pe-fab` |
| Content     | content     | `pe-fab__content` |

| **State**   | **Key**     |  **Class** |
| ----------- | ----------- | --------------- |
| Mini FAB    | mini        | `pe-fab--mini` |




## Future

> "The floating action button animates onto the screen as an expanding piece of material, by default. The icon within it may be animated."

> "The floating action button can transform into a toolbar upon press or scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand."

> "The floating action button can fling out related actions upon press."

> "The floating action button can transform into a single piece of material which contains all the actions."

> "The floating action button can transform into sheets of material that are part of the app structure."
