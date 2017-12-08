[Back to Polythene List main page](../list.md)

# List component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
- [List content variations](#list-content-variations)
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

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/yzba5Lvn/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { List, ListTile } from "polythene-react"

<List header={{ title: "Friends" }}>
  <ListTile title="Jennifer Barker" />
  <ListTile title="Ali Connors" />
</List>
~~~

The list header will be also rendered using a list tile.

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/3vdfmg8p/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, List, ListTile } from "polythene-react"

h(List, {
  header: {
    title: "Friends"
  },
  tiles: [
    h(ListTile, {title: "Jennifer Barker"}),
    h(ListTile, {title: "Ali Connors"}),
  ]
})
~~~

<a name="list-content-variations"></a>
## List content variations

See [List Tile](list-tile.md) for layout variations, for example to add links, icons and images. 


<a name="variations"></a>
## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](https://material.io/guidelines/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [List Tiles](../list-tile.md), and set `indentedBorders` to true. For example:

#### With JSX

~~~jsx
import React from "react"
import { List, ListTile } from "polythene-react"

<List
  indentedBorders
  tiles={[
    <ListTile title="Jennifer Barker" indent />
  ]}  
/>
~~~

#### With hyperscript

~~~javascript
import { renderer as h, List, ListTile } from "polythene-react"

h(List, {
  indentedBorders: true,
  tiles: [
    h(ListTile, {
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

TO UPDATE



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

<List className="themed-list" />
~~~

#### CSS

Change CSS using the [List CSS classes](../../../packages/polythene-css-classes/list.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/list"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<List
  style={{
    backgroundColor: "#EF6C00",
    color: "#fff"
  }}
/>
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


