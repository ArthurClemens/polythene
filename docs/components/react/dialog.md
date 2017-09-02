[Back to Polythene Dialog main page](../dialog.md)

# Dialog component for React


## Options

[Dialog options](../dialog.md)


## Usage

### Calling a Dialog

Other than most other components, `Dialog` is not rendered directly but invoked through function calls `show` and `hide`.

#### Dialog spawner

Dialogs will be spawned from the component invocation (`<Dialog />`). To show a dialog instance, use `Dialog.show()` - more on that later.

Because a dialog should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components:

##### With JSX

<a href="https://jsfiddle.net/ArthurClemens/m08o291L/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Dialog } from "polythene-react"

// ...
render() {
  return (<div>
    // ... app content
    <Dialog  />
  </div>)
}
~~~

##### With hyperscript

~~~javascript
import { renderer as h, Dialog } from "polythene-react"

h("div", [
  // ... app content
  h(Dialog)
])
~~~

The Dialog component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom dialogs from anywhere in the app.

Styling side notes:

* Writing the dialog at the bottom makes for less surprises (instead of using CSS only for positioning); Mobile Safari sometimes has surprises with `position: fixed`, so placing it here will most likely work as intended.
* The order of elements in the root view may differ - CSS attribute `z-index` is set higher than other content.


#### Multiple dialog spawners

Usually you'll use only one location for dialogs - on top of all content and centered on screen - but it is possible to have a dialog instance spawned from a different location.

When you are using multiple spawners, differentiate them with option `spawn`:

~~~jsx
<Dialog spawn="special" />
~~~

or with hyperscript:

~~~javascript
h(Dialog, { spawn: "special" })
~~~

Calls to show the that particular dialog will then also need to pass the same spawn name:

~~~javascript
Dialog.show(dialogOptions, { spawn: "special" })
~~~

#### Showing and hiding dialogs

Dialog functions:

~~~javascript
Dialog.show(options)
Dialog.hide(options)
~~~

##### show

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

###### Dynamic content

**NOTE: the following only applies to passing options as a POJO. For React, the better alternative is to manage state in a DialogPane wrapper component. See a more complete example below at "Conditional footer buttons".**

When passing a POJO object to `Dialog.show`, the object contents is rendered statically and changes will not get reflected properly. Passing the options as a function ensures that the options are read afresh with the new state:

~~~javascript
const optionsFn = () => {
  return {
    body: "some text"
  }
}

Dialog.show(optionsFn)
~~~


##### hide

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

#### Callbacks

Two optional callback options can be used after the transition: `didShow` and `didHide`. Useful when a route change is needed after the dialog is displayed or hidden:

~~~javascript
const dialogOptions = {
  didHide: id => history.push("/")
}
~~~

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


#### Example with a Toolbar as custom header and footer

A dialog header can contain any content, but using a [Toolbar](../toolbar.md) is convenient to display action buttons (not according to Material Design specs, but nonetheless used in many interfaces).

##### With JSX

~~~jsx
import React from "react"
import { Dialog, Toolbar, ToolbarTitle } from "polythene-react"

const dialogOptions = {
  header: <Toolbar><ToolbarTitle>Title</ToolbarTitle></Toolbar>,
  body: "Body",
  footer: <Toolbar><ToolbarTitle>Footer</ToolbarTitle></Toolbar>,
}

Dialog.show(dialogOptions)
~~~

##### With hyperscript

~~~javascript
import { renderer as h, Dialog, Toolbar, ToolbarTitle } from "polythene-react"

const dialogOptions = {
  header: h(Toolbar, {
    content: [
      h(ToolbarTitle, { text: "Title", key: "title" })
    ]
  }),
  body: "Body", 
  footer: h(Toolbar, {
    content: [
      h(ToolbarTitle, { text: "Footer", key: "footer" })
    ]
  })
})

Dialog.show(dialogOptions)
~~~

#### Example with modal and backdrop

A modal dialog is a dialog that can only be closed with an explicit choice; clicking the background does not count as a choice.

To make this behavior explicit, a modal dialog often has a tinted backdrop. This also gives focus to the dialog contents.

##### With JSX

~~~jsx
import React from "react"
import { Dialog } from "polythene-react"

const footerButtons = [
  /* Note that we are passing JSX elements in an array, hence the comma separator and keys */
  <Button key="cancel" label="Cancel" events={{ onClick: () => Dialog.hide() }} />,
  <Button key="discard" label="Discard" events={{ onClick: () => Dialog.hide() }} />
]

const dialogOptions = {
  body: "Discard draft?",
  modal: true,
  backdrop: true,
  footerButtons
}

Dialog.show(dialogOptions)
~~~

##### With hyperscript

~~~javascript
import { renderer as h, Dialog, Button } from "polythene-react"

const footerButtons = [
  h(Button,
    {
      label: "Cancel",
      onClick: Dialog.hide
    }
  ),
  h(Button,
    {
      label: "Discard",
      onClick: Dialog.hide
    }
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

#### Full screen dialog

A full screen dialog uses [Toolbar](../toolbar.md) to implement its own header (options `title` and `footer` are not used):

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/npq4phf3/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Dialog, Button, Toolbar, IconButton } from "polythene-react"
import { addLayoutStyles } from "polythene-utilities"

addLayoutStyles() // to use <span className="flex" />

const DIALOG_CONFIRM = "confirm-fullscreen"
const iconClose = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const BodyText = () => (
  <div>
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => <p key={num}>{shortText}</p>)}
  </div>
)

// Second dialog
const confirmDialogOpts = ({
  body: "This event is not yet saved. Are you sure you want to delete this event?",
  modal: true,
  backdrop: true,
  footerButtons: [
    <Button
      label="Cancel"
      events={{
        onClick: () => Dialog.hide({ id: DIALOG_CONFIRM })
      }}
    />,
    <Button
      label="Delete"
      events={{
        onClick: () => (
          // hide confirm dialog
          Dialog.hide({ id: DIALOG_CONFIRM }),
          // hide main dialog
          Dialog.hide()
        )
      }}
    />
  ],
})

Dialog.show({
  fullScreen: true,
  backdrop: true,
  header: <Toolbar content={toolbarRow("New event")} />,
  body: <BodyText />
})
~~~

##### With hyperscript

~~~javascript
import { renderer as h, Button, Toolbar, IconButton } from "polythene-react"
import { addLayoutStyles } from "polythene-utilities"

addLayoutStyles() // to use h(".flex")

const iconClose = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>"
const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const content = "Content..."

const toolbarRow = title => [
  h(IconButton, {
    key: "close",
    icon: {
      svg: h.trust(iconClose)
    },
    events: {
      onClick: () => Dialog.hide()
    }
  }),
  h("span.flex", { key: "spacer" }, title),
  h(Button, {
    key: "save",
    label: "Save",
    events: {
      onClick: () => Dialog.hide()
    }
  })
]

const dialogOptions = {
  fullScreen: true,
  backdrop: true,
  header: h(Toolbar,
    { content: toolbarRow("New event") }
  ),
  body: h.trust(content)
}

Dialog.show(dialogOptions)
~~~

#### Dynamic content: conditional footer buttons

To create dynamic dialog content, create a DialogPane wrapper component.

The example dialog shows a file upload form, where the submit button is disabled until a file has been selected.

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/1fgh0bgt/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React, { Component } from "react"
import { Button, Dialog, DialogPane } from "polythene-react"

class ConditionalDialogPane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: undefined
    }
  }
  render() {
    const disabled = this.state.file === undefined
    return (
      <DialogPane
        title="Select a file..."
        body={<input
          type="file"
          id="file"
          name="file"
          onChange={e => this.setState({file: e.target.value})}
        />}
        formOptions={{
          name: "demo",
          type: "post",
          encType: "multipart/form-data",
          onSubmit: e => {
            e.preventDefault()
            alert("Posted: " + this.state.file)
            Dialog.hide()
            this.setState({file: null})
          }
        }}
        footerButtons={<div>
          <Button
            label="Cancel"
            events={{
              onClick: () => Dialog.hide()
            }}
          />
          <Button
            disabled={disabled}
            label="Post"
            type="submit"
            element="button"
            events={{
              onClick: () => Dialog.hide()
            }}
          />
        </div>}
        didHide={() => this.setState({file: null})}
      />
    )
  }
}

Dialog.show({
  panes: [<ConditionalDialogPane />]  
})
~~~


## Appearance

### Styling

Below are examples how to change the Dialog appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
Dialog.theme(".themed-dialog", {
  color_light_content_background: "#2196F3",
  color_light_body_text: "#fff",
  border_radius: 5
})

<Dialog className="themed-dialog" />
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
    show: ({ el }) => ({
      el,
      showDuration: .5,
      beforeShow:   () => (
        el.style.opacity = 0,
        el.style.transform = "translate3d(0, 20px, 0)"
      ),
      show:         () => (
        el.style.opacity = 1,
        el.style.transform = "translate3d(0, 0px,  0)"
      )
    }),
    hide: ({ el }) => ({
      el,
      hideDuration: .5,
      hide:         () => el.style.opacity = 0
    })
}
~~~


