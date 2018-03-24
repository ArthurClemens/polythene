[Back to Polythene Notification main page](../notification.md)

# Notification component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Notification spawner](#notification-spawner)
  - [Notification functions](#notification-functions)
  - [Callbacks](#callbacks)
  - [Example with action, dialog, pausing](#example-with-action-dialog-pausing)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Notification options](../notification.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/baex75f0/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Other than most other components, `Notification` is not rendered directly but invoked through function calls `show` and `hide`.

The Notification component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom notifications from anywhere in the app.


<a id="notification-spawner"></a>
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

<a id="multiple-notification-spawners"></a>
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

<a id="spawner-position"></a>
#### Spawner position

The notifications holder has by default CSS property `position: fixed`. This will float the messages on top of the content below. In order to show notifications inside a container, use option `position: "container"`:

~~~javascript
Notification.show(messageOptions, { spawn: "notifs", position: "container" })
~~~

This will render the holder with `position: absolute`. The containing element needs to have `position: relative`.


<a id="notification-functions"></a>
### Notification functions

~~~javascript
Notification.show(options)
Notification.hide(options)
Notification.pause(options)
Notification.unpause(options)
Notification.count()
Notification.clear()
~~~

<a id="show"></a>
#### show

Shows a new message.

`Notification.show(messageOptions, spawnOptions)`

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
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

<a id="hide"></a>
#### hide

Hides the current message.

`Notification.hide(spawnOptions)`

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

Examples:

~~~javascript
Notification.hide()
Notification.hide({ spawn: "notifs" })
Notification.hide().then(() => console.log("Notification hidden"))
~~~

<a id="pause"></a>
#### pause

Pauses the timer of the current message.

`Notification.pause(spawnOptions)`

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Returns nothing |

<a id="unpause"></a>
#### unpause

Unpauses the timer of the current message.

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Returns nothing |

<a id="clear"></a>
#### clear

Clears the lists of messages.

`Notification.clear()`

If a message is on screen, this would suddenly disappear. You might first want to hide the current message before clearing all:

~~~javascript
Notification.hide(spawnOptions).then(() =>
  Notification.clear()
)
~~~

<a id="count"></a>
#### count

Returns the number of messages.

`Notification.count()`

Example:

~~~javascript
let messageCount = Notification.count()
~~~


<a id="callbacks"></a>
### Callbacks

Callback functions that are called after the transition: `didShow` and `didHide`.


<a id="example-with-action-dialog-pausing"></a>
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



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

The default style of a notification is "dark themed": a dark background with light text. This can be inverted with option `theme: "light"`.

Below are examples how to change the Notification appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { NotificationCSS } from "polythene-css"

NotificationCSS.addStyle(".themed-notification", {
  color_dark_background: "#2196F3",
  border_radius: 5
})

m(Notification, {
  className: "themed-notification"
})
~~~

<a id="css"></a>
#### CSS

Change CSS using the CSS classes:

* [Notification CSS classes](../../../packages/polythene-css-classes/notification.js)
* [Snackbar CSS classes](../../../packages/polythene-css-classes/snackbar.js)

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/notification"
~~~

~~~javascript
import classes from "polythene-css-classes/snackbar"
~~~

<a id="style"></a>
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

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)

<a id="transitioning-a-container"></a>
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



