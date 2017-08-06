[Back to Polythene Dialog main page](../dialog.md)

# Dialog component for Mithril


## Options

[Dialog options](../dialog.md)


## Usage

Other than most other components, `Dialog` is not rendered directly but invoked through function calls `show` and `hide`.


### Dialog spawner

Dialogs will be spawned from the component invocation: `m(Dialog)`. To show a dialog instance, use `Dialog.show()` - more on that later.

Because a dialog should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components:

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

### Multiple dialog spawners

Usually you'll use only one location for dialogs - on top of all content and centered on screen - but it is possible to have a dialog instance spawned from a different location.

When you are using multiple spawners, differentiate them with option `spawn`:

~~~javascript
m(Dialog, { spawn: "special" })
~~~

Calls to show the that particular dialog will then also need to pass the same spawn name:

~~~javascript
Dialog.show(dialogOptions, { spawn: "special" })
~~~

### Showing and hiding dialogs

Dialog functions:

~~~javascript
Dialog.show(options)
Dialog.hide(options)
~~~

#### show

Shows a new dialog instance.

`Dialog.show(dialogOptions, spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **dialogOptions** | required | Options object or Function that returns an options object | | See [Dialog options](../dialog.md) |
| **spawnOptions** | optional | Options object | | Pass `id` if you are using multiple simultaneous dialogs; pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

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

##### Dynamic content

In case the dialog contents needs to change when a state changes (for instance after user interaction, after loading translation strings, etcetera), you should pass a function instead.

`optionsFn` is a function that returns an options object:

~~~javascript
const optionsFn = () => ({
  body: "some text"
})

Dialog.show(optionsFn)
~~~

Using a function ensures that the options are read afresh with the new state.

#### hide

Hides the current dialog instance.

`Dialog.hide(spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `id` if you are using multiple simultaneous dialogs; pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

Examples:

~~~javascript
Dialog.hide()
Dialog.hide({ id: "confirm" })
Dialog.hide({ spawn: "special" })
Dialog.hide().then(() => console.log("dialog hidden"))
~~~

### Callbacks

Two optional callback options can be used after the transition: `didShow` and `didHide`. Useful when a route change is needed after the dialog is displayed or hidden:

~~~javascript
const dialogOptions = {
  didHide: id => m.route.set("/")
}
~~~

### Example with `modal` and `backdrop`

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
  footer: footerButtons
})

Dialog.show(dialogOptions)
~~~

### Fullscreen dialog

A fullscreen dialog uses [Toolbar](../toolbar.md) to implement its own header (options `title` and `footer` are not used):

~~~javascript
import m from "mithril"
import { renderer as h, Button, Toolbar, IconButton } from "polythene-mithril"
import { addLayoutStyles } from "polythene-utilities"

addLayoutStyles() // to use m(".flex")

const iconClose = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>"

const content = "Content..."

const toolbarRow = title => [
  m(IconButton, {
    icon: {
      svg: h.trust(iconClose)
    },
    events: {
      onclick: () => Dialog.hide()
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

const dialogOptions = {
  fullscreen: true,
  backdrop: true,
  content: [
    m(Toolbar,
      { content: toolbarRow("New event") }
    ),
    // content
    m("div",
      { style: { padding: "21px" } },
      m.trust(content)
    )
  ]
}

Dialog.show(dialogOptions)
~~~


## Appearance

### Styling

Below are examples how to change the Dialog appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~javascript
Dialog.theme(".themed-dialog", {
  color_light_content_background: "#2196F3",
  color_light_body_text: "#fff",
  border_radius: 5
})

m(Dialog, {
  className: "themed-dialog"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-dialog/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-dialog"
~~~

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

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


### Transitions

The transitions for showing and hiding of dialogs can be customized with transition options - see "Transition options" in the Options table below. For example:

~~~javascript
const messageOptions = {
  showDelay:    .1,
  hideDelay:    .1,
  showDuration: .1,
  hideDuration: .3
}
~~~

#### Custom transition

Use option `transitions` to define custom transition behaviour. See `src/theme/transitions.js` for the default behavior.

To create a fade in while moving up:

~~~javascript
const dialogOptions = {
  transitions: {
    show: el => ({
      el,
      showDuration: .5,
      beforeShow:   () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
      show:         () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
    }),
    hide: el => ({
      el,
      hideDuration: .5,
      hide:         () => el.style.opacity = 0
    })
}
~~~


