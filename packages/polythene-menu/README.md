# Menu

A local popup menu with a list of choices. A menu contains one or more [lists](../polythene-list) with [list tiles](../polythene-list-tile) as menu elements.



## Usage

Menus float on top of other things, so they are visually similar to [dialogs](../polythene-dialog). But the behavior of menus is entirely different - instead of being displayed globally, their context is close to the caller (a button or clickable list item). The local nature of menus can be seen when scrolling a page: any open menu will scroll along with the page.

A number of ingredients must play together:

1. A menu component
2. A menu state (open or closed)
3. A button (or link or clickable list item) to set the menu state; and to act as menu's target for positioning
4. A container that holds both menu and button (or list); because the menu is positioned `absolute`, the container must have style `position: relative`

Because we are using state, this can be best created with a custom component where we can store the "menu open" state.

~~~javascript
import m from "mithril";
import menu from "polythene-menu";
import list from "polythene-list";
import listTile from "polythene-list-tile";
import raisedButton from "polythene-raised-button";

const content = m(list, [
  m(listTile, {
    title: "Yes",
    ink: true
  }),
  m(listTile, {
    title: "No",
    ink: true
  })
]);

const simpleMenu = {
  isOpen: false, // 2.
  id: "simple-menu",
  view: vnode => 
    m("div", { 
      style: { position: "relative" } // 4.
    }, [
      m(raisedButton, // 3.
        {
          label: "Open menu",
          id: vnode.state.id,
          events: {
            onclick: () => vnode.state.isOpen = true // 2.
          }
        }
      ),
      m(menu, { // 1.
        target: vnode.state.id,
        show: vnode.state.isOpen,
        didHide: () => vnode.state.isOpen = false, // 2.
        content
      })
    ])
}
~~~


### Hiding

A menu is closed by tapping outside of the menu, or by pressing ESCAPE.


### Positioning

To position a menu to another element, pass parameters `target` (set to the id of the element) and `origin`.

To position the menu vertically to a selected menu item, the menu item must have the class "selected".
To override this behavior, pass `reposition: false`.


### Transitions

Transition settings in the options:

~~~javascript
const menuOptions = {
  showDuration: 100,
  hideDuration: 300
};
~~~

See also "Transition options" below.


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


### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`.

~~~javascript
const menuOptions = {
  didHide: id => m.route("/")
};
~~~


### Dialog as simple menu

When a menu contains longer elements that don't fit on 1 line, Material Design guidelines suggest to use a [dialog](../polythene-dialog) instead.

A dialog can be used as menu by passing param `menu` to the dialog component. This will show a dialog with menu contents, centered on the screen:

~~~javascript
import m from "mithril";
import dialog from "polythene-dialog";
import raisedButton from "polythene-raised-button";
import list from "polythene-list";
import listTile from "polythene-list-tile";

const tile = (title, selected, disabled) =>
  m(listTile, {
    title,
    selected,
    disabled,
    ink: true,
    events: {
      onclick: () => {
        if (!disabled) {
          dialog.hide();
        }
      }
    }
  });

const settingsMenuDialog =  {
  menu: m(list, {
    hoverable: true,
    tiles: [
      tile("Item one",   true,  false),
      tile("Item two",   false, false),
      tile("Item three", false, true)
    ]
  }),
  hideDelay: .240
};

const page = {
  view: () => 
    m(raisedButton, {
      label: "Open",
      events: {
        onclick: () => dialog.show(settingsMenuDialog)
      }
    }
  )
};
~~~


### Settings menu (position to selected value)

A settings menu shows the selected value, and when opening the menu, highlights the selected value in the menu.

Similar to the simple menu, we keep track of the "open" state; we're adding the state for the selected index.

~~~javascript
import m from "mithril";
import menu from "polythene-menu";
import list from "polythene-list";
import listTile from "polythene-list-tile";

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
];

const page = {
  isOpen: false,
  selectedIndex: 0,
  id: "settings-menu",
  view: vnode => 
    m("div", {
      style: { position: "relative" }
    }, [
      m(menu, {
        target: vnode.state.id,
        show: vnode.state.isOpen,
        hideDelay: .240,
        didHide: () => vnode.state.isOpen = false,
        size: 5,
        content: m(list, {
          hoverable: true,
          tiles: menuOptions.map((setting, index) =>
            m(listTile, {
              title: setting,
              selected: index === vnode.state.selectedIndex,
              ink: true,
              events: {
                onclick: () => vnode.state.selectedIndex = index
              }
            })
          )
        })
      }),
      m(list, {
        selectable: true,
        tiles: [
          m(listTile, {
            id: vnode.state.id,
            title: "When device is locked",
            subtitle: menuOptions[vnode.state.selectedIndex],
            events: {
              onclick: () => vnode.state.isOpen = true
            }
          }),
          m(listTile, {
            title: "Item 2",
            disabled: true
          }),
          m(listTile, {
            title: "Item 3",
            disabled: true
          })
        ]
      })
    ])
};
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **class**     | optional       | String   |             | Extra CSS class appended to `pe-menu` |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **id**        | optional       | String   |             | HTML element id |
| **content**   | use `content` or `vnode.children` | One or more Mithril elements | | Expects a [list](../polythene-list), or an array of lists; replaces `vnode.children` |
| **before**    | optional       | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional       | Object | | Options object containing one or more standard events such as `onclick` |

### Menu specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **visible** | required | Boolean | false | Set to true to show the menu |
| **target** | optional | String |  | HTML element id to position to |
| **reposition** | optional | Boolean | true | Set to `false` to not position the menu to the menu item ([list tile](../polythene-list-tile)) that has class "selected" |
| **show** | optional | Boolean | | Set to true to show the menu |

### Menu appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **offset** | optional | Number | 16 | Horizontal offset  |
| **origin** | optional | String: "top-left", "top-right", "bottom-left", "bottom-right" | "top-left" (if `target` is specified) | Positioned menu corner |
| **size** | optional | Number: 1, 1.5, 2, 3, 4, 5, 6, 7; or "auto" | | Multiplication factor of width unit (56px); with "auto" the menu takes the width of the widest element |
| **z** | optional | Number 0-5 | 3 | Depth of the shadow |
| **permanent** | optional | Boolean |  | Set to true to always show the menu (mostly used for demonstration purposes) |

### Transition options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **transition** | optional | String: "both", "show", "hide", "none" | "both" | Sets when a transition is used |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay** | optional | Number | 0 | The show delay duration in milliseconds |
| **hideDelay** | optional | Number | 0 | The hide delay duration in milliseconds; no delay is used when the menu is dismissed, for instance by tapping outside of the menu |
| **didShow** | optional | Function |  | Callback function that is called when the show transition is done; receives param `id` |
| **didHide** | optional | Function |  | Callback function that is called when the hide transition is done; receives param `id` |



## Composition

Menu is usually composed from:

* [List](../polythene-list)
* [List Tile](../polythene-list-tile)

Menu also contains:

* [Shadow](../polythene-shadow) (when option `z` is not `0`)



## CSS classes

| **Element**    | **Key**     |  **Class** |
| -------------- | ----------- | --------------- |
| Component      | component   | `pe-menu` |
| Content        | content     | `pe-menu__content` |
| Placeholder    | placeholder | `pe-menu__placeholder` |
| Target         | target      | `pe-menu__target` |

| **State**      | **Key**     |  **Class** |
| -------------- | ----------- | --------------- |
| Visible        | visible     | `pe-menu--visible` |
| Permanent      | permanent   | `pe-menu--permanent` |
| Width          | width_n     | `pe-menu--width-` |
| Auto width     | width_auto  | `pe-menu--width-auto` |



## Future

* Take browser window into account to make sure that menu is always in view
* Scrolling high menu content, style scrollbar
* Cascading menus
