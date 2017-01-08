# Floating Action Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/fab">Demo</a>

A circular main button with a [shadow](#shadow) and [ripple](#ripple) effect.


## Usage

~~~javascript
import m from "mithril";
import { fab } from "polythene-fab";
import gIconStars from "mmsvg/google/msvg/action/stars";

const myFab = m(fab, {
  icon: {
    msvg: gIconStars
  }
});
~~~

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to `pe-button--fab` |
| **id** | optional | String | | HTML element id |
| **content**| either `icon` or `content` | Mithril element |  | Alternative content |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex** | optional | Integer | | Tab index |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |

### FAB specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon** | use `icon` or `content` | Object |  | [icon](#icon) options object |
| **mini** | optional | Boolean | false | Set to true to display a small button (class name `pe-button--fab-mini`) |


### Composition

FAB is composed from:

* [Raised Button](#raised-button)
  * [Button](#button)
* [Icon](#icon) (when using option `icon`)

Differences to button behaviour:

* Button options `raised` is default set to `true`
* The ripple emanates from the center of the button
* The ripple has a 2/3 decay speed


## Styling

Default colors:

* Background: app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style



## CSS classes

| **Element** |  **Class** |
| ----------- | --------------- |
| component   | `pe-button--fab` |
| content     | `pe-button--fab__content` |

| **State**   |  **Class** |
| ----------- | --------------- |
| mini        | `pe-button--fab-mini` |




## Future

> "The floating action button animates onto the screen as an expanding piece of material, by default. The icon within it may be animated."

> "The floating action button can transform into a toolbar upon press or scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand."

> "The floating action button can fling out related actions upon press."

> "The floating action button can transform into a single piece of material which contains all the actions."

> "The floating action button can transform into sheets of material that are part of the app structure."
