[Back to Polythene Menu main page](../menu.md)

# Menu component for Mithril


## Options

[Menu options](../menu.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/431659xp/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A simple, permanently visible menu:

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

An app will probably never use a permanent menu, but instead show the menu after a user action.

A menu floats on top of other things, so it acts a bit similar to a [Dialog](dialog.md). But the behavior of a menu is entirely different - instead of being displayed globally, its context is close to the caller (a button or clickable list item). The local nature of the menu can be seen when scrolling a page: an open menu will scroll along with the page.

A number of elements must play together:

1. A Menu component
2. A Menu "show" state (`true` or `false`)
3. A button (or link or clickable list item) to set the menu state; and to act as Menu's target for positioning
4. A container that holds both menu and button (or list); because the Menu is positioned `absolute`, the container must have style `position: relative`

Because we are using state, this is best created with a custom component where we can store the "menu open" state.

<a href="https://jsfiddle.net/ArthurClemens/0jccysmx/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { Menu, List, ListTile, RaisedButton  } from "polythene-mithril"

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
      isOpen,                                   // 2. show state
      target: "simple-menu"                     // 3. target
    }
  },
  view: vnode => {
    const state = vnode.state
    const target = state.target
    const isOpen = state.isOpen()
    return m("div",
      { style: { position: "relative" } },      // 4. container with `position: relative`
      [
        m(RaisedButton, 
          {
            label: "Open menu",
            id: target,                         // 3. target
            events: {
              onclick: () => state.isOpen(true) // 2. show state
            }
          }
        ),
        m(Menu, {                               // 1. Menu component
          target: `#${target}`,                 // 3. target
          show: isOpen,                         // 2. show state
          didHide: () => state.isOpen(false),   // 2. show state
          content: menuContents
        })
      ]
    )
  }
}
~~~

### Hiding

A menu is closed by tapping outside of the menu, or by pressing ESCAPE.

### Positioning

To position a menu to another element, pass parameters `target` (set to the selector of the element) and optionally `origin` to relatively position the menu.

To shift the menu vertically to a selected menu item, the menu item must have the class "selected".
To override this behavior, pass `reposition: false`.

### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`. As shown in the example above, `didHide` is used to  update the Menu state.

~~~javascript
didHide: id => (state.isOpen(false), m.route("/"))
~~~

### Dialog as simple menu

When a menu contains elements that don't fit on single lines, Material Design guidelines suggest to use a [Dialog](dialog.md) instead.

A dialog can be used as menu by passing param `menu` to the dialog component. This will show a dialog with menu contents, centered on the screen:

~~~javascript
import m from "mithril"
import { Dialog, RaisedButton, List, ListTile } from "polythene-mithril"

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
    m(RaisedButton, {
      label: "Open",
      events: {
        onclick: () => Dialog.show(dialogOptions)
      }
    }
  )
}
~~~

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
        hideDelay: .240,
        didHide: () => state.isOpen(false),
        size: 5,
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


## Appearance

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

m(Menu, {
  className: "themed-menu"
})
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

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


