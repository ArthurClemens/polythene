[Back to Polythene Menu main page](../menu.md)

# Menu component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
  - [Hiding](#hiding)
  - [Positioning](#positioning)
  - [Callbacks](#callbacks)
  - [Dialog as simple menu](#dialog-as-simple-menu)
  - [Settings menu \(position to selected value\)](#settings-menu-position-to-selected-value)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Transitions](#transitions)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[Menu options](../menu.md)


<a name="usage"></a>
## Usage

A simple, permanently visible menu:

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

An app will probably never use a permanent menu, but instead show the menu after a user action.

A menu floats on top of other things, so it acts a bit similar to a [Dialog](dialog.md). But the behavior of a menu is entirely different - instead of being displayed globally, its context is close to the caller (a button or clickable list item). The local nature of the menu can be seen when scrolling a page: an open menu will scroll along with the page.

A number of elements must play together:

1. A Menu component
2. A Menu "show" state (`true` or `false`)
3. A button (or link or clickable list item) to set the menu state; and to act as Menu's target for positioning
4. A container that holds both menu and button (or list); because the Menu is positioned `absolute`, the container must have style `position: relative`

Because we are using state, this is best created with a custom component where we can store the "menu open" state.

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/Lm1o6f9y/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React, { Component } from "react"
import { Menu, List, ListTile, RaisedButton } from "polythene-react"

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
        <RaisedButton
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

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/fzcys56b/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import React, { Component } from "react"
import { renderer as h, Menu, List, ListTile, RaisedButton } from "polythene-react"

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
        h(RaisedButton, 
          {
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

<a name="hiding"></a>
### Hiding

A menu is closed by tapping outside of the menu, or by pressing ESCAPE.

<a name="positioning"></a>
### Positioning

To position a menu to another element, pass parameters `target` (set to the selector of the element) and optionally `origin` to relatively position the menu.

To shift the menu vertically to a selected menu item, the menu item must have the class "selected".
To override this behavior, pass `reposition: false`.

<a name="callbacks"></a>
### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`. As shown in the example above, `didHide` is used to  update the Menu state.

~~~javascript
didHide: id => (this.setState({ isOpen: false }), history.push("/"))
~~~



<a name="dialog-as-simple-menu"></a>
### Dialog as simple menu

When a menu contains elements that don't fit on single lines, Material Design guidelines suggest to use a [Dialog](dialog.md) instead.

A dialog can be used as menu by passing param `menu` to the dialog component. This will show a dialog with menu contents, centered on the screen:

#### With JSX

~~~jsx
import React from "react";
import { renderer as h, Dialog, RaisedButton, List, ListTile } from "polythene-react";

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
  <RaisedButton
    label="Open Menu Dialog"
    events={{
      onClick: () => Dialog.show(dialogOptions)
    }}
  />;
~~~


#### With hyperscript

~~~javascript
import { renderer as h, Dialog, RaisedButton, List, ListTile } from "polythene-react"

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
  h(RaisedButton, {
    label: "Open",
    events: {
      onClick: () => Dialog.show(dialogOptions)
    }
  })
~~~

<a name="settings-menu-position-to-selected-value"></a>
### Settings menu (position to selected value)

A settings menu shows the selected value, and when opening the menu, highlights the selected value in the menu.

Similar to the simple menu, we keep track of the "open" state. Here we're adding the state for the selected index.

#### With JSX

~~~jsx
<Menu 
  target={`#${target}`}
  show={isOpen}
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

#### With hyperscript

~~~javascript
h(Menu, 
  {
    target: `#${target}`,
    show: isOpen,
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


<a name="appearance"></a>
## Appearance

<a name="styling"></a>
### Styling

Below are examples how to change the Menu appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
import { MenuCSS } from "polythene-css"

MenuCSS.addStyle(".themed-menu", {
  color_light_background: "#2196F3",
  border_radius:          0
})

<Menu className="themed-menu" />
~~~

#### CSS

Change CSS using the [Menu CSS classes](../../../packages/polythene-css-classes/menu.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/menu"
~~~

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

<a name="transitions"></a>
### Transitions

Transition settings in the options:

~~~javascript
showDuration: 100,
hideDuration: 300
~~~

See also "Transition options" in the [Menu options](../menu.md).

Alternatively set transition properties in CSS:

~~~css
.pe-menu {
  transition-timing-function: ease-out;
  transition-property: opacity;
  opacity: 0;
}
.pe-menu--visible {
  opacity: 1;
}
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


