[Back to Polythene Dialog main page](../dialog.md)

# Dialog component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Calling a Dialog](#calling-a-dialog)
    - [Dialog spawner](#dialog-spawner)
    - [Multiple dialog spawners](#multiple-dialog-spawners)
    - [Multiple dialogs](#multiple-dialogs)
    - [Showing and hiding dialogs](#showing-and-hiding-dialogs)
      - [show](#show)
      - [hide](#hide)
    - [Callbacks](#callbacks)
  - [Drawing a Dialog](#drawing-a-dialog)
    - [Example with a Toolbar as custom header and footer](#example-with-a-toolbar-as-custom-header-and-footer)
    - [Example with modal and backdrop](#example-with-modal-and-backdrop)
    - [Full screen dialog](#full-screen-dialog)
  - [Dynamic content](#dynamic-content)
    - [Passing dialog options as a function](#passing-dialog-options-as-a-function)
      - [Continuously calling Dialog.show](#continuously-calling-dialogshow)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Dialog options](../dialog.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/t4uy26Lb/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>


<a id="calling-a-dialog"></a>
### Calling a Dialog

Other than most other components, `Dialog` is not rendered directly but invoked through function calls `show` and `hide`.

<a id="dialog-spawner"></a>
#### Dialog spawner

Dialogs will be spawned from the component invocation: `m(Dialog)`. To show a dialog instance, use `Dialog.show()` - more on that later.

Because a dialog should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components.

~~~javascript
import m from "mithril"
import { Dialog } from "polythene-mithril"

const app = {
  view: () => [
    // ... app content
    m(Dialog)
  ]
}
~~~

The Dialog component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom dialogs from anywhere in the app.

Style side notes:

* Writing the dialog at the bottom makes for less surprises (instead of using CSS only for positioning); Mobile Safari sometimes has surprises with `position: fixed`, so placing it here will most likely work as intended.
* The order of elements in the root view may differ - CSS attribute `z-index` is set higher than other content.


<a id="multiple-dialog-spawners"></a>
#### Multiple dialog spawners

Usually you'll use only one location for dialogs - on top of all content and centered on screen - but it is possible to have a dialog instance spawned from a different location.

When you are using multiple spawners, differentiate them with option `spawn`:

~~~javascript
m(Dialog, { spawn: "special" })
~~~

Calls to show the that particular dialog will then also need to pass the same spawn name:

~~~javascript
Dialog.show(dialogOptions, { spawn: "special" })
~~~

<a id="multiple-dialogs"></a>
#### Multiple dialogs

Multiple dialogs can co-exist for the same spawn. Add a unique `id` to each dialog. When using an array of dialogs, differentiate with unique `key`s.

<a id="showing-and-hiding-dialogs"></a>
#### Showing and hiding dialogs

Dialog functions:

~~~javascript
Dialog.show(options)
Dialog.hide(options)
~~~

<a id="show"></a>
##### show

Shows a new dialog instance.

`Dialog.show(dialogOptions, spawnOptions) : Promise`

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **dialogOptions** | required | Options object or Function that returns an options object | | See [Dialog options](../dialog.md) |

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions.id** | optional | String | "default_dialog" | Dialog instance id; use to differentiate simultaneous dialogs. |
| **spawnOptions.spawn** | optional | String | "default_dialog" | Spawn id. Use with multiple spawn locations. `spawn` must also be passed as option at the spawning Dialog. |


Examples:

~~~javascript
const dialogOptions = {
  body: "some text"
}

// variations:
Dialog.show(dialogOptions)
Dialog.show(dialogOptions, { id: "confirm" })
Dialog.show(dialogOptions, { spawn: "special" })
Dialog.show(dialogOptions).then(() => console.log("dialog shown"))
~~~

Calling `show` a second time with the same id will redraw the dialog with new options:

~~~javascript
Dialog.show(
  { title: "Log in" },
  { id: "login" }
)

// some time later:
Dialog.show(
  { title: "Log in again" },
  { id: "login" }
)
~~~


<a id="hide"></a>
##### hide

Hides the current dialog instance.

`Dialog.hide(spawnOptions) : Promise`

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions.id** | optional | String | "default_dialog" | Dialog instance id; use to differentiate simultaneous dialogs. |
| **spawnOptions.spawn** | optional | String | "default_dialog" | Spawn id. Use with multiple spawn locations. `spawn` must also be passed as option at the spawning Dialog. |

Examples:

~~~javascript
Dialog.hide()
Dialog.hide({ id: "confirm" })
Dialog.hide({ spawn: "special" })
Dialog.hide().then(() => console.log("dialog hidden"))
~~~

<a id="callbacks"></a>
#### Callbacks

Two optional callback options can be used after the transition: `didShow` and `didHide`. Useful when a route change is needed after the dialog is displayed or hidden:

~~~javascript
const dialogOptions = {
  didHide: id => m.route.set("/")
}
~~~


<a id="drawing-a-dialog"></a>
### Drawing a Dialog

A dialog pane consist of the elements:

* `header`
* `body`
* `footer`

Variations:

* The `header` can be substibuted with convenience option `title`: this draws the title text according to Material Design specs.
* The `footer` can be substibuted with convenience option `footerButtons`: this accepts an array of buttons and will be drawn  right-aligned according to Material Design specs.
* Use `fullBleed` to remove the padding from the body area
* Use `borders` to conditionally add a top and bottom border to the body


<a id="example-with-a-toolbar-as-custom-header-and-footer"></a>
#### Example with a Toolbar as custom header and footer

A dialog header can contain any content, but using a [Toolbar](../toolbar.md) is convenient to display action buttons (not according to Material Design specs, but nonetheless used in many interfaces).

~~~javascript
import m from "mithril"
import { Dialog, Toolbar, ToolbarTitle } from "polythene-mithril"

const dialogOptions = {
  header: m(Toolbar, {
    content: [
      m(ToolbarTitle, { text: "Title" })
    ]
  }),
  body: "Body", 
  footer: m(Toolbar, {
    content: [
      m(ToolbarTitle, { text: "Footer" })
    ]
  })
})

Dialog.show(dialogOptions)
~~~


<a id="example-with-modal-and-backdrop"></a>
#### Example with modal and backdrop

A modal dialog is a dialog that can only be closed with an explicit choice; clicking the background does not count as a choice.

To make this behavior explicit, a modal dialog often has a tinted backdrop. This also gives focus to the dialog contents.

~~~javascript
import m from "mithril"
import { Dialog, Button } from "polythene-mithril"

const footerButtons = [
  m(Button,
    { label: "Cancel" }
  ),
  m(Button,
    { label: "Discard" }
  )
]

const dialogOptions = {
  body: "Discard draft?",
  modal: true,
  backdrop: true,
  footerButtons
})

Dialog.show(dialogOptions)
~~~

<a id="full-screen-dialog"></a>
#### Full screen dialog

A full screen dialog uses [Toolbar](../toolbar.md) to implement its own header (options `title` and `footer` are not used).

<a href="https://jsfiddle.net/ArthurClemens/v4uhjnyx/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { Button, Toolbar, IconButton } from "polythene-mithril"
import { addLayoutStyles } from "polythene-css"

addLayoutStyles() // to use m(".flex")

const shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
const longText = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(() => shortText).join("")
const DIALOG_CONFIRM = "confirm-fullscreen"
const closeSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>"

const fullScreenToolbarRow = title => [
  m(IconButton, {
    icon: { svg: { content: m.trust(closeSVG) } },
    events: {
      onclick: () => Dialog.show(confirmDialogOpts, { id: DIALOG_CONFIRM })
    }
  }),
  m("span.flex", title),
  m(Button, {
    label: "Save",
    events: {
      onclick: () => Dialog.hide()
    }
  })
]

const confirmDialogOpts = ({
  body: "This event is not yet saved. Are you sure you want to delete this event?",
  modal: true,
  backdrop: true,
  footerButtons: [
    m(Button, {
      label: "Cancel",
      events: {
        onclick: () => Dialog.hide({ id: DIALOG_CONFIRM })
      }
    }),
    m(Button, {
      label: "Delete",
      events: {
        onclick: () => (
          Dialog
            .hide({ id: DIALOG_CONFIRM }) // hide confirm dialog
            .then(Dialog.hide) // hide main dialog
        )
      }
    })
  ],
})

Dialog.show({
  header: m(Toolbar,
    { content: fullScreenToolbarRow("New event") }
  ),
  body: m.trust(longText)),
  fullScreen: true
})
~~~


<a id="dynamic-content"></a>
### Dynamic content

There are 2 ways to keep the dialog contents up to date:

1. By passing dialog options as a function.
2. By continuously calling `Dialog.show(attrs)` with possibly changed attrs.

Examples of both are shown below.


<a id="passing-dialog-options-as-a-function"></a>
#### Passing dialog options as a function

When using static dialog content, passing a POJO as dialog options to `Dialog.show` works just fine. This falls short when the content needs to be updated with outside state changes. By passing the options as a function, you ensure that the options are read afresh with the new state:

~~~javascript
const optionsFn = () => {
  return {
    body: "some text"
  }
}

Dialog.show(optionsFn)
~~~


The more elaborate example below shows a file upload form, where the submit button is disabled until a file has been selected.

<a href="https://jsfiddle.net/ArthurClemens/0g6010eu/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { Dialog, Button } from "polythene-mithril"
import stream from "mithril/stream"

const file = stream(null)
file.map(m.redraw) // redraw whenever the file steam changes value

// Return a function so that the component attributes are not rendered statically
Dialog.show(() => 
  ({
    title: "Select a file...",
    body: m("input", {
      type: "file",
      id: "file",
      name: "file",
      onchange: e => file(e.target.value)
    }),
    formOptions: {
      name: "demo",
      method: "post",
      enctype: "multipart/form-data",
      onsubmit: e => {
        e.preventDefault()
        const form = e.target
        alert("Posted: " + form.file.value)
        Dialog.hide()
        file(null)
      }
    },
    footerButtons: [
      m(Button, {
        label: "Cancel",
        events: {
          onclick: () => Dialog.hide()
        }
      }),
      m(Button, {
        disabled: file() === null,
        label: "Post",
        element: "button",
        type: "submit"
      })
    ],
    didHide: () => file(null)
  })
)
~~~

<a id="continuously-calling-dialogshow"></a>
##### Continuously calling Dialog.show

The example shows a counter that is reflected in the dialog.

<a href="https://jsfiddle.net/ArthurClemens/pwLLjtL0/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { Dialog, Button } from "polythene-mithril"

const longText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"

const Updating = {
  oninit: vnode => {
    const dialogVisible = stream(false)
    dialogVisible.map(m.redraw) // redraw whenever this changes
    const count = stream(0)
    count.map(m.redraw) // redraw whenever this changes
    vnode.state = {
      dialogVisible,
      count
    }
    setInterval(() => count(count() + 1), 1000)
  },
  view: ({ state }) => {
    const dialogVisible = state.dialogVisible()
    if (dialogVisible) {
      const dialogProps = {
        title: state.count(),
        body: m.trust(longText),
        didHide: () => state.dialogVisible(false)
      }
      Dialog.show(dialogProps)
    }
    return m("div", [
      m("span", state.count()),
      m(Button, {
        raised: true,
        label: "Show Dialog",
        events: {
          onclick: () => state.dialogVisible(!dialogVisible)
        }
      })
    ])
  }
}
~~~



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Dialog appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { DialogCSS } from "polythene-css"

DialogCSS.addStyle(".themed-dialog", {
  color_light_content_background: "#2196F3",
  color_light_body_text: "#fff",
  border_radius: 5
})

m(Dialog, {
  className: "themed-dialog"
})
~~~

<a id="css"></a>
#### CSS

Change CSS using:

* [Dialog CSS classes](../../../packages/polythene-css-classes/dialog.js)
* [Dialog Pane CSS classes](../../../packages/polythene-css-classes/dialog-pane.js)

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/dialog"
~~~

~~~javascript
import classes from "polythene-css-classes/dialog-pane"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
Dialog.show({
  style: {
    background: "#fff59d",
    padding: "1.5rem"
  }
})
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Dialog content is reversed when the dialog element either:

* has attribute `dir="rtl"`
* has className `pe-rtl`


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)

