[Back to Polythene List main page](../list.md)

# List component for React


## Options

[List options](list.md)


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
  [
    h(ListTile, {title: "Jennifer Barker"}),
    h(ListTile, {title: "Ali Connors"}),
  ]
})
~~~

## List content variations

See [List Tile](list-tile.md) for layout variations, for example to add links, icons and images. 


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


### Keyboard control

Sometimes it is useful to enable selecting list values with the keyboard, for instance with autocomplete search suggestions.

* `keyboardControl` enables keyboard control.
* The list can be navigated using TAB, the arrow keys.
* List items can be selected with ENTER and clicking.
* List Tiles with option `header` will be skipped.
* The current item is highlighted; the initial highlighted item is set with `defaultHighlightIndex`.
* Callback function `onSelect` allows to interpret the selected item; passed parameters are: 
  * `event`
  * `index`
  * `dom`
  * `attrs`

**Note:**

* When using stacked lists, the one list does not know the state of the other list. Instead use one single list and set headers with ListTile option `header`.
* Option `onclick` is ignored because this is internally implemented by List. Use `onSelect` instead.


~~~jsx
import { List, Notification } from "polythene-react"

const selectTile = ({ title }) => (
  { title }
);
const headerTile = ({ title }) => (
  { title, header: true }
);

<List
  keyboardControl
  highlightIndex={0}
  onSelect={({ attrs }) => (
    Notification.show({
      title: attrs.title,
      showDuration: .1,
      hideDuration: .2,
      timeout: .8
    })
  )}
  tiles={[
    headerTile({ title: "A"}),
    selectTile({ title: "Amman" }),
    selectTile({ title: "Amsterdam" }),
    selectTile({ title: "Athens" }),
    headerTile({ title: "B" }),
    selectTile({ title: "Bangkok" }),
    selectTile({ title: "Beijing" }),
    selectTile({ title: "Brussels" }),
    headerTile({ title: "C" }),
    selectTile({ title: "Canberra" }),
    selectTile({ title: "Cardiff" }),
    selectTile({ title: "Copenhagen" }),
  ]}
/>
~~~



## Appearance

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

Change CSS using the CSS classes in `polythene-core-list/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-list";
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

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


