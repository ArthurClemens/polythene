# List

Displays a list of [list tiles](../polythene-list-tile), with an optional header. Lists can be stacked.

Lists are also the base component of [menus](../polythene-menu).



## Usage

~~~javascript
import m from "mithril";
import list from "polythene-list";
import listTile from "polythene-list-tile";

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

See [list tile](../polythene-list-tile) for layout variations, for example to add links, icons and images. For example:

~~~javascript
import m from "mithril";
import list from "polythene-list";
import listTile from "polythene-list-tile";
import icon from "polythene-icon";

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
> [source](https://material.io/guidelines/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [list tiles](../polythene-list-tile), and set `indentedBorders` to true. For example:

~~~javascript
import m from "mithril";
import list from "polythene-list";
import listTile from "polythene-list-tile";

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

### Sticky headers

To create alternating sticky headers, the list header gets CSS property `position: sticky`. However this property [does not work in Edge](http://caniuse.com/#feat=css-sticky), so its use is quite limited.

If you do choose to use it, add some styles to the container that holds the lists:

~~~css
.scrollable-list {
  max-height: 15rem; /* some height */
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  /* prevent that the scrollbar gets obscured by the sticky headers (!) */
  position: relative;
  z-index: 1;
}
~~~



## Appearance

### Styling

Below are examples how to change the list appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
list.theme(".themed-list", {
  color_light_background: "#F57C00",
  color_light_border:     "#F57C00",
  color_dark_background:  "#5D4037",
  color_dark_border:      "#5D4037",
  padding: 32
});

m(list, {
  className: "themed-list",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(list, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff"
  },
  // ... other options
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-list` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **content** | use `tiles` or `content` | String, hyperscript or component | | Alternative content; replaces children and ignores `tiles` |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### List specific options

| **Parameter**     |  **Mandatory** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **header**        | optional | Object | | Options object for a [list tile](../polythene-list-tile); any list tile option can be used ,and in addition the options `title` and `sticky` |
| **header.title**  | optional | String | | Title text label |
| **header.sticky** | optional | Boolean | | Make header sticky when scrolling; [does not work in Edge](http://caniuse.com/#feat=css-sticky) |
| **tiles**         | use `tiles` or `content` | Array of type String, hyperscript or component | | List of [list tiles](../polythene-list-tile) |

### List appearance options

| **Parameter**       |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------------- | -------------- | -------- | ----------- | --------------- |
| **borders**         | optional | Boolean | | Set to `true` to add borders to list tiles |
| **indentedBorders** | optional | Boolean | | Set to `true` to indent the list tile borders; note that list tiles must have option `indent` as well       |
| **compact**         | optional | Boolean | | Set to `true` to reduce vertical padding of list tiles |



## Composition

List is composed from:

* [List Tile](../polythene-list-tile)



## CSS classes

See: `src/classes.js`

