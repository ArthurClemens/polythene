[Back to Polythene List Tile main page](ListTile.md)

# List Tile component for Mithril



## Usage

~~~javascript
import m from "mithril"
import { ListTile } from "polythene-mithril"

m(ListTile, {
  title: "My title"
})
~~~

To show the subtitle on 1 line:

~~~javascript
m(ListTile, {
  title: "My title",
  subtitle: "My subtitle"
})
~~~

To show a long subtitle running on 2 lines:

~~~javascript
m(ListTile, {
  title: "My title",
  highSubtitle: "My loooooooooooong subtitle"
})
~~~

To show an icon:

~~~javascript
import m from "mithril"
import { ListTile, Icon } from "polythene-mithril"

m(ListTile, {
  title: "My title",
  front: m(Icon, {
    type: "large",
    avatar: true,
    src: "app/images/1.png"
  })
})
~~~

Or use an SVG as icon:

~~~javascript
const starsSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

// ...
front: m(Icon, {
  svg: m.trust(starsSVG)
})
~~~

To make the primary content a link:

~~~javascript
m(ListTile, {
  title: "My title",
  front: m(Icon, {
    type: "large",
    avatar: true,
    src: "app/images/1.png"
  }),
  url: {
    href: "/favs"
    oncreate: m.route.link
  }
})
~~~

To show secondary content at the right, including a link:

~~~javascript
import { ListTile, Icon } from "polythene-mithril"
const starsSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

m(ListTile, {
  title: "My title",
  front: m(Icon, {
    type: "large",
    avatar: true,
    src: "app/images/1.png"
  }),
  secondary: {
    icon: {
      type: "small",
      svg: m.trust(starsSVG)
    },
    url: {
      href: "/favs",
      oncreate: m.route.link
    }
  })
})
~~~



## Options

[List Tile options](ListTile.md)



## Appearance

* A list tile can have 1 to 3 lines:
  * `title`: titel on a single line
  * `subtitle`: subtitle on a single line
  * `highSubtitle`: subtitle runs over 2 lines
  * Use option `compact` to reduce the vertical padding.
* A list tile can optionally have an icon.
* Text and icon are taken together as primary content. Primary content can optionally have a link.
* A list tile can optionally have secondary content, displayed to the right. Secondary content can contain any content, and conditionally have a link.


### Styling

Below are examples how to change the list tile appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~javascript
ListTile.theme(".themed-list-tile", {
  color_light_title:      "#424242",
  color_light_background: "#FFECB3",
  color_dark_title:       "#FFECB3",
  color_dark_background:  "#5D4037",
  font_size_title:        21
})

m(ListTile, {
  className: "themed-list-tile",
  // ... other options
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-list-tile/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-list-tile";
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(ListTile, {
  style: {
    color: "#fff",
    backgroundColor: "#EF6C00"
  },
  // ... other options
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

