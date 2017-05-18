[Back to Polythene List main page](List.md)

# List component for Mithril



## Usage

~~~javascript
import m from "mithril"
import { List, ListTile } from "polythene-mithril"

m(List, {
  header: {
    title: "Friends"
  },
  [
    m(ListTile, {title: "Jennifer Barker"}),
    m(ListTile, {title: "Ali Connors"}),
  ]
})
~~~

The header will be also rendered using a list tile.

See [List Tile](ListTile-Mithril.md) for layout variations, for example to add links, icons and images. For example:

~~~javascript
import m from "mithril"
import { List, ListTile, Icon } from "polythene-mithril"

m(List, {
  header: {
    title: "Friends"
  },
  [
    m(ListTile, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      front: m(Icon, {
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
})
~~~



## Options

[List options](List.md)



## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](https://material.io/guidelines/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [List Tiles](ListTile.md), and set `indentedBorders` to true. For example:

~~~javascript
import m from "mithril"
import { List, ListTile } from "polythene-mithril"

m(List, {
  indentedBorders: true,
  tiles: [
    m(ListTile, {
      title: "Jennifer Barker",
      indent: true
    }),
    // ...
  ]
})
~~~

### Sticky headers

To create alternating sticky headers, the list header gets CSS property `position: sticky`. However this property [does not work in Edge](http://caniuse.com/#feat=css-sticky), so its use is a bit limited.

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

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~javascript
List.theme(".themed-list", {
  color_light_background: "#F57C00",
  color_light_border:     "#F57C00",
  color_dark_background:  "#5D4037",
  color_dark_border:      "#5D4037",
  padding: 32
})

m(List, {
  className: "themed-list",
  // ... other options
})
~~~

Change CSS using the CSS classes in `polythene-core-list/src/classes.js`

Class names can be imported with:

~~~javascript
import { CoreList } from "polythene-core-list";

// CoreList.classes
~~~


#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(List, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff"
  },
  // ... other options
})
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

