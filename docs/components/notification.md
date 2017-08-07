# Notification

Shows a temporary message.

The information on this page refers to the **Notification** component, but it also describes the **Snackbar** component - both components use the same code base, and only differ in appearance (style and transitions).

**Notification** is a message that appears at the center of the screen. It is not used by Material Design in this form (although there exists an Android-only notification which uses list tiles for layout), but is a common enough design pattern to warrant a ready-made component.

**Snackbar** is a notification that appears at the bottom of the screen. To use Snackbar, use the example code on this page and substitute `Notification` with `Snackbar`.


## Main features

* Set timeout duration
* Pause/resume 
* Horizontal or vertical layout
* Custom transitions
* Spawn notifications from different locations


## Usage

* [Usage with Mithril](mithril/notification.md)
* [Usage with React](react/notification.md)


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-notification` |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **id**        | optional       | String   |             | HTML element id |
| **content**   | optional       | String, hyperscript or component | | Alternative content; replaces `title` |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Notification specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **containerSelector** | optional | String |  | Selector of container HTML element that will be animated with the Notification (does not need to be the direct parent); for instance if a FAB button needs to move together with the Notification, both the FAB and Notification will be placed in the same container; transitions will then move both simultaneously; if set, the Notification's `position` will be `absolute` (default: `fixed`) |
| **title** | required | String | | Text |
| **action** | optional | String, hyperscript or component | | Will likely contain a button |
| **timeout** | optional | Number (seconds) | 3 | How long the Notification should be displayed before it hides automatically; use `0` to not hide automatically |
| **dismissSelector** | optional | String | | Not used yet; will implement "Disappear after user interaction elsewhere" |

### Notification appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **layout** | optional | String: "horizontal" or "vertical" | "horizontal" | Sets the arrangement of the action; by default the action is placed right to the title, but longer action labels better fit below the title |

### Transition options

| **Parameter**    |  **Mandatory** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **transition**   | optional | String: "both", "show", "hide", "none" | "both" | Sets when a transition is used |
| **transitions**  | optional | Object | Module `src/theme/transitions.js` | Object with functions for keys `show` and `hide`; see "Usage" for an example |
| **timeout**      |  |  | | See "Notification specific options" above |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay**    | optional | Number | 0 | The show delay duration in milliseconds |
| **hideDelay**    | optional | Number | 0 | The hide delay duration in milliseconds |
| **didShow**      | optional | Function |  | Callback function that is called when the `show` transition is done; receives param `id` |
| **didHide**      | optional | Function |  | Callback function that is called when the `hide` transition is done; receives param `id` |

### Spawn options

| **Parameter**  |  **Mandatory** | **Type** | **Default** | **Description** |
| -------------- | -------------- | -------- | ----------- | --------------- |
| **spawn**      | optional       | String   | "default_notification" | Notification spawner id |
| **id**         | optional       | String   | "default_notification" | Notification instance id |
| **position**   | optional       | String   | "screen" | Set to "container" to give the Notification holder `position: absolute`, so it will be positioned relative to its container |


## Composition

Notification is composed from:

* Multi (`polythene-core`)


## CSS classes

See: `polythene-core-notification/src/classes.js`
