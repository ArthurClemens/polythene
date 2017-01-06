# List

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/list">Demo</a>

Displays a list of [list tiles](#list-tile), with an optional header. Lists can be stacked.

Lists are also the base component of [menus](#menu).

## Usage

~~~javascript
import m from "mithril";
import { list } from "polythene-list";
import { listTile } from "polythene-list-tile";

const myList = m(list, {
  header: {
    title: "Friends"
  },
  [
    m(listTile, {title: "Jennifer Barker"}),
    m(listTile, {title: "Ali Connors"}),
  ]
});
~~~

The header will be also rendered using a list tile.

See [list tile](#list-tile) for layout variations, for example to add links, icons and images. For example:

~~~javascript
import m from "mithril";
import { list } from "polythene-list";
import { listTile } from "polythene-list-tile";
import { icon } from "polythene-icon";

const myList = m(list, {
  header: {
    title: "Friends"
  },
  [
    m(listTile, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      front: m(icon, {
        src: "images/jennifer.png",
        avatar: true,
        type: "large"
      }),
      url: {
        href: "/friends/jennifer"
        config: m.route
      }
    }),
    // ...
  ]
});
~~~


## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](http://www.google.com/design/spec/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [list tiles](#list-tile), and set `indentedBorders` to true. For example:

~~~javascript
import m from "mithril";
import { list } from "polythene-list";
import { listTile } from "polythene-list-tile";

const myList = m(list, {
  indentedBorders: true,
  tiles: [
    m(listTile, {
      title: "Jennifer Barker",
      indent: true
    }),
    // ...
  ]
});
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to `pe-list` |
| **id** | optional | String | | HTML element id |
| **content** | use `tiles` or `content` | Mithril element | | Alternative content; replaces `vnode.children` and ignores `tiles` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |

### List specific options

| **Parameter**     |  **Mandatory** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **header**        | optional | Object | | Options object for a [list tile](#list-tile); attributes `title` and `sticky` |
| **header.title**  | optional | String | | Title text label |
| **header.sticky** | optional | Boolean | | Make header sticky when scrolling; [does not work in Chrome](http://caniuse.com/#feat=css-sticky) |
| **tiles**         | use `tiles` or `content` | Array of type Mithril element | | List of [list tiles](#list-tile) |

### List appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **borders** | optional | Boolean | | Set to `true` to add borders to list tiles |
| **indentedBorders** | optional | Boolean | | Set to `true` to indent the list tile borders; note that list tiles must have option `indent` as well |
| **hoverable** | optional | Boolean | false | Set to true to show a hover effect on list tiles (non-touch devices) |
| **selectable** | optional | Boolean | false | Set to true to show a mouse pointer on list tiles (non-touch devices) |
| **compact**       | optional | Boolean | | Set to `true` to reduce vertical padding of list tiles |


### Composition

List is composed from:

* [List Tile](#list-tile) (when using option `tiles` or `header`)


## CSS classes

| **Element**      |  **Class** |
| ---------------- | --------------- |
| component        | `pe-list` |
| header           | `pe-list__header` |

| **State**            |  **Class** |
| -------------------- | --------------- |
| has borders          | `pe-list--borders` |
| has indented borders | `pe-list--borders-indented` |
| has header           | `pe-list--header` |
| compact              | `pe-list--compact` |
| hoverable            | `pe-list--hoverable` |
| selectable           | `pe-list--selectable` |

