# Notification

Shows a temporary message.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Notifications and Snackbars](#notifications-and-snackbars)
- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Notification specific options](#notification-specific-options)
  - [Notification appearance options](#notification-appearance-options)
  - [Spawn options](#spawn-options)
  - [Transition options](#transition-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a id="notifications-and-snackbars"></a>
## Notifications and Snackbars

The information on this page refers to the **Notification** component, but it also describes the **Snackbar** component - both components use the same code base, and only differ in appearance (style and transitions).

**Notification** is a message that appears at the center of the screen. It is not used by Material Design in this form (although there exists an Android-only notification which uses list tiles for layout), but is a common enough design pattern to warrant a ready-made component.

**Snackbar** is a notification that appears at the bottom of the screen. To use Snackbar, use the example code on this page and substitute `Notification` with `Snackbar`.


<a id="main-features"></a>
## Main features

* Set timeout duration
* Pause/resume 
* Horizontal or vertical layout
* Custom transitions
* Spawn notifications from different locations


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/notification.md)
* [Usage with React](react/notification.md)


<a id="options"></a>
## Options

<a id="notification-specific-options"></a>
### Notification specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **action** | optional | String, hyperscript or component | | Action element; will likely contain a button |
| **containerSelector** | optional | String |  | Selector of container HTML element that will be animated with the Notification (does not need to be the direct parent); for instance if a FAB button needs to move together with the Notification, both the FAB and Notification will be placed in the same container; transitions will then move both simultaneously; if set, the Notification's `position` will be `absolute` (default: `fixed`) |
| **timeout** | optional | Number (seconds) | 3 | Duration (in seconds) to show the Notification. After this the Notification hides automatically. Use `0` to not hide automatically. |
| **title** | required | String | | Text |

<a id="notification-appearance-options"></a>
### Notification appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **layout** | optional | String: "horizontal" or "vertical" | "horizontal" | Sets the arrangement of the action; by default the action is placed right to the title, but longer action labels better fit below the title |


<a id="spawn-options"></a>
### Spawn options

| **Parameter**  |  **Required** | **Type** | **Default** | **Description** |
| -------------- | -------------- | -------- | ----------- | --------------- |
| **id**         | optional       | String   | "default_notification" | Notification instance id |
| **position**   | optional       | String   | "screen" | Set to "container" to give the Notification holder CSS style `position: absolute`. The container element needs to have `position: relative`. |
| **spawn**      | optional       | String   | "default_notification" | Notification spawner id |

<a id="transition-options"></a>
### Transition options

See: [Transitions](../transitions.md)

<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-notification` |
| **content**   | optional       | String, hyperscript or component | | Alternative content; replaces `title` |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **id**        | optional       | String   |             | HTML element id |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a id="composition"></a>
## Composition

Notification is composed from:

* Multi (`polythene-core`)

<a id="css-classes"></a>
## CSS classes

* [Notification classes](../../packages/polythene-css-classes/notification.js)
* [Snackbar classes](../../packages/polythene-css-classes/snackbar.js)

