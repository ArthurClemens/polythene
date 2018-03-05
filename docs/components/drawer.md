# Drawer

Navigation panel that appears with a cover or push animation, or can be placed permanently.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Drawer specific options](#drawer-specific-options)
  - [Transition options](#transition-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a name="main-features"></a>
## Main features

* Choose between cover or push animation, or create a custom transition
* Optional mini behavior (expanding from an icon-only view)
* Optionally display permanently as side menu
* Optionally add a backdrop, shadow or border
* Optionally place at the right side
* RTL (right-to-left) support

<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/drawer.md)
* [Usage with React](react/drawer.md)



<a name="options"></a>
## Options

<a name="drawer-specific-options"></a>
### Drawer specific options

| **Parameter** |  **Required** | **Type**   | **Default**     | **Description** |
| ------------- | ------------- | ---------- | --------------- | --------------- |
| **show**      | optional      | Boolean    |                 | Set to `true` to reveal the drawer, `hide` to hide a displayed drawer |
| **permanent** | optional      | Boolean    |                 | Set to `true` to display the drawer as a permanent side menu |
| **push**      | optional      | Boolean    | `false` (cover) | Set to `true` to animate the drawer with a push animation, pushing away the content next to the drawer | 
| **mini**      | optional      | Boolean    |                 | Set to `true` to display a fraction of the drawer (typically to show the icons only), and to reveal the full menu when expanding |
| **floating**  | optional      | Boolean    |                 | Variant of `permanent`; additionally set this to `true` to display the drawer as a "floating" block (instead of full height) |
| **anchor**    | optional      | String     | "start"         | Set to "end" to reveal the drawer from the far (right) side; with RTL "end" becomes the left side |
| **bordered**  | optional      | Boolean    |                 | Useful with a permanent or pushing drawer when no shadow is used; set to `true` to create a border at the right side; with RTL the border is shown at the left side |
| **fixed**     | optional      | Boolean    |                 | Set to `true` to give the drawer CSS property `position: fixed`; useful for an app drawer (that must be shown covering all content) when it is drawn from a deeper component |
| **z**         | optional      | Number 0-5 | 0 | Depth of the shadow; 0 will show no shadow |
| **backdrop**  | optional      | Boolean    | false | Set to `true` to show a backdrop background color |
| **modal**     | optional      | Boolean    | false | Set to true to create a modal drawer; tapping the backdrop or pressing ESCAPE will not close the drawer |


<a name="transition-options"></a>
### Transition options

| **Parameter**    |  **Required** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **transition**   | optional | String: "both", "show", "hide", "none" | "both" | Sets when a transition is used |
| **transitions**  | optional | Object | Module `src/transitions.js` | Object with functions for keys `show` and `hide`; see "Usage" for an example |
| **showDuration** | optional | Number | .220 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .220 | The hide transition duration in seconds |
| **showDelay**    | optional | Number | 0 | The show delay duration in seconds |
| **hideDelay**    | optional | Number | 0 | The hide delay duration in seconds; no delay is used when the drawer is dismissed, for instance by tapping outside of the drawer (when not a modal) |
| **didShow**      | optional | Function `(id::String) -> undefined` |  | Callback function that is called when the show transition is done |
| **didHide**      | mostly required | Function `(id::String) -> undefined` |  | Callback function that is called when the hide transition is done |

<a name="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "form"      | HTML element tag |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-drawer` |
| **style**     | optional       | Object   |             | For setting simple style attributes; will be applied to `pe-dialog__content` |
| **id**        | optional       | String   |             | HTML element id |
| **content**   | optional       | String, hyperscript or component | | Alternative content; replaces `body` |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a name="composition"></a>
## Composition

Drawer is composed from:

* [Dialog](dialog.md)


<a name="css-classes"></a>
## CSS classes

* [Drawer classes](../../packages/polythene-css-classes/drawer.js)
