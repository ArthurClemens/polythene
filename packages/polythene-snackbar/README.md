# Notification and Snackbar

Shows a temporary message.

The information on this page refers to the **notification** component, but it also describes the **snackbar** component - both components use the same code base, and only differ in appearance (style and transitions).

**Notification** is a message that appears at the center of the screen. It is not used by Material Design in this form (there exists an Android-only notification which uses list tile for layout), but is a common enough design pattern to warrant a ready-made component.

**Snackbar** is a notification that appears at the bottom of the screen. To use snackbar, use the example code on this page and substitute `notification` with `snackbar`.

Importing notification:

~~~javascript
import m from "mithril";
import notification from "polythene-notification";
~~~

Importing snackbar:

~~~javascript
import m from "mithril";
import snackbar from "polythene-snackbar";
~~~



## Usage

Other than most other components, `notification` is invoked through function calls `show` and `hide`.

The notification component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom notifications from anywhere in the app.


#### Notification spawner

Notifications will be spawned from `m(notification)`. To show notification messages, use `notification.show()` - more on that later.

Because a notification should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components:

~~~javascript
import m from "mithril";
import notification from "polythene-notification";

const app = {
  view: () => [
    // ... app content
    // m(dialog) // if you use dialogs
    m(notification)
  ]
};
~~~

Side notes:

* Unless option `containerSelector` is used, the notifications holder will have CSS style `position: fixed`. This can be changed with CSS class `pe-notification__holder`.
* Writing the notification at the bottom makes for less surprises. Mobile Safari sometimes has surprises with `position: fixed`, so placing it here will most likely work as intended.
* The order of elements in the root view may differ - CSS attribute `z-index` is set higher than all other content.


#### Multiple notification spawners

Usually you'll use only one location for notifications - on top of all content and centered on screen - but it is possible to have notifications spawned from a different location.

If you are using multiple spawners, differentiate them with option `spawn`:

~~~javascript
m(notification, { spawn: "notifs" })
~~~

Calls to show the message will then also need to pass that spawn:

~~~javascript
notification.show(messageOptions, { spawn: "notifs" });
~~~

#### Spawner position

The notifications holder has by default CSS property `position: fixed`. This will float the messages on top of the content below. In order to show notifications inside a container, use option `position: "container"`:

~~~javascript
notification.show(messageOptions, { spawn: "notifs", position: "container" });
~~~

This will render the holder with `position: absolute`. The containing element needs to have `position: relative`.


### Showing and hiding messages

Notification functions:

~~~javascript
notification.show(options);
notification.hide(options);
notification.pause(options);
notification.unpause(options);
notification.count();
notification.clear();
~~~

#### show

Shows a new message.

`notification.show(messageOptions, spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **messageOptions** | required | Options object or Function that returns an options object | | See options table below |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

Examples:

~~~javascript
const messageOptions = {
  title: "This is the message"
};

notification.show(messageOptions);
notification.show(messageOptions, { spawn: "notifs" });
notification.show(messageOptions).then(() => console.log("notification shown"));
~~~

In case the notification contents needs to change when a state changes (for instance after user interaction, or after reading in translations), you should pass a function instead.

`optionsFn` is a function that returns an options object:

~~~javascript
const optionsFn = () => ({
  title: "This is the message"
});

notification.show(optionsFn);
~~~

Using a function ensures that the options are read afresh with the new state.



#### hide

Hides the current message.

`notification.hide(spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

Examples:

~~~javascript
notification.hide();
notification.hide({ spawn: "notifs" })
notification.hide().then(() => console.log("notification hidden"));
~~~

#### pause

Pauses the timer of the current message.

`notification.pause(spawnOptions)`

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

`notification.clear()`

If a message is on screen, this would suddenly disappear. You might first want to hide the current message before clearing all:

~~~javascript
onclick: () => {
  notification.hide().then(() => {
    notification.clear();
    m.redraw();
  });
}
~~~

#### count

Returns the number of messages.

`notification.count()`

Example:

~~~javascript
let messageCount = notification.count();
~~~



### Callbacks

Two optional callback options can be used after the transition: `didShow` and `didHide`.



### Example with action, dialog, pausing

Let's say the notification has an Undo button. Clicking it shows a dialog is on screen with OK/Cancel buttons. During the time the dialog is on screen, the notification is paused, so it will still there after the dialog Cancel button is clicked.
 
~~~javascript
import m from "mithril";
import notification from "polythene-notification";
import dialog from "polythene-dialog";
import button from "polythene-button";

const dialogOptions = {
  body: "You pressed a message action",
  footer: [
    m(button, {
      label: "Cancel",
      events: {
        onclick: () => {
          dialog.hide();
          notification.unpause();
        }
      }
    }),
    m(button, {
      label: "OK",
      events: {
        onclick: () => {
          dialog.hide();
          notification.hide();
        }
      }
    })
  ],
  backdrop: true,
  modal: true,
  hideDelay: .2
};

notification.show({
  title: "This is the message",
  layout: "vertical",
  action: m(button, {
    label: "Let me think about it",
    events: {
      onclick: () => {
        notification.pause();
        dialog.show(dialogOptions);
      }
    }
  })
})
~~~



## Appearance

### Styling

The default style of a notification is "dark themed": a dark background with light text. This can be inverted with option `theme: "light"`.

Below are examples how to change the notification appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
notification.theme(".blue-notification", {
  color_dark_background: "#2196F3",
  border_radius: 5
});

notification.show({
  class: "blue-notification",
  // ... other options
})
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
notification.show({
  style: {
    color: "orange",
    backgroundColor: "#4E342E"
  },
  // ... other options
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


### Transitions

The transitions for showing and hiding of notifications can be customized with transition options - see "Transition options" in the Options table below. For example:

~~~javascript
const messageOptions = {
  showDelay:    .1,
  hideDelay:    .1,
  showDuration: .1,
  hideDuration: .3
};
~~~

#### Custom transition

Use option `transitions` to define custom transition behaviour. See `src/theme/transitions.js` for the default behavior.

To create a fade in while moving up:

~~~javascript
const messageOptions = {
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
    }),
  // ... other options
}
~~~


#### Transitioning a container

In some situations it is desirable to animate more than just the notification message itself - for instance when the FAB button needs to move up and down together with the snackbar message. Both elements can be placed inside a container which then gets animated.

For this, specify option `containerSelector`:

~~~javascript
m("#notifs-area",
  {
    style: {
      position: "relative",
      height: "200px",
    }
  },
  m(notification, { spawn: "bottom" })
);

notification.show({
  spawn: "bottom",
  containerSelector: "#notifs-area",
  // more message options
});
~~~

Note that the container has `position: relative`. The messages will have `position: absolute`.



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **class**     | optional       | String   |             | Extra CSS class appended to `pe-notification` |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **id**        | optional       | String   |             | HTML element id |
| **content**   | optional       | Mithril element | | Alternative content; replaces `title` |
| **before**    | optional       | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **theme**     | optional       | String: "dark" or "light" | "dark" | If "dark", adds class `pe-dark-theme` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-theme`); use "light" to locally inverse (sets class `pe-light-theme`) |

### Notification specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **containerSelector** | optional | String |  | Selector of container HTML element that will be animated with the notification (does not need to be the direct parent); for instance if a FAB button needs to move together with the notification, both the FAB and notification will be placed in the same container; transitions will then move both simultaneously; if set, the notification's `position` will be `absolute` (default: `fixed`) |
| **title** | required | String | | Text |
| **action** | optional | Mithril element | | Will likely contain a button |
| **timeout** | optional | Number (seconds) | 3 | How long the notification should be displayed before it hides automatically; use `0` to not hide automatically |
| **dismissSelector** | optional | String | | Not used yet; will implement "Disappear after user interaction elsewhere" |

### Notification appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **layout** | optional | String: "horizontal" or "vertical" | "horizontal" | Sets the arrangement of the action; by default the action is placed right to the title, but longer action labels better fit below the title |

### Transition options

| **Parameter**    |  **Mandatory** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **transition**   | optional | String: "both", "show", "hide", "none" | "both" | Sets when a transition is used |
| **transitions**  | optional | Object | Module `src/theme/transitions.js` | Object with keys `show` and `hide` |
| **timeout**      |  |  | | See above |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay**    | optional | Number | 0 | The show delay duration in milliseconds |
| **hideDelay**    | optional | Number | 0 | The hide delay duration in milliseconds |
| **didShow**      | optional | Function |  | Callback function that is called when the `show` transition is done; receives param `id` |
| **didHide**      | optional | Function |  | Callback function that is called when the `hide` transition is done; receives param `id` |

### Spawn options

| **Parameter**  |  **Mandatory** | **Type** | **Default** | **Description** |
| -------------- | -------------- | -------- | ----------- | --------------- |
| **spawn**      | optional       | String   | "default_notification" | Snackbar spawner id |
| **id**         | optional       | String   | "default_notification" | Snackbar instance id |
| **position**   | optional       | String   | "screen" | Set to "container" to give the snackbar holder `position: absolute`, so it will be positioned relative to its container |


## Composition

Snackbar is composed from:

* [Multiple](../polythene-core)
* [Notification](../polythene-notification)



## CSS classes

Snackbar inherits some classes from [Notification](../polythene-notification).

| **Element**    | **Key**     |  **Class** |
| -------------- | ----------- | --------------- |
| Component      | component   | `pe-notification pe-snackbar` |
| Holder         | holder      | `pe-snackbar__holder` |
| Placeholder    | placeholder | `pe-snackbar__placeholder` |
| Content        | content     | `pe-notification__content` |
| Title          | title       | `pe-notification__title` |
| Action         | action      | `pe-notification__action` |

| **State**             | **Key**           |  **Class** |
| --------------------- | ----------------- | --------------- |
| Horizontal layout     | horizontal        | `pe-notification--horizontal` |
| Vertical layout       | vertical          | `pe-notification--vertical` |
| Has multi line title  | multilineTitle    | `pe-notification__title--multiline` |
| Has container         | hasContainer      | `pe-notification--container` |
| Is open               | isOpen            | `pe-snackbar--open` |



## Future

* Disappear after user interaction elsewhere
* Swipe off screen

