# Menu

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/menu">Demo</a>

A local popup menu with a list of choices. A menu contains one or more [lists](#list) with [list tiles](#list-tile) as menu elements.


## Usage

Menus float on top of other things, so they are visually similar to [dialogs](#dialog). But the behavior of menus is entirely different - instead of being displayed globally, their context is close to the caller (a button or clickable list item). The local nature of menus can be seen when scrolling a page: any open menu will scroll along with the page.

A number of ingredients must play together:

* A menu component
* A menu state (open or closed)
* A button (or link or clickable list item) to set the menu state; and to act as menu's target for positioning
* A container that holds both menu and button (or list)
* Because the menu is positioned `absolute`, the container must have style `position: relative`

Because we are using state, this can be best created with a custom component where we can store the "menu open" value in the controller.

~~~javascript
import m from 'mithril';
import { Menu, List, ListTile } from 'polythene';

const simpleContainer = {};
simpleContainer.controller = () => {
    return {
        open: false
    };
};
simpleContainer.view = ctrl => {
    return m('.container',
        m('a', {
            href: 'javascript: void(0)',
            id: 'simple_btn', // use as menu's target
            onclick: () => (ctrl.open = true) // opens at next redraw
        }, 'Open menu'),
        m(Menu, {
            target: 'simple_btn', // to align with the link
            offset: 0, // horizontally align with link
            show: ctrl.open, // should the menu be open or closed?
            didHide: () => (ctrl.open = false), // called after closing
            content: m(List, {
                tiles: [
                    m(ListTile, {
                        title: 'Yes',
                        ink: true
                    }),
                    m(ListTile, {
                        title: 'No',
                        ink: true
                    })
                ]
            })
        })
    );
};
~~~

In CSS:

~~~css
.container {
    position: relative;
}
~~~

### Hiding

A menu is closed by tapping outside of the menu, or by pressing ESCAPE.


### Positioning

To position a menu to another element, pass parameters `target` and `origin`.

To position the menu vertically to a selected menu item, the menu item must have the class "selected".
To override this behavior, pass `reposition: false`.


### Transitions

Transition properties are set in CSS, the duration is passed as component option.

A displayed menu contains the class `pe-menu--visible`.

CSS:

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

Transition settings in the options:

~~~javascript
const menuOptions = {
	showDuration: 100,
	hideDuration: 300
};
~~~


### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`.

~~~javascript
const menuOptions = {
    didHide: (id) => {
        m.route('/');
    }
};
~~~


### Dialog as simple menu

When a menu contains longer elements that don't fit on 1 line, MD guidelines suggest to use a [dialog](#dialog) instead. This will show a dialog with menu contents, centered on the screen.

A dialog can be used as menu by passing param `menu` to the dialog component:

~~~javascript
import { dialog, List, ListTile } from 'polythene';

Dialog.show(menuDialogOptions);

const menuDialogOptions = {
    class: 'demo-menu',
    menu: m(List, {
        hoverable: true,
        tiles: [
            createTile('Selected item', true, false),
            createTile('Normal item', false, false),
            createTile('Disabled item', false, true)
        ]
    }),
    hideDelay: 200,
    header: null,
    footer: null
};

const createTile = (title, selected, disabled) => {
    return m(ListTile, {
        title,
        selected,
        disabled,
        ink: true,
        events: {
            onclick: () => (dialog.hide())
        }
    });
};
~~~

### Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-menu' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Menu specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **visible** | required | Boolean | false | Set to true to show the menu |
| **content** | required | One or more Mithril elements | | Expects a [list](#list), or an array of lists |
| **target** | optional | String |  | HTML element id to position to |
| **reposition** | optional | Boolean | true | Set to `false` to not position the menu to the menu item ([list tile](#list-tile)) that has class "selected" |
| **show** | optional | Boolean | | Set to true to show the menu |

### Menu appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **offset** | optional | Number | 16 | Horizontal offset  |
| **origin** | optional | String: 'top-left', 'top-right', 'bottom-left', 'bottom-right' | 'top-left' (if `target` is specified) | Positioned menu corner |
| **size** | optional | Number: 1, 1.5, 2, 3, 4, 5, 6, 7; or 'auto' | | Multiplication factor of width unit (56px); with 'auto' the menu takes the width of the widest element |
| **permanent** | optional | Boolean |  | Set to true to always show the menu (mostly used for demonstration purposes) |

### Transition options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **transition** | optional | String: 'both', 'show', 'hide', 'none' | 'both' | Sets when a transition is used |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay** | optional | Number | 0 | The show delay duration in milliseconds |
| **hideDelay** | optional | Number | 0 | The hide delay duration in milliseconds; no delay is used when the menu is dismissed, for instance by tapping outside of the menu |
| **didShow** | optional | Function |  | Callback function that is called when the show transition is done; receives param `id` |
| **didHide** | optional | Function |  | Callback function that is called when the hide transition is done; receives param `id` |


## Future

* Take browser window into account to make sure that menu is always in view
* Scrolling high menu content, style scrollbar
* Cascading menus
