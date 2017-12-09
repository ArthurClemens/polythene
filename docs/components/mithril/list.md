[Back to Polythene List main page](../list.md)

# List component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
- [Variations](#variations)
  - [Sticky headers](#sticky-headers)
  - [Keyboard control](#keyboard-control)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[List options](../list.md)


<a name="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/8k7gg3va/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { List, ListTile } from "polythene-mithril"

m(List, {
  header: {
    title: "Friends"
  },
  tiles: [
    m(ListTile, {title: "Jennifer Barker"}),
    m(ListTile, {title: "Ali Connors"}),
  ]
})
~~~

The header will be also rendered using a list tile.

See [List Tile](list-tile.md) for layout variations, for example to add links, icons and images. For example:

~~~javascript
import m from "mithril"
import { List, ListTile, Icon } from "polythene-mithril"

m(List, {
  header: {
    title: "Friends"
  },
  tiles: [
    m(ListTile, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      front: m(Icon, {
        src: "images/jennifer.png",
        avatar: true,
        size: "large"
      }),
      url: {
        href: "/friends/jennifer"
        config: m.route
      }
    })
  ]
})
~~~


<a name="variations"></a>
## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](https://material.io/guidelines/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [List Tiles](../list-tile.md), and set `indentedBorders` to true. For example:

~~~javascript
import m from "mithril"
import { List, ListTile } from "polythene-mithril"

m(List, {
  indentedBorders: true,
  tiles: [
    m(ListTile, {
      title: "Jennifer Barker",
      indent: true
    })
  ]
})
~~~

<a name="sticky-headers"></a>
### Sticky headers

To create alternating sticky headers, the list header gets CSS property `position: sticky`. However this property [does not work in IE or Edge](http://caniuse.com/#feat=css-sticky), so its use is a bit limited.

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

<a name="keyboard-control"></a>
### Keyboard control

Sometimes it is useful to enable selecting list values with the keyboard, for instance with autocomplete search suggestions.

Visually, tiles can be visually marked using List's `hoverable` and [List Tile's](../list-tile.md) `highlight` and `selected`.

To give a list keyboard control, it must first receive focus, either with a click or from a parent element that has focus. List Tile elements can receive focus because they have attribute `tabindex=0` by default.

To keep track of the selected element, wrap the list in a stateful component. The component will also handle key input.

In this example we are creating a list that accepts a click to create the first selection, then accepts arrow keys to move the selection up and down, and the Escape key to remove the selection.

A more elaborate example is given in [Search - Results list](search.md#result-list).

<a href="https://jsfiddle.net/ArthurClemens/2p9zdzk8/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { List, ListTile } from "polythene-mithril"

const listData = ["A", "B", "C", "D", "E"]

const KeyboardList = {
  oninit: vnode => {
    const selectedIndex = stream(-1) // no selection at start
    
    const handleKey = e => {
      const index = selectedIndex()
      if (e.key === "ArrowDown") {
        e.preventDefault()
        const newIndex = Math.min(index + 1, listData.length - 1)
        selectedIndex(newIndex)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        const newIndex = Math.max(0, index - 1)
        selectedIndex(newIndex)
      } else if (e.key === "Escape") {
        selectedIndex(-1)
      }
    }

    vnode.state = {
      handleKey,
      selectedIndex,
    }
  },
  view: ({ state, attrs }) => {
    const selectedIndex = state.selectedIndex()
    return m("div",
      // The container catches all keyboard events
      { onkeydown: state.handleKey },
      m(List, 
        {
          borders: true,
          tiles: listData.map((title, index) =>
            m(ListTile,
              {
                title,
                hoverable: true,
                selected: index === selectedIndex,
                events: {
                  onclick: () => state.selectedIndex(index)
                }
              }
            )
          )
        }
      )
    )
  }
}
~~~


<a name="appearance"></a>
## Appearance

<a name="styling"></a>
### Styling

Below are examples how to change the list appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
import { ListCSS } from "polythene-css"

ListCSS.addStyle(".themed-list", {
  color_light_background: "#F57C00",
  color_light_border:     "#F57C00",
  color_dark_background:  "#5D4037",
  color_dark_border:      "#5D4037",
  padding: 32
})

m(List, {
  className: "themed-list"
})
~~~

#### CSS

Change CSS using the [List CSS classes](../../../packages/polythene-css-classes/list.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/list"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(List, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff"
  }
})
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


