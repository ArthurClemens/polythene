[Back to Polythene Notification main page](../notification.md)

# Notification component for Mithril


## Options

[Notification options](../notification.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/baex75f0/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Other than most other components, `Notification` is not rendered directly but invoked through function calls `show` and `hide`.

The Notification component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom notifications from anywhere in the app.

### Notification spawner

Notifications will be spawned from `m(Notification)`. To show notification messages, use `Notification.show()` - more on that later.

Because a notification should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components:

~~~javascript
import m from "mithril"
import { Notification } from "polythene-mithril"

const app = {
  view: () => [
    // ... app content
    // m(Dialog) // if you use dialogs
    m(Notification)
  ]
}
~~~

Side notes:

* Unless option `containerSelector` is used, the notifications holder will have CSS style `position: fixed`. This can be changed with CSS class `pe-notification__holder`.
* Writing the notification at the bottom makes for less surprises. Mobile Safari sometimes has surprises with `position: fixed`, so placing it here will most likely work as intended.
* The order of elements in the root view may differ - CSS attribute `z-index` is set higher than all other content.

#### Multiple notification spawners

Usually you'll use only one location for notifications - on top of all content and centered on screen - but it is possible to have notifications spawned from a different location.

If you are using multiple spawners, differentiate them with option `spawn`:

~~~javascript
m(Notification, { spawn: "notifs" })
~~~

Calls to show the message will then also need to pass that spawn:

~~~javascript
Notification.show(messageOptions, { spawn: "notifs" })
~~~

#### Spawner position

The notifications holder has by default CSS property `position: fixed`. This will float the messages on top of the content below. In order to show notifications inside a container, use option `position: "container"`:

~~~javascript
Notification.show(messageOptions, { spawn: "notifs", position: "container" })
~~~

This will render the holder with `position: absolute`. The containing element needs to have `position: relative`.

### Notification functions

~~~javascript
Notification.show(options)
Notification.hide(options)
Notification.pause(options)
Notification.unpause(options)
Notification.count()
Notification.clear()
~~~

#### show

Shows a new message.

`Notification.show(messageOptions, spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **messageOptions** | required | Options object or Function that returns an options object | | See [Notification options](../notification.md) |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

Examples:

~~~javascript
const messageOptions = {
  title: "This is the message"
}

// variations:
Notification.show(messageOptions)
Notification.show(messageOptions, { spawn: "notifs" })
Notification.show(messageOptions).then(() => console.log("Notification shown"))
~~~

In case the notification contents needs to change when a state changes (for instance after user interaction, or after reading in translations), you should pass a function instead.

`optionsFn` is a function that returns an options object:

~~~javascript
const optionsFn = () => ({
  title: "This is the message"
})

Notification.show(optionsFn);
~~~

Using a function ensures that the options are read afresh with the new state.

#### hide

Hides the current message.

`Notification.hide(spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

Examples:

~~~javascript
Notification.hide()
Notification.hide({ spawn: "notifs" })
Notification.hide().then(() => console.log("Notification hidden"))
~~~

#### pause

Pauses the timer of the current message.

`Notification.pause(spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Returns nothing |

#### unpause

Unpauses the timer of the current message.

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Returns nothing |

#### clear

Clears the lists of messages.

`Notification.clear()`

If a message is on screen, this would suddenly disappear. You might first want to hide the current message before clearing all:

~~~javascript
Notification.hide(spawnOptions).then(() =>
  Notification.clear()
)
~~~

#### count

Returns the number of messages.

`Notification.count()`

Example:

~~~javascript
let messageCount = Notification.count()
~~~

### Callbacks

Callback functions that are called after the transition: `didShow` and `didHide`.

### Example with action, dialog, pausing

Let's say the notification has an Undo button. Clicking it shows a dialog is on screen with OK/Cancel buttons. During the time the dialog is on screen, the notification is paused, so it will still there after the dialog Cancel button is clicked.
 
~~~javascript
import m from "mithril"
import { Notification, Dialog, Button } from "polythene-mithril"

const dialogOptions = {
  body: "You pressed a message action",
  footer: [
    m(Button, {
      label: "Cancel",
      events: {
        onclick: () => {
          Dialog.hide()
          Notification.unpause()
        }
      }
    }),
    m(Button, {
      label: "OK",
      events: {
        onclick: () => {
          Dialog.hide()
          Notification.hide()
        }
      }
    })
  ],
  backdrop: true,
  modal: true,
  hideDelay: .2
};

Notification.show({
  title: "This is the message",
  layout: "vertical",
  action: m(Button, {
    label: "Let me think about it",
    events: {
      onclick: () => {
        Notification.pause()
        Dialog.show(dialogOptions)
      }
    }
  })
})
~~~


## Appearance

### Styling

The default style of a notification is "dark themed": a dark background with light text. This can be inverted with option `theme: "light"`.

Below are examples how to change the Notification appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~javascript
Notification.theme(".themed-notification", {
  color_dark_background: "#2196F3",
  border_radius: 5
})

m(Notification, {
  className: "themed-notification"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-notification/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-notification"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Notification, {
  style: {
    color: "orange",
    backgroundColor: "#4E342E"
  }
})
~~~

### Transitions

The transitions for showing and hiding of notifications can be customized with transition options - see "Transition options" in [Notification options](../notification.md). For example:

~~~javascript
{
  showDelay:    .1,
  hideDelay:    .1,
  showDuration: .1,
  hideDuration: .3
}
~~~

#### Custom transition

Use option `transitions` to define custom transition behaviour. See `src/theme/transitions.js` for the default behavior.

To create a fade-in while moving up:

~~~javascript
const messageOptions = {
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
}
~~~

#### Transitioning a container

**Instructions for Snackbar**

In some situations it is desirable to animate more than just the notification message itself - for instance when a FAB button needs to move up and down together with the Snackbar message. Both elements can be placed inside a container which then gets animated.

For this, specify option `containerSelector`.

Note that the container has `position: relative`. The messages will have `position: absolute`.

~~~javascript
m("#notifs-area",
  {
    style: {
      position: "relative",
      height: "200px",
    }
  },
  m(Snackbar, { spawn: "bottom" })
);

Snackbar.show({
  spawn: "bottom",
  containerSelector: "#notifs-area",
  // more message options
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


