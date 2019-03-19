[Back to Polythene Menu main page](../menu.md)

# Menu component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
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
  - [Settings menu (position to selected value)](#settings-menu-position-to-selected-value)
- [Appearance](#appearance)
  - [Variations](#variations)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
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

<a href="https://jsfiddle.net/ArthurClemens/431659xp/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A bare bones menu (made permanently visible to start simple):

~~~javascript
import m from "mithril"
import { Menu, List, ListTile } from "polythene-mithril"

m(Menu, {
  permanent: true,
  content: m(List, [
    m(ListTile, { title: "Yes" }),
    m(ListTile, { title: "No" })
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

<a href="https://jsfiddle.net/ArthurClemens/0jccysmx/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { Menu, List, ListTile, Button } from "polythene-mithril"

const menuContents = m(List, [
  m(ListTile, {
    title: "Yes",
    ink: true
  }),
  m(ListTile, {
    title: "No",
    ink: true
  })
]);

const SimpleMenu = {
  oninit: vnode => {
    const isOpen = stream(false)
    vnode.state = {
      isOpen,                                   // 2. visibility
    }
  },
  view: vnode => {
    const state = vnode.state
    const isOpen = state.isOpen()
    const target = "simple-menu"                // 3. target
    return m("div",
      { style: { position: "relative" } },      // 4. container with `position: relative`
      [
        m(Button, 
          {
            raised: true,
            label: "Open menu",
            id: target,                         // 3. target
            events: {
              onclick: () => state.isOpen(true) // 2. visibility
            }
          }
        ),
        m(Menu, {                               // 1. Menu component
          target: `#${target}`,                 // 3. target
          show: isOpen,                         // 2. visibility
          didHide: () => state.isOpen(false),   // 2. visibility
          content: menuContents
        })
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

<a href="https://flems.io/#0=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" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Menu lists with a small number of items will fit on any screen. Longer lists need to be constrained to a certain size, especially on mobile.

Content that does not fit the menu frame will scroll.

* Use a Number with or without pixels or percentage, for example: `160`, `"160px"` or `"75%"`
  * When using percentage the parent element must have a height
* Use "max" to use the maximum available height within the parent element (the top position and bottom margin will be subtracted automatically)

Content that does not fit the menu frame will be scrollable.

* To scroll a selected item into view when the menu appears, use `scrollTarget` to pass a selector, for example: `scrollTarget: ".list-item-12"` 



<a id="callbacks"></a>
### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`. As shown in the example above, `didHide` is used to  update the Menu state.

You can add different behavior, for instance route to another page:

~~~javascript
didHide: id => (
  state.isOpen(false),
  m.route("/")
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

~~~javascript
import m from "mithril"
import { Dialog, Button, List, ListTile } from "polythene-mithril"

const tile = (title, selected, disabled) =>
  m(ListTile, {
    title,
    selected,
    disabled,
    ink: true,
    events: {
      onclick: () => {
        if (!disabled) {
          Dialog.hide()
        }
      }
    }
  })

const dialogOptions = {
  menu: m(List, {
    hoverable: true,
    tiles: [
      tile("Item one",   true,  false),
      tile("Item two",   false, false),
      tile("Item three", false, true)
    ]
  }),
  hideDelay: .240
}

const Page = {
  view: () => 
    m(Button, {
      raised: true,
      label: "Open",
      events: {
        onclick: () => Dialog.show(dialogOptions)
      }
    }
  )
}
~~~


<a id="settings-menu-position-to-selected-value"></a>
### Settings menu (position to selected value)

A settings menu shows the selected value, and when opening the menu, highlights the selected value in the menu.

Similar to the simple menu, we keep track of the "open" state. Here we're adding the state for the selected index.

~~~javascript
import m from "mithril"
import { Menu, List, ListTile } from "polythene-mithril"

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
]

const Page = {
  oninit: vnode => {
    const isOpen = stream(false)
    const selectedIndex = stream(0)
    vnode.state = {
      isOpen,
      selectedIndex,
      target: "settings-menu"
    }
  },
  view: vnode => {
    const state = vnode.state
    const target = state.target
    const isOpen = state.isOpen()
    const selectedIndex = state.selectedIndex()
    return m("div", {
      style: { position: "relative" }
    }, [
      m(Menu, {
        target: `#${target}`,
        show: isOpen,
        size: 5,
        offsetH: 16,
        offsetV: 0,
        reposition: true,
        didHide: () => state.isOpen(false),
        content: m(List, {
          tiles: menuOptions.map((setting, index) =>
            m(ListTile, {
              title: setting,
              selected: index === selectedIndex,
              ink: true,
              events: {
                onclick: () => state.selectedIndex(index)
              }
            })
          )
        })
      }),
      m(List, {
        tiles: [
          m(ListTile, {
            id: target,
            title: "When device is locked",
            subtitle: menuOptions[selectedIndex],
            events: {
              onclick: () => state.isOpen(true)
            }
          }),
          m(ListTile, {
            title: "Item 2",
            disabled: true
          }),
          m(ListTile, {
            title: "Item 3",
            disabled: true
          })
        ]
      })
    ])
  }
};
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

m(Menu, {
  className: "themed-menu"
})
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

m(Menu, {
  style,
  content: m(List, [
    m(ListTile, {
      title: "Yes",
      style
    }),
    m(ListTile, {
      title: "No",
      style
    })
  ])
})
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)

