[Back to Polythene Notification main page](../notification.md)

# Notification component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Notification spawner](#notification-spawner)
    - [Multiple notification spawners](#multiple-notification-spawners)
    - [Spawner position](#spawner-position)
  - [Notification functions](#notification-functions)
    - [show](#show)
    - [hide](#hide)
    - [pause](#pause)
    - [unpause](#unpause)
    - [clear](#clear)
    - [count](#count)
  - [Callbacks](#callbacks)
  - [Example with action, dialog, pausing](#example-with-action-dialog-pausing)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)
    - [Transitioning a container](#transitioning-a-container)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Notification options](../notification.md)



<a id="usage"></a>
## Usage

Other than most other components, `Notification` is not rendered directly but invoked through function calls `show` and `hide`.

The Notification component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom notifications from anywhere in the app.


<a id="notification-spawner"></a>
### Notification spawner

Notifications will be spawned from `<Notification />`. To show notification messages, use `Notification.show()` - more on that later.

Because a notification should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQAZhQtBAAF8iDx+IIQBTpJBZPIxIp1fNNMBNAA5blsdhgTBiMVETQAETY6PcVoAQvYxGJoFaAEqYNh4fDO13QTSyzT6TQbbEAblqOpa+qNFtN5rFAGEAMqpoMhsNI2Jp1NRqC1eMmthmi3QPNCTD4fCp4pIAAUxiEMQE+C2UGNifLheIetqmk0kFW5AA+styOpRz49up3JR7EsUJpjABiMAAVgAjFuAGwAJmMRAHmh8EHI+EQY-I1bY9kBmg3tVlAEoC9HoLrUyIIAB3f1ulAWbYJQuAhlUK5AZoShej6BAAdAJ6DlgPiIAUxjfn+xhIZoiDMpqMD6MAwA4YYgHJqoYDqMuDYvuBhpdqWSbQEIMA-r+DYgRAuBCAIwSYO4iAAPLNGKMAvjhsqyieFhVO+UAxpoTL2iJPYwFmJFQWe+CRMuxgAJoQPYYa6PC+CaJgmh8TAAmIBZoqIcQJ4sBA3JXghsDLtQOFKB5OHIZgqHoSAyaLGAaHYVBg6DnhBFEZp0WJZoFaUdRmi0fRCVJYltr2qI7KILRBbZYlxbdmKQiLtgmD3oVb7+dF0lRY1TWJbJx7Nb5LqAQ1KFoYUQkANKRdlsWyIRxENYOKWlmlGX6BBWUlTadqrO4+WXkVU3RWVTE9htdXFSVrVJVJOGySezAnjOVH4KBy5iOQ9iIB1g58BANwPU9L0niIBXWmhmC6ZoQiHlAsryYpACC2DYFm80QSejIsp8iXI6yzhwjABpKpyf6aJ2cjVA1SiWToegdK6XTAr0zjggMHhQr4-iBOGhKXu9YS7PsFirhYhMlmWYq5As5CCWIhTTlgGjVKm5QWfAcDLgACjmsyaC55CaB6Zz7JoWwMQme1ikp4IQC8mCo9FfIoz5-JDlgwQ4wIeO-sTzWDujDtY87iCFBaYhINUUMOUBagE4xQvQDbAok-bmNO7jxiQHwESzLI7vLUomH-t1gbWbZqlifF21keoiDA8YIc9myQEC+VjmvctmgB0gekgFDTh-fh+BHttg7nGKy5dQGhYeyVfXBQAqksEAjc3MX4eNJfj8tM1UTRdELf2q-N7tUdQEI1W1Vtu-Lbla2sexDbKWtRefvVZ+nf3LUvxdu9SZo7-ZTHVuexY-I-7QXjo7bGScQCUDdlSOOLJvaJxdsYVuiBqgADUrwWjNPATQWBIhGTEL-GBGNQG+0KCnNOmpM4lWzuxDyVlED8UEvfWAK9lplwru3NBtgmJYJwXgvuT8kHtyhlASIp4bBWkWKIigEBggSJEWyVOBA2CuBaL+DgWDUJ0KZGANQgUkAtwgHQoQ-CF6D2gMPPyT8ApBUKDPfAc8QAv0XnFSaVjorrzmlvRaTikr72YofY+eBT4L2yhfCA602J-hvqtcJTDxJHRCUGHxZ0n7tRfrwl07d8JcMwfPbKn9v5JQIZ1ABttOogJ9uAyBlC0YVPgX7RBXgg5UgADJsHcOIAxsxik-zqWAhB6BU5rAztA3e1C-y0ILow0Sn4WElTYZXEAbSOktEAsgpyAimmICEV3FkBATHNzMVACxecx6JMnrY2eeTm5jVCHMxJHjN6ZR8aVSO-ij41SCY-RJOUYkROvrfWJMzYDfJ+SdBeKSF5pIEWsduqgVnXMSgUoB-9AE+VKbHcpsCE79IaRArCozenYuIeApB1QAAqZQ2w9KKX0khycIBDPTjyFF1sc6TPoTZaZal7lJQWe3Sl9Ne4bIXoIlcHd5EznIHIqRlBZEWXkco7ASiVGaDUfADRdk2yll0T4fRbojEHOWji327dWwEA7G8nsiKWpf1ZTS1FZTanEsqQM6phLaUuvqf7LZFKbywC8GJB11s6XgLIcMll21xm51HnQhhwlgUTSWnysQ5dFnkv9TAQNn4jUlTFcYZM943R8Bbpm7NsBc3ZUeosLNallzJuWpE38NF9RoSDF49KDabnwCbok-Ajh-HLkHEIDcvaQmoU1tspKCN0poVYvWRAQhuJ7C8KI0M9BcLwHnSURd1bYCaxLaGRBmasByAlPgBsG79y0GwAkK0tAJIgBfGO0VZaexPO3g2Od8wd1Luqjo4oWYtxWm-QulsmaD1ZmPTW09iBz2Xvvbeq0mgH3GAkm418L6Sp-UvC2zd7b6INi7ctNCWHlr9pvO+6KI6yN5rfUPdKHbQO-uXQBtdKHaNIvQxC7ayKSYYqAcGpQfia6FM9mE9wdqkYCfpFAHW5xrRCQALJCF0EsK8TYoJKBhnDaFg57FgHsCojwFQACi-RZCOkiAASQvcYLkPJ0NvjVIy7AHAryKBnEFIUaFEChy4GgLctBaAoH3BKOUCoQC8AEIoLIwQXMagUGgOUzAQCqA0AF6gioYtoG5mIIQl58KrGwMZx40hHBSDQACIEVU5xZEZRYPLFgjP4Ea7rfLhW0LcVK1wEgxRlWKFpBF7Lyo8tbHsXwArsVis9fK+QSrJgqaAisLV9aKc2vnHGw1lrG39hbcm51mbmpVR9ciANtAQ3ZSMFlEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Notification } from "polythene-react"

// ...
render() {
  return (<div>
    // ... app content
    // <Dialog /> // if you use dialogs
    <Notification />
  </div>)
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
<Notification spawn="notifs" />
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

This will render the holder with `position: absolute`. The container element needs to have `position: relative`.


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
| **messageOptions** | required | Options object or Function that returns an options object | | See [Notification options](../notification.md#options) |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

:fire: **Use a unique `key` for more reliable display of successive notifications.**


Examples:

~~~javascript
const messageOptions = {
  title: "This is the message",
  key: "This is the message"
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
  title: "This is the message",
  key: "This is the message"
})

Notification.show(optionsFn)
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

~~~jsx
import React from "react"
import { Notification, Dialog, Button } from "polythene-react"

const dialogOptions = {
  body: "You pressed a message action",
  footer: [
    <Button
      label="Cancel"
      events={{
        onClick: () => {
          Dialog.hide()
          Notification.unpause()
        }
      }}
    />,
    <Button
      label="OK"
      events={{
        onClick: () => {
          Dialog.hide()
          Notification.hide()
        }
      }}
    />
  ],
  backdrop: true,
  modal: true,
  hideDelay: .2
}

export default () =>
  <Button
    raised
    label="Show notification"
    events={{
      onClick: () =>
        Notification.show({
          title: "This is the message",
          key: "This is the message",
          layout: "vertical",
          action: <Button
            label="Let me think about it"
            events={{
              onClick: () => {
                Notification.pause()
                Dialog.show(dialogOptions)
              }
            }}
          />
        })
    }}
  />
~~~


<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

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

<Notification className="themed-notification" />
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

~~~jsx
<Notification
  style={{
    color: "orange",
    backgroundColor: "#4E342E"
  }}
/>
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

~~~jsx
<div
  id="notifs-area"
  style={{
    position: "relative",
    height: "200px",
  }}
>
  <Snackbar spawn="bottom" />
</div>

Snackbar.show({
  spawn: "bottom",
  containerSelector: "#notifs-area",
  // more message options
});
~~~

