# List Tile

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/list-tile">Demo</a>

Displays a list element as part of a [list](#list).


## Usage

~~~javascript
import m from "mithril";
import { listTile } from "polythene-list-tile";

const myListTile = m(listTile, {
  title: "My title"
});
~~~

To show the subtitle on 1 line:

~~~javascript
const myListTile = m(listTile, {
  title: "My title",
  subtitle: "My subtitle"
});
~~~

To show a long subtitle running on 2 lines:

~~~javascript
const myListTile = m(listTile, {
  title: "My title",
  highSubtitle: "My loooooooooooong subtitle"
});
~~~

To show an icon:

~~~javascript
import m from "mithril";
import { listTile } from "polythene-list-tile";
import { icon } from "polythene-icon";

const myListTile = m(listTile, {
  title: "My title",
  front: m(icon, {
    type: "large",
    avatar: true,
    src: "app/images/1.png"
  })
});
~~~

Or use an SVG as icon:

~~~javascript
import m from "mithril";
import { listTile } from "polythene-list-tile";
import { icon } from "polythene-icon";
import iconStarOutline from "mmsvg/templarian/msvg/star-outline";

const myListTile = m(listTile, {
  title: "My title",
  front: m(icon, {
    msvg: iconStarOutline
  })
});
~~~

To make the primary content a link:

~~~javascript
const myListTile = m(listTile, {
  title: "My title",
  front: m(icon, {
    type: "large",
    avatar: true,
    src: "app/images/1.png"
  }),
  url: {
    href: "/toolbar"
    oncreate: m.route.link
  }
});
~~~

To show secondary content at the right, including a link:

~~~javascript
import { icon } from "polythene-icon";
import iconStarOutline from "mmsvg/templarian/msvg/star-outline";

const myListTile = m(listTile, {
  title: "My title",
  front: m(icon, {
    type: "large",
    avatar: true,
    src: "app/images/1.png"
  }),
  secondary: {
    icon: {
      type: "small",
      msvg: iconStarOutline
    },
    url: {
      href: "/favs",
      oncreate: m.route.link
    }
  })
});
~~~

## Variations

* A list tile can have 1 to 3 lines:
  * `title`: titel on a single line
  * `subtitle`: subtitle on a single line
  * `highSubtitle`: subtitle runs over 2 lines
  * Use class `list-tile--compact` to reduce the vertical padding.
* A list tile can optionally have an icon.
* Text and icon are taken together as primary content. Primary content can optionally have a link.
* A list tile can optionally have secondary content, displayed to the right. Secondary content can contain any content, and conditionally have a link.


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to "pe-list-tile" |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### List tile content options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **content**   | -              | -        |             | See below |
| **secondary** | optional       | Object   |             | Options for secondary content, see below |

### List tile appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **indent** | optional | Boolean | | Set to `true` to indent the content |
| **selected** | optional | Boolean | false | Set to `true` to show a selected state; adds class "selected" |
| **disabled** | optional | Boolean | false | Set to `true` to deactivate the url and hover state (in case of [list](#list) with setting `hoverable`) and show a disabled state; adds class "disabled" |
| **ink** | optional | Boolean | false | Set to `true` to show a ripple effect when the tile is tapped |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [ripple](#ripple) options to define ripple behavior |
| **hoverable** | optional | Boolean | false | Set to true to show a hover effect (non-touch devices) |
| **selectable** | optional | Boolean | false | Set to true to show a mouse pointer (non-touch devices) |
| **sticky** | optional | Boolean | | Make list tile sticky when scrolling; this is normally set in the [list](#list) component as `header.sticky`; [does not work in Chrome or IE/Edge](http://caniuse.com/#feat=css-sticky); adds class "sticky" |
| **compact** | optional | Boolean | | Set to `true` to reduce vertical padding |

### List tile primary content options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **content** | optional | Mithril element | | Any primary content; replaces `vnode.children` and ignores `title`, `subTitle` and `highSubtitle` |
| **title** | optional | String | | The text content |
| **subtitle** | optional | String | | Secondary text content (1 line high) |
| **highSubtitle** | optional | String | | Secondary text content (2 lines high) |
| **front** | optional | Mithril element or component |  | Content to show at the left of the primary content |
| **url** | optional | Object with `href`, optionally `oncreate` | | URL location; for in-app route linking set `oncreate : m.route.link` |

### List tile secondary content options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **secondary.element** | optional | String | See "Layout of secondary content" below | HTML element for secondary content |
| **secondary.icon** | optional | Object |  | [icon](#icon) options object for icon in secondary content; will be placed above secondary.content |
| **secondary.url** | optional | Object with `href`, optionally `oncreate` | | URL for secondary content; for in-app route linking set `oncreate : m.route.link` |
| **secondary.content** | optional | Mithril element | | Secondary content |


### Composition

List Tile is composed from:

* [Ripple](#ripple) (when option `ink` is used)
* [Icon](#icon) (when option `secondary.icon` is used)


## CSS classes

| **Element**      |  **Class** |
| ---------------- | --------------- |
| component        | `pe-list-tile` |
| primary          | `pe-list-tile__primary` |
| secondary        | `pe-list-tile__secondary` |
| content          | `pe-list-tile__content` |
| contentFront     | `pe-list-tile__content--front` |
| title            | `pe-list-tile__title` |
| subtitle         | `pe-list-tile__subtitle` |
| highSubtitle     | `pe-list-tile__subtitle--high` |

| **State**        |  **Class** |
| ---------------- | --------------- |
| selected         | `pe-list-tile--selected` |
| disabled         | `pe-list-tile--disabled` |
| sticky           | `pe-list-tile--sticky` |
| hasSubtitle      | `pe-list-tile--subtitle` |
| hasHighSubtitle  | `pe-list-tile--high-subtitle` |
| hasFront         | `pe-list-tile--front` |
| isCompact        | `pe-list-tile--compact` |
| isHoverable      | `pe-list-tile--hoverable` |
| isSelectable     | `pe-list-tile--selectable` |

