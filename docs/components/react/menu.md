[Back to Polythene Menu main page](../menu.md)

# Menu component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Options](#options-1)
- [Types of menu](#types-of-menu)
- [Usage](#usage)
  - [Showing](#showing)
  - [Hiding the menu](#hiding-the-menu)
  - [Positioning](#positioning)
  - [Long lists: menu height and scrolling](#long-lists-menu-height-and-scrolling)
  - [Callbacks](#callbacks)
  - [Dropdown menu](#dropdown-menu)
  - [Exposing dropdown menu](#exposing-dropdown-menu)
  - [Dialog menu](#dialog-menu)
  - [Settings menu \(position to selected value\)](#settings-menu-position-to-selected-value)
- [Appearance](#appearance)
  - [Variations](#variations)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Menu options](../menu.md)


<a id="options-1"></a>
## Options

[Menu options](../menu.md)


<a id="types-of-menu"></a>
## Types of menu

* Dropdown menu
  * The placement varies with the element that opens it; often the menu covers the clicked item. [Usage](#dropdown-menu)
* Exposing dropdown menu
  * The menu is placed below the element, which display the currently selected menu item. [Usage](#exposing-dropdown-menu) 
* Dialog menu
  * This variant was introduced in the first version of Material Design specs. When a menu contains elements that don't fit on single lines, the guidelines suggested to use a Dialog instead. This type of menu behaves more global as it doesn't scroll with the page; it could even be made a modal dialog.
  * Examples:
    * [Dialog menu](#dialog-menu)
    * [Settings menu \(position to selected value\)](#settings-menu-position-to-selected-value)



<a id="usage"></a>
## Usage

A bare bones menu (made permanently visible to start simple):

<a id="with-jsx"></a>
#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/gta0c3te/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Menu, List, ListTile } from "polythene-react"

<Menu permanent>
  <List>
    <ListTile title="Yes" />
    <ListTile title="No" />
  </List>
</Menu>
~~~

<a id="with-hyperscript"></a>
#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/umrnvm13/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, Menu, List, ListTile } from "polythene-react"

h(Menu, {
  permanent: true,
  content: h(List, [
    h(ListTile, { title: "Yes" }),
    h(ListTile, { title: "No" })
  ])
})
~~~

<a id="showing"></a>
### Showing

In real life we want to show a menu after user interaction.

A menu floats on top of other things, so it acts a bit similar to a [Dialog](dialog.md). But the behavior of a menu is entirely different - instead of being displayed globally, its context is close to the caller (a button or clickable list item). The local nature of the menu can be seen when scrolling a page: an open menu will scroll along with the page.

Four things are involved in creating a menu:

1. The Menu component
2. The menu visibility state (`show: true` or `show: false`)
3. A button (or link or clickable list item) to set the menu state; and to act as Menu's target for positioning
4. A container that holds both menu and button (or list)
    * Because the menu is positioned `absolute`, the container must have style `position: relative`
    * To use the maximum available space, the container must have a height

Menu state is best stored locally, in the container component:

<a id="with-jsx-1"></a>
#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/Lm1o6f9y/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React, { Component } from "react"
import { Menu, List, ListTile, Button } from "polythene-react"

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    const isOpen = this.state.isOpen
    const target = "simple-menu"
    return (
      <div style={{ position: "relative" }}>
        <Button
          raised
          label="Open menu"
          id={target}
          events={{
            onClick: () => this.setState({ isOpen: true })
          }}
        />
        <Menu
          target={`#${target}`}
          show={isOpen}
          didHide={() => this.setState({ isOpen: false })}
        >
          <List>
            <ListTile title="Yes" ink hoverable />
            <ListTile title="No" ink hoverable />
          </List>
        </Menu>
      </div>
    )
  }
}
~~~

<a id="with-hyperscript-1"></a>
#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/fzcys56b/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import React, { Component } from "react"
import { renderer as h, Menu, List, ListTile, Button } from "polythene-react"

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    const isOpen = this.state.isOpen
    const target = "simple-menu"
    return h("div",
      { style: { position: "relative" } },
      [
        h(Button, 
          {
            raised: true,
            label: "Open menu",
            id: target,
            events: {
              onClick: () => this.setState({ isOpen: true })
            }
          }
        ),
        h(Menu, 
          {
            target: `#${target}`,
            show: isOpen,
            didHide: () => this.setState({ isOpen: false })
          },
          h(List, [
            h(ListTile, { title: "Yes", ink: true, hoverable: true }),
            h(ListTile, { title: "No", ink: true, hoverable: true })
          ])
        )
      ]
    )
  }
}
~~~


<a id="hiding-the-menu"></a>
### Hiding the menu

A menu is closed by tapping outside of the menu, or by pressing ESCAPE.

The option `didHide` is used to reset the local visibility variable.


<a id="positioning"></a>
### Positioning

To position a menu to another element, pass parameters `target` (set to the selector of the element) and optionally `origin` to relatively position the menu.

To be able to shift the menu vertically to the selected menu item, that menu item (List Tile) must have the class `pe-list-tile--selected` (set with option `selected: true`).


<a id="long-lists-menu-height-and-scrolling"></a>
### Long lists: menu height and scrolling

Menu lists with a small number of items will fit on any screen. Longer lists need to be constrained to a certain size, especially on mobile.

Set the menu height with option `height`:

* Use a Number with or without pixels or percentage, for example: `160`, `"160px"` or `"75%"`
  * When using percentage the parent element must have a height
* Use "max" to use the maximum available height within the parent element (the top position and bottom margin will be subtracted automatically)

Content that does not fit the menu frame will be scrollable.

* To scroll a selected item into view when the menu appears, use `scrollTarget` to pass a selector, for example: `scrollTarget: ".list-item-12"` 


<a id="callbacks"></a>
### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`. As shown in the example above, `didHide` is used to update the Menu state.

You can add different behavior, for instance route to another page:

~~~javascript
didHide: id => (
  this.setState({ isOpen: false }),
  history.push("/")
)
~~~


<a id="dropdown-menu"></a>
### Dropdown menu

The placement varies with the element that opens it; often the menu covers the clicked item.

  * Use option `offsetV` with value `0` to cover the target element. Use `offsetH` to tweak the horizontal position.
  * The menu appears with a fade-in animation, unless option `origin` is set, in which case it will appear from a corner or a side.
  * Use `reposition: true` to align the menu to the selected value (when the clicked element is a List Tiles).
  * Use `topMenu: true` to make the menu appear full width and fixed to the top of the page

<a id="exposing-dropdown-menu"></a>
### Exposing dropdown menu

The menu exposes the clicked element above it. This is the default menu behavior: a menu has a top position that takes the clicked element into account.

The appearance will look more natural when `origin` is set to "top" - it will look as if the menu is appearing out of the clicked element.


<a id="dialog-menu"></a>
### Dialog menu

A dialog can be used as menu by passing param `menu` to the dialog component. This will show a dialog with menu contents, centered on the screen:

<a id="with-jsx-2"></a>
#### With JSX

~~~jsx
import React from "react";
import { renderer as h, Dialog, Button, List, ListTile } from "polythene-react";

const Tile = ({ title, selected, disabled }) =>
  <ListTile
    title={title}
    selected={selected}
    disabled={disabled}
    ink
    events={{
      onClick: () => {
        if (!disabled) {
          Dialog.hide()
        }
      }
    }}
  />;

const dialogOptions = {
  menu: <List
    hoverable
    tiles={[
      <Tile title="Item one" selected={true} disabled={false} />,
      <Tile title="Item two" selected={false} disabled={false} />,
      <Tile title="Item three" selected={false} disabled={true} />
    ]}
  />,
  hideDelay: .240
};

export default () => 
  <Button
    raised
    label="Open Menu Dialog"
    events={{
      onClick: () => Dialog.show(dialogOptions)
    }}
  />;
~~~


<a id="with-hyperscript-2"></a>
#### With hyperscript

~~~javascript
import { renderer as h, Dialog, Button, List, ListTile } from "polythene-react"

const tile = (title, selected, disabled) =>
  h(ListTile, {
    title,
    selected,
    disabled,
    ink: true,
    events: {
      onClick: () => {
        if (!disabled) {
          Dialog.hide()
        }
      }
    }
  })

const dialogOptions = {
  menu: h(List, {
    hoverable: true,
    tiles: [
      tile("Item one",   true,  false),
      tile("Item two",   false, false),
      tile("Item three", false, true)
    ]
  }),
  hideDelay: .240
}

const Page = () =>
  h(Button, {
    raised: true,
    label: "Open",
    events: {
      onClick: () => Dialog.show(dialogOptions)
    }
  })
~~~


<a id="settings-menu-position-to-selected-value"></a>
### Settings menu (position to selected value)

A settings menu shows the selected value, and when opening the menu, highlights the selected value in the menu.

Similar to the simple menu, we keep track of the "open" state. Here we're adding the state for the selected index.

<a id="with-jsx-3"></a>
#### With JSX

~~~jsx
<Menu 
  target={`#${target}`}
  show={isOpen}
  size={5}
  offsetH={16}
  offsetV={0}
  reposition
  didHide={() => this.setState({ isOpen: false })
>
  <List>
    {
      menuOptions.map((setting, index) =>
        <ListTile
          title={setting}
          selected={index === this.state.selectedIndex}
          ink
          events={{
            onClick: () => this.setState({ selectedIndex: index })
          }}
        />
      )
    }
  </List>
</Menu>
~~~

<a id="with-hyperscript-3"></a>
#### With hyperscript

~~~javascript
h(Menu, 
  {
    target: `#${target}`,
    show: isOpen,
    size: 5,
    offsetH: 16,
    offsetV: 0,
    reposition: true,
    didHide: () => this.setState({ isOpen: false })
  },
  h(List,
    {
      tiles: menuOptions.map((setting, index) =>
        h(ListTile, {
          title: setting,
          selected: index === selectedIndex,
          ink: true,
          events: {
            onClick: () => this.setState({ selectedIndex: index })
          }
        })
      )
    }
  )
)
~~~



<a id="appearance"></a>
## Appearance

<a id="variations"></a>
### Variations

* Set the menu width with option `width` (choose 1, 1.5, 2, 3, 4, 5, 6, 7, or "auto")
* Set the menu height with `height`; use "max" to use the maximum available height within the parent element (the top position and bottom margin will be subtracted automatically)
* To make the menu stand out more from the surroundings, create a backdrop with `backdrop: true`


<a id="styling"></a>
### Styling

Below are examples how to change the Menu appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { MenuCSS } from "polythene-css"

MenuCSS.addStyle(".themed-menu", {
  color_light_background: "#2196F3",
  border_radius:          0
})

<Menu className="themed-menu" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Menu CSS classes](../../../packages/polythene-css-classes/menu.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/menu"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. Because a Menu is created with a List, the style must also be passed to its List Tiles:

~~~javascript
const backgroundColor = "#2196F3"
const color = "#fff"
const style = {
  backgroundColor,
  color
}

<Menu style={style}>
  <List>
    <ListTile title="Yes" style={style} />
    <ListTile title="No" style={style} />
  </List>
</Menu>
~~~

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)


